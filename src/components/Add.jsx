import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleAdd = (e) => {
    fetch("https://http-nodejs-production-d73e.up.railway.app/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });

    setName("");
  };

  return (
    <>
      <Link to={"/"}>Listado</Link>
      <br></br>
      <input type="text" onInput={handleChange} value={name} />
      <input type="button" value="Agregar" onClick={handleAdd} />
    </>
  );
};

export default Add;
