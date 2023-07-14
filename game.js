var randomNumber = Math.round(Math.random()*100);
var submitButton =document.getElementById("submit");
var message =document.getElementById("message");
var msg;
console.log(randomNumber);

submitButton.onclick = () =>{
    let inputNumber =document.getElementById("inputNumber-Number").value;
    lives--;
    if(inputNumber == randomNumber)
    {

    }
    else if(inputNumber > randomNumber)
    {
        msg = "Oops! You guess is high!"
    }
    else if(inputNumber < randomNumber)
    {
        msg = "Oops! You guess is Low!"
    }
    else if(lives == 0)
    {

    }
    message.style.display="inherit";
    message.innerHTML = msg;
}