import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import UserList from '../Pages/UserList';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/user" element={<UserList />}/>  
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Router;