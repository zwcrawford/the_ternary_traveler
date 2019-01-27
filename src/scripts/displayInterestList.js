
import data from "./data"
import interests from "./interests"
// Now that we have the interest data compiled and we know what EACH interest should look like on the DOM, we need to set the layout to list the COLLECTION of interests under the interest form.

const displayInterestList = {
  interestList() {
    data.getInterestsByPlace()
    .then(allInterests => {
      let interestDocFrag = document.createDocumentFragment();
      allInterests.forEach(interest => {
        let interestCard = interests.interestOnDOM(interest, interest.id);
        interestDocFrag.appendChild(interestCard)
      })
      let placesContainer = document.querySelector("#intDisplay-container");
      while (placesContainer.firstChild) {
        placesContainer.removeChild(placesContainer.firstChild)
      }
      placesContainer.appendChild(interestDocFrag)
    })
  }
}
export default displayInterestList


