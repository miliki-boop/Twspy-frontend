

import React from "react";
//import 'antd/dist/reset.css';
import Home from './Home.tsx';
import Sign from "./Sign.tsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div className="App" style={{height: '100%',margin: 0,padding: 0}}>
      <BrowserRouter>

      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/index" element={<Home />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
      </Routes>
      



      </BrowserRouter>

    </div>
  );
}

export default App;
