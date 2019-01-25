const data = {

  // Retrieve place data.
  Places() {
    return fetch("http://localhost:8088/places")
    .then(response => response.json())
  },
  //********* INTERESTS TABLE *********//
  // GRAB ALL INTERESTS - GET
  getInterests() {
    return fetch(`http://localhost:8088/interests`)
    .then(response => response.json())
  },
  getAllInterestsAgain(id) {
    return fetch(`http://localhost:8088/interests/${id}?_expand=place`)
    .then(response => response.json())
  },
  // ADD INTEREST
  addInterest(obj) {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  },
  // REMOVE AN EXISTING INTEREST - DELETE
  deleteInterest(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  // EDIT EXISTING INTEREST - PUT
  editInterest(interestId,interestToEdit) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interestToEdit)
    })
  },
}
export default data;