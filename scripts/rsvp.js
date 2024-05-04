function addGuests() {
  const numGuests = document.getElementById('numGuests').value;
  const guestListDiv = document.getElementById('guestList');
  guestListDiv.innerHTML = ''; // Clear previous content

  for (let i = 1; i <= numGuests; i++) {
    const guestDiv = document.createElement('div');
    guestDiv.innerHTML = `
    <fieldset>
    <div class="form-floating mb-3">
    <input type="text" name="guestName${i}" class="form-control rsvpName" id="guestName${i}">
    <label for="floatingInput">Guest ${i} Full Name</label>
    </div>
    <label for="attendance${i}">Will Guest ${i} attend?</label>
    <br>
    <input type="radio" id="attendanceYes${i}" name="attendance${i}" value="Yes" onchange="toggleMealSelection(this)" required>
    <label class="rsvpYesNo" for="attendanceYes${i}">Accepts, with pleasure (Will be attending)</label>
    <br>
    <input type="radio" id="attendanceNo${i}" name="attendance${i}" value="No" onchange="toggleMealSelection(this)">
    <label class="rsvpYesNo" for="attendanceNo${i}">Declines, with regrets (Will <strong>not</strong> be attending)</label>
    <br>
    <br>
    <div id="mealSelection${i}" class="meal-selection" style="display: none">
    <label for="meal${i}">Meal Selection for Guest ${i}:</label>
    <br>
    <input type="radio" id="mealChicken${i}" name="meal${i}" value="Chicken">
    <label for="mealChicken${i}">Chicken</label>
    <br>
    <input type="radio" id="mealFish${i}" name="meal${i}" value="Fish">
    <label for="mealFish${i}">Fish</label>
    <br>
    <input type="radio" id="mealVegetarian${i}" name="meal${i}" value="Vegetarian">
    <label for="mealVegetarian${i}">Vegetarian</label>
    <input type="hidden" id="mealNone${i}" name="meal${i}" value="None"
    </div>
  </fieldset>
  <br>
    `;
    guestListDiv.appendChild(guestDiv);
  }
}

function toggleMealSelection(element) {
const guestNumber = element.id.match(/\d+/)[0];
const mealSelectionDiv = document.getElementById(`mealSelection${guestNumber}`);
if (element.value === 'Yes') {
  mealSelectionDiv.style.display = "initial";
  mealSelectionDiv.attributes.required = true;
  mealSelectionDiv.getElementById(`mealNone${guestNumber}`).attributes.checked = false;
} else {
  mealSelectionDiv.style.display = "none";
  mealSelectionDiv.attributes.required = false;
  mealSelectionDiv.getElementById(`mealNone${guestNumber}`).attributes.checked = true;
}
} 
