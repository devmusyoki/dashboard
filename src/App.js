import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  Routes,
  Route
} from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree, } from "./pages/Reports";
import Team from "./pages/Team";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>

      <Route path="/overview" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <Overview/>
               </React.Suspense>
               }
              />

       <Route path="/reports" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <Reports/>
               </React.Suspense>
               }
              />     

       <Route path="/reports/reports1" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <ReportsOne/>
               </React.Suspense>
               }
              />     

       <Route path="/reports/reports1" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <ReportsOne/>
               </React.Suspense>
               }
              />     

        <Route path="/reports/reports2" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <ReportsTwo/>
               </React.Suspense>
               }
              />       
        <Route path="/reports/reports3" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <ReportsThree/>
               </React.Suspense>
               }
              />       
        <Route path="/team" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <Team/>
               </React.Suspense>
               }
              />       
        <Route path="/product" element={
                 <React.Suspense fallback = 'Loading ...'>
                   <Products />
               </React.Suspense>
               }
              />       
      </Routes>
      </div>
  );
}

export default App;