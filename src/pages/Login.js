import React from "react";
import NavBar from "../components/NavBar";

function Login() {
    return (
        <>
            <header>
                {/* Save space for NavBar */}
                <NavBar />
            </header>
            <main>
                <h1>Login</h1>
                <form>
                    <div>
                        <label for="username"></label>
                        <input id="username" type="text" name="username" placeholder="username" />
                    </div>
                    <br />
                    <div>
                        <label for="password"></label>
                        <input id="password" type="text" name="password" placeholder="password" />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
};

export default Login;