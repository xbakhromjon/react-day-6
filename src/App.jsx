import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
