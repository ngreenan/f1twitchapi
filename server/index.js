const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

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


//do the stuff
let interval
let processedSessionHistory = new Array(22)

io.on("connection", (socket) => {
  console.log("New client connected");

    f1Client.on(PACKETS.event, sendEventData);
    //f1Client.on(PACKETS.motion, sendMotionData);
    //f1Client.on(PACKETS.carSetups, sendCarSetupsData);
    f1Client.on(PACKETS.lapData, sendLapData);
    f1Client.on(PACKETS.session, sendSessionData);
    f1Client.on(PACKETS.participants, sendParticipantsData);
    f1Client.on(PACKETS.carTelemetry, sendCarTelemetryData);
    f1Client.on(PACKETS.carStatus, sendCarStatusData);
    //f1Client.on(PACKETS.finalClassification, sendFinalClassificationData);
    f1Client.on(PACKETS.lobbyInfo, sendLobbyInfoData);
    f1Client.on(PACKETS.carDamage, sendCarDamageData);
    f1Client.on(PACKETS.sessionHistory, (data) => {
        sendSessionHistoryData(data);
        processSessionHistoryData(data);
    });
    
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    
    });

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

    function sendSessionData(data) {
        //console.log(data)
        socket.emit(PACKETS.session, data)
        socket.emit('SessionTimestamp', new Date())
    }

    function sendParticipantsData(data) {
        //console.log(data)
        socket.emit(PACKETS.participants, data)
        socket.emit('ParticipantsTimestamp', new Date())
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
        let sessionHistory = {}
        sessionHistory.bestLapNumber = data.m_bestLapTimeLapNum
        sessionHistory.bestLapTimeInMS = data.m_bestLapTimeLapNum === 0 ? 0 : data.m_lapHistoryData[data.m_bestLapTimeLapNum - 1].m_lapTimeInMS
        processedSessionHistory[data.m_carIdx] = sessionHistory
        sendProcessedSessionHistoryData(processedSessionHistory)
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