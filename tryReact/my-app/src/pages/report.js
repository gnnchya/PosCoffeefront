import React, { useState, useEffect } from 'react'
import testUtils from 'react-dom/test-utils';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createPost, getEachMenu, addToCart } from '../actions/posts'
// import PostList from '../components/PostList'
export default Report

function Report() {
    const [menu, setMenu] = useState({})
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [itemName, setItemName] = useState("")
    const [amount, setAmount] = useState("")
    const [available, setAvailable] = useState(false)


    function todayDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 

        var date = yyyy+'-'+mm+'-'+dd
        return date
    }

    function firstDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear()-1;
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 

        var date = yyyy+'-'+mm+'-'+dd
        return date
    }

    const addClick = async (e) => {
        try {
            e.preventDefault()
            const tempIngredients ={item_name:itemName, amount: +amount}
            const temp = {...menu, price:+menu.price, category:[...categories, category], ingredient:[...ingredients, tempIngredients], available:available}
            const response = await createPost(temp)
            console.log(response)
            

            if (response.status === 201) {
                console.log("create", response)
            }
        } catch (error) {
            // if (error.status === 422){
            //     alert("422")
            // }
            alert(error)
        }
      }


    const handleChangeInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMenu((oldValue) => ({ ...oldValue, [name]: value }))

    }
    const handleChangeCategoryInput = (e) =>{

        e.preventDefault()
        let test = [...categories, category]
        setCategories(test)
        setCategory("")
    }

    const handleChangeIngredientInput = (e) =>{
        e.preventDefault()
        const tempIngredientObject = {item_name: itemName, amount: +amount}
        let test2 = [...ingredients, tempIngredientObject]
        setIngredients(test2)
        setAmount("")
        setItemName("")
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
           
            <span className="genReport">General / Sale Report </span>
            <span className="format">Format : </span>
            <select className="formatInput" type='text' name='format' onChange={handleChangeInput}>
                <option value="excel">Excel</option>
                <option value="csv">CSV</option>
            </select>

            <span className="from">Start Date : </span>
            <input className="frominput" type="date" id="start" name="start"
                    min={firstDate()} max={todayDate()} />

            <span className="until">Until Date : </span>
            <input className="untilinput" type="date" id="until" name="until"
                    min={firstDate()} max={todayDate()} />

            <span className="stockReport">Stock Report </span>

            <span className="field">Field : </span>
            <select className="fieldInput" type='text' name='field' onChange={handleChangeInput}>
                <option value="name">Name</option>
                <option value="amount">Amount</option>
                <option value="importDate">Import Date</option>
                <option value="expireDate">Expire Date</option>
            </select>

            <span className="order">Ordering : </span>
            <select className="orderInput" type='text' name='order' onChange={handleChangeInput}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>

            <div class="v18_47">
                <div class="v18_52"></div>
                <span class="v18_53">General Report</span>
                <button class="v18_188">
                    <span class="v18_190">Download</span>
                </button>
            </div>
        
            <div class="v18_194">
                <div class="v18_195"></div>
                <span class="v18_196">Sale Report</span>
                <button class="v18_198">
                    <span class="v18_199">Download</span>
                </button>
            </div>
       
            <div class="v18_203">
                <div class="v18_204"></div>
                <span class="v18_205">Stock Report</span>
                <button class="v18_207">
                    <span class="v18_208">Download</span>
                </button>
            </div>
            
        </div>
    )
}
