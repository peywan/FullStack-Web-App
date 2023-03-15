//import
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./listing";
import EmpCreate from "./create";
import EmpDetail from "./detail";
import EmpEdit from "./edit";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Renders the application.
 *
 * @returns {JSX.Element} The top-level React element for the application.
 */
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <h1>Welcome to the employees portal!</h1>
        <Routes>
          <Route path='/' element={<EmpListing />} />
          <Route path='/employee/create' element={<EmpCreate />} />

          <Route path='/employee/detail/:empid' element={<EmpDetail />} />

          <Route path='/employee/edit/:empid' element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
