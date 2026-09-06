// =========================================================
// BRICK & STONE EXTERIOR SELECTOR
// =========================================================

const DB = window.BRICK_STONE_DB;

if (!DB) {
  throw new Error(
    "Brick & Stone database did not load. Make sure brick-stone-database.js loads before script.js."
  );
}


// =========================================================
// SETTINGS
// =========================================================

const MAX_VIABLE_OPTIONS = 6;

let viableOptions = [];
let activeBrickId = null;
let activeColorGroup = "all";


// =========================================================
// ELEMENTS
// =========================================================

const colorFilter =
  document.getElementById("colorFilter");

const brickGroupsContainer =
  document.getElementById("brickGroupsContainer");

const stoneGrid =
  document.getElementById("stoneGrid");

const stoneSectionTitle =
  document.getElementById("stoneSectionTitle");

const stoneSectionDescription =
  document.getElementById("stoneSectionDescription");

const currentBrickName =
  document.getElementById("currentBrickName");

const clearBrickSelection =
  document.getElementById("clearBrickSelection");

const viableCount =
  document.getElementById("viableCount");

const viableList =
  document.getElementById("viableList");

const compareButton =
  document.getElementById("compareButton");


// =========================================================
// COLOR GROUP ORDER
// =========================================================

const COLOR_GROUP_ORDER = [
  "Light Cream / Taupe",
  "Tan",
  "Red",
  "Brown",
  "White",
  "Light Gray",
  "Medium / Dark Gray",
  "Black"
];


// =========================================================
// INITIALIZE
// =========================================================

function initializePage() {

  renderColorFilters();

  renderBrickGroups();

  resetStoneSection();

  updateViableOptions();

}

initializePage();


// =========================================================
// COLOR FILTERS
// =========================================================

function renderColorFilters() {

  colorFilter.innerHTML = "";


  createColorButton(
    "All",
    "all"
  );


  COLOR_GROUP_ORDER.forEach(
    (groupName) => {

      const exists =
        DB.bricks.some(
          brick =>
            normalizeColorGroup(
              brick.colorGroup
            ) === groupName
        );

      if (exists) {

        createColorButton(
          groupName,
          groupName
        );

      }

    }
  );

}


function createColorButton(
  label,
  groupValue
) {

  const button =
    document.createElement("button");

  button.type = "button";

  button.className =
    "color-button";

  if (groupValue === "all") {

    button.classList.add(
      "active"
    );

  }


  button.textContent =
    label;

  button.dataset.group =
    groupValue;


  button.addEventListener(
    "click",
    () => {

      activeColorGroup =
        groupValue;


      document
        .querySelectorAll(
          ".color-button"
        )
        .forEach(
          btn =>
            btn.classList.remove(
              "active"
            )
        );


      button.classList.add(
        "active"
      );


      renderBrickGroups();

    }
  );


  colorFilter.appendChild(
    button
  );

}


// =========================================================
// NORMALIZE COLOR GROUP NAMES
// =========================================================

function normalizeColorGroup(
  colorGroup
) {

  const value =
    String(
      colorGroup || ""
    ).trim();


  const lower =
    value.toLowerCase();


  if (
    lower.includes(
      "light cream"
    ) ||
    lower.includes(
      "taupe"
    )
  ) {

    return "Light Cream / Taupe";

  }


  if (
    lower.includes(
      "medium"
    ) &&
    lower.includes(
      "gray"
    )
  ) {

    return "Medium / Dark Gray";

  }


  if (
    lower.includes(
      "dark gray"
    )
  ) {

    return "Medium / Dark Gray";

  }


  if (
    lower.includes(
      "light gray"
    )
  ) {

    return "Light Gray";

  }


  if (
    lower.includes("brown")
  ) {

    return "Brown";

  }


  if (
    lower.includes("tan")
  ) {

    return "Tan";

  }


  if (
    lower.includes("red")
  ) {

    return "Red";

  }


  if (
    lower.includes("white")
  ) {

    return "White";

  }


  if (
    lower.includes("black")
  ) {

    return "Black";

  }


  return value;

}


// =========================================================
// RENDER BRICK GROUPS
// =========================================================

