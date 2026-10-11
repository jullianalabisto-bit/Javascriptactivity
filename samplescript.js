
const studentName = document.getElementById("studentName");
const changeName = document.getElementById("changeName");

const profile = document.getElementById("profile");
const changeBackground = document.getElementById("changeBackground");

const toggleDetails = document.getElementById("toggleDetails");
const details = document.getElementById("details");



changeName.addEventListener("click", function() {
    studentName.textContent = "Julliana Marie Labisto";
});



changeBackground.addEventListener("click", function() {
    profile.style.backgroundColor = "#d1fae5";
});



toggleDetails.addEventListener("click", function() {
    details.classList.toggle("hidden");
});