import { signOut } from "@firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../firebase/firebase-config";
import "./TeamPage.scss";

const TeamPage = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.curUser);
    const logOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <div>
            <button onClick={logOut}>logout👉️ {user}</button>
            <div className="teamYouOwn">
                <h2>Team you own</h2>
            </div>
            <div className="teamYouCreate">
                <h2>Team you Create</h2>
            </div>
        </div>
    );
};


export default TeamPage;
