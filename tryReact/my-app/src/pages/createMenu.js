import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import {createPost, getMenu } from '../actions/posts'
// import PostList from '../components/PostList'
export default CreateMenu

function CreateMenu() {
    var ingredientCount = 0;
    const [menuItem, setMenuItems] = useState([])
    const [menu, setMenu] = useState({})
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [ingredient, setIngredient] = useState("")
    // useEffect(() => {
    //     getList()
    //   }, [])
    
    // const getList = async (e) => {
    //     try {
    //         const response = await getMenu()
    //         console.log(response.data.data)
    //         // alert(response.data.data[0])
    //         if (response.status === 200) {
    //             setMenuItems(response.data.data || [])
    //         }
    //     } catch (error) {
    //       alert(error)
    //     }
    // }

    const addClick = async (e) => {
        try {
            e.preventDefault()
            var avail = false
            if (menu.available == "on"){
                avail = true
            }
            console.log("category to send", categories)
            const temp = {...menu, price:+menu.price, available: avail, category:categories, ingredient:ingredients}
            const response = await createPost(temp)
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
        const value = e.target.value
        setMenu((oldValue) => ({ ...oldValue, [name]: value }))
        // if (name === 'title') {
        //     setTitle(value)
        // } else {
        //     setBody(value)
        //     setCategory(category)
        // }

    }
    const handleChangeCategoryInput = (e) =>{
        e.preventDefault()
        let test = [...categories, category]
        console.log("category", category)
        console.log("categories", categories)
        console.log("2", test)
        setCategories(test)
    }

    const handleChangeIngredientInput = (e) =>{
        e.preventDefault()
        let test2 = [...ingredients, ingredient]
        console.log("ingredient", ingredient)
        console.log("ingredients", ingredients)
        console.log("2", test2)
        setIngredients(test2)
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

    // console.log(category)
    return(
        <div className="v1_3">

        <form className="form">
            <span className="v6_276">Name : </span>
                <input className="v6_277" type='text' name='name' onChange={handleChangeInput} />
                <span className="v6_278">Category :</span>
                <div className="category" id="category1">
                <input className="v6_279" type='text' name='category'  onChange={(e) => setCategory(e.target.value)} value={category}/>
                <button className="v6_295" onClick={handleChangeCategoryInput}></button >
            </div>
            
            {categories.length>0 && categories.map((categoryItem, index) => {
                return (
                    <div key = {index} className="category"  disabled>
                        <input className="v6_279" type='text' name='category' defaultValue={categoryItem}/>
                    </div>
                )
            })}
          
            
            


            <div className="ingredient" id="ingredient">  
                <span className="v6_281">Ingredient :</span>
                <span className="v6_283">Name :</span>
                <input className="v6_282" type='text' name='ingredient_name' onChange={(e) => setIngredient(e.target.value)} value={ingredient} />
                <span className="v6_284">Amount :</span>
                <input className="v6_285" type='number' name='amount'  onChange={(e) => setIngredient(e.target.value)} value={ingredient}/>
                <button className="v6_296" onClick={handleChangeIngredientInput}> </button>
            </div>

            <div className="addname"> 
            {ingredients.length>0 && ingredients.map((ingredientItem, index) =>{
                console.log("ingredient item", ingredientItem)
                return (
                        <div key={index} className="ingredientAdd" >
                            <span className="v6_283">Name :</span>
                            <input className="v6_282" type='text' name='ingredient[][ingredient_name]' defaultValue={ingredientItem} />
                            <span className="v6_284">Amount :</span>
                            <input className="v6_285" type='number' name='ingredient[][amount]' defaultValue={ingredientItem}/>
                        </div>
                )
            }

            )}
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
           
            {/* <button className="test1" onClick={getList}>  
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
            </div> */}
        </div>
    )
}