function renderBrickGroups() {

  brickGroupsContainer.innerHTML =
    "";


  let groups =
    [...COLOR_GROUP_ORDER];


  if (
    activeColorGroup !==
    "all"
  ) {

    groups = [
      activeColorGroup
    ];

  }


  groups.forEach(
    groupName => {

      const bricks =
        DB.bricks.filter(
          brick =>
            normalizeColorGroup(
              brick.colorGroup
            ) === groupName
        );


      if (
        bricks.length === 0
      ) {
        return;
      }


      const section =
        document.createElement(
          "section"
        );

      section.className =
        "brick-group";


      section.innerHTML = `
        <div class="brick-group-heading">

          <div>

            <p class="group-label">
              Brick Collection
            </p>

            <h3>
              ${groupName}
            </h3>

          </div>

          <span class="brick-count">
            ${bricks.length}
            ${bricks.length === 1
              ? "Option"
              : "Options"}
          </span>

        </div>

        <div
          class="brick-grid"
          data-brick-grid
        ></div>
      `;


      const grid =
        section.querySelector(
          "[data-brick-grid]"
        );


      bricks
        .sort(
          (a, b) =>
            a.name.localeCompare(
              b.name
            )
        )
        .forEach(
          brick => {

            grid.appendChild(
              createBrickCard(
                brick
              )
            );

          }
        );


      brickGroupsContainer
        .appendChild(
          section
        );

    }
  );

}


// =========================================================
// CREATE BRICK CARD
// =========================================================

function createBrickCard(
  brick
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "brick-card";


  card.dataset.brickId =
    brick.id;


  if (
    activeBrickId ===
    brick.id
  ) {

    card.classList.add(
      "active-brick"
    );

  }


  if (
    viableOptions.includes(
      brick.id
    )
  ) {

    card.classList.add(
      "selected"
    );

  }


  const selected =
    viableOptions.includes(
      brick.id
    );


  const levelText =
    getBrickLevelText(
      brick
    );


  const undertoneText =
    brick.undertones
      ? `<span class="brick-undertone">
          ${brick.undertones}
        </span>`
      : "";


  card.innerHTML = `

    <button
      class="shortlist-button
      ${selected
        ? "selected"
        : ""}"
      type="button"
      aria-label="Add ${brick.name} to viable options"
    >
      ${selected
        ? "✓"
        : "+"}
    </button>


    <div class="brick-image">

      <img
        src="${brick.imagePath}"
        alt="${brick.name} brick"
        loading="lazy"
      >

    </div>


    <div class="brick-details">

      <h4>
        ${brick.name}
      </h4>

      <p>
        ${brick.vendor || ""}
      </p>

      ${undertoneText}

      <span class="material-badge ${
        isUpgradeBrick(brick)
          ? "upgrade"
          : ""
      }">
        ${levelText}
      </span>

    </div>
  `;


  // Open brick details

  card.addEventListener(
    "click",
    event => {

      if (
        event.target.closest(
          ".shortlist-button"
        )
      ) {
        return;
      }


      selectBrick(
        brick.id
      );

  });


  // Shortlist

  const shortlistButton =
    card.querySelector(
      ".shortlist-button"
    );


  shortlistButton
    .addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleViableOption(
          brick.id
        );

      }
    );


  return card;

}


// =========================================================
// BRICK LEVEL
// =========================================================

function getBrickLevelText(
  brick
) {

  if (
    brick.levelDisplay
  ) {

    return brick.levelDisplay;

  }


  if (
    brick.level
  ) {

    return brick.level;

  }


  return "Level Not Listed";

}


function isUpgradeBrick(
  brick
) {

  const text =
    String(
      brick.levelDisplay ||
      brick.level ||
      ""
    ).toLowerCase();


  return (
    text.includes(
      "level 1"
    ) ||
    text.includes(
      "level 2"
    ) ||
    text.includes(
      "level 3"
    )
  );

}


// =========================================================
// ACTIVE BRICK
// =========================================================

function selectBrick(
  brickId
) {

  const brick =
    DB.bricks.find(
      item =>
        item.id ===
        brickId
    );


  if (!brick) {
    return;
  }


  activeBrickId =
    brick.id;


  currentBrickName.textContent =
    brick.name;


  clearBrickSelection.hidden =
    false;


  renderBrickGroups();

  renderApprovedStone(
    brick
  );

}


// =========================================================
// CLEAR ACTIVE BRICK
// =========================================================

clearBrickSelection
  .addEventListener(
    "click",
    () => {

      activeBrickId =
        null;


      currentBrickName.textContent =
        "Select a brick to explore compatible stone options";


      clearBrickSelection.hidden =
        true;


      renderBrickGroups();

      resetStoneSection();

    }
  );


// =========================================================
// RENDER APPROVED STONE
// =========================================================

