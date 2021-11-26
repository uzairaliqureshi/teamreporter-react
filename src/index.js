import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('#root'));