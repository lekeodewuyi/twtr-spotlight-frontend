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

const collectionPage = document.querySelector(".collections-page");
const collectionPageHeader = document.querySelector(".collections-page-header");
const createCollectionCta = document.querySelector(".create-collection-cta");
const createCollectionInputDiv = document.querySelector(".create-collection-input-div");
const createCollectionInput = document.querySelector(".create-collection-input");
const createCollectionBtn = document.querySelector("#create-collection-btn");
const createCollectionInputClose = document.querySelector(".create-collection-close")
const createCollectionError = document.querySelector(".create-collection-error");

const collectionCounter = document.querySelector(".collection-count");
const collectionList = document.querySelector(".collections-list");
const emptyCollection = document.querySelector(".empty-collection");


//Save to collection
const saveToCollectionModal = document.querySelector(".save-to-collection-prompt");
const saveToCollectionItemDiv = document.querySelector(".save-to-collection-item-div");






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

    let userCollections = user.collections;
    let userCollectionCount = user.collectionCount;

    collectionList.innerHTML = "";
    saveToCollectionItemDiv.innerHTML = "";
    if (!(!Array.isArray(userCollections) || !userCollections.length)) {
        for (let i = 0; i < userCollections.length; i++) {

            let collectionItemParagraph = document.createElement("p");
            collectionItemParagraph.innerHTML = userCollections[i];

            let collectionItem = document.createElement("div");
            collectionItem.classList.add("collection-item");
            collectionItem.append(collectionItemParagraph);

            collectionList.append(collectionItem);


            let saveToCollectionItem = document.createElement("p");
            saveToCollectionItem.classList.add("save-to-collection-item");
            saveToCollectionItem.innerHTML = userCollections[i];
            saveToCollectionItemDiv.append(saveToCollectionItem)
            saveToCollectionModal.append(saveToCollectionItemDiv);
        }

        if (userCollectionCount === 1) {
            collectionCounter.innerHTML = `You currently have ${userCollectionCount} collection`
        } else if (userCollectionCount > 1) {
            collectionCounter.innerHTML = `You currently have ${userCollectionCount} collections`
        }
    } else {
        collectionCounter.innerHTML = `You haven't created any collections, click the create collection button to get started`
    }

    appendCollections()
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
        search: "",
        tweets: "",
        tweetId: ""

    }
}

// Render state function whenever popstate is fired
let config;
function checkTokenStatus(){
    let token = localStorage.FBIdToken;
    if(token) {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken.exp * 1000);
        console.log(Date.now())
        if(decodedToken.exp * 1000 < Date.now()){ //if TOKEN is expired
            console.log("token has expired")

            // TODO: Session expired modal to initiate logout
            // sessionExpiredModal.classList.remove("hide");
        } else {
            config = {
                headers: { Authorization: `${token}` }
            };
        }
    }
}


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
        } else {
            config = {
                headers: { Authorization: `${token}` }
              };
        }
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
    tweetResultsDiv.innerHTML = state.result.tweets;
    mainSearchInput.value = state.result.search;

    


    if (!(homeSearchPage.classList.contains("hide"))) {
        homeSearchPage.append(mainSearchButton);
        homeSearchPage.insertBefore(mainSearchInputDiv, homeSearchPage.lastChild);
        homeSearchPage.append(searchChoicesDiv)
    }

    if (!(searchResults.classList.contains("hide"))) {
        searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
        searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);
    }

    interactWithSearchResults();
}

// Initialize initial state on load
(function initialize() {
    window.history.replaceState(state, null, "");
    render(state);
})();

console.log(config)

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


