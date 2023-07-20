import React, { useEffect, useState, useContext } from "react";
import "./admin.css";

export default function Admin() {
  const [usersdata, setuserdata] = useState();

  useEffect(() => {
    const apicalluser = async () => {
      const response = await fetch(
        "https://redittclone-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();
      console.log(data);
      setuserdata(data);
    };
    apicalluser();
  }, []);

  const getTotalUsers = () => {
    if (usersdata) {
      return Object.keys(usersdata).length;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div className="adminpannel">
        <div className="pannel">
          <h1>Users Information</h1>
          {/* Content of the admin panel */}
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>FirstName</th>
                <th>SecondName</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {usersdata &&
                Object.keys(usersdata).map((userId) => (
                  <tr key={userId}>
                    <td>{usersdata[userId].username}</td>
                    <td>{usersdata[userId].firstname}</td>
                    <td>{usersdata[userId].secondname}</td>
                    <td>{usersdata[userId].email}</td>
                    <td>{usersdata[userId].password}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <h2>Total Users: {getTotalUsers()}</h2>
        </div>
      </div>
    </>
  );
}
