import React, { useEffect, useState } from "react";

const Employee = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetch("/api/employeedetails", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("object",res)
        // console.log("VAlueee")
        setResData(res?.name?.data);
      });
  }, []);

  console.log("RES DATA", resData);

  return (
    <>
      <div className="employeecon">
        Employee
        <div className="employeelist">
          {resData &&
            resData.map((item, index) => {
              return (
                <div key={index} className="employeecard">
                  <h1>
                    Name : <span>{item.first_name}</span>
                  </h1>
                  <h2>
                    Email : <span>{item.email}</span>
                  </h2>
                  <a title="Profile Image" href={item.avatar} target="_blank">
                    Profile : <span>{item.avatar}</span>
                  </a>
                  {/* {console.log("object", item.first_name)} */}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Employee;
