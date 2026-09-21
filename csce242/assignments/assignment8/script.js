const exerciseOneLink = document.getElementById("exercise-one-link");
const exerciseTwoLink = document.getElementById("exercise-two-link");
const exerciseOne = document.getElementById("exercise-one");
const exerciseTwo = document.getElementById("exercise-two");

const daysMissedInput = document.getElementById("days-missed");
const deductionResult = document.getElementById("deduction-result");
const attendanceMessage = document.getElementById("attendance-message");

const daysLeft = document.getElementById("days-left");
const semesterMessage = document.getElementById("semester-message");

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

/* Shows Exercise 1 */
exerciseOneLink.addEventListener("click", function (event) {
    event.preventDefault();

    exerciseOne.classList.remove("hidden");
    exerciseTwo.classList.add("hidden");
});

/* Shows Exercise 2 */
exerciseTwoLink.addEventListener("click", function (event) {
    event.preventDefault();

    exerciseTwo.classList.remove("hidden");
    exerciseOne.classList.add("hidden");
});

/* Calculates the attendance deduction */
daysMissedInput.addEventListener("input", function () {
    const daysMissed = Number(daysMissedInput.value);

    if (daysMissedInput.value === "") {
        deductionResult.textContent = "";
        attendanceMessage.textContent = "";
        return;
    }

    const percentageLost = (daysMissed / 25) * 7;

    deductionResult.textContent =
        `You will lose ${percentageLost.toFixed(1)}% for skipping ${daysMissed} day(s).`;

    if (daysMissed === 0) {
        attendanceMessage.textContent =
            "Perfect attendance is an excellent goal!";
    } else if (daysMissed <= 2) {
        attendanceMessage.textContent =
            "A small absence is manageable, but try not to miss more.";
    } else if (daysMissed <= 5) {
        attendanceMessage.textContent =
            "Be careful - those missed classes can add up.";
    } else if (daysMissed <= 10) {
        attendanceMessage.textContent =
            "This is not an online class. You are missing valuable learning opportunities.";
    } else {
        attendanceMessage.textContent =
            "That is a lot of class time to miss. Please make attendance a priority.";
    }
});

/* Calculates the days remaining until December 4 */
function calculateDaysLeft() {
    const today = new Date();
    const currentYear = today.getFullYear();

    let lastDayOfClass = new Date(currentYear, 11, 4);

    if (today > lastDayOfClass) {
        lastDayOfClass = new Date(currentYear + 1, 11, 4);
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const difference = lastDayOfClass - today;
    const numberOfDays = Math.ceil(difference / millisecondsPerDay);

    daysLeft.textContent =
        `You have ${numberOfDays} days left in the semester.`;

    if (numberOfDays > 150) {
        semesterMessage.textContent = "Not time to start counting down yet.";
    } else if (numberOfDays > 75) {
        semesterMessage.textContent = "The semester is moving along - keep working hard!";
    } else if (numberOfDays > 30) {
        semesterMessage.textContent = "The finish line is getting closer!";
    } else if (numberOfDays > 7) {
        semesterMessage.textContent = "Almost there - finish the semester strong!";
    } else {
        semesterMessage.textContent = "Final stretch! You have got this!";
    }
}

calculateDaysLeft();

/* Opens and closes the small-screen menu */
menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("show");

    if (mainNav.classList.contains("show")) {
        menuToggle.textContent = "▲";
    } else {
        menuToggle.textContent = "▼";
    }
});