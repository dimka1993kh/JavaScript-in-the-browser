const ctx = document.getElementById('chart').getContext('2d');
const realtime = new Chart(ctx).Bar({
  labels: [],
  datasets: [{
    fillColor: 'rgba(0,60,100,1)',
    strokeColor: 'black',
    data: []
  }]
}, {
  responsive: true,
  barValueSpacing: 2
});

let isFirst = true;
const ws = new WebSocket('wss://neto-api.herokuapp.com/realtime');
ws.addEventListener('message', event => {
  let content =  JSON.parse(event.data);
  if (isFirst) {
    content.forEach((element) => {
      let [label, data] = [element.time, element.online]
      realtime.addData([Number(data)], label);
    })
    isFirst = false;
  } else {
    let [label, data] = [content.time, content.online];
    realtime.removeData();
    realtime.addData([Number(data)], label);
  }
});
