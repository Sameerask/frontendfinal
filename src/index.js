import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';

import HomeImg from './components/HomeImg';

import ViewProfile from './components/ViewProfile';

import AdminDashboard from './components/admin/AdminDashboard';

import ViewMedList from './components/viewmedlist';
import AddMed from './components/addmed';
import LowStock from './components/lowstock';
import ViewOrders from './components/orderplacedview';
import AcceptRejectOrder from './components/arorders';
import Reorder from './components/reorder';
import UserPlaceOrder from './components/placeorder';
import ReorderRequest from './components/requestreorder';
import HospitalsList from './components/hospitallist';
import MedicalStores from './components/medicalstorelist';
import Payment from './components/payment';
import Reorders from './components/reorderlist';
import AdminLoginForm from './components/auth/adminlogin';
import Update from './components/updatestock';
import Allmedicines from './components/allmedicinelist';
import Logout from './components/auth/logout';
import ViewHospitalList from './components/adminhospital';
import ViewMedStoreList from './components/adminmedstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Navigation/>}>
          <Route path="/home" element={<HomeImg />} /> 
          
          <Route path="/register" element={<Register />} />
          
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLoginForm />} />

        <Route path="/user/dashboard" element={<Dashboard />} >
          <Route path="viewMedicine" element={<ViewMedList />} />
          <Route path="userProfile" element={<ViewProfile />} />
          <Route path="placeOrder" element={<UserPlaceOrder />} />
          <Route path="requestReorder" element={<ReorderRequest />} />
          <Route path="hospitals" element={<HospitalsList />} />
          <Route path="medicalStores" element={<MedicalStores />} />
          <Route path="payment" element={<Payment />} />
          <Route path="logout" element={<Logout />} />
         </Route> 

        <Route path="/admin/dashboard" element={<AdminDashboard />} >
          <Route path="addMedicine" element={<AddMed />} />
          <Route path="updatestock" element={<Update />} />
          <Route path="allmedicine list" element={<Allmedicines />} />
          <Route path="lowStock" element={<LowStock />} />
          <Route path="ordersPlaced" element={<ViewOrders />} />
          <Route path="acceptRejectOrders" element={<AcceptRejectOrder />} />
          <Route path="reorderMedicine" element={<Reorder />} />
          <Route path="reorderlist" element={<Reorders/>} />
          <Route path="adminhospitallist" element={<ViewHospitalList/>} />
          <Route path="adminmedstorelist" element={<ViewMedStoreList/>} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>

      
      
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
