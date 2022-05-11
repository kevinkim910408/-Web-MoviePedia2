// CSS
import './App.scss';

// Components
import Crime from './routes/Crime.js' 
import Comedy from './routes/Comedy.js' 
import Action from './routes/Action.js' 
import Romance from './routes/Romance.js' 
import Horror from './routes/Horror.js' 
import Fantasy from './routes/Fantasy.js' 
import History from './routes/History.js' 
import Adventure from './routes/Adventure.js' 
import Detail from './routes/Detail.js' 
import Home from './routes/Home.js' 
import Login from './routes/Login.js' 

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

// App
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Routes>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
    <Routes>
      <Route path="/crime" element={<Crime />}></Route>
    </Routes>
    <Routes>
      <Route path="/comedy" element={<Comedy />}></Route>
    </Routes>
    <Routes>
      <Route path="/action" element={<Action />}></Route>
    </Routes>
    <Routes>
      <Route path="/romance" element={<Romance />}></Route>
    </Routes>
    <Routes>
      <Route path="/horror" element={<Horror />}></Route>
    </Routes>
    <Routes>
      <Route path="/fantasy" element={<Fantasy />}></Route>
    </Routes>
    <Routes>
      <Route path="/history" element={<History />}></Route>
    </Routes>
    <Routes>
      <Route path="/adventure" element={<Adventure />}></Route>
    </Routes>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    <Routes>
      <Route path="/signin" element={<Adventure />}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
