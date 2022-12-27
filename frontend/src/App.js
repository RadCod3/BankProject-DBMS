// import logo from './logo.svg';
import './App.css';
// import AuthenticationForm from './Forms/AuthenticationForm';
import CustomerReg from './Forms/CustomerReg';
import CustomerList from './Forms/CustomerList';
import EmployeeHome from './pages/EmployeeHome';
import CustomerHome from './pages/CustomerHome';
import CustomerEditor from './pages/EmployeePortalPages/CustomerEditor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav></nav>
      {/* <CustomerReg className="centered" /> */}
      {/* <CustomerList className="customer" /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/employeePortal'>
            <Route exact path='/employeePortal' element={<EmployeeHome />} />
            <Route path='customer-register' element={<CustomerReg />} />
            <Route path='customer-list' element={<CustomerList />} />
            <Route path='customer/:customerId' element={<CustomerEditor />} />
          </Route>
          <Route path='/customerPortal'>
            <Route exact path='/customerPortal' element={<CustomerHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
