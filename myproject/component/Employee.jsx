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
      <div className="employeecon">Employee</div>
      <div className="employeelist">
        {resData &&
          resData.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.first_name }</h1>
                <h2>{item.email}</h2>
                <a href={item.avatar} target="_blank">{item.avatar}</a>
                {/* {console.log("object", item.first_name)} */}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Employee;
