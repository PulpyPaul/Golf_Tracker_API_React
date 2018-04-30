const handleLogin = (e) => {
    e.preventDefault();
    
    if ($("#user").val() == '' || $("#pass").val() == '') {
        Materialize.toast('Username or password is empty!', 3000);
        return false;
    }
    
    console.log($("input[name=_csrf]").val());
    
    sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
    
    return false;
};

const handleSignup = (e) => {
    e.preventDefault();
    
    if ($("#user").val() == '' || $("#pass").val() == '' || $("#pass2").val() == '') {
        Materialize.toast('All fields are required', 3000);
        return false;
    }
    
    if ($("#pass").val() !== $("#pass2").val()) {
        Materialize.toast('Passwords do not match!', 3000);
        return false;
    }
    
    sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);
    
    return false;
};

const LoginWindow = (props) => {
    return (
    <form id="loginForm" name="loginForm"
          action="/login"
          method="POST"
          className="mainForm container"
    >
    <label htmlFor="username">Username: </label>
    <input id="user" type="text" name="username" placeholder="username" />
    <label htmlFor="pass">Password: </label>
    <input id="pass" type="password" name="pass" placeholder="password" />
    <input type="hidden" name="_csrf" value={props.csrf}/>
    <div className="container center-align">
    <a className="waves-effect waves-light btn green darken-2" type="submit" id="loginBtn" onClick={handleLogin}>Login</a>
    </div>
    </form>
    );
};

const SignupWindow = (props) => {
    return (
    <form id="signupForm"
        name="signupForm"
        action="/signup"
        method="POST"
        className="mainForm container"
    >
        <label htmlFor="username">Username: </label>
        <input id="user" type="text" name="username" placeholder="username" />
        <label htmlFor="pass">Password: </label>
        <input id="pass" type="password" name="pass" placeholder="password" />
        <label htmlFor="pass2">Password: </label>
        <input id="pass2" type="password" name="pass2" placeholder="retype password" />
        <input type="hidden" name="_csrf" value={props.csrf} />
        <div className="container center-align">
        <a className="waves-effect waves-light btn green darken-2" type="submit" onClick={handleSignup}>Sign Up</a>
        </div>
    </form>
    );
};

const createLoginWindow = (csrf) => {
    ReactDOM.render(
        <LoginWindow csrf={csrf} />,
        document.querySelector("#content")
    );
};

const createSignupWindow = (csrf) => {
    ReactDOM.render(
        <SignupWindow csrf={csrf} />,
        document.querySelector("#content")
    );
};

const setup = (csrf) => {
    const loginButton = document.querySelector("#loginNav");
    const signupButton = document.querySelector("#signUpNav");
    
    signupButton.addEventListener("click", (e) => {
        e.preventDefault();
        createSignupWindow(csrf);
        return false;
    });
    
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        createLoginWindow(csrf);
        return false;
    });
    
    createLoginWindow(csrf);
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken();
});