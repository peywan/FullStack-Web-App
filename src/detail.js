// Import the necessary modules
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Create the component
const EmpDetail = () => {
  // Extract the empid parameter from the URL using the useParams hook
  const { empid } = useParams();

  // Declare a state variable empdata to store the employee data
  const [empdata, setEmpData] = useState({});

  // Fetch the employee data from the server using the empid parameter
  useEffect(() => {
    fetch(`http://localhost:8000/employee/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        // Update the empdata state with the received data
        setEmpData(resp);
      })
      .catch((err) => {
        // Log any errors
        console.log(err.message);
      });
  }, [empid]);

  // Render the component
  return (
    <div>
      <div className='container'>
        <div className='card row' style={{ textAlign: "left" }}>
          <div className='card-title'>
            <h2>Employee Details</h2>
          </div>
          <div className='card-body'>
            {empdata && (
              <div>
                <h2>
                  The Employee name is : <b>{empdata.name}</b> ({empdata.id})
                </h2>
                <h3>Contact Details</h3>
                <h5>Email is : {empdata.email}</h5>
                <h5>Phone is : {empdata.phone}</h5>
                {/* Link to go back to the employee listing */}
                <Link className='btn btn-danger' to='/'>
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export
export default EmpDetail;
