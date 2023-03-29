import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../utils/fetchData'
import Loading from './common/Loading'
import Error from './common/Error'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BottomSVG } from '../assets/images/bottom.svg'
import { ReactComponent as LeftCircle } from '../assets/images/leftcircle.svg'
import { ReactComponent as RightCircle } from '../assets/images/rightcircle.svg'

export default function Home() {
    // 유저 정보가 있을 때 보여질 홈 페이지
    const { isLoading ,isError, error, data } = useQuery(["findUser"], fetchData)
    const navigate = useNavigate()
    if (isLoading) return <Loading />  
    if (isError) return <Error />  
    return (
        <div>
            <h1>{data.name}의마이룸</h1>
            <h1>{data.accessId}의마이룸</h1>
            <p>레벨 : {data.level}</p>
            <StyledButton onClick={() => navigate('/match')}>
                <BottomSVG width={"96%"} className="bottom"/>
                <LeftCircle className="left" width={"5%"}/>
                <RightCircle className="right" width={"5%"}/>
            </StyledButton>
        </div>
    )
}
const StyledButton = styled.button`
    width: 200px;
    margin-left: 20px;
    height: 100%;
    background: linear-gradient(180deg, #96C720 0%, #618F15 100%);
    box-shadow: 0px 18px 7.5px rgba(0, 0, 0, 0.04), 0px 10.5px 6px rgba(0, 0, 0, 0.12), 0px 4.5px 4.5px rgba(0, 0, 0, 0.2), 0px 1.5px 3px rgba(0, 0, 0, 0.24), 0px 0px 0px rgba(0, 0, 0, 0.24);
    border-radius: 24px;
    color: #FFFFFF;
    text-shadow: 0px 3px 0px rgba(79, 79, 79, 0.6), 0px 3px 12px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    padding: 8px 30px;
    border: 4px solid #6F6544;
    cursor: pointer;
    position: relative;
    .bottom {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 15%);
        z-index: 1;
    }
    .left {
        position: absolute;
        left: 6%;
        top: 2%;
        transform: rotate(18deg);
    }
    .right {

    }
    ::after {
        content:"매치 정보 보기";
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
    }
    &:hover {
        background: linear-gradient(180deg, #C3C720 0%, #828F15 100%);
        .bottom > path{
            fill: #789413;
        }
    }
`