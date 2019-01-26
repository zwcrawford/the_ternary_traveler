//Creating and appending the interest form to the DOM.
import data from "./data"
// This will be done on page load. All edits, deletes, and additions will be coded after this step.
const displayInterestForm = {
  createAndAppendForm() {
    // Put the interest form on the DOM first. Again, before any add, delete, or edit functionality.
    // Getting the form header to display before anything else.
    let formHeader = document.createElement("h3");
    formHeader.textContent = "Add an interest to a location:";
    // intFrag is created to hold the formHeader.
    let intFrag = document.createDocumentFragment();
    // And appended here.
    intFrag.appendChild(formHeader);
    // Must add the "#" here when selecting the id. Selecting the DOM element here from index.HTML.
    // This is the literal connection to the browser.
    let formArticle = document.querySelector("#intForm-container");
    formArticle.appendChild(intFrag);
    // Adding the interest name label and input.
    let interestNameField = document.createElement("fieldset");
    let interestNameLabel = document.createElement("label");
    let interestNameInput = document.createElement("input");

    interestNameLabel.textContent = "Name:  ";
    interestNameLabel.setAttribute("for", "interest__name");
    interestNameInput.setAttribute("id", "interest__name");

    interestNameField.appendChild(interestNameLabel)
    interestNameField.appendChild(interestNameInput)

    formArticle.appendChild(interestNameField)

    // Adding the interest description label and input.
    let interestDescField = document.createElement("fieldset");
    let interestDescLabel = document.createElement("label");
    let interestDescInput = document.createElement("textarea");

    interestDescLabel.textContent = "Description:  ";
    interestDescLabel.setAttribute("for", "interest__desc");
    interestDescInput.setAttribute("id", "interest__desc");

    interestDescField.appendChild(interestDescLabel)
    interestDescField.appendChild(interestDescInput)

    formArticle.appendChild(interestDescField)

    // Adding the interest cost label and input.
    let interestCostField = document.createElement("fieldset");
    let interestCostLabel = document.createElement("label");
    let interestCostInput = document.createElement("input");

    interestCostLabel.textContent = "Cost:  ";
    interestCostLabel.setAttribute("for", "interest__cost");
    interestCostInput.setAttribute("id", "interest__cost");

    interestCostField.appendChild(interestCostLabel)
    interestCostField.appendChild(interestCostInput)

    formArticle.appendChild(interestCostField)

    // Adding the interest review label and input.
    let interestReviewField = document.createElement("fieldset");
    let interestReviewLabel = document.createElement("label");
    let interestReviewInput = document.createElement("textarea");

    interestReviewLabel.textContent = "Review:  ";
    interestReviewLabel.setAttribute("for", "interest__review");
    interestReviewInput.setAttribute("id", "interest__review");

    interestReviewField.appendChild(interestReviewLabel)
    interestReviewField.appendChild(interestReviewInput)

    formArticle.appendChild(interestReviewField)

    // Adding the interest place label and dropdown.
    let interestPlaceField = document.createElement("fieldset");
    let interestPlaceLabel = document.createElement("label");
    let interestPlaceSelect = document.createElement("select");

    interestPlaceLabel.textContent = "Location:  ";
    interestReviewLabel.setAttribute("for", "interest__location");
    interestPlaceSelect.setAttribute("id", "interest__location");
    interestPlaceSelect.setAttribute("name", "interest__location");

    interestPlaceField.appendChild(interestPlaceLabel)
    interestPlaceField.appendChild(interestPlaceSelect)

    /*
    Not populating the cities manually bc I had a hard time getting
    the interest form values to correlate with the correct city. Instead
    I am doing another fetch call.
    */
    data.getAllPlaces()
      .then(places => {
        places.forEach(place => {
          let placeOption = document.createElement("option")
          placeOption.textContent = place.name
          placeOption.setAttribute
        })
      })

    formArticle.appendChild(interestPlaceField)
  }
}
export default displayInterestForm