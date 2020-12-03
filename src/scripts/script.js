import {validateLoginData, validateSignupData} from './validators.js';
import  jwt_decode  from 'jwt-decode';
const axios = require('axios');
const dayjs = require('dayjs');
import relativeTime from 'dayjs/plugin/relativeTime';
import "../css/reset.css"
import "../css/main.css"
import smoothscroll from 'smoothscroll-polyfill';
import profileImage from '../../assets/profile.jpg';
import DOMPurify from 'dompurify';


smoothscroll.polyfill();
dayjs.extend(relativeTime)

const blue = "#1DA1F2";

const body = document.querySelector("body");
const imageError = document.querySelector(".media-error");


(function checkCors(){
    axios.get('https://pbs.twimg.com/media/Eh4xLaMXsAEr1p4?format=jpg&name=900x900')
        .then((response) => {
            if (response.data) {
                let corsAllowed = document.createElement("p");
                corsAllowed.classList.add("cors-allowed");
                body.append(corsAllowed)
            }
        })
        .catch((error) => {
            let corsDenied = document.createElement("p");
            corsDenied.classList.add("cors-denied");
            body.append(corsDenied)
            console.log("bla bla bla bla")
            console.log(error.status);
        })
}())




document.addEventListener("click", function(){
    const corsAllowed = document.querySelector(".cors-allowed");
    const corsDenied = document.querySelector(".cors-denied");
    console.log(corsAllowed, corsDenied);
})

const red = "#D6235B";

let current_page;
const root = document.querySelector(".root");
const centerContainer = document.querySelector(".center-container");

const loader = document.querySelector(".loader");
const screenFade = document.querySelector(".screen-fade");
const modals = document.querySelectorAll(".modal");

const mediaModal = document.querySelector(".media-modal");
const media = document.querySelector(".media");
const closeMediaModal = document.querySelector(".media-modal-close");

const inAppModals = document.querySelectorAll(".in-app-modal")

const headerText = document.querySelector(".header-text");

//Auth containers
const userProfilePanel = document.querySelector(".user-profile");
const userProfileLabel = document.querySelector(".user-profile-label");
let userIcon = document.querySelector(".user-icon");

const userAuthDiv = document.querySelector(".user-auth-div");

const aboutModal = document.querySelector(".about-modal");
const aboutModalClose = document.querySelector(".about-modal-close");

const authInputs = document.querySelectorAll(".auth-input");
const authInputLabels = document.querySelectorAll(".auth-input-label");

const nextInputs = document.querySelectorAll(".next-input");
const goInputs = document.querySelectorAll(".go-input");

const sessionExpiredModal = document.querySelector(".session-over-modal");
const closeSessionExpiredModal = document.querySelector(".session-over-modal-close");


const loginDiv = document.querySelector(".login-div");
const loginEmail =  document.querySelector(".login-email");
const loginEmailLabel = document.querySelector(".login-email-label");
const loginPassword = document.querySelector(".login-password");
const loginPasswordLabel = document.querySelector(".login-password-label");
const loginErrors = document.querySelector(".login-errors");
const loginBtn =  document.querySelector(".login-btn");
const loginHere = document.querySelector(".login-here");

const loginFromModal = document.querySelectorAll(".login-from-modal");

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
const closeBtn = document.querySelectorAll(".auth-close");


const homeSearchPage = document.querySelector(".home-search-page");
const mainSearchInputDiv = document.querySelector(".main-search-input-div");
const mainSearchInput = document.querySelector(".main-search-input");
const mainSearchError = document.querySelector(".main-search-error");
const searchChoicesDiv = document.querySelector(".search-choices");
const languageChoice = document.querySelectorAll(".language-choice");
const en = document.querySelector(".en-lang");
const fr = document.querySelector(".fr-lang");
const de = document.querySelector(".de-lang");
const es = document.querySelector(".es-lang");
const pt = document.querySelector(".pt-lang");
const zh = document.querySelector(".zh-lang");
const recent = document.querySelector(".recent-type");
const popular = document.querySelector(".popular-type");
const mixed = document.querySelector(".mixed-type");

const tweetTypeChoice = document.querySelectorAll(".tweet-type-choice");
const mainSearchButton = document.querySelector(".main-search-button");

const searchResults = document.querySelector(".search-results");
const tweetResultsDiv = document.querySelector(".tweet-results-div");


const timelineSearchPage = document.querySelector(".timeline-search-page");
const timelineSearchInputDiv = document.querySelector(".timeline-search-input-div");
const timelineSearchInput = document.querySelector(".timeline-search-input");
const timelineSearchError = document.querySelector(".timeline-search-error");
const timelineSearchButton = document.querySelector(".timeline-search-button");


const collectionPage = document.querySelector(".collections-page");
const collectionPageHeader = document.querySelector(".collections-page-header");
const createCollectionCta = document.querySelector(".create-collection-cta");
const createCollectionInputDiv = document.querySelector(".create-collection-input-div");
const createCollectionInput = document.querySelector(".create-collection-input");
const createCollectionBtn = document.querySelector("#create-collection-btn");
const createCollectionInputClose = document.querySelector(".create-collection-close")
const createCollectionError = document.querySelector(".create-collection-error");

const createCollectionFromModal = document.querySelector(".create-collection-from-modal");
const createCollectionFromModalInput = document.querySelector(".create-col-from-modal-input");
const createCollectionFromModalBtn = document.querySelectorAll(".create-col-from-modal-btn");
const createCollectionFromModalError = document.querySelector(".create-col-from-modal-error");

const collectionCounter = document.querySelector(".collection-count");
const collectionList = document.querySelector(".collections-list");
const emptyCollection = document.querySelector(".empty-collection");


//Save to collection
const saveToCollectionModal = document.querySelector(".save-to-collection-prompt");
const closeSaveToCollectionModal = document.querySelector(".save-to-collection-close");

const saveToCollectionItemDiv = document.querySelector(".save-to-collection-item-div");

//remove from collection
const removeFromCollectionModal = document.querySelector(".remove-from-collection-prompt");



// Side Nav Items
const sideNavItems = document.querySelectorAll(".side-nav-item");
const homeItem = document.querySelector(".home");
const timelineItem = document.querySelector(".time-travel");
const collectionItem = document.querySelector(".collections");
const aboutItem = document.querySelector(".about");

const spotlightNav = document.querySelector(".spotlight-container");
const homeSpotlight = document.querySelector(".home-page-spotlight");
const timelineSpotlight = document.querySelector(".timeline-page-spotlight");
const collectionSpotlight = document.querySelector(".collections-page-spotlight");
const aboutSpotlight = document.querySelector(".about-page-spotlight");


languageChoice.forEach((lang) => {
        lang.addEventListener("click", function(){
            if (!(searchResults.classList.contains("hide")) && mainSearchInput.value.trim() !== "" && lang.getAttribute("data-selected") !== "true") {

                languageChoice.forEach((others) => {
                    others.setAttribute("data-selected", "false");
                })
                lang.setAttribute("data-selected", "true");
                mainSearch();
            }
        }, false)

})

tweetTypeChoice.forEach((type) => {
    type.addEventListener("click", function(){

        if (!(searchResults.classList.contains("hide")) && mainSearchInput.value.trim() !== "" && type.getAttribute("data-selected") !== "true") {
            tweetTypeChoice.forEach((others) => {
                others.setAttribute("data-selected", "false");
            })
            type.setAttribute("data-selected", "true");
            console.log("hey")
            mainSearch();
            console.log("hi")
        }
    }, false)
})


nextInputs.forEach((input) => {
    input.addEventListener("keydown", function(event){
        if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
            let form = event.target.form;
            let index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
          }
    }, false)
})

goInputs.forEach((input) => {
    input.addEventListener("keydown", function(event){
        if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
            let form = event.target.form;
            let index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].click();
            // event.preventDefault();
          }
    }, false)
})



loginFromModal.forEach((btn) => {
    btn.addEventListener("click", function(){
        // window.history.back();
        userProfilePanel.click()
        // setTimeout(function(){userProfilePanel.click()}, 300)
    }, false)
})

