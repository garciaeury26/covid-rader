import React from 'react'

import {
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Badge,
    Text,
    Button,
    Stack
} from "@chakra-ui/react"

export const StatsScreen = ({ location, dead, confirmed, contryCode }) => {
    return (
        < div className='covid-data animate__animated animate__fadeInDown'>
            <Text fontSize='xl' fontWeight='bold'>
                {location}
            </Text>
            <StatGroup>

                <Stat ml='7'>
                    <StatLabel>Confirmed</StatLabel>
                    <StatNumber>{confirmed}</StatNumber>
                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        {contryCode}
                    </Badge>
                </Stat>

                <Stat ml='7'>
                    <StatLabel>Dead</StatLabel>
                    <StatNumber>
                        {dead}
                    </StatNumber>
                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        28/6/21
                    </Badge>
                </Stat>

            </StatGroup>


        </div>
    )
}
