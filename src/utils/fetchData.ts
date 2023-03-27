const BASE_URL = `/api/users/nickname/분홍땀`;
const username = '분홍땀'
const accessId = '319193618';

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