import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "styles/Button";


const NotFound = ( ) => {
   

    const navigate = useNavigate();

    return <Button onClick={() => navigate('/')}>Back</Button>
}

export default NotFound;