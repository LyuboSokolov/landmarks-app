import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as landmarkService from '../../services/landmarkService';

export const LandmarkDetails = () => {

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

                    <div className="actionBtn">
                        <a href="/albums/${album._id}/edit" className="edit">
                            Edit
                        </a>
                        <a href="/albums/${album._id}/delete" className="remove">
                            Delete
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};