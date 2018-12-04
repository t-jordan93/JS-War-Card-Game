//Declare Variables
const baseDeck = [];
//Create a Card Object Constructor
function Card(type, suit, imgKey, numVal) {
  this.type = type;
  this.suit = suit;
  //this.image = image;
  this.imgKey = imgKey;
  this.numVal = numVal;
}

//Ace
//Ace of Spades

const ace_Spade = new Card("Ace", "Spade", "AS", 14);
baseDeck.push(ace_Spade);
//console.log(baseDeck[0]);
//console.log(baseDeck[0].numVal);
//Ace of Club

const ace_Club = new Card("Ace", "Club", "AC", 14);
baseDeck.push(ace_Club);
//Ace of Hearts

const ace_Heart = new Card("Ace", "Heart", "AH", 14);
baseDeck.push(ace_Heart);
//Ace of Diamonds

const ace_Diamond = new Card("Ace", "Diamond", "AD", 14);
baseDeck.push(ace_Diamond);

//2s
//Two of Spade

const two_Spade = new Card("Two", "Spade", "2S", 2);
baseDeck.push(two_Spade);
//Two of Club

const two_Club = new Card("Two", "Club", "2C", 2);
baseDeck.push(two_Club);
//Two of Heart

const two_Heart = new Card("Two", "Heart", "2H", 2);
baseDeck.push(two_Heart);
//Two of Diamond

const two_Diamond = new Card("Two", "Diamond", "2D", 2);
baseDeck.push(two_Diamond);

//3s
//Three of Spades

const three_Spade = new Card("Three", "Spade", "3S", 3);
baseDeck.push(three_Spade);
//Three of Clubs

const three_Club = new Card("Three", "Club", "3C", 3);
baseDeck.push(three_Club);
//Three of Hearts

const three_Heart = new Card("Three", "Heart", "3H", 3);
baseDeck.push(three_Heart);
//Three of Diamonds

const three_Diamond = new Card("Three", "Diamond", "3D", 3);
baseDeck.push(three_Diamond);

//4s
//4 of Spade

const four_Spade = new Card("Four", "Spade", "4S", 4);
baseDeck.push(four_Spade);
//4 of Club

const four_Club = new Card("Four", "Club", "4C", 4);
baseDeck.push(four_Club);
//4 of Heart

const four_Heart = new Card("Four", "Heart", "4H", 4);
baseDeck.push(four_Heart);
//4 of Diamond

const four_Diamond = new Card("Four", "Diamond", "4D", 4);
baseDeck.push(four_Diamond);

//5s
//5 of Spade

const five_Spade = new Card("Five", "Spade", "5S", 5);
baseDeck.push(five_Spade);
//5 of Club

const five_Club = new Card("Five", "Club", "5C", 5);
baseDeck.push(five_Club);
//5 of Heart

const five_Heart = new Card("Five", "Heart", "5H", 5);
baseDeck.push(five_Heart);
//5 of Diamond

const five_Diamond = new Card("Five", "Diamond", "5D", 5);
baseDeck.push(five_Diamond);

//6s
//6 of Spade

const six_Spade = new Card("Six", "Spade", "6S", 6);
baseDeck.push(six_Spade);
//6 of Club

const six_Club = new Card("Six", "Club", "6C", 6);
baseDeck.push(six_Club);
//6 of Heart

const six_Heart = new Card("Six", "Heart", "6H", 6);
baseDeck.push(six_Heart);
//6 of Diamond

const six_Diamond = new Card("Six", "Diamond", "6D", 6);
baseDeck.push(six_Diamond);

//7s
// 7 of Spade

const seven_Spade = new Card("Seven", "Spade", "7S", 7);
baseDeck.push(seven_Spade);
//7 of Club

const seven_Club = new Card("Seven", "Club", "7C", 7);
baseDeck.push(seven_Club);
//7 of Heart

const seven_Heart = new Card("Seven", "Heart", "7H", 7);
baseDeck.push(seven_Heart);
//7 of Diamond

const seven_Diamond = new Card("Seven", "Diamond", "7D", 7);
baseDeck.push(seven_Diamond);

//8s
//8 of Spade

const eight_Spade = new Card("Eight", "Spade", "8S", 8);
baseDeck.push(eight_Spade);
//8 of Club

