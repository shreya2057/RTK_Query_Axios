import { useLocation } from "react-router-dom";

function ChangeData(){
    const location = useLocation();
    const post = location.state;
    console.log(post)
    return <>
        <div>{post.post_id}</div>
    </>
}

export default ChangeData;