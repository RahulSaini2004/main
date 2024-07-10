import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setvalue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [Age, setAge] = useState("");

  const [alldata, setalldata] = useState([]);

  const getuser = (e) => {
    e.preventDefault();
    const show = {
      name,
      email,
      password,
      course,
      Age,
    };
    setvalue('');
    setEmail('');
    setAge('');
    setPassword('');
    setCourse('');
    
    const newalldata = alldata.concat(show);
    setalldata(newalldata);
  };

  return (
    <div className="text-center d-flex justify-content-around   bg-success me-5 ms-5 mt-5 border-denger ">
      <form
        onSubmit={(e) => {
          getuser(e.target.value);
        }}
        className="mt-5"
      >
        <h2>FORM</h2>

        <label className="text-center input-group-text">
          Name:
          <input
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            type="text"
            name="name"
          />
        </label>
        <br />

        <label className="text-center input-group-text d-flex justify-content-around">
          Email:
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
          />
        </label>
        <br />

        <label className="text-center input-group-text">
          Password:
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
          />
        </label>
        <br />

        <label className="text-center input-group-text">
          course
          <input
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            type="text"
            name="course"
          />
        </label>
        <br />

        <label className="text-center input-group-text">
          Age
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="text"
            name="course"
          />
        </label>
        <br />
    
        <button
          onClick={getuser}
          className="btn btn-danger"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
        <br />
        <br />
      </form>

      {alldata?.map((i) => {
        return (
          <div className="mt-5 ms-5 me-5 bg-danger">
            <h2>{i.name}</h2>
            <h2>{i.email}</h2>
            <h2>{i.password}</h2>
            <h2>{i.course}</h2>
            <h2>{i.Age}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