createCollectionFromModalBtn.forEach((btn) => {
    btn.addEventListener("click", function(){
        createCollectionInput.value = createCollectionFromModalInput.value;
        createCollectionBtn.click();
        // loader.classList.remove("hide");
        // createCollectionFromModal.append(loader);
    
        // setTimeout(function(){createCollectionFromModalBtn.append(loader)}, 4)
    }, addEventListener);
})


let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

authInputs.forEach((input) => {
    input.addEventListener("keydown", function(){
        input.classList.remove("error");

        authInputLabels.forEach((label) => {
            label.classList.remove("color-red");
            if (label === loginEmailLabel) {
                label.innerText = "Email:"
            } else if(label === loginPasswordLabel) {
                label.innerText = "Password:"
            } else if(label === signupNameLabel) {
                label.innerText = "Name:"
            } else if(label === signupEmailLabel) {
                label.innerText = "Email:"
            } else if(label === signupPasswordLabel) {
                label.innerText = "Password:"
            } else if(label === signupConfirmPasswordLabel) {
                label.innerText = "Confirm password:"
            }
        });

    }, false);
})




let tokenStatus;
let config;
let token;
function checkTokenStatus(){
    token = localStorage.FBIdToken;
    if(token) {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken.exp * 1000);
        console.log(Date.now())
        if(decodedToken.exp * 1000 < Date.now()){ //if TOKEN is expired
            console.log("token has expired")
            tokenStatus = "expired";

            // TODO: Session expired modal to initiate logout
            sessionExpiredModal.classList.remove("hide");
            screenFade.classList.remove("hide");
        } else {
            tokenStatus = "active"
            config = {
                headers: { Authorization: `${token}` }
            };
        }
    }
}


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
    userIcon.style.fill = blue;
    userProfileLabel.innerHTML = DOMPurify.sanitize(`Hello, <span class="color-blue">${firstName}</span>`);

    let userCollections = user.collections.reverse();
    let userCollectionCount = user.collectionCount;

    collectionList.innerHTML = DOMPurify.sanitize("");
    saveToCollectionItemDiv.innerHTML = DOMPurify.sanitize("");
    createCollectionFromModal.classList.remove("hide");
    if (!(!Array.isArray(userCollections) || !userCollections.length)) {
        for (let i = 0; i < userCollections.length; i++) {

            let collectionItemParagraph = document.createElement("p");
            collectionItemParagraph.innerText = userCollections[i];

            let collectionItem = document.createElement("div");
            collectionItem.classList.add("collection-item");
            collectionItem.append(collectionItemParagraph);

            collectionList.append(collectionItem);


            let saveToCollectionItem = document.createElement("p");
            saveToCollectionItem.classList.add("save-to-collection-item");
            saveToCollectionItem.innerText = userCollections[i];
            saveToCollectionItemDiv.append(saveToCollectionItem)
            saveToCollectionModal.append(saveToCollectionItemDiv);
        }


        let allCollectionItems = document.querySelectorAll(".collection-item");
        allCollectionItems[0].setAttribute("data-selected", "true");
        console.log(allCollectionItems[0])


        if (userCollectionCount === 1) {
            collectionCounter.innerText = `You currently have ${userCollectionCount} collection`
        } else if (userCollectionCount > 1) {
            collectionCounter.innerText = `You currently have ${userCollectionCount} collections`
        }
    } else {
        collectionCounter.innerText = `You haven't created any collections, click the create a new collection button to get started`
        // createCollectionFromModal.classList.remove("hide");
    }

    appendCollections()
}


// Initial State
let state = {
    page: "home",
    header: `twtr  &middot; spotlight`,
    home: {
        class: homeSearchPage.className
    },
    center: {
        scrollPosition: centerContainer.scrollTop
    },
    timeline: {
        class: timelineSearchPage.className
    },
    collection: {
        class: collectionPage.className,
        emptyText: ""
    },
    about: {
        class: aboutModal.className
    },
    user: {
        authDiv: {
            class: userAuthDiv.className,
            width: userAuthDiv.style.width
        },
        loginDiv: {
            class: loginDiv.className
        },
        signupDiv: {
            class: signupDiv.className
        },
        logoutDiv: {
            class: logoutDiv.className
        }
    },
    sidenav: {
        home: homeItem.getAttribute("data-selected"),
        timeline: timelineItem.getAttribute("data-selected"),
        collection: collectionItem.getAttribute("data-selected"),
        about: aboutItem.getAttribute("data-selected")
    },
    spotlight: {
        innerHTML: DOMPurify.sanitize(homeSpotlight.innerHTML)
    },
    search: {
        searchPage: searchResults.className,
        tweetsDiv: "",
        keyword: {
            home: "",
            timeline: ""
        },
        choice: {
            lang: {
                en: en.checked,
                fr: fr.checked,
                de: de.checked,
                es: es.checked,
                pt: pt.checked,
                zh: fr.checked,
            },
            type:{
                recent: recent.checked,
                popular: popular.checked,
                mixed: mixed.checked
            }
        }

    },
    savetocol: {
        class: saveToCollectionModal.className
    },
    removefromcol: {
        class: removeFromCollectionModal.className
    },
    screenFade: {
        class: screenFade.className
    },
    media: {
        class: mediaModal.className,
        bg_img: ""
    }

}


// Render state function whenever popstate is fired
function render(){
    centerContainer.style.overflowY = "auto";
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
            sessionExpiredModal.classList.remove("hide");
            screenFade.classList.remove("hide");
        } else {
            config = {
                headers: { Authorization: `${token}` }
              };
        }
    }

    if (currentUser) {
        appendUserDetails(currentUser);
    }


    current_page = state.page;

    // set states
    if(token){
        console.log("I got here")
        userAuthDiv.style.width = "300px";
        userAuthDiv.style.position = "relative";
        userAuthDiv.style.height = "100%"
        loginDiv.classList.add("hide");
        signupDiv.classList.add("hide");
        logoutDiv.classList.remove("hide");
        if (vw < 600) {
            userAuthDiv.style.position = "";
            userAuthDiv.style.height = "50vh"
        }
    } else {
        userAuthDiv.style.width = state.user.authDiv.width;
        loginDiv.className = state.user.loginDiv.class;
        signupDiv.className = state.user.signupDiv.class;
        logoutDiv.className = state.user.logoutDiv.class;
    }


    checkTokenStatus();
    if (tokenStatus === "active" && current_page === "collections") {
        let activeCollection = document.querySelector('.collection-item[data-selected="true"]')
        console.log(activeCollection)
        if (activeCollection)
        axiosRetrieveTweets(activeCollection.innerText.trim())
    }

    screenFade.className = state.screenFade.class;

    userAuthDiv.className = state.user.authDiv.class;

    homeSearchPage.className = state.home.class;
    en.checked = state.search.choice.lang.en;
    fr.checked = state.search.choice.lang.fr;
    de.checked = state.search.choice.lang.de;
    es.checked = state.search.choice.lang.es;
    pt.checked = state.search.choice.lang.pt;
    zh.checked = state.search.choice.lang.zh;
    recent.checked = state.search.choice.type.recent;
    popular.checked = state.search.choice.type.popular;
    mixed.checked = state.search.choice.type.mixed;



    timelineSearchPage.className = state.timeline.class;
    collectionPage.className = state.collection.class;

    emptyCollection.innerText = state.collection.emptyText;
    // aboutModal.className = state.about.class;

    spotlightNav.innerHTML = DOMPurify.sanitize(state.spotlight.innerHTML);
    headerText.innerHTML = DOMPurify.sanitize(state.header)

    homeItem.setAttribute("data-selected", `${state.sidenav.home}`);
    timelineItem.setAttribute("data-selected", `${state.sidenav.timeline}`);
    collectionItem.setAttribute("data-selected", `${state.sidenav.collection}`);
    // aboutItem.setAttribute("data-selected", `${state.sidenav.about}`);


    searchResults.className = state.search.searchPage;
    centerContainer.scrollTop = state.center.scrollPosition;

    tweetResultsDiv.innerHTML = DOMPurify.sanitize(state.search.tweetsDiv);
    mainSearchInput.value = state.search.keyword.home;
    timelineSearchInput.value = state.search.keyword.timeline;


    mediaModal.className = state.media.class;
    mediaModal.style.backgroundImage = state.media.bg_img;

    saveToCollectionModal.className = state.savetocol.class;
    removeFromCollectionModal.className = state.removefromcol.class;




    if (!(homeSearchPage.classList.contains("hide"))) {
        homeSearchPage.append(mainSearchButton);
        homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
        homeSearchPage.insertBefore(mainSearchError, homeSearchPage.lastChild);
        homeSearchPage.append(searchChoicesDiv);
    }

    if (!(timelineSearchPage.classList.contains("hide"))) {
        timelineSearchPage.append(timelineSearchButton);
        timelineSearchPage.insertBefore(timelineSearchInputDiv, timelineSearchPage.lastChild);
        timelineSearchPage.insertBefore(timelineSearchError, timelineSearchPage.lastChild);    
    }

    if (!(searchResults.classList.contains("hide"))) {
        if (current_page === "home") {
            searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
            searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);



            timelineSearchPage.append(timelineSearchButton);
            timelineSearchPage.insertBefore(timelineSearchInputDiv, timelineSearchPage.lastChild);
            timelineSearchPage.insertBefore(timelineSearchError, timelineSearchPage.lastChild); 
        } else if (current_page === "timeline" ) {
            searchResults.insertBefore(timelineSearchInputDiv, searchResults.firstChild);



            homeSearchPage.append(mainSearchButton);
            homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
            homeSearchPage.insertBefore(mainSearchError, homeSearchPage.lastChild);
            homeSearchPage.append(searchChoicesDiv);
        }
    }

    console.log(current_page)


    interactWithSearchResults();

    if ('scrollRestoration' in history) {
        // Back off, browser, I got this...
        history.scrollRestoration = 'manual';
      }
}

