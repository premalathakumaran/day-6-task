//a.Class - Movie

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var Movie1 = new Movie("Thunivu","Zee studios", "PG-14")
console.log(Movie1)

//b .The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie{
    constructor(title,studio,rating ="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var Movie1 = new Movie("Thunivu","Zee studios",)
console.log(Movie1)

/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}
let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");

let movieArray = [moviee1, moviee2,movie3];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies);

//d. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var Movie1 = new Movie("Casino Royale","Eon Productions","PG­13")
console.log(Movie1)