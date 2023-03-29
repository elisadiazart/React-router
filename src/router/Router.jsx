import { Route, Routes } from "react-router-dom"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<h1>home</h1>}/>
            <Route path="/explore" element={<h1>explore</h1>}/>
            <Route path="/contact" element={<h1>contact</h1>}/>
        </Routes>
    )
}


export default Router