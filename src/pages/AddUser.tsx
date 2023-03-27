import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'

export default function AddUser() {
    // const key = import.meta.env.VITE_API_KEY;
    const [username, setUsername] = useState('')

    const handleInp = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target?.value)
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username)
        console.log('제출')
    }
    return (
        <div>
            <h1 className='ir'>Add User</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nickname">닉네임</label>
                <input
                    id='nickname'
                    onChange={handleInp}
                />
                <button type='submit'>제출</button>
            </form>
        </div>
    )
}