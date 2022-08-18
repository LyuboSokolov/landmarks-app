import { Link } from 'react-router-dom';

export const Landmark = ({
    landmark
}) => {
    return (
        <div className="col-sm-4 sm-margin-b-50">
            <div className="margin-b-20">
                <img
                    className="img-responsive wow fadeIn"
                    src={landmark.imgUrl}
                    alt="God's eyes cave"
                    data-wow-duration=".3"
                    data-wow-delay=".1s"
                />
            </div>
            <h4>
                <Link to={`/landmarks/details/${landmark._id}`}>{landmark.title}</Link>
      
            </h4>
            <p>
                {landmark.description}
            </p>
        </div>
    );
};