import './App.css';
import CustomMenu from "./layout/menu";
import Home from "./views/home";
import {ConfigProvider} from 'antd';
import {Routes, Route} from 'react-router-dom'
import MaterialEntryToWorkStationList from "./views/marerialEntryToWorkStation/list";
import MaterialEntryToWorkStationCreate from "./views/marerialEntryToWorkStation/create";

function App() {
    return (
        <ConfigProvider direction='rtl' theme={{
            token: {
                fontFamily: 'IRANSans'
            }
        }}>
            <CustomMenu>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Material/MaterialEntryToWorkStation/list' element={<MaterialEntryToWorkStationList/>}/>
                    <Route path='/Material/MaterialEntryToWorkStation/create' element={<MaterialEntryToWorkStationCreate/>}/>
                </Routes>
            </CustomMenu>
        </ConfigProvider>
    );
}

export default App;
