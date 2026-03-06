# Land Share Website

## Current State
The website documents property claims by Ashim Kumar Khutia and siblings. It includes:
- Hero section with a generated image
- Introduction and About Owners sections
- Structured PropertyDetailsSection with 4 categories (undisputed, disputed Mrinalnagar, disputed with maternal uncles Hateberia/Radhaballabchak, missing Jalpai)
- DocumentsSection (currently empty - shows placeholder text)
- Contact section with email
- SiteFooter with disclaimer

## Requested Changes (Diff)

### Add
- A photo gallery / scanned documents viewer inside DocumentsSection displaying 16 uploaded images (scanned legal documents, khatian records, death certificates, affidavit, heir certificate, Aadhaar card)
- Each scanned image should be labeled with its document type based on content:
  1. RS Khatian No. 263 - Hateberia (Page 1) - 20260306_115523-1.jpg
  2. Legal Heir List - Nanigopal Maji (Page 1: Coparceners 1-2) - 20260306_115658-2.jpg
  3. RS Khatian No. 320 - Radhaballabchak - 20260306_115452-3.jpg
  4. Legal Heir List - Nanigopal Maji (Page: 8/8 Jayananda Maji) - 20260306_115731-4.jpg
  5. Holdia Municipality Heir Certificate - 20260306_115632-5.jpg
  6. Legal Heir List (Coparceners 4-7) - 20260306_115632-5.jpg (actually 20260306_115714-6.jpg)
  7. Aadhaar Card - Asim Kumar Khutia - 20260306_115808-7.jpg (actually 20260306_115808-7.jpg)
  8. RS Khatian No. 263 - Hateberia (Page 1 alt) - 20260306_115510-8.jpg
  9. Affidavit - Ashim Kumar Khutia (Page 1) - 20260306_115821-9.jpg
  10. Affidavit - Ashim Kumar Khutia (Page 2 with heirs table) - 20260306_115833-10.jpg
  11. Legal Heir List (Coparceners 4-7) - 20260306_115615-11.jpg
  12. RS Khatian No. 263 - Hateberia (Page 2) - 20260306_115536-12.jpg
  13. Death Certificate - Nanigopal Maji - 20260306_115757-13.jpg
  14. RS Khatian No. 145 - Radhaballabchak (with grand total) - 20260306_115432-14.jpg
  15. RS Khatian No. 263 - Hateberia (full view) - 20260306_115559-15.jpg
  16. RS Khatian No. 546 - Hateberia - 20260306_115743-16.jpg
- Clicking any image opens a lightbox/modal to view it full size
- Images grouped into categories: Land Records (Khatian), Legal Documents (certificates, affidavit, heir list), Identity Documents (Aadhaar)

### Modify
- DocumentsSection: replace the empty state placeholder with the actual image gallery
- siteContent.ts: update contact email from placeholder to actual email khutiaashim@gmail.com (already done previously - verify)

### Remove
- Nothing removed

## Implementation Plan
1. Create a ScannedDocumentsGallery component with image thumbnails and a lightbox modal
2. Define document metadata (labels, categories, file paths) for all 16 uploaded images
3. Update DocumentsSection to render the ScannedDocumentsGallery
4. Ensure lightbox navigation (prev/next) and close functionality
