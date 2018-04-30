const CardList = function(props) {
    if (props.golfCards.length === 0) {
        return (
            <div className="cardList">
                <h3>You have no saved cards!</h3>
            </div>
        );
    }
    
    const cardNodes = props.golfCards.map(function(golfCard) {
        return (
            <div key={golfCard._id}>
            <div className="row center-align">
                <div className="col s6 offset-s3">
                  <div className="card green darken-2">
                    <div className="card-content white-text">
                      <span className="card-title">{golfCard.courseName}</span>
                        <table className="white-text">
                            <thead>
                                <tr>
                                    <th>Hole</th>
                                    <th>Par</th>
                                    <th>Yards</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{golfCard.holes.number[0].par}</td>
                                    <td>{golfCard.holes.number[0].yards}</td>
                                    <td>{golfCard.holes.number[0].score}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{golfCard.holes.number[1].par}</td>
                                    <td>{golfCard.holes.number[1].yards}</td>
                                    <td>{golfCard.holes.number[1].score}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{golfCard.holes.number[2].par}</td>
                                    <td>{golfCard.holes.number[2].yards}</td>
                                    <td>{golfCard.holes.number[2].score}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>{golfCard.holes.number[3].par}</td>
                                    <td>{golfCard.holes.number[3].yards}</td>
                                    <td>{golfCard.holes.number[3].score}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>{golfCard.holes.number[4].par}</td>
                                    <td>{golfCard.holes.number[4].yards}</td>
                                    <td>{golfCard.holes.number[4].score}</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>{golfCard.holes.number[5].par}</td>
                                    <td>{golfCard.holes.number[5].yards}</td>
                                    <td>{golfCard.holes.number[5].score}</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>{golfCard.holes.number[6].par}</td>
                                    <td>{golfCard.holes.number[6].yards}</td>
                                    <td>{golfCard.holes.number[6].score}</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>{golfCard.holes.number[7].par}</td>
                                    <td>{golfCard.holes.number[7].yards}</td>
                                    <td>{golfCard.holes.number[7].score}</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>{golfCard.holes.number[8].par}</td>
                                    <td>{golfCard.holes.number[8].yards}</td>
                                    <td>{golfCard.holes.number[8].score}</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>{golfCard.holes.number[9].par}</td>
                                    <td>{golfCard.holes.number[9].yards}</td>
                                    <td>{golfCard.holes.number[9].score}</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>{golfCard.holes.number[10].par}</td>
                                    <td>{golfCard.holes.number[10].yards}</td>
                                    <td>{golfCard.holes.number[10].score}</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>{golfCard.holes.number[11].par}</td>
                                    <td>{golfCard.holes.number[11].yards}</td>
                                    <td>{golfCard.holes.number[11].score}</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>{golfCard.holes.number[12].par}</td>
                                    <td>{golfCard.holes.number[12].yards}</td>
                                    <td>{golfCard.holes.number[12].score}</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>{golfCard.holes.number[13].par}</td>
                                    <td>{golfCard.holes.number[13].yards}</td>
                                    <td>{golfCard.holes.number[13].score}</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>{golfCard.holes.number[14].par}</td>
                                    <td>{golfCard.holes.number[14].yards}</td>
                                    <td>{golfCard.holes.number[14].score}</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>{golfCard.holes.number[15].par}</td>
                                    <td>{golfCard.holes.number[15].yards}</td>
                                    <td>{golfCard.holes.number[15].score}</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>{golfCard.holes.number[16].par}</td>
                                    <td>{golfCard.holes.number[16].yards}</td>
                                    <td>{golfCard.holes.number[16].score}</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>{golfCard.holes.number[17].par}</td>
                                    <td>{golfCard.holes.number[17].yards}</td>
                                    <td>{golfCard.holes.number[17].score}</td>
                                </tr>
                            </tbody>
                            <thead>
                              <tr>
                                <th>Totals</th>
                                <th>Par</th>
                                <th>Yards</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>18</td>
                                <td>{golfCard.holes.parTotal}</td>
                                <td>{golfCard.holes.yardsTotal}</td>
                                <td>{golfCard.holes.scoreTotal}</td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                 </div>
                </div>
            </div>
            </div>
        );
    });
    
    return (
        <div className="cardList">
            {cardNodes}
        </div>
    );
};

const loadCardsFromServer = () => {
    sendAjax('GET', '/getCards', null, (data) => {
        ReactDOM.render(
            <CardList golfCards={data.golfCards} />, document.querySelector("#reactCards")
        );
    });
};

