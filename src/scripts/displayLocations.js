import data from "./data"

const displayLocations = {
  listify() {
    // Getting the data.
    data.getAllPlaces()
    .then(allPlaces => {
      //console.log(allPlaces)
      let placeDocFrag = document.createDocumentFragment();
      allPlaces.forEach(place => {
        let placeHTML = this.placeBuilder(place)
        placeDocFrag.appendChild(placeHTML)
      })
      // Dont forget the "#" when using querySelector
      let displayArticle = document.querySelector("#display-container")
      while (displayArticle.firstChild) {
        displayArticle.removeChild(displayArticle.firstChild)
      }
      displayArticle.appendChild(placeDocFrag)
    })
  },
  placeBuilder (placeObj) {
    // Formatting the data.
    let placeArticle = document.createElement("article");
    let placeName = document.createElement("h3");
    placeName.textContent = placeObj.name;

    let visaReq = document.createElement("p");
    visaReq.textContent = placeObj.visa_required;

    placeArticle.appendChild(placeName);
    placeArticle.appendChild(visaReq);
    // Simple CSS for clarity.
    placeArticle.setAttribute("class", "flex_container")
    return placeArticle;
  }
}
export default displayLocations