const road = document.getElementById("road");

/* Adds one car to the road.
   Parameters: horizontal position, lane position, color, and direction */
const addCar = (left, top, color, direction) => {
    const car = document.createElement("div");

    car.classList.add("car");
    car.style.left = left + "px";
    car.style.top = top + "px";
    car.style.setProperty("--car-color", color);

    /* Makes some cars face the opposite direction */
    if (direction === "left") {
        car.style.transform = "scaleX(-1)";
    }

    road.append(car);
};

const colors = [
    "#35babc",
    "#adcf49",
    "#6e69ad",
    "#f07c67",
    "#3d167d",
    "#b06aae",
    "#b9e7fa"
];

/* These are the two driving lanes on the horizontal road */
const lanes = [77, 114];

/* Creates 10 random cars when the page loads */
for (let i = 0; i < 7; i++) {
    const randomLeft = Math.floor(Math.random() * 930);
    const randomLane = lanes[Math.floor(Math.random() * lanes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomDirection = Math.random() < 0.5 ? "left" : "right";

    addCar(randomLeft, randomLane, randomColor, randomDirection);
}