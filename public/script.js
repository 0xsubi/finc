google.charts.load('current', {
    'packages': ['corechart']
  });
// google.charts.setOnLoadCallback(renderChart);

function renderChart() {
    var open = parseInt(document.getElementById('open').value);
    var high = parseInt(document.getElementById('high').value);
    var low = parseInt(document.getElementById('low').value);
    var close = parseInt(document.getElementById('close').value);
    var today = new Date();   
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var data = google.visualization.arrayToDataTable([
        [date, low, open, close, high]
        // L O C H
    ], true);


    var options = {
        fontName: 'Sans-Serif',
        legend: 'none',
        bar: {
            groupWidth: '10%'
        },
        candlestick: {
            fallingColor: {
                fill: '#ff0000',
                stroke: '#ff0000'
            },
            risingColor: {
                fill: '#00ff00',
                stroke: '#00ff00'
            }
        },
        vAxis: {
            title: "Price in Rupees"
        }
    }

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

    chart.draw(data, options);
};