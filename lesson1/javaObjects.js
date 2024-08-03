function Books(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.bookList  = [];

    this.bookInfo = function(){
        console.log(`${this.title} by ${this.author} is a total of ${this.pages} pages.`);
    }

    this.addBook = function(book){
        this.bookList.push(book);
        console.log(`${this.title} has been added to the library`);
    }


    this.pagecount = function(){
        let over100 = this.bookList.filter(count => count > 100)
        console.log(`Here is a list of all books over 100 pages: ${over100}`);
    }

}

let dune = new Books("Dune", "Frank Herbert", 412)

dune.bookInfo();
dune.addBook();