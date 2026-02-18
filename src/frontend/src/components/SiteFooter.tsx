import { siteContent } from '../content/siteContent';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'land-share-site';

  return (
    <footer className="border-t bg-accent/10">
      <div className="container mx-auto px-4 py-12">
        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-muted/30 border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteContent.disclaimer}
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} {siteContent.title}. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with{' '}
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {' '}using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
