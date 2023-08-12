import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import CreateProfile from './pages/CreateProfile';
import SignIn from './pages/SignIn.jsx';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/profile' element={<CreateProfile />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
