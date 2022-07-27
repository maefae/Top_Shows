function askFavorite(){
    let favoriteShow = prompt("What was your favorite tv series in 2022?")
    console.log(favoriteShow);
    document.write('<h3>'+favoriteShow+'</h3>');
    if (favoriteShow == "Euphoria") {
        document.write('<h3>'+"<br> Good choice!"+'</h3>');
    } else if (favoriteShow == "first kill") {
        document.write('<h3>'+"<br> awesome pick!"+'</h3');
    } else {
        document.write('<h3>'+"You did not pick any of the shows recommended on this page"+'<h3>')
    }
}
askFavorite();

function customMessage(){
    let answerOne = prompt("Trivia Game: Who is the actress that plays Rue Bennett on Euphoria");
    if (answerOne === "Zendaya" || answerOne === "z" || answerOne === "zendaya") {
       alert("You are correct")
    } else {
       alert("You are incorrect. Try again")
       customMessage();
    } 
}
customMessage();

//Console will work like this, or you can just take away line 39,41,& 42 and take the prompt outside of the function. maintaining the orig. askRating();
function askRating(){
    let rating = prompt("How would you rate this webpge (1-5)?");
     console.log(typeof(rating));
     //console will tell you whether "rating" is a string or a number
     rating = parseInt(rating);
     //parseInt will transform the string, "rating" into a number
     if (rating == 1) {
        document.write('<h3>'+"<br> You rated this page one star!"+'</h3>');
     }
     else {
        document.write('<h3>'+`<br> you rated this page ${rating} stars`+'</h3>');
     }

     return rating;
}
     let asksRating = askRating();
     console.log("this is a result of a function: ", asksRating);

     
//givenName is the parameter
     function printName(givenName){
        console.log("the name you gave me is:", givenName);
     }
     //argument (passing rules)
    printName("Megan");
    printName("Charlotte");
    printName("Cameron");
    printName("Candace");

    /*
    function userAge(){
        let age = prompt("how old are u");
        if (age == 23) {
            Document.write("You are as old as ME");
        } else {
            document.write("You are " + age + " years old.")
        }
    }
   userAge();
    */
    
   
