import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <div className="promo-block">
            <div className="container">
                <div className="margin-b-40">
                    <h1 className="promo-block-title">Amazing places in Bulgaria.</h1>
                    <p className="promo-block-text">
                        Look no further. You came to the right ... place
                    </p>
                </div>
                <Link
                to ="/landmarks"
                    className="js_popup-youtube btn-theme btn-theme-md btn-white-bg text-uppercase"

                    title="Intro Video"
                >
                    Catalog with Landmarks
                </Link>
            </div>
        </div>
    );
};