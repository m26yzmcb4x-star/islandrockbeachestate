// Single source of truth for Island Rock Golf Estate project facts.
//
// Two generations of source data:
//  - 9 Nov 2026 owner answers (see docs/golf-website-prd.md)
//  - 15 Sept 2026 masterplan (Model 4, AutoCAD) + 14 Sept 2026 survey contours,
//    verified in the 10 Nov 2026 improvement PRD (see docs/golf-website-improvement-prd.md)
//    and the "Island Rock Terrain Model" reference (terrainModelUrl below).
// Where the two disagree, the masterplan wins (that PRD's R1).
//
// ASSUMPTION FLAGGED FOR THE DEVELOPER: villas.planned is set to 100 to match
// the drawn housing stands (the DXF housing layer holds exactly 100 outlines).
// The site previously said 150, which has no support in the current drawing.
// If 150 is still the real target (more stands to be added later), change
// this back and say so explicitly in copy -- don't leave it silently wrong.
//
// A fact with no confirmed value is left undefined here and must not be
// rendered as a specific claim (price, operator, designer name, course par,
// etc). Words like "championship", "signature" and "par 72" need the course
// designer's written confirmation before they're used anywhere.

export const FACTS = {
    name: "Island Rock Golf Estate",
    location: "Jangamo District, Inhambane Province, Mozambique",
    sizeHectares: 375, // consistent with the masterplan's ~390 ha aerial extent
    stage: "Conceptualised — nothing built yet",

    site: {
        lengthKm: 3.65, // north to south
        widthKm: 1.78, // east to west
        oceanFrontageKm: 3.4,
        oceanDirection: "east and south-east",
    },

    villas: {
        planned: 100, // see ASSUMPTION note above -- was 150, masterplan draws 100 stands
        standSizeM2: "roughly 28 x 28 m per stand",
        // Living-area and architecture (thatch vs the renders' flat roofs/stone)
        // are unconfirmed -- do not assert a specific material or m² range.
    },

    golf: {
        holes: 18,
        routingComplete: true, // full 18-hole routing dated 15 Sept 2026 exists
        // par, "championship", "signature": withheld until the course designer
        // confirms them in writing.
        notableHoles: {
            hole1: "runs along the dune top, about 37 to 41 m above the beach, ocean visible from the tee",
            hole2: "climbs the dune to about 53 m, ocean visible from the tee",
            hole3: "a par 3 that falls from the dune into the valley, to a green at about 5 m",
        },
        routingSummary: "Holes 1 to 9 play north from the clubhouse to the halfway house. Holes 10 to 18 return south, finishing beside the driving range.",
        irrigation: "Borehole water, solar-pumped",
    },

    clubhouse: {
        position: "At the southern end of the course, beside the first tee",
        elevationM: 35,
        hasHalfwayHouse: true, // separate building at the northern turn
        // Scale (a compact building vs the larger lounge-and-shop shown in the
        // renders) is unconfirmed -- do not assert a specific size.
    },

    hotel: {
        rooms: 100,
        roomSizeM2: 50,
        position: "On the beach at the estate's southern tip, roughly 400 m south of the clubhouse",
        elevationM: 20,
        // Operator not yet signed -- never name an operator.
    },

    openingOrder: [
        "Restaurant and beach bar",
        "Golf course",
        "Hotel and villas, in phases",
    ],
    // Exact position of the restaurant and beach bar is not yet marked on the
    // plan -- treat as still to be confirmed, not as a fixed fact.

    flights: {
        nonStopFrom: ["Maputo", "Vilankulo"],
        carrier: "LAM",
        // No direct non-stop service from Johannesburg -- connect via Maputo.
    },

    golfZoneSource: "https://clubofmozambique.com/news/mozambique-creates-special-golf-tourism-zone-in-inhambane-province/",

    terrainModelUrl: "https://claude.ai/artifact/T3Hp9A9XmGft3Jwqb3Szwc",

    positioningLine: "A 375-hectare golf estate on Mozambique's Indian Ocean coast.",
} as const;
