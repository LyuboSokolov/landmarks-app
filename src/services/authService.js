const baseUrl = 'http://localhost:3030/users';

export const login = (loginData) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(loginData)
        
    })
    .then (res => res.json());
};