// =========================================================
// BRICK & STONE EXTERIOR SELECTOR
// Database-driven version
// IMPORTANT: brick-stone-database.js must load before this file.
// =========================================================

const DB = window.BRICK_STONE_DB;

if (!DB) {
  throw new Error(
    "Brick & Stone database did not load. Make sure brick-stone-database.js is loaded before script.js."
  );
}


// =========================================================
// SETTINGS / STATE
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

const comparisonModal =
  document.getElementById("comparisonModal");

const comparisonBackdrop =
  document.getElementById("comparisonBackdrop");

const comparisonClose =
  document.getElementById("comparisonClose");

const comparisonDone =
  document.getElementById("comparisonDone");

const comparisonGrid =
  document.getElementById("comparisonGrid");


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
// HELPERS
// =========================================================

function getBrickById(brickId) {

  if (typeof DB.getBrick === "function") {
    return DB.getBrick(brickId);
  }

  return (
    DB.bricks.find(
      (brick) =>
        brick.id === brickId
    ) || null
  );

}


function getApprovedStones(brickId) {

  if (
    typeof DB.getApprovedStones ===
    "function"
  ) {

    return DB.getApprovedStones(
      brickId
    );

  }


  const brick =
    getBrickById(brickId);


  if (
    !brick ||
    !Array.isArray(
      brick.approvedStoneIds
    )
  ) {

    return [];

  }


  return brick.approvedStoneIds
    .map(
      (stoneId) =>
        DB.stones[stoneId]
    )
    .filter(Boolean);

}


// =========================================================
// BRICK LEVEL
// =========================================================

function getBrickLevelText(brick) {

  if (brick.selectionLevel) {
    return brick.selectionLevel;
  }


  if (brick.levelDisplay) {
    return brick.levelDisplay;
  }


  if (brick.level) {
    return brick.level;
  }


  if (brick.sourceLevelText) {

    const text =
      String(
        brick.sourceLevelText
      ).toUpperCase();


    if (
      text.includes("LEVEL 3")
    ) {
      return "Level 3";
    }


    if (
      text.includes("LEVEL 2")
    ) {
      return "Level 2";
    }


    if (
      text.includes("LEVEL 1")
    ) {
      return "Level 1";
    }


    if (
      text.includes("STANDARD")
    ) {
      return "Standard";
    }

  }


  return "Level Not Listed";

}


function isUpgradeBrick(brick) {

  const text =
    getBrickLevelText(brick)
      .toLowerCase();


  return (
    text.includes("level 1") ||
    text.includes("level 2") ||
    text.includes("level 3")
  );

}


// =========================================================
// SAFE TEXT HELPERS
// =========================================================

function escapeHtml(value) {

  return String(
    value ?? ""
  )
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );

}


