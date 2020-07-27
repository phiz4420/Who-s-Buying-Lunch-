var names = ["Alex", "Johnas", "Ren", "Nona", "Clarissa", "Micheal"];

function whosPaying(names) {

var numberOfPoeple= names.length;
var X = Math.floor(Math.random() * numberOfPoeple);

return (names[X] + " is going to buy lunch today!");
}

whosPaying(["Alex", "Jonas", "Ren", "Nona", "Clarissa", "Micheal"]);