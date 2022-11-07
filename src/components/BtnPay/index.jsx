import React from 'react';
import { Link } from "react-router-dom";
function BtnPay() {

    return(
        <Link to="/order" className="button pay-btn"><span>Прожолжить</span></Link>
    );
}
export default BtnPay;