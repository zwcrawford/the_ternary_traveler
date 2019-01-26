//Creating and appending the interest form to the DOM.
import data from "./data"
// This will be done on page load. All edits, deletes, and additions will be coded after this step.
const displayInterestForm = {
  createAndAppendForm() {
    // Put the interest form on the DOM first. Again, before any add, delete, or edit functionality.
    // Getting the form header to display before anything else.
    let formHeader = document.createElement("h2");
    formHeader.textContent = "Add an interest to a location.";
    // intFrag is created to hold the formHeader.
    let intFrag = document.createDocumentFragment();
    // And appended here.
    intFrag.appendChild(formHeader);
    // Must add the "#" here when selecting the id. Selecting the DOM element here from index.HTML.
    // This is the literal connection to the browser.
    let formArticle = document.querySelector("#intForm-container");
    formArticle.appendChild(intFrag);
  }
}
export default displayInterestForm