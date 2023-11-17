import NavBar from "../components/NavBar";
import { useGetAllDataQuery } from "../redux/api/api"

function Update(){
    const { isLoading, isError, data, isSuccess } = useGetAllDataQuery({})
    console.log(data)
    
    return <>
        <NavBar/>
        <h3>Posts</h3>
        {
            isLoading &&
            <div>Loading...</div>
        }
        {
            isSuccess &&
            data.map((item, index)=><div className="cards" key={index}>
                <div><b>{item.title}</b></div>
                <div>{item.body}</div>
            </div>)
        }
        {
            isError && 
            <div>Error</div>
        }
    </>
}

export default Update;                                                                                                                                                                                                                                                                                    