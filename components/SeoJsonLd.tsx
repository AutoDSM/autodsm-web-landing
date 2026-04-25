import { LANDING_FAQS } from "@/data/faqs";
import { getSiteUrl } from "@/lib/siteUrls";

const ORG_NAME = "AutoDSM";
const ORG_DESC =
  "AutoDSM connects to your GitHub repository, builds a living brand book from source code, detects design-system drift, and opens pull requests with validated fixes.";

export function SeoJsonLd() {
  const base = getSiteUrl();
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      name: ORG_NAME,
      url: base,
      description: ORG_DESC,
      inLanguage: "en-US",
      publisher: { "@id": `${base}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: ORG_NAME,
      url: base,
      description: ORG_DESC,
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${base}/#softwareapplication`,
      name: ORG_NAME,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: base,
      description: ORG_DESC,
    },
    {
      "@type": "FAQPage",
      "@id": `${base}/#faq`,
      isPartOf: { "@id": `${base}/#website` },
      mainEntity: LANDING_FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
