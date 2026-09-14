const speechColumn = document.getElementById("speech-column");
const speechBubble = document.getElementById("speech-bubble");
const beverageSelect = document.getElementById("beverage-select");
const beverageMessage = document.getElementById("beverage-message");
const sunButton = document.getElementById("sun-button");
const sunArea = document.getElementById("sun-area");

const showSpeechBubble = () => {
    speechBubble.classList.remove("hidden");
};

const showBeverageMessage = () => {
    const beverage = beverageSelect.value;
    beverageMessage.innerHTML = `${beverage}: Nice Choice!`;
};

const addSticker = () => {
    const sticker = document.createElement("span");

    sticker.classList.add("sticker");
    sticker.innerHTML = "☀️";

    sticker.style.left = `${Math.floor(Math.random() * 160)}px`;
    sticker.style.top = `${Math.floor(Math.random() * 80)}px`;

    sunArea.append(sticker);
};

speechColumn.onclick = showSpeechBubble;
beverageSelect.onchange = showBeverageMessage;
sunButton.onclick = addSticker;