

import React from "react";
//import 'antd/dist/reset.css';
import Home from './Home.tsx';
import Sign from "./Sign.tsx";
import Tweet from "./Tweet"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div className="App" style={{height: '100%',margin: 0,padding: 0}}>
      <BrowserRouter>

      <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/index" element={<Home />}>
              <Route path=":id" element={<Home />}></Route>
            </Route>
            <Route path="/sign" element={<Sign />}></Route>
            <Route path="/tweet" element={<Tweet />}>
              <Route path=":id" element={<Tweet />}>
                <Route path=":privacy" element={<Tweet />}></Route>
              </Route>
            </Route>
            


      </Routes>
      



      </BrowserRouter>

    </div>
  );
}

export default App;
