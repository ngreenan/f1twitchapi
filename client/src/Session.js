import React, { useContext } from 'react'
import { DataContext } from './dataContext'
import { trackIds, carTypes, sessionTypes, weatherTypes, safetyCarStatus } from './LookupData'

function Session(props) {

    const { sessionResponse } = useContext(DataContext)



    const sessionInformation = (
        <div>
            <p>{`Track: ${trackIds[sessionResponse.m_trackId]}`}</p>
            <p>{`Car Type: ${carTypes[sessionResponse.m_formula]}`}</p>
            <p>{`Current Session: ${sessionTypes[sessionResponse.m_sessionType]}`}</p>
            <p>{`Session Time Remaining: ${Math.floor(sessionResponse.m_sessionTimeLeft / 60)}:${sessionResponse.m_sessionTimeLeft % 60}`}</p>
            <p>{`Session Duration: ${Math.floor(sessionResponse.m_sessionDuration / 60)}:${sessionResponse.m_sessionDuration % 60}`}</p>
            <p>{`Current Weather: ${weatherTypes[sessionResponse.m_weather]}`}</p>
            <p>{`Track Temperature: ${sessionResponse.m_trackTemperature}`}</p>
            <p>{`Air Temperature: ${sessionResponse.m_airTemperature}`}</p>
            <p>{`Total Laps: ${sessionResponse.m_totalLaps}`}</p>
            <p>{`Track Length: ${sessionResponse.m_trackLength}`}</p>
            <p>{`Pit Speed Limit: ${sessionResponse.m_pitSpeedLimit}kph`}</p>
            <p>{`Game Paused?: ${sessionResponse.m_gamePaused === 1 ? 'Yes' : 'No'}`}</p>
            <p>{`Spectating?: ${sessionResponse.m_isSpectating === 1 ? 'Yes' : 'No'}`}</p>
            <p>{`Car Spectated: ${sessionResponse.m_spectatorCarIndex}`}</p>
            <p>{`# of Marshall Zones: ${sessionResponse.m_numMarshalZones}`}</p>
            <div>Marshal Zone Info:
                {sessionResponse && sessionResponse.m_marshalZones ? sessionResponse.m_marshalZones.map((zone) => <p>{JSON.stringify(zone)}</p>) : 'n/a'}
            </div>
            <p>{`Safety Car Status: ${safetyCarStatus[sessionResponse.m_safetyCarStatus]}`}</p>
            <p>{`Network Game?: ${sessionResponse.m_networkGame === 1 ? 'Yes' : 'No'}`}</p>
            <p>{`# of Weather Samples: ${sessionResponse.m_numWeatherForecastSamples}`}</p>
            <div>Weather Sample Info:
                {sessionResponse && sessionResponse.m_weatherForecastSamples ? 
                    sessionResponse.m_weatherForecastSamples.map((sample) => <p>{JSON.stringify(sample)}</p>) :
                    'n/a' }
            </div>
        </div>
    )

    return (
        <div>
            <h1>Session Data</h1>
            { sessionInformation }
        </div>
        )
}

export default Session