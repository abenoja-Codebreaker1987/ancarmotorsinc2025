import React from "react";
import Footer from '../Footer';
import TermandCondition from "./TermandCondition";
import './TermsAndConditionNav.css';
const TermsAndConditionNav = () => {
    return (
        <div className="TermsAndConditionNavContainer">
            <>
            <TermandCondition />
            <Footer />
            </>
        </div>
    );
}
export default TermsAndConditionNav;