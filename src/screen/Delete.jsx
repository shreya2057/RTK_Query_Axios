import NavBar from "../components/NavBar";
import { useDeleteDataMutation, useGetAllDataQuery } from "../redux/api/api"

function Delete(){
    const { isLoading, isError, data, isSuccess } = useGetAllDataQuery({});
    const [delete_data] = useDeleteDataMutation();
    const handle_delete = async(id)=>{
        try{
            await delete_data(id);
            if(isSuccess){
                alert("Deleted")
            }
        }catch(error){
            console.log(error);
        }
    };
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
                        handle_delete(item.id)
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