import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UserPlan from './components/UserPlan';
import UserPlanForm from './components/UserPlanForm';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="user-plan" element={<UserPlan/>}/>
        <Route path="createPlan" element={<UserPlanForm/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Routes>     
    </div>
  );
}

export default App;
