import NavBar from "../components/NavBar";
import { useGetAllDataQuery } from "../redux/api/api"

function Read(){
    const { isLoading, isError, data, isSuccess } = useGetAllDataQuery({})
    console.log(data)
    return <>
        <NavBar/>
        <h3>Posts</h3>
    </>
}

export default Read;                                                                                                                                                                                                                                                                                    