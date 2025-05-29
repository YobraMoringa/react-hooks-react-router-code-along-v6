import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfile() {
    const [user, setUser] = useState([]);
    const specificUser = useParams();
    const userId = specificUser.id

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
            .then(resp => resp.json())
            .then(userArray => setUser(userArray))
            .catch(error => console.log("SERVER ERROR", error))
    }, [userId]);

    if (!user.name) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <h1>{user.name}</h1>
            </main>
        </>
    );
};

export default UserProfile;