import React from "react"
import {Link} from "react-router-dom";

function MenuInfo(){
    return(
        <div className="v1_3">
            <div className="v6_3"></div>
            <div className="v6_2"></div>
            <div className="name"></div>
            <Link to="/showCart"><div className="v6_10">
                <span className="v6_8">cart</span>
            </div></Link>
            <div className="v6_12"></div>
            <span className="v6_13">SHOP</span>
            {/*<form action="https://google.com">*/}
            {/*    <input type="submit" value="Go to Google" />*/}
            {/*</form>*/}
            <Link to="/showMenu"><div className="v6_14">MENU</div></Link>
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
            <div class="v12_338">
            
            <div class="v12_339"></div><span class="v12_340">Add to cart</span>
        </div>
        <Link to="/updateMenu"><div class="v14_6">
            <div class="v14_7"></div><span class="v14_8">Update</span>
        </div></Link>
        <div class="v14_9">
            <div class="v14_10"></div><span class="v14_11">Delete</span>
        </div>
        <span class="v12_341">POS COFEE</span><span class="v12_342">Name : </span>
        <div class="v12_343"></div><span class="v12_344">Category :</span>
        <div class="v12_345"></div><span class="v12_346">Ingredient :</span><span class="v12_347">Name :</span>
        <div class="v12_348"></div><span class="v12_349">Amount :</span>
        <div class="v12_350"></div><span class="v12_351">Price :</span>
        <div class="v12_352"></div><span class="v12_353">Available :</span>
        <div class="v12_354"></div><span class="v12_364">Description :</span>
        <div class="v12_365"></div><span class="v12_366">Amount :</span>
        <div class="v12_367"></div>
    </div>
    )
}

export default MenuInfo