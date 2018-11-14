//Since the Add button does not have a class or id, grab all the buttons
let myButtons = document.getElementsByTagName("button");

//Add button is the first of the buttons, so we can grab that one
let addButton = myButtons[0];

//Create an onclick event for the Add button
addButton.onclick = function () { addToDoItem() };

//Create a function to add the todo item
function addToDoItem() {
  //Grab the <ul>
  let incompleteUl = document.getElementById("incomplete-tasks");

  //Create the child <li> object
  let incompleteLi = document.createElement("li");

  //Create the child <input> for checkbox
  let incompleteInputCheckbox = document.createElement("input");

  //Create and set type attribute for <input>
  incompleteInputCheckbox.setAttribute("type","checkbox");
  incompleteInputCheckbox.onclick = function () { addToCompleteLi(this) };
  //incompleteInputCheckbox.setAttribute("onclick", "addToCompleteLi(this)");

  //Create the child <label> object
  let incompleteLabel = document.createElement("label");

  //Grab the Add textbox value and set it as text of <label>
  let addText = document.getElementById("new-task").value;
  document.getElementById("new-task").value = "";
  incompleteLabel.innerHTML = addText;

  //Create the child <input> for the textbox and set attribute
  let incompleteInputTextbox = document.createElement("input");
  incompleteInputTextbox.setAttribute("type","text");

  //Create the child <button> for edit
  let incompleteButtonEdit = document.createElement("button");
  incompleteButtonEdit.setAttribute("class","edit");  //Creates class="edit"
  //incompleteButtonEdit.setAttribute("onclick", "editLi(this)");
  incompleteButtonEdit.onclick = function () { editLi(this) };
  incompleteButtonEdit.innerHTML = "Edit"; //Creates the Edit text for the button

  //Create the child <button> for delete
  let incompleteButtonDelete = document.createElement("button");
  incompleteButtonDelete.setAttribute("class","delete");  //Creates class="edit"
  incompleteButtonDelete.setAttribute("onclick","deleteLi(this)");
  incompleteButtonDelete.innerHTML = "Delete"; //Creates the Edit text for the button


  //Append the child <input> checkbox to <li>
  incompleteLi.appendChild(incompleteInputCheckbox);

  //Append the child <label> to the <li>
  incompleteLi.appendChild(incompleteLabel);

  //Append the child <input> checkbox to <li>
  incompleteLi.appendChild(incompleteInputTextbox);

  //Append the children <button> edit and then delete to <li>
  incompleteLi.appendChild(incompleteButtonEdit);
  incompleteLi.appendChild(incompleteButtonDelete);

  //Append the child <li> to the <ul>
  incompleteUl.appendChild(incompleteLi);
}

//Create the delete li function
function deleteLi(item) {
  //Grab parent <li>
  let li = item.parentNode;
  //Grab parent <ul>
  let ul = li.parentNode;
  //Remove the child from parent
  ul.removeChild(li);
}

function editLi(item) {
 //Figure out what <li> to change
 let li = item.parentNode;
 // Change the <li> class to "edit"
 li.setAttribute("class","editMode");
 // Get the innerHTML of the label
 let labelText = li.childNodes[1].innerHTML;
 // Put the labels text into the value of the textbox
  let textBox = li.childNodes[2];
  //textBox.value = labelText;
  textBox.setAttribute("value", labelText);
  //Change the edit button's text to save
  item.innerHTML = "Save";
  //Change onclick event for Save button
  item.onclick = function () { saveLi(this) };
}

function addToCompleteLi(item) {
  //Get the <ul> of completed tasks
  let ul = document.getElementById("completed-tasks");
  //Get the <li> of the checkbox item
  let moveChild = item.parentNode;
  //Append child to new <ul>
  ul.appendChild(moveChild);
  //set onclick event to addToIncompleteLi
  item.onclick = function () { addToIncompleteLi(this) };
}

function addToIncompleteLi(item) {
  //Get the <ul> of completed tasks
  let ul = document.getElementById("incomplete-tasks");
  //Get the <li> of the checkbox item
  let moveChild = item.parentNode;
  //Append child to new <ul>
  ul.appendChild(moveChild);
  //set onclick event to addToCompleteLi
  item.onclick = function () { addToCompleteLi(this) };
}

function saveLi(item) {
  //Figure out what <li> to change
  let li = item.parentNode;
  // Remove the <li> class to ""
  li.setAttribute("class","");
  //Get the value of the textbox
  let textBox = li.childNodes[2];
  let textBoxValue = textBox.value;
  //Set the innerHTML of the label
  li.childNodes[1].innerHTML = textBoxValue;
  //Clear the value of the textbox
  //textBox.value = "";

   //Change the edit button's text to save
   item.innerHTML = "Edit";
   //Change onclick event for Save button
   item.onclick = function () { editLi(this) };


  //label's innerHTML needs to be changed to value of textbox
  //remove value of textBox
  //The edit button's innerHTML needs to say edit instead of save
}
