const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { TEAM, DRIVER, NATIONALITY, RESULTSTATUS, DRIVERSTATUS, VISUALTYRECOMPOUND, SESSIONTYPE } = require('./LookupData')

//set up express
const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

//set up socket.io
//const io = socketIo(server, { cors: { origin: 'http://localhost:3000', methods: ['GET','POST']}});
const io = socketIo(server, { cors: { origin: '*', methods: ['GET','POST']}});

//set up f1-telemetry-client
const { F1TelemetryClient, constants } = require('@racehub-io/f1-telemetry-client')
const { PACKETS } = constants;

const f1Client = new F1TelemetryClient({port: 20777, bigintEnabled: false})
f1Client.start()

// f1Client.on(PACKETS.event, console.log); 
// f1Client.on(PACKETS.motion, console.log); 
// f1Client.on(PACKETS.carSetups, console.log); 
// f1Client.on(PACKETS.lapData, console.log); 
// f1Client.on(PACKETS.session, console.log); 
// f1Client.on(PACKETS.participants, console.log); 
// f1Client.on(PACKETS.carTelemetry, console.log); 
// f1Client.on(PACKETS.carStatus, console.log); 
// f1Client.on(PACKETS.finalClassification, console.log); 
// f1Client.on(PACKETS.lobbyInfo, console.log); 
// f1Client.on(PACKETS.carDamage, console.log);
// f1Client.on(PACKETS.sessionHistory, console.log);

class DriverInfo {

    driverId;
    networkId;
    driverName;
    driverShortName;
    driverGameName;
    driverNationality;
    driverNationalityName;
    driverNumber;
    driverTeam;
    driverTeamName;
    bestLapNumber = 0;
    bestLapTimeInMS = 0;
    carPosition = 0;
    resultStatus = -1;
    resultStatusText = '';
    driverStatus = -1;
    driverStatusText = '';
    gridPosition = 0;
    numPitStops = 0;
    penalties = 0;
    driveThroughs = 0;
    stopGos = 0;
    currentTyre = -1;
    currentTyreAge = 0;
    lapDistance = 0;
    currentLapTimeInMS = 0;
    lastLapTimeInMS = 0;
    totalPreviousLapTimesInMS = 0;
    currentMarshalZone = -1;
    currentLapNum = 0;
    checkpoints = [];
    checkpointCount = -1;

    constructor(driverId, networkId, driverName, driverShortName, driverGameName, driverNationality, driverNumber, driverTeam) {
        this.driverId = driverId;
        this.networkId = networkId;
        this.driverGameName = driverGameName;
        this.driverNationality = driverNationality;
        this.driverNumber = driverNumber;
        this.driverTeam = driverTeam;
        
        //populate the lookups
        const driver = DRIVER.filter(obj => obj.id === driverId)[0]
        const nationality = NATIONALITY.filter(obj => obj.id === driverNationality)[0]
        const team = TEAM.filter(obj => obj.id === driverTeam)[0]
        
        if (driver !== undefined) {
            
            this.driverName = driver.lastname || '';
            this.driverShortName = driver.shortname || '';
        }
        
        if (nationality !== undefined) {

            this.driverNationalityName = nationality.nationality || '';
        }
        
        if (team !== undefined) {
            
            this.driverTeamName = team.team || ''
        }
    }
}

class SessionInfo {

    currentSession = -1;
    currentSessionText = '';
    sessionDuration = 0;
    sessionTimeRemaining = 0;
    totalLaps = 0;
    currentLap = 0;
    numberMarshalZones = 0;

    constructor() {

    }
}

//do the stuff
let interval
const maxDrivers = 22
let driverInfos = new Array(maxDrivers)
let sessionInfo

let numMarshalZones = 0
let trackLength = 0
const maxMarsalZones = 21
let marshalZonesLength = new Array(maxMarsalZones)

