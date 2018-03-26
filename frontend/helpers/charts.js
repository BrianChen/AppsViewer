export const getChartOneData = (apps) => {
  const hours = [];
  for (let i=0; i<24; i++) {
    hours.push(i);
  }

  const data = new Array(24).fill(0);

  apps.forEach((app) => {
    let dateTime = app.created_at;
    const beginIndex = dateTime.indexOf('T') + 1;
    const hourMinSec = dateTime.slice(beginIndex, dateTime.length).split(':');
    const hour = parseInt(hourMinSec[0]);
    data[hour] = data[hour] + 1;
  });

  return (
    {
      labels: hours,
      datasets: [
        {
          label: 'Applications',
          data: data,
          backgroundColor: 'rgba(0, 0, 255, 0.3)'
        }
      ]
    }
  );
}

export const getChartOneOptions = () => {
  return (
    {
      title: {
        display: true,
        text: 'Number of Applications per Hour',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  );
}

export const getChartTwoData = (apps) => {
  const stageCount = {'initial': 0, 'processing': 0, 'approved': 0, 'closed': 0};

  apps.forEach((app) => {
    if (Object.keys(stageCount).includes(app.stage)) {
      stageCount[app.stage] = stageCount[app.stage] + 1;
    }
  });

  const stageLabels = Object.keys(stageCount);
  const data = Object.values(stageCount);

  return (
    {
      labels: stageLabels,
      datasets: [
        {
          label: 'Applications',
          data: data,
          backgroundColor: ['rgb(16, 16, 243)', 'rgb(243, 16, 16)', 'rgb(243, 130, 16)', 'rgb(66, 193, 66)']
        }
      ]
    }
  );
}

export const getChartTwoOptions = () => {
  return (
    {
      title: {
        display: true,
        text: 'Stages of applications',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  );
}
