import React from "react";
import Auth from "../auth/Auth";
import { useNavigate } from "react-router-dom";
import GeneralNavbar from "../components/GeneralNavbar";
const Dashboard = () => {
  const { user, LogOut } = Auth();
  const navigate = useNavigate();
  return (
    <div className="dashboard-body">
      <GeneralNavbar />
      <main className="dashoard-content">
        {user ? (
          <div className="account-container">
            <div className="account-header">
              <img
                src={user.image}
                alt={user.firstName}
                className="profile-img"
              />
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <p className="role">
                {user.role === "admin" ? "Admin" : "Customer"}
              </p>
            </div>

            <div className="account-details">
              <div className="section">
                <h2>Contact Information</h2>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
              </div>

              <div className="section">
                <h2>Shipping Address</h2>
                {user.address ? (
                  <>
                    <p>
                      {user.address.address}, {user.address.city},{" "}
                      {user.address.state}, {user.address.country}
                    </p>
                    <p>
                      <strong>Postal Code:</strong> {user.address.postalCode}
                    </p>
                  </>
                ) : (
                  <p>Address not available</p>
                )}
              </div>

              <div className="section">
                <h2>Account Details</h2>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {user.birthDate}
                </p>
              </div>
            </div>
            <div>
              <button onClick={LogOut} className="role" style={{borderStyle:'none', cursor:'pointer'}}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="no-cart">
            <p>LOGIN TO VIEW DASHBOARD</p>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
{
  /* <div className="">
<h1>hello,{user.lastName} {user.firstName}  </h1>
</div> */
}

{
  /* <h2>Welcome, {user.username}!</h2>
<p>Email: {user.email || "No email available"}</p>
<button
  onClick={() => {
    LogOut();
    navigate("/");
  }}
>
  Logout
</button> */
}
