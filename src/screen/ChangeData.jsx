import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUpdateDataMutation } from "../redux/api/api";
import NavBar from "../components/NavBar";

function ChangeData(){
    const location = useLocation();
    const [update_data,{isLoading, isError, isSuccess}] = useUpdateDataMutation()
    const post = location.state;
    const [body, setBody] = useState("");
    const change_submit = async (event, id, body)=>{
        event.preventDefault();
        const posts = {
            body: body
        };
        try{
            await update_data({id: id,posts});
            if(isSuccess){
                setBody("")
            }
        }catch(error){
            console.log(error)
        }
    }
    return <>
        <NavBar/>
        <br/>
        <br/>
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