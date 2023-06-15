import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomeScreen from './home/HomeScreen';


const routes = [
    {
        element: <HomeScreen/>,
        path: '/home'
    },
    {
        element: <NewScreen/>,
        path: '/newscreen'
    },
]

const NewScreen = ()=>{
    return(
        <div>
              <Link to="/home">  <button> Piche le chalo</button></Link>
            </div>
    )
}

const MainContainer = () => {

    return (
    <Routes>
       {routes.map( m => (
        <Route
            element={m.element}
            path={m.path}
        />
       ))}
    </Routes>
    )

}



export default MainContainer;