// Initialize initial state on load
(function initialize() {
    window.history.replaceState(state, null, "");
    render(state);
})();




sideNavItems.forEach((item) => {
    item.addEventListener("click", handleSideNav, false);
})

function handleSideNav(event){
    centerContainer.style.overflowY = "auto";
    let currentTab = event.currentTarget;

    sideNavItems.forEach((others) => {
        // userAuthDiv.classList.add("hide");
        others.setAttribute("data-selected", "false");
    })
    if (!(currentTab.classList.contains("user-profile"))) {
        currentTab.setAttribute("data-selected", "true")
        if (!(currentTab.classList.contains("about"))) {
            headerText.innerText = currentTab.innerText;
        }
    }


    if (currentTab === homeItem) {
        goHome();
        spotlightNav.innerHTML = DOMPurify.sanitize(homeSpotlight.innerHTML);
        headerText.innerHTML = homeItem.innerHTML;
        headerText.innerHTML = DOMPurify.sanitize("Home");
        homeItem.setAttribute("data-selected", `true`);
        if (homePush === true) {
            return
        }
        if (homeReadyToPush === false) {
            return
        }
    } else if (currentTab === timelineItem) {
        timeTravel();
        spotlightNav.innerHTML = DOMPurify.sanitize(timelineSpotlight.innerHTML);
        headerText.innerHTML = DOMPurify.sanitize(timelineItem.innerHTML);
        headerText.innerHTML = DOMPurify.sanitize(`Search Timeline`);
        timelineItem.setAttribute("data-selected", `true`);
        if (timelinePush === true) {
            return
        }
        if (timelineReadyToPush === false) {
            return
        }
    } else if (currentTab === collectionItem) {
        goToCollections();
        spotlightNav.innerHTML = DOMPurify.sanitize(collectionSpotlight.innerHTML);
        headerText.innerHTML = DOMPurify.sanitize(collectionItem.innerHTML);
        headerText.innerHTML = DOMPurify.sanitize(`Your collections`);
        collectionItem.setAttribute("data-selected", `true`);
        if (collectionsPush === true) {
            return
        }
    } else if (currentTab === aboutItem) {
        spotlightNav.innerHTML = DOMPurify.sanitize(aboutSpotlight.innerHTML);
        getAbout();
        // headerText.innerText =aboutItem.innerText;
        aboutItem.setAttribute("data-selected", `true`);
    } else if (currentTab === userProfilePanel) {
        openUserPanel();
    }

    console.log("scroll", centerContainer.scrollTop)
    if (vw < 950) {
        console.log("heyyyy")
        if (currentTab === homeItem) {
            headerText.innerHTML = DOMPurify.sanitize(`Home <span class="small color-blue"> / search for anything on twitter<span>`);
        } else if (currentTab === timelineItem) {
            headerText.innerHTML = DOMPurify.sanitize(`Search Timeline <span class="small color-blue"> / get tweets from a user's timeline<span>`);
        } else if (currentTab === collectionItem) {
            headerText.innerHTML = DOMPurify.sanitize(`Your collections  <span class="small color-blue"> / view all your saved tweets.<span>`);
        } 
    }


    state.header = DOMPurify.sanitize(headerText.innerHTML);
    state.page = current_page;

    state.user.authDiv.class = userAuthDiv.className;
    state.screenFade.class = screenFade.className;


    state.user.loginDiv.class = loginDiv.className;
    state.user.signupDiv.class = signupDiv.className;
    state.user.logoutDiv.class = logoutDiv.className;

    state.home.class = homeSearchPage.className;
    state.search.keyword.home = mainSearchInput.value;

    state.timeline.class = timelineSearchPage.className;
    state.collection.class = collectionPage.className;
    state.collection.emptyText = emptyCollection.innerText;
    // state.about.class = aboutModal.className;

    state.spotlight.innerHTML = DOMPurify.sanitize(spotlightNav.innerHTML);

    state.sidenav.home = homeItem.getAttribute("data-selected");
    state.sidenav.timeline = timelineItem.getAttribute("data-selected");
    state.sidenav.collection = collectionItem.getAttribute("data-selected");
    // state.sidenav.about = aboutItem.getAttribute("data-selected");

    state.search.searchPage = searchResults.className;

    state.center.scrollPosition = centerContainer.scrollTop;

    if (currentTab !== aboutItem) {
        window.history.pushState(state, null, "");
    }

    if (currentTab === homeItem) {
        homePush = true;
        timelinePush = false;
        collectionsPush = false;
    }

    if (currentTab === timelineItem) {
        homePush = false;
        timelinePush = true;
        collectionsPush = false;
    }

    if (currentTab === collectionItem) {
        homePush = false;
        timelinePush = false;
        collectionsPush = true;
    }

}

function topInView(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;

    var topIsVisible = (elemTop >= 0);
    return topIsVisible;
}

let homePush = false;
let homeReadyToPush;

let timelinePush = false;
let timelineReadyToPush;

let collectionsPush = false;

function goHome(){
    current_page = "home"
    console.log(homePush)
    console.log(mainSearchInputDiv.parentNode)

    // if (current_page === "home" && !topInView(searchResults)) {
    if (mainSearchInputDiv.parentNode === searchResults && !topInView(searchResults)) {
        console.log("not at the top")
        searchResults.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        homeReadyToPush = false;
    } else {
        console.log("at the top")
        // window.location.href = "/";
        homeSearchPage.classList.remove("hide");
        appendElementsToHome();
        mainSearchError.innerText = "";
        
        timelineSearchPage.classList.add("hide");
        appendElementsToTimeline();

        collectionPage.classList.add("hide");

        aboutModal.classList.add("hide");

        searchResults.classList.add("hide");
        homeReadyToPush = true;
    }
}

function timeTravel(){
    current_page = "timeline"

    console.log(timelineSearchInput.parentNode)

    if (timelineSearchInputDiv.parentNode === searchResults && !topInView(searchResults)) {
        console.log("not at the top")
        searchResults.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        timelineReadyToPush = false;
    } else {

        timelineSearchPage.classList.remove("hide");
        appendElementsToTimeline();
        timelineSearchError.innerText = "";

        homeSearchPage.classList.add("hide");
        appendElementsToHome();

        collectionPage.classList.add("hide");

        aboutModal.classList.add("hide");

        searchResults.classList.add("hide");
        timelineReadyToPush = true;
    }

}

