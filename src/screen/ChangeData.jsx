import { useLocation } from "react-router-dom";

function ChangeData(){
    const location = useLocation();
    const post = location.state;
    return <>
        <input  
            type='text'
            disabled
            value={post.post_title}
        />
    </>
}

export default ChangeData;