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

  return ({
    labels: hours,
    datasets: [
      {
        label: 'Applications',
        data: data,
        backgroundColor: 'rgba(0, 0, 255, 0.3)'
      }
    ]
  });
}
