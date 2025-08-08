import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = ({ title, items }: { title: string; items: { q: string; a: string }[] }) => (
  <section className="container py-12">
    <h2 className="font-head text-3xl mb-6">{title}</h2>
    <Accordion type="single" collapsible className="w-full">
      {items.map((it, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
          <AccordionContent>{it.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);
