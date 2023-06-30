// Track workout routine
function trackWorkout() {
  const workoutInput = document.getElementById('workout-input');
  const workoutResult = document.getElementById('workout-result');
  const workout = workoutInput.value;

  if (workout) {
    // Save workout routine to localStorage
    localStorage.setItem('workout', workout);

    // Display result
    workoutResult.textContent = `Workout routine tracked: ${workout}`;
    workoutInput.value = '';
  } else {
    workoutResult.textContent = 'Invalid input';
  }
}

// Track calorie intake
function trackCalories() {
  const caloriesInput = document.getElementById('calories-input');
  const caloriesResult = document.getElementById('calories-result');
  const calories = parseInt(caloriesInput.value);

  if (!isNaN(calories)) {
    // Save calories intake to localStorage
    localStorage.setItem('calories', calories);

    // Display result
    caloriesResult.textContent = `Calories intake tracked: ${calories}`;
    caloriesInput.value = '';
  } else {
    caloriesResult.textContent = 'Invalid input';
  }
}

// Track weight
function trackWeight() {
  const weightInput = document.getElementById('weight-input');
  const weightResult = document.getElementById('weight-result');
  const weight = parseFloat(weightInput.value);

  if (!isNaN(weight) && weight > 0) {
    // Save weight to localStorage
    localStorage.setItem('weight', weight);

    // Display result
    weightResult.textContent = `Weight tracked: ${weight} kg`;
    weightInput.value = '';
  } else {
    weightResult.textContent = 'Invalid input';
  }
}

// Retrieve tracked data on page load
window.addEventListener('load', () => {
  const trackedWorkout = localStorage.getItem('workout');
  const trackedCalories = localStorage.getItem('calories');
  const trackedWeight = localStorage.getItem('weight');

  if (trackedWorkout) {
    document.getElementById('workout-result').textContent = `Workout routine tracked: ${trackedWorkout}`;
  }

  if (trackedCalories) {
    document.getElementById('calories-result').textContent = `Calories intake tracked: ${trackedCalories}`;
  }

  if (trackedWeight) {
    document.getElementById('weight-result').textContent = `Weight tracked: ${trackedWeight} kg`;
  }
});
