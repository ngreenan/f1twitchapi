import React, { useState } from 'react'
const DataContext = React.createContext()

function DataContextProvider(props) {
    const [eventResponse, setEventResponse] = useState({});
    const [eventTimestamp, setEventTimestamp] = useState('');

    const [motionResponse, setMotionResponse] = useState({});
    const [motionTimestamp, setMotionTimestamp] = useState('');

    const [carSetupsResponse, setCarSetupsResponse] = useState({});
    const [carSetupsTimestamp, setCarSetupsTimestamp] = useState('');

    const [lapDataResponse, setLapDataResponse] = useState({});
    const [lapDataTimestamp, setLapDataTimestamp] = useState('');

    const [sessionResponse, setSessionResponse] = useState({});
    const [sessionTimestamp, setSessionTimestamp] = useState('');

    const [participantsResponse, setParticipantsResponse] = useState({});
    const [participantsTimestamp, setParticipantsTimestamp] = useState('');

    const [carTelemetryResponse, setCarTelemetryResponse] = useState({});
    const [carTelemetryTimestamp, setCarTelemetryTimestamp] = useState('');

    const [carStatusResponse, setCarStatusResponse] = useState({});
    const [carStatusTimestamp, setCarStatusTimestamp] = useState('');

    const [finalClassificationResponse, setFinalClassificationResponse] = useState({});
    const [finalClassificationTimestamp, setFinalClassificationTimestamp] = useState('');

    const [lobbyInfoResponse, setLobbyInfoResponse] = useState({});
    const [lobbyInfoTimestamp, setLobbyInfoTimestamp] = useState('');

    const [carDamageResponse, setCarDamageResponse] = useState({});
    const [carDamageTimestamp, setCarDamageTimestamp] = useState('');

    const [sessionHistoryResponse, setSessionHistoryResponse] = useState({});
    const [sessionHistoryTimestamp, setSessionHistoryTimestamp] = useState('');

    const [processedSessionHistoryResponse, setProcessedSessionHistoryResponse] = useState({});
    const [processedSessionHistoryTimestamp, setProcessedSessionHistoryTimestamp] = useState('');

    const valueObject = {
        eventResponse, motionResponse, carSetupsResponse, lapDataResponse, sessionResponse, participantsResponse, carTelemetryResponse, carStatusResponse, finalClassificationResponse, lobbyInfoResponse, carDamageResponse, sessionHistoryResponse,
        eventTimestamp, motionTimestamp, carSetupsTimestamp, lapDataTimestamp, sessionTimestamp, participantsTimestamp, carTelemetryTimestamp, carStatusTimestamp, finalClassificationTimestamp, lobbyInfoTimestamp, carDamageTimestamp, sessionHistoryTimestamp,
        processedSessionHistoryResponse, processedSessionHistoryTimestamp,
        setEventResponse, setMotionResponse, setCarSetupsResponse, setLapDataResponse, setSessionResponse, setParticipantsResponse, setCarTelemetryResponse, setCarStatusResponse, setFinalClassificationResponse, setLobbyInfoResponse, setCarDamageResponse, setSessionHistoryResponse,
        setEventTimestamp, setMotionTimestamp, setCarSetupsTimestamp, setLapDataTimestamp, setSessionTimestamp, setParticipantsTimestamp, setCarTelemetryTimestamp, setCarStatusTimestamp, setFinalClassificationTimestamp, setLobbyInfoTimestamp, setCarDamageTimestamp, setSessionHistoryTimestamp,
        setProcessedSessionHistoryResponse, setProcessedSessionHistoryTimestamp 
    }

    return (
        <DataContext.Provider value={valueObject}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataContextProvider, DataContext }
