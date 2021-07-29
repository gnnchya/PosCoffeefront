import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { getCart } from "../actions/posts";

function ShowCart() {
    const [menuItem, setMenuItems] = useState([])

    const [cart, setCart] = useState({})
    const id = "pondnarawich"
    const data = "pondnarawich"
    const getList = async (e) => {
        try {
            const response = await getCart(id)
            console.log(response.data.data)
            // alert(response.data.data[0])
            if (response.status === 200) {
                setCart(response.data.data || {})
            }
        } catch (error) {
            alert(error)
        }
    }

    // cart => setMenuItems(cart.Menu)
    const handleChangeInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMenuItems((oldValue) => ({ ...oldValue, [name]: value }))

    }
    return (
        <div className="v1_3">
            <div className="v6_3"></div>
            <div className="v6_2"></div>
            <Link to="/showCart"><div className="v6_10">
                <span className="v6_8">cart</span>
            </div></Link>
            <div className="v6_12"></div>
            <span className="v6_13">SHOP</span>
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

            <div className="orderArea">
            {menuItem.map((item, index) => {
                return (
                <div className="orders">
                    <span class="v14_84">Name : </span><div class="v14_85" key={index}>{item.name}</div>
                    <span class="v14_86">Description :</span><div class="v14_87" key={index}>{item.option}</div>
                    <span class="v17_112">Price :</span><div class="v17_113" key={index}>{item.price}</div>
                    <span class="v17_106">Amount :</span><div class="v17_107" key={index}>{item.amount}</div>
                    
                </div>
                )
            })}
            </div>


            <div className="payment">
                <span class="v17_136">Paid :</span><input class="v17_137" type='number' name='name' onChange={handleChangeInput}></input>
                <span class="v17_138">Method :</span><input class="v17_139" type='text' name='name' onChange={handleChangeInput}></input>
                <span class="v17_140">Type :</span><input class="v17_141" type='text' name='name' onChange={handleChangeInput}></input>
                <span class="v17_144">Total Price :</span><input class="v17_145" type='number' name='name' onChange={handleChangeInput}></input>
                <span class="v17_142">Destination :</span><input class="v17_143" type='number' name='name' onChange={handleChangeInput}></input>


                <Link to={{pathname:`/changeBill/${id}` ,state:data}}><div class="v14_81">
                    <span class="v14_82">Finish</span>
                </div></Link>
            </div>

        </div>


    )
}

export default ShowCart