// Templated object used for rendering a chart
const ChartCanvas = (props) => {
    return (
        <canvas id="chart" width="200" height="200"></canvas>
    );
};

// Renders a line chart to the document
const createLineChartCanvas = (data) => {
    ReactDOM.render(
        <ChartCanvas />,
        document.querySelector("#charts")
    );
    
    loadCardData("line");
};

// Renders a bar chart to the document
const createBarChartCanvas = (data) => {
    ReactDOM.render(
        <ChartCanvas />,
        document.querySelector("#charts")
    );
    
    loadCardData("bar");
};

// Renders a pie chart to the document
const createPieChartCanvas = (data) => {
    ReactDOM.render(
        <ChartCanvas />,
        document.querySelector("#charts")
    );
    
    loadCardData("pie");
};

// Creates a line chart
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
            data: scoreData,
            borderColor: 'rgb(56,142,60)',
            backgroundColor: 'rgb(232,245,233)',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'black',
            },
            display: false,
        }
    }
  });
};

// Creates a bar chart
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
            data: scoreData,
            backgroundColor: 'rgb(56,142,60)',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'black',
            },
            display: false,
        }
    }
  });
};

// Creates a pie chart
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
            data: scoreData,
            backgroundColor: 'rgb(56,142,60)',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'black',
            },
        }
    }
  });
};

// Loads data and creates a chart based on a given type
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

// Hooks up buttons for loading different charts
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

// Get session token
const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup(result.csrfToken);
    });
};

// Initializes document
$(document).ready(function() {
    getToken();
});