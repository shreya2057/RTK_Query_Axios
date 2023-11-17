import { useState } from "react";
import { useLocation } from "react-router-dom";

function ChangeData(){
    const location = useLocation();
    const post = location.state;
    const [body, setBody] = useState("");
    const change_submit = (event, id, body)=>{
        event.preventDefault();
        const data = {
            body: body
        };
        try{

        }catch(error){
            
        }
    }
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
            onClick={(event)=>{change_submit(event, post.post_id, body)}}
        >
            Add
        </button>
    </>
}

export default ChangeData;