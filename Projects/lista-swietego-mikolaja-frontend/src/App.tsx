import React from 'react';
import './App.css';
import {GiftsView} from "./views/GiftsView";
import {NavLink, Route, Routes} from "react-router-dom";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./components/SingleGiftView";
import {ChildView} from './views/ChildView';

function App() {
    const colorOfLink = ({isActive}: { isActive: boolean; }) => ({color: isActive ? 'green' : 'red'})
    return (
        <>
            {/*it should be in other component too but for learning purpose it's here */}
            <h1>Santa App</h1>
            Menu:
            <NavLink style={colorOfLink} to={'/gift'}>
                Switch to gifts
            </NavLink> |
            <NavLink style={colorOfLink} to={'/child'}>Switch to children</NavLink>
            <Routes>
                {/*<Route path='/' element={<MainView/>}/>*/}
                <Route path='/gift' element={<GiftsView/>}/>
                <Route path='/gift/:GiftId' element={<SingleGiftView/>}/>
                <Route path='/child' element={<ChildView/>}/>
                <Route path='*' element={<NotFoundView/>}/>
            </Routes>
        </>
    );
}

export default App;
