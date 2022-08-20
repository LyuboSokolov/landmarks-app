import { useEffect, useState } from 'react';
import * as landmarkService from '../../services/landmarkService';
import { Landmark } from '../Landmark/Landmark';

export const Landmarks = () => {
    const [landmarks, setLandmarks] = useState([]);

    useEffect(() => {
        landmarkService.getAll()
            .then(result => {
                setLandmarks(result);

            });
    }, []);

    return (
        <div id="products">
            <div className="container content-lg landmarks">
                <div className="row text-center margin-b-40">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2>Amazing landmarks</h2>
                        <p>
                            Bulgaria is a charming country, 
                            full of beautiful landscapes and amazing beaches.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {landmarks.map(x => <Landmark key={x._id} landmark={x} />)}
                    <div className="col-sm-4 sm-margin-b-50">
                    </div>
                </div>
            </div>
        </div>
    );
}