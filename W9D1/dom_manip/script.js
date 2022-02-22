
// wrapped in an event listener because script tag is located at the top
document.addEventListener("DOMContentLoaded", () => { // can write code directly inside of callbacks function- will be executed as soon as dom is loaded
  // toggling restaurants

  const toggleLi = (e) => { // takes in an event
    const li = e.target; // using that event, we grab the current target- which is the li that was clicked on
    if (li.className === "visited") { // toggle classname to be either visited or ""
      li.className = ""; 
    } else {
      li.className = "visited"; // in css file, class .visited is set to have line through it
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!


  const favForm = document.getElementById('fav-form');

  favForm.addEventListener('submit', event => {
    // *cancel default behavior for this event*
    // if we don't include this line, the browser will do what it normally does
    // when you submit a form: make an HTTP request, causing a full page refresh
    event.preventDefault();

    // Get the name input element, get the value, and clear it.
    const favPlaceInput = document.getElementById('favorite-input')
    const favPlace = favPlaceInput.value;
    favPlaceInput.value = '';

    // Add a new li with the sheep's name to the sheep ul.
    const ul = document.getElementById('restaurants');
    const li = document.createElement('li');
    li.textContent = favPlace;
    ul.appendChild(li);
  });


  // adding new photos

  // --- your code here!



});
