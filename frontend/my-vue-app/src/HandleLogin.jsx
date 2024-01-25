import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HandleLogin() {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('access_token');

    useEffect(() => {
        if (code) {
            console.log("Authorization token:", code);
            // How to handle properly client secret?
        }
    }, [code]);


        const navigate = useNavigate();

    const goBack = () => {
        console.log(code)
        navigate('/', { state: { code: code } })
    };

    return (
        <div>
            <h1>You've been authenticated</h1>
            <button onClick={goBack}>Go to page</button>
        </div>
    );
}

export default HandleLogin;