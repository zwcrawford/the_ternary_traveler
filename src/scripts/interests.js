/* Define how the newInterest object will look when added to the DOM, under the #intForm-container article.

This component is going to tie in to the interestList.displayInterestList() method so that after we define all the stuff the user will interact with, we can code all possible outcomes. In this case, we are going to be adding the interest card to the DOM. We will define the output here and call it there, just under the following code:

>>> displayInterestForm.createAndAppendForm >>>
let newInterest =  {
  name: newInterestName,
  description: newInterestDesc,
  cost: newInterestCost,
  review: newInterestReview,
  placeId: newInterestLocation
}
*/
const interests = {
  interestOnDOM (interest) {
    let interestArticle = document.createElement("article");
    interestArticle.setAttribute("id", `interest__${interest.id}`);
    let interestName = document.createElement("h3");
    interestName.textContent = `${interest.name, interest.place.name}`;
    let interestDesc = document.createElement("p");
    interestDesc.textContent = `${interest.description}`;
    let interestCost = document.createElement("p");
    interestCost.textContent = `${interest.cost}`;
    let interestReview = document.createElement("p");
    interestReview.textContent = `${interest.review}`;
    let interestLocation = document.createElement("p");
    interestLocation.textContent = `${interest.place.name}`;

    interestArticle.appendChild(interestName);
    interestArticle.appendChild(interestDesc);
    interestArticle.appendChild(interestCost);
    interestArticle.appendChild(interestReview);
    interestArticle.appendChild(interestLocation);

    return interestArticle;
  }
}
export default interests