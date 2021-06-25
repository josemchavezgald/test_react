import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: "Cantidad de mesas",
          data: []
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: true
          }
        },
        colors: ['#77B6EA'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Cantidad de mesas por mes',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Mes'
          }
        },
        yaxis: {
          title: {
            text: 'Mesas'
          },
          min: 0
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
    
    
    };
  }
    

  componentDidUpdate(prevProps) {
    if (this.props.data_chart !== prevProps.data_chart || this.props.categorias_chart !== prevProps.categorias_chart) {
      this.setState({
      	series:[{
      		data:this.props.data_chart
      	}],
      	options: {
      		xaxis:{
      			categories: this.props.categorias_chart
      		}
      	}
      })
    }
  }

  render() {
    return (
			<div id="chart">
			<Chart options={this.state.options} series={this.state.series} type="line" height={350} />
			</div>
		);
  }
}

export default ChartComponent;