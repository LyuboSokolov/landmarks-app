const baseUrl = 'http://localhost:3030/data/landmarks';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json());
}

export const getOne = (landmarkId) => {
    return fetch(`${baseUrl}/${landmarkId}`)
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

export const update = (landmarkId,accessToken,data) => {
    fetch(`${baseUrl}/${landmarkId}`,{
        method:"PUT",
        headers:{
            "X-Authorization": accessToken,
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}