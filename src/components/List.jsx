import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState([]);

  const loadUsers = useEffect(() => {
    fetch("https://http-nodejs-production-d73e.up.railway.app/test")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <>
      <Link to={"/add"}>Agregar</Link>
      <div>List</div>

      {list.map((element) => {
        return (
          <>
            <h1>{element.id} - {element.Name}</h1>
          </>
        );
      })}
    </>
  );
};

export default List;
