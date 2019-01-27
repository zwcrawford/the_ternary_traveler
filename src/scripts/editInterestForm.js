import data from "./data"
//import interests from "./interests"
import displayInterestList from "./displayInterestList"

const editInterestForm = {
  createAndAppendEditForm(articleId, interestObjToEdit) {

    let editFormHeader = document.createElement("h3");
    editFormHeader.textContent = "Update Interest:";
    console.log(interestObjToEdit)

    // Create fieldset for editing cost.
    let editInterestCostField = document.createElement("fieldset");
    let editInterestCostLabel = document.createElement("label");
    editInterestCostLabel.textContent = "Cost: "
    let editInterestCostInput = document.createElement("input");
    editInterestCostInput.value = interestObjToEdit.cost;
    editInterestCostField.appendChild(editInterestCostLabel);
    editInterestCostField.appendChild(editInterestCostInput);

    // Create fieldset for editing review.
    let editInterestReviewField = document.createElement("fieldset");
    let editInterestReviewLabel = document.createElement("label");
    editInterestReviewLabel.textContent = "Review: "
    let editInterestReviewInput = document.createElement("input");
    editInterestReviewInput.value = interestObjToEdit.review;
    editInterestReviewField.appendChild(editInterestReviewLabel);
    editInterestReviewField.appendChild(editInterestReviewInput);

    let updateIntBtn = document.createElement("button");
    updateIntBtn.textContent = "Save Changes";

    updateIntBtn.addEventListener("click", () => {
      let newInterest = {
        cost: editInterestCostInput.value,
        review: editInterestReviewInput.value
      }
      console.log("newInterest", newInterest)

      data.editInterest(interestObjToEdit.id, newInterest)
      .then(response => {
        displayInterestList.interestList()
        console.log(interestObjToEdit)
      })
    })

    let interestArticle = document.querySelector(`#${articleId}`)
    while (interestArticle.firstChild) {
      interestArticle.removeChild(interestArticle.firstChild);
    }

    interestArticle.appendChild(editFormHeader);
    interestArticle.appendChild(editInterestCostField);
    interestArticle.appendChild(editInterestReviewField);
    interestArticle.appendChild(updateIntBtn);
  }
}
export default editInterestForm