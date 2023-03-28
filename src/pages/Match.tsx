import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMatch } from '../utils/fetchData'
import Loading from './common/Loading'
import Error from './common/Error'
import { getName } from '../utils/getName'
import { getParts } from '../utils/getParts'
import styled from 'styled-components'
import { parse } from '../components/Parse'

export default function Match() {
    const { isLoading ,isError, error, data } = useQuery(["findMatch"], fetchMatch)
    const [index, setIndex] = useState(3);
    const [length, setLength] = useState(0)
    if (isLoading) return <Loading />  
    if (isError) return <Error />

    console.log(data.matches[0])
    console.log(index)
    // console.log(data.matches[0].matches[0])
    // console.log(data.matches[0].matches[0].player.pet)
    return (
        <div>
            <h1>{data.nickName}의 매치</h1>
            <p>
                <span>{index + 1}</span>
                /
                <span>{length}</span>
            </p>
            <button
            >
                이전매치
            </button>
            <button
            >
                다음매치
            </button>
            <p>게임 타입</p>
            <p>{getName("gameType", data.matches[0].matches[index].matchType)}</p>

            <h2>캐릭터</h2>
            <p>캐릭터</p>
            <img src={`character/${data.matches[0].matches[index].character}.png`}/>
            <p>{getName('character', data.matches[0].matches[index].character)}</p>

            {/* <p>펫</p> */}
            {/* <p>{getName('pet', "87d9b446e122b6601b4a36590360c1f7b4dc263aaa2152c9ef75177373eaa409")}</p> */}

            <p>플라잉펫</p>
            <p>{getName('flyingPet', data.matches[0].matches[index].player.flyingPet)}</p>

            <h2>카트</h2>
            <p>카트</p>
            <img src={`kart/${data.matches[0].matches[index].player.kart}.png`}/>
            <p>{getName('kart', data.matches[0].matches[index].player.kart)}</p>

            <h3>파츠</h3>
            <StyledPartsBox>
                <div>
                    <p>엔진</p>
                    <StyledPartsImgBox>
                        <img src={getParts('partsEngine', data.matches[0].matches[index].player.partsEngine)?.ImageUrl}/>
                        <p>{getParts('partsEngine', data.matches[0].matches[index].player.partsEngine)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsEngine', data.matches[0].matches[index].player.partsEngine)?.Effect)}
                    <StyledPartsDesc>{getParts('partsEngine', data.matches[0].matches[index].player.partsEngine)?.Description}</StyledPartsDesc>
                </div>

                <div>
                    <p>핸들</p>
                    <StyledPartsImgBox>
                        <img src={getParts('partsHandle', data.matches[0].matches[index].player.partsHandle)?.ImageUrl}/>
                        <p>{getParts('partsHandle', data.matches[0].matches[index].player.partsHandle)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsHandle', data.matches[0].matches[index].player.partsHandle)?.Effect)}
                    <StyledPartsDesc>{getParts('partsHandle', data.matches[0].matches[index].player.partsHandle)?.Description}</StyledPartsDesc>
                </div>

                <div>
                    <p>킷</p>
                    <StyledPartsImgBox>
                        <img src={getParts('partsKit', data.matches[0].matches[index].player.partsKit)?.ImageUrl}/>
                        <p>{getParts('partsKit', data.matches[0].matches[index].player.partsKit)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsKit', data.matches[0].matches[index].player.partsKit)?.Effect)}
                    <StyledPartsDesc>{getParts('partsKit', data.matches[0].matches[index].player.partsKit)?.Description}</StyledPartsDesc>
                </div>

                <div>
                    <p>휠</p>
                    <StyledPartsImgBox>
                        <img src={getParts('partsWheel', data.matches[0].matches[index].player.partsWheel)?.ImageUrl}/>
                        <p>{getParts('partsWheel', data.matches[0].matches[index].player.partsWheel)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsWheel', data.matches[0].matches[index].player.partsWheel)?.Effect)}
                    <StyledPartsDesc>{getParts('partsWheel', data.matches[0].matches[index].player.partsWheel)?.Description}</StyledPartsDesc>
                </div>
            </StyledPartsBox>
            <p>트랙</p>
            <img src={`track/${data.matches[0].matches[index].trackId}.png`}/>
            <p>{getName('track', data.matches[0].matches[index].trackId)}</p>
        </div>
    )
}

const StyledPartsBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    >div {
        display: grid;
        grid-template-columns: .5fr 1fr 3fr 5fr;
        align-items: center;
        text-align: center;
        gap: 10px;
    }
`
const StyledPartsImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    img {
        width: 100px;
        height: 100px;
    }
`
const StyledPartsDesc = styled.p`
    font-size: 12px;
`
