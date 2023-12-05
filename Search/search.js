let url="https://www.googleapis.com/books/v1/volumes?q=";
let history=JSON.parse(sessionStorage.getItem("currBook"));
let historyDiv=document.querySelector(".historyDiv");
let bookShelf=document.querySelector(".bookShelf");

function displayResult(){
    displayHistory();
    searchBooks();
}
displayResult();
function displayHistory(){
    let listDiv=document.createElement("div");
        listDiv.setAttribute("class","list_div");
        let search=document.createElement("p");
        search.textContent=`${history.id}. ${history.search}`;
        let time=document.createElement("p");
        time.textContent=`Searched On: ${history.date} at ${history.time}`;
        listDiv.append(search,time);
        historyDiv.append(listDiv);
}

function searchBooks(){
    fetch(`${url}+${history.search}`)
    .then((res)=>res.json())
    .then((data)=>displayBooks(data.items))
    .catch((err)=>console.log(err.message))
}

function displayBooks(items){
    bookShelf.innerHTML="";

    items.map((item)=>{
        let book=item.volumeInfo;
        let bookBox=document.createElement("div");
        bookBox.setAttribute("class","bookBox");
        let bookImgDiv=document.createElement("div");
        bookImgDiv.setAttribute("class","bookImgDiv");
        let bookCover=document.createElement("img");
        bookCover.src=book.imageLinks.thumbnail;
        bookImgDiv.append(bookCover);
        let desc=document.createElement("div");
        desc.setAttribute("class","bookDesc");
        let title=document.createElement("p");
        title.setAttribute("class","title");
        title.textContent=book.title;
        let author=document.createElement("p");
        author.innerHTML=`<strong>Author:</strong> ${book.authors}`;
        let pageCount=document.createElement("p");
        pageCount.innerHTML=`<strong>Page Count:</strong> ${book.pageCount}`;
        let publisher=document.createElement("p");
        publisher.innerHTML=`<strong>Publisher:</strong> ${book.publisher}`;



        let publishedDate=document.createElement("p");
        publishedDate.innerHTML=`<strong>PublishedDate:</strong> ${book.publishedDate}`;

   

        let printType=document.createElement("p");
        printType.innerHTML=`<strong>PrintType:</strong> ${book.printType}`;

        
        let language=document.createElement("p");
        language.innerHTML=`<strong>Language:</strong> ${book.language}`;
        let averageRating=document.createElement("p");
        averageRating.innerHTML=`<strong>AverageRating:</strong> ${book.averageRating}`;
        let ratingsCount =document.createElement("p");
        ratingsCount.innerHTML=`<strong>RatingsCount:</strong> ${book.ratingsCount}`;




        desc.append(title,author,pageCount,publisher, publishedDate,language,printType,ratingsCount,averageRating);
        let buyDiv=document.createElement("div");
        buyDiv.setAttribute("class","buyDiv");
        let buyButton=document.createElement("button");
        buyButton.setAttribute("class","buyBtn");
        buyButton.innerText="Buy Now";
        buyDiv.append(buyButton);
        bookBox.append(bookImgDiv,desc,buyDiv);
        bookShelf.append(bookBox);
    })
}

// toggle button

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
  
    themeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#f9e6ea';
        showToast("White Theme Changed..");
      } else {
        document.body.style.backgroundColor = '#f9e6ea';
        document.body.style.color = 'black';
        showToast("Black Theme Changed..");
        
      }
    });
  });



  //cursor pointer

  
let cursor = document.getElementById("cursor");
let cursorPointer = document.getElementById("cursor-pointer");

 document.body.addEventListener("mousemove", function (e) {
   cursor.style.left = e.clientX + "px";
   cursor.style.top = e.clientY + "px";
   cursorPointer.style.left = e.clientX + "px";
   cursorPointer.style.top = e.clientY + "px";
 });

 document.body.addEventListener("mousedown", function (e) {
   cursor.style.height = "0.5rem";
   cursor.style.width = "0.5rem";
   cursorPointer.style.height = "3rem";
   cursorPointer.style.width = "3rem";
 });