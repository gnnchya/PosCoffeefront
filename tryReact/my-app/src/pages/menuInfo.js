import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, getEachMenu, addToCart } from '../actions/posts'
// import PostList from '../components/PostList'
export default MenuInfo

function MenuInfo(id) {
    const [menuItem, setMenuItems] = useState([])
    const [menu, setMenu] = useState({})
    const [cart, setCart] = useState({})
    useEffect(() => {
        getList()
    }, [])

    const getList = async (e) => {
        try {
            const response = await getEachMenu(id)
            console.log(response.data.data)
            // alert(response.data.data[0])
            if (response.status === 200) {
                setMenuItems(response.data.data)
            }
        } catch (error) {
            alert(error)
        }
    }

    const addCart = async (e) => {
        try {
            e.preventDefault()
            const response = await addToCart(cart)
            console.log(response.data.data)
            // alert(response.data.data[0])
            // if (response.status === 200) {
            //     setCart(response.data.data || [])
            // }
        } catch (error) {
            alert(error)
        }
    }


    const handleChangeInput = (e) => {
        const name = e.target.name
        const option = e.target.option
        const amount = e.target.amount
        const value = e.target.value
        setCart((oldValue) => ({ ...oldValue, [name]: value }))
        // if (name === 'title') {
        //     setTitle(value)
        // } else {
        //     setBody(value)
        //     setCategory(category)
        // }

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
            <button class="v12_338">

                < div class="v12_339" onClick={addToCart}>
                <span class="v12_340">Add to cart</span>
                </ div>
            </button>
            <Link to="/updateMenu"><div class="v14_6">
                <div class="v14_7"></div><span class="v14_8">Update</span>
            </div></Link>
            <div class="v14_9">
                <div class="v14_10"></div><span class="v14_11">Delete</span>
            </div>
            {menuItem.map((item, index) => {
                return (
                    <div>
                        <span class="v12_342">Name : </span><div class="v12_343" name = "name" key={index}>{item.name}</div>
                        <span class="v12_351">Price :</span><div class="v12_352" name = "price" key={index}>{item.price}</div>
                        <span className="v12_364">Description :</span>
                        <input className="v12_365" type='text' name='option' onChange={handleChangeInput} />
                        <span className="v12_366">Amount :</span>
                        <input className="v12_367" type='number' name='amount' onChange={handleChangeInput} />
                    </div>
                )
            })}
        </div>
    )
}