const eight_Club = new Card("Eight", "Club", "8C", 8);
baseDeck.push(eight_Club);
//8 of Heart

const eight_Heart = new Card("Eight", "Heart", "8H", 8);
baseDeck.push(eight_Heart);
//8 of Diamond

const eight_Diamond = new Card("Eight", "Diamond", "8D", 8);
baseDeck.push(eight_Diamond);

//9s
//9 of Spade

const nine_Spade = new Card("Nine", "Spade", "9S", 9);
baseDeck.push(nine_Spade);
//9 of Club

const nine_Club = new Card("Nine", "Club", "9C", 9);
baseDeck.push(nine_Club);
//9 of Heart

const nine_Heart = new Card("Nine", "Heart", "9H", 9);
baseDeck.push(nine_Heart);
//9 of Diamond

const nine_Diamond = new Card("Nine", "Diamond", "9D", 9);
baseDeck.push(nine_Diamond);

//10s
//10  of Spade

const ten_Spade = new Card("Ten", "Spade", "10S", 10);
baseDeck.push(ten_Spade);
//10 of Club

const ten_Club = new Card("Ten", "Club", "10C", 10);
baseDeck.push(ten_Club);
//10 of Heart

const ten_Heart = new Card("Ten", "Heart", "10H", 10);
baseDeck.push(ten_Heart);
//10 of Diamond

const ten_Diamond = new Card("Ten", "Diamond", "10D", 10);
baseDeck.push(ten_Diamond);

//Jacks
//Jack of Spade

const jack_Spade = new Card("Jack", "Spade", "JS", 11);
baseDeck.push(jack_Spade);
//Jack of Club

const jack_Club = new Card("Jack", "Club", "JC", 11);
baseDeck.push(jack_Club);
//Jack of Heart

const jack_Heart = new Card("Jack", "Heart", "JH", 11);
baseDeck.push(jack_Heart);
//Jack of Diamond

const jack_Diamond = new Card("Jack", "Diamond", "JD", 11);
baseDeck.push(jack_Diamond);

//Queens
//Queen of Spade

const queen_Spade = new Card("Queen", "Spade", "QS", 12);
baseDeck.push(queen_Spade);
//Queen of Club

const queen_Club = new Card("Queen", "Club", "QC", 12);
baseDeck.push(queen_Club);
//Queen of Heart

const queen_Heart = new Card("Queen", "Heart", "QH", 12);
baseDeck.push(queen_Heart);
//Queen of Diamond

const queen_Diamond = new Card("Queen", "Diamond", "QD", 12);
baseDeck.push(queen_Diamond);

//Kings
//King of Spade

const king_Spade = new Card("King", "Spade", "KS", 13);
baseDeck.push(king_Spade);
//King of Club

const king_Club = new Card("King", "Club", "KC", 13);
baseDeck.push(king_Club);
//King of Heart

const king_Heart = new Card("King", "Heart", "KH", 13);
baseDeck.push(king_Heart);
//King of Diamond

const king_Diamond = new Card("King", "Diamond", "KD", 13);
baseDeck.push(king_Diamond);

//Create a Test Deck for war

let testCpuDeck = [
  ace_Club,
  two_Club,
  four_Club,
  seven_Club,
  eight_Club,
  nine_Club,
  two_Club,
  four_Club,
  two_Club,
  ten_Club,
  ten_Club,
  five_Diamond
];

let testPlayerDeck = [
  six_Heart,
  two_Diamond,
  four_Diamond,
  six_Diamond,
  five_Club,
  nine_Diamond,
  two_Club,
  four_Club,
  two_Club,
  ten_Club,
  two_Club,
  six_Club
];

//Define shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//Declare Global Game Variables
//Card Arrays
/**
 * gameDeck: copy of baseDeck
 * playerDeck: The players deck/array of cards.
 * cpuDeck: The cpus deck/array of cards.
 * playerCurrentRoundDeck: Array of cards from the players deck for the current round.
 * cpuCurrentRoundDeck: Array of cards from the cpus deck for the current round.
 */
let gameDeck, playerDeck, cpuDeck, playerCurrentRoundDeck, cpuCurrentRoundDeck;

gameDeck = [];
playerDeck = [];
cpuDeck = [];
playerCurrentRoundDeck = [];
cpuCurrentRoundDeck = [];

