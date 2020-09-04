import {validateLoginData, validateSignupData} from "./src/scripts/validators.js";

dayjs().format();
const blue = "#1DA1F2";
const bg = "#15202B";
const blueLabel = "#1A91DA";
const blueHover = "#1B95E0";
const greyFont = "#8899A6";
const greyInputBg = "#253341";
const greyFloatingPanel = "#192734";
const greyFloatingPanelHover = "#202E3A";
const red = "#D6235B";


const loader = document.querySelector(".loader");

//Auth containers
const userProfilePanel = document.querySelector(".user-profile");
const userProfileLabel = document.querySelector(".user-profile-label");

const userAuthDiv = document.querySelector(".user-auth-div");

const loginDiv = document.querySelector(".login-div");
const loginEmail =  document.querySelector(".login-email");
const loginEmailLabel = document.querySelector(".login-email-label");
const loginPassword = document.querySelector(".login-password");
const loginPasswordLabel = document.querySelector(".login-password-label");
const loginErrors = document.querySelector(".login-errors");
const loginBtn =  document.querySelector(".login-btn");
const loginHere = document.querySelector(".login-here");

const signupDiv = document.querySelector(".signup-div");
const signupNameLabel = document.querySelector(".signup-name-label");
const signupEmailLabel = document.querySelector(".signup-email-label");
const signupPasswordLabel = document.querySelector(".signup-password-label");
const signupConfirmPasswordLabel = document.querySelector(".signup-confirm-password-label");
const signupName =  document.querySelector(".signup-name");
const signupEmail =  document.querySelector(".signup-email");
const signupPassword =  document.querySelector(".signup-password");
const signupConfirmPassword =  document.querySelector(".signup-confirm-password");
const signupErrors = document.querySelector(".signup-errors");
const signupBtn =  document.querySelector(".signup-btn");
const signupHere = document.querySelector(".signup-here")

const logoutDiv = document.querySelector(".logout-div");
const logoutBtn = document.querySelector(".logout-btn");
const closeBtn = document.querySelectorAll(".close");


const homeSearchPage = document.querySelector(".home-search-page");
const mainSearchInput = document.querySelector(".main-search-input");
const mainSearchError = document.querySelector(".main-search-error");
const searchChoicesDiv = document.querySelector(".search-choices");
const languageChoice = document.querySelectorAll(".language-choice");
const tweetTypeChoice = document.querySelectorAll(".tweet-type-choice");
const mainSearchButton = document.querySelector(".main-search-button");
const mainSearchInputDiv = document.querySelector(".main-search-input-div");

const searchResults = document.querySelector(".search-results");
const tweetResultsDiv = document.querySelector(".tweet-results-div");


const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}

const updateCurrentUser = (userDetails) => {
    let currentUser = userDetails;
    return localStorage.setItem('currentUser', JSON.stringify(currentUser))
}

const appendUserDetails = (user) => {
    let name = user.name;
    let firstName = name.replace(/ .*/,'');
    userProfileLabel.innerHTML = `Hello, <span class="color-blue">${firstName}</span>`;
}

// Initial State
let state = {
    user: {
        userAuthDiv: {
            className: userAuthDiv.className,
            width: userAuthDiv.style.width
        },
        loginDiv: loginDiv.className,
        signupDiv: signupDiv.className,
        logoutDiv: logoutDiv.className
    },
    home: {
        homeSearchPage: homeSearchPage.className,
        children: homeSearchPage.contains(mainSearchInput)
    },
    result: {
        searchResults: searchResults.className,
        tweets: ""

    }
}

console.log(state.home.children)

// Render state function whenever popstate is fired
function render(){
    let token = localStorage.FBIdToken;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // set app data
    if(token) {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken.exp * 1000);
        console.log(Date.now())
        if(decodedToken.exp * 1000 < Date.now()){ //if TOKEN is expired
            console.log("token has expired")

            // TODO: Session expired modal to initiate logout
            // sessionExpiredModal.classList.remove("hide");
        } else console.log("token has not expired")
    }

    if (currentUser) {
        appendUserDetails(currentUser);
    }

    // set states
    if (token) {
        console.log("I got here")
        userAuthDiv.style.width = "300px";
        loginDiv.classList.add("hide");
        signupDiv.classList.add("hide");
        logoutDiv.classList.remove("hide");
    } else {
        loginDiv.className = state.user.loginDiv;
        signupDiv.className = state.user.signupDiv;
        logoutDiv.className = state.user.logoutDiv;
    }
    userAuthDiv.style.width = state.user.userAuthDiv.width;
    userAuthDiv.className = state.user.userAuthDiv.className;

    homeSearchPage.className = state.home.homeSearchPage;
    searchResults.className = state.result.searchResults;
    // tweetResultsDiv.innerHTML = state.result.tweets;


    if (!(homeSearchPage.classList.contains("hide"))) {
        homeSearchPage.append(mainSearchButton);
        homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
        homeSearchPage.append(searchChoicesDiv)
    }

    if (!(searchResults.classList.contains("hide"))) {
        searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
        searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);
    }
}

// Initialize initial state on load
(function initialize() {
    window.history.replaceState(state, null, "");
    render(state);
})();


