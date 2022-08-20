import { useEffect, useState, useContext } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import * as landmarkService from '../../services/landmarkService';
import * as likeServise from '../../services/likeService';
import { UserDataContext } from "../../context/UserData";


export const LandmarkDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserDataContext);
    const { landmarkId } = useParams();

    const [landmark, setLandmark] = useState();
    const [likes, setLikes] = useState([]);


    useEffect(() => {
        landmarkService.getOne(landmarkId)
            .then(result => {
                setLandmark(result);

            });
        // likeServise.getAllLikes()
        //     .then(res => {
        //         setLikes(Object.values(likes))

        //     })
    }, []);

    const Remove = (landmarkId) => {

        let isExecuted = window.confirm('Do you want to delete ?');

        if (isExecuted) {
            landmarkService.remove(landmarkId, user?.accessToken);
            landmarkService.getAll()
                .then(res => {
                    navigate('/landmarks');
                })

        }
    }

    // const likeHendler = (landmarkId, userId) => {
    //     likeServise.likePost(landmarkId, userId);

    //     likeServise.getAllLikes()
    //         .then(res => {

    //             console.log(Object.values(res).filter(x => x.userLikeId == 0));
    //             setLikes(res);

    //         })
    //         console.log(likes);
    // }

    return (
        <section >
            <div className="wrapper">
                <div className="landmarkCover">
                    <img src={landmark?.imgUrl} />
                </div>
                <div className="landmarkInfo">
                    <div className="landmarkText">
                        <h1>
                            Title:{landmark?.title}
                        </h1>
                        <h3>
                            Location:{landmark?.located}
                        </h3>
                        <p>
                            {landmark?.description}
                        </p>
                    </div>
                    {landmark?._ownerId == user?._id
                        ? <>
                            <div className="actionBtn">
                                <Link to={`/landmarks/details/${landmark?._id}/edit`} className="edit">
                                    Edit
                                </Link>
                                <button onClick={() => Remove(landmarkId)} className="remove">
                                    Delete
                                </button>
                            </div>
                        </>
                        : <></>
                    }
                    {/* <button onClick={() => likeHendler(landmarkId, user._id)}><i class="fa-solid fa-thumbs-up"></i></button>
                    <span></span> */}
                </div>
            </div>
        </section>
    );
};

