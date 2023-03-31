import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMatch } from '../utils/fetchData'
import Loading from './common/Loading'
import Error from './common/Error'
import { getName } from '../utils/getName'
import { getParts } from '../utils/getParts'
import styled from 'styled-components'
import { parse } from '../components/Parse'
import { Matches } from '../types/matches'

export default function Match() {
    const { isLoading ,isError, error, data } = useQuery<Matches>(["findMatch"], fetchMatch)
    const [index, setIndex] = useState(0);
    if (isLoading) return <Loading />  
    if (isError) return <Error />
    // console.log()
    const speedSolo = data.matches.filter(i => getName("gameType",i.matchType) === "스피드 개인전")[0].matches;
    const speedTeam = data.matches[1];
    return (
        <div>
            <h1>{data.nickName}의 매치</h1>
            <p>
                <span>{index + 1}</span>
                /
                <span>{speedSolo.length}</span>
            </p>
            <button
            onClick={() => {
                if (index !== 0) setIndex(index - 1)
            }}>
                이전매치
            </button>
            <button
            onClick={() => {
                if (index < speedSolo.length -1) setIndex(index + 1)
            }}>
                다음매치
            </button>
            <p>게임 타입</p>
            {getName("gameType", speedSolo[index].matchType) ? <p>{getName("gameType", speedSolo[index].matchType)}</p> : <></>}

            <p>트랙</p>
            <StyledTrackImg src={`track/${speedSolo[index].trackId}.png`}/>
            <p>{getName('track', speedSolo[index].trackId)}</p>

            <h2>캐릭터</h2>
            {getName('character', speedSolo[index].character) ?
            <>
            <p>캐릭터</p>
            <StyledCharacterImg src={`character/${speedSolo[index].character}.png`}/>
            <p>{getName('character', speedSolo[index].character)}</p>
            </>
            :<></>}

            <p>펫</p>
            {getName('pet', speedSolo[index].player.pet) ? 
                <p>getName('pet', speedSolo[index].player.pet)</p>
            : <>-</>
            }

            <p>플라잉펫</p>
            {getName('flyingPet', speedSolo[index].player.flyingPet) ?
            <p>{getName('flyingPet', speedSolo[index].player.flyingPet)}</p>
            :<>-</>}

            <h2>카트</h2>
            {getName('kart', speedSolo[index].player.kart) ? 
            <>
            <p>카트</p>
            <StyledCartImg src={`kart/${speedSolo[index].player.kart}.png`}/>
            <p>{getName('kart', speedSolo[index].player.kart)}</p>
            </>
            :<>카트를 찾을 수 없습니다.</>}

            <h3>파츠</h3>
            <StyledPartsBox>
                <p>엔진</p>
                {speedSolo[index].player.partsEngine ? 
                <div>
                    <StyledPartsImgBox>
                        <img src={getParts('partsEngine', speedSolo[index].player.partsEngine)?.ImageUrl}/>
                        <p>{getParts('partsEngine', speedSolo[index].player.partsEngine)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsEngine', speedSolo[index].player.partsEngine)?.Effect)}
                    <StyledPartsDesc>{getParts('partsEngine', speedSolo[index].player.partsEngine)?.Description}</StyledPartsDesc>
                </div>
                : <>-</>}
                
                <p>핸들</p>
                {speedSolo[index].player.partsHandle ? 
                <div>
                    <StyledPartsImgBox>
                        <img src={getParts('partsHandle', speedSolo[index].player.partsHandle)?.ImageUrl}/>
                        <p>{getParts('partsHandle', speedSolo[index].player.partsHandle)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsHandle', speedSolo[index].player.partsHandle)?.Effect)}
                    <StyledPartsDesc>{getParts('partsHandle', speedSolo[index].player.partsHandle)?.Description}</StyledPartsDesc>
                </div>
                : <>-</>}

                <p>킷</p>
                {speedSolo[index].player.partsKit ? 
                <div>
                    <StyledPartsImgBox>
                        <img src={getParts('partsKit', speedSolo[index].player.partsKit)?.ImageUrl}/>
                        <p>{getParts('partsKit', speedSolo[index].player.partsKit)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsKit', speedSolo[index].player.partsKit)?.Effect)}
                    <StyledPartsDesc>{getParts('partsKit', speedSolo[index].player.partsKit)?.Description}</StyledPartsDesc>
                </div>
                :<>-</>}

                <p>휠</p>
                {speedSolo[index].player.partsWheel ?
                <div>
                    <StyledPartsImgBox>
                        <img src={getParts('partsWheel', speedSolo[index].player.partsWheel)?.ImageUrl}/>
                        <p>{getParts('partsWheel', speedSolo[index].player.partsWheel)?.Name}</p>
                    </StyledPartsImgBox>
                    {parse(getParts('partsWheel', speedSolo[index].player.partsWheel)?.Effect)}
                    <StyledPartsDesc>{getParts('partsWheel', speedSolo[index].player.partsWheel)?.Description}</StyledPartsDesc>
                </div>
                : <>-</>}
            </StyledPartsBox>
            
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
        grid-template-columns: 1fr 3fr 5fr;
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
    gap: 10px;
    img {
        border: 1px solid #c1c1c1;
        border-radius: 8px;
        width: 100px;
        height: 100px;
    }
`
const StyledPartsDesc = styled.p`
    font-size: 12px;
`
const StyledTrackImg = styled.img`
    width: 150px;
    height: 100px;
`
const StyledCharacterImg = styled.img`
    width: 150px;
`
const StyledCartImg = styled.img`
    width: 200px;
`