io.on("connection", (socket) => {
    
    console.log("New client connected");
    
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    
    });

    f1Client.on(PACKETS.event, sendEventData);
    
    f1Client.on(PACKETS.lapData, (data) => {
        sendLapData(data)
        processLapData(data)
    });
    
    f1Client.on(PACKETS.session, (data) => {
        sendSessionData(data)
        processSessionData(data)
    });

    f1Client.on(PACKETS.participants, (data) => {
        sendParticipantsData(data)
        processParticipantsData(data)
    });

    f1Client.on(PACKETS.carStatus, (data) => {
        sendCarStatusData(data)
        processCarStatus(data)
    });

    f1Client.on(PACKETS.sessionHistory, (data) => {
        sendSessionHistoryData(data)
        processSessionHistoryData(data)
    });

    //currently unused packets
    //f1Client.on(PACKETS.motion, sendMotionData);
    //f1Client.on(PACKETS.carSetups, sendCarSetupsData);
    //f1Client.on(PACKETS.finalClassification, sendFinalClassificationData);
    //f1Client.on(PACKETS.lobbyInfo, sendLobbyInfoData);
    //f1Client.on(PACKETS.carDamage, sendCarDamageData);
    //f1Client.on(PACKETS.carTelemetry, sendCarTelemetryData);

    function sendDriverInfos() {
        socket.emit('driverInfo', driverInfos);
        socket.emit('DriverInfoTimestamp', new Date());
    }

    function sendSessionInfo() {
        console.log(sessionInfo)

        socket.emit('sessionInfo', sessionInfo);
        socket.emit('SessionInfoTimestamp', new Date());
    }

    function sendEventData(data) {
        //console.log(data)
        socket.emit(PACKETS.event, data)
        socket.emit('EventTimestamp', new Date())
    }

    function sendMotionData(data) {
        //console.log(data)
        socket.emit(PACKETS.motion, data)
        socket.emit('MotionTimestamp', new Date())
    }

    function sendCarSetupsData(data) {
        //console.log(data)
        socket.emit(PACKETS.carSetups, data)
        socket.emit('CarSetupsTimestamp', new Date())
    }

    function sendLapData(data) {
        //console.log(data)
        socket.emit(PACKETS.lapData, data)
        socket.emit('LapDataTimestamp', new Date())
    }

    function processLapData(data) {
        
        for (let index = 0; index < data.m_lapData.length; index++) {
            
            const lapData = data.m_lapData[index];

            //console.log('Processing Participant ' + index)
            //console.log(participant)
            //console.log(driverInfos[index])
            
            if (lapData === null || driverInfos[index] === undefined) {
                //do nothing - yet
            } else {
                //update the object
                driverInfos[index].carPosition = lapData.m_carPosition;
                driverInfos[index].resultStatus = lapData.m_resultStatus;
                driverInfos[index].resultStatusText = RESULTSTATUS[lapData.m_resultStatus];
                driverInfos[index].driverStatus = lapData.m_driverStatus;
                driverInfos[index].driverStatusText = DRIVERSTATUS[lapData.m_driverStatus];
                driverInfos[index].gridPosition = lapData.m_gridPosition;
                driverInfos[index].numPitStops = lapData.m_numPitStops;
                driverInfos[index].penalties = lapData.m_penalties;
                driverInfos[index].driveThroughs = lapData.m_numUnservedDriveThroughPens;
                driverInfos[index].stopGos = lapData.m_numUnservedStopGoPenalties;
                driverInfos[index].lapDistance = lapData.m_lapDistance;
                driverInfos[index].currentLapTimeInMS = lapData.m_currentLapTimeInMS;

                //have we started a new lap?
                if (driverInfos[index].currentLapNum !== lapData.m_currentLapNum) {
                    driverInfos[index].totalPreviousLapTimesInMS += lapData.m_lastLapTimeInMS;
                    
                    if (sessionInfo.currentLapNum < lapData.m_currentLapNum) {
                        sessionInfo.currentLapNum = lapData.m_currentLapNum
                    }
                }

                driverInfos[index].currentLapNum = lapData.m_currentLapNum;

                //which mini sector are they in?
                for (let j = 0; j < marshalZonesLength.length; j++) {

                    const startMarshalZone = marshalZonesLength[j]
                    const endMarshalZone = j === marshalZonesLength.length ? trackLength : marshalZonesLength[j + 1]

                    if (lapData.m_lapDistance >= startMarshalZone && lapData.m_lapDistance < endMarshalZone) {

                        //we are in this marshal zone
                        //have we just moved to a new one?
                        if (driverInfos[index].currentMarshalZone !== j) {
                            //yes we have - log our time
                            const zeroBasedLapNumber = lapData.m_currentLapNum - 1
                            const checkpoint = (zeroBasedLapNumber * (marshalZonesLength.length - 1)) + j

                            driverInfos[index].checkpoints[checkpoint] = lapData.m_currentLapTimeInMS
                            //driverInfos[index].checkpoints[checkpoint] = 'Lap ' + lapData.m_currentLapNum + ', Zone ' + j + ', Checkpoint ' + checkpoint + ', Current Lap Value ' + lapData.m_currentLapTimeInMS + ', Total Value ' + (driverInfos[index].totalPreviousLapTimesInMS + lapData.m_currentLapTimeInMS)
                            
                            driverInfos[index].currentMarshalZone = j
                            driverInfos[index].checkpointCount = checkpoint
                        }

                        //TODO: tidy this up - you don't need to send all this data over, as we only care about
                        //a) delta to 1st place
                        //b) delta to car in front - leave this to react to deal with since that orders the data and it might be easier then?

                        //and then tidy up the tower and get it to start showing stuff so we can then start that process, cos this bit is nearly done!!!
                        //stop sending all the other packets over too
                        
                        
                        //TODO: set up the processed session packet to send over
                        break
                    }
                }
            }
        }
    }

    function sendSessionData(data) {
        //console.log(data)
        socket.emit(PACKETS.session, data)
        socket.emit('SessionTimestamp', new Date())
    }

    function processSessionData(data) {
        
        //marshal zones - only need to do this once
        if (numMarshalZones === 0) {
            numMarshalZones = data.m_numMarshalZones
            trackLength = data.m_trackLength
    
            //marshalZones = new Array(numMarshalZones)
            marshalZonesLength = new Array(numMarshalZones)

            for (let index = 0; index < 21; index++) {
                const marshalZone = data.m_marshalZones[index];
    
                //console.log('marshal zone ' + index + ': ' + marshalZone)
    
                if (marshalZone !== undefined) {
                    
                    //marshalZones[index] = marshalZone
                    marshalZonesLength[index] = marshalZone.m_zoneStart * trackLength
                }
            }

            marshalZonesLength = [...new Set(marshalZonesLength)].sort((item1, item2) => item1 - item2)
        }

        if (sessionInfo === null || sessionInfo === undefined) sessionInfo = new SessionInfo()

        sessionInfo.currentSession = data.m_sessionType;
        sessionInfo.currentSessionText = SESSIONTYPE[data.m_sessionType];
        sessionInfo.sessionDuration = data.m_sessionDuration;
        sessionInfo.sessionTimeRemaining = data.m_sessionTimeLeft;
        sessionInfo.totalLaps = data.m_totalLapsLeft;
        sessionInfo.numberMarshalZones = numMarshalZones;

        sendSessionInfo();
    }

    function sendParticipantsData(data) {
        //console.log(data)
        socket.emit(PACKETS.participants, data)
        socket.emit('ParticipantsTimestamp', new Date())
    }

    function processParticipantsData(data) {
        //console.log(data)
        //console.log('Processing Participants data...')
        for (let index = 0; index < data.m_participants.length; index++) {
            
            const participant = data.m_participants[index];

            //console.log('Processing Participant ' + index)
            //console.log(participant)
            //console.log(driverInfos[index])
            
            if (participant === null) {
                //do nothing
            } else if (driverInfos[index] === null || driverInfos[index] === undefined) {
                //the driver doesn't exist yet - create
                let driverInfo = new DriverInfo(
                    participant.m_driverId,
                    participant.m_networkId,
                    participant.m_driverId,
                    participant.m_driverId,
                    participant.m_name,
                    participant.m_nationality,
                    participant.m_raceNumber,
                    participant.m_teamId
                )

                driverInfos[index] = driverInfo
            } else if (driverInfos[index].driverId != participant.m_driverId && driverInfos[index].networkId != participant.m_networkId) {
                //the driver has changed - update
                driverInfos[index].driverId = participant.m_driverId,
                driverInfos[index].networkId = participant.m_networkId,
                driverInfos[index].driverName = participant.m_driverId,
                driverInfos[index].driverShortName = participant.m_driverId,
                driverInfos[index].driverGameName = participant.m_name,
                driverInfos[index].driverNationality = participant.m_nationality,
                driverInfos[index].driverRaceNumber = participant.m_raceNumber,
                driverInfos[index].driverTeam = participant.m_teamId
            }
        }

        //sendDriverInfos();
    }

    function sendCarTelemetryData(data) {
        //console.log(data)
        socket.emit(PACKETS.carTelemetry, data)
        socket.emit('CarTelemetryTimestamp', new Date())
    }

    function sendCarStatusData(data) {
        //console.log(data)
        socket.emit(PACKETS.carStatus, data)
        socket.emit('CarStatusTimestamp', new Date())
    }

    function processCarStatus(data) {
        
        for (let index = 0; index < data.m_carStatusData.length; index++) {
            
            const carStatusData = data.m_carStatusData[index];

            //console.log('Processing Car Status ' + index)
            //console.log(carStatusData)
            //console.log(driverInfos[index])
            
            if (carStatusData !== null && driverInfos[index] !== undefined) {
                //update the object
                driverInfos[index].currentTyre = carStatusData.m_visualTyreCompound;
                driverInfos[index].currentTyreName = VISUALTYRECOMPOUND[carStatusData.m_visualTyreCompound];
                driverInfos[index].currentTyreAge = carStatusData.m_tyresAgeLaps;
            }
        }
    }

    function sendFinalClassificationData(data) {
        //console.log(data)
        socket.emit(PACKETS.finalClassification, data)
        socket.emit('FinalClassificationTimestamp', new Date())
    }

    function sendLobbyInfoData(data) {
        //console.log(data)
        socket.emit(PACKETS.lobbyInfo, data)
        socket.emit('LobbyInfoTimestamp', new Date())
    }

    function sendCarDamageData(data) {
        //console.log(data)
        socket.emit(PACKETS.carDamage, data)
        socket.emit('CarDamageTimestamp', new Date())
    }

    function sendSessionHistoryData(data) {
        //console.log(data)
        socket.emit(PACKETS.sessionHistory, data)
        socket.emit('SessionHistoryTimestamp', new Date())
    }

    function processSessionHistoryData(data) {

        let index = data.m_carIdx

        if (driverInfos[index] !== undefined) {
            //try and update the lap data
            driverInfos[index].bestLapNumber = data.m_bestLapTimeLapNum
            driverInfos[index].bestLapTimeInMS = data.m_bestLapTimeLapNum === 0 ? 0 : data.m_lapHistoryData[data.m_bestLapTimeLapNum - 1].m_lapTimeInMS
        }

        sendDriverInfos()
    }

    function sendProcessedSessionHistoryData(data) {
        //console.log(data)
        socket.emit('processedSessionHistory', data)
        socket.emit('ProcessedSessionHistoryTimestamp', new Date())
    }
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
