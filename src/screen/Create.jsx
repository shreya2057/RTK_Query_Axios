import NavBar from "../components/NavBar"; 
import { useState } from "react";
import { usePostDataMutation } from "../redux/api/api";

function Create(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [submit_post, {isLoading, isError, isSuccess}] = usePostDataMutation();
    const posts = {
        title: title,
        body: body
    };
    const post_submit=(event)=>{
        event.preventDefault();
        try{
            submit_post(posts)
            if(isLoading){
                console.log("Loading...")
            }
            if(isSuccess){
                console.log("Success...")
            }
        }catch(error){
            console.log(error)
        }
    }
    return <>
        <NavBar/>
        <h3>Create posts</h3>
        <form>
        <input 
          placeholder='Enter the title' 
          type='text'
          onChange={(event)=>setTitle(event.target.value)}
          value={title}
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
            onClick={(event)=>{post_submit(event)}}
        >
            Add
        </button>
      </form>
    </>
}

export default Create;