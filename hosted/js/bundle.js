"use strict";

var CardList = function CardList(props) {
    if (props.golfCards.length === 0) {
        return React.createElement(
            "div",
            { className: "cardList" },
            React.createElement(
                "h3",
                null,
                "You have no saved cards!"
            )
        );
    }

    var cardNodes = props.golfCards.map(function (golfCard) {
        return React.createElement(
            "div",
            { key: golfCard._id },
            React.createElement(
                "div",
                { className: "row center-align" },
                React.createElement(
                    "div",
                    { className: "col s6 offset-s3" },
                    React.createElement(
                        "div",
                        { className: "card green darken-2" },
                        React.createElement(
                            "div",
                            { className: "card-content white-text" },
                            React.createElement(
                                "span",
                                { className: "card-title" },
                                golfCard.courseName
                            ),
                            React.createElement(
                                "table",
                                { className: "white-text" },
                                React.createElement(
                                    "thead",
                                    null,
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "th",
                                            null,
                                            "Hole"
                                        ),
                                        React.createElement(
                                            "th",
                                            null,
                                            "Par"
                                        ),
                                        React.createElement(
                                            "th",
                                            null,
                                            "Yards"
                                        ),
                                        React.createElement(
                                            "th",
                                            null,
                                            "Score"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "tbody",
                                    null,
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "1"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[0].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[0].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[0].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "2"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[1].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[1].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[1].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "3"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[2].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[2].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[2].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "4"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[3].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[3].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[3].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "5"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[4].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[4].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[4].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "6"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[5].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[5].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[5].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "7"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[6].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[6].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[6].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "8"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[7].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[7].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[7].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "9"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[8].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[8].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[8].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "10"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[9].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[9].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[9].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "11"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[10].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[10].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[10].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "12"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[11].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[11].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[11].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "13"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[12].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[12].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[12].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "14"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[13].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[13].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[13].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "15"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[14].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[14].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[14].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "16"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[15].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[15].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[15].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "17"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[16].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[16].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[16].score
                                        )
                                    ),
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "18"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[17].par
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[17].yards
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.number[17].score
                                        )
                                    )
                                ),
                                React.createElement(
                                    "thead",
                                    null,
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "th",
                                            null,
                                            "Totals"
                                        ),
                                        React.createElement(
                                            "th",
                                            null,
                                            "Par"
                                        ),
                                        React.createElement(
                                            "th",
                                            null,
                                            "Yards"
                                        ),
                                        React.createElement(
                                            "th",
                                            null,
                                            "Score"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "tbody",
                                    null,
                                    React.createElement(
                                        "tr",
                                        null,
                                        React.createElement(
                                            "td",
                                            null,
                                            "18"
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.parTotal
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.yardsTotal
                                        ),
                                        React.createElement(
                                            "td",
                                            null,
                                            golfCard.holes.scoreTotal
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    });

    return React.createElement(
        "div",
        { className: "cardList" },
        cardNodes
    );
};

var loadCardsFromServer = function loadCardsFromServer() {
    sendAjax('GET', '/getCards', null, function (data) {
        ReactDOM.render(React.createElement(CardList, { golfCards: data.golfCards }), document.querySelector("#reactCards"));
    });
};

var handleCard = function handleCard(e) {
    e.preventDefault();

    // Checks to make sure course name is filled in
    if ($('#courseName').val() == '') {
        Materialize.toast('Course Name is required!', 3000);
        return false;
    }

    // Checks for all yard and score fields
    for (var i = 1; i < 19; i++) {
        if ($("#hole" + i + "Yards").val() == '') {
            Materialize.toast('Yards for each hole is required!', 3000);
            return false;
        }

        if ($("#hole" + i + "Score").val() == '') {
            Materialize.toast('Score for each hole is required!', 3000);
            return false;
        }
    }

    // Sends request and submits form
    sendAjax('POST', $("#golfCardForm").attr("action"), $("#golfCardForm").serialize(), function () {
        loadCardsFromServer();
    });

    Materialize.toast('Card Created!', 3000);

    return false;
};

var CardForm = function CardForm(props) {
    return React.createElement(
        "form",
        { id: "golfCardForm",
            onClick: handleCard,
            name: "golfCardForm",
            action: "/maker",
            method: "POST",
            className: "golfCardForm container"
        },
        React.createElement(
            "h5",
            null,
            "Course Name"
        ),
        React.createElement("input", { id: "courseName", type: "text", name: "courseName", placeholder: "Enter name here" }),
        React.createElement(
            "table",
            null,
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "Hole"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Par"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Yards"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Score"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "1"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole1Par", name: "hole1Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole1Yards", className: "valign-wrapper", type: "number", name: "hole1Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole1Score", className: "valign-wrapper", type: "number", name: "hole1Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "2"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole2Par", name: "hole2Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole2Yards", className: "valign-wrapper", type: "number", name: "hole2Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole2Score", className: "valign-wrapper", type: "number", name: "hole2Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "3"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole3Par", name: "hole3Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole3Yards", className: "valign-wrapper", type: "number", name: "hole3Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole3Score", className: "valign-wrapper", type: "number", name: "hole3Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "4"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole4Par", name: "hole4Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole4Yards", className: "valign-wrapper", type: "number", name: "hole4Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole4Score", className: "valign-wrapper", type: "number", name: "hole4Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "5"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole5Par", name: "hole5Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole5Yards", className: "valign-wrapper", type: "number", name: "hole5Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole5Score", className: "valign-wrapper", type: "number", name: "hole5Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "6"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole6Par", name: "hole6Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole6Yards", className: "valign-wrapper", type: "number", name: "hole6Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole6Score", className: "valign-wrapper", type: "number", name: "hole6Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "7"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole7Par", name: "hole7Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole7Yards", className: "valign-wrapper", type: "number", name: "hole7Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole7Score", className: "valign-wrapper", type: "number", name: "hole7Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "8"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole8Par", name: "hole8Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole8Yards", className: "valign-wrapper", type: "number", name: "hole8Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole8Score", className: "valign-wrapper", type: "number", name: "hole8Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "9"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole9Par", name: "hole9Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole9Yards", className: "valign-wrapper", type: "number", name: "hole9Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole9Score", className: "valign-wrapper", type: "number", name: "hole9Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "10"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole10Par", name: "hole10Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole10Yards", className: "valign-wrapper", type: "number", name: "hole10Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole10Score", className: "valign-wrapper", type: "number", name: "hole10Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "11"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole11Par", name: "hole11Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole11Yards", className: "valign-wrapper", type: "number", name: "hole11Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole11Score", className: "valign-wrapper", type: "number", name: "hole11Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "12"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole12Par", name: "hole12Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole12Yards", className: "valign-wrapper", type: "number", name: "hole12Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole12Score", className: "valign-wrapper", type: "number", name: "hole12Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "13"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole13Par", name: "hole13Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole13Yards", className: "valign-wrapper", type: "number", name: "hole13Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole13Score", "class": "valign-wrapper", type: "number", name: "hole13Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "14"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole14Par", name: "hole14Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole14Yards", className: "valign-wrapper", type: "number", name: "hole14Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole14Score", className: "valign-wrapper", type: "number", name: "hole14Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "15"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole15Par", name: "hole15Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole15Yards", className: "valign-wrapper", type: "number", name: "hole15Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole15Score", className: "valign-wrapper", type: "number", name: "hole15Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "16"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole16Par", name: "hole16Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole16Yards", className: "valign-wrapper", type: "number", name: "hole16Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole16Score", className: "valign-wrapper", type: "number", name: "hole16Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "17"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole17Par", name: "hole17Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole17Yards", className: "valign-wrapper", type: "number", name: "hole17Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole17Score", className: "valign-wrapper", type: "number", name: "hole17Score", placeholder: "Score" })
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "18"
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "div",
                            { className: "input-field col s6 valign-wrapper parSelect" },
                            React.createElement(
                                "select",
                                { id: "hole18Par", name: "hole18Par" },
                                React.createElement(
                                    "option",
                                    { value: "3" },
                                    "Par 3"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "4" },
                                    "Par 4"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "5" },
                                    "Par 5"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "6" },
                                    "Par 6"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole18Yards", className: "valign-wrapper", type: "number", name: "hole18Yards", placeholder: "Yards" })
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement("input", { id: "hole18Score", className: "valign-wrapper", type: "number", name: "hole18Score", placeholder: "Score" })
                    )
                )
            )
        ),
        React.createElement("div", { className: "divider" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
        React.createElement(
            "div",
            { className: "container center-align", id: "cardSubmitContainer" },
            React.createElement(
                "a",
                { className: "waves-effect waves-light btn green darken-2", type: "submit", id: "cardSubmitButton" },
                "Make Golf Card"
            )
        )
    );
};

var setup = function setup(csrf) {
    ReactDOM.render(React.createElement(CardForm, { csrf: csrf }), document.querySelector("#makeCard"));

    ReactDOM.render(React.createElement(CardList, { golfCards: [] }), document.querySelector("#reactCards"));

    loadCardsFromServer();
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
