import React, { useContext, useState, useEffect, useRef } from 'react'
import { DataContext } from './dataContext'
import TowerDriver from './TowerDriver'
import { sessionTypes } from './LookupData'
import './Tower.css'

function Tower(props) {

    //var modes = [ 'delta', 'flap', 'tyres', 'fullname', 'shortname' ]
    var modes = [ 'delta', 'delta', 'delta' ]

    const [ towerMode, setTowerMode ] = useState(0)
    const [ positionChanges, setPositionChanges ] = useState(0)

    //test bit to switch between two different stats
    let interval;

    useEffect(() => {
        if (interval) clearInterval(interval)
        interval = setInterval(() => {

            setTowerMode(prevState => prevState === modes.length - 1 ? 0 : prevState + 1)
        }, 10000)
    }, [])   

    const { sessionResponse, participantsResponse, lapDataResponse, carStatusResponse, processedSessionHistoryResponse
        , driverInfo, sessionInfo } = useContext(DataContext)

    var sessionTimeRemaining = new Date(0)
    sessionTimeRemaining.setSeconds(sessionInfo.sessionTimeRemaining || 0)

    var flap

    if (driverInfo && driverInfo.length > 0) {
        flap = driverInfo.filter((driver) => driver != null && driver.bestLapTimeInMS != null && driver.bestLapTimeInMS > 0)
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

    //swap all the driverData stuff over for this
    //figure out why it's lagging so much now though :(

    const driverData = (
        <div className='tower-drivers'>
            {
                
                driverInfo && typeof driverInfo.map === 'function' ?
                driverInfo.map((driver, index) => (
                    <TowerDriver 
                        key={index}
                        index={index}
                        towerMode={modes[towerMode]}
                        driver={driver}
                        flap={flap} />
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
            { driverData }
        </div>
    )
}

export default Tower