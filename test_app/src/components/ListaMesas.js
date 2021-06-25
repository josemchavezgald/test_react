import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Table } from 'react-bootstrap';


function ListaMesas(){

	const [datos,setDatos] = useState([])


	useEffect(() => {
		axios.get('http://localhost:8000/api/mesa/')
    .then(res => {
      const data = res.data;
      setDatos(data)
    })
	},[]) 
		
	console.log(datos)
	
	const table = () => {
		return <Table responsive striped bordered variant="dark" className="mt-2">
					  <thead>
					    <tr>
					      <th>#</th>
					      <th>Largo Tablero</th>
					      <th>Ancho Tablero</th>
					      <th>Espesor Tablero</th>
					      <th>Cantidad Patas</th>
					      <th>Largo Patas</th>
					      <th>Ancho Patas</th>
					      <th>Espesor Patas</th>
					      <th>Cantidad Tornillos</th>
					      <th>Largo Tornillos</th>
					      <th>Diametro Tornillos</th>
					      <th >Fecha Ingreso</th>
					    </tr>
					  </thead>
					  <tbody>
					  {datos.map((dato,index) =>
					  	<tr key={index}>
					  		<td>{index+1}</td>
					  		<td>{dato.tablero.largo} cm</td>
					  		<td>{dato.tablero.ancho} cm</td>
					  		<td>{dato.tablero.espesor} mm</td>
					  		<td >{dato.patas.cantidad}</td>
					  		<td>{dato.patas.largo} cm</td>
					  		<td>{dato.patas.ancho} cm</td>
					  		<td>{dato.patas.espesor} cm</td>
					  		<td>{dato.tornillos.cantidad}</td>
					  		<td>{dato.tornillos.largo} mm</td>
					  		<td>{dato.tornillos.diametro} mm</td>
					  		<td ><small>{dato.created_at.dia}-{dato.created_at.mes}-{dato.created_at.anio}</small></td>
					  	</tr>
					  )}
					  </tbody>
					  </Table>
	}


	return (
		<div>
		<h3 className="font-weight-bold">Lista de mesas creadas</h3>
		{table()}
		</div>
	)
}

export default ListaMesas;