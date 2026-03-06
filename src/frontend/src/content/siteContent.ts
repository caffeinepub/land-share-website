export interface Document {
  title: string;
  date?: string;
  description?: string;
  href: string;
}

// Property Details Data Model
export interface Plot {
  dagNo: string;
  areaDecimals: number;
}

export interface KhatianReference {
  number: string;
  type?: string; // e.g., "RS", "Current", "Original"
  notes?: string;
}

export interface PropertyRecord {
  mouza: string;
  block: string;
  district: string;
  state: string;
  ps?: string; // Police Station (optional)
  jl?: string; // JL number (optional)
  khatianReferences: KhatianReference[];
  plots: Plot[];
  totalPlots?: number;
  totalAcres?: number;
  totalDecimals?: number;
  notes?: string; // Narrative notes, placeholders, discrepancies
}

export interface PropertyCategory {
  categoryName: string;
  categoryDescription?: string; // Optional explanation for the category
  records: PropertyRecord[];
}

export const siteContent = {
  title: "Land Share Property Claim",
  subtitle: "Documenting our rightful ownership of family land property",

  navigation: [
    { id: "introduction", label: "Introduction" },
    { id: "owners", label: "About Us" },
    { id: "property", label: "Property Details" },
    { id: "claim", label: "Our Claim" },
    { id: "documents", label: "Documents" },
    { id: "contact", label: "Contact" },
  ],

  introduction: {
    title: "Introduction",
    content: [
      "This website serves as a formal record and presentation of our rightful claim to a share of family land property. As siblings and legal heirs, we are documenting our position regarding both undisputed and disputed portions of the property in question.",
      "The information presented here represents our understanding of the facts, our legal position, and the basis for our claim. We have compiled this documentation to provide transparency and clarity regarding our ownership rights.",
    ],
  },

  owners: {
    title: "About the Owners",
    content: [
      "We are siblings who have inherited rightful shares of family land property through legal succession. Our claim is based on established inheritance rights, family records, and applicable property laws.",
      "As co-owners, we are committed to resolving any disputes through proper legal channels while maintaining accurate documentation of our rightful ownership. This website serves as a central repository for information related to our claim.",
    ],
  },

  // Structured Property Details
  propertyDetails: {
    title: "Property Details",
    categories: [
      {
        categoryName: "Undisputed Inherited Land/Property",
        records: [
          {
            mouza: "Barbajitpur",
            block: "Sutahata II",
            district: "Purba Medinipur",
            state: "West Bengal",
            jl: "59",
            khatianReferences: [{ number: "1094", type: "Khatian" }],
            plots: [
              { dagNo: "2", areaDecimals: 22 },
              { dagNo: "45", areaDecimals: 22 },
              { dagNo: "75", areaDecimals: 43 },
              { dagNo: "154", areaDecimals: 2 },
              { dagNo: "626", areaDecimals: 18 },
              { dagNo: "696", areaDecimals: 14 },
              { dagNo: "1276", areaDecimals: 0.0 },
              { dagNo: "1283", areaDecimals: 0.03 },
              { dagNo: "1286", areaDecimals: 0.0 },
              { dagNo: "1287", areaDecimals: 0.01 },
              { dagNo: "1288", areaDecimals: 0.01 },
              { dagNo: "1296", areaDecimals: 0.01 },
              { dagNo: "1297", areaDecimals: 0.01 },
              { dagNo: "1299", areaDecimals: 0.07 },
              { dagNo: "1300", areaDecimals: 0.03 },
              { dagNo: "1298/2474", areaDecimals: 0.01 },
              { dagNo: "2298/2475", areaDecimals: 0.03 },
              { dagNo: "2298/2477", areaDecimals: 0.01 },
              { dagNo: "113/2576", areaDecimals: 0.15 },
            ],
            totalPlots: 19,
            totalAcres: 1.67,
            notes:
              "Location (A): At Mouza Barbajitpur, Block Sutahata II, Dist Purba Medinipur, State West Bengal.",
          },
          {
            mouza: "Kumarpur",
            block: "Sutahata II",
            district: "Purba Medinipur",
            state: "West Bengal",
            ps: "Sutahata",
            jl: "58",
            khatianReferences: [{ number: "2120", type: "Khatian" }],
            plots: [
              { dagNo: "2477", areaDecimals: 73 },
              { dagNo: "2634", areaDecimals: 58 },
              { dagNo: "1963/3802", areaDecimals: 45 },
            ],
            totalPlots: 3,
            totalAcres: 1.76,
            notes:
              "Location (B): At Mouza Kumarpur, Block Sutahata II, Dist Purba Medinipur, West Bengal.",
          },
          {
            mouza: "Barbajitpur",
            block: "Sutahata II",
            district: "Purba Medinipur",
            state: "West Bengal",
            khatianReferences: [{ number: "109", type: "Khatian" }],
            plots: [{ dagNo: "963", areaDecimals: 20 }],
            totalPlots: 1,
            totalDecimals: 20,
            notes:
              "Location (C): At Barbajitpur, Block Sutahata II, Dist Purba Medinipur, West Bengal. Grand total of all undisputed plots: 23 with 3.63 acres.",
          },
        ],
      },
      {
        categoryName: "Disputed Land/Property Yet to be Mutated",
        records: [
          {
            mouza: "Mrinalnagar",
            block: "Kakdwip",
            district: "South 24 Parganas",
            state: "West Bengal",
            khatianReferences: [
              { number: "400/476 & 3233", type: "Original Khatian & Dag No." },
              { number: "255", type: "Current Khatian" },
            ],
            plots: [
              { dagNo: "3233", areaDecimals: 13 },
              { dagNo: "3234", areaDecimals: 272 },
              { dagNo: "2777", areaDecimals: 0 },
              { dagNo: "2778", areaDecimals: 0 },
              { dagNo: "2779", areaDecimals: 0 },
              { dagNo: "2780", areaDecimals: 0 },
              { dagNo: "2781", areaDecimals: 0 },
              { dagNo: "2781/6512", areaDecimals: 0 },
            ],
            totalPlots: 7,
            totalAcres: 0.064,
            notes:
              "Original total: 2.85 acres (13 Dec + 2.72 Dec). Our father Late Sudhamoy Khutia was the owner of 85 Decimal as per Deed vide No. [PLACEHOLDER: deed number] dt. [PLACEHOLDER: deed date]. Current Khatian No. is 255. Currently as per Banglarbhumi app: Total plots 7 with 0.064 acres (Dag No. 2777, 2778, 2779, 2780, 2781 & 2781/6512). Discrepancy observed between original records and current Banglarbhumi app data.",
          },
        ],
      },
      {
        categoryName:
          "Disputed Land & Property with Maternal Uncles yet to be mutated",
        categoryDescription:
          "This land legally belongs (in part) to our late mother, but our maternal uncles are currently holding or controlling it. The mutation (name transfer in land records) has not yet been completed. Because of this, the land still appears in old or incorrect records, and our mother's rightful share is not yet officially recorded in government land records. This dispute is now before the Appellate Authority.",
        records: [
          {
            mouza: "Hateberia",
            block: "Sutahata II",
            district: "Purba Medinipur",
            state: "West Bengal",
            ps: "Bhawanipur/Haldia",
            jl: "167",
            khatianReferences: [
              {
                number: "546",
                type: "RS Khatian",
                notes: "JL: 167, Total area: 4.84 acres, Total Plots: 24",
              },
              {
                number: "263",
                type: "RS Khatian",
                notes: "JL: 167, Total area: 1.25 acres, Total Plots: 23",
              },
            ],
            plots: [
              { dagNo: "1", areaDecimals: 0 },
              { dagNo: "2", areaDecimals: 0 },
              { dagNo: "3", areaDecimals: 0 },
              { dagNo: "4", areaDecimals: 0 },
              { dagNo: "5", areaDecimals: 0 },
              { dagNo: "6", areaDecimals: 0 },
              { dagNo: "7", areaDecimals: 0 },
              { dagNo: "8", areaDecimals: 0 },
              { dagNo: "9", areaDecimals: 0 },
              { dagNo: "10", areaDecimals: 0 },
              { dagNo: "11", areaDecimals: 0 },
              { dagNo: "22", areaDecimals: 0 },
              { dagNo: "23", areaDecimals: 0 },
              { dagNo: "25", areaDecimals: 0 },
              { dagNo: "26", areaDecimals: 0 },
              { dagNo: "27", areaDecimals: 0 },
              { dagNo: "28", areaDecimals: 0 },
              { dagNo: "3/5726", areaDecimals: 0 },
              { dagNo: "3/5727", areaDecimals: 0 },
              { dagNo: "3/5728", areaDecimals: 0 },
              { dagNo: "3/5729", areaDecimals: 0 },
              { dagNo: "3/5730", areaDecimals: 0 },
              { dagNo: "10/5731", areaDecimals: 0 },
            ],
            totalPlots: 47,
            totalAcres: 6.09,
            notes:
              "RS Khatian No. 546 (JL: 167): 24 plots with 4.84 acres.\nRS Khatian No. 263 (JL: 167): 23 plots with 1.25 acres.\nCombined total for Hateberia (JL 167): 6.09 acres.\n\nOriginally owned by maternal grandfather late Nanigopal Maji of Vill: Hateberia, Purba Medinipur, West Bengal.\n\nDeceased mother late Kananbala Khutia w/o deceased Late Sudhamoy Khutia & D/o deceased late Nanigopal Maji is the legal owner of 1/8 share of this entire Land/Property.\n\nAn appeal case has been filed on 13th February 2026 in the Court of Appellate Authority, O/o ADM & DL & LRO/Purba Medinipur/West Bengal against maternal uncles of Hateberia & Radhaballabchak, PS: Bhawanipur/Haldia, Purba Medinipur, West Bengal.",
          },
          {
            mouza: "Radhaballabchak",
            block: "Sutahata II",
            district: "Purba Medinipur",
            state: "West Bengal",
            ps: "Bhawanipur/Haldia",
            jl: "165",
            khatianReferences: [
              {
                number: "320",
                type: "RS Khatian",
                notes: "JL: 165, Total area: 9.35 acres, Total Plots: 10",
              },
              {
                number: "145",
                type: "RS Khatian",
                notes: "JL: 165, Total area: 1.18 acres, Total Plots: 8",
              },
            ],
            plots: [
              { dagNo: "22", areaDecimals: 0 },
              { dagNo: "23", areaDecimals: 0 },
              { dagNo: "22/894", areaDecimals: 0 },
              { dagNo: "22/966", areaDecimals: 0 },
              { dagNo: "22/967", areaDecimals: 0 },
              { dagNo: "22/969", areaDecimals: 0 },
              { dagNo: "22/970", areaDecimals: 0 },
              { dagNo: "22/971", areaDecimals: 0 },
            ],
            totalPlots: 18,
            totalAcres: 10.53,
            notes:
              "RS Khatian No. 320 (JL: 165): 10 plots with 9.35 acres.\nKhatian No. 145 (JL: 165): 8 plots with 1.18 acres.\nCombined total for Radhaballabchak (JL 165): 10.53 acres.\n\nOriginally owned by maternal grandfather late Nanigopal Maji of Vill: Hateberia/Radhaballabchak, Purba Medinipur, West Bengal.\n\nGrand total land area (Hateberia + Radhaballabchak): 16.62 acres (approximately).\n\nDeceased mother late Kananbala Khutia w/o deceased Late Sudhamoy Khutia & D/o deceased late Nanigopal Maji is the legal owner of 1/8 share of this entire Land/Property.\n\nAn appeal case has been filed on 13th February 2026 in the Court of Appellate Authority, O/o ADM & DL & LRO/Purba Medinipur/West Bengal against maternal uncles of Hateberia & Radhaballabchak, PS: Bhawanipur/Haldia, Purba Medinipur, West Bengal.",
          },
        ],
      },
      {
        categoryName: "Other Land/Property - Missing in Banglarbhumi App",
        records: [
          {
            mouza: "Jalpai (5th Bhukhanda)",
            block: "Nandigram",
            district: "Purba Medinipur",
            state: "West Bengal",
            khatianReferences: [{ number: "222", type: "Khatian" }],
            plots: [
              { dagNo: "564", areaDecimals: 0 },
              { dagNo: "565", areaDecimals: 0 },
              { dagNo: "566", areaDecimals: 0 },
              { dagNo: "567", areaDecimals: 0 },
            ],
            totalPlots: 4,
            totalDecimals: 58.5,
            notes:
              "Land about 58 & 1/2 Decimal of land, out of which 19 & 1/2 Dec owned by father late Sudhamoy Khutia under Khatian 222, plots 564, 565, 566 & 567 at Jalpai (5th Bhukhanda), Block Nandigram, Purba Medinipur, West Bengal. Plots are now missing in Banglarbhumi App.",
          },
        ],
      },
    ] as PropertyCategory[],
  },

  claim: {
    title: "Our Claim Summary",
    content: [
      "Our claim is based on legitimate inheritance rights as legal heirs to the family property. We assert our rightful share of both the undisputed portions of the property, where ownership is clear, and the disputed portions, where we are working through appropriate legal processes to establish and confirm our rights.",
      "We are committed to resolving all matters through proper legal channels and maintaining accurate, transparent documentation of our position. Our claim is supported by family records, legal documentation, and applicable inheritance laws.",
      "This presentation of our claim is made in good faith and represents our understanding of our legal rights and entitlements to the property in question.",
    ],
  },

  documentsSection: {
    title: "Documents & References",
    emptyState:
      "Supporting documents will be added here as they become available and appropriate to share publicly.",
  },

  documents: [
    // Example document structure - owners can add their documents here
    // {
    //   title: "Property Survey Document",
    //   date: "January 2026",
    //   description: "Official survey showing property boundaries and measurements.",
    //   href: "/assets/documents/survey.pdf"
    // }
  ] as Document[],

  contact: {
    title: "Contact Information",
    content:
      "For inquiries regarding this property claim, legal matters, or to request additional documentation, please contact us via email. We will respond to legitimate inquiries in a timely manner.",
    email: "khutiaashim@gmail.com",
  },

  disclaimer:
    "This website is provided for informational purposes only and does not constitute legal advice. The content represents the position and understanding of the property owners regarding their claim. All legal matters should be addressed through appropriate legal channels and with qualified legal counsel. The information presented here is believed to be accurate but is subject to verification and legal determination.",
};
