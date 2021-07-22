import React from "react"
import {Link} from "react-router-dom";

function HomePage(){
    return(
        <div className="v1_3">
            <div className="v6_3"></div>
            <div className="v6_2"></div>
            <div className="name"></div>
            <Link to="/history"><div className="v6_10">
                <div className="v6_9"></div>
                <span className="v6_8">cart</span>
            </div></Link>
            <div className="v6_12"></div>
            <span className="v6_13">SHOP</span>
            {/*<form action="https://google.com">*/}
            {/*    <input type="submit" value="Go to Google" />*/}
            {/*</form>*/}
            <Link to="/history"><div className="v6_14">MENU</div></Link>
            <Link to="/order"><span className="v6_15">ORDER</span></Link>
            <Link to="/money"><span className="v6_19">MONEY</span></Link>
            <Link to="/stock"><span className="v6_20">STOCK</span></Link>
            <span className="v6_16">ADMIN</span>
            <Link to="/report"><span className="v6_17">REPORT</span></Link>
            <Link to="/history"><span className="v6_18">HISTORY</span></Link>
            <span className="v6_25">
                <div className="v6_22"></div>
                <span className="v6_23">LOG OUT</span>
            </span>
            <span className="v6_26">WELCOME</span>
            <Link to="/homepage"></Link><span className="v6_32">POS COFFEE</span>
        </div>
    )
}

export default HomePage