function goToCollections(){
    centerContainer.style.overflowY = "auto";
    current_page = "collections"

    if (collectionsPush !== true) {
        emptyCollection.classList.add("hide");
        emptyCollection.innerText = "";
        collectionPage.classList.remove("hide");
    
        homeSearchPage.classList.add("hide");
        appendElementsToHome();
    
        timelineSearchPage.classList.add("hide");
        appendElementsToTimeline();
    
        aboutModal.classList.add("hide");
    
        searchResults.classList.add("hide");

        checkTokenStatus();
        if (tokenStatus === "active") {
            let activeCollection = document.querySelector('.collection-item[data-selected="true"]')
            console.log(activeCollection)
            if (activeCollection)
            axiosRetrieveTweets(activeCollection.innerText.trim())
            console.log("");
        }
    } else {
        collectionPage.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }
}   

function getAbout(){
    aboutModal.classList.remove("hide");
}

function appendElementsToHome(){
    mainSearchInput.value = "";
    mainSearchError.innerText = "";
    homeSearchPage.append(mainSearchButton);
    homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
    homeSearchPage.insertBefore(mainSearchError, homeSearchPage.lastChild);
    homeSearchPage.append(searchChoicesDiv);
}

function appendElementsToTimeline(){
    timelineSearchInput.value = "";
    timelineSearchError.innerText = "";
    timelineSearchPage.append(timelineSearchButton);
    timelineSearchPage.insertBefore(timelineSearchInputDiv, timelineSearchPage.lastChild);
    timelineSearchPage.insertBefore(timelineSearchError, timelineSearchPage.lastChild);
}


// homeItem.addEventListener("click", goHome, false);
// timelineItem.addEventListener("click", timeTravel, false);
// collectionItem.addEventListener("click", goToCollections, false);
// aboutItem.addEventListener("click", getAbout, false);



console.log(config)

function closeUserPanel(){
    event.preventDefault();
    aboutModal.classList.add("hide");
    userAuthDiv.classList.add("hide");
    loginDiv.classList.add("hide");
    signupDiv.classList.add("hide");
    screenFade.classList.add("hide");

    if (current_page === "home") {
        console.log("home")
        homeItem.setAttribute("data-selected", "true")
    } else if (current_page === "timeline") {
        console.log("timeline")
        timelineItem.setAttribute("data-selected", "true")
    } else if (current_page === "collections") {
        console.log("collection")
        collectionItem.setAttribute("data-selected", "true")
    }

    if (userAuthDiv.classList.contains("hide")) {
        state.screenFade.class = screenFade.className;
        state.user.authDiv.class = userAuthDiv.className;
        state.user.loginDiv.class = loginDiv.className;
        window.history.pushState(state, null, "");
    } else {
        window.history.back();
    }
}

function openUserPanel(){
    event.preventDefault();
    let token = localStorage.FBIdToken;
    aboutModal.classList.add("hide");
    screenFade.classList.remove("hide");
    if(token){
        userAuthDiv.style.width = "300px";
        userAuthDiv.style.position = "relative";
        userAuthDiv.style.height = "100%"
        userAuthDiv.classList.remove("hide");
        logoutDiv.classList.remove("hide");
        if (vw < 600) {
            userAuthDiv.style.position = "";
            userAuthDiv.style.height = "50vh"
        }
    } else {
        userAuthDiv.classList.remove("hide");
        loginDiv.classList.remove("hide");
        signupDiv.classList.add("hide");
        logoutDiv.classList.add("hide");
    }

    // history state defined in nav handler
}

function loginHereFunc() {
    openUserPanel();

    state.user.authDiv.class = userAuthDiv.className;
    state.user.loginDiv.class = loginDiv.className;
    state.user.signupDiv.class = signupDiv.className;
    state.user.logoutDiv.class = logoutDiv.className;
    window.history.pushState(state, null, "");
}

function openSignupPanel(){
    loginDiv.classList.add("hide");
    signupDiv.classList.remove("hide");

    state.user.loginDiv.class = loginDiv.className;
    state.user.signupDiv.class = signupDiv.className;
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
            loginEmailLabel.innerText = errors.email
            loginEmailLabel.classList.add("color-red");
            loginEmail.placeholder = errors.email;
            loginEmail.classList.add("auth-error");
        }
        if (errors.password) {
            loginPasswordLabel.innerText = errors.password
            loginPasswordLabel.classList.add("color-red");
            loginPassword.placeholder = errors.password;
            loginPassword.classList.add("auth-error");
        }
    }

    else if (valid)
    axios.post(
        'https://us-central1-explorer-one-44263.cloudfunctions.net/api/login',
        {
            "email": loginData.email,
            "password": loginData.password,
        }
        )
        .then(function (response) {
            loader.classList.add("hide");
            screenFade.classList.add("hide");
            console.log(response.data);
            setAuthorizationHeader(response.data.token);
            updateCurrentUser(response.data.userDetails);
            appendUserDetails(response.data.userDetails);
            userAuthDiv.classList.add("hide");
            loginDiv.classList.add("hide");

            interactWithSearchResults();


            state.screenFade.class = screenFade.className;
            state.user.authDiv.class = userAuthDiv.className;
            state.user.loginDiv.class = loginDiv.className;
            window.history.pushState(state, null, "");
        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
            loginErrors.innerText = error.response.data.error;
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
            signupNameLabel.innerText = errors.name
            signupNameLabel.classList.add("color-red");
            signupName.placeholder = errors.name;
            signupName.classList.add("auth-error");
        }
        if (errors.email) {
            signupEmailLabel.innerText = errors.email
            signupEmailLabel.classList.add("color-red");
            signupEmail.placeholder = errors.email;
            signupEmail.classList.add("auth-error");
        }
        if (errors.password) {
            signupPasswordLabel.innerText = errors.password;
            signupPasswordLabel.classList.add("color-red");
            signupPassword.placeholder = errors.password;
            signupPassword.classList.add("auth-error");
        }
        if  (errors.confirmPassword) {
            signupConfirmPasswordLabel.innerText = errors.confirmPassword;
            signupConfirmPasswordLabel.classList.add("color-red");
            signupConfirmPassword.placeholder = errors.confirmPassword;
            signupConfirmPassword.classList.add("auth-error");
        }
    }

    else if (valid)
    axios.post(
        'https://us-central1-explorer-one-44263.cloudfunctions.net/api/signup',
        {
            name: signupData.name,
            email: signupData.email,
            password: signupData.password,
            confirmPassword: signupData.confirmPassword
        }
        )
        .then(function (response) {
            loader.classList.add("hide");
            screenFade.classList.add("hide");
            console.log(response.data);
            setAuthorizationHeader(response.data.token);
            updateCurrentUser(response.data.userDetails);
            appendUserDetails(response.data.userDetails);
            userAuthDiv.classList.add("hide");
            signupDiv.classList.add("hide");

            signupName.value = "";
            signupEmail.value = "";
            signupPassword.value = "";
            signupConfirmPassword.value = "";

            interactWithSearchResults();


            state.screenFade.class = screenFade.className;
            state.user.authDiv.class = userAuthDiv.className;
            state.user.signupDiv.class = signupDiv.className;
            window.history.pushState(state, null, "");
        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
            if (error.response.data.password) {
                signupErrors.innerText = error.response.data.password;
            }

            if (error.response.data.email) {
                signupErrors.innerText = error.response.data.email;
            }
            else {
                signupErrors.innerText = error.response.data.general;
            }
        })
}

function elementExists(element) {
    if (element){
        return true;
    }
    return false;
}


