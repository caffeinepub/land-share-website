import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface GalleryDocument {
  src: string;
  title: string;
  index: number; // 1-based global index for data-ocid
}

interface DocumentCategory {
  name: string;
  docs: GalleryDocument[];
}

const ALL_DOCS: GalleryDocument[] = [
  {
    src: "/assets/uploads/20260306_115523-1.jpg",
    title: "RS Khatian No. 263 \u2013 Hateberia, JL 167 (Page 1)",
    index: 1,
  },
  {
    src: "/assets/uploads/20260306_115658-2.jpg",
    title: "Legal Heirs of Late Nanigopal Maji (Coparceners 1 & 2)",
    index: 2,
  },
  {
    src: "/assets/uploads/20260306_115452-3.jpg",
    title: "RS Khatian No. 320 \u2013 Radhaballabchak",
    index: 3,
  },
  {
    src: "/assets/uploads/20260306_115731-4.jpg",
    title: "Legal Heirs \u2013 8th Coparcener Jayananda Maji",
    index: 4,
  },
  {
    src: "/assets/uploads/20260306_115632-5.jpg",
    title: "Haldia Municipality Heir Certificate of Nanigopal Maji",
    index: 5,
  },
  {
    src: "/assets/uploads/20260306_115714-6.jpg",
    title: "Legal Heirs \u2013 Coparceners 4 to 7",
    index: 6,
  },
  {
    src: "/assets/uploads/20260306_115808-7.jpg",
    title: "Aadhaar Card \u2013 Asim Kumar Khutia",
    index: 7,
  },
  {
    src: "/assets/uploads/20260306_115510-8.jpg",
    title: "RS Khatian No. 263 \u2013 Hateberia (Alternate Page)",
    index: 8,
  },
  {
    src: "/assets/uploads/20260306_115821-9.jpg",
    title: "Affidavit by Ashim Kumar Khutia (Page 1)",
    index: 9,
  },
  {
    src: "/assets/uploads/20260306_115833-10.jpg",
    title: "Affidavit by Ashim Kumar Khutia (Page 2 \u2013 Heirs List)",
    index: 10,
  },
  {
    src: "/assets/uploads/20260306_115615-11.jpg",
    title: "Legal Heirs \u2013 Coparceners 3 to 6 (Detail)",
    index: 11,
  },
  {
    src: "/assets/uploads/20260306_115536-12.jpg",
    title: "RS Khatian No. 263 \u2013 Hateberia (Page 2)",
    index: 12,
  },
  {
    src: "/assets/uploads/20260306_115757-13.jpg",
    title: "Death Certificate \u2013 Nanigopal Maji",
    index: 13,
  },
  {
    src: "/assets/uploads/20260306_115432-14.jpg",
    title: "RS Khatian No. 145 \u2013 Radhaballabchak (with Grand Totals)",
    index: 14,
  },
  {
    src: "/assets/uploads/20260306_115559-15.jpg",
    title: "Death Certificate \u2013 Sudhamoy Khutia (KMC)",
    index: 15,
  },
  {
    src: "/assets/uploads/20260306_115743-16.jpg",
    title: "RS Khatian No. 546 \u2013 Hateberia",
    index: 16,
  },
];

const CATEGORIES: DocumentCategory[] = [
  {
    name: "Land Records (Khatian)",
    docs: [1, 3, 8, 12, 14, 15, 16].map((i) => ALL_DOCS[i - 1]),
  },
  {
    name: "Legal Documents",
    docs: [2, 4, 5, 6, 9, 10, 11].map((i) => ALL_DOCS[i - 1]),
  },
  {
    name: "Identity Documents",
    docs: [7].map((i) => ALL_DOCS[i - 1]),
  },
];

// Flat ordered list for lightbox navigation (preserves gallery category order)
const FLAT_DOCS: GalleryDocument[] = CATEGORIES.flatMap((c) => c.docs);

// Stable map from doc.index to flat position — computed once outside the component
const FLAT_INDEX_MAP = new Map<number, number>(
  FLAT_DOCS.map((doc, flatIdx) => [doc.index, flatIdx]),
);

export default function ScannedDocumentsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex((cur) =>
      cur === null ? null : (cur - 1 + FLAT_DOCS.length) % FLAT_DOCS.length,
    );
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((cur) =>
      cur === null ? null : (cur + 1) % FLAT_DOCS.length,
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentDoc = lightboxIndex !== null ? FLAT_DOCS[lightboxIndex] : null;

  return (
    <div className="space-y-10">
      {CATEGORIES.map((category) => (
        <div key={category.name}>
          {/* Category heading */}
          <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
            <span className="inline-block w-1 h-5 bg-primary rounded-full" />
            {category.name}
            <span className="ml-auto text-sm font-normal text-muted-foreground">
              {category.docs.length} document
              {category.docs.length !== 1 ? "s" : ""}
            </span>
          </h3>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.docs.map((doc) => {
              const flatIdx = FLAT_INDEX_MAP.get(doc.index) ?? 0;
              return (
                <button
                  key={doc.index}
                  type="button"
                  data-ocid={`docs.gallery.item.${doc.index}`}
                  onClick={() => setLightboxIndex(flatIdx)}
                  className="group flex flex-col rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all duration-200 overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`View document: ${doc.title}`}
                >
                  {/* Thumbnail image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={doc.src}
                      alt={doc.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 drop-shadow-md transition-opacity duration-200" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="px-3 py-2">
                    <p className="text-xs font-medium text-foreground leading-tight line-clamp-2">
                      {doc.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Lightbox — uses <dialog> for semantic correctness */}
      {lightboxIndex !== null && currentDoc && (
        <dialog
          data-ocid="docs.lightbox.dialog"
          open
          aria-label={currentDoc.title}
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full max-w-none max-h-none m-0 p-0 bg-transparent border-none"
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
        >
          {/* Clickable backdrop — close on click */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: keyboard handled on dialog element above */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            onClick={closeLightbox}
          />

          {/* Content panel — stop click from bubbling to backdrop */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: keyboard handled on dialog element above */}
          <div
            className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-6 max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between w-full mb-3 text-white">
              <p className="text-sm font-medium flex-1 pr-4 line-clamp-1">
                {currentDoc.title}
              </p>
              <span className="text-xs text-white/60 mr-3 shrink-0">
                {lightboxIndex + 1} / {FLAT_DOCS.length}
              </span>
              <button
                type="button"
                data-ocid="docs.lightbox.close_button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Image */}
            <div className="relative flex-1 flex items-center justify-center w-full overflow-hidden">
              <img
                src={currentDoc.src}
                alt={currentDoc.title}
                className="max-h-[75vh] max-w-full object-contain rounded-md shadow-2xl"
                style={{ userSelect: "none" }}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between w-full mt-4">
              <button
                type="button"
                data-ocid="docs.lightbox.pagination_prev"
                onClick={prev}
                aria-label="Previous document"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/25 text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              {/* Dot indicators */}
              <div className="hidden sm:flex items-center gap-1.5">
                {FLAT_DOCS.map((dotDoc, i) => (
                  <button
                    key={dotDoc.index}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Go to document ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightboxIndex
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                data-ocid="docs.lightbox.pagination_next"
                onClick={next}
                aria-label="Next document"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/25 text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
