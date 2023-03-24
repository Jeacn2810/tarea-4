import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [datos, setDatos] = useState([]);

  let url = 'http://www.raydelto.org/agenda.php';
  fetch(url)
      .then( response => response.json() )
      .then( data => {
          setDatos(data)
      } )
      .catch(err => console.log(err));
  const [nombre, setnombre] = useState("");
  const handleInputChangenombre = ({ target }) => {
    setnombre(target.value);
  };

  const [apellido, setapellido] = useState("");
  const handleInputChangeapellido = ({ target }) => {
    setapellido(target.value);
  };
  
  const [telefono, settelefono] = useState("");
  const handleInputChangetelefono = ({ target }) => {
    settelefono(target.value);
  };
  function agregar(){

    fetch('http://www.raydelto.org/agenda.php',{
      method: 'POST',
      body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          telefono: telefono
      })
  }).catch(err => console.log(err))

  }
  return (
    <>
    <input 
      type="text"
      placeholder="nombre"
      style={{ fontSize: 14 }}
      value={nombre}
      onChange={handleInputChangenombre}
    />
        <input 
      type="text"
      placeholder="apellido"
      style={{ fontSize: 14 }}
      value={apellido}
      onChange={handleInputChangeapellido}
    />
     <input 
      type="text"
      placeholder="telefono"
      style={{ fontSize: 14 }}
      value={telefono}
      onChange={handleInputChangetelefono}
    />
    <button onClick={agregar()} >agregar</button>
    <table>
      <thead>
        <tr>
          <th>nombre</th>
          <th>apellido</th>
          <th>telefono</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr key={dato.id}>
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.telefono}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}


export default App;
