import React, { useEffect, useState } from "react"
import axios from "axios"

function CreateArea() {
    const [todo, setTodo] = useState("")
    const url = "http://192.168.137.235:5000";


    function handleClick() {
        axios
            .post(url+"/add", { todo: todo })
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }

    return (
        <div className="inputArea" >
            <input type="text" name="todo" id="" className="inpuText" onChange={(e) => setTodo(e.target.value)} />
            <button onClick={handleClick} type="submit">+</button>
        </div>  
    )
}

export default CreateArea
