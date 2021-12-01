import { Route, Routes } from "react-router";
import SignIn from "./components/loginSignUp/SignIn";
import SignUp from "./components/loginSignUp/SignUp";
import TeamPage from "./components/teamPage/TeamPage";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='signUp' element={<SignUp />} />
            <Route path='home' element={<TeamPage />} />
        </Routes>
    );
};

export default App;
