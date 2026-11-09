// Single source of truth for Island Rock Golf Estate project facts.
// Sourced from the owner's answers, 9 November 2026 (see docs/golf-website-prd.md).
// A fact with no confirmed value is left undefined here and must not be rendered
// as a specific claim (price, operator, designer name, etc).

export const FACTS = {
    name: "Island Rock Golf Estate",
    location: "Jangamo District, Inhambane Province, Mozambique",
    sizeHectares: 375,
    stage: "Conceptualised — nothing built yet",

    villas: {
        planned: 150,
        sizeRangeM2: "150–250",
        // Pricing not yet confirmed — do not display specific prices.
    },

    golf: {
        holes: 18,
        par: 72,
        // Designer (Phil Jacobs) listed in the project's own letter, but do not
        // name him publicly until a signed agreement allows it.
    },

    hotel: {
        rooms: 100,
        roomSizeM2: 50,
        // Operator not yet signed — never name an operator.
    },

    openingOrder: [
        "Restaurant and beach bar",
        "Golf course",
        "Hotel and villas, in phases",
    ],

    flights: {
        nonStopFrom: ["Maputo", "Vilankulo"],
        carrier: "LAM",
        // No direct non-stop service from Johannesburg — connect via Maputo.
    },

    positioningLine: "A 375-hectare golf estate on Mozambique's Indian Ocean coast.",
} as const;
