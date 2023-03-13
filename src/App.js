import './App.css';
import CustomMenu from "./layout/menu";
import Home from "./views/home";

function App() {
    return (
        <CustomMenu>
            <Home/>
        </CustomMenu>
    );
}

export default App;
