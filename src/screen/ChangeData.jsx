import { useLocation } from "react-router-dom";

function ChangeData(){
    const location = useLocation();
    const post = location.state;
    return <>
        <input  
            type='text'
            // onChange={(event)=>setBody(event.target.value)}
            // value={body}
        />
        <div>{post.post_id}</div>
    </>
}

export default ChangeData;