localStorage.setItem('accessId',"419678316");
localStorage.setItem('username',"똥멍청eee");
const username = localStorage.getItem('username');
const accessId = localStorage.getItem('accessId');


export const fetchData = async () => {
    const response = await(await fetch(`/api/users/nickname/${username}`, {
        method: 'GET',
        headers: {
            Authorization: import.meta.env.VITE_API_KEY
        }
    })).json();
    return response;
}

export const fetchMatch = async () => {
    const response = await(await fetch(`/api/users/${accessId}/matches?`, {
        method: 'GET',
        headers: {
            Authorization: import.meta.env.VITE_API_KEY
        }
    })).json();
    return response;
}