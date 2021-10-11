import React from 'react'
import './TowerDriver.css'
import { visualTyreCompounds } from './LookupData'

function TowerDriver(props) {

    const date = new Date(0)
    date.setMilliseconds(props.lapData.m_bestLapTime * 1000)

    const bestLap = props.lapData.m_bestLapTime === 0 ? 'NO TIME' : date.toISOString().substr(15, 8)
    const delta = props.lapData.m_bestLapTime === 0 ? 
        'NO TIME' : 
        props.lapData.m_bestLapTime === props.flap ? 
            bestLap : 
            '+' + (props.lapData.m_bestLapTime - props.flap).toFixed(3)
    const driverName = props.nameType === 'short' ? props.participant.m_name.substr(0,3) : props.participant.m_name

    const tyres = props.carStatus ?
        visualTyreCompounds[props.carStatus.m_tyreVisualCompound] :
        'unknown'

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
        default:
            break
    }

    return (

        <>
            { props.participant && props.participant.m_name 
                ? 
                <div className={`tower-driver tower-driver-${props.lapData.m_carPosition}`}>
                    <div className='tower-driver-position-outer'>
                    <div className='tower-driver-position-inner'>{props.lapData.m_carPosition}</div>
                    </div>
                    <div className='tower-driver-name'>{driverName}</div>
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

TowerDriver.defaultProps = {
    nameType: 'short'
}

export default TowerDriver