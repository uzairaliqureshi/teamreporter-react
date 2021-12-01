import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'antd/dist/antd.css';
import './index.scss';
import { Provider } from "react-redux";
import store from "./redux/store";


reactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));