import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// This component is for editing employee details
const EmpEdit = () => {
  // Get the employee ID from the URL parameters
  const { empid } = useParams();

  // Declare state variables for employee details
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  // Hook to fetch employee data when the component mounts or the employee ID changes
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // Set state variables with fetched employee data
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  // Function for handling navigation
  const navigate = useNavigate();

  // Function for handling form submit
  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, email, phone, active };


    // Send the updated employee data to the server
    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  /////////////////////
  // Render the employee edit form
  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handlesubmit}>
            <div className='card' style={{ textAlign: "left" }}>
              <div className='card-title'>
                <h2>Employee Edit</h2>
              </div>
              <div className='card-body'>
                <div className='row'>
                  {/* Employee ID input */}
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input
                        value={id}
                        disabled='disabled'
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  {/* Employee name input */}
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className='form-control'
                      ></input>
                      {name.length === 0 && validation && (
                        <span className='text-danger'>Enter the name</span>
                      )}
                    </div>
                  </div>

                  {/* Employee email input */}
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  {/* Employee phone input */}
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  {/* Employee active status input */}
                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type='checkbox'
                        className='form-check-input'
                      ></input>
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>

                  {/* Save and Back buttons */}
                  <div className='col-lg-12'>
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;
