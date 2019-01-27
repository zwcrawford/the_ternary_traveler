const data = {

  // Retrieve place data.
  getAllPlaces() {
    return fetch("http://localhost:8088/places")
    .then(response => response.json())
  },
  // Retrieve interest data.
  getAllInterests(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`)
    .then(response => response.json())
  },
  getInterestsByPlace() {
    return fetch("http://localhost:8088/interests?_expand=place")
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
  editInterest(interestId, interestToEdit) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interestToEdit)
    })
  }
}
export default data;