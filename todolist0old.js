/////////////////////////////////////////////////////////////////////////////
/***************************************************************************/

let myButtons = document.getElementsByTagName("button");
let addButton = myButtons[0];
addButton.onclick = function () { addToDoItem() };

// create a function to add todo item
function addToDoItem()
{
	// CREATE INCOMPLETE TASKS
	let incompleteUl = document.getElementById("incomplete-tasks") // grab the <ul>

	// CREATE <LI>
	let incompleteLi = document.createElement("li"); // create th child <li> object

	// CREATE CHECKBOX
	let incompleteInputCheckbox = document.createElement("input"); // create the child <input> for checknox
	incompleteInputCheckbox.setAttribute("type", "checkbox")// create and set type attribute for <input> tag

	incompleteInputCheckbox.onclick = function () {addToCompleteLi (this)};

	//let completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks
	//completedTasksHolder.setAttribute("type", "checkbox")// create and set type attribute for <input> tag

	// CREATE LABEL
	let incompleteLabel = document.createElement("label"); // create the child <label> object

	// CREATE EDIT BUTTON
	let incompleteButtonEdit = document.createElement("button"); // creatre the child <button> for edit
	incompleteButtonEdit.setAttribute("class", "edit"); // creates class="edit"
	incompleteButtonEdit.onclick = function () { editLi(this) };
	//incompleteButtonEdit.onclick = editLi(this); // call functin editLi()
	incompleteButtonEdit.innerHTML = "Edit"; // creates the Edit text for edit

	// CREATE TEXT INPUT FOR EDIT
	let incompleteInputEdit = document.createElement("input"); // create the child <input> for checknox
	incompleteInputEdit.setAttribute("type", "text")// create and set type attribute for <input> tag
	//incompleteInputEdit.setAttribute("value", "111111111");

	// CREATE DELETE BUTTON
	let incompleteButtonDelete = document.createElement("button"); // creatre the child <button> for edit
	incompleteButtonDelete.setAttribute("class", "delete"); // creates class="edit"
	let i = incompleteUl.childElementCount;
	// ------incompleteButtonDelete.createEventListener("onclick", "deleteLi(this)");-------- //
	incompleteButtonDelete.setAttribute("onclick", "deleteLi(this)");
	incompleteButtonDelete.innerHTML = "Delete"; // creates the Edit text for edit

	// CREATE CHECKBOX
	let completeCheckBox = document.createElement("checkbox");
	completeCheckBox.setAttribute("onclick", "markCompleted(this)");

	// CREATE NEW TASK
	let addText = document.getElementById("new-task").value; // grab the add textbox and set as text of <li>
	document.getElementById("new-task").value = " "; // clear the entry field
	incompleteLabel.innerHTML = addText;

	// APPEND ALL
	incompleteLi.appendChild(incompleteInputCheckbox); // append the child <input> checkbox to <li>
	incompleteLi.appendChild(incompleteLabel); // append child <label> to the <li> tag
	incompleteLi.appendChild(incompleteInputEdit); // append the child <input> checkbox to <li>
	incompleteLi.appendChild(incompleteButtonEdit); // apend the child <input> checkbox to <li>
	incompleteLi.appendChild(incompleteButtonDelete); // apend the child <input> checkbox to <li>
	incompleteLi.appendChild(completeCheckBox);
	incompleteUl.appendChild(incompleteLi); // append the child <li> to the <ul>
}

// DELETE FUNCTION
function deleteLi(item)
{
		//let incompleteUl = document.getElementById("incomplete-tasks") // grab parent <ul>
		let li = item.parentNode; // grab parent li
		let ul = li.parentNode; // // grab parent ul
		ul.removeChild(li); // remove the child
}

function editLi(item)
{
		let li = item.parentNode;// figure out what <li> to change
		li.setAttribute("class", "editMode")// change the <li> class to edit

		let labelText = li.childNodes[1].innerHTML;// get the innerHTML of the LABEL
		let textBox = li.childNodes[2];
		//textBox.value = labelText;
		textBox.setAttribute("value", labelText);// out the labels text into text box

		// change the edit buttons text to save
		item.innerHTML = "Save";
		// change onclick event for save button
		item.onclick = function () { saveLi() };
}

function addToCompleteLi(item)
{
	// get the ul of completed tasks
	let ul = document.getElementById("completed-tasks"); // grab parent <ul>

	// get the li of the item
	let moveChild = item.parentNode;

	// append child to new ul
	ul.appendChild(moveChild);

	// set onclick event to add to incomplete li
	item.onclick = function() {addToIncompleteLi(this)};
}

function saveLi ()
{

}
/***************************************************************************/
/////////////////////////////////////////////////////////////////////////////
