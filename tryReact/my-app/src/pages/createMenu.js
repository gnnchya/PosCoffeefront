import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import {createPost, getMenu } from '../actions/posts'
// import PostList from '../components/PostList'
export default createMenu

function createMenu() {
    
    const [posts, setPosts] = useState([])
    const [menu, setMenu] = useState({})
    useEffect(() => {
        getList()
      }, [])
    
      const getList = async () => {
        try {
          const response = await getMenu()
    
          if (response.status === 200) {
            setPosts(response.data)
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
    // const addClick = async (data) => {
    //     alert(data.data)
    //     console.log(data)
    //     // try {
    //     //     const response = await createPost(data)
    //     //     alert(response.data)
    //     // //   if (response.status === 201) {
    //     // //     getList()
    //     // //   }
    //     // } catch (error) {
    //     //     console.log(console.error())
    //     // //   alert(error)
    //     // }
    //   }

    return(
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
            <Link to="/homepage"></Link><span className="v6_32">POS COFFEE</span>
            <form>
            <label>
            <span className="v6_276">Name : </span>
                <input className="v6_277" type='text' name='name' onChange={handleChangeInput} />
            </label>
            {/* <label> */}
            <span className="v6_278">Category :</span>
                <input className="v6_279" type='text' name='category' onChange={handleChangeInput} />
            {/* </label> */}
            <span className="v6_281">Ingredient :</span>
            {/* <label> */}
            <span className="v6_283">Name :</span>
                <input className="v6_282" type='text' name='ingredient_name' onChange={handleChangeInput} />
            {/* </label> */}
            {/* <label> */}
            <span className="v6_284">Amount :</span>
                <input className="v6_285" type='number' name='amount' onChange={handleChangeInput} />
            {/* </label> */}
            {/* <label> */}
            <span className="v6_286">Price :</span>
                <input className="v6_287" type='number' name='price' onChange={handleChangeInput} />
            {/* </label> */}
            {/* <label> */}
            <span className="v6_288">Available :</span>
                <input className="v6_289" type='checkbox' name='available' onChange={handleChangeInput} />
            {/* </label> */}
            <div className="v6_295">
                <div className="v6_290"></div>
                <div className="name"></div>
                <div className="name"></div>
            </div>
            <div className="v6_296">
                <div className="v6_297"></div>
                <div className="name"></div>
                <div className="name"></div>
            </div>
            <button className="v6_192" onClick={addClick}>  
                {<span className="v6_194">Create Menu</span> }
            </button>
            </form>
        </div>
    )
}