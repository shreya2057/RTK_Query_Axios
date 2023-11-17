import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useGetAllDataQuery } from "../redux/api/api"

function Update(){
    const { isLoading, isError, data, isSuccess } = useGetAllDataQuery({});
    const navigate = useNavigate();

    return <>
        <NavBar/>
        <h3>Posts</h3>
        {
            isLoading &&
            <div>Loading...</div>
        }
        {
            isSuccess &&
            data.map((item, index)=><div key={index}>
                <button 
                    className="cards"
                    onClick={()=>{
                        const id = item.id;
                        const title = item.title;
                        navigate(
                            "/change", 
                            { state: {
                                post_id: id,
                                post_title: title
                            }}
                        )
                    }}
                >
                    <div><b>{item.title}</b></div>
                    <div>{item.body}</div>
                </button>
            </div>)
        }
        {
            isError && 
            <div>Error</div>
        }
    </>
}

export default Update;                                                                                                                                                                                                                                                                                    