function escapeAttribute(value) {

  return escapeHtml(
    value
  );

}


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

      const count =
        DB.bricks.filter(
          (brick) =>
            brick.colorGroup ===
            groupName
        ).length;


      if (count > 0) {

        createColorButton(
          groupName +
            " (" +
            count +
            ")",
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
    document.createElement(
      "button"
    );


  button.type = "button";

  button.className =
    "color-button";

  button.dataset.group =
    groupValue;

  button.textContent =
    label;


  if (
    activeColorGroup ===
    groupValue
  ) {

    button.classList.add(
      "active"
    );

  }


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
          (btn) => {

            btn.classList.remove(
              "active"
            );

          }
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
// RENDER BRICK GROUPS
// =========================================================

function renderBrickGroups() {

  brickGroupsContainer.innerHTML =
    "";


  const groups =

    activeColorGroup === "all"

      ? COLOR_GROUP_ORDER

      : [activeColorGroup];


  groups.forEach(
    (groupName) => {

      const bricks =
        DB.bricks
          .filter(
            (brick) =>
              brick.colorGroup ===
              groupName
          )
          .sort(
            (a, b) =>
              a.name.localeCompare(
                b.name
              )
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


      section.dataset.group =
        groupName;


      section.innerHTML =

        '<div class="brick-group-heading">' +

          '<div>' +

            '<p class="group-label">' +
              'Brick Collection' +
            '</p>' +

            '<h3>' +
              escapeHtml(groupName) +
            '</h3>' +

          '</div>' +

          '<span class="brick-count">' +

            bricks.length +
            ' ' +
            (
              bricks.length === 1
                ? 'Option'
                : 'Options'
            ) +

          '</span>' +

        '</div>' +

        '<div ' +
          'class="brick-grid" ' +
          'data-brick-grid' +
        '></div>';


      const grid =
        section.querySelector(
          "[data-brick-grid]"
        );


      bricks.forEach(
        (brick) => {

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

function createBrickCard(brick) {

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


  const isShortlisted =
    viableOptions.includes(
      brick.id
    );


  if (
    isShortlisted
  ) {

    card.classList.add(
      "selected"
    );

  }


  const undertones =

    Array.isArray(
      brick.undertones
    )

    &&

    brick.undertones.length >
      0

      ? brick.undertones.join(", ")

      : "";


  const levelText =
    getBrickLevelText(
      brick
    );


  const upgradeClass =
    isUpgradeBrick(brick)
      ? " upgrade"
      : "";


  const selectedClass =
    isShortlisted
      ? " selected"
      : "";


  const shortlistSymbol =
    isShortlisted
      ? "✓"
      : "+";


  const shortlistAction =
    isShortlisted
      ? "Remove"
      : "Add";


  const shortlistPreposition =
    isShortlisted
      ? "from"
      : "to";


  let undertoneHtml =
    "";


  if (undertones) {

    undertoneHtml =

      '<span class="brick-undertone">' +

      escapeHtml(
        undertones
      ) +

      '</span>';

  }


  let sizeHtml =
    "";


  if (
    brick.brickSize
  ) {

    sizeHtml =

      '<span class="material-badge">' +

      escapeHtml(
        brick.brickSize
      ) +

      ' Size' +

      '</span>';

  }


  card.innerHTML =

    '<button ' +

      'class="shortlist-button' +
      selectedClass +
      '" ' +

      'type="button" ' +

      'aria-label="' +
      shortlistAction +
      ' ' +
      escapeAttribute(
        brick.name
      ) +
      ' ' +
      shortlistPreposition +
      ' viable options"' +

    '>' +

      shortlistSymbol +

    '</button>' +


    '<div class="brick-image">' +

      '<img ' +

        'src="' +
        escapeAttribute(
          brick.imagePath || ""
        ) +
        '" ' +

        'alt="' +
        escapeAttribute(
          brick.name
        ) +
        ' brick" ' +

        'loading="lazy"' +

      '>' +

    '</div>' +


    '<div class="brick-details">' +

      '<h4>' +
        escapeHtml(
          brick.name
        ) +
      '</h4>' +

      '<p>' +
        escapeHtml(
          brick.vendor || ""
        ) +
      '</p>' +

      undertoneHtml +

      '<div class="brick-meta-row">' +

        '<span class="material-badge' +
        upgradeClass +
        '">' +

          escapeHtml(
            levelText
          ) +

        '</span>' +

        sizeHtml +

      '</div>' +

    '</div>';


  // =======================================================
  // MISSING BRICK IMAGE FALLBACK
  // =======================================================

  const image =
    card.querySelector(
      "img"
    );


  image.addEventListener(
    "error",
    () => {

      const imageBox =
        card.querySelector(
          ".brick-image"
        );


      image.remove();


      imageBox.classList.add(
        "image-missing"
      );


      imageBox.innerHTML =

        "<span>" +

        escapeHtml(
          brick.name
        ) +

        "</span>";

    }
  );


  // =======================================================
  // CLICK BRICK CARD
  // =======================================================

  card.addEventListener(
    "click",
    (event) => {

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

    }
  );


  // =======================================================
  // SHORTLIST BUTTON
  // =======================================================

  const shortlistButton =
    card.querySelector(
      ".shortlist-button"
    );


  shortlistButton
    .addEventListener(
      "click",
      (event) => {

        event.stopPropagation();


        toggleViableOption(
          brick.id
        );

      }
    );


  return card;

}


// =========================================================
// ACTIVE BRICK
// =========================================================

function selectBrick(brickId) {

  const brick =
    getBrickById(
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
// RENDER APPROVED STONES
// =========================================================

function renderApprovedStone(brick) {

  stoneGrid.innerHTML =
    "";


  removeBrickDetailsPanel();


  removeBrickExceptionNote();


  stoneSectionTitle.textContent =
    "Stone Options Compatible with " +
    brick.name;


  renderBrickDetailsPanel(
    brick
  );


  const stones =
    getApprovedStones(
      brick.id
    );


  if (
    stones.length === 0
  ) {

    stoneSectionDescription.textContent =

      brick.name +

      " does not have approved stone options listed in the current collection.";


    const message =
      document.createElement(
        "div"
      );


    message.className =
      "stone-empty-message";


    message.innerHTML =

      "<strong>" +
        "No Stone Options" +
      "</strong>" +

      "<p>" +
        "This brick is currently listed without approved stone selections." +
      "</p>";


    stoneGrid.appendChild(
      message
    );


    renderBrickExceptions(
      brick
    );


    return;

  }


  stoneSectionDescription.textContent =

    stones.length +

    " approved " +

    (
      stones.length === 1
        ? "stone option"
        : "stone options"
    ) +

    " for " +

    brick.name +

    ". White mortar is included when stone is used.";


  stones.forEach(
    (stone) => {

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

function createStoneCard(stone) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "stone-card";


  card.dataset.stoneId =
    stone.id;


  const badges = [];


  if (
    stone.upgradeLevel
  ) {

    badges.push(

      '<span class="stone-badge upgrade">' +

      'Level ' +

      escapeHtml(
        stone.upgradeLevel
      ) +

      '</span>'

    );

  }


  if (
    stone.houstonOnly
  ) {

    badges.push(

      '<span class="stone-badge houston">' +

      'Houston Only' +

      '</span>'

    );

  }


  const badgesHtml =

    badges.length > 0

      ? '<div class="stone-badges">' +
        badges.join("") +
        '</div>'

      : "";


  card.innerHTML =

    '<img ' +

      'src="' +
      escapeAttribute(
        stone.imagePath || ""
      ) +
      '" ' +

      'alt="' +
      escapeAttribute(
        stone.name
      ) +
      ' stone" ' +

      'loading="lazy"' +

    '>' +


    '<div class="stone-details">' +

      '<h3>' +
        escapeHtml(
          stone.name
        ) +
      '</h3>' +

      badgesHtml +

      '<p>' +
        'Approved with the selected brick.' +
      '</p>' +

      '<p class="stone-mortar">' +

        'Mortar: ' +

        '<strong>' +

          escapeHtml(
            stone.stoneMortar ||
            "White"
          ) +

        '</strong>' +

      '</p>' +

    '</div>';


  // =======================================================
  // MISSING STONE IMAGE FALLBACK
  // =======================================================

  const image =
    card.querySelector(
      "img"
    );


  image.addEventListener(
    "error",
    () => {

      image.remove();


      const placeholder =
        document.createElement(
          "div"
        );


      placeholder.className =
        "stone-image-missing";


      placeholder.innerHTML =

        "<span>" +

        escapeHtml(
          stone.name
        ) +

        "</span>";


      card.prepend(
        placeholder
      );

    }
  );


  return card;

}


// =========================================================
// BRICK DETAILS PANEL
// =========================================================

function renderBrickDetailsPanel(brick) {

  const panel =
    document.createElement(
      "div"
    );


  panel.id =
    "brickDetailsPanel";


  panel.className =
    "brick-details-panel";


  let mortarText =
    "Not Listed";


  if (
    brick.requiredAllBrickMortar
  ) {

    mortarText =
      brick.requiredAllBrickMortar;

  }

  else if (

    Array.isArray(
      brick.allBrickMortarOptions
    )

    &&

    brick.allBrickMortarOptions.length >
      0

  ) {

    mortarText =
      brick.allBrickMortarOptions
        .join(", ");

  }


  const undertones =

    Array.isArray(
      brick.undertones
    )

    &&

    brick.undertones.length >
      0

      ? brick.undertones.join(", ")

      : "None Listed";


  const level =
    getBrickLevelText(
      brick
    );


  const code =
    brick.selectionCode ||
    "None";


  panel.innerHTML =

    '<div class="brick-details-panel-grid">' +

      detailBlock(
        "Vendor",
        brick.vendor ||
        "Not Listed"
      ) +

      detailBlock(
        "Color Group",
        brick.colorGroup ||
        "Not Listed"
      ) +

      detailBlock(
        "Brick Size",
        brick.brickSize ||
        "Not Listed"
      ) +

      detailBlock(
        "Brick Level",
        level
      ) +

      detailBlock(
        "Selection Code",
        code
      ) +

      detailBlock(
        "All-Brick Mortar",
        mortarText
      ) +

      detailBlock(
        "Undertones",
        undertones
      ) +

      detailBlock(
        "Source Page",
        brick.sourcePage ||
        "Not Listed"
      ) +

    '</div>';


  stoneGrid
    .parentElement
    .insertBefore(
      panel,
      stoneGrid
    );

}


function detailBlock(
  label,
  value
) {

  return (

    '<div>' +

      '<span class="detail-label">' +
        escapeHtml(
          label
        ) +
      '</span>' +

      '<strong>' +
        escapeHtml(
          value
        ) +
      '</strong>' +

    '</div>'

  );

}


function removeBrickDetailsPanel() {

  const panel =
    document.getElementById(
      "brickDetailsPanel"
    );


  if (
    panel
  ) {

    panel.remove();

  }

}


// =========================================================
// EXCEPTIONS / SPECIAL NOTES
// =========================================================

function renderBrickExceptions(brick) {

  removeBrickExceptionNote();


  if (

    !Array.isArray(
      brick.exceptions
    )

    ||

    brick.exceptions.length ===
      0

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


  const exceptionItems =

    brick.exceptions
      .map(
        (exception) =>

          "<li>" +

          escapeHtml(
            exception
          ) +

          "</li>"
      )
      .join("");


  note.innerHTML =

    "<strong>" +
      "Selection Note" +
    "</strong>" +

    "<ul>" +
      exceptionItems +
    "</ul>";


  stoneGrid
    .parentElement
    .appendChild(
      note
    );

}


function removeBrickExceptionNote() {

  const note =
    document.getElementById(
      "brickExceptionNote"
    );


  if (
    note
  ) {

    note.remove();

  }

}


// =========================================================
// RESET STONE SECTION
// =========================================================

function resetStoneSection() {

  removeBrickDetailsPanel();


  removeBrickExceptionNote();


  stoneSectionTitle.textContent =
    "Explore Stone Options";


  stoneSectionDescription.textContent =
    "Select a brick above to view the stone options approved for that specific brick.";


  stoneGrid.innerHTML =

    '<div class="stone-empty-message">' +

      '<strong>' +
        'Select a Brick Above' +
      '</strong>' +

      '<p>' +
        'Compatible stone selections will appear here.' +
      '</p>' +

    '</div>';

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


  if (
    alreadySelected
  ) {

    viableOptions =
      viableOptions.filter(
        (id) =>
          id !== brickId
      );


    updateViableOptions();


    renderBrickGroups();


    if (

      comparisonModal

      &&

      comparisonModal
        .classList
        .contains(
          "open"
        )

    ) {

      renderComparison();

    }


    return;

  }


  if (

    viableOptions.length >=
    MAX_VIABLE_OPTIONS

  ) {

    alert(

      "You can select up to " +

      MAX_VIABLE_OPTIONS +

      " viable brick options. Remove one before adding another."

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

    viableOptions.length +

    " of " +

    MAX_VIABLE_OPTIONS +

    " Selected";


  viableList.innerHTML =
    "";


  viableOptions.forEach(
    (brickId) => {

      const brick =
        getBrickById(
          brickId
        );


      if (
        !brick
      ) {

        return;

      }


      const chip =
        document.createElement(
          "div"
        );


      chip.className =
        "viable-chip";


      chip.innerHTML =

        "<span>" +

        escapeHtml(
          brick.name
        ) +

        "</span>" +

        '<button ' +
          'type="button" ' +
          'aria-label="Remove ' +
          escapeAttribute(
            brick.name
          ) +
          '"' +
        '>' +
          '×' +
        '</button>';


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


// =========================================================
// COMPARISON MODAL
// =========================================================

if (
  compareButton
) {

  compareButton
    .addEventListener(
      "click",
      () => {

        if (
          viableOptions.length <
          2
        ) {

          return;

        }


        renderComparison();


        openComparison();

      }
    );

}


function renderComparison() {

  if (
    !comparisonGrid
  ) {

    return;

  }


  comparisonGrid.innerHTML =
    "";


  viableOptions.forEach(
    (brickId) => {

      const brick =
        getBrickById(
          brickId
        );


      if (
        !brick
      ) {

        return;

      }


      const undertones =

        Array.isArray(
          brick.undertones
        )

        &&

        brick.undertones.length >
          0

          ? brick.undertones
              .join(", ")

          : "";


      const card =
        document.createElement(
          "article"
        );


      card.className =
        "comparison-card";


      const upgradeClass =
        isUpgradeBrick(brick)
          ? " upgrade"
          : "";


      const undertoneHtml =

        undertones

          ? '<p class="comparison-undertones">' +
            escapeHtml(
              undertones
            ) +
            '</p>'

          : "";


      card.innerHTML =

        '<div class="comparison-card-image">' +

          '<img ' +

            'src="' +
            escapeAttribute(
              brick.imagePath || ""
            ) +
            '" ' +

            'alt="' +
            escapeAttribute(
              brick.name
            ) +
            ' brick" ' +

            'loading="lazy"' +

          '>' +

        '</div>' +


        '<div class="comparison-card-details">' +

          '<h3>' +
            escapeHtml(
              brick.name
            ) +
          '</h3>' +

          '<p class="comparison-color">' +
            escapeHtml(
              brick.colorGroup
            ) +
          '</p>' +

          '<p>' +
            escapeHtml(
              brick.vendor || ""
            ) +
          '</p>' +

          undertoneHtml +

          '<span class="material-badge' +
          upgradeClass +
          '">' +

            escapeHtml(
              getBrickLevelText(
                brick
              )
            ) +

          '</span>' +

          '<button ' +

            'class="comparison-remove" ' +

            'type="button" ' +

            'data-remove-brick="' +
            escapeAttribute(
              brick.id
            ) +
            '"' +

          '>' +

            'Remove from Comparison' +

          '</button>' +

        '</div>';


      const image =
        card.querySelector(
          "img"
        );


      image.addEventListener(
        "error",
        () => {

          const imageBox =
            card.querySelector(
              ".comparison-card-image"
            );


          image.remove();


          imageBox.classList.add(
            "image-missing"
          );


          imageBox.innerHTML =

            "<span>" +

            escapeHtml(
              brick.name
            ) +

            "</span>";

        }
      );


      card
        .querySelector(
          ".comparison-remove"
        )
        .addEventListener(
          "click",
          () => {

            toggleViableOption(
              brick.id
            );


            if (
              viableOptions.length <
              2
            ) {

              closeComparison();

            }

          }
        );


      comparisonGrid.appendChild(
        card
      );

    }
  );

}


function openComparison() {

  if (
    !comparisonModal
  ) {

    return;

  }


  comparisonModal
    .classList
    .add(
      "open"
    );


  comparisonModal
    .setAttribute(
      "aria-hidden",
      "false"
    );


  document.body
    .classList
    .add(
      "modal-open"
    );

}


function closeComparison() {

  if (
    !comparisonModal
  ) {

    return;

  }


  comparisonModal
    .classList
    .remove(
      "open"
    );


  comparisonModal
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body
    .classList
    .remove(
      "modal-open"
    );

}


if (
  comparisonBackdrop
) {

  comparisonBackdrop
    .addEventListener(
      "click",
      closeComparison
    );

}


if (
  comparisonClose
) {

  comparisonClose
    .addEventListener(
      "click",
      closeComparison
    );

}


if (
  comparisonDone
) {

  comparisonDone
    .addEventListener(
      "click",
      closeComparison
    );

}


document.addEventListener(
  "keydown",
  (event) => {

    if (

      event.key === "Escape"

      &&

      comparisonModal

      &&

      comparisonModal
        .classList
        .contains(
          "open"
        )

    ) {

      closeComparison();

    }

  }
);
