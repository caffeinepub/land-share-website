export interface Document {
  title: string;
  date?: string;
  description?: string;
  href: string;
}

export const siteContent = {
  title: "Land Share Property Claim",
  subtitle: "Documenting our rightful ownership of family land property",
  
  navigation: [
    { id: "introduction", label: "Introduction" },
    { id: "owners", label: "About Us" },
    { id: "property", label: "Property" },
    { id: "claim", label: "Our Claim" },
    { id: "documents", label: "Documents" },
    { id: "contact", label: "Contact" }
  ],

  introduction: {
    title: "Introduction",
    content: [
      "This website serves as a formal record and presentation of our rightful claim to a share of family land property. As siblings and legal heirs, we are documenting our position regarding both undisputed and disputed portions of the property in question.",
      "The information presented here represents our understanding of the facts, our legal position, and the basis for our claim. We have compiled this documentation to provide transparency and clarity regarding our ownership rights."
    ]
  },

  owners: {
    title: "About the Owners",
    content: [
      "We are siblings who have inherited rightful shares of family land property through legal succession. Our claim is based on established inheritance rights, family records, and applicable property laws.",
      "As co-owners, we are committed to resolving any disputes through proper legal channels while maintaining accurate documentation of our rightful ownership. This website serves as a central repository for information related to our claim."
    ]
  },

  property: {
    title: "Property Overview",
    content: [
      "The property in question consists of land that has been part of our family holdings. Portions of this property are undisputed, with clear title and ownership records, while other portions are subject to ongoing legal clarification.",
      "We maintain detailed records of property boundaries, historical ownership, and all relevant documentation supporting our claim to our rightful share."
    ],
    details: {
      "Status": "Partially undisputed, partially under legal review",
      "Type": "Land property",
      "Ownership": "Inherited family property",
      "Documentation": "Available upon request"
    }
  },

  claim: {
    title: "Our Claim Summary",
    content: [
      "Our claim is based on legitimate inheritance rights as legal heirs to the family property. We assert our rightful share of both the undisputed portions of the property, where ownership is clear, and the disputed portions, where we are working through appropriate legal processes to establish and confirm our rights.",
      "We are committed to resolving all matters through proper legal channels and maintaining accurate, transparent documentation of our position. Our claim is supported by family records, legal documentation, and applicable inheritance laws.",
      "This presentation of our claim is made in good faith and represents our understanding of our legal rights and entitlements to the property in question."
    ]
  },

  documentsSection: {
    title: "Documents & References",
    emptyState: "Supporting documents will be added here as they become available and appropriate to share publicly."
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
    content: "For inquiries regarding this property claim, legal matters, or to request additional documentation, please contact us via email. We will respond to legitimate inquiries in a timely manner.",
    email: "contact@example.com" // Owners should update this with their actual contact email
  },

  disclaimer: "This website is provided for informational purposes only and does not constitute legal advice. The content represents the position and understanding of the property owners regarding their claim. All legal matters should be addressed through appropriate legal channels and with qualified legal counsel. The information presented here is believed to be accurate but is subject to verification and legal determination."
};
