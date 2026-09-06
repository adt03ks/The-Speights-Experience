// Houston Brick & Stone Compatibility Database
// Source: BRICK-STONE-PAINT COLLECTIONS HOUSTON 8-28-26
// Generated for the Brick & Stone Options page.

window.BRICK_STONE_DB = {
  "metadata": {
    "title": "Houston Brick & Stone Compatibility Database",
    "sourceDocument": "BRICK-STONE-PAINT COLLECTIONS HOUSTON 8-28-26",
    "sourceDate": "2026-08-28",
    "market": "Houston",
    "brickCount": 75,
    "stoneCount": 23,
    "sourceBrickPages": "23-97",
    "sourceStonePages": "17-20",
    "sourceMortarPage": 21
  },
  "globalRules": {
    "availabilityAndRepetition": "Brick availability and street-scene repetition are not contained in this database. The source directs users to the separate BRICK AVAILABILITY AND REPETITION.xlsx and digital plat maps.",
    "allBrickElevationMortarDefault": {
      "standard": "Natural Gray",
      "upgrade": "White",
      "note": "Per-brick mortar rules override this default where the brick page specifies White Only, White Required, Light Quarry, or another rule."
    },
    "stoneElevationMortar": {
      "required": "White",
      "included": true,
      "note": "White mortar is included on stone elevations."
    },
    "stoneUpgradeExceptions": {
      "level2": [
        "aspen-blend-ledgestone",
        "bluebonnet-ledgestone"
      ]
    },
    "marketRestrictedStones": {
      "houstonOnly": [
        "ashland-grey",
        "brazos-canyon-ledgestone",
        "edinburgh"
      ]
    }
  },
  "stones": {
    "ashland-grey": {
      "id": "ashland-grey",
      "name": "Ashland Grey",
      "houstonOnly": true,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/ashland-grey.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Ashland Grey"
      ]
    },
    "aspen-blend-chopped": {
      "id": "aspen-blend-chopped",
      "name": "Aspen Blend Chopped",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/aspen-blend-chopped.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Aspen Blend Chopped"
      ]
    },
    "aspen-blend-ledgestone": {
      "id": "aspen-blend-ledgestone",
      "name": "Aspen Blend Ledgestone",
      "houstonOnly": false,
      "upgradeLevel": 2,
      "stoneMortar": "White",
      "imagePath": "assets/stone/aspen-blend-ledgestone.jpg",
      "sourcePages": [
        17,
        20
      ],
      "sourceNameVariants": [
        "Aspen Blend Ledgestone"
      ]
    },
    "autumn-blend-flagstone": {
      "id": "autumn-blend-flagstone",
      "name": "Autumn Blend Flagstone",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/autumn-blend-flagstone.jpg",
      "sourcePages": [
        17
      ],
      "sourceNameVariants": [
        "Autumn Blend Flagstone"
      ]
    },
    "autumn-blend-sawn-chop": {
      "id": "autumn-blend-sawn-chop",
      "name": "Autumn Blend Sawn Chop",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/autumn-blend-sawn-chop.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Autumn Blend Sawn Chop"
      ]
    },
    "blanco-flagstone": {
      "id": "blanco-flagstone",
      "name": "Blanco Flagstone",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/blanco-flagstone.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Blanco Flagstone"
      ]
    },
    "blanco-ledgestone": {
      "id": "blanco-ledgestone",
      "name": "Blanco Ledgestone",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/blanco-ledgestone.jpg",
      "sourcePages": [
        20
      ],
      "sourceNameVariants": [
        "Blanco Ledgestone"
      ]
    },
    "blanco-sawn-chop": {
      "id": "blanco-sawn-chop",
      "name": "Blanco Sawn Chop",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/blanco-sawn-chop.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Blanco Sawn Chop"
      ]
    },
    "blue-marble": {
      "id": "blue-marble",
      "name": "Blue Marble",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/blue-marble.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Blue Marble",
        "Blue Marble Sawn Chop"
      ]
    },
    "blue-moon-sawn-chop": {
      "id": "blue-moon-sawn-chop",
      "name": "Blue Moon Sawn Chop",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/blue-moon-sawn-chop.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Blue Moon Sawn Chop"
      ]
    },
    "bluebonnet-chopped": {
      "id": "bluebonnet-chopped",
      "name": "Bluebonnet Chopped",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/bluebonnet-chopped.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Bluebonnet Chopped"
      ]
    },
    "bluebonnet-ledgestone": {
      "id": "bluebonnet-ledgestone",
      "name": "Bluebonnet Ledgestone",
      "houstonOnly": false,
      "upgradeLevel": 2,
      "stoneMortar": "White",
      "imagePath": "assets/stone/bluebonnet-ledgestone.jpg",
      "sourcePages": [
        17,
        20
      ],
      "sourceNameVariants": [
        "Bluebonnet Ledgestone"
      ]
    },
    "brazos-canyon-ledgestone": {
      "id": "brazos-canyon-ledgestone",
      "name": "Brazos Canyon Ledgestone",
      "houstonOnly": true,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/brazos-canyon-ledgestone.jpg",
      "sourcePages": [
        17,
        20
      ],
      "sourceNameVariants": [
        "Brazos Canyon Ledgestone",
        "Brazos Canyon Ledgstone (source typo variant)"
      ]
    },
    "country-french-blend": {
      "id": "country-french-blend",
      "name": "Country French Blend",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/country-french-blend.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Country French Blend"
      ]
    },
    "eastern-buff-sawn-chop": {
      "id": "eastern-buff-sawn-chop",
      "name": "Eastern Buff Sawn Chop",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/eastern-buff-sawn-chop.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Eastern Buff Sawn Chop"
      ]
    },
    "edinburgh": {
      "id": "edinburgh",
      "name": "Edinburgh",
      "houstonOnly": true,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/edinburgh.jpg",
      "sourcePages": [
        17,
        19
      ],
      "sourceNameVariants": [
        "Edinburgh"
      ]
    },
    "granbury-cream-chopped": {
      "id": "granbury-cream-chopped",
      "name": "Granbury Cream Chopped",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/granbury-cream-chopped.jpg",
      "sourcePages": [
        18,
        20
      ],
      "sourceNameVariants": [
        "Granbury Cream Chopped",
        "Granbury Cream Chop",
        "Granbury Cream"
      ]
    },
    "granbury-quarry-chop": {
      "id": "granbury-quarry-chop",
      "name": "Granbury Quarry Chop",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/granbury-quarry-chop.jpg",
      "sourcePages": [
        18,
        19
      ],
      "sourceNameVariants": [
        "Granbury Quarry Chop"
      ]
    },
    "opal-chopped-limestone": {
      "id": "opal-chopped-limestone",
      "name": "Opal Chopped Limestone",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/opal-chopped-limestone.jpg",
      "sourcePages": [
        18,
        20
      ],
      "sourceNameVariants": [
        "Opal Chopped Limestone"
      ]
    },
    "powder-gray-chopped": {
      "id": "powder-gray-chopped",
      "name": "Powder Gray Chopped",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/powder-gray-chopped.jpg",
      "sourcePages": [
        18,
        19
      ],
      "sourceNameVariants": [
        "Powder Gray Chopped"
      ]
    },
    "sonoma-charcoal": {
      "id": "sonoma-charcoal",
      "name": "Sonoma Charcoal",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/sonoma-charcoal.jpg",
      "sourcePages": [
        18,
        19
      ],
      "sourceNameVariants": [
        "Sonoma Charcoal",
        "Sonoma Charcoal Sawn Chop"
      ]
    },
    "texas-mix-chopped-limestone": {
      "id": "texas-mix-chopped-limestone",
      "name": "Texas Mix Chopped Limestone",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/texas-mix-chopped-limestone.jpg",
      "sourcePages": [
        18,
        20
      ],
      "sourceNameVariants": [
        "Texas Mix Chopped Limestone"
      ]
    },
    "texas-mix-sawn-chop": {
      "id": "texas-mix-sawn-chop",
      "name": "Texas Mix Sawn Chop",
      "houstonOnly": false,
      "upgradeLevel": null,
      "stoneMortar": "White",
      "imagePath": "assets/stone/texas-mix-sawn-chop.jpg",
      "sourcePages": [
        18,
        19
      ],
      "sourceNameVariants": [
        "Texas Mix Sawn Chop"
      ]
    }
  },
  "bricks": [
    {
      "id": "adobe-wells",
      "name": "Adobe Wells",
      "sourceName": "ADOBE WELLS",
      "vendor": "ACME",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/adobe-wells.jpg",
      "sourcePage": 23,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "alpine",
      "name": "Alpine",
      "sourceName": "ALPINE",
      "vendor": "ACME",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/alpine.jpg",
      "sourcePage": 24,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "alpine-fog",
      "name": "Alpine Fog",
      "sourceName": "ALPINE FOG",
      "vendor": "Meridian",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "ashland-grey",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "edinburgh",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/alpine-fog.jpg",
      "sourcePage": 25,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "amarllyis",
      "name": "Amarllyis",
      "sourceName": "AMARLLYIS",
      "vendor": "Meridian",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": null,
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL:",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY",
      "approvedStoneIds": [
        "ashland-grey",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "edinburgh",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/amarllyis.jpg",
      "sourcePage": 26,
      "exceptions": [
        "Selection level is blank in source."
      ],
      "colorGroupId": "light-gray"
    },
    {
      "id": "autumn-moon",
      "name": "Autumn Moon",
      "sourceName": "AUTUMN MOON",
      "vendor": "Meridian",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL : STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR: WHITE, GRAY",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/autumn-moon.jpg",
      "sourcePage": 27,
      "exceptions": [
        "Source says 'Gray'; normalized to 'Natural Gray' for UI."
      ],
      "colorGroupId": "tan"
    },
    {
      "id": "belle-meade",
      "name": "Belle Meade",
      "sourceName": "BELLE MEADE",
      "vendor": "US Brick",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL 1: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "ashland-grey",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "edinburgh",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/belle-meade.jpg",
      "sourcePage": 28,
      "exceptions": [
        "Source level label contains both 'Level 1' and 'Standard'; stored as Standard."
      ],
      "colorGroupId": "white"
    },
    {
      "id": "birch-williamsburg",
      "name": "Birch Williamsburg",
      "sourceName": "BIRCH WILLIAMSBURG",
      "vendor": "Glen Gery",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "Queen",
      "selectionLevel": "Level 3",
      "selectionCode": "BKU03",
      "sourceLevelText": "QUEEN SIZE / LEVEL 3: BKU03",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped",
        "powder-gray-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/birch-williamsburg.jpg",
      "sourcePage": 29,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "burlington-antique",
      "name": "Burlington Antique",
      "sourceName": "BURLINGTON ANTIQUE",
      "vendor": "Meridian",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "eastern-buff-sawn-chop",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/burlington-antique.jpg",
      "sourcePage": 30,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "caprock",
      "name": "Caprock",
      "sourceName": "CAPROCK",
      "vendor": "Meridian",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "country-french-blend",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped",
        "opal-chopped-limestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/caprock.jpg",
      "sourcePage": 31,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "casa-blanca",
      "name": "Casa Blanca",
      "sourceName": "CASA BLANCA",
      "vendor": "ACME",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM/TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped",
        "granbury-quarry-chop",
        "opal-chopped-limestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/casa-blanca.jpg",
      "sourcePage": 32,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "casablanca",
      "name": "Casablanca",
      "sourceName": "CASABLANCA",
      "vendor": "Glen Gery",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "Queen",
      "selectionLevel": "Level 3",
      "selectionCode": "BKU03",
      "sourceLevelText": "QUEEN SIZE / LEVEL 3: BKU03",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/casablanca.jpg",
      "sourcePage": 33,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "castle-rock",
      "name": "Castle Rock",
      "sourceName": "CASTLE ROCK",
      "vendor": "Triangle",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/castle-rock.jpg",
      "sourcePage": 34,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "chateau",
      "name": "Chateau",
      "sourceName": "CHATEAU",
      "vendor": "Master Brick",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/chateau.jpg",
      "sourcePage": 35,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "chesterfield",
      "name": "Chesterfield",
      "sourceName": "CHESTERFIELD",
      "vendor": "Meridian",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL 1: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE,",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/chesterfield.jpg",
      "sourcePage": 36,
      "exceptions": [
        "Source level label contains both 'Level 1' and 'Standard'; stored as Standard."
      ],
      "colorGroupId": "brown"
    },
    {
      "id": "cibolo-trail",
      "name": "Cibolo Trail",
      "sourceName": "CIBOLO TRAIL",
      "vendor": "ACME",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/cibolo-trail.jpg",
      "sourcePage": 37,
      "exceptions": [],
      "colorGroupId": "tan"
    },
    {
      "id": "cimarron",
      "name": "Cimarron",
      "sourceName": "CIMARRON",
      "vendor": "CBC",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "country-french-blend",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/cimarron.jpg",
      "sourcePage": 38,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "cloudcroft",
      "name": "Cloudcroft",
      "sourceName": "CLOUDCROFT",
      "vendor": "ACME",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/cloudcroft.jpg",
      "sourcePage": 39,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "coffeyville",
      "name": "Coffeyville",
      "sourceName": "COFFEYVILLE",
      "vendor": "CBC",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White",
        "Light Quarry"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE, LIGHT QUARRY",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/coffeyville.jpg",
      "sourcePage": 40,
      "exceptions": [
        "Light Quarry is explicitly listed as an additional all-brick mortar option."
      ],
      "colorGroupId": "tan"
    },
    {
      "id": "commercial-antique",
      "name": "Commercial Antique",
      "sourceName": "COMMERCIAL ANTIQUE",
      "vendor": "CBC",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/commercial-antique.jpg",
      "sourcePage": 41,
      "exceptions": [],
      "colorGroupId": "tan"
    },
    {
      "id": "creedmoore",
      "name": "Creedmoore",
      "sourceName": "CREEDMOORE",
      "vendor": "ACME",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [
        "Blush"
      ],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [],
      "stoneMortar": null,
      "imagePath": "assets/bricks/creedmoore.jpg",
      "sourcePage": 42,
      "exceptions": [
        "No stone options are approved for this brick."
      ],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "cromwell",
      "name": "Cromwell",
      "sourceName": "CROMWELL",
      "vendor": "CBC",
      "colorGroup": "Red",
      "sourceColorGroup": "RED",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/cromwell.jpg",
      "sourcePage": 43,
      "exceptions": [],
      "colorGroupId": "red"
    },
    {
      "id": "copperas-cove",
      "name": "Copperas Cove",
      "sourceName": "COPPERAS COVE",
      "vendor": "ACME",
      "colorGroup": "Red",
      "sourceColorGroup": "RED",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/copperas-cove.jpg",
      "sourcePage": 44,
      "exceptions": [],
      "colorGroupId": "red"
    },
    {
      "id": "culberson",
      "name": "Culberson",
      "sourceName": "CULBERSON",
      "vendor": "Triangle",
      "colorGroup": "Red",
      "sourceColorGroup": "RED",
      "undertones": [
        "Brown"
      ],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/culberson.jpg",
      "sourcePage": 45,
      "exceptions": [],
      "colorGroupId": "red"
    },
    {
      "id": "elderwood",
      "name": "Elderwood",
      "sourceName": "ELDERWOOD",
      "vendor": "ACME",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop",
        "powder-gray-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/elderwood.jpg",
      "sourcePage": 46,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "fire-oak",
      "name": "Fire Oak",
      "sourceName": "FIRE OAK",
      "vendor": "Meridian",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "ashland-grey",
        "blanco-sawn-chop",
        "blue-marble",
        "edinburgh",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/fire-oak.jpg",
      "sourcePage": 47,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "flint-ranch",
      "name": "Flint Ranch",
      "sourceName": "FLINT RANCH",
      "vendor": "Meridian",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL : STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-marble",
        "granbury-cream-chopped",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/flint-ranch.jpg",
      "sourcePage": 48,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "foggy-morning",
      "name": "Foggy Morning",
      "sourceName": "FOGGY MORNING",
      "vendor": "Meridian",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [
        "Red"
      ],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/foggy-morning.jpg",
      "sourcePage": 49,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "frostwood",
      "name": "Frostwood",
      "sourceName": "FROSTWOOD",
      "vendor": "ACME",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/frostwood.jpg",
      "sourcePage": 50,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "germantown",
      "name": "Germantown",
      "sourceName": "GERMANTOWN",
      "vendor": "Claymex",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [
        "Blush"
      ],
      "brickSize": "Queen",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "QUEEN SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/germantown.jpg",
      "sourcePage": 51,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "georgetown",
      "name": "Georgetown",
      "sourceName": "GEORGETOWN",
      "vendor": "Triangle",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/georgetown.jpg",
      "sourcePage": 52,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "glacier-bay",
      "name": "Glacier Bay",
      "sourceName": "GLACIER BAY",
      "vendor": "ACME",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/glacier-bay.jpg",
      "sourcePage": 53,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "glistening-springs",
      "name": "Glistening Springs",
      "sourceName": "GLISTENING SPRINGS",
      "vendor": "Meridian",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": null,
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL:",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY",
      "approvedStoneIds": [
        "blanco-ledgestone",
        "blanco-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/glistening-springs.jpg",
      "sourcePage": 54,
      "exceptions": [
        "Selection level is blank in source."
      ],
      "colorGroupId": "light-gray"
    },
    {
      "id": "greyson",
      "name": "Greyson",
      "sourceName": "GREYSON",
      "vendor": "Master Brick",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "brazos-canyon-ledgestone",
        "sonoma-charcoal"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/greyson.jpg",
      "sourcePage": 55,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "grey-fog",
      "name": "Grey Fog",
      "sourceName": "GREY FOG",
      "vendor": "ACME",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "powder-gray-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/grey-fog.jpg",
      "sourcePage": 56,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "hamilton",
      "name": "Hamilton",
      "sourceName": "HAMILTON",
      "vendor": "General Shale",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM/TAUPE",
      "undertones": [],
      "brickSize": "Queen",
      "selectionLevel": "Level 2",
      "selectionCode": "BKU02",
      "sourceLevelText": "QUEEN SIZE / LEVEL 2: BKU02",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "country-french-blend",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/hamilton.jpg",
      "sourcePage": 57,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "hickory",
      "name": "Hickory",
      "sourceName": "HICKORY",
      "vendor": "CBC",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/hickory.jpg",
      "sourcePage": 58,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "highstone",
      "name": "Highstone",
      "sourceName": "HIGHSTONE",
      "vendor": "ACME",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "country-french-blend"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/highstone.jpg",
      "sourcePage": 59,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "hillstone",
      "name": "Hillstone",
      "sourceName": "HILLSTONE",
      "vendor": "Binsa",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/hillstone.jpg",
      "sourcePage": 60,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "hollister",
      "name": "Hollister",
      "sourceName": "HOLLISTER",
      "vendor": "CBC",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/hollister.jpg",
      "sourcePage": 61,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "huntington",
      "name": "Huntington",
      "sourceName": "HUNTINGTON",
      "vendor": "CBC",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/huntington.jpg",
      "sourcePage": 62,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "jefferson-park",
      "name": "Jefferson Park",
      "sourceName": "JEFFERSON PARK",
      "vendor": "Triangle",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/jefferson-park.jpg",
      "sourcePage": 63,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "knob-hill",
      "name": "Knob Hill",
      "sourceName": "KNOB HILL",
      "vendor": "Triangle",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [
        "Blush"
      ],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL : STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/knob-hill.jpg",
      "sourcePage": 64,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "london-fog",
      "name": "London Fog",
      "sourceName": "LONDON FOG",
      "vendor": "Master Brick",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": null,
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL:",
      "allBrickMortarOptions": [],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS:",
      "approvedStoneIds": [],
      "stoneMortar": null,
      "imagePath": "assets/bricks/london-fog.jpg",
      "sourcePage": 65,
      "exceptions": [
        "Stone options, selection level, and mortar options are blank in source; do not infer values."
      ],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "mccloud",
      "name": "Mccloud",
      "sourceName": "MCCLOUD",
      "vendor": "CBC",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [
        "Blush"
      ],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/mccloud.jpg",
      "sourcePage": 66,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "mocha-brown-antique",
      "name": "Mocha Brown Antique",
      "sourceName": "MOCHA BROWN ANTIQUE",
      "vendor": "ACME",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/mocha-brown-antique.jpg",
      "sourcePage": 67,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "monte-carlo",
      "name": "Monte Carlo",
      "sourceName": "MONTE CARLO",
      "vendor": "ACME",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/monte-carlo.jpg",
      "sourcePage": 68,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "mt-denali",
      "name": "Mt Denali",
      "sourceName": "MT DENALI",
      "vendor": "Master Brick",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/mt-denali.jpg",
      "sourcePage": 69,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "old-francisco",
      "name": "Old Francisco",
      "sourceName": "OLD FRANCISCO",
      "vendor": "ACME",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped",
        "blanco-flagstone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/old-francisco.jpg",
      "sourcePage": 70,
      "exceptions": [
        "Source lists 'Blanco Sawn Chop / Flag'; represented as both Blanco Sawn Chop and Blanco Flagstone."
      ],
      "colorGroupId": "brown"
    },
    {
      "id": "old-henry",
      "name": "Old Henry",
      "sourceName": "OLD HENRY",
      "vendor": "Triangle",
      "colorGroup": "Red",
      "sourceColorGroup": "RED",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "granbury-quarry-chop",
        "texas-mix-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/old-henry.jpg",
      "sourcePage": 71,
      "exceptions": [],
      "colorGroupId": "red"
    },
    {
      "id": "oxford-place",
      "name": "Oxford Place",
      "sourceName": "OXFORD PLACE",
      "vendor": "ACME",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-marble",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/oxford-place.jpg",
      "sourcePage": 72,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "ozark-smoke",
      "name": "Ozark Smoke",
      "sourceName": "OZARK SMOKE",
      "vendor": "Meridian",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: WHITE, GRAY",
      "approvedStoneIds": [
        "blue-marble"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/ozark-smoke.jpg",
      "sourcePage": 73,
      "exceptions": [
        "Source says 'Gray'; normalized to 'Natural Gray' for UI."
      ],
      "colorGroupId": "light-gray"
    },
    {
      "id": "palladium",
      "name": "Palladium",
      "sourceName": "PALLADIUM",
      "vendor": "ACME",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM/TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/palladium.jpg",
      "sourcePage": 74,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "porter",
      "name": "Porter",
      "sourceName": "PORTER",
      "vendor": "Triangle",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "texas-mix-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/porter.jpg",
      "sourcePage": 75,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "port-edwards",
      "name": "Port Edwards",
      "sourceName": "PORT EDWARDS",
      "vendor": "Master Brick",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL STD: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/port-edwards.jpg",
      "sourcePage": 76,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "post-rock",
      "name": "Post Rock",
      "sourceName": "POST ROCK",
      "vendor": "Meridian",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/post-rock.jpg",
      "sourcePage": 77,
      "exceptions": [],
      "colorGroupId": "tan"
    },
    {
      "id": "rain-lily",
      "name": "Rain Lily",
      "sourceName": "RAIN LILY",
      "vendor": "Meridian",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR: WHITE REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/rain-lily.jpg",
      "sourcePage": 78,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "ridgemont",
      "name": "Ridgemont",
      "sourceName": "RIDGEMONT",
      "vendor": "Meridian",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [
        "Blush"
      ],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/ridgemont.jpg",
      "sourcePage": 79,
      "exceptions": [],
      "colorGroupId": "tan"
    },
    {
      "id": "rushmore",
      "name": "Rushmore",
      "sourceName": "RUSHMORE",
      "vendor": "Master Brick",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "blue-marble",
        "bluebonnet-chopped",
        "bluebonnet-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/rushmore.jpg",
      "sourcePage": 80,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "sable-oak",
      "name": "Sable Oak",
      "sourceName": "SABLE OAK",
      "vendor": "ACME",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/sable-oak.jpg",
      "sourcePage": 81,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "saratoga",
      "name": "Saratoga",
      "sourceName": "SARATOGA",
      "vendor": "Meridian",
      "colorGroup": "Tan",
      "sourceColorGroup": "TAN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "texas-mix-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/saratoga.jpg",
      "sourcePage": 82,
      "exceptions": [],
      "colorGroupId": "tan"
    },
    {
      "id": "shadow-falls",
      "name": "Shadow Falls",
      "sourceName": "SHADOW FALLS",
      "vendor": "Meridian",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: WHITE, NATURAL GRAY",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop",
        "granbury-cream-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/shadow-falls.jpg",
      "sourcePage": 83,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "shadow-ridge",
      "name": "Shadow Ridge",
      "sourceName": "SHADOW RIDGE",
      "vendor": "Triangle",
      "colorGroup": "Black",
      "sourceColorGroup": "BLACK",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: WHITE, GRAY",
      "approvedStoneIds": [
        "blanco-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/shadow-ridge.jpg",
      "sourcePage": 84,
      "exceptions": [
        "Paint exception: select one paint color only; source says to contact Coordinator when selecting.",
        "Source says 'Gray'; normalized to 'Natural Gray' for UI."
      ],
      "colorGroupId": "black"
    },
    {
      "id": "silverado",
      "name": "Silverado",
      "sourceName": "SILVERADO",
      "vendor": "Meridian",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/silverado.jpg",
      "sourcePage": 85,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "silverbay",
      "name": "Silverbay",
      "sourceName": "SILVERBAY",
      "vendor": "Master Brick",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-marble",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/silverbay.jpg",
      "sourcePage": 86,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "smokey",
      "name": "Smokey",
      "sourceName": "SMOKEY",
      "vendor": "Binsa",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/smokey.jpg",
      "sourcePage": 87,
      "exceptions": [],
      "colorGroupId": "brown"
    },
    {
      "id": "smokey-river",
      "name": "Smokey River",
      "sourceName": "SMOKEY RIVER",
      "vendor": "Triangle",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [
        "Blush"
      ],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/smokey-river.jpg",
      "sourcePage": 88,
      "exceptions": [],
      "colorGroupId": "light-gray"
    },
    {
      "id": "snowy-mountain",
      "name": "Snowy Mountain",
      "sourceName": "SNOWY MOUNTAIN",
      "vendor": "Master Brick",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL : STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/snowy-mountain.jpg",
      "sourcePage": 89,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "steel-manor",
      "name": "Steel Manor",
      "sourceName": "STEEL MANOR",
      "vendor": "Meridian",
      "colorGroup": "Medium / Dark Gray",
      "sourceColorGroup": "MEDIUM / DARK GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-marble",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/steel-manor.jpg",
      "sourcePage": 90,
      "exceptions": [],
      "colorGroupId": "medium-dark-gray"
    },
    {
      "id": "stone-bay",
      "name": "Stone Bay",
      "sourceName": "STONE BAY",
      "vendor": "ACME",
      "colorGroup": "Light Gray",
      "sourceColorGroup": "LIGHT GRAY",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White",
        "Natural Gray"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: WHITE PREFERRED NATURAL GRAY ACCEPTED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/stone-bay.jpg",
      "sourcePage": 91,
      "exceptions": [
        "White mortar is preferred; Natural Gray is accepted."
      ],
      "colorGroupId": "light-gray"
    },
    {
      "id": "summer-ash",
      "name": "Summer Ash",
      "sourceName": "SUMMER ASH",
      "vendor": "Meridian",
      "colorGroup": "Light Cream / Taupe",
      "sourceColorGroup": "LIGHT CREAM / TAUPE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "powder-gray-chopped"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/summer-ash.jpg",
      "sourcePage": 92,
      "exceptions": [],
      "colorGroupId": "light-cream-taupe"
    },
    {
      "id": "waco-skies",
      "name": "Waco Skies",
      "sourceName": "WACO SKIES",
      "vendor": "Meridian",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": null,
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL:",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped",
        "texas-mix-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/waco-skies.jpg",
      "sourcePage": 93,
      "exceptions": [
        "Brazos Canyon Ledgestone appears twice in source; duplicate removed.",
        "Selection level is blank in source."
      ],
      "colorGroupId": "white"
    },
    {
      "id": "whitefield",
      "name": "Whitefield",
      "sourceName": "WHITEFIELD",
      "vendor": "CBC",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/whitefield.jpg",
      "sourcePage": 94,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "white-sage",
      "name": "White Sage",
      "sourceName": "WHITE SAGE",
      "vendor": "ACME",
      "colorGroup": "Red",
      "sourceColorGroup": "RED",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "eastern-buff-sawn-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/white-sage.jpg",
      "sourcePage": 95,
      "exceptions": [],
      "colorGroupId": "red"
    },
    {
      "id": "winterstone",
      "name": "Winterstone",
      "sourceName": "WINTERSTONE",
      "vendor": "ACME",
      "colorGroup": "White",
      "sourceColorGroup": "WHITE",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Level 1",
      "selectionCode": "BKU01",
      "sourceLevelText": "KING SIZE / LEVEL 1: BKU01",
      "allBrickMortarOptions": [
        "White"
      ],
      "requiredAllBrickMortar": "White",
      "sourceMortarText": "MORTAR OPTIONS: WHITE ONLY REQUIRED",
      "approvedStoneIds": [
        "aspen-blend-chopped",
        "aspen-blend-ledgestone",
        "blanco-sawn-chop",
        "blue-moon-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/winterstone.jpg",
      "sourcePage": 96,
      "exceptions": [],
      "colorGroupId": "white"
    },
    {
      "id": "yukon",
      "name": "Yukon",
      "sourceName": "YUKON",
      "vendor": "CBC",
      "colorGroup": "Brown",
      "sourceColorGroup": "BROWN",
      "undertones": [],
      "brickSize": "King",
      "selectionLevel": "Standard",
      "selectionCode": null,
      "sourceLevelText": "KING SIZE / LEVEL: STANDARD",
      "allBrickMortarOptions": [
        "Natural Gray",
        "White"
      ],
      "requiredAllBrickMortar": null,
      "sourceMortarText": "MORTAR OPTIONS: NATURAL GRAY, WHITE",
      "approvedStoneIds": [
        "blanco-sawn-chop",
        "brazos-canyon-ledgestone",
        "granbury-cream-chopped",
        "granbury-quarry-chop"
      ],
      "stoneMortar": "White",
      "imagePath": "assets/bricks/yukon.jpg",
      "sourcePage": 97,
      "exceptions": [],
      "colorGroupId": "brown"
    }
  ]
};

window.BRICK_STONE_DB.getBrick = function (idOrName) {
  const key = String(idOrName || "").trim().toLowerCase();
  return this.bricks.find(
    brick =>
      brick.id.toLowerCase() === key ||
      brick.name.toLowerCase() === key ||
      brick.sourceName.toLowerCase() === key
  ) || null;
};

window.BRICK_STONE_DB.getApprovedStones = function (idOrName) {
  const brick = this.getBrick(idOrName);
  if (!brick) return [];
  return brick.approvedStoneIds
    .map(id => this.stones[id])
    .filter(Boolean);
};

window.BRICK_STONE_DB.getBricksByColorGroup = function (colorGroup) {
  const key = String(colorGroup || "").trim().toLowerCase();
  return this.bricks.filter(
    brick =>
      brick.colorGroup.toLowerCase() === key ||
      brick.colorGroupId.toLowerCase() === key
  );
};

window.BRICK_STONE_DB.getExceptions = function () {
  return this.bricks.filter(brick => brick.exceptions.length > 0);
};
