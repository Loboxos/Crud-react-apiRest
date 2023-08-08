//import logo from './logo.svg';
//import './App.css';
import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import axios from 'axios';


function App() {
  const baseUrl="http://localhost/apiFrameworks/";
  const [data,setData]=useState([]);
  
  const peticionGet= async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      //console.log(response.data)
      setData(response.data);
    })
  }
  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <div>
     <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Lanzamiento</th>
          <th>Desarrollador</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(tablas_framework=>(
          <tr key={tablas_framework.id}>
            <td>{tablas_framework.id}</td>
            <td>{tablas_framework.nombre}</td>
            <td>{tablas_framework.lanzamiento}</td>
            <td>{tablas_framework.desarrollador}</td>
          <td>
          <button className="btn btn-primary" >Editar</button> {"  "}
          <button className="btn btn-danger" >Eliminar</button>
          </td>
          </tr>
        ))}


      </tbody> 

    </table>
    </div>
  );
}

export default App;
