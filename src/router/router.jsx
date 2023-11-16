import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from "react-router-dom";
import App from "../App";
import Read from "../screen/Read";

function AppRouter(){
    return <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="read" element={<Read/>}/>
            {/* <Route path="create" element={<App/>}/> */}
            {/* <Route path="update" element={<App/>}/> */}
            {/* <Route path="delete" element={<App/>}/> */}
        </Routes>
    </Router>
}

export default AppRouter