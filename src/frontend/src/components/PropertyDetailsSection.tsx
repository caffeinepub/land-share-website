import { siteContent } from '@/content/siteContent';
import type { PropertyRecord, PropertyCategory } from '@/content/siteContent';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function PropertyRecordCard({ record }: { record: PropertyRecord }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl">
          {record.mouza}, {record.block}
        </CardTitle>
        <div className="text-sm text-muted-foreground space-y-1 mt-2">
          <p><span className="font-medium">District:</span> {record.district}</p>
          <p><span className="font-medium">State:</span> {record.state}</p>
          {record.ps && <p><span className="font-medium">PS:</span> {record.ps}</p>}
          {record.jl && <p><span className="font-medium">JL:</span> {record.jl}</p>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Khatian References */}
        <div>
          <h4 className="font-semibold text-sm mb-2 text-foreground">Khatian References:</h4>
          <div className="flex flex-wrap gap-2">
            {record.khatianReferences.map((khatian, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {khatian.type ? `${khatian.type}: ` : ''}
                {khatian.number}
                {khatian.notes && ` (${khatian.notes})`}
              </Badge>
            ))}
          </div>
        </div>

        {/* Plot List - Collapsible if there are plots */}
        {record.plots.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="plots" className="border rounded-md px-4">
              <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                Plot List ({record.plots.length} plots)
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                  {record.plots.map((plot, idx) => (
                    <div key={idx} className="text-xs bg-muted/50 p-2 rounded border border-border">
                      <span className="font-medium">Dag {plot.dagNo}:</span>{' '}
                      <span className="text-muted-foreground">{plot.areaDecimals} Dec</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {/* Totals */}
        <div className="bg-accent/20 p-4 rounded-md border border-border">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Totals:</h4>
          <div className="text-sm space-y-1">
            {record.totalPlots !== undefined && (
              <p><span className="font-medium">Total Plots:</span> {record.totalPlots}</p>
            )}
            {record.totalAcres !== undefined && (
              <p><span className="font-medium">Total Area:</span> {record.totalAcres} acres</p>
            )}
            {record.totalDecimals !== undefined && (
              <p><span className="font-medium">Total Area:</span> {record.totalDecimals} decimals</p>
            )}
          </div>
        </div>

        {/* Notes/Remarks */}
        {record.notes && (
          <div className="bg-muted/30 p-4 rounded-md border border-border">
            <h4 className="font-semibold text-sm mb-2 text-foreground">Notes/Remarks:</h4>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {record.notes}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PropertyCategorySection({ category }: { category: PropertyCategory }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">
        {category.categoryName}
      </h3>
      <div>
        {category.records.map((record, idx) => (
          <PropertyRecordCard key={idx} record={record} />
        ))}
      </div>
    </div>
  );
}

export default function PropertyDetailsSection() {
  const { propertyDetails } = siteContent;

  return (
    <section id="property" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {propertyDetails.title}
            </h2>
          </div>
          <div>
            {propertyDetails.categories.map((category, idx) => (
              <PropertyCategorySection key={idx} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