function renderApprovedStone(
  brick
) {

  stoneGrid.innerHTML =
    "";


  stoneSectionTitle.textContent =
    `Stone Options Compatible with ${brick.name}`;


  const stones =
    DB.getApprovedStones(
      brick.id
    );


  if (
    stones.length === 0
  ) {

    stoneSectionDescription.textContent =
      `${brick.name} does not have approved stone options listed in the current collection.`;


    const message =
      document.createElement(
        "div"
      );


    message.className =
      "stone-empty-message";


    message.innerHTML = `
      <strong>
        No Stone Options
      </strong>

      <p>
        This brick is currently listed without
        approved stone selections.
      </p>
    `;


    stoneGrid.appendChild(
      message
    );


    renderBrickExceptions(
      brick
    );


    return;

  }


  stoneSectionDescription.textContent =
    `${stones.length} approved ${
      stones.length === 1
        ? "stone option"
        : "stone options"
    } for ${brick.name}. White mortar is included when stone is used.`;


  stones.forEach(
    stone => {

      stoneGrid.appendChild(
        createStoneCard(
          stone
        )
      );

    }
  );


  renderBrickExceptions(
    brick
  );

}


// =========================================================
// CREATE STONE CARD
// =========================================================

function createStoneCard(
  stone
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "stone-card";


  const badges = [];


  if (
    stone.level ===
    "Level 2"
  ) {

    badges.push(
      `<span class="stone-badge upgrade">
        Level 2
      </span>`
    );

  }


  if (
    stone.houstonOnly
  ) {

    badges.push(
      `<span class="stone-badge houston">
        Houston Only
      </span>`
    );

  }


  card.innerHTML = `

    <img
      src="${stone.imagePath}"
      alt="${stone.name} stone"
      loading="lazy"
    >


    <div class="stone-details">

      <h3>
        ${stone.name}
      </h3>

      <div class="stone-badges">
        ${badges.join("")}
      </div>

      <p>
        Approved with the selected brick.
      </p>

      <p class="stone-mortar">
        Mortar:
        <strong>
          White
        </strong>
      </p>

    </div>
  `;


  return card;

}


// =========================================================
// EXCEPTIONS / SPECIAL NOTES
// =========================================================

function renderBrickExceptions(
  brick
) {

  const oldNote =
    document.getElementById(
      "brickExceptionNote"
    );


  if (oldNote) {

    oldNote.remove();

  }


  if (
    !brick.exceptions ||
    brick.exceptions.length === 0
  ) {

    return;

  }


  const note =
    document.createElement(
      "div"
    );


  note.id =
    "brickExceptionNote";


  note.className =
    "brick-exception-note";


  note.innerHTML = `

    <strong>
      Selection Note
    </strong>

    <ul>
      ${brick.exceptions
        .map(
          exception =>
            `<li>${exception}</li>`
        )
        .join("")}
    </ul>
  `;


  stoneGrid.parentElement
    .appendChild(
      note
    );

}


// =========================================================
// RESET STONE SECTION
// =========================================================

function resetStoneSection() {

  stoneSectionTitle.textContent =
    "Explore Stone Options";


  stoneSectionDescription.textContent =
    "Select a brick above to view the stone options approved for that specific brick.";


  stoneGrid.innerHTML = `
    <div class="stone-empty-message">
      <strong>
        Select a Brick Above
      </strong>

      <p>
        Compatible stone selections will appear here.
      </p>
    </div>
  `;


  const note =
    document.getElementById(
      "brickExceptionNote"
    );


  if (note) {

    note.remove();

  }

}


// =========================================================
// VIABLE OPTIONS
// =========================================================

function toggleViableOption(
  brickId
) {

  const alreadySelected =
    viableOptions.includes(
      brickId
    );


  if (alreadySelected) {

    viableOptions =
      viableOptions.filter(
        id =>
          id !== brickId
      );


    updateViableOptions();

    renderBrickGroups();

    return;

  }


  if (
    viableOptions.length >=
    MAX_VIABLE_OPTIONS
  ) {

    alert(
      `You can select up to ${MAX_VIABLE_OPTIONS} viable brick options. Remove one before adding another.`
    );

    return;

  }


  viableOptions.push(
    brickId
  );


  updateViableOptions();

  renderBrickGroups();

}


// =========================================================
// UPDATE VIABLE OPTIONS BAR
// =========================================================

function updateViableOptions() {

  viableCount.textContent =
    `${viableOptions.length} of ${MAX_VIABLE_OPTIONS} Selected`;


  viableList.innerHTML =
    "";


  viableOptions.forEach(
    brickId => {

      const brick =
        DB.bricks.find(
          item =>
            item.id ===
            brickId
        );


      if (!brick) {
        return;
      }


      const chip =
        document.createElement(
          "div"
        );


      chip.className =
        "viable-chip";


      chip.innerHTML = `
        <span>
          ${brick.name}
        </span>

        <button
          type="button"
          aria-label="Remove ${brick.name}"
        >
          ×
        </button>
      `;


      chip
        .querySelector(
          "button"
        )
        .addEventListener(
          "click",
          () => {

            toggleViableOption(
              brick.id
            );

          }
        );


      viableList.appendChild(
        chip
      );

    }
  );


  compareButton.disabled =
    viableOptions.length < 2;

}
