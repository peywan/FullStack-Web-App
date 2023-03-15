// Importing necessary modules from "react" library
import { useEffect, useState } from "react";
// Run function` when the component mounts or whenever `dependencyVariable` changes.
import { Link, useNavigate } from "react-router-dom";

// This component is for listing employee data
const EmpListing = () => {
  // Declare state variable for employee data
  const [empData, setEmpData] = useState(null);

  // Function for handling navigation
  const navigate = useNavigate();

  // Functions for loading employee details, edit and remove operations
  const loadDetail = (id) => navigate(`/employee/detail/${id}`);
  const loadEdit = (id) => navigate(`/employee/edit/${id}`);
  const removeEmployee = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`http://localhost:8000/employee/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  // Hook to fetch employee data when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((resp) => setEmpData(resp))
      .catch((err) => console.log(err.message));
  }, []);

  // html fragment. This is to generate the content for employee list

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2>Employee Listing</h2>
        </div>
        <div className='card-body'>
          <div className='divbtn'>
            <Link to='employee/create' className='m-3 btn btn'>
              Click here to add employee
            </Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        onClick={() => loadEdit(item.id)}
                        className='btn btn-success'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeEmployee(item.id)}
                        className='m-2 btn btn-danger'
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => loadDetail(item.id)}
                        className='btn btn-primary'
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// EmpListing is a class that inherits from EmpListing. It provides access to information about the contents
export default EmpListing;
