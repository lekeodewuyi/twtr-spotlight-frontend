

//Auth containers
const userProfilePanel = document.querySelector(".user-profile");
const userProfileLabel = document.querySelector(".user-profile-label");

const userAuthDiv = document.querySelector(".user-auth-div");

const loginDiv = document.querySelector(".login-div");
const loginEmail =  document.querySelector(".login-email");
const loginPassword =  document.querySelector(".login-password");
const loginBtn =  document.querySelector(".login-btn");
const loginHere = document.querySelector(".login-here");

const signupDiv = document.querySelector(".signup-div");
const signupName =  document.querySelector(".signup-name");
const signupEmail =  document.querySelector(".signup-email");
const signupPassword =  document.querySelector(".signup-password");
const signupConfirmPassword =  document.querySelector(".signup-confirm-password");
const signupBtn =  document.querySelector(".signup-btn");
const signupHere = document.querySelector(".signup-here")

const logoutDiv = document.querySelector(".logout-div");
const logoutBtn = document.querySelector(".logout-btn");
const closeBtn = document.querySelectorAll(".close");


// Initial State
let state = {
    user: {
        // userAuthDiv: userAuthDiv.className,
        userAuthDiv: {
            className: userAuthDiv.className,
            width: userAuthDiv.style.width
        },
        loginDiv: loginDiv.className,
        signupDiv: signupDiv.className,
        logoutDiv: logoutDiv.className
    }
}

// Render state function whenever popstate is fired
function render(){
    userAuthDiv.width = state.user.userAuthDiv.width;
    userAuthDiv.className = state.user.userAuthDiv.className;
    loginDiv.className = state.user.loginDiv;
    signupDiv.className = state.user.signupDiv;
    logoutDiv.className = state.user.logoutDiv;
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

userProfilePanel.addEventListener("click", openUserPanel, false);
closeBtn.forEach((btn) => {
    btn.addEventListener("click", closeUserPanel, false);
})
signupHere.addEventListener("click", openSignupPanel, false);
loginHere.addEventListener("click", openUserPanel, false);

window.onpopstate = function (event) {
    if (event.state) { state = event.state; }
    render(state);
  };