function appendTweets(results){
    for ( let i = 0; i < results.length ; i++ ) {
        let tweetResult = document.createElement("div");
        tweetResult.classList.add("tweet-result");

        let tweetUserImageDiv = document.createElement("div");
        tweetUserImageDiv.classList.add("tweet-user-image");

        let tweetUserImage = document.createElement("img");
        tweetUserImage.src = results[i].user.profile_image_url
        tweetUserImage.alt = "User Image"
        tweetUserImageDiv.append(tweetUserImage);

        let tweetBody = document.createElement("div");
        tweetBody.classList.add("tweet-body");

        let tweetNameDiv = document.createElement("div");
        tweetNameDiv.classList.add("tweet-name-div");
        let tweetName = document.createElement("p");
        tweetName.classList.add("tweet-name", "tw-name-item");
        tweetName.innerHTML = results[i].user.name;
        let tweetVerified = document.createElement("span");
        tweetVerified.classList.add("verified", "material-icons", "tw-name-item");
        tweetVerified.innerHTML = "verified";
        if (results[i].user.verified === false) {
            tweetVerified.classList.add("hide");
        }
        let tweetUserName = document.createElement("p");
        tweetUserName.classList.add("tweet-username", "tw-name-item")
        tweetUserName.innerHTML = `${results[i].user.screen_name} &middot; `;
        let tweetTime = document.createElement("p");
        tweetTime.classList.add("tweet-time", "tw-name-item");
        tweetTime.innerHTML = dayjs(results[i].created_at).format('MMM DD YYYY - (h:mm a)');
        tweetNameDiv.append(tweetName, tweetVerified, tweetUserName, tweetTime)


        let tweetText = document.createElement("p");
        tweetText.classList.add("tweet-text");
        if (typeof results[i].retweeted_status === "object") {
            tweetText.innerHTML = results[i].retweeted_status.full_text;
        } else {
            tweetText.innerHTML = results[i].full_text;
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
                    videoError.innerHTML = "Sorry, your browser doesn't support embedded videos."
                    tweetVideo.append("videoError");
                    tweetImageDiv.append(tweetVideo);
                } else if (results[i].extended_entities.media[0].type === "photo") {
                    tweetImage = document.createElement("img");
                    tweetImage.src = results[i].extended_entities.media[0].media_url_https;
                    tweetImage.alt = "Tweet Media"
                    tweetImageDiv.append(tweetImage);
                }
            } 
        }

        let tweetFooterDiv = document.createElement("div");

        let tweetFooter = document.createElement("div");
        tweetFooter.classList.add("tweet-footer");

        let tweetMetrics = document.createElement("div");
        tweetMetrics.classList.add("tweet-metrics");
        let tweetRetweets = document.createElement("p");
        tweetRetweets.innerHTML = `${results[i].retweet_count} retweets `;
        let tweetLikes = document.createElement("p");
        tweetLikes.innerHTML = `${results[i].retweet_count} likes `;
        tweetMetrics.append(tweetRetweets, tweetLikes);



        let saveToCollection = document.createElement("div");
        saveToCollection.setAttribute("data-tweetId", `${results[i].id_str}`);
        saveToCollection.classList.add("save-to-collection");

        let saveSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        saveSvg.setAttribute("viewBox", "0 0 24 24");
        saveSvg.innerHTML = `<path d="M0 0h24v24H0z" fill="none"></path><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path>`

        let saveSvgText = document.createElement("p");
        saveSvgText.innerHTML = "Save to collection"

        saveToCollection.append(saveSvg, saveSvgText);




        let removeFromCollection = document.createElement("div");
        removeFromCollection.setAttribute("data-tweetId", `${results[i].id_str}`);
        removeFromCollection.classList.add("remove-from-collection", "hide");

        let removeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        removeSvg.setAttribute("viewBox", "0 0 24 24");
        removeSvg.innerHTML = `<path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>`

        let removeSvgText = document.createElement("p");
        removeSvgText.innerHTML = "remove from collection"

        removeFromCollection.append(removeSvg, removeSvgText);



        let replyingTo = document.createElement("p");
        replyingTo.classList.add("replying-to");
        replyingTo.innerHTML = `Replying to ${results[i].in_reply_to_screen_name}`


        tweetFooter.append(tweetMetrics, saveToCollection, removeFromCollection);
        tweetFooterDiv.append(tweetFooter);
        if (results[i].in_reply_to_status_id_str !== null) {
            tweetFooterDiv.append(replyingTo);
        }
        tweetBody.append(tweetNameDiv, tweetText, tweetImageDiv, tweetFooterDiv);
        tweetResult.append(tweetUserImageDiv,tweetBody)

        tweetResultsDiv.append(tweetResult)
    }
}


