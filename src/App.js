import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./custom.scss";

import EmployeeList from "./listing";
import CreateEmployee from "./create";
import EmployeeDetail from "./detail";
import EditEmployee from "./edit";

function App() {
  return (
    <>
      <Router>
        <div className='bg-dark'>
          <div className='container'>
            <h1 className='bg-dark'>Welcome to the employees portal!</h1>
            <Routes>
              <Route path='/' element={<EmployeeList />} />
              <Route path='/employee/create' element={<CreateEmployee />} />
              <Route
                path='/employee/detail/:empid'
                element={<EmployeeDetail />}
              />
              <Route path='/employee/edit/:empid' element={<EditEmployee />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
