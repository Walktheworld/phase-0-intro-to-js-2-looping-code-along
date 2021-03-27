
const cards = []

function writeCards(array) {
    for (let i = 0; i < array.length; i++){
        cards. push (`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}







let integer = []
function countDown(integer){
    while (integer >= 0) {
        console.log(integer--);
    }
}