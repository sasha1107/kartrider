import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMatch } from '../utils/fetchData'
import Loading from './common/Loading'
import Error from './common/Error'
import { getName } from '../utils/getName'
import { getParts } from '../utils/getParts'

export default function Match() {
    const { isLoading ,isError, error, data } = useQuery(["findMatch"], fetchMatch)
    if (isLoading) return <Loading />  
    if (isError) return <Error />
    console.log(data)
    console.log(data.matches[0].matches[0])
    console.log(data.matches[0].matches[0].player.pet)
    return (
        <div>
            <h1>{data.nickName}의 매치</h1>
            <p>게임 타입</p>
            <p>{getName("gameType", data.matches[0].matches[0].matchType)}</p>

            <h2>캐릭터</h2>
            <p>캐릭터</p>
            <img src={`character/${data.matches[0].matches[0].character}.png`}/>
            <p>{getName('character', data.matches[0].matches[0].character)}</p>

            {/* <p>펫</p> */}
            {/* <p>{getName('pet', "87d9b446e122b6601b4a36590360c1f7b4dc263aaa2152c9ef75177373eaa409")}</p> */}

            <p>플라잉펫</p>
            <p>{getName('flyingPet', data.matches[0].matches[0].player.flyingPet)}</p>

            <h2>카트</h2>
            <p>카트</p>
            <img src={`kart/${data.matches[0].matches[0].player.kart}.png`}/>
            <p>{getName('kart', data.matches[0].matches[0].player.kart)}</p>

            <h3>파츠</h3>
            <p>엔진</p>
            <p>{getParts('partsEngine', data.matches[0].matches[0].player.partsEngine)?.Name}</p>
            {/* <img src={getParts('partsEngine', data.matches[0].matches[0].player.partsEngine)?.ImageUrl}/> */}
            <p>{getParts('partsEngine', data.matches[0].matches[0].player.partsEngine)?.Effect}</p>
            <p>{getParts('partsEngine', data.matches[0].matches[0].player.partsEngine)?.Description}</p>

            <p>핸들</p>
            <p>{getParts('partsHandle', data.matches[0].matches[0].player.partsHandle)?.Name}</p>
            {/* <img src={getParts('partsHandle', data.matches[0].matches[0].player.partsHandle)?.ImageUrl}/> */}
            <p>{getParts('partsHandle', data.matches[0].matches[0].player.partsHandle)?.Effect}</p>
            <p>{getParts('partsHandle', data.matches[0].matches[0].player.partsHandle)?.Description}</p>

            <p>킷</p>
            <p>{getParts('partsKit', data.matches[0].matches[0].player.partsKit)?.Name}</p>
            {/* <img src={getParts('partsKit', data.matches[0].matches[0].player.partsKit)?.ImageUrl}/> */}
            <p>{getParts('partsKit', data.matches[0].matches[0].player.partsKit)?.Effect}</p>
            <p>{getParts('partsKit', data.matches[0].matches[0].player.partsKit)?.Description}</p>

            <p>휠</p>
            <p>{getParts('partsWheel', data.matches[0].matches[0].player.partsWheel)?.Name}</p>
            {/* <img src={getParts('partsWheel', data.matches[0].matches[0].player.partsWheel)?.ImageUrl}/> */}
            <p>{getParts('partsWheel', data.matches[0].matches[0].player.partsWheel)?.Effect}</p>
            <p>{getParts('partsWheel', data.matches[0].matches[0].player.partsWheel)?.Description}</p>
            

            <p>트랙</p>
            <img src={`track/${data.matches[0].matches[0].trackId}.png`}/>
            <p>{getName('track', data.matches[0].matches[0].trackId)}</p>
        </div>
    )
}