function appendTweets(results){

    const corsAllowed = document.querySelector(".cors-allowed");
    const corsDenied = document.querySelector(".cors-denied");

    if (elementExists(corsDenied) && !elementExists(corsAllowed)) {
        console.log("nay")
        imageError.classList.remove("hide");
    } else if (!elementExists(corsDenied) && elementExists(corsAllowed)) {
        imageError.classList.add("hide");
        console.log("yay")
    }

    for ( let i = 0; i < results.length ; i++ ) {
        let tweetResult = document.createElement("div");
        tweetResult.classList.add("tweet-result");

        let tweetUserImageDiv = document.createElement("div");
        tweetUserImageDiv.classList.add("tweet-user-image");

        let tweetUserImage = new Image();
        tweetUserImage.src = results[i].user.profile_image_url_https
        tweetUserImage.alt = "User Image"
        tweetUserImage.decoding = "sync"
        tweetUserImage.loading = "lazy"
        // tweetUserImageDiv.appendChild(tweetUserImage)

        if (elementExists(corsDenied) && !elementExists(corsAllowed)) {
            tweetUserImage.src = profileImage;
            tweetUserImageDiv.appendChild(tweetUserImage)
        } else if (!elementExists(corsDenied) && elementExists(corsAllowed)) {
            tweetUserImageDiv.appendChild(tweetUserImage)
        }

        let tweetBody = document.createElement("div");
        tweetBody.classList.add("tweet-body");

        let tweetNameDiv = document.createElement("div");
        tweetNameDiv.classList.add("tweet-name-div");
        let tweetName = document.createElement("p");
        tweetName.classList.add("tweet-name", "tw-name-item");
        tweetName.setAttribute("data-username",`${results[i].user.screen_name}`);
        tweetName.innerText = results[i].user.name;

        let tweetVerified = document.createElement("span");
        tweetVerified.classList.add("verified", "material-icons", "tw-name-item");
        tweetVerified.innerText = "verified";
        if (results[i].user.verified === false) {
            tweetVerified.classList.add("hide");
        }
        let tweetUserName = document.createElement("p");
        tweetUserName.classList.add("tweet-username", "tw-name-item", "mention")
        tweetUserName.innerText = `${results[i].user.screen_name}`;
        let tweetTime = document.createElement("p");
        tweetTime.classList.add("tweet-time", "tw-name-item");
        tweetTime.innerHTML = DOMPurify.sanitize(` &middot; ${dayjs(results[i].created_at).fromNow()}`);

        let nameCombo = tweetName.innerText + tweetUserName.innerText;
        let name = tweetName.innerText;
        let username = tweetUserName.innerText;

        if (vw < 600) {
            if (nameCombo.length > 20) {
                tweetUserName.innerText = text_truncate(name, 10)
                if ((tweetName.innerText + tweetUserName.innerText).length > 20) {
                    tweetUserName.innerText = text_truncate(username, 5)
                    if ((tweetName.innerText + tweetUserName.innerText).length > 20) {
                        tweetUserName.innerText = text_truncate(name, 0, "")
                        if ((tweetName.innerText + tweetUserName.innerText).length > 20) {
                            tweetName.innerText = text_truncate(name, 20)
                        }
                    }
                }
            }
        }

        tweetNameDiv.append(tweetName, tweetVerified, tweetUserName, tweetTime)



        let tweetText = document.createElement("p");
        tweetText.classList.add("tweet-text");
        if (typeof results[i].retweeted_status === "object") {
            tweetText.innerHTML = results[i].retweeted_status.full_text;
            tweetText.innerHTML = urlify(tweetText.innerHTML)
            tweetText.innerHTML = DOMPurify.sanitize(atlify(tweetText.innerHTML))
        } else {
            tweetText.innerHTML = results[i].full_text;
            tweetText.innerHTML = urlify(tweetText.innerHTML)
            tweetText.innerHTML = DOMPurify.sanitize(atlify(tweetText.innerHTML))
        }

        let tweetImageDiv = document.createElement("div");
        tweetImageDiv.classList.add("tweet-image");
        let tweetImage, tweetVideo, videoSource, videoError;


        if (results[i].extended_entities !== undefined) {
            if (results[i].extended_entities.media !== undefined) {
                if ( results[i].extended_entities.media[0].type === "video" || results[i].extended_entities.media[0].type === "animated_gif") {
                    
                    tweetVideo = document.createElement("video");
                    tweetVideo.controls = "controls";
                    videoSource = document.createElement("source");

                    // if (results[i].extended_entities.media[0].type === "animated_gif") {
                    //     tweetVideo.setAttribute("playsinline", true);
                    //     tweetVideo.setAttribute("autoplay", true);
                    //     tweetVideo.setAttribute("loop", true)
                    // }
                    
                    let variants = results[i].extended_entities.media[0].video_info.variants;

                    for (let i = 0; i < variants.length; i++){
                        if (variants[i].content_type === "video/mp4") {
                            videoSource.type = variants[i].content_type;
                            videoSource.src = variants[i].url;
                            break;
                        }
                    }
                
                    tweetVideo.append(videoSource);
                    videoError = document.createElement("p");
                    videoError.innerText = "Sorry, your browser doesn't support embedded videos."
                    tweetVideo.append("videoError");

                    if (elementExists(corsDenied) && !elementExists(corsAllowed)) {
                        console.log("do nothing");
                    } else if (!elementExists(corsDenied) && elementExists(corsAllowed)) {
                        tweetImageDiv.append(tweetVideo);
                    }
                    // tweetImageDiv.append(tweetVideo);
                } else if (results[i].extended_entities.media[0].type === "photo") {
                    tweetImage = document.createElement("img");
                    tweetImage.src = results[i].extended_entities.media[0].media_url_https;
                    tweetImage.alt = "Tweet Media"

                    if (elementExists(corsDenied) && !elementExists(corsAllowed)) {
                        console.log("do nothing");
                    } else if (!elementExists(corsDenied) && elementExists(corsAllowed)) {
                        tweetImageDiv.append(tweetImage);
                    }

                    // tweetImageDiv.append(tweetImage);
                }
            } 
        }

        function appendCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        let tweetFooterDiv = document.createElement("div");

        let tweetFooter = document.createElement("div");
        tweetFooter.classList.add("tweet-footer");

        let tweetMetrics = document.createElement("div");
        tweetMetrics.classList.add("tweet-metrics");

        let tweetRetweetIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tweetRetweetIcon.classList.add("tweet-icon");
        tweetRetweetIcon.innerHTML = DOMPurify.sanitize(`<path xmlns="http://www.w3.org/2000/svg" d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>`);
        tweetRetweetIcon.setAttribute("viewBox", "0 0 24 24");
        let tweetRetweets = document.createElement("p");
        tweetRetweets.innerText = `${results[i].retweet_count} `;
        tweetRetweets.innerText = appendCommas(tweetRetweets.innerText);
        

        let tweetLikesIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tweetLikesIcon.classList.add("tweet-icon");
        tweetLikesIcon.innerHTML = `<path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>`;
        tweetLikesIcon.setAttribute("viewBox", "0 0 24 24");
        let tweetLikes = document.createElement("p");
        tweetLikes.innerText = `${results[i].favorite_count} `;
        tweetLikes.innerText = appendCommas(tweetLikes.innerText);
        tweetMetrics.append(tweetRetweetIcon, tweetRetweets, tweetLikesIcon, tweetLikes);



        let saveToCollection = document.createElement("div");
        saveToCollection.setAttribute("data-tweetId", `${results[i].id_str}`);
        saveToCollection.classList.add("save-to-collection");

        let saveSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        saveSvg.classList.add("save-to-svg");
        saveSvg.setAttribute("viewBox", "0 0 24 24");
        saveSvg.innerHTML = DOMPurify.sanitize(`<path d="M0 0h24v24H0z" fill="none"></path><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path>`);

        let saveSvgText = document.createElement("p");
        saveSvgText.classList.add("save-to-text");
        saveSvgText.innerText = "Save to collection"

        saveToCollection.append(saveSvg, saveSvgText);

        let currentUser = localStorage.currentUser;
        if (currentUser !== undefined) {
            let userFavorites = (JSON.parse(currentUser)).favorites
            if (userFavorites.includes(results[i].id_str)) {
                saveSvg.style.fill = "green";
                saveSvg.innerHTML = DOMPurify.sanitize(`<path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>`);
                saveSvgText.style.color = "green";
                saveSvgText.innerText = "Saved to your collections";
            }
        }



        let removeFromCollection = document.createElement("div");
        removeFromCollection.setAttribute("data-tweetId", `${results[i].id_str}`);
        removeFromCollection.classList.add("remove-from-collection", "hide");

        let removeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        removeSvg.setAttribute("viewBox", "0 0 24 24");
        removeSvg.innerHTML = DOMPurify.sanitize(`<path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>`);

        let removeSvgText = document.createElement("p");
        removeSvgText.innerText = "remove from collection"

        removeFromCollection.append(removeSvg, removeSvgText);



        // TODO: create modal for tweet being replied to
        // let replyingTo = document.createElement("p");
        // replyingTo.classList.add("replying-to");
        // replyingTo.innerText = `Replying to ${results[i].in_reply_to_screen_name}`;
        // replyingTo.setAttribute("data-tweetid", `${results[i].id_str}`);


        tweetFooter.append(tweetMetrics, saveToCollection, removeFromCollection);
        tweetFooterDiv.append(tweetFooter);
        // if (results[i].in_reply_to_status_id_str !== null) {
        //     tweetFooterDiv.append(replyingTo);
        // }
        tweetBody.append(tweetNameDiv, tweetText, tweetImageDiv, tweetFooterDiv);
        tweetResult.append(tweetUserImageDiv,tweetBody)

        tweetResultsDiv.append(tweetResult)
    }
}


