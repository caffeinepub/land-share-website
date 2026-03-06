import { siteContent } from "../content/siteContent";
import ScannedDocumentsGallery from "./ScannedDocumentsGallery";
import Section from "./Section";

export default function DocumentsSection() {
  return (
    <Section id="documents" title={siteContent.documentsSection.title}>
      <ScannedDocumentsGallery />
    </Section>
  );
}
