import React from "react";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.log(error);

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <h1>Whoops! Something went wrong!</h1>
            </main>
        </>
    );
};

export default ErrorPage;