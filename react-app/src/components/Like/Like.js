
import { useEffect, useState, useContext } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import * as landmarkService from '../../services/landmarkService';
import * as likeServise from '../../services/likeService';
import { UserDataContext } from "../../context/UserData";



export const Like = (
    { landmark }
) => {


    const { user } = useContext(UserDataContext);
    const [likes, setLikes] = useState([]);

    const { landmarkId } = useParams();


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

        }

    }
    return (
        <div>
            {user?._id !== landmark?._ownerId && user?._id
                ? <button onClick={() => likeHendler(landmarkId, user?._id)}>
                    <i className="fa-solid fa-thumbs-up"></i>
                </button>
                : <></>
            }
            <span>{Object.values(likes).length}</span>
        </div>
    )
}