function mainSearch(){
    mainSearchButton.append(loader);
    loader.classList.remove("hide");

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
        mainSearchError.innerHTML = "Please give me something to search for"
        mainSearchError.classList.add("error");
    }
    else if (searchData.query.trim() !== "")
    axios.post(
        'http://localhost:5000/explorer-one-44263/us-central1/api/search',
        {
            query: searchData.query,
            result_type: searchData.result_type,
            language: searchData.language
        }
        )
        .then(function (response) {
            loader.classList.add("hide");
            console.log(response.data.results);
            let results = response.data.results;
            homeSearchPage.classList.add("hide");

            searchResults.classList.remove("hide")

            searchResults.insertBefore(searchChoicesDiv, searchResults.firstChild);
            searchResults.insertBefore(mainSearchInputDiv, searchResults.firstChild);

            tweetResultsDiv.innerHTML = "";


            appendTweets(results);
            interactWithSearchResults();


            state.result.searchResults = searchResults.className;
            state.result.tweets = tweetResultsDiv.innerHTML;
            state.result.search = mainSearchInput.value;
            state.home.homeSearchPage = homeSearchPage.className;
            window.history.pushState(state, null, "");


        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
        })
}


function retrieveCollectionTweets(){
    emptyCollection.innerHTML = "";
    let collection = event.currentTarget.innerText
    axios.post(
        'http://localhost:5000/explorer-one-44263/us-central1/api/collection',
        {
            collectionName: collection
        },
        config
        )
        .then(function (response) {
            loader.classList.add("hide");
            console.log(response.data.results);
            let results = response.data.results;
            homeSearchPage.classList.add("hide");

            searchResults.classList.remove("hide")

            tweetResultsDiv.innerHTML = "";

            appendTweets(results);
            let saveTweet = document.querySelectorAll(".save-to-collection");
            let removeTweet = document.querySelectorAll(".remove-from-collection");

            saveTweet.forEach((btn) => {
                btn.classList.add("hide");
            })
            
            removeTweet.forEach((btn) => {
                btn.classList.remove("hide");
            })

        
            if (tweetResultsDiv.innerHTML === "") {
                emptyCollection.innerHTML = `<span class="color-blue">${collection}</span> currently has no saved tweets`
            }

            // TODO: add modal popup for clicked images

            let allImages = document.querySelectorAll(".tweet-image img");

            allImages.forEach((img) => {
                img.addEventListener("click", function(){
                    console.log(img)
                    img.style.objectFit = "contain"
                }, false)
            })

            let allVideos = document.querySelectorAll("video");
            allVideos.forEach((video) => {
                video.addEventListener("play", function(){
                    let nowPlaying = event.currentTarget;
                    allVideos.forEach((vid) => {
                        if (vid.paused === false && vid !== nowPlaying) {
                            vid.pause();
                        }
                    })
                })
            })

            // TODO - Add function to pause video when it is out of view;


            state.result.searchResults = searchResults.className;
            state.result.tweets = tweetResultsDiv.innerHTML;
            state.result.search = mainSearchInput.value;
            state.home.homeSearchPage = homeSearchPage.className;
            window.history.pushState(state, null, "");


        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
        })
}


function interactWithSearchResults(){

     // TODO: add modal popup for clicked images
    let allImages = document.querySelectorAll(".tweet-image img");

    allImages.forEach((img) => {
        img.addEventListener("click", function(){
            console.log(img)
            img.style.objectFit = "contain"
        }, false)
    })

    let allVideos = document.querySelectorAll("video");
    allVideos.forEach((video) => {
        video.addEventListener("play", function(){
            let nowPlaying = event.currentTarget;
            allVideos.forEach((vid) => {
                if (vid.paused === false && vid !== nowPlaying) {
                    vid.pause();
                }
            })
        })
    })


    let collectionItemToBeSavedTo = document.querySelectorAll(".save-to-collection-item");
    let tweetBtn = document.querySelectorAll(".save-to-collection");
    tweetBtn.forEach((tweet) => {
        tweet.addEventListener("click", function(){
            saveToCollectionModal.classList.remove("hide");

            let currentTweet = event.currentTarget;
            getTweetId(currentTweet);
            let tweetId = currentTweet.tweetId;
            console.log(tweetId)

            collectionItemToBeSavedTo.forEach((collection) => {
                collection.setAttribute("data-tweetId", tweetId);
            })

        }, false)
    })


    collectionItemToBeSavedTo.forEach((collection)=> {
        console.log("hey");
        collection.addEventListener("click", saveTweetToCollection, true);
    })



}

function saveTweetToCollection(){
    let currentTweet = event.currentTarget;
    getTweetId(currentTweet);
    let tweetId = currentTweet.tweetId;
    let collectionName = event.currentTarget.innerText;
    let collection = event.currentTarget;
    collection.append(loader)
    loader.classList.remove("hide");
    console.log(collection)

    axios.post(
        `http://localhost:5000/explorer-one-44263/us-central1/api/addfavorite/${tweetId}`,
        {
            collectionName: collectionName
        },
        config
        )
        .then(function (response) {
            //TODO success function
            loader.classList.add("hide");
            saveToCollectionModal.classList.add("hide");
            console.log(response.data)
            
            updateCurrentUser(response.data.userDetails)
            appendUserDetails(response.data.userDetails);

            interactWithSearchResults();

        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);

        })
    
}

function getTweetId(element){
    return element.tweetId = element.getAttribute("data-tweetId");
}


console.log(config)

function appendCollections(){

    let allCollectionItems = document.querySelectorAll(".collection-item");
    allCollectionItems[0].setAttribute("data-selected", "true");
    
    allCollectionItems.forEach((collection) => {

        collection.addEventListener("click", function(){
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
    createCollectionError.innerHTML = "";
    createCollectionCta.classList.remove("hide");
    createCollectionInputDiv.classList.add("hide");
}

function createNewCollection(){
    createCollectionBtn.append(loader);
    loader.classList.remove("hide");
    checkTokenStatus()
    createCollectionBtn.append(loader);
    if (createCollectionInput.value.trim() === "") {
        loader.classList.add("hide");
        createCollectionError.classList.remove("hide");
        createCollectionError.innerHTML = "Please enter a name for your new collection";
    }
    else
    axios.post(
        'http://localhost:5000/explorer-one-44263/us-central1/api/collection/create',
        {
            collectionName: createCollectionInput.value
        },
        config
        )
        .then(function (response) {
            createCollectionInput.value = ""
            loader.classList.add("hide");
            createCollectionCta.classList.remove("hide");
            createCollectionInputDiv.classList.add("hide");
            
            updateCurrentUser(response.data.userDetails)
            appendUserDetails(response.data.userDetails);

            // TODO: add modal popup for clicked images

        })
        .catch(function (error) {
            loader.classList.add("hide");
            console.log(error.response.data);
            createCollectionError.classList.remove("hide");
            createCollectionError.innerHTML = error.response.data.error;

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

createCollectionCta.addEventListener("click", openCreateCollectionDiv, false);
createCollectionInputClose.addEventListener("click", closeCreateCollectionDiv, false);
createCollectionBtn.addEventListener("click", createNewCollection, false);
createCollectionInput.addEventListener("keyup", function(){
    if (event.keyCode !== 13) {
        createCollectionError.innerHTML = "";
    }
}, false)








window.onpopstate = function (event) {
    if (event.state) { state = event.state; }
    render(state);
  };
