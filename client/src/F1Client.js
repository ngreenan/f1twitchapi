import React, { useEffect, useContext } from 'react'
import socketIOClient from 'socket.io-client'
import { DataContext } from './dataContext'

//const ENDPOINT = "http://127.0.0.1:4001";
const ENDPOINT = "http://192.168.0.9:4001"

export default function F1Client() {

    const {
        setEventResponse, setMotionResponse, setCarSetupsResponse, setLapDataResponse, setSessionResponse, setParticipantsResponse, setCarTelemetryResponse, setCarStatusResponse, setFinalClassificationResponse, setLobbyInfoResponse,
        setEventTimestamp, setMotionTimestamp, setCarSetupsTimestamp, setLapDataTimestamp, setSessionTimestamp, setParticipantsTimestamp, setCarTelemetryTimestamp, setCarStatusTimestamp, setFinalClassificationTimestamp, setLobbyInfoTimestamp
    } = useContext(DataContext)

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        //event
        socket.on("event", data => {
            setEventResponse(data);
        });

        socket.on('EventTimestamp', data => {
            setEventTimestamp(data)
        })

        //motion
        socket.on("motion", data => {
            setMotionResponse(data);
        });

        socket.on('MotionTimestamp', data => {
            setMotionTimestamp(data)
        })

        //carSetups
        socket.on("carSetups", data => {
            setCarSetupsResponse(data);
        });

        socket.on('CarSetupsTimestamp', data => {
            setCarSetupsTimestamp(data)
        })

        //lapData
        socket.on("lapData", data => {
            setLapDataResponse(data);
        });

        socket.on('LapDataTimestamp', data => {
            setLapDataTimestamp(data)
        })

        //session
        socket.on("session", data => {
            setSessionResponse(data);
        });

        socket.on('SessionTimestamp', data => {
            setSessionTimestamp(data)
        })

        //participants
        socket.on("participants", data => {
            setParticipantsResponse(data);
        });

        socket.on('ParticipantsTimestamp', data => {
            setParticipantsTimestamp(data)
        })

        //carTelemetry
        socket.on("carTelemetry", data => {
            setCarTelemetryResponse(data);
        });

        socket.on('CarTelemetryTimestamp', data => {
            setCarTelemetryTimestamp(data)
        })

        //carStatus
        socket.on("carStatus", data => {
            setCarStatusResponse(data);
        });

        socket.on('CarStatusTimestamp', data => {
            setCarStatusTimestamp(data)
        })

        //finalClassification
        socket.on("finalClassification", data => {
            setFinalClassificationResponse(data);
        });

        socket.on('FinalClassificationTimestamp', data => {
            setFinalClassificationTimestamp(data)
        })

        //lobbyInfo
        socket.on("lobbyInfo", data => {
            setLobbyInfoResponse(data);
        });

        socket.on('LobbyInfoTimestamp', data => {
            setLobbyInfoTimestamp(data)
        })

        return () => socket.disconnect();
    }, []);

    return (
        <></>
    )
}