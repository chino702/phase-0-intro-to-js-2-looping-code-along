// Code your solutions in this file

function writeCards(names, value){
  let messageNames = [];
  for (let i = 0; i < names.length; i++) {
    messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);

  }
  return messageNames;
};

writeCards(["Guadalupe","Ollie", "Aki"], "Surprise");

function countDown(){
  for(
    let i = 10;
    i > -1;
    i--

  ){
    console.log(i);
  }
}

countDown();