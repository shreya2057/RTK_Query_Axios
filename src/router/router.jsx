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
import Delete from "../screen/Delete";

function AppRouter(){
    return <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="read" element={<Read/>}/>
            <Route path="create" element={<Create/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="change" element={<ChangeData/>}/>
            <Route path="delete" element={<Delete/>}/>
        </Routes>
    </Router>
}

export default AppRouter