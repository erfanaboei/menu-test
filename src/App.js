import './App.css';
import CustomMenu from "./layout/menu";
import Home from "./views/home";
import {ConfigProvider} from 'antd';

function App() {
    return (
        <ConfigProvider direction='rtl' theme={{
            token: {
                fontFamily: 'IRANSans'
            }
        }}>
            <CustomMenu>
                <Home/>
            </CustomMenu>
        </ConfigProvider>
    );
}

export default App;
