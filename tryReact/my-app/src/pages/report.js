import React, { useState, useEffect } from 'react'
import testUtils from 'react-dom/test-utils';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, getEachMenu, addToCart } from '../actions/posts'
// import PostList from '../components/PostList'
export default Report

function Report() {
    const [menuItem, setMenuItems] = useState([])
    const [menu, setMenu] = useState([])
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState()
    const [cart, setCart] = useState([])
    useEffect(() => {
        getList()
    }, [])
    let {id} = useParams()
    const getList = async (e) => {
        try {
            const response = await getEachMenu(id)
            console.log(response.data.data)
            // alert(response.data.data[0])
            if (response.status === 200) {
                setMenuItems(response.data.data || [])
            }

        } catch (error) {
            alert(error)
        }
    }

    const addCart = async (e) => {
        try {
            e.preventDefault()
            console.log("menuItem", menuItem)
            const temp = {_id:menuItem.id, category: menuItem.category, name:menuItem.name, ingredient:menuItem.ingredient, price:+menuItem.price, available:menuItem.available, amount:+amount, option:description}

            let tempMenu = [...menu]
            tempMenu = menu.push(temp)
            const cartData = {_id: id, customer_id: "test", menu: menu}
            let test2 = [...cart]
            test2 = cart.push(cartData)
            // setCart(cartData)
            console.log("cart", cart)
            const response = await addToCart({id:id, menu:cart})
            console.log(response.data.data)
            // alert(response.data.data[0])
            // if (response.status === 200) {
            //     setCart(response.data.data || [])
            // }
        } catch (error) {
            alert(error)
        }
    }

    return (
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
           
            <div class="v18_47"></div>
            <div class="v18_52"></div>
            <span class="v18_53">General Report</span>
            <div class="v18_188">
                <div class="v18_189"></div>
                <span class="v18_190">View</span>
            </div>
            <div class="v18_191">
                <div class="v18_192"></div>
                <span class="v18_193">Print</span>
            </div>
            <div class="v18_194"></div>
            <div class="v18_195"></div>
            <span class="v18_196">Sale Report</span>
            <div class="v18_197">
                <div class="v18_198"></div>
                <span class="v18_199">View</span>
            </div>
            <div class="v18_200">
                <div class="v18_201"></div>
                <span class="v18_202">Print</span>
            </div>
            <div class="v18_203"></div>
            <div class="v18_204"></div>
            <span class="v18_205">Stock Report</span>
            <div class="v18_206">
                <div class="v18_207"></div>
                <span class="v18_208">View</span>
            </div>
            <div class="v18_209">
                <div class="v18_210"></div>
                <span class="v18_211">Print</span>
            </div>
        </div>
    )
}