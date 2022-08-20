import { useState } from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserDataContext } from "../../context/UserData";

import * as landmarkService from '../../services/landmarkService';

export const AddLandmark = () => {

    const { user } = useContext(UserDataContext);



    const [values, setValues] = useState({
        title: '',
        imgUrl: '',
        located: '',
        description: ''

    });

    const changeHendler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.values(values).some(x => x === '')) {
            alert('Fill all fields!')
        } else {
            landmarkService.create(user.accessToken, values)
                .then(res => {
                    console.log(user);
                });

            navigate('/landmarks');
        }

    }
    return (
        <div className="createTrip">
            <form className="form-createTrip" onSubmit={submitHandler}>
                <div className="title-form">Add Landmark</div>

                <div className="input-container ic1">
                    <input
                        id="title"
                        className="input"
                        type="text"
                        value={values.title}
                        onChange={changeHendler}
                        name="title"
                        placeholder=" "
                    />

                    <div className="cut cut-medium" />
                    <label htmlFor="title" className="placeholder">
                        Title
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="imgUrl"
                        className="input"
                        type="text"
                        value={values.imgUrl}
                        onChange={changeHendler}
                        name="imgUrl"
                        placeholder=" "
                    />
                    <div className="cut cut-short" />
                    <label htmlFor="imgUrl" className="placeholder">
                        imgUrl
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="located"
                        className="input"
                        type="text"
                        value={values.located}
                        onChange={changeHendler}
                        name="located"
                        placeholder=" "
                    />
                    <div className="cut cut-medium" />
                    <label htmlFor="located" className="placeholder">
                        Located
                    </label>
                </div>
                <div className="input-container ic2 description">
                    <textarea
                        id="description" className="input" type="text"
                        value={values.description}
                        onChange={changeHendler}
                        cols="39" rows="4"
                        name="description"
                        placeholder=" "
                    />
                    <div className="cut" />
                    <label htmlFor="description" className="placeholder">
                        Description
                    </label>
                </div>
                <button type="text" className="submit">
                    submit
                </button>
            </form>
        </div>
    );
};