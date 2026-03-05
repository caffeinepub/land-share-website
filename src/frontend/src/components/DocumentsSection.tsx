import { FileText } from "lucide-react";
import { type Document, siteContent } from "../content/siteContent";
import Section from "./Section";

export default function DocumentsSection() {
  const hasDocuments = siteContent.documents.length > 0;

  return (
    <Section id="documents" title={siteContent.documentsSection.title}>
      {!hasDocuments ? (
        <div className="text-center py-12 px-4 bg-muted/30 rounded-lg border border-border">
          <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg text-muted-foreground">
            {siteContent.documentsSection.emptyState}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.documents.map((doc: Document) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  {doc.date && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {doc.date}
                    </p>
                  )}
                  {doc.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}
