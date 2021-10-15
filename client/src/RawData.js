import React, { useContext } from 'react'
import { DataContext } from './dataContext'

function RawData(props) {

    const { 
        eventResponse, 
        motionResponse, 
        carSetupsResponse, 
        lapDataResponse, 
        sessionResponse, 
        participantsResponse, 
        carTelemetryResponse, 
        carStatusResponse, 
        finalClassificationResponse, 
        lobbyInfoResponse,
        carDamageResponse,
        sessionHistoryResponse,
        processedSessionHistoryResponse,
        driverInfo,
        sessionInfo,

        eventTimestamp, 
        motionTimestamp, 
        carSetupsTimestamp, 
        lapDataTimestamp, 
        sessionTimestamp, 
        participantsTimestamp, 
        carTelemetryTimestamp, 
        carStatusTimestamp, 
        finalClassificationTimestamp, 
        lobbyInfoTimestamp,
        carDamageTimestamp,
        sessionHistoryTimestamp,
        processedSessionHistoryTimestamp,
        driverInfoTimestamp,
        sessionInfoTimestamp,
    } = useContext(DataContext)

    return (
        <div>
            <h1>Raw Data</h1>

            <p>
                Event Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(eventResponse)}</span>
            </p>
            <p>
                Timestamp: <time dateTime={eventTimestamp}>{eventTimestamp}</time>
            </p>
            <hr />

            <p>
                Motion Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(motionResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={motionTimestamp}>{motionTimestamp}</time>
            </p>
            <hr />

            <p>
                Car Setups Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(carSetupsResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={carSetupsTimestamp}>{carSetupsTimestamp}</time>
            </p>
            <hr />

            <p>
                Lap Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(lapDataResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={lapDataTimestamp}>{lapDataTimestamp}</time>
            </p>
            <hr />

            <p>
                Session Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(sessionResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={sessionTimestamp}>{sessionTimestamp}</time>
            </p>
            <hr />

            <p>
                Participants Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(participantsResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={participantsTimestamp}>{participantsTimestamp}</time>
            </p>
            <hr />

            <p>
                Car Telemetry Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(carTelemetryResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={carTelemetryTimestamp}>{carTelemetryTimestamp}</time>
            </p>
            <hr />

            <p>
                Car Status Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(carStatusResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={carStatusTimestamp}>{carStatusTimestamp}</time>
            </p>
            <hr />

            <p>
                Final Classification Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(finalClassificationResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={finalClassificationTimestamp}>{finalClassificationTimestamp}</time>
            </p>
            <hr />

            <p>
                Lobby Info Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(lobbyInfoResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={lobbyInfoTimestamp}>{lobbyInfoTimestamp}</time>
            </p>
            <hr />

            <p>
                Car Damage Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(carDamageResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={carDamageTimestamp}>{carDamageTimestamp}</time>
            </p>
            <hr />

            <p>
                Session History Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(sessionHistoryResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={sessionHistoryTimestamp}>{sessionHistoryTimestamp}</time>
            </p>
            <hr />

            <p>
                Processed Session History Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(processedSessionHistoryResponse)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={processedSessionHistoryTimestamp}>{processedSessionHistoryTimestamp}</time>
            </p>
            <hr />

            <p>
                Driver Info Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(driverInfo)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={driverInfoTimestamp}>{driverInfoTimestamp}</time>
            </p>
            <hr />

            <p>
                Session Info Data: <span style={{ fontWeight: 'bold' }}>{JSON.stringify(sessionInfo)}</span>

            </p>
            <p>
                Timestamp: <time dateTime={sessionInfoTimestamp}>{sessionInfoTimestamp}</time>
            </p>
            <hr />
        </div>
    )
}

export default RawData