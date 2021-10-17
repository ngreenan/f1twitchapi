import React from 'react'
import { DataContext } from './dataContext'
import './TowerDriver.css'
import { visualTyreCompounds } from './LookupData'

function TowerDriver(props) {

    const date = new Date(0)
    const nameType = props.towerMode === 'fullname' ? 'long' : 'short'
    if (props.driver !== null) date.setMilliseconds(props.driver.bestLapTimeInMS)
    
    const bestLap = props.driver === null || props.driver.bestLapTimeInMS === 0 ? 'NO TIME' : date.toISOString().substr(15, 8)
    const delta = props.driver === null || props.driver.bestLapTimeInMS === 0 ? 
        'NO TIME' : 
        props.driver.bestLapTimeInMS === props.flap ? 
            bestLap : 
            '+' + ((props.driver.bestLapTimeInMS - props.flap)/1000).toFixed(3) //divide result by 1000 to convert from MS to S
    const driverName = 
        props.driver === null ? '' :
        nameType === 'long' ? props.driver.driverName : props.driver.driverShortName

    // const tyres = props.driver ?
    //     visualTyreCompounds[props.driver.currentTyre] :
    //     'unknown'

    const tyres = props.driver ?
        props.driver.currentTyreName :
        'unknown'

    let positionChange = 'none'
    
    if (props.driver && props.driver.carPositionChange === -1) {
        console.log('driver moved down')
        positionChange = 'down'
    } else if (props.driver && props.driver.carPositionChange === 1) {
        console.log('driver moved up')
        positionChange = props.driver.carPosition === 1 ? 'top' : 'up'
    }

    var infoElement;

    switch (props.towerMode) {
        case 'flap':
            infoElement = <div className='tower-driver-info'><div className={`tower-driver-best ${bestLap === 'NO TIME' ? 'tower-driver-no-time' : ''}`}>{bestLap}</div></div>
            break
        case 'delta':
            infoElement = <div className='tower-driver-info'><div className={`tower-driver-best ${delta === 'NO TIME' ? 'tower-driver-no-time' : ''}`}>{delta}</div></div>
            break
        case 'tyres':
            infoElement = <div className='tower-driver-info tower-driver-tyres'>
                <div className={`tower-driver-tyres-${tyres}`}>
                    </div>
                    </div>
            break
        case 'shortname':
            break;
        case 'fullname':
            break;
        default:
            break
    }

    return (

        <>
            { props.driver && props.driver.driverName 
                ? 
                <div className={`tower-driver tower-driver-${props.driver.carPosition}`}>
                    <div className='tower-driver-position-outer'>
                    <div className={`tower-driver-position-inner tower-driver-position-inner-${positionChange}`}>{props.driver.carPosition}</div>
                    </div>
                    <div className={`tower-driver-name tower-driver-name-${nameType}`}>{driverName}</div>
                    {
                        infoElement
                    }
                </div>
                : 
                ''
            }
        </>
    )
}

// TowerDriver.defaultProps = {
//     nameType: 'short'
// }

export default TowerDriver