//other
let playerActiveCard, cpuActiveCard;
//UI Variables for preview section
/**
 * toggleRules: false if rules are not showing. true if rules are showing.
 * toggleInfo: false if info is not showing. True if info is showing.
 * rulesBtn: selector for rules button
 * infoBtn: selector for the info button.
 * newGameBtn: selector for new game button.
 * rulesContent: selector for rules content
 * infoContent: selector for info content
 */
let toggleRules, toggleInfo, rulesBtn, infoBtn, newGameBtn, rulesContent;

/******************************
 * Main Screen event listeners for buttons.
 */

//Create evenet listener for rules button.
toggleRules = false;
rulesBtn = document.querySelector("#btn-rules");
rulesContent = document.querySelector("#war-game-rules");
rulesBtn.addEventListener("click", function() {
  if (!toggleRules) {
    rulesContent.style.display = "block";
    toggleRules = true;
  } else {
    rulesContent.style.display = "none";
    toggleRules = false;
  }
});

//Create event listener for the info button.
toggleInfo = false;
infoBtn = document.querySelector("#btn-info");
infoContent = document.querySelector("#war-game-info");
infoBtn.addEventListener("click", function() {
  if (!toggleInfo) {
    infoContent.style.display = "block";
    toggleInfo = true;
  } else {
    infoContent.style.display = "none";
    toggleInfo = false;
  }
});

//Create event listener for the new game button.
newGameBtn = document.querySelector("#btn-new");
newGameBtn.addEventListener("click", init);

/******************************
 * End Main Screen Event Listeners
 */

//Define variables for the main screen section
let cpuCardCount,
  cpuDeckImg,
  cpuCurrentCardImg,
  playerCardcount,
  playerDeckImg,
  playerBtn,
  playerCurrentCardImg,
  roundWinnerText,
  playerWinsText,
  cpuWinsText;

playerWinsText = "You win the round!";
cpuWinsText = "You lost the round!";

playerBtn = document.querySelector("#player-show-btn");
roundWinnerText = document.querySelector("#roundWinnerText");
playerCurrentCardImg = document.querySelector("#playerCurrentCardImg");
cpuCurrentCardImg = document.querySelector("#cpuCurrentCardImg");

/*********************************************
 * Define variable for war screen and war screen UI ref.
 */
let warRoundCounter,
  warRoundMainNumbText,
  warRoundMainNumbTextMobile,
  warRoundWinnerText,
  warPlayerStarterCardImg,
  warCpuStarterCardImg,
  warPlayerActiveCardImg,
  warCpuActiveCardImg,
  warPlayerBtn,
  warPlayerBtnMobile,
  warShowEnd;
warShowEnd = true;
warOrWin = false;
let warTracker = 2;
warRoundCounter = 1;
warRoundMainNumbTextMobile = document.querySelector(
  ".war-main-round-number-mobile"
);
warRoundMainNumbText = document.querySelector(".war-main-round-number");
warRoundWinnerText = document.querySelector(".war-round-winner-text");
warRoundWinnerTextMobile = document.querySelector(
  ".war-round-winner-text-mobile"
);
warPlayerStarterCardImg = document.querySelector("#player-start-war-card");
warCpuStarterCardImg = document.querySelector("#cpu-start-war-card");
warPlayerActiveCardImg = document.querySelector("#player-active-war-card");
warCpuActiveCardImg = document.querySelector("#cpu-active-war-card");
warPlayerBtn = document.querySelector("#war-round-player-btn");
warPlayerBtnMobile = document.querySelector("#war-round-player-btn-mobile");
/*****************************
 * Define the init function for the game.
 * newGameBtn calls this function.
 */

function init() {
  let oneOrTwo = true;
  //Hide the preview box section
  document.querySelector("#war-game-preview-container").style.display = "none";
  //Display the main game board section
  document.querySelector("#war-main-container").style.display = "block";
  //Initialize the gameDeck
  gameDeck = baseDeck.slice(0);

  //Randomize the gameDeck
  shuffle(gameDeck);

  //Initialize the playerDeck and cpuDeck by splitting the game deck.
  for (let i = 0; i < gameDeck.length; i++) {
    switch (oneOrTwo) {
      case true:
        cpuDeck.push(gameDeck[i]);
        oneOrTwo = false;
        break;
      case false:
        playerDeck.push(gameDeck[i]);
        oneOrTwo = true;
        break;
    }
  }
  /********************************************************************************************************
   * FOR TESTING
   */
  //console.log("testPlayerDeck");
  //console.log(testPlayerDeck);
  //console.log("testCpuDeck");
  //console.log(testCpuDeck);
  console.log("Player Deck");
  console.log(playerDeck);
  console.log("Cpu Deck");
  console.log(cpuDeck);
  //Set the UI to its starting state.
  //Cpu Panel
  //Cpu Card Count
  cpuCardCount = cpuDeck.length;
  //cpuCardCount = testCpuDeck.length;
  document.querySelector("#cpuCardCount").textContent = cpuCardCount;
  //Cpu Deck Image
  cpuDeckImg = document.querySelector("#cpuDeckImg");
  cpuDeckImg.src = "images/gray_back.png";

  //GamePanel
  //Player Active Card
  playerCurrentCardImg.style.display = "none";
  //Round Winner Text
  roundWinnerText.style.display = "none";
  //Cpu Active Card
  cpuCurrentCardImg.style.display = "none";
  //Player Panel
  //Player Card Count
  playerCardcount = playerDeck.length;
  //playerCardcount = testPlayerDeck.length;
  document.querySelector("#playerCardCount").textContent = playerCardcount;
  //Player Deck Image
  playerDeckImg = document.querySelector("#playerDeckImg");
  playerDeckImg.src = "images/gray_back.png";
  //Player Button
  playerBtn.textContent = "Show Card";
  playerActiveCard = {};
  cpuActiveCard = {};
  playerCurrentRoundDeck = [];
  cpuCurrentRoundDeck = [];
  showEnd = true;

  /**************************************
   * Initialize War Screen
   *warRoundCounter,
  warRoundNumbText,
  warRoundWinnerText,
  warPlayerStarterCardImg,
  warCpuStarterCardImg,
  warPlayerActiveCardImg,
  warCpuActiveCardImg
   */
  warRoundCounter = 1;
  warRoundMainNumbTextMobile.textContent = "Round " + warRoundCounter;
  warRoundMainNumbText.textContent = "Round " + warRoundCounter;
  warRoundWinnerText.style.display = "none";
  warRoundWinnerTextMobile.style.display = "none";
  warPlayerBtn.textContent = "Show Card";
  warPlayerBtnMobile.textContent = "Show Card";
  warShowEnd = true;
  warTracker = 2;
}

/*******************************
 * End init function
 */

/**
 * showEnd: true if cards are hidden and need to be shown. false if cards are shown and round needs to end.
 */
let showEnd = true;

/*******************************
 * Define event listener for player button.
 * showEnd determines what the button will do.
 * False: show the cards/ start compare function
 * True: End the round function
 */

playerBtn.addEventListener("click", function() {
  if (showEnd) {
    showAndCompare();
  } else {
    console.log("showEnd");
    console.log(showEnd);
    endRound();
  }
});

/********************************
 * End Event listener for player button
 */

/******************************
 * Define showAndCompare Function
 */

