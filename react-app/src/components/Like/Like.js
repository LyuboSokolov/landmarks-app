import { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";

import * as likeServise from '../../services/likeService';
import { UserDataContext } from "../../context/UserData";

export const Like = (
    { landmark }
) => {

    const { user } = useContext(UserDataContext);
    const [likes, setLikes] = useState([]);

    const { landmarkId } = useParams();
    const [userIsLike, setUserIsLike] = useState(false);

    useEffect(() => {
        likeServise.getAllLikes()
            .then(res => {
                setLikes(Object.values(res).filter(x => x.landmarkId === landmarkId));
            });
    }, [user]);

    const likeHendler = (landmarkId, userId) => {


        if (!(likes.some(x => x.userLikeId === userId))) {
            likeServise.likePost(landmarkId, userId);

            likeServise.getAllLikes()
                .then(res => {
                    setLikes(Object.values(res).filter(x => x.landmarkId === landmarkId));
                });
            setUserIsLike(true);
            console.log(1);


        } else if (likes.some(x => x.userLikeId === userId)) {


            let currentLikeId = likes.find(x => x.userLikeId == userId)._id;

            likeServise.dislikePost(currentLikeId, user.accessToken);

            likeServise.getAllLikes()
                .then(res => {

                    setLikes(Object.values(res).filter(x => x.landmarkId === landmarkId));
                });

            setUserIsLike(false);

            console.log(2);

        }
        likeServise.getAllLikes()
            .then(res => {

                setLikes(Object.values(res).filter(x => x.landmarkId === landmarkId));
            });


    }
    return (
        <div className="like-wrapper">
            {user?._id !== landmark?._ownerId && user?._id
                ? <button className="like-btn" onClick={() => likeHendler(landmarkId, user?._id)}>
                    {userIsLike == true ? <i class="fa-solid fa-thumbs-down"></i> : <i className="fa-solid fa-thumbs-up"></i>}
                </button>

                : <></>
            }
            <span className="like">LIKES: {Object.values(likes).length}</span>

        </div>
    )
}