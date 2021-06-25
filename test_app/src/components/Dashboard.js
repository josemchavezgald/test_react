import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Row,Col,Card } from 'react-bootstrap';
import ChartComponent from './Chart.js';


function Dashboard(){

	function crear_data(data){
  	let element;
  	let labels = []
  	let series = []
  	for(element of data){
  		
  			labels.push(element.mes)
  			series.push(element.cantidad)
  		
  	}

  	return {
  		'series':series,
  		'categorias':labels
  	}
  }

	const [cantidad_tornillos,setCantTornillos] = useState(null)
	const [cantidad_patas,setCantPatas] = useState(null)
	const [cantidad_mesas,setCantMesas] = useState(null)
	const [mesas_por_mes,setMesasMes] = useState([])
	const [cantidad_mesas_mes,setCantMesasMes] = useState({})
	const [series,setSeries] = useState([])
	const [categorias,setCategorias] = useState([])


	useEffect(() => {
		axios.get('http://localhost:8000/api/data_relevante/')
	  .then(res => {
	    const data = res.data;
	    console.log(data)
	    setCantTornillos(data.cantidad_tornillos)	  
	    setCantPatas(data.cantidad_patas)
	    setCantMesas(data.cantidad_mesas)
	    setCantMesasMes(data.cantidad_mesas_mes)
	    setMesasMes(data.mesas_por_mes)
	    let data_chart = crear_data(data.mesas_por_mes)
	    console.log(data_chart)
	    setSeries(data_chart.series)
	    setCategorias(data_chart.categorias)
	  })
	},[]) 

	return (
		<div className="mt-2">
			<Row>
				<Col xl={3} sm={4}>
					<Card style={{ width: '100%',height:'80%'}}>
					  <Card.Body>
					    <Card.Title className="text-center">Cantidad de mesas</Card.Title>
					    <Card.Text className="text-center">
					      <h4 className="font-weight-light">{cantidad_mesas} mesas</h4>
					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>
				<Col xl={3} md={4}>
					<Card style={{ width: '100%',height:'80%' }}> 
						<Card.Body>
					    <Card.Title className="text-center">Cantidad de patas</Card.Title>
					    <Card.Text className="text-center">
					     <h4 className="font-weight-light">{cantidad_patas}</h4>  
					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>
				<Col xl={3} md={4} className="mb-4">
					<Card style={{ width: '100%',height:'95%' }}> 
						<Card.Body>
					    <Card.Title className="text-center">Cantidad de tornillos</Card.Title>
					    <Card.Text className="text-center">
					      <h4 className="font-weight-light">{cantidad_tornillos}</h4>  
					    </Card.Text>
					    
					  </Card.Body>
					</Card>
				</Col>
				<Col xl={3} md={4} className="mb-4">
					<Card style={{ width: '100%',height:'95%' }}> 
						<Card.Body>
					    <Card.Title className="text-center">Cantidad de mesas {cantidad_mesas_mes.mes}</Card.Title>
					    <Card.Text className="text-center">
					      <h4 className="font-weight-light">{cantidad_mesas_mes.cantidad} mesas</h4>
					    </Card.Text>
					  </Card.Body>
					</Card>
				</Col>
				<Col xl={12} md={8} >
					<Card style={{ width: '100%' }}> 
						<Card.Body>
					    <Card.Text>
					      <ChartComponent data_chart={series} categorias_chart={categorias}/>
					    </Card.Text>					    
					  </Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Dashboard;