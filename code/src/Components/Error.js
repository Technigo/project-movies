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
            position="relative"
            background="white"
            width="190px"
            height="45px"
            color="black"
            fontSize="1.1rem"
            fontSizeDesktop="1.5rem"
            backgroundHover="#4d658c"
            colorHover="white"
            widthDesktop="240px"
            heightDesktop="55px"
            >
                Return to homepage
            </Button>
        </div>
    )
}

export default Error