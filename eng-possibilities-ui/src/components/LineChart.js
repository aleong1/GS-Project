import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

/**
 * LineChart is the component to display the trends over time
 * 
 * Proptypes
 * @param { {Array<Object>} } series Each object in the array is in the format {data: array of predictions, 
 *                            name: the title of the corresponding dataset} {[
 * @param { {Array<String>} } categories the category markers 
 * @param {String} title the title of the graph
 * @param {String} description the description of the graph
 * @param {String} yAxisLabel the label of the y-axis
 */
class LineChart extends Component {
  render() {

    const chartOptions = {
      title: {
        text: this.props.title
      },
      subtitle: {
        text: this.props.description
      },
      xAxis: {
        title: {
          text: 'Year'
        },
        categories: this.props.categories
      },
      yAxis: {
        title: {
            text: this.props.yAxisLabel
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: false
          },
          enableMouseTracking: true
        }
      },
      series: this.props.series,
    };

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )
  }
}

export default LineChart;