function addGuests() {
  const numGuests = document.getElementById('numGuests').value;
  const guestListDiv = document.getElementById('guestList');
  guestListDiv.innerHTML = '';

  for (let i = 1; i <= numGuests; i++) {
    const guestDiv = document.createElement('div');
    guestDiv.innerHTML = `
    <fieldset>
    <div class="form-floating mb-3">
    <input type="text" name="guestName${i}" class="form-control rsvpName" id="guestName${i}">
    <label for="floatingInput">Guest ${i} Full Name</label>
    </div>
    <label class=rsvpYesNo for="attendance${i}">Guest ${i} Response:</label>
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
        <div class="radio-group">
        <input type="radio" id="mealChicken${i}" name="meal${i}" value="Filet Mignon w/ Roasted Garlic Mashed Potatoes and Herb Grilled Squash Medley">
        <label for="mealChicken${i}">Filet Mignon w/ Roasted Garlic Mashed Potatoes and Herb Grilled Squash Medley (GF)</label>
         </div>
    
            <div class="radio-group">
        <input type="radio" id="mealFish${i}" name="meal${i}" value="Salmon Filet w/ Garlic Mashed Potatoes and Honey-Miso Lacquered Carrots">
        <label for="mealFish${i}">Salmon Filet w/ Garlic Mashed Potatoes and Honey-Miso Lacquered Carrots (GF)</label>
         </div>

         <div class="radio-group"> 
        <input type="radio" id="mealVegetarian${i}" name="meal${i}" value="Panko Encrusted Tofu">
        <label for="mealVegetarian${i}">Panko Encrusted Tofu (V)</label>
        </div>

        <div class="radio-group">
        <input type="radio" id="mealOther${i}" name="meal${i}" value="Other" onchange="toggleCustomMeal(this, ${i})">
        <label for="mealOther${i}">Other (Please specify):</label>
        <input class="form-floating mb-3" type="text" id="customMeal${i}" name="customMeal${i}" placeholder="Enter your meal choice">
        </div>
    </div>
</fieldset>

<script>
    function toggleCustomMeal(radio, index) {
        var customMealInput = document.getElementById("customMeal" + index);
        if (radio.checked) {
            customMealInput.style.display = "block";
            customMealInput.required = true;
        } else {
            customMealInput.style.display = "none";
            customMealInput.required = false;
        }
    }
</script>
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
  } else {
    mealSelectionDiv.style.display = "none";
    mealSelectionDiv.attributes.required = false;
  }
} 

function onSubmit(){
  const numGuests = document.getElementById('numGuests').value;
  for(let i=1; i <= numGuests; i++){
    const attendanceNo = document.getElementById(`attendanceNo${i}`)
    console.log(attendanceNo.checked)
    if (attendanceNo.checked == true) {
      document.getElementsByName(`meal${i}`).forEach(
        function(temp){
          temp.value = "None";
        }
      )
    } 
  }
}

function toggleCustomMeal(radio, index) {
  const customInput = document.getElementById(`customMeal${i}`);
  if (radio.checked) {
      // Set the radio's value to the current input
      radio.value = customInput.value;
  }
}
