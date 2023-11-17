import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from "react-router-dom";
import App from "../App";
import Read from "../screen/Read";
import Create from "../screen/Create";
import Update from "../screen/Update";
import ChangeData from "../screen/ChangeData";

function AppRouter(){
    return <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="read" element={<Read/>}/>
            <Route path="create" element={<Create/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="change" element={<ChangeData/>}/>
        </Routes>
    </Router>
}

export default AppRouter