function showAndCompare() {
  console.log("show and compare");
  //Remove the first 2 cards of each deck
  //playerActiveCard = playerDeck.shift();
  //cpuActiveCard = cpuDeck.shift();

  //Add to current round arrays
  //playerCurrentRoundDeck.push(playerActiveCard);
  //console.log(playerCurrentRoundDeck);
  //cpuCurrentRoundDeck.push(cpuActiveCard);
  //console.log(cpuCurrentRoundDeck);

  //Create Current Round Deck for test

  //playerCurrentRoundDeck.push(testPlayerDeck.shift());
  //console.log(playerCurrentRoundDeck);
  //cpuCurrentRoundDeck.push(testCpuDeck.shift());
  //console.log(cpuCurrentRoundDeck);

  playerCurrentRoundDeck.push(playerDeck.shift());
  console.log(playerCurrentRoundDeck);
  cpuCurrentRoundDeck.push(cpuDeck.shift());
  console.log(cpuCurrentRoundDeck);

  //Display the cards on the UI
  playerCurrentCardImg.src =
    "images/" + playerCurrentRoundDeck[0].imgKey + ".png";
  playerCurrentCardImg.style.display = "block";
  cpuCurrentCardImg.src = "images/" + cpuCurrentRoundDeck[0].imgKey + ".png";
  cpuCurrentCardImg.style.display = "block";

  //Compare the first elements of the current round arrays
  if (playerCurrentRoundDeck[0].numVal === cpuCurrentRoundDeck[0].numVal) {
    console.log("Begin War");
    console.log("warShowEnd");
    console.log(warShowEnd);
    warShowEnd = true;
    warTracker = 2;
    //Hide Main Section
    document.querySelector("#war-main-container").style.display = "none";
    //Show War Screen
    document.querySelector("#war-war-container").style.display = "block";
    //Load War screen UI with starter cards

    warPlayerStarterCardImg.src =
      "images/" + playerCurrentRoundDeck[0].imgKey + ".png";

    warCpuStarterCardImg.src =
      "images/" + cpuCurrentRoundDeck[0].imgKey + ".png";

    //Get next two elements for war
    playerCurrentRoundDeck.push(playerDeck.shift(), playerDeck.shift());
    console.log(playerCurrentRoundDeck);
    cpuCurrentRoundDeck.push(cpuDeck.shift(), cpuDeck.shift());
    console.log(cpuCurrentRoundDeck);
    //test
    //playerCurrentRoundDeck.push(testPlayerDeck.shift(), testPlayerDeck.shift());
    //console.log(playerCurrentRoundDeck);
    //cpuCurrentRoundDeck.push(testCpuDeck.shift(), testCpuDeck.shift());
    //console.log(cpuCurrentRoundDeck);

    //Create event listener for player button
    /** *
    warPlayerBtn.addEventListener("click", function() {
      console.log("warShowEnd");

      if (warShowEnd) {
        console.log(warShowEnd);
        console.log("Call to warCompareandShow");
        warCompareAndShow();
      } else {
        console.log("call to war end round");
        warEndRound();
      }
    });
    warPlayerBtnMobile.addEventListener("click", function() {
      console.log("warShowEnd");
      console.log(warShowEnd);
      if (warShowEnd) {
        console.log("Call to warCompareandShow");
        warCompareAndShow();
      } else {
        console.log("call to war end round");
        warEndRound();
      }
    });

    */

    //Show Button
    document
      .querySelector("#war-show-round-player-btn")
      .addEventListener("click", warCompareAndShow);
    document
      .querySelector("#war-show-round-player-btn-mobile")
      .addEventListener("click", warCompareAndShow);
    //End Button
    document
      .querySelector("#war-end-round-player-btn")
      .addEventListener("click", warEndRound);
    document
      .querySelector("#war-end-round-player-btn-mobile")
      .addEventListener("click", warEndRound);
  } else if (playerCurrentRoundDeck[0].numVal > cpuCurrentRoundDeck[0].numVal) {
    console.log("player wins");
    roundWinnerText.textContent = playerWinsText;
    roundWinnerText.style.display = "block";
    //Push each element of both current round decks to the end of winning deck.
    addWinning(playerDeck);
    //addWinning(testPlayerDeck);
    //console.log(playerDeck);
  } else {
    console.log("cpu wins");
    roundWinnerText.textContent = cpuWinsText;
    roundWinnerText.style.display = "block";
    //Push each element of both current round decks to the end of winning deck.
    addWinning(cpuDeck);
    //addWinning(testCpuDeck);
    //console.log(cpuDeck);
  }

  showEnd = false;
  playerBtn.textContent = "End Round";
}

/******************************
 * End showAndCompareFunction
 */

/******************************
 * Define endRound function
 */

function endRound() {
  console.log("end round");
  //console.log(testCpuDeck);
  //console.log(testPlayerDeck);
  //Reset/Upadte the UI the UI
  cpuCardCount = cpuDeck.length;
  playerCardcount = playerDeck.length;
  //Test
  //cpuCardCount = testCpuDeck.length;
  //playerCardcount = testPlayerDeck.length;

  document.querySelector("#cpuCardCount").textContent = cpuCardCount;
  document.querySelector("#playerCardCount").textContent = playerCardcount;

  cpuCurrentCardImg.style.display = "none";
  playerCurrentCardImg.style.display = "none";

  roundWinnerText.style.display = "none";
  //reset the current round variables

  playerCurrentRoundDeck = [];
  cpuCurrentRoundDeck = [];

  playerActiveCard = {};
  cpuActiveCard = {};

  showEnd = true;
  playerBtn.textContent = "Show Card";
}

