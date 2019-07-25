let currentCall = "http://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2019-09-05&?currency=USD";
// Make a request for a user with a given ID
axios.get(currentCall)
  .then(function (response) {

    // Retrieving the data
    let dateData = Object.keys(response.data.bpi);
    let valueData = Object.values(response.data.bpi);

    // Editing params on change (blur)
    var currentURL = new URL(currentCall);
    console.log(currentURL);
    
    // Creating the chart based on the data with chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dateData, //Getting the dates from API
            datasets: [{
                label: 'Value of bitcoin',
                data: valueData , // Getting the Value of Bitcon from each date
                backgroundColor: 
                    'gold'
                ,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

