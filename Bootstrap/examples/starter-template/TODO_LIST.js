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
      incompleteInputCheckbox.setAttribute("type","checkbox"); //Create and set type attribute for <input>
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
      incompleteButtonEdit.setAttribute("class","edit"); //Creates class="edit"
      //incompleteButtonEdit.setAttribute("onclick", "editLi(this)");
      incompleteButtonEdit.onclick = function () { editLi(this) };
      incompleteButtonEdit.innerHTML = "Edit"; //Creates the Edit text for the button

    //Create the child <button> for delete
      let incompleteButtonDelete = document.createElement("button");
      incompleteButtonDelete.setAttribute("class","delete"); //Creates class="edit"
      incompleteButtonDelete.setAttribute("onclick","deleteLi(this)");
      incompleteButtonDelete.innerHTML = "Delete"; //Creates the Edit text for the button



      incompleteLi.appendChild(incompleteInputCheckbox); //Append the child <input> checkbox to <li>
      incompleteLi.appendChild(incompleteLabel); //Append the child <label> to the <li>
      incompleteLi.appendChild(incompleteInputTextbox); //Append the child <input> checkbox to <li>
      incompleteLi.appendChild(incompleteButtonEdit); //Append the children <button> edit and then delete to <li>
      incompleteLi.appendChild(incompleteButtonDelete);

    //Append the child <li> to the <ul>
      incompleteUl.appendChild(incompleteLi);
}

//Create the delete li function
function deleteLi(item)
{
      let li = item.parentNode; //Grab parent <li>
      let ul = li.parentNode; //Grab parent <ul>
      ul.removeChild(li); //Remove the child from parent
}

function editLi(item)
{
      let li = item.parentNode; //Figure out what <li> to change
      li.setAttribute("class","editMode"); // Change the <li> class to "edit"
      let labelText = li.childNodes[1].innerHTML; // Get the innerHTML of the label
      let textBox = li.childNodes[2]; // Put the labels text into the value of the textbox
      textBox.setAttribute("value", labelText); //textBox.value = labelText;
      item.innerHTML = "Save"; //Change the edit button's text to save
      item.onclick = function () { saveLi(this) }; //Change onclick event for Save button
}

function addToCompleteLi(item)
{
      let ul = document.getElementById("completed-tasks"); //Get the <ul> of completed tasks
      let moveChild = item.parentNode; //Get the <li> of the checkbox item
      ul.appendChild(moveChild); //Append child to new <ul>
      item.onclick = function () { addToIncompleteLi(this) }; //set onclick event to addToIncompleteLi

}

function addToIncompleteLi(item)
{
      let ul = document.getElementById("incomplete-tasks"); //Get the <ul> of completed tasks
      let moveChild = item.parentNode; //Get the <li> of the checkbox item
      ul.appendChild(moveChild); //Append child to new <ul>
      item.onclick = function () { addToIncompleteLi(this) }; //set onclick event to addToIncompleteLi
      item.onclick = function () { addToCompleteLi(this) }; //set onclick event to addToIncompleteLi
}

function saveLi (item)
{
    // remove editMode class from li
      let li = item.parentNode; //Figure out what <li> to change

    // labels innerHTML needs to be changed to the value of the textBox
      li.setAttribute("class",""); // Change the <li> class to "edit"
      let labelText = li.childNodes[1].innerHTML; // Get the innerHTML of the label
      let textBox = li.childNodes[2]; // Put the labels text into the value of the textbox
      textBox.setAttribute("value", labelText);

    // the edit button innerHTML needs to be changed to back to edit
      //Change the edit button's text to save
      item.innerHTML = "Edit";
      item.onclick = function () { editLi(this) };
}