function closeUserPanel(){
    event.preventDefault();
    userAuthDiv.classList.add("hide");
    loginDiv.classList.add("hide");
    signupDiv.classList.add("hide");

    state.user.userAuthDiv.className = userAuthDiv.className;
    state.user.loginDiv = loginDiv.className;
    state.user.signupDiv = signupDiv.className;
    window.history.pushState(state, null, "");

}

function openUserPanel(){
    event.preventDefault();
    let token = localStorage.FBIdToken;
    if(token){
        userAuthDiv.style.width = "300px";
        userAuthDiv.classList.remove("hide");
        logoutDiv.classList.remove("hide");
        console.log("true")
    } else {
        console.log("false")
        userAuthDiv.classList.remove("hide");
        loginDiv.classList.remove("hide");
        signupDiv.classList.add("hide");
        logoutDiv.classList.add("hide");
    }

    state.user.userAuthDiv.className = userAuthDiv.className;
    state.user.userAuthDiv.width = userAuthDiv.width;
    state.user.loginDiv = loginDiv.className;
    state.user.signupDiv = signupDiv.className;
    state.user.logoutDiv = logoutDiv.className;
    window.history.pushState(state, null, "");
}

function openSignupPanel(){
    loginDiv.classList.add("hide");
    signupDiv.classList.remove("hide");

    state.user.loginDiv = loginDiv.className;
    state.user.signupDiv = signupDiv.className;
    window.history.pushState(state, null, "");
}


function logout(){
    localStorage.removeItem("FBIdToken");
    localStorage.removeItem("currentUser");
    window.location.href = "/";
}


function login(){

    loginBtn.append(loader);
    loader.classList.remove("hide");

    const loginData = {
        email: loginEmail.value,
        password: loginPassword.value
    }
    
    let {valid, errors} = validateLoginData(loginData);
    
    if (!valid) {
        loader.classList.add("hide");
        if (errors.email) {
            loginEmailLabel.innerHTML = errors.email
            loginEmailLabel.style.color = red;
        }
        if (errors.password) {
            loginPasswordLabel.innerHTML = errors.password
            loginPasswordLabel.style.color = red;
        }
    }

    else if (valid)
    axios.post(
        'http://localhost:5000/explorer-one-44263/us-central1/api/login',
        {
            "email": loginData.email,
            "password": loginData.password,
        }
        )
        .then(function (response) {
            loader.classList.add("hide");
            console.log(response.data);
            setAuthorizationHeader(response.data.token);
            updateCurrentUser(response.data.userDetails);
            appendUserDetails(response.data.userDetails);
            userAuthDiv.classList.add("hide");
            loginDiv.classList.add("hide");
        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
            loginErrors.innerHTML = error.response.data.error;
        })
}


function signup(){

    signupBtn.append(loader);
    loader.classList.remove("hide");

    const signupData = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
        confirmPassword: signupConfirmPassword.value
    }
    
    let {valid, errors} = validateSignupData(signupData);
    
    if (!valid) {
        loader.classList.add("hide");
        if (errors.name) {
            signupNameLabel.innerHTML = errors.name
            signupNameLabel.classList.add("error");
        }
        if (errors.email) {
            signupEmailLabel.innerHTML = errors.email
            signupEmailLabel.classList.add("error");
        }
        if (errors.password) {
            signupPasswordLabel.innerHTML = errors.password;
            signupPasswordLabel.classList.add("error");
        }
        if  (errors.confirmPassword) {
            signupConfirmPasswordLabel.innerHTML = errors.confirmPassword;
            signupConfirmPasswordLabel.classList.add("error");
        }
    }

    else if (valid)
    axios.post(
        'http://localhost:5000/explorer-one-44263/us-central1/api/signup',
        {
            name: signupData.name,
            email: signupData.email,
            password: signupData.password,
            confirmPassword: signupData.confirmPassword
        }
        )
        .then(function (response) {
            loader.classList.add("hide");
            console.log(response.data);
            setAuthorizationHeader(response.data.token);
            updateCurrentUser(response.data.userDetails);
            appendUserDetails(response.data.userDetails);
            userAuthDiv.classList.add("hide");
            signupDiv.classList.add("hide");
        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
            if (error.response.data.password) {
                signupErrors.innerHTML = error.response.data.password;
            }

            if (error.response.data.email) {
                signupErrors.innerHTML = error.response.data.email;
            }
            else {
                signupErrors.innerHTML = error.response.data.general;
            }
        })
}


// Nav Event Listeners
userProfilePanel.addEventListener("click", openUserPanel, false);
closeBtn.forEach((btn) => {
    btn.addEventListener("click", closeUserPanel, false);
})
signupHere.addEventListener("click", openSignupPanel, false);
loginHere.addEventListener("click", openUserPanel, false);

// Auth Event Listeners
loginBtn.addEventListener("click", login, false);
signupBtn.addEventListener("click", signup, false);
logoutBtn.addEventListener("click", logout, false);


// Data event listeners
mainSearchButton.addEventListener("click", mainSearch, false);













window.onpopstate = function (event) {
    if (event.state) { state = event.state; }
    render(state);
  };
