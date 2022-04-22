function game() {
const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let matches = 0;
let picks = 0;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "white",
  "teal",
  "grey",
  "yellow",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "white",
  "teal",
  "grey",
  "yellow",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  let cardPicked = e.target;
  cardPicked.style.backgroundColor = cardPicked.classList[0];
  console.log(picks);

  if (!card1 || !card2) {
    cardPicked.classList.add("flipped");
    picks++;
    card1 = card1 || cardPicked;
    card2 = cardPicked === card1 ? null : cardPicked;
  }
  if (card1 && card2){
    let first = card1.className;
    let second = card2.className;
  
  if (first === second){
      matches +=2;
      card1 = null;
      card2 = null;
      console.log("You have a match");
  }
  else {
    setTimeout(function() {
    card1.style.backgroundColor = null;
    card2.style.backgroundColor = null;
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    card1 = null;
    card2 = null;
    }, 1000);
  }
}
    // you can use event.target to see which element was clicked
    console.log("You clicked this: ", e.target);

    if (matches === COLORS.length) alert("You completed the game in " + picks +" clicks!");
}
// when the DOM loads
createDivsForColors(shuffledColors);
}