/*****************************
 * End endRound function
 */

/******************************************
 * addWinning()
 * add winning cards to the winning deck
 */

function addWinning(winningArray) {
  //console.log("add winning");
  //console.log(winningArray);
  for (let i = 0; i < playerCurrentRoundDeck.length; i++) {
    winningArray.push(playerCurrentRoundDeck[i]);
  }
  for (let i = 0; i < cpuCurrentRoundDeck.length; i++) {
    winningArray.push(cpuCurrentRoundDeck[i]);
  }
}
/*******************************************
 * End add winning
 */

/******************************************
 * Define warCompareAndShow
 */

function warCompareAndShow() {
  console.log("inside war compare and show");
  //Show Active War Cards on UI
  warPlayerActiveCardImg.src =
    "images/" + playerCurrentRoundDeck[warTracker].imgKey + ".png";
  warCpuActiveCardImg.src =
    "images/" + cpuCurrentRoundDeck[warTracker].imgKey + ".png";

  //Determine winner/second war

  if (
    playerCurrentRoundDeck[warTracker].numVal ===
    cpuCurrentRoundDeck[warTracker].numVal
  ) {
    warOrWin = true;
    console.log(warOrWin);
    console.log("Second War");
    //Get next two cards
    //Test
    //playerCurrentRoundDeck.push(testPlayerDeck.shift(), testPlayerDeck.shift());
    //console.log(playerCurrentRoundDeck);
    //cpuCurrentRoundDeck.push(testCpuDeck.shift(), testCpuDeck.shift());
    //console.log(cpuCurrentRoundDeck);
    playerCurrentRoundDeck.push(playerDeck.shift(), playerDeck.shift());
    console.log(playerCurrentRoundDeck);
    cpuCurrentRoundDeck.push(cpuDeck.shift(), cpuDeckshift());
    console.log(cpuCurrentRoundDeck);

    //Upadte War UI
  } else if (
    playerCurrentRoundDeck[warTracker].numVal >
    cpuCurrentRoundDeck[warTracker].numVal
  ) {
    console.log("player wins");
    warOrWin = false;
    warRoundWinnerTextMobile.textContent = playerWinsText;
    warRoundWinnerText.textContent = playerWinsText;
    warRoundWinnerTextMobile.style.display = "block";
    warRoundWinnerText.style.display = "block";

    //update the player deck with all the cards from current round
    //addWinning(testPlayerDeck);

    addWinning(playerDeck);
    //warShowEnd = false;
  } else {
    console.log("Cpu Wins");
    warOrWin = false;
    warRoundWinnerTextMobile.textContent = cpuWinsText;
    warRoundWinnerText.textContent = cpuWinsText;
    warRoundWinnerTextMobile.style.display = "block";
    warRoundWinnerText.style.display = "block";
    //addWinning(testCpuDeck);
    //warShowEnd = false;
    addWinning(cpuDeck);
  }

  console.log("set end round btn");
  //warPlayerBtn.textContent = "End Round";
  //warPlayerBtnMobile.textContent = "End Round";
  //warShowEnd = false;
  //console.log(warShowEnd);
  document.querySelector("#war-end-round-player-btn").style.display = "block";
  document.querySelector("#war-end-round-player-btn-mobile").style.display =
    "block";
  document.querySelector("#war-show-round-player-btn").style.display = "none";
  document.querySelector("#war-show-round-player-btn-mobile").style.display =
    "none";
}

/*********************************************
 * End warCompareAndShow
 */

/******************************************
 * Define warEndRound
 *
 */