const handleCard = (e) => {
     e.preventDefault();

    // Checks to make sure course name is filled in
    if ($('#courseName').val() == '') {
      Materialize.toast('Course Name is required!', 3000);
      return false;
    }

    // Checks for all yard and score fields
    for (let i = 1; i < 19; i++) {
      if ($(`#hole${i}Yards`).val() == '') {
        Materialize.toast('Yards for each hole is required!', 3000);
        return false;
      }
        
      if ($(`#hole${i}Score`).val() == '') {
        Materialize.toast('Score for each hole is required!', 3000);
        return false;
      }
    }
    
    // Sends request and submits form
    sendAjax('POST', $("#golfCardForm").attr("action"), $("#golfCardForm").serialize(), function() {
        loadCardsFromServer();
    });
    
    Materialize.toast('Card Created!', 3000);

    return false;
};

const CardForm = (props) => {
    return (
        <form id="golfCardForm"
              name="golfCardForm"
              action="/maker"
              method="POST"
              className="golfCardForm container"
        >
            <h5>Course Name</h5>
            <input id="courseName" type="text" name="courseName" placeholder="Enter name here"/>
            <table>
            <thead>
                <tr>
                    <th>Hole</th>
                    <th>Par</th>
                    <th>Yards</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole1Par" name="hole1Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole1Yards" className="valign-wrapper" type="number" name="hole1Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole1Score" className="valign-wrapper" type="number" name="hole1Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole2Par" name="hole2Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole2Yards" className="valign-wrapper" type="number" name="hole2Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole2Score" className="valign-wrapper" type="number" name="hole2Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole3Par" name="hole3Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole3Yards" className="valign-wrapper" type="number" name="hole3Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole3Score" className="valign-wrapper" type="number" name="hole3Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole4Par" name="hole4Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole4Yards" className="valign-wrapper" type="number" name="hole4Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole4Score" className="valign-wrapper" type="number" name="hole4Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole5Par" name="hole5Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole5Yards" className="valign-wrapper" type="number" name="hole5Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole5Score" className="valign-wrapper" type="number" name="hole5Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole6Par" name="hole6Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole6Yards" className="valign-wrapper" type="number" name="hole6Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole6Score" className="valign-wrapper" type="number" name="hole6Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole7Par" name="hole7Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole7Yards" className="valign-wrapper" type="number" name="hole7Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole7Score" className="valign-wrapper" type="number" name="hole7Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole8Par" name="hole8Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole8Yards" className="valign-wrapper" type="number" name="hole8Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole8Score" className="valign-wrapper" type="number" name="hole8Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole9Par" name="hole9Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole9Yards" className="valign-wrapper" type="number" name="hole9Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole9Score" className="valign-wrapper" type="number" name="hole9Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole10Par" name="hole10Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole10Yards" className="valign-wrapper" type="number" name="hole10Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole10Score" className="valign-wrapper" type="number" name="hole10Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole11Par" name="hole11Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole11Yards" className="valign-wrapper" type="number" name="hole11Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole11Score" className="valign-wrapper" type="number" name="hole11Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole12Par" name="hole12Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole12Yards" className="valign-wrapper" type="number" name="hole12Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole12Score" className="valign-wrapper" type="number" name="hole12Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole13Par" name="hole13Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole13Yards" className="valign-wrapper" type="number" name="hole13Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole13Score" class="valign-wrapper" type="number" name="hole13Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole14Par" name="hole14Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole14Yards" className="valign-wrapper" type="number" name="hole14Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole14Score" className="valign-wrapper" type="number" name="hole14Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole15Par" name="hole15Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole15Yards" className="valign-wrapper" type="number" name="hole15Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole15Score" className="valign-wrapper" type="number" name="hole15Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole16Par" name="hole16Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole16Yards" className="valign-wrapper" type="number" name="hole16Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole16Score" className="valign-wrapper" type="number" name="hole16Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole17Par" name="hole17Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole17Yards" className="valign-wrapper" type="number" name="hole17Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole17Score" className="valign-wrapper" type="number" name="hole17Score" placeholder="Score"/>
                    </td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>
                        <div className="input-field col s6 valign-wrapper parSelect">
                        <select id="hole18Par" name="hole18Par">
                            <option value="3">Par 3</option>
                            <option value="4">Par 4</option>
                            <option value="5">Par 5</option>
                            <option value="6">Par 6</option>
                        </select>
                        </div>      
                    </td>
                    <td>
                        <input id="hole18Yards" className="valign-wrapper" type="number" name="hole18Yards" placeholder="Yards"/>
                    </td>
                    <td>
                        <input id="hole18Score" className="valign-wrapper" type="number" name="hole18Score" placeholder="Score"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="divider"></div>
        <input type="hidden" name="_csrf" value={props.csrf} />
        <div className="container center-align" id="cardSubmitContainer">
        <a className="waves-effect waves-light btn green darken-2" type="submit" id="cardSubmitButton" onClick={handleCard}>Make Golf Card</a>
        </div>
        </form>
    );
};

const setup = function(csrf) {
    ReactDOM.render(
        <CardForm csrf={csrf} />, document.querySelector("#makeCard")
    );
    
    ReactDOM.render(
        <CardList golfCards={[]}/>, document.querySelector("#reactCards")
    );
    
    loadCardsFromServer();
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken();
});