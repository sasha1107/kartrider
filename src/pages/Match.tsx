import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMatch } from '../utils/fetchData'
import Loading from './common/Loading'
import Error from './common/Error'

export default function Match() {
    const { isLoading ,isError, error, data } = useQuery(["findMatch"], fetchMatch)
    if (isLoading) return <Loading />  
    if (isError) return <Error />
    console.log(data)
    console.log(data.matches[0].matches[0])
    return (
        <div>
            <h1>{data.nickName}의 매치</h1>
            {/* <h1>{data.matches}</h1> */}
            {/* <p>레벨 : {data.level}</p> */}
            <p>캐릭터</p>
            <img src={`character/${data.matches[0].matches[0].character}.png`}/>
            <p>카트</p>
            <img src={`kart/${data.matches[0].matches[0].player.kart}.png`}/>
            <p>트랙</p>
            <img src={`track/${data.matches[0].matches[0].trackId}.png`}/>
        </div>
    )
}
