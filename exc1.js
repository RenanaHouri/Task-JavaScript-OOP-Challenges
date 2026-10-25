class MediaItem{
    constructor(title,year,genre)
    {
        this.title=title;
        this.year=year;
        this.genre=genre;

    }
    getSummary()
    {
    return this.title + " (" + this.year + ") - " + this.genre;
    }
}

class Book extends MediaItem{
    constructor(title, author, year, genre, pageCount) {
    super(title, year, genre);
    this.author = author;
    this.pageCount = pageCount;
}
    getSummary()
    {
    return "Book: '" + this.title + "' by " + this.author + ", " + this.pageCount + " pages";   
 }
}

class Movie extends MediaItem{
    constructor(title, director, year, genre, durationMinutes) {
    super(title, year, genre);
    this.director = director;
    this.durationMinutes = durationMinutes;
}
     getSummary()
    {
        return "Movie: " +this.title+" "+ " directed by "+this.director+", "+ this.durationMinutes+" min"
    }



}

class Library{
   constructor()
   {
    this.item=[];
   }

   addItem(item)
   {
    this.item.push(item)
   }
   search(term)
   {
    return this.item.filter(function(item)
    {
    return item.title.toLowerCase().includes(term.toLowerCase());
    })
   }
   listByGenre(genre)
   {
     return this.item.filter(function(item)
    {
        return item.genre===genre
    })
   }



}

//דוגמאת הרצה
const lib = new Library();

const book1 = new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412);
const book2 = new Book("Harry Potter", "J.K. Rowling", 1997, "Fantasy", 320);

const movie1 = new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155);
const movie2 = new Movie("Titanic", "James Cameron", 1997, "Romance", 195);

lib.addItem(book1);
lib.addItem(book2);
lib.addItem(movie1);
lib.addItem(movie2);




console.log(lib.listByGenre("Sci-Fi"));

console.log(book1.getSummary());
console.log(movie1.getSummary());