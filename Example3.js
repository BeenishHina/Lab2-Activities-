var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        display1: function(){
            console.log(this.author + " " + this.title + " " + this.readingStatus);
        }
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
var i = 0;
for (i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
        
        console.log(library[i].title+" "+ "Book is in reading status ");
    }
        else {
        console.log(library[i].title+" "+"Book not in Reading Status ");
        }
    }


