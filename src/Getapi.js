import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Getapi = () => {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTodos = () => {fetch("http://localhost:4091/showuser")
      .then((response) => response.json())
      .then((result) => setTodos(result))
      .catch((error) => console.error(error));
  };

  const AddTodo = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Firstname:firstname,
      Lastname:lastname
    }); 

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:4091/adduser", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        toast.success("Todo added successfully");
          getTodos();
        handleClose();
      })
      .catch((e) => {
        toast.error("Todo not added");
        console.log(e);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="p-2 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleShow}>
          Add Todo
        </button>
      </div>
      {todos.map((data, index) => (
        <div key={index}>
          <h3>{data.Firstname}</h3>
          <h3>{data.Lastname}</h3>
          <hr />
        </div>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Enter first name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter last name"
            onChange={(e) => setLastname(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-warning" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={AddTodo}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Getapi;
