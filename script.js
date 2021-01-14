const holes = $(".mole");
const scoreBoard = $(".score");

let score = 0;

// as soon as you click on the button the game starts
function startGame() {
    document.getElementById("startGame").addEventListener('click', function () {

    })
}

// as soon as you catch a mole the score increases
holes.addEventListener("click", function () {
    score = + 1;
    //utiliser méthode jqery pour class
    holes.class = "none";
    holes.style.visibility = "hidden";
});

//the game ends when the 10 seconds are up
//as long as startParty has not finished, the moles appear randomly (they appear with a timer between 200milliseconds and 1 second)
function initGame() {

  let positionMole = Math.floor(Math.random() * (hazardPositionMole + 1));
  let hazardPositionMole;
  //utiliser méthode jquery pour class
    holes.class = "up";
   let startParty = setTimeout(function () {
       alert("Le temps est écoulé ! Vous avez perdu !");
   },10000)

};


initGame();
//Le joueur aura 10 secondes par partie tant que le temps n'est pas écoulé, votre programme selectionnera un trou au hasard
// La taupe doit apparaitre durant un intervale de temps compris entre 200 millisecondes et 1 seconde (générerez valeur aléatoirement )
