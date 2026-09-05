// =========================================================
// SETTINGS
// =========================================================

const MAX_VIABLE_OPTIONS = 6;

let viableOptions = [];


// =========================================================
// ELEMENTS
// =========================================================

const colorButtons = document.querySelectorAll(".color-button");
const brickGroups = document.querySelectorAll(".brick-group");
const brickCards = document.querySelectorAll(".brick-card");

const viableCount = document.getElementById("viableCount");
const viableList = document.getElementById("viableList");
const compareButton = document.getElementById("compareButton");


// =========================================================
// COLOR GROUP FILTERING
// =========================================================

colorButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const selectedGroup = button.dataset.group;

    // Update active button
    colorButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");


    // Show all groups
    if (selectedGroup === "all") {

      brickGroups.forEach((group) => {
        group.classList.remove("hidden");
      });

      return;
    }


    // Show selected group only
    brickGroups.forEach((group) => {

      const groupName = group.dataset.group;

      if (groupName === selectedGroup) {
        group.classList.remove("hidden");
      } else {
        group.classList.add("hidden");
      }

    });

  });

});


// =========================================================
// SHORTLIST BUTTONS
// =========================================================

brickCards.forEach((card) => {

  const button = card.querySelector(".shortlist-button");
  const brickName = card.dataset.brick;

  button.addEventListener("click", () => {

    const alreadySelected =
      viableOptions.includes(brickName);


    // -----------------------------------------------------
    // REMOVE FROM VIABLE OPTIONS
    // -----------------------------------------------------

    if (alreadySelected) {

      viableOptions =
        viableOptions.filter(
          (brick) => brick !== brickName
        );

      card.classList.remove("selected");
      button.classList.remove("selected");
      button.textContent = "+";

      updateViableOptions();

      return;
    }


    // -----------------------------------------------------
    // MAXIMUM OF 6
    // -----------------------------------------------------

    if (viableOptions.length >= MAX_VIABLE_OPTIONS) {

      alert(
        `You can select up to ${MAX_VIABLE_OPTIONS} viable brick options. Remove one before adding another.`
      );

      return;
    }


    // -----------------------------------------------------
    // ADD TO VIABLE OPTIONS
    // -----------------------------------------------------

    viableOptions.push(brickName);

    card.classList.add("selected");
    button.classList.add("selected");
    button.textContent = "✓";

    updateViableOptions();

  });

});


// =========================================================
// UPDATE VIABLE OPTIONS DISPLAY
// =========================================================

function updateViableOptions() {

  viableCount.textContent =
    `${viableOptions.length} of ${MAX_VIABLE_OPTIONS} Selected`;

  viableList.innerHTML = "";


  viableOptions.forEach((brickName) => {

    const chip =
      document.createElement("div");

    chip.className = "viable-chip";


    const name =
      document.createElement("span");

    name.textContent = brickName;


    const removeButton =
      document.createElement("button");

    removeButton.type = "button";
    removeButton.innerHTML = "&times;";
    removeButton.setAttribute(
      "aria-label",
      `Remove ${brickName}`
    );


    removeButton.addEventListener(
      "click",
      () => {

        removeViableOption(brickName);

      }
    );


    chip.appendChild(name);
    chip.appendChild(removeButton);

    viableList.appendChild(chip);

  });


  // Enable Compare when at least 2 are selected
  compareButton.disabled =
    viableOptions.length < 2;

}


// =========================================================
// REMOVE SHORTLIST ITEM
// =========================================================

function removeViableOption(brickName) {

  viableOptions =
    viableOptions.filter(
      (brick) => brick !== brickName
    );


  brickCards.forEach((card) => {

    if (card.dataset.brick === brickName) {

      const button =
        card.querySelector(".shortlist-button");

      card.classList.remove("selected");
      button.classList.remove("selected");
      button.textContent = "+";

    }

  });


  updateViableOptions();

}


// =========================================================
// COMPARE BUTTON
// =========================================================

compareButton.addEventListener("click", () => {

  if (viableOptions.length < 2) {
    return;
  }


  alert(
    "Selected brick options:\n\n" +
    viableOptions.join("\n")
  );

});


// =========================================================
// INITIALIZE
// =========================================================

updateViableOptions();
