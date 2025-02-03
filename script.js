const myLibrary = [];

function Book(name, author, year, isRead, index) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.read = isRead;
    this.index = index;
}

class bookLib {
    book = document.querySelector(".books");
    observer = 0;
    addBookLibrary = (name, author, year, isRead, index) => {
        const cool = new Book(name, author, year, isRead, index);
        myLibrary.push(cool);
    }
    
    replacer = () => {
        this.book.replaceChildren("");
        myLibrary.forEach(el => {
            let inpIsRead = el.read;
            const card = document.createElement("div");
            card.classList = `card ${el.index}`;
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            p1.textContent = `${el.name}`;
            p2.textContent = `${el.author}`;
            p3.textContent = `${el.year}`;
            const butDiv = document.createElement("div");
            const butRead = document.createElement("button");
            butRead.textContent = "Read";
            inpIsRead ? butRead.style.backgroundColor = "green" : butRead.style.backgroundColor = "red";;
            butRead.addEventListener("click", () => {
                if(butRead.style.backgroundColor == "green"){
                    inpIsRead = false; 
                    butRead.style.backgroundColor = "red"
                } else{
                    butRead.style.backgroundColor = "green";
                    inpIsRead = true; 
                }
                myLibrary.forEach(el => {
                    if(el.index == card.classList[1]) {
                        el.read = inpIsRead;
                        return 0;
                    };
                });
            })
            const butDel = document.createElement("button");
            butDel.textContent = "Delete";
            butDel.addEventListener("click", () => {
                myLibrary.forEach(el => {
                    if(el.index == card.classList[1]) {
                        console.log(myLibrary.indexOf(el))
                        myLibrary.splice(myLibrary.indexOf(el), 1);
                        this.replacer();
                    };
                });
            })
            butDiv.appendChild(butRead);
            butDiv.appendChild(butDel);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(butDiv);
            this.book.appendChild(card);
        });
    }
    
    adding = () => {
        this.observer++;
        const inpName = document.querySelector("#name").value;
        const inpAuthor = document.querySelector("#author").value;
        const inpYear = document.querySelector("#year").value;
        let inpIsRead = document.querySelector("#read").checked;
        if(inpAuthor == 0 || inpYear == 0 || inpName == 0) return 1;
        const card = document.createElement("div");
        card.classList = `card ${this.observer}`;
        this.addBookLibrary(inpName, inpAuthor, inpYear, inpIsRead, card.classList[1]);
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.textContent = `${inpName}`;
        p2.textContent = `${inpAuthor}`;
        p3.textContent = `${inpYear}`;
        const butDiv = document.createElement("div");
        const butRead = document.createElement("button");
        butRead.textContent = "Read";
        inpIsRead ? butRead.style.backgroundColor = "green" : butRead.style.backgroundColor = "red";
        butRead.addEventListener("click", () => {
            if(butRead.style.backgroundColor == "green"){
                inpIsRead = false; 
                butRead.style.backgroundColor = "red"
            } else{
                butRead.style.backgroundColor = "green";
                inpIsRead = true; 
            }
            myLibrary.forEach(el => {
                if(el.index == card.classList[1]) {
                    el.read = inpIsRead;
                    return 0;
                };
            });
        })
        const butDel = document.createElement("button");
        butDel.textContent = "Delete";
        butDel.addEventListener("click", () => {
            myLibrary.forEach(el => {
                if(el.index == card.classList[1]) {
                    console.log(myLibrary.indexOf(el))
                    myLibrary.splice(myLibrary.indexOf(el), 1);
                    this.replacer();
                };
            });
        })
        butDiv.appendChild(butRead);
        butDiv.appendChild(butDel);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(butDiv);
        this.book.appendChild(card);
    }
}

const lib = new bookLib();