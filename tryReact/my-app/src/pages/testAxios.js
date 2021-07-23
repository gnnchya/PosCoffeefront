import React from 'react'
import axios from 'axios'
function TestAxios() {
    var menu = [];
    axios.get("http://127.0.0.1:8080/pos/menu").then(res => {
        alert(String(res.data.status))
        console.log(res);
        menu = res.data
    });

    return(
        <h2>
            {String(menu.id)}
        </h2>
    )
}

export default TestAxios
