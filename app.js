        let favoriteShow = prompt("What was your favorite tv series in 2022? ex: first kill, ozark, euphoria");
        console.log(favoriteShow);
        document.write('<h3>'+favoriteShow+'</h3>');

       //if (this is true) {do this code}
       //if favoriteShoe is Euphoria, write "good choice!"
       if (favoriteShow == "euphoria"){
        document.write("Good Choice!");
     } else if (favoriteShow == "first kill") {
        document.write("Awesome pick!");
     } else if (favoriteShow == "ozark") {
        document.write("wow, solid choice!");
     } else {
        document.write("You did not pick any of the shows recommended on this page")
     } 
        
     let rating = prompt("How would you rate this webpge (1-5)?");
     console.log(typeof(rating));
     //console will tell you whether "rating" is a string or a number
     rating = parseInt(rating);
     //parseInt will transform the string, "rating" into a number
     if (rating == 5) {
        document.write("You rated this page five stars!");
     } 
     if (rating == 4) {
        document.write("You rated this page four stars!");
     }
     if (rating == 3) {
        document.write("You rated this page three stars!");
     }
     if (rating == 2) {
        document.write("You rated this page two stars!");
     }
     if (rating == 1) {
        document.write("You rated this page one star!");
     }
     else {
        document.write("you rated this page " + rating);
     }
