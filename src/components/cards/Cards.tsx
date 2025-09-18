import { ReactNode } from "react";
import boulderThumbnail from "@/assets/boulder-residential.jpg";
import longmontThumbnail from "@/assets/longmont-thumbnail.jpg";
import louisvilleThumbnail from "@/assets/louisville-thumbnail.jpg";
import lafayetteThumbnail from "@/assets/lafayette-thumbnail.jpg";
import superiorThumbnail from "@/assets/superior-thumbnail.jpg";
import broomfieldThumbnail from "@/assets/broomfield-thumbnail.jpg";
import erieThumbnail from "@/assets/erie-thumbnail.jpg";
import niwotThumbnail from "@/assets/niwot-thumbnail.jpg";
import gunbarrelThumbnail from "@/assets/gunbarrel-thumbnail.jpg";

const cityThumbnails: Record<string, string> = {
  boulder: boulderThumbnail,
  longmont: longmontThumbnail,
  louisville: louisvilleThumbnail,
  lafayette: lafayetteThumbnail,
  superior: superiorThumbnail,
  broomfield: broomfieldThumbnail,
  erie: erieThumbnail,
  niwot: niwotThumbnail,
  gunbarrel: gunbarrelThumbnail,
};

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

export const LocationCard = ({ name, blurb, to, slug }: { name: string; blurb: string; to: string; slug?: string }) => {
  const isLouisville = slug === 'louisville';
  
  return (
    <a href={to} className="block rounded-lg border bg-card hover-scale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden">
      <div className={isLouisville ? "relative min-h-[140px]" : "grid grid-cols-[120px_1fr] items-stretch"}>
        {slug && cityThumbnails[slug] && (
          <div className={isLouisville ? "absolute inset-0" : "relative h-full"}>
            <img 
              src={cityThumbnails[slug]} 
              alt={`${name} city thumbnail`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className={isLouisville ? "relative z-10 p-5 bg-gradient-to-r from-background/90 to-transparent" : "p-5"}>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{blurb}</p>
        </div>
      </div>
    </a>
  );
};