function warEndRound() {
  if (warOrWin) {
    //true second war
    //console.log("second war");
    //warPlayerBtn.textContent = "Show Card";
    //warPlayerBtnMobile.textContent = "Show Card";
    document.querySelector("#war-show-round-player-btn").style.display =
      "block";
    document.querySelector("#war-show-round-player-btn-mobile").style.display =
      "block";
    document.querySelector("#war-end-round-player-btn").style.display = "none";
    document.querySelector("#war-end-round-player-btn-mobile").style.display =
      "none";
    //Update War UI
    warPlayerActiveCardImg.src = "images/gray_back.png";
    warCpuActiveCardImg.src = "images/gray_back.png";
    //Round History
    document.querySelector(
      "#war-player-round-" + warRoundCounter + "-history-count"
    ).textContent = "Round " + warRoundCounter;

    document.querySelector(
      "#war-player-round-" + warRoundCounter + "-card-img"
    ).src = "images/" + playerCurrentRoundDeck[warTracker].imgKey + ".png";

    document.querySelector(
      "#war-cpu-round-" + warRoundCounter + "-history-count"
    ).textContent = "Round " + warRoundCounter;

    document.querySelector(
      "#war-cpu-round-" + warRoundCounter + "-card-img"
    ).src = "images/" + cpuCurrentRoundDeck[warTracker].imgKey + ".png";

    warRoundCounter++;
    //Round Counter
    warRoundMainNumbText.textContent = "Round " + warRoundCounter;
    warRoundMainNumbTextMobile.textContent = "Round " + warRoundCounter;
    warTracker += 2;
    //warShowEnd = true;
  } else {
    console.log("War End Round");
    console.log(warShowEnd);
    //Hide the war screen
    document.querySelector("#war-war-container").style.display = "none";
    //Show main game screen
    document.querySelector("#war-main-container").style.display = "block";
    //Update card counter
    cpuCardCount = cpuDeck.length;
    playerCardcount = playerDeck.length;
    //Test
    //cpuCardCount = testCpuDeck.length;
    //playerCardcount = testPlayerDeck.length;

    document.querySelector("#cpuCardCount").textContent = cpuCardCount;
    document.querySelector("#playerCardCount").textContent = playerCardcount;
    //Reset main game UI
    cpuCurrentCardImg.style.display = "none";
    playerCurrentCardImg.style.display = "none";

    roundWinnerText.style.display = "none";
    //reset the current round variables

    playerCurrentRoundDeck = [];
    cpuCurrentRoundDeck = [];

    playerActiveCard = {};
    cpuActiveCard = {};

    showEnd = true;
    playerBtn.textContent = "Show Card";

    //Reset war Round counter
    warRoundCounter = 1;

    //Reset war game UI
    //Starter Cards
    warCpuStarterCardImg.src = "images/gray_back.png";
    warPlayerStarterCardImg.src = "images/gray_back.png";
    //Active Cards
    warPlayerActiveCardImg.src = "images/gray_back.png";
    warCpuActiveCardImg.src = "images/gray_back.png";
    //Round Numb Main
    warRoundMainNumbText.textContent = "Round 1";
    warRoundMainNumbTextMobile.textContent = "Round 1";

    warRoundWinnerText.style.display = "none";
    warRoundWinnerTextMobile.style.display = "none";
    //Round History Titles
    document.querySelector("#war-cpu-round-1-history-count").textContent =
      "Round Number";
    document.querySelector("#war-cpu-round-2-history-count").textContent =
      "Round Number";
    document.querySelector("#war-cpu-round-3-history-count").textContent =
      "Round Number";
    document.querySelector("#war-cpu-round-4-history-count").textContent =
      "Round Number";
    document.querySelector("#war-player-round-1-history-count").textContent =
      "Round Number";
    document.querySelector("#war-player-round-2-history-count").textContent =
      "Round Number";
    document.querySelector("#war-player-round-3-history-count").textContent =
      "Round Number";
    document.querySelector("#war-player-round-4-history-count").textContent =
      "Round Number";

    //Round History Images
    document.querySelector("#war-cpu-round-1-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-cpu-round-2-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-cpu-round-3-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-cpu-round-4-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-player-round-1-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-player-round-2-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-player-round-3-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-player-round-4-card-img").src =
      "images/gray_back.png";
    document.querySelector("#war-end-round-player-btn").style.display = "none";
    document.querySelector("#war-end-round-player-btn-mobile").style.display =
      "none";
    document.querySelector("#war-show-round-player-btn").style.display =
      "block";
    document.querySelector("#war-show-round-player-btn-mobile").style.display =
      "block";
  }
  //warPlayerBtn.textContent = "Show Card";
  //warPlayerBtnMobile.textContent = "Show Card";
  //warShowEnd = true;
  //console.log(warShowEnd);
}

/**********************************************
 * End warEndRound
 */
