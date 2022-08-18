const baseUrl = 'http://localhost:3030/data/landmarks';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json());
}

export const getOne = (tripId) => {
    return fetch(`${baseUrl}/${tripId}`)
        .then(res => res.json());
}

export const create = (accessToken, data) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            "X-Authorization": accessToken,
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
}