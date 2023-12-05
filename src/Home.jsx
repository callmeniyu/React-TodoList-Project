import axios from "axios"
import React, { useEffect, useState } from "react"

function Home() {
    const [list, setList] = useState([]);
   
    // const [isClicked, setClicked] = useState("false")
    const url = "http://192.168.137.235:5000";

    useEffect(() => {
        axios
            .get(url+"/get")
            .then((result) => setList(result.data))
            .catch((err) => console.log(err));
    }, [])

    function handleListItem(id) {
        axios
            .put(url+"/update/" + id)
            .then((result) => console.log(result.data))
            .catch((err) => console.log(err))
    }
    return (
        list.map((todo) => (
            <div className="itemsDiv">
            <div className="checkbox-wrapper-11">
                <input id="02-11" type="checkbox" name="r" value="2" onClick={() => handleListItem(todo._id)} key={todo._id} />
                <label for="02-11"> { todo.item }</label>
            </div>
        </div>
            ))
        
    )

}

export default Home;
