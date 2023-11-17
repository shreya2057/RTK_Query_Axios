import { useState } from "react";
import { useLocation } from "react-router-dom";

function ChangeData(){
    const location = useLocation();
    const post = location.state;
    const [body, setBody] = useState("");
    return <>
        <input  
            type='text'
            disabled
            value={post.post_title}
        />
        <br/>
        <br/>
        <input 
            placeholder='Enter the body' 
            type='text'
            onChange={(event)=>setBody(event.target.value)}
            value={body}
        />
        <br/>
        <br/>
        <button 
            onClick={(event)=>{change_submit(event)}}
        >
            Add
        </button>
    </>
}

export default ChangeData;