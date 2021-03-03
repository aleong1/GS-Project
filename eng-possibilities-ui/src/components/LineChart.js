import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

/**
 * LineC
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
            enabled: true
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