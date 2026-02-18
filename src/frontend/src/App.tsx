import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Section from './components/Section';
import DocumentsSection from './components/DocumentsSection';
import { siteContent } from './content/siteContent';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <img 
                  src="/assets/generated/land-hero.dim_1600x900.png" 
                  alt="Land property boundaries illustration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                  {siteContent.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {siteContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <Section 
          id="introduction"
          title={siteContent.introduction.title}
        >
          <div className="prose prose-lg max-w-none text-foreground">
            {siteContent.introduction.content.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        {/* About Owners Section */}
        <Section 
          id="owners"
          title={siteContent.owners.title}
          className="bg-accent/20"
        >
          <div className="prose prose-lg max-w-none text-foreground">
            {siteContent.owners.content.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        {/* Property Overview Section */}
        <Section 
          id="property"
          title={siteContent.property.title}
        >
          <div className="prose prose-lg max-w-none text-foreground">
            {siteContent.property.content.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {siteContent.property.details && (
              <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Property Details</h3>
                <ul className="space-y-2">
                  {Object.entries(siteContent.property.details).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="font-medium min-w-[140px] text-foreground">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>

        {/* Claim Summary Section */}
        <Section 
          id="claim"
          title={siteContent.claim.title}
          className="bg-accent/20"
        >
          <div className="prose prose-lg max-w-none text-foreground">
            {siteContent.claim.content.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        {/* Documents Section */}
        <DocumentsSection />

        {/* Contact Section */}
        <Section 
          id="contact"
          title={siteContent.contact.title}
        >
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="mb-6 leading-relaxed">{siteContent.contact.content}</p>
            {siteContent.contact.email && (
              <div className="mt-6">
                <a 
                  href={`mailto:${siteContent.contact.email}`}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Contact Us via Email
                </a>
              </div>
            )}
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
