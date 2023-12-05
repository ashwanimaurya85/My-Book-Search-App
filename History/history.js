let historyDiv=document.querySelector(".historyDiv");

function displayHistory(){
    let history=JSON.parse(localStorage.getItem("bookHistory"))||[];
    historyDiv.innerHTML="";
    history.map((data,index)=>{
        let listDiv=document.createElement("div");
        listDiv.setAttribute("class","list_div");
        let search=document.createElement("p");
        search.textContent=`${index+1}. ${data.search}`;
        let time=document.createElement("p");
        time.textContent=`Searched On: ${data.date} at ${data.time}`;


        let deleteButton = document.createElement("button");
      deleteButton.setAttribute("class","deletebtn")
        
        // Creating an icon element
        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash"); // Replace "fa-trash" with the appropriate Font Awesome trash icon
        
        // Appending the icon to the delete button
        deleteButton.appendChild(deleteIcon);
        
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent the click event from propagating
            deleteHistoryItem(index); // Function to delete history item
        });
    
      
        listDiv.append(search,time,deleteButton);
        historyDiv.append(listDiv);
        listDiv.addEventListener("click",()=>{
          let currBook={
                id:index+1,
                search:data.search,
                date:data.date,
                time:data.time
             }
            sessionStorage.setItem("currBook",JSON.stringify(currBook));
            window.location.href="../Search/searched.html";
        }) 
      })}
    

        function deleteHistoryItem(index) {
          let history = JSON.parse(localStorage.getItem("bookHistory")) || [];
          history.splice(index, 1); // Remove the item at the given index
          localStorage.setItem("bookHistory", JSON.stringify(history));
          // Re-display the updated history
          displayHistory();
      }
      displayHistory();
     
      
      function clearFun() {
          localStorage.removeItem('bookHistory'); // Remove all history
          displayHistory(); // Re-display the updated history (empty now)
      }
      



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



//cursor pointe
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