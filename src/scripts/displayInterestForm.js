//Creating and appending the interest form to the DOM.
import data from "./data"
import displayInterestList from "./interestList"

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
    interestNameInput.setAttribute("name", "interest__name");

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
    interestReviewLabel.setAttribute("for", "interest__place");
    interestPlaceSelect.setAttribute("id", "interest__place");
    interestPlaceSelect.setAttribute("name", "interest__place");

    interestPlaceField.appendChild(interestPlaceLabel);
    interestPlaceField.appendChild(interestPlaceSelect);

    /*
    Not populating the cities manually bc I had a hard time getting
    the interest form values to correlate with the correct city. Instead
    I am doing another fetch call.
    */
    data.getAllPlaces()
      .then(places => {
        places.forEach(place => {
          let placeOption = document.createElement("option");
          placeOption.textContent = place.name;
          placeOption.setAttribute("value", place.id);
          placeOption.setAttribute("class", "interest__place");
          interestPlaceSelect.appendChild(placeOption);
        })
      })

      let saveBtn = document.createElement("button");
      saveBtn.textContent += "Save Interest";
      saveBtn.setAttribute("class", "interest__save");
      saveBtn.addEventListener("click", this.handleAddInterest)

      // Trying a clear button:
      let clearBtn = document.createElement("button");
      clearBtn.textContent += "Clear Fields";
      clearBtn.setAttribute("class", "clear__fields");
      clearBtn.addEventListener("click", this.clearInterestForm)

      formArticle.appendChild(interestPlaceField);
      formArticle.appendChild(saveBtn);
      formArticle.appendChild(clearBtn);

  },
  handleAddInterest() {
    let newInterestName = document.querySelector("#interest__name").value
    let newInterestDesc = document.querySelector("#interest__desc").value
    let newInterestCost = document.querySelector("#interest__cost").value
    let newInterestReview = document.querySelector("#interest__review").value
    let newInterestLocation = document.querySelector("#interest__place").value

    // Define the newInterest object to be added to the db.
    let newInterest =  {
      name: newInterestName,
      description: newInterestDesc,
      cost: newInterestCost,
      review: newInterestReview,
      placeId: newInterestLocation
    }

    data.addInterest(newInterest)
    .then(response => response.json)
    // Need to define the output to the DOM for each/all interests.
    displayInterestList.interestList();
    // Need to clear the form after interest is saved.
    displayInterestForm.clearInterestForm();
    // Logging to the db here:
    console.log("newInterest: ", newInterest)
  },
  clearInterestForm() {
    document.querySelector("#interest__name").value = "";
    document.querySelector("#interest__desc").value = "";
    document.querySelector("#interest__cost").value = "";
    document.querySelector("#interest__review").value = "";
  }
}
export default displayInterestForm