let myArray = []

let addNameButton = document.querySelector("#addName"); //Knapp - Lägg till sist i kön.
let fastTrackButton = document.querySelector("#fastTrack"); //Knapp - Lägg till först i kön.
let removeButton = document.querySelector("#remove"); //Knapp - Ta bort första personen i kön.

let inLine = document.querySelector("#inLine");
let nameInput = document.querySelector("#checkIn");

let lineDiv = document.querySelector("#noLine");

let paragraph = document.createElement("p");
paragraph.innerText = "Just nu står det inga personer i kö!";
paragraph.style.color = "rgb(11, 11, 68)";

lineDiv.appendChild(paragraph);

//Lägg till namn i kön.
addNameButton.addEventListener ("click", () => {
  if (nameInput.value === "") {
    alert ("OBS, fyll i ditt namn för att ställa dig i kö!");
  } else {
    myArray.push(nameInput.value);
    let listItem = document.createElement("li");
    listItem.innerText = nameInput.value;
    inLine.appendChild(listItem);
    nameInput.value = "";
    paragraph.innerText = "";
    console.log(myArray)
}});

//Lägg till namn först i kön. 
fastTrackButton.addEventListener ("click", () => {
  if (nameInput.value === "") {
    alert ("OBS, fyll i ditt namn för att ställa dig i kö!");
} else {
  myArray.unshift(nameInput.value); //Lägger till värdet först i myArray.
  let listItem = document.createElement("li");
  listItem.innerText = nameInput.value;
  inLine.prepend(listItem); //Lägger till värdet först i OL.
  nameInput.value = "";
  console.log(myArray);
}})

//Ta bort namn från först i kön.
removeButton.addEventListener ("click", () => {

  //alert vid knapptryck på tom kö ("Just nu står det inga personer i kö");  
  if (myArray.length === 0) {
      alert ("Just nu står det inga personer i kö.");
    } else {
      myArray.shift(); // Tar bort första elementet i arrayen.
      inLine.removeChild(inLine.firstElementChild); //Tar bort första namnet i listan.
      console.log(myArray);

      //lägger in p-taggen med meddelande när kön är tom.
      if (inLine.childElementCount === 0) {
        paragraph.innerText = "Just nu står det inga personer i kö!";
      }
}})


