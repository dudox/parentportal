import React from "react";

const Card = ({ children }) => {
    return (
        <>
            <div id="AppCard">
                {children}
            </div>
        </>
    );
}

export default Card;