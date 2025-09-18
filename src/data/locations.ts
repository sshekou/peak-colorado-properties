export interface LocationInfo { slug: string; name: string; overview: string; exampleRent: string; }

export const locations: LocationInfo[] = [
  { slug: 'boulder', name: 'Boulder', overview: 'Iconic Flatirons views and walkable neighborhoods near CU and Pearl Street.', exampleRent: '$2,200–$3,800 2BR' },
  { slug: 'longmont', name: 'Longmont', overview: 'Expanding tech scene and great value across leafy neighborhoods and newer builds.', exampleRent: '$1,800–$2,800 3BR' },
  { slug: 'louisville', name: 'Louisville', overview: 'Charming Old Town vibe with quick access to Boulder and Denver.', exampleRent: '$2,100–$3,000 3BR' },
  { slug: 'lafayette', name: 'Lafayette', overview: 'Parks, trails, and a growing food scene—great for families.', exampleRent: '$1,900–$2,900 3BR' },
  { slug: 'superior', name: 'Superior', overview: 'Modern communities and easy commutes along US-36.', exampleRent: '$2,200–$3,200 3BR' },
  { slug: 'broomfield', name: 'Broomfield', overview: 'Corporate hubs with quiet neighborhoods and conveniences.', exampleRent: '$1,950–$2,900 3BR' },
  { slug: 'erie', name: 'Erie', overview: 'Newer construction, mountain sightlines, and room to grow.', exampleRent: '$2,000–$3,000 3BR' },
  { slug: 'niwot', name: 'Niwot', overview: 'Small-town feel minutes from Boulder with beautiful lots.', exampleRent: '$2,200–$3,400 3BR' },
  { slug: 'gunbarrel', name: 'Gunbarrel', overview: 'Quiet pockets near trail networks and quick drives into town.', exampleRent: '$1,900–$2,700 2BR' },
];
