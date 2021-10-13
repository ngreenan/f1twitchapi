import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from './dataContext'
import TowerDriver from './TowerDriver'
import { sessionTypes } from './LookupData'
import './Tower.css'

function Tower(props) {

    var modes = [ 'delta', 'flap', 'tyres' ]

    const [ towerMode, setTowerMode ] = useState(0)

    //test bit to switch between two different stats
    let interval;

    useEffect(() => {
        if (interval) clearInterval(interval)
        interval = setInterval(() => {

            setTowerMode(prevState => prevState === modes.length - 1 ? 0 : prevState + 1)
        }, 10000)
    }, [])   

    const { sessionResponse, participantsResponse, lapDataResponse, carStatusResponse, processedSessionHistoryResponse } = useContext(DataContext)

    var sessionTimeRemaining = new Date(0)
    sessionTimeRemaining.setSeconds(sessionResponse.m_sessionTimeLeft || 0)

    var flap

    if (processedSessionHistoryResponse && processedSessionHistoryResponse.length > 0) {
        flap = processedSessionHistoryResponse.filter((lapData) => lapData != null && lapData.bestLapTimeInMS != null && lapData.bestLapTimeInMS > 0)
        if (flap.length > 0) {
            flap = flap.reduce((prev, curr) => {
                return prev.bestLapTimeInMS < curr.bestLapTimeInMS ? prev : curr
            }).bestLapTimeInMS
        } else {
            flap = 0
        }
    } else {
        flap = 0
    }

    const participantsData = (
        <div className='tower-drivers'>
            {
                participantsResponse && participantsResponse.m_participants ?
                participantsResponse.m_participants.sort((item1, item2) => item1.m_carPosition - item2.m_carPosition).map((participant, index) => (
                    <TowerDriver 
                        key={index}
                        index={index}
                        towerMode={modes[towerMode]}
                        participant={participant}
                        flap={flap}
                        lapData={lapDataResponse.m_lapData[index]}
                        sessionHistoryData={processedSessionHistoryResponse[index]}
                        carStatus={carStatusResponse.m_carStatusData[index]} />
                )) :
                ''
            }
        </div>
    )

    return (
        <div className='tower'>
            <div className='tower-header'>
                <div className='tower-header-session'>{`${sessionTypes[sessionResponse.m_sessionType]}`}</div>
                <div className='tower-header-divider'></div>
                <div className='tower-header-remaining'>{`${(sessionTimeRemaining.getUTCHours() * 60) + sessionTimeRemaining.getUTCMinutes()}:${sessionTimeRemaining.getUTCSeconds().toLocaleString('en-GB', { minimumIntegerDigits: 2})}`}</div>
            </div>
            { participantsData }
        </div>
    )
}

export default Tower