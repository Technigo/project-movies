import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

const Error = () => {
    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate("/")
    }

    return (
        <div className="error-page">
            <p className="error-message">Sorry, this page doesn't exist</p>
            <Button
            onClick={onBackButtonClick}
            top="65%"
            left="35%"
            topDesktop="55%"
            leftDesktop="40%"
            background="white"
            width="260px"
            height="50px"
            color="black"
            fontSize="1.5rem"
            backgroundHover="#4d658c"
            colorHover="white"
            >
                Return to homepage
            </Button>
        </div>
    )
}

export default Error