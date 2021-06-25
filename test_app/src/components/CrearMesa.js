import React,{useState} from "react";
import { Form, Button, Col,Alert} from 'react-bootstrap';
import axios from 'axios';



function CrearMesa(){

	
	const [tablero,setDatosTablero] = useState({
		largo:'',
		ancho:'',
		espesor: ''
	})

	const [patas,setDatosPatas] = useState({
		largo:'',
		ancho:'',
		espesor: '',
		cantidad:''
	})

	const [tornillos,setDatosTornillos] = useState({
		largo:'',
		diametro:'',
		cantidad:''
	})

	const [respuesta,setRespuesta] = useState(false)

	const handleChangeTablero = (event) => {
			let regex_number = /^[0-9]*$/
      if(regex_number.test(event.target.value)){
      	setDatosTablero({
          ...tablero,
          [event.target.name] : event.target.value
     	 	})
      }else{
      	event.target.value = '';
      }
  }

  const handleChangePatas= (event) => {
			let regex_number = /^[0-9]*$/
      if(regex_number.test(event.target.value)){
      	setDatosPatas({
          ...patas,
          [event.target.name] : event.target.value
     	 	})
      }else{
      	event.target.value = '';
      }
  }

  const handleChangeTornillos = (event) => {
			let regex_number = /^[0-9]*$/
      if(regex_number.test(event.target.value)){
      	setDatosTornillos({
          ...tornillos,
          [event.target.name] : event.target.value
     	 	})
      }else{
      	event.target.value = '';
      }
  }

  const sleep = (milliseconds) => {
	  return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

  const enviarDatos = (event) => {
  	event.preventDefault()
  	
  	axios.post('http://localhost:8000/api/mesa/',{tablero,patas,tornillos})
  	.then(res => {
        if (res.status === 201){
        	setRespuesta(true)
        	sleep(1000).then(() => {
						window.location.reload(false);
					})
        	
        }
    })
  }

  const alert = () => {
  	if(respuesta){
  		return 	<Alert variant="success" className="mt-2"> 
					   		Mesa creada correctamente.
					  	</Alert>;
  	}	
	}

	return (
		<div>
			<h2 className="font-weight-bold text-left">Agregar mesa</h2>
			<Form className="mt-4" onSubmit={enviarDatos} >
				<h3 className="font-weight-bold text-left">Tablero</h3>
				<Form.Row>
					<Form.Group as={Col} controlId="fromTableroLargo">
						<Form.Label>Largo</Form.Label>
				   	<Form.Control type="text" placeholder="Centimetros" name="largo" onChange={handleChangeTablero} />
					</Form.Group>
					<Form.Group as={Col} controlId="formTableroAncho">
			      <Form.Label>Ancho</Form.Label>
			      <Form.Control type="text" placeholder="Centimetros"  name="ancho" onChange={handleChangeTablero}/>
			    </Form.Group>
			    <Form.Group as={Col} controlId="formTableroEspesor">
			      <Form.Label>Espesor</Form.Label>
			      <Form.Control type="text" placeholder="Milimetros" name="espesor" onChange={handleChangeTablero} />
			    </Form.Group>
				</Form.Row>
				<h3 className="font-weight-bold text-left mt-2">Patas</h3>
				<Form.Row>
					<Form.Group as={Col} controlId="fromPatasLargo">
						<Form.Label>Largo</Form.Label>
				   	<Form.Control type="text" placeholder="Centimetros"  name="largo" onChange={handleChangePatas}/>
					</Form.Group>
					<Form.Group as={Col} controlId="formPatasAncho">
			      <Form.Label>Ancho</Form.Label>
			      <Form.Control type="text" placeholder="Centimetros" name="ancho" onChange={handleChangePatas}/>
			    </Form.Group>
			    <Form.Group as={Col} controlId="formPatasEspesor">
			      <Form.Label>Espesor</Form.Label>
			      <Form.Control type="text" placeholder="Centimetros"  name="espesor" onChange={handleChangePatas} />
			    </Form.Group>
			    <Form.Group as={Col} controlId="formPatasEspesor">
			      <Form.Label>Cantidad</Form.Label>
			      <Form.Control type="text" placeholder="ej: 4 patas"  name="cantidad" onChange={handleChangePatas} />
			    </Form.Group>
				</Form.Row>
				<h3 className="font-weight-bold text-left mt-2">Tornillos</h3>
				<Form.Row>
					<Form.Group as={Col} controlId="fromPatasLargo">
						<Form.Label>Largo</Form.Label>
				   	<Form.Control type="text" placeholder="Milimetros"  name="largo" onChange={handleChangeTornillos} />
					</Form.Group>
					<Form.Group as={Col} controlId="formPatasAncho">
			      <Form.Label>Diametro</Form.Label>
			      <Form.Control type="text" placeholder="Milimetros" name="diametro"  onChange={handleChangeTornillos} />
			    </Form.Group>
			    <Form.Group as={Col} controlId="formPatasEspesor">
			      <Form.Label>Cantidad</Form.Label>
			      <Form.Control type="text" placeholder="ej: 4 patas" name="cantidad" onChange={handleChangeTornillos} />
			    </Form.Group>
				</Form.Row>
				<Button variant="primary" type="submit">
					Crear
				</Button>
			</Form>
			{alert()}
		</div>
	)
}

export default CrearMesa;