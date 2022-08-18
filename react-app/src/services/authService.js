const baseUrl = 'http://localhost:3030/users';

export const login = (loginData) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(loginData)

    })
        .then(res => res.json());
};

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (email, password) => {
    try {
      return await fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json());
    } catch (error) {
        alert(error.message);
    }

}