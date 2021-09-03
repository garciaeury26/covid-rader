import React, { useState, useEffect, useLayoutEffect } from "react";
import './components/styles/index.css'

import { getCovidDates } from "./components/helpers/getCovidDates";
import { NavScreen } from "./components/nav/NavScreen";

import { Divider, Spinner, Stack, Button, Badge } from "@chakra-ui/react"
import { StatsScreen } from "./components/stats/StatsScreen";

export const CovidApp = () => {

    const [inFoCovid, setCovidInfo] = useState()
    const [state, setstate] = useState({
        initial: 0,
        limit: 10,
    })
    const { initial, limit } = state

    useEffect(() => {
        getCovidDates(initial, limit).then(resolve => setCovidInfo(resolve))
    }, [inFoCovid])


    if (inFoCovid === undefined) {
        return (
            <Stack Stack direction="row" spacing={4} className='chargin'>
                <Spinner size="xl" />
            </Stack>
        )
    }

    //todo cuando hafa click en mas suma mas 10 en initial y limit para actializar datos

    return (
        <div className='animate__animated animate__fadeIn'>
            <NavScreen />

            <div className='container-title'>
                <h1>Covid Data</h1>
                <Badge colorScheme="purple" h='5'>{new Date().toLocaleTimeString()}</Badge>
            </div>
            <Divider />

            <div className='main-cont'>

                {
                    inFoCovid.map(info => (
                        <StatsScreen
                            key={info.latitude}
                            location={info.location}
                            dead={info.dead}
                            confirmed={info.confirmed}
                            contryCode={info.contryCode}
                        />
                    ))
                }

            </div>

            <Button
                colorScheme="teal" size="md" className='btn-next'
                onClick={() => setstate({
                    initial: initial + 10,
                    limit: limit + 20,
                })}
            >
                Next
            </Button>

        </div>
    )
};
