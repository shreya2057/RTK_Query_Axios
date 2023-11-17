import NavBar from "../components/NavBar";
import { useGetAllDataQuery } from "../redux/api/api"

function Delete(){
    const { isLoading, isError, data, isSuccess } = useGetAllDataQuery({});
    return <>
        <NavBar/>
        <h3>Delete Posts</h3>
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

export default Delete;