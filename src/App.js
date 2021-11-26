import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn";

const App = () => {
    return (
        
        <Routes>
            <Route path='/' element={<SignIn />}/>
        </Routes>
    );
};

export default App;
