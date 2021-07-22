import React from "react"
import { Link } from "react-router-dom";

function ShowMenu() {
    return (
        <div className="v1_3">
            <div className="v6_3"></div>
            <div className="v6_2"></div>
            <Link to="/showCart"><div className="v6_10">
                <div className="v6_9"></div>
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

            <div class="pagination">
                <a href="#">❮</a>
                <a href="#">❯</a>
            </div>

            <Link to="/menuInfo"><div class="v12_301">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_304">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_302">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_303">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_305">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_308">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_306">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_307">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_310">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_313">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_311">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
            <Link to="/menuInfo"><div class="v12_312">
                <div class="v6_167"></div>
                <div class="v6_168"></div><span class="v6_169">ICED LATTE</span><span class="v6_170">50 $</span>
            </div></Link>
        </div>
    )
}

export default ShowMenu