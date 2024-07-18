// Function to calculate BMI
function calculateBMI() {
  // Get the height, weight, and gender values from the form
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;

  // Check if all input fields are filled
  if (!height || !weight || !gender) {
    alert("Tolong Diisi Secara Lengkap.");
    return;
  }

  // Calculate the BMI
  const bmi = (weight / (height * height)).toFixed(2);

  // Prepare the result text based on the BMI value
  let resultText = `BMI Kamu adalah ${bmi}. `;

  if (bmi < 18.5) {
    resultText += "Kamu kekurangan berat badan.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText += "Kamu mempunyai berat badan yang normal.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultText += "Berat badan kamu berlebih.";
  } else {
    resultText += "Kamu Obesitas.";
  }

  // Get the result div and update the text
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = resultText;

  // Show the result card
  const resultCard = document.getElementById("result-card");
  resultCard.classList.remove("hidden");
  resultCard.classList.add("show");
}
