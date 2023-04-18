const baseUrl = 'http://localhost:3030/jsonstore/likes';


export const likePost = (landmarkId, userLikeId) => {
    fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({ landmarkId, userLikeId })
    });
};

export const dislikePost = (likeId, accessToken) => {
    fetch(`${baseUrl}/${likeId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization": accessToken,
        }
    })
};

export const getAllLikes = () => {
    return fetch(baseUrl)
        .then(res => res.json()
        );
};



