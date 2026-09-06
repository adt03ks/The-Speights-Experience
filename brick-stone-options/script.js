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
// BRICK / STONE COMPATIBILITY
// =========================================================

const stoneCards =
  document.querySelectorAll(".stone-card");

const stoneSectionTitle =
  document.getElementById("stoneSectionTitle");

const stoneSectionDescription =
  document.getElementById("stoneSectionDescription");

const currentBrickName =
  document.getElementById("currentBrickName");

const clearBrickSelection =
  document.getElementById("clearBrickSelection");


let activeBrick = null;


/*
  Approved stone compatibility.

  As additional brick compatibility is confirmed,
  simply add it here.
*/

// =========================================================
// CLICK BRICK TO VIEW COMPATIBLE STONE
// =========================================================

brickCards.forEach((card) => {

  card.addEventListener("click", (event) => {

    /*
      Do not activate the brick when the buyer
      is only clicking the shortlist + button.
    */

    if (
      event.target.closest(".shortlist-button")
    ) {
      return;
    }


    const brickName =
      card.dataset.brick;

    selectBrick(brickName);

  });

});
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
// SELECT ACTIVE BRICK
// =========================================================

function selectBrick(brickName) {

  activeBrick = brickName;


  // Remove old active styling

  brickCards.forEach((card) => {

    card.classList.remove(
      "active-brick"
    );

  });


  // Add active styling to selected brick

  brickCards.forEach((card) => {

    if (
      card.dataset.brick === brickName
    ) {

      card.classList.add(
        "active-brick"
      );

    }

  });


  // Update current selection display

  currentBrickName.textContent =
    brickName;

  clearBrickSelection.hidden =
    false;


  // Update stone section

  showCompatibleStone(
    brickName
  );

}
// =========================================================
// SHOW COMPATIBLE STONE
// =========================================================

function showCompatibleStone(brickName) {

  const approvedStone =
    brickStoneCompatibility[
      brickName
    ];


  stoneSectionTitle.textContent =
    `Stone Options Compatible with ${brickName}`;


  /*
    If compatibility has not been entered yet,
    show all stone choices for reference.
  */

  if (!approvedStone) {

    stoneSectionDescription.textContent =
      `Stone compatibility for ${brickName} has not yet been entered. Showing all available stone selections for reference.`;


    stoneCards.forEach((card) => {

      card.classList.remove(
        "stone-hidden"
      );

    });


    return;

  }


  stoneSectionDescription.textContent =
    `The following stone selections are currently approved for use with ${brickName}.`;


  stoneCards.forEach((card) => {

    const stoneName =
      card.dataset.stone;


    if (
      approvedStone.includes(
        stoneName
      )
    ) {

      card.classList.remove(
        "stone-hidden"
      );

    } else {

      card.classList.add(
        "stone-hidden"
      );

    }

  });

}
// =========================================================
// CLEAR ACTIVE BRICK
// =========================================================

clearBrickSelection.addEventListener(
  "click",
  () => {

    activeBrick = null;


    brickCards.forEach((card) => {

      card.classList.remove(
        "active-brick"
      );

    });


    currentBrickName.textContent =
      "Select a brick to explore compatible stone options";


    clearBrickSelection.hidden =
      true;


    stoneSectionTitle.textContent =
      "Explore Stone Options";


    stoneSectionDescription.textContent =
      "Select a brick above to view compatible stone options.";


    stoneCards.forEach((card) => {

      card.classList.remove(
        "stone-hidden"
      );

    });

  }
);
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
// COMPARISON ELEMENTS
// =========================================================

const comparisonModal =
  document.getElementById("comparisonModal");

const comparisonGrid =
  document.getElementById("comparisonGrid");

const comparisonClose =
  document.getElementById("comparisonClose");

const comparisonBackdrop =
  document.getElementById("comparisonBackdrop");

const comparisonDone =
  document.getElementById("comparisonDone");


// =========================================================
// OPEN COMPARISON
// =========================================================

compareButton.addEventListener("click", () => {

  if (viableOptions.length < 2) {
    return;
  }

  renderComparison();

  comparisonModal.classList.add("open");

  comparisonModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");

});


// =========================================================
// BUILD COMPARISON CARDS
// =========================================================

function renderComparison() {

  comparisonGrid.innerHTML = "";

  viableOptions.forEach((brickName) => {

    const originalCard =
      [...brickCards].find(
        (card) =>
          card.dataset.brick === brickName
      );

    if (!originalCard) {
      return;
    }


    const image =
      originalCard.querySelector("img");

    const color =
      originalCard.querySelector(
        ".brick-details p"
      );

    const badge =
      originalCard.querySelector(
        ".material-badge"
      );


    const comparisonCard =
      document.createElement("article");

    comparisonCard.className =
      "comparison-card";


    comparisonCard.innerHTML = `
      <div class="comparison-card-image">
        <img
          src="${image.src}"
          alt="${brickName} brick"
        >
      </div>

      <div class="comparison-card-details">

        <h3>${brickName}</h3>

        <p class="comparison-color">
          ${color.textContent}
        </p>

        <span class="${badge.className}">
          ${badge.textContent}
        </span>

        <button
          class="comparison-remove"
          type="button"
          data-remove-brick="${brickName}"
        >
          Remove from Comparison
        </button>

      </div>
    `;


    comparisonGrid.appendChild(
      comparisonCard
    );

  });


  // Add remove behavior

  const removeButtons =
    comparisonGrid.querySelectorAll(
      ".comparison-remove"
    );


  removeButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const brickName =
          button.dataset.removeBrick;

        removeViableOption(brickName);


        // If fewer than 2 remain,
        // close comparison automatically

        if (viableOptions.length < 2) {

          closeComparison();

          return;

        }


        renderComparison();

      }
    );

  });

}


// =========================================================
// CLOSE COMPARISON
// =========================================================

function closeComparison() {

  comparisonModal.classList.remove("open");

  comparisonModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


comparisonClose.addEventListener(
  "click",
  closeComparison
);


comparisonBackdrop.addEventListener(
  "click",
  closeComparison
);


comparisonDone.addEventListener(
  "click",
  closeComparison
);


// Close with Escape key

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      comparisonModal.classList.contains("open")
    ) {

      closeComparison();

    }

  }
);

// =========================================================
// INITIALIZE
// =========================================================

updateViableOptions();
