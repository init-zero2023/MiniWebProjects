import React, { useState } from "react";


function TodoItem(props){

    const [isDone, setIsDone] = useState(false);


    function changeState(){
        setIsDone(oldstate => !oldstate);
    }

    return (<li style={{textDecoration: isDone? "line-through": "none"}} onClick={changeState}>{props.text}</li>);
}


export default TodoItem;