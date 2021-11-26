import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='signUp' element={< SignUp />} />
        </Routes>
    );
};

export default App;
