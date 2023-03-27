import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from "../utils/fetchData"
import Loading from './common/Loading'
import Error from './common/Error'

export default function AddUser() {
    const [username, setUsername] = useState('')
    const { isLoading ,isError, error, data } = useQuery(["findUser"], fetchData)
    const inpRef = useRef(null)
    const handleInp = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target?.value)
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username)
        console.log('제출')
    }
    console.log(data)
    
    if (isLoading) return <Loading />  
    if (isError) return <Error />  
    return (
        <div>
            <h1 className='ir'>Add User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nickname">닉네임</label>
                <input
                    id='nickname'
                    ref={inpRef}
                    onChange={handleInp}
                />
                <button type='submit'>제출</button>
            </form>
            <p>{data.accessId}</p>
            <p>{data.name}</p>
            <p>{data.level}</p>
        </div>
    )
}