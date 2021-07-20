import React from 'react';
import { Line } from 'react-chartjs-2';

//("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
function RecoveredGraph({data}) {

    const buildChartData = (data, casesType) => {
        let chartData = [];
        let lastDataPoint;
        for (let date in data.cases) {
          if (lastDataPoint) {
            let newDataPoint = {
              x: date,
              y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
          }
          lastDataPoint = data[casesType][date];
        }
        return chartData;
    };

    const fetchVal = (data) => {
        let retData =[];
        for (let i=0; i<527; i++){
            retData.push(data[i].y);
        }
        return retData;
    };

    const fetchTimeline = (data) => {
        let retData =[];
        for (let i=0; i<527; i++){
            retData.push(data[i].x);
        }
        return retData;
    };

    var caseType = ['cases','deaths'];
    var timeline = fetchTimeline(buildChartData(data, caseType[0]));
    var totalDeathsData = fetchVal(buildChartData(data, caseType[1]));
    
    const plotData = {
        labels: timeline,
        datasets: [
          {
            label: caseType[1],
            fill: false,
            borderColor: 'red',
            data: totalDeathsData,
            pointRadius: 0
          },
        ]
      };

    return (
        <div>
            <Line data={plotData} height={350} width={700} options={{ maintainAspectRatio: false }}/>
        </div>
    )
}

export default RecoveredGraph
