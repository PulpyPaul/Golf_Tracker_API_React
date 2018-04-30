"use strict";

var ChartCanvas = function ChartCanvas(props) {
    return React.createElement("canvas", { id: "chart", width: "200", height: "200" });
};

var createLineChartCanvas = function createLineChartCanvas(data) {
    ReactDOM.render(React.createElement(ChartCanvas, null), document.querySelector("#charts"));

    loadCardData("line");
};

var createBarChartCanvas = function createBarChartCanvas(data) {
    ReactDOM.render(React.createElement(ChartCanvas, null), document.querySelector("#charts"));

    loadCardData("bar");
};

var createPieChartCanvas = function createPieChartCanvas(data) {
    ReactDOM.render(React.createElement(ChartCanvas, null), document.querySelector("#charts"));

    loadCardData("pie");
};

var createLineChart = function createLineChart(ctx, data) {

    var labels = [];
    var scoreData = [];

    for (var i = 0; i < data.length; i++) {
        labels.push("Game" + (i + 1));
        scoreData.push(data[i].holes.scoreTotal);
    }

    var lineChart = new Chart(ctx, {
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
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

var createBarChart = function createBarChart(ctx, data) {

    var labels = [];
    var scoreData = [];

    for (var i = 0; i < data.length; i++) {
        labels.push("Game" + (i + 1));
        scoreData.push(data[i].holes.scoreTotal);
    }

    var lineChart = new Chart(ctx, {
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
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

var createPieChart = function createPieChart(ctx, data) {

    var labels = [];
    var scoreData = [];

    for (var i = 0; i < data.length; i++) {
        labels.push("Game" + (i + 1));
        scoreData.push(data[i].holes.scoreTotal);
    }

    var lineChart = new Chart(ctx, {
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
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

var loadCardData = function loadCardData(type) {
    sendAjax('GET', '/getCards', null, function (data) {
        var cardData = data.golfCards;

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

var setup = function setup(csrf) {
    var lineChartButton = document.querySelector("#lineChartBtn");
    var barChartButton = document.querySelector("#barChartBtn");
    var pieChartButton = document.querySelector("#pieChartBtn");

    lineChartButton.addEventListener("click", function (e) {
        e.preventDefault();
        createLineChartCanvas();
        return false;
    });

    barChartButton.addEventListener("click", function (e) {
        e.preventDefault();
        createBarChartCanvas();
        return false;
    });

    pieChartButton.addEventListener("click", function (e) {
        e.preventDefault();
        createPieChartCanvas();
        return false;
    });
};

var getToken = function getToken() {
    sendAjax('GET', '/getToken', null, function (result) {
        setup(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken();
});
"use strict";

var handleError = function handleError(message) {
    $("#errorMessage").text(message);
};

var redirect = function redirect(response) {
    window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
    $.ajax({
        cache: false,
        type: type,
        url: action,
        data: data,
        dataType: "json",
        success: success,
        error: function error(xhr, status, _error) {
            var messageObj = JSON.parse(xhr.responseText);
            handleError(messageObj.error);
        }
    });
};

var initializeMaterialize = function initializeMaterialize() {
    $('select').material_select();
    $('.collapsible').collapsible();
};
