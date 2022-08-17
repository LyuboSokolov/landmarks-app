import { useEffect, useState } from 'react';
import * as landmarkService from '../../services/landmarkService';
import { Landmark } from '../Landmark/Landmark';

export const Landmarks = () => {
    const [landmarks, setLandmarks] = useState([]);

    useEffect(() => {
        landmarkService.getAll()
            .then(result => {
                setLandmarks(result);
                console.log(result);

            });
    }, []);

    return (
        /* Products */
        <div id="products">
            <div className="container content-lg">
                <div className="row text-center margin-b-40">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2>Latest Products</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
                            incididunt ut laboret dolore magna aliqua enim minim veniam
                            exercitation
                        </p>
                    </div>
                </div>
                {/*// end row */}
                <div className="row">
                    {landmarks.map(x => <Landmark key={x._id} landmark={x} />)}
                    {/* Latest Products */}
                    <div className="col-sm-4 sm-margin-b-50">


                    </div>
                    {/* End Latest Products */}
                </div>
                {/*// end row */}
            </div>

        </div>
        /* End Products */
    );
}