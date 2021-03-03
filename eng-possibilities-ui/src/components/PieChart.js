import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

/**
 * This is a piechart to display the user input percentage
 * 
 * Proptypes
 * @param {Array<Object>} data Each object is in the format {y: the data, name: the name of the category}
 */
class PieChart extends Component {
  render() {

    const chartOptions = {
        title: {
            text: "Percent Allocations"
          },
        chart: {
          type: "pie",
          backgroundColor: 'rgba(0,0,0,0)'
        },
        series: [
          {
            data: this.props.data
          }
        ]
      };

    return (
        <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    );
  }
}

export default PieChart;
