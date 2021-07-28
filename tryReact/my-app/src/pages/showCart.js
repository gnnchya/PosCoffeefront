import React from "react"
import {Link} from "react-router-dom";

function ShowCart(){
    return(
        <div className="v1_3">
            <div className="v6_3"></div>
            <div className="v6_2"></div>
            <Link to="/showCart"><div className="v6_10">
                <span className="v6_8">cart</span>
            </div></Link>
            <div className="v6_12"></div>
            <span className="v6_13">SHOP</span>
            <Link to="/showMenu?page=1"><div className="v6_14">MENU</div></Link>
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
            
            <div className="orderArea">   
                <div className="orders"> 
                    <span class="v14_84">Name : </span>
                    <div class="v14_85"></div><span class="v14_86">Description :</span>
                    <div class="v14_87"></div><span class="v17_112">Price :</span>
                    <div class="v17_113"></div><span class="v17_106">Amount :</span>
                    <div class="v17_107"></div>
                </div>
            </div>
           
            
            <div className="payment">
                <span class="v17_136">Paid :</span>
                <div class="v17_137"></div><span class="v17_138">Method :</span>
                <div class="v17_139"></div><span class="v17_140">Type :</span>
                <div class="v17_141"></div><span class="v17_144">Total Price :</span>
                <div class="v17_145"></div><span class="v17_142">Destination :</span>
                <div class="v17_143"></div>

                <div class="v14_81">
                    <span class="v14_82">Finish</span>
                </div>
            </div>

        </div>

    
    )
}

export default ShowCart