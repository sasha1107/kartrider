import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../utils/fetchData'
import Loading from './common/Loading'
import Error from './common/Error'

export default function Home() {
    // 유저 정보가 있을 때 보여질 홈 페이지
    const { isLoading ,isError, error, data } = useQuery(["findUser"], fetchData)
    if (isLoading) return <Loading />  
    if (isError) return <Error />  
    return (
        <div>
            <h1>{data.name}의마이룸</h1>
            <h1>{data.accessId}의마이룸</h1>
            <p>레벨 : {data.level}</p>
        </div>
    )
}
