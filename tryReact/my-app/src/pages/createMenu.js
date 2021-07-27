import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import {createPost, getAllMenu } from '../actions/posts'
// import PostList from '../components/PostList'
export default CreateMenu

function CreateMenu() {
    var ingredientCount = 0;
    var categoryCount = 0;
    const [menuItem, setMenuItems] = useState([])
    const [menu, setMenu] = useState({})
    useEffect(() => {
        getList()
      }, [])
    
    const getList = async (e) => {
        try {
            const response = await getAllMenu()
            console.log(response.data.data)
            // alert(response.data.data[0])
            if (response.status === 200) {
                setMenuItems(response.data.data || [])
            }
        } catch (error) {
          alert(error)
        }
    }

    const addClick = async (e) => {
        try {
            e.preventDefault()
          const response = await createPost(menu)
          console.log("res",menu)

        //   if (response.status === 201) {
        //     getList()
        //   }
        } catch (error) {
          alert(error)
        }
      }


    const handleChangeInput = (e) => {
        const name = e.target.name
        const category = e.target.category
        const ingredient_name = e.target.ingredient_name
        const amount = e.target.amount
        const price = e.target.price
        const available = e.target.available
        const value = e.target.value
        setMenu((oldValue) => ({ ...oldValue, [name]: value }))
        // if (name === 'title') {
        //     setTitle(value)
        // } else {
        //     setBody(value)
        //     setCategory(category)
        // }

    }

    const addCategory = (handleChangeInput) => {
        try{
            if(categoryCount <3){
                var ele = document.createElement("input");
                ele.setAttribute("type", "text")
                ele.setAttribute("class", "v6_279")
                ele.setAttribute("name", "category")
                ele.onchange = {handleChangeInput}
            
                document.getElementById("category1").appendChild(ele);
            }
            }catch (error){
                alert(error)
            }
    }

    const addIngredient = (handleChangeInput) => {
        try{
            if(ingredientCount < 3){
                var name = document.createElement("input");
                var amount = document.createElement("input");
            
                name.setAttribute("type", "text")
                amount.setAttribute("type", "number")
            
                name.setAttribute("class", "addname")
                amount.setAttribute("class", "addAmount")
            
                name.setAttribute("name", "ingredient_name")
                amount.setAttribute("name", "amount")
            
                name.onchange = {handleChangeInput}
                amount.onchange = {handleChangeInput}
            
                document.getElementById("ingredient").appendChild(name);
                document.getElementById("ingredient").appendChild(amount);
            }
            }catch (error){
                alert(error)
            }
    }

    return(
        <div className="v1_3">

        <form className="form">
            <span className="v6_276">Name : </span>
                <input className="v6_277" type='text' name='name' onChange={handleChangeInput} />
                <span className="v6_278">Category :</span>

            <div className="category" id="category1">
                <input className="v6_279" type='text' name='category' onChange={handleChangeInput} />
                <button className="v6_295" onClick={addCategory}></button>
            </div>

            <div className="ingredient" id="ingredient">
                <span className="v6_281">Ingredient :</span>
                <span className="v6_283">Name :</span>
                <button className="v6_296" onClick={addIngredient}> </button>
                <input className="v6_282" type='text' name='ingredient_name' onChange={handleChangeInput} />
                <span className="v6_284">Amount :</span>
                <input className="v6_285" type='number' name='amount' onChange={handleChangeInput}/>
            </div>

            <span className="v6_286">Price :</span>
                <input className="v6_287" type='number' name='price' onChange={handleChangeInput} /*required="true"*//>
            <span className="v6_288">Available :</span>
                <input className="v6_289" type='checkbox' name='available' onChange={handleChangeInput} />
            <button className="v6_192" onClick={addClick}>  
                {<span className="v6_194">Create Menu</span> }
            </button>

            </form >

            <div className="v6_3"></div>
            <div className="v6_2"></div>
            
            <Link to="/showCart"><div className="v6_10">
                <span className="v6_8">cart</span>
            </div></Link>
            <div className="v6_12"></div>
            <span className="v6_13">SHOP</span>
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
           
            <button className="test1" onClick={getList}>  
                {<span className="test2">GET list</span> }
            </button>
            <div className="testok">
                {menuItem.map((item, index) => {
                    return(
                        <div>
                        <h2 key={index} className="test3">{item.id}</h2>
                        <h2 key={index} className="test3">{item.name}</h2>
                        </div>
                    )
                })}    
            </div>
        </div>
    )
}