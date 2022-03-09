import logo from './logo.svg';
import './App.css';
import { Form } from './Components/Form';
import { Doctor_Details } from './Components/Doctor_details';
import { Doctor } from './Components/Doctors';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='welcome'>WELCOME...</div>
  
     <Routes>
       <Route path="/" element={<Form /> } />
       <Route path="/doctor" element={<Doctor /> } />
       <Route path="/doctor/:id" element={<Doctor_Details /> } />
     </Routes>
    </div>
  );
}

export default App;