function mainSearch(){
    centerContainer.style.overflowY = "auto";
    current_page = "home"
    tweetResultsDiv.innerHTML = DOMPurify.sanitize("");
    loader.classList.remove("hide");

    if (homeSearchPage.classList.contains("hide")) {
        searchResults.append(loader);
    } else {
        mainSearchButton.append(loader);
    }

    let lang;
    let tweetType;

    for (let i = 0; i < languageChoice.length; i++) {
        if (languageChoice[i].checked) {
            lang = languageChoice[i].value
            console.log(lang);
        }
    }

    for (let i = 0; i < tweetTypeChoice.length; i++) {
        if (tweetTypeChoice[i].checked) {
            tweetType = tweetTypeChoice[i].value
            console.log(tweetType);
        }
    }

    let searchData = {
        query: mainSearchInput.value,
        result_type: tweetType,
        language: lang
    }

    if (searchData.query.trim() === "") {
        loader.classList.add("hide");
        mainSearchError.innerText = "Please give me something to search for"
        mainSearchError.classList.add("error");
    }
    else if (searchData.query.trim() !== "")
    axios.post(
        'https://us-central1-explorer-one-44263.cloudfunctions.net/api/search',
        {
            query: searchData.query,
            result_type: searchData.result_type,
            language: searchData.language
        }
        )
        .then(function (response) {
            homePush = false;
            loader.classList.add("hide");
            console.log(response.data.results);
            let results = response.data.results;
            homeSearchPage.classList.add("hide");

            searchResults.classList.remove("hide")

            searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
            searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);

            tweetResultsDiv.innerHTML = DOMPurify.sanitize("");

            if (!Array.isArray(results) || !results.length) {
                tweetResultsDiv.innerHTML = DOMPurify.sanitize(`<p class="tweet-results-div-error">There are no results for <span class= color-blue>${searchData.query}</span>. Maybe try another keyword or choose a different language or tweet type</p>`)
            } else
            appendTweets(results);
            interactWithSearchResults();


            state.search.keyword.home = mainSearchInput.value;
            state.search.tweetsDiv = DOMPurify.sanitize(tweetResultsDiv.innerHTML);
            state.home.class = homeSearchPage.className;
            state.search.searchPage = searchResults.className;

            state.search.choice.lang.en = en.checked;
            state.search.choice.lang.fr = fr.checked;
            state.search.choice.lang.de = de.checked;
            state.search.choice.lang.es = es.checked;
            state.search.choice.lang.pt = pt.checked;
            state.search.choice.lang.zh = zh.checked;
            state.search.choice.type.recent = recent.checked;
            state.search.choice.type.popular = popular.checked;
            state.search.choice.type.mixed = mixed.checked;

            window.history.pushState(state, null, "");


        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
        })
}


function timelineSearch(userName){
    centerContainer.style.overflowY = "auto";
    current_page = "timeline";
    loader.classList.remove("hide");
    tweetResultsDiv.innerHTML = DOMPurify.sanitize("");

    if (timelineSearchPage.classList.contains("hide")) {
        searchResults.append(loader);
    } else {
        timelineSearchButton.append(loader);
    }

    userName = timelineSearchInput.value;

    if (userName.trim() === "") {
        loader.classList.add("hide");
        timelineSearchError.innerText = "Please enter a twitter user name"
        timelineSearchError.classList.add("error");
    }
    else if (userName.trim() !== "")
    axios.post(
        'https://us-central1-explorer-one-44263.cloudfunctions.net/api/timetravel',
        {
            screen_name: userName
        }
        )
        .then(function (response) {
            loader.classList.add("hide");
            console.log(response.data.results);
            let results = response.data.results;
            timelineSearchPage.classList.add("hide");

            searchResults.classList.remove("hide")
            searchResults.insertBefore(timelineSearchInputDiv, searchResults.firstChild);

            tweetResultsDiv.innerHTML = DOMPurify.sanitize("");

           // TODO: HANDLE PROTECTED USER ERROR AND 
            console.log(results)
            if (!Array.isArray(results) || !results.length) {
                tweetResultsDiv.innerHTML = DOMPurify.sanitize(`<p class="tweet-results-div-error">There are no results for <span class= color-blue>${userName}</span>. Maybe try the search on the <span class="home-link color-blue">homepage</span><p>`);
            } else
            appendTweets(results);
            interactWithSearchResults();


            state.search.keyword.timeline = timelineSearchInput.value;
            state.search.tweetsDiv = DOMPurify.sanitize(tweetResultsDiv.innerHTML);
            state.timeline.class = timelineSearchPage.className;
            state.search.searchPage = searchResults.className;
            window.history.pushState(state, null, "");

        })
        .catch(function (error) {
            timelineSearchError.classList.add("error");
            loader.classList.add("hide");
            console.log(error.response.data);
            let errorCode = error.response.data;

            if (Object.keys(errorCode.err).length === 0 && errorCode.err.constructor === Object) {
                timelineSearchError.innerHTML = DOMPurify.sanitize(`<span class= color-blue>${userName}'s</span> tweets are protected. The account cound be private or suspended.`)
                tweetResultsDiv.innerHTML = DOMPurify.sanitize(`<span class= color-blue>${userName}'s</span> tweets are protected. The account cound be private or suspended.`)


                state.search.keyword.timeline = timelineSearchInput.value;
                state.search.tweetsDiv = DOMPurify.sanitize(tweetResultsDiv.innerHTML);
                state.timeline.class = timelineSearchPage.className;
                state.search.searchPage = searchResults.className;
                window.history.pushState(state, null, "");
            }
            console.log(typeof (errorCode.err[0].code))
            if(errorCode.err[0].code === 34) {
                timelineSearchError.innerHTML = `Seems like there is no user with this user name, please check and try again.`
                tweetResultsDiv.innerHTML = `Seems like there is no user with this user name, please check and try again.`


                state.search.keyword.timeline = timelineSearchInput.value;
                state.search.tweetsDiv = DOMPurify.sanitize(tweetResultsDiv.innerHTML);
                state.timeline.class = timelineSearchPage.className;
                state.search.searchPage = searchResults.className;
                window.history.pushState(state, null, "");
            }
        })
}


