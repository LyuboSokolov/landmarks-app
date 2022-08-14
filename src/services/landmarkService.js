const baseUrl = 'http://localhost:3030/data/landmarks';

export const getAll = () => {
    return fetch(baseUrl)
    .then(res => res.json());
}

export const getOne = (tripId) => {
    return fetch (`${baseUrl}/${tripId}`)
    .then(res=> res.json());
}

export const create = (data) => {
    return fetch(baseUrl,{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    });
}