import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'antd/dist/antd.css';

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.querySelector('#root'));