import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="rounded-lg border bg-card p-6 shadow-elevated">{children}</div>
);

export const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon?: ReactNode }) => (
  <Card>
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </Card>
);

export const PricingCard = ({ plan, price, features, cta }: { plan: string; price: string; features: string[]; cta?: ReactNode }) => (
  <div className="rounded-xl border bg-card p-6 shadow-elevated flex flex-col">
    <h3 className="font-head text-xl mb-1">{plan}</h3>
    <p className="text-3xl font-semibold mb-4">{price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
    <ul className="space-y-2 text-sm flex-1">
      {features.map((f) => <li key={f}>• {f}</li>)}
    </ul>
    {cta}
  </div>
);

export const TestimonialCard = ({ quote, name }: { quote: string; name: string }) => (
  <Card>
    <blockquote className="text-base">“{quote}”</blockquote>
    <div className="mt-3 text-sm text-muted-foreground">— {name}</div>
  </Card>
);

export const LocationCard = ({ name, blurb, to }: { name: string; blurb: string; to: string }) => (
  <a href={to} className="block rounded-lg border bg-card p-5 hover-scale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <h3 className="font-medium">{name}</h3>
    <p className="text-sm text-muted-foreground mt-1">{blurb}</p>
  </a>
);
