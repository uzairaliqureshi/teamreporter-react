import { Route, Routes } from "react-router";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TeamPage from "./components/TeamPage/TeamPage";
// import TeamPage from "./components/TeamPage/TeamPage";

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
