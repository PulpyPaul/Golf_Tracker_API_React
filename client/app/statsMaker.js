const ChartCanvas = (props) => {
    return (
        <canvas id="chart" width="200" height="200"></canvas>
    );
};

const createLineChartCanvas = (data) => {
    ReactDOM.render(
        <ChartCanvas />,
        document.querySelector("#charts")
    );
    
    loadCardData("line");
};

const createBarChartCanvas = (data) => {
    ReactDOM.render(
        <ChartCanvas />,
        document.querySelector("#charts")
    );
    
    loadCardData("bar");
};

const createPieChartCanvas = (data) => {
    ReactDOM.render(
        <ChartCanvas />,
        document.querySelector("#charts")
    );
    
    loadCardData("pie");
};

const createLineChart = (ctx, data) => {
  
 var labels = [];
 var scoreData = [];
    
 for (var i = 0; i < data.length; i++) {
     labels.push(`Game${i+1}`);
     scoreData.push(data[i].holes.scoreTotal);
 }
    
 const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            data: scoreData
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
};

const createBarChart = (ctx, data) => {
  
 var labels = [];
 var scoreData = [];
    
 for (var i = 0; i < data.length; i++) {
     labels.push(`Game${i+1}`);
     scoreData.push(data[i].holes.scoreTotal);
 }
    
 const lineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: scoreData
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
};

const createPieChart = (ctx, data) => {
  
 var labels = [];
 var scoreData = [];
    
 for (var i = 0; i < data.length; i++) {
     labels.push(`Game${i+1}`);
     scoreData.push(data[i].holes.scoreTotal);
 }
    
 const lineChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: scoreData
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
};

const loadCardData = (type) => {
    sendAjax('GET', '/getCards', null, (data) => {
        const cardData = data.golfCards;
        
        if (cardData.length == 0) { 
            Materialize.toast('You dont have any data yet!', 3000);
            return; 
        }
        
        if (type == "line") {
           createLineChart(document.querySelector("#chart"), cardData); 
        } else if (type == "bar") {
            createBarChart(document.querySelector("#chart"), cardData);
        } else if (type == "pie") {
            createPieChart(document.querySelector("#chart"), cardData);  
        } else {
           createLineChart(document.querySelector("#chart"), cardData); 
        }
    });
};

const setup = (csrf) => {
    const lineChartButton = document.querySelector("#lineChartBtn");
    const barChartButton = document.querySelector("#barChartBtn");
    const pieChartButton = document.querySelector("#pieChartBtn");
    
    lineChartButton.addEventListener("click", (e) => {
        e.preventDefault();
        createLineChartCanvas();
        return false;
    });
    
    barChartButton.addEventListener("click", (e) => {
        e.preventDefault();
        createBarChartCanvas();
        return false;
    });
    
    pieChartButton.addEventListener("click", (e) => {
        e.preventDefault();
        createPieChartCanvas();
        return false;
    });
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken();
});