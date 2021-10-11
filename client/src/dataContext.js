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

    const valueObject = {
        eventResponse, motionResponse, carSetupsResponse, lapDataResponse, sessionResponse, participantsResponse, carTelemetryResponse, carStatusResponse, finalClassificationResponse, lobbyInfoResponse,
        eventTimestamp, motionTimestamp, carSetupsTimestamp, lapDataTimestamp, sessionTimestamp, participantsTimestamp, carTelemetryTimestamp, carStatusTimestamp, finalClassificationTimestamp, lobbyInfoTimestamp,
        setEventResponse, setMotionResponse, setCarSetupsResponse, setLapDataResponse, setSessionResponse, setParticipantsResponse, setCarTelemetryResponse, setCarStatusResponse, setFinalClassificationResponse, setLobbyInfoResponse,
        setEventTimestamp, setMotionTimestamp, setCarSetupsTimestamp, setLapDataTimestamp, setSessionTimestamp, setParticipantsTimestamp, setCarTelemetryTimestamp, setCarStatusTimestamp, setFinalClassificationTimestamp, setLobbyInfoTimestamp,
    }

    return (
        <DataContext.Provider value={valueObject}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataContextProvider, DataContext }
