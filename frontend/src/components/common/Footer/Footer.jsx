import React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer>
            <div className="copyright-container">
                <p>&copy; {new Date().getFullYear()} Powered by Saad Ouardi | All Rights Reserved.</p>
            </div>
        </footer>
    );
};