function retrieveCollectionTweets(event){
    console.log("heyyyyy")

    emptyCollection.innerHTML = DOMPurify.sanitize("");
    emptyCollection.classList.add("hide");
    let collectionName = event.currentTarget.innerText.trim();

    axiosRetrieveTweets(collectionName)
    event.target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


function axiosRetrieveTweets(collection){
    console.log(collection)
    axios.post(
        'https://us-central1-explorer-one-44263.cloudfunctions.net/api/collection',
        {
            collectionName: (collection)
        },
        config
        )
        .then(function (response) {
            loader.classList.add("hide");
            console.log(response.data.results);
            let results = response.data.results;
            // homeSearchPage.classList.add("hide");

            tweetResultsDiv.innerHTML = DOMPurify.sanitize("");


            if (homeSearchPage.classList.contains("hide") && timelineSearchPage.classList.contains("hide"))
            
            searchResults.classList.remove("hide")
            appendTweets(results);
            let saveTweet = document.querySelectorAll(".save-to-collection");
            let removeTweet = document.querySelectorAll(".remove-from-collection");

            saveTweet.forEach((btn) => {
                btn.classList.add("hide");
            })
            
            removeTweet.forEach((btn) => {
                btn.classList.remove("hide");
                btn.setAttribute("data-collection-name", collection);
            })
        
            if (tweetResultsDiv.innerHTML === DOMPurify.sanitize("")) {
                emptyCollection.classList.remove("hide");
                emptyCollection.innerHTML = DOMPurify.sanitize(`<span class="color-blue">${collection}</span> currently has no saved tweets`);
                emptyCollection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            } else {
                searchResults.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }

            interactWithSearchResults();
        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
        })
}

let currentTweetId;
function interactWithSearchResults(){

     // TODO: add modal popup for clicked images
    
    let allImages = document.querySelectorAll(".tweet-image img");

    allImages.forEach((img) => {
        img.addEventListener("click", function(){
            console.log(img)
            // img.style.objectFit = "contain"
            mediaModal.classList.remove("hide");
            screenFade.classList.remove("hide");
            mediaModal.style.transform = "translateY(0px)"
            mediaModal.style.visibility = "visible";
            centerContainer.style.overflowY = "hidden";
            console.log(img.src);
            mediaModal.style.backgroundImage = `url(${img.src})`;

            state.media.bg_img = `url(${img.src})`;
            state.screenFade.class = screenFade.className;
            state.media.class = mediaModal.className;
            // window.history.pushState(state, null, "");
        }, false)
    })

    function isInViewport(element) {

        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    let allVideos = document.querySelectorAll("video");
    allVideos.forEach((video) => {
        video.addEventListener("play", function(event){
            let nowPlaying = event.currentTarget;
            allVideos.forEach((vid) => {
                if (vid.paused === false && vid !== nowPlaying) {
                    vid.pause();
                }
            })
        })

        centerContainer.addEventListener("scroll", function(){
            if (!isInViewport(video)) {
                video.pause();
            }
        }, false)
    })


    
    // save tweet to colection

    let collectionItemToBeSavedTo = document.querySelectorAll(".save-to-collection-item");
    let tweetBtn = document.querySelectorAll(".save-to-collection");
    tweetBtn.forEach((tweet) => {
        tweet.addEventListener("click", function(){
            saveToCollectionModal.classList.remove("hide");
            screenFade.classList.remove("hide");

            let currentTweet = event.currentTarget;
            getTweetId(currentTweet);
            let tweetId = currentTweet.tweetId;
            console.log(tweetId)
            currentTweetId = tweetId;
            console.log("currentTweetId", currentTweetId);

            collectionItemToBeSavedTo.forEach((collection) => {
                collection.setAttribute("data-tweetId", tweetId);
            })

            state.savetocol.class = saveToCollectionModal.className;
            // window.history.pushState(state, null, "");
        }, false)
    })


    collectionItemToBeSavedTo.forEach((collection)=> {
        collection.addEventListener("click", saveTweetToCollection, true);
    })



    // delete tweet from collection
    let deleteTweetBtn = document.querySelector(".remove-prompt-delete");
    let removeFromCollectionBtn = document.querySelectorAll(".remove-from-collection");
    removeFromCollectionBtn.forEach((btn) => {
        btn.addEventListener("click", function(){
            removeFromCollectionModal.classList.remove("hide");

            let currentTweet = event.currentTarget;
            getTweetId(currentTweet);
            let tweetId = currentTweet.tweetId;

            getCollectionName(currentTweet);
            let collectionName = currentTweet.collectionName

            console.log(tweetId);
            console.log(collectionName);

            deleteTweetBtn.setAttribute("data-tweetId", tweetId);
            deleteTweetBtn.setAttribute("data-collection-name", collectionName);

            state.savetocol.class = saveToCollectionModal.className;
            history.pushState(state, null, "");

        }, false)
    })


    let closeRemoveFromCollectionModal = document.querySelectorAll(".remove-from-collection-close");
    closeRemoveFromCollectionModal.forEach((close) => {
        close.addEventListener("click", function(){
            removeFromCollectionModal.classList.add("hide");

            state.savetocol.class = saveToCollectionModal.className;
            window.back();
        }, false)
    })


    deleteTweetBtn.addEventListener("click", deleteTweetFromCollection, false);


    let mentions = document.querySelectorAll(".mention");

    mentions.forEach((mention) => {
        mention.addEventListener("click", function(){
            // timelineSearchPage.innerText = searchResults.innerText; 
            timelineSearchPage.classList.add("hide")
            timelineItem.click();
            timelineSearchInput.value = DOMPurify.sanitize(mention.innerHTML);
            timelineSearchButton.click();
        })
    })

    let userNames = document.querySelectorAll(".tweet-name");
    userNames.forEach((name) => {
        let username = name.getAttribute("data-username");
        name.addEventListener("click", function(){
            timelineItem.click();
            timelineSearchInput.value = username;
            timelineSearchButton.click();
        }, false)

    })

    let homeLink = document.querySelectorAll(".home-link");
    homeLink.forEach((btn) => {
        btn.addEventListener("click", function(){
            homeItem.click();
        }, false)
    })
}


function deleteTweetFromCollection(){
    let currentTweet = event.currentTarget;

    currentTweet.append(loader)
    loader.classList.remove("hide");

    getTweetId(currentTweet);
    let tweetId = currentTweet.tweetId;
    getCollectionName(currentTweet);
    let collectionName = currentTweet.collectionName;

    console.log(tweetId, collectionName);


    axios.post(
        `https://us-central1-explorer-one-44263.cloudfunctions.net/api/deletefavorite/${tweetId}`,
        {
            collectionName: collectionName
        },
        config
        )
        .then(function (response) {
            //TODO success function and error functions
            loader.classList.add("hide");
            removeFromCollectionModal.classList.add("hide");
            console.log(response.data)
            
            axiosRetrieveTweets(collectionName);

            interactWithSearchResults();

            currentTweet.removeAttribute("data-collection-name");
            currentTweet.removeAttribute("data-tweetid");

        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);

        })
}


function saveTweetToCollection(){
    // interactWithSearchResults();
    // console.log("currentTweetId", currentTweetId);
    // let currentTweet = event.currentTarget;
    // getTweetId(currentTweet);
    // let tweetId = currentTweet.tweetId;
    let tweetId = currentTweetId;
    let collectionName = event.currentTarget.innerText.trim();
    let collection = event.currentTarget;
    collection.append(loader)
    loader.classList.remove("hide");
    console.log(collection)

    axios.post(
        `https://us-central1-explorer-one-44263.cloudfunctions.net/api/addfavorite/${tweetId}`,
        {
            collectionName: collectionName
        },
        config
        )
        .then(function (response) {
            //TODO success function
            loader.classList.add("hide");
            saveToCollectionModal.classList.add("hide");
            screenFade.classList.add("hide");
            console.log(response.data)

            let SaveToColBtns = document.querySelectorAll(".save-to-collection");
            SaveToColBtns.forEach((btn) => {
                if(btn.getAttribute("data-tweetId") === tweetId) {
                    btn.style.color = "green";
                    btn.childNodes[0].style.fill = "green";
                    btn.childNodes[0].innerHTML = DOMPurify.sanitize(`<path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>`);
                    btn.childNodes[1].innerText = `Saved to ${collectionName}`
                }
            })

            updateCurrentUser(response.data.userDetails)
            appendUserDetails(response.data.userDetails);

            interactWithSearchResults();


        state.savetocol.class = saveToCollectionModal.className;
        state.screenFade.class = screenFade.className;
        window.history.pushState(state, null, "");

        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);

        })
    
}

function getTweetId(element){
    return element.tweetId = element.getAttribute("data-tweetId");
}

function getCollectionName(element){
    return element.collectionName = element.getAttribute("data-collection-name");
}


console.log(config)

function appendCollections(){

    let allCollectionItems = document.querySelectorAll(".collection-item");

    // check to see if collection list is populated
    if (!(!Array.isArray(allCollectionItems) || !allCollectionItems.length)) {
        allCollectionItems[0].setAttribute("data-selected", "true");
    }
    
    allCollectionItems.forEach((collection) => {

        collection.addEventListener("click", function(){
            loader.classList.remove("hide");
            collection.append(loader)
            allCollectionItems.forEach((otherCollections) => {
                otherCollections.setAttribute("data-selected", "false")
            })
            collection.setAttribute("data-selected", "true");
        }, false)

        collection.addEventListener("click", retrieveCollectionTweets, false);
    })
}


