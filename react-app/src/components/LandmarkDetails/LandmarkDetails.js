import { useEffect, useState, useContext } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import * as landmarkService from '../../services/landmarkService';

import { UserDataContext } from "../../context/UserData";
import { Like } from "../Like/Like";


export const LandmarkDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserDataContext);
    const { landmarkId } = useParams();

    const [landmark, setLandmark] = useState();



    useEffect(() => {
        landmarkService.getOne(landmarkId)
            .then(result => {
                setLandmark(result);

            });
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
                    <Like landmark = {landmark} />
                </div>
            </div>
        </section>
    );
};

