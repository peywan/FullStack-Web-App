// get useState hook from React
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Emp creates an employee and associates it with a state object. This is useful for populating state objects
const EmpCreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active] = useState(true);
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { name, email, phone, active };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then(() => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className='row'>
      <div className='container-fluid'>
        <form className='container' onSubmit={handleSubmit}>
          <div className='card' style={{ textAlign: "left" }}>
            <div className='card-title'>
              <h2>Employee Create</h2>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>Name</label>
                <input
                  required
                  value={name}
                  onMouseDown={() => setValidation(true)}
                  onChange={(e) => setName(e.target.value)}
                  className='form-control'
                />
                {name.length === 0 && validation && (
                  <span className='text-danger'>Enter the name</span>
                )}
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label>Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='form-control'
                />
              </div>
              <div className='form-check'></div>
              <div className='form-group'>
                <button className='btn btn-success' type='submit'>
                  Save
                </button>
                <Link to='/' className='btn btn-danger'>
                  Back
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EmpCreate;