function openCreateCollectionDiv(){
    createCollectionCta.classList.add("hide");
    createCollectionInputDiv.classList.remove("hide");
}

function closeCreateCollectionDiv(){
    createCollectionInput.value = ""
    createCollectionError.innerText = "";
    createCollectionFromModalError.innerText = "";
    createCollectionCta.classList.remove("hide");
    createCollectionInputDiv.classList.add("hide");
}

function createNewCollection(){
    // createCollectionBtn.append(loader);
    loader.classList.remove("hide");
    checkTokenStatus()

    if (collectionPage.classList.contains("hide")) {
        createCollectionFromModal.append(loader);
    } else {
        createCollectionBtn.append(loader);
    }


    if (token === null || token === undefined) {
        loader.classList.add("hide");
        createCollectionError.innerText = "You need to be logged in to use this feature. Please login or create an account to continue."
        return;
    }


    if (createCollectionInput.value.trim() === "") {
        createCollectionError.classList.remove("hide");
        createCollectionError.innerText = "Please enter a name for your new collection";
        createCollectionFromModalError.innerText = "Please enter a name for your new collection";
        loader.classList.add("hide");
        return;
    }

    axios.post(
        'https://us-central1-explorer-one-44263.cloudfunctions.net/api/collection/create',
        {
            collectionName: createCollectionInput.value
        },
        config
        )
        .then(function (response) {
            createCollectionInput.value = "";
            createCollectionFromModalInput.value = "";
            loader.classList.add("hide");
            createCollectionCta.classList.remove("hide");
            createCollectionInputDiv.classList.add("hide");

            // createCollectionFromModal.classList.add("hide");
            
            updateCurrentUser(response.data.userDetails)
            appendUserDetails(response.data.userDetails);


            interactWithSearchResults();

            // TODO: add modal popup for clicked images

        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
            createCollectionError.classList.remove("hide");
            createCollectionFromModalError.classList.remove("hide");

            createCollectionError.innerText = error.response.data.error;
            createCollectionFromModalError.innerText = error.response.data.error;
            if (error.response.data.error === "Unauthorized")
            createCollectionError.innerText = "You need to be logged in to use this feature. Please login or create an account to continue."
        })
}

// Nav Event Listeners
userProfilePanel.addEventListener("click", openUserPanel, false);
closeBtn.forEach((btn) => {
    btn.addEventListener("click", closeUserPanel, false);
})
signupHere.addEventListener("click", openSignupPanel, false);
loginHere.addEventListener("click", loginHereFunc, false);

// Auth Event Listeners
loginBtn.addEventListener("click", login, false);
signupBtn.addEventListener("click", signup, false);
logoutBtn.addEventListener("click", logout, false);


// Data event listeners
mainSearchButton.addEventListener("click", mainSearch, false);
mainSearchInput.addEventListener("keydown", function(){
    mainSearchError.innerText = "";
}, false)
timelineSearchButton.addEventListener("click", timelineSearch, false);
timelineSearchInput.addEventListener("keydown", function(){
    timelineSearchError.innerText = "";
}, false)

createCollectionCta.addEventListener("click", openCreateCollectionDiv, false);
createCollectionInputClose.addEventListener("click", closeCreateCollectionDiv, false);
createCollectionBtn.addEventListener("click", createNewCollection, false);
createCollectionInput.addEventListener("keyup", function(event){
    if (event.keyCode !== 13) {
        createCollectionError.innerText = "";
    }
}, false)

createCollectionFromModalInput.addEventListener("keyup", function(event){
    if (event.keyCode !== 13) {
        createCollectionFromModalError.innerText = "";
    }
}, false)



// Close modals
closeSessionExpiredModal.addEventListener("click", logout, false);
screenFade.addEventListener("click", function(){
    if (!(sessionExpiredModal.classList.contains("hide"))) {
        logout();
    }
    if (!(saveToCollectionModal.classList.contains("hide"))) {
        saveToCollectionModal.classList.add("hide")
        screenFade.classList.add("hide");
    }
    modals.forEach((modal) => {
        if(!(modal.classList.contains("hide"))){
            modal.classList.add("hide")
            screenFade.classList.add("hide");
        }
    })

    if (current_page === "home") {
        console.log("home")
        homeItem.setAttribute("data-selected", true)
    } else if (current_page === "timeline") {
        console.log("timeline")
        timelineItem.setAttribute("data-selected", true)
    } else if (current_page === "collection") {
        console.log("collection")
        collectionItem.setAttribute("data-selected", true)
    }
    
    // state.media.bg_img = `url(${img.src})`;

    centerContainer.style.overflowY = "auto";
    state.screenFade.class = screenFade.className;
    state.media.class = mediaModal.className;
    // window.history.back();
}, false)
closeSaveToCollectionModal.addEventListener("click", function(){
    saveToCollectionModal.classList.add("hide")
        screenFade.classList.add("hide");

        createCollectionFromModalError.innerText = "";
        createCollectionFromModalInput.value = "";
        createCollectionError.innerText = "";

        state.savetocol.class = saveToCollectionModal.className;
        // window.history.back();
        // window.history.pushState(state, null, "");

}, false)

closeMediaModal.addEventListener("click", function(){
    console.log("hey")
    mediaModal.classList.add("hide")
    screenFade.classList.add("hide");
    centerContainer.style.overflowY = "auto";

    state.media.class = mediaModal.className;
    state.screenFade.class = mediaModal.className;

    // window.history.back();
}, false)

aboutModalClose.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("yayayayayayay");
    console.log(current_page)

    aboutModal.classList.add("hide")
    screenFade.classList.add("hide");
    aboutItem.setAttribute("data-selected", "false")

    if (current_page === "home") {
        console.log("home")
        homeItem.setAttribute("data-selected", "true")
    } else if (current_page === "timeline") {
        console.log("timeline")
        timelineItem.setAttribute("data-selected", "true")
    } else if (current_page === "collections") {
        console.log("collection")
        collectionItem.setAttribute("data-selected", "true")
    }

    // state.about.class = aboutModal.className;
}, false)



window.onpopstate = function (event) {
    if (event.state) { state = event.state; }
    render(state);
};





function urlify(text) {
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    // return text.replace(urlRegex, function(url) {
    //   return '<a href="' + url + '">' + url + '</a>';
    // })
    // or alternatively
    return text.replace(urlRegex, '<a target="_blank" href="$1">$1</a>')
  }




function atlify(text) {
    let atRegex = /(@[^\s]+)/g;
    return text.replace(atRegex, '<span class="mention">$1</span>')
}

function text_truncate (str, length, ending) {
    if (length == null) {
    length = 100;
    }
    if (ending == null) {
    ending = '...';
    }
    if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
    } else {
    return str;
    }
};



// searchResults.innerHTML = DOMPurify.sanitize(atlify(searchResults.innerHTML));




// let mentions = document.querySelectorAll(".mention");

// mentions.forEach((mention) => {
//     mention.addEventListener("click", function(){
//         // timelineSearchPage.innerHTML = searchResults.innerHTML; 
//         timelineSearchPage.classList.add("hide")
//         timelineItem.click();
//         timelineSearchInput.value = mention.innerHTML;
//         timelineSearchButton.click();
//         setTimeout(timelineSearchPage.classList.remove("hide"), 50000)
//         console.log(mention.innerHTML)
//     })
// })





document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            if (!(mediaModal.classList.contains("hide"))) {

                // screenFade.classList.add("hide");
                // mediaModal.classList.add("hide");


                // mediaModal.style.transform = "translateY(-300px)"
                // mediaModal.style.visibility = "hidden";
                // screenFade.classList.add("hide");
                // centerContainer.style.overflowY = "auto";

                // state.screenFade.class = screenFade.className;
                // state.media.class = mediaModal.className;
            }
            /* up swipe */ 
        } else { 
            if (!(mediaModal.classList.contains("hide"))) {

                // screenFade.classList.add("hide");
                // mediaModal.classList.add("hide");

                // mediaModal.style.transform = "translateY(300px)"
                // mediaModal.style.visibility = "hidden";
                // screenFade.classList.add("hide");
                // centerContainer.style.overflowY = "auto";
                // state.screenFade.class = screenFade.className;
                // state.media.class = mediaModal.className;
            }
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
