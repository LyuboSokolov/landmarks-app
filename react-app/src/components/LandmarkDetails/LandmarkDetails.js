import { useEffect, useState, useContext } from "react";

import { useParams, Link } from "react-router-dom";

import * as landmarkService from '../../services/landmarkService';

import { UserDataContext } from "../../context/UserData";

export const LandmarkDetails = () => {

    const { user } = useContext(UserDataContext);
    const { landmarkId } = useParams();

    const [landmark, setLandmark] = useState();

    useEffect(() => {
        landmarkService.getOne(landmarkId)
            .then(result => {
                setLandmark(result);
                console.log(result);
            });
    }, []);

    return (
        <section >
            <div className="wrapper">
                <div className="albumCover">
                    <img src={landmark?.imgUrl} />
                </div>
                <div className="albumInfo">
                    <div className="albumText">
                        <h1>
                            Title:{landmark?.title}
                        </h1>
                        <h3>
                            Location:{landmark?.location}
                        </h3>
                        <p>
                            {landmark?.description}
                        </p>
                    </div>
                    {landmark?._ownerId == user?._id
                        ? <>
                            <div className="actionBtn">
                                <Link to={`/landmarks/details/${landmark._id}/edit`} className="edit">
                                    Edit
                                </Link>
                                <Link to={`/landmarks/${landmark._id}/delete`} className="remove">
                                    Delete
                                </Link>
                            </div>
                        </>
                        : <></>
                    }

                </div>
            </div>
        </section>
    );
};