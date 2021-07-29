import React from "react"
import { Link } from "react-router-dom";

function OrderInfo() {
    return (
        <div className="v1_3">
            <div className="v6_3"></div>
            <div className="v6_2"></div>
            <Link to="/showCart"><div className="v6_10">
                <span className="v6_8">cart</span>
            </div></Link>
            <div className="v6_12"></div>
            <span className="v6_13">SHOP</span>
            {/*<form action="https://google.com">*/}
            {/*    <input type="submit" value="Go to Google" />*/}
            {/*</form>*/}
            <Link to="/showMenu/1"><div className="v6_14">MENU</div></Link>
            <Link to="/showOrder"><span className="v6_15">ORDER</span></Link>
            <Link to="/showMoney"><span className="v6_19">MONEY</span></Link>
            <Link to="/showStock"><span className="v6_20">STOCK</span></Link>
            <span className="v6_16">ADMIN</span>
            <Link to="/showReport"><span className="v6_17">REPORT</span></Link>
            <Link to="/showHistory"><span className="v6_18">HISTORY</span></Link>
            <span className="v6_25">
                <div className="v6_22"></div>
                <span className="v6_23">LOG OUT</span>
            </span>
            <Link to="/homepage"><span className="v6_32">POS COFFEE</span></Link>
            <span class="v17_509">Name : </span>
            <div class="v17_510"></div><span class="v17_511">Paid :</span>
            <div class="v17_512"></div><span class="v17_513">Method :</span>
            <div class="v17_514"></div><span class="v17_515">Type :</span>
            <div class="v17_516"></div><span class="v17_517">Total Price :</span>
            <div class="v17_518"></div><span class="v17_519">Destination :</span>
            <div class="v17_520"></div><span class="v17_521">Description :</span>
            <div class="v17_522"></div><span class="v17_523">Price :</span>
            <div class="v17_524"></div><span class="v17_525">Amount :</span>
            <div class="v17_526"></div>
            <div class="v17_527">
                <div class="v17_528"></div>
            </div>
            <div class="v17_529">
                <div class="v17_530"></div>
            </div><span class="v17_531">+</span><span class="v17_532">-</span>
            <span class="v17_533">Name : </span><div class="v17_534"></div>
            <span class="v17_535">Description :</span><div class="v17_536"></div>
            <span class="v17_537">Price :</span>
            <div class="v17_538"></div><span class="v17_539">Amount :</span>
            <div class="v17_540"></div>
            <div class="v17_541">
                <div class="v17_542"></div>
            </div>
            <div class="v17_543">
                <div class="v17_544"></div>
            </div><span class="v17_545">+</span><span class="v17_546">-</span>
            <div class="name"></div>
        </div>
    )
}

export default OrderInfo