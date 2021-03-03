import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class LineChartExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const chartOptions = {
      title: {
        text: 'Investment Forecaster'
      },
      subtitle: {
        text: 'Customize your investments and view the potential growth of $10,000 over ten years from 2021 to 2031'
      },
      xAxis: {
        title: {
          text: 'Year'
        },
        categories: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028','2029' ,'2030','2031']
      },
      yAxis: {
        title: {
            text: 'Value ($)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [
        { data: this.props.newprediction }
      ],
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

export default LineChartExample;