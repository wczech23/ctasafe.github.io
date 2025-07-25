const requiredInputs = [
  "lineDropdown_ent", "stationDropdown_ent", "hour_ent", "minute_ent", "ampm_ent",
  "lineDropdown_ext", "stationDropdown_ext", "hour_ext", "minute_ext", "ampm_ext"
].map(id => document.getElementById(id));

const submitBtn = document.getElementById("submitBtn");

function validateForm() {
  const allFilled = requiredInputs.every(input => input.value && !input.value.includes("Select"));
  submitBtn.disabled = !allFilled;
}

requiredInputs.forEach(input => input.addEventListener("change", validateForm));

document.getElementById("submitBtn").addEventListener("click", () => {
  const data = {
    entering: {
      line: document.getElementById("lineDropdown_ent").value,
      station: document.getElementById("stationDropdown_ent").value,
      time: `${document.getElementById("hour_ent").value}:${document.getElementById("minute_ent").value} ${document.getElementById("ampm_ent").value}`
    },
    exiting: {
      line: document.getElementById("lineDropdown_ext").value,
      station: document.getElementById("stationDropdown_ext").value,
      time: `${document.getElementById("hour_ext").value}:${document.getElementById("minute_ext").value} ${document.getElementById("ampm_ext").value}`
    }
  };

  console.log("Submitting form data:", data);
});
