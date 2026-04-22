/**
 * Service detail pages — /services/[slug]
 * Local template images (work offline / same domain). Copy is service-specific.
 */

const d1 = '/assets/images/dental-services-img1.jpg';
const d2 = '/assets/images/dental-services-img2.jpg';
const d3 = '/assets/images/dental-services-img3.jpg';

function slides(a, b, c, alts) {
  return [
    { src: a, alt: alts[0] },
    { src: b, alt: alts[1] },
    { src: c, alt: alts[2] },
  ];
}

export const servicesCatalog = [
  {
    slug: 'preventive-care',
    title: 'Preventive Dentistry',
    categoryLabel: 'Checkups & hygiene',
    metaDescription:
      'Dental exams, professional cleans, X-rays, fluoride and sealants at Smilora — Melbourne preventive care for every age.',
    tagline: 'Catch problems early — most major dental work is avoidable with the right rhythm of visits.',
    overview:
      'Preventive dentistry at Smilora is built around your risk profile. We chart your gums, check each tooth for early decay, remove calculus that brushing cannot reach, and show you exactly where your brush and floss are missing — so your home care actually matches your mouth.',
    overviewExtra:
      'We recommend recall intervals based on gum health and cavity history: some patients thrive on six-month visits, others benefit from three-month hygiene until their gums stabilise.',
    included: [
      'Full oral examination and soft-tissue screening',
      'Professional scale, polish, and stain removal',
      'Digital bitewing or OPG X-rays when indicated',
      'Fluoride varnish for children and high-caries-risk adults',
      'Pit-and-fissure sealants for children’s permanent molars',
      'Personalised brushing and interdental cleaning coaching',
    ],
    benefits: [
      'Smaller, cheaper treatments instead of crowns or root canals later',
      'Healthier gums — less bleeding when you floss',
      'Fresher breath when bacterial biofilm is controlled',
      'Confidence that someone is monitoring changes year to year',
    ],
    footerCallout: 'Your next clean should feel like maintenance — not a rescue mission. Book your recall today.',
    resultsIntro:
      'These are the kinds of wins we see when patients commit to prevention — less drama, more stable smiles.',
    resultHighlights: [
      'A patient with bleeding gums saw improvement after two hygiene visits and a better flossing technique.',
      'Sealants on new molars helped a 12-year-old stay cavity-free through a sports season.',
      'A small shadow on an X-ray was watched and remineralised — no filling required.',
    ],
    beforeAfterSlides: slides(d1, d2, d3, [
      'Preventive dental care',
      'Professional cleaning and exam',
      'Healthy smile maintenance',
    ]),
    imagePrimary: d1,
    imageSecondary: d2,
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    categoryLabel: 'Smile design',
    metaDescription:
      'Whitening, veneers, bonding and smile makeovers at Smilora — natural-looking cosmetic dentistry in Melbourne.',
    tagline: 'We design smiles that suit your face — brighter, straighter-looking, and still believably yours.',
    overview:
      'Cosmetic dentistry is a blend of colour, shape, and proportion. Whether you want whiter teeth for an event, veneers to even out edges, or bonding to fix a chip, we plan with photographs and shade guides so you can preview the direction before we touch the tooth.',
    overviewExtra:
      'We always check existing fillings and crowns first — they do not lighten like enamel — so your expectations and our plan stay aligned.',
    included: [
      'Smile analysis, photos, and shade documentation',
      'In-chair or professional take-home whitening options',
      'Porcelain veneer planning with mock-up where appropriate',
      'Composite bonding for chips, gaps, or worn edges',
      'Occlusal guard discussion if you grind at night',
      'Maintenance and polishing schedule after treatment',
    ],
    benefits: [
      'A fresher, more symmetrical look in photos and conversation',
      'Minimally invasive options when enamel allows',
      'Customised tooth shape that fits your lips and profile',
      'A clear maintenance plan so results last',
    ],
    footerCallout: 'Curious what is possible for your smile? Start with a cosmetic consult — we love answering questions.',
    resultsIntro:
      'Real patients, real goals — from subtle brightening to full smile refreshes.',
    resultHighlights: [
      'In-office whitening lifted years of coffee staining before a client’s wedding week.',
      'Four veneers balanced uneven edges after old orthodontics.',
      'Bonding closed a small gap between front teeth in a single appointment.',
    ],
    beforeAfterSlides: slides(d2, d3, d1, [
      'Cosmetic smile enhancement',
      'Aesthetic dental treatment',
      'Natural-looking results',
    ]),
    imagePrimary: d2,
    imageSecondary: d3,
  },
  {
    slug: 'periodontal-care',
    title: 'Periodontal Care',
    categoryLabel: 'Gums & bone',
    metaDescription:
      'Gum disease treatment, deep cleaning and periodontal maintenance at Smilora — protect the foundation of your teeth.',
    tagline: 'Your teeth are only as stable as the gums and bone around them — we treat both the infection and the cause.',
    overview:
      'Periodontal disease often starts quietly: bleeding when you brush, bad breath, or teeth that feel loose. We measure pocket depths, map bleeding sites, and use X-rays to see bone levels. Active therapy usually means scaling and root planing below the gumline, then a structured maintenance phase.',
    overviewExtra:
      'Healing depends on both our instruments and your plaque control at home — we coach you on technique, not guilt.',
    included: [
      'Full periodontal charting and bleeding scores',
      'Non-surgical scaling and root planing in affected areas',
      'Site-specific antimicrobial aids when indicated',
      'Re-evaluation appointment to measure healing',
      'Periodontal maintenance visits at tailored intervals',
      'Written home-care instructions and product suggestions',
    ],
    benefits: [
      'Less gum tenderness and bleeding over time',
      'Better breath when deep pockets are cleaned',
      'Protection for natural teeth and implants alike',
      'Lower risk of tooth loss linked to chronic periodontitis',
    ],
    footerCallout: 'Bleeding gums are not “normal.” Let’s find out what is driving yours.',
    resultsIntro:
      'Stabilised gums mean fewer emergencies and a mouth that feels tighter and healthier.',
    resultHighlights: [
      'Pocket depths improved after initial therapy and three months of better interdental cleaning.',
      'Chronic bad breath improved once deep pockets were debrided.',
      'A patient avoided losing a molar by committing to quarterly maintenance.',
    ],
    beforeAfterSlides: slides(d3, d1, d2, [
      'Gum and periodontal care',
      'Dental hygiene visit',
      'Healthy gums support',
    ]),
    imagePrimary: d3,
    imageSecondary: d1,
  },
  {
    slug: 'restorative-treatments',
    title: 'Restorative Dentistry',
    categoryLabel: 'Repair & replace',
    metaDescription:
      'Fillings, crowns, bridges and implant restorations at Smilora — strong, natural-looking restorative dentistry.',
    tagline: 'From one worn tooth to full-mouth wear — we rebuild comfort, function, and a smile you are not afraid to use.',
    overview:
      'Restorative care fixes what decay, cracks, or tooth loss have taken away. We use high-strength tooth-coloured materials where possible, check your bite so new work does not feel “high,” and sequence larger cases so you are never stuck without a chewing surface.',
    overviewExtra:
      'If you are replacing teeth, we explain bridge versus implant options in plain language — including longevity, cleaning, and cost over time.',
    included: [
      'Caries removal and bonded composite or ceramic restorations',
      'Full-coverage crowns for cracked or heavily filled teeth',
      'Fixed bridges or implant-supported crowns for gaps',
      'Bite analysis and adjustment after major work',
      'Night guard discussion for grinders to protect new restorations',
      'Colour and contour checks before cementation',
    ],
    benefits: [
      'Chew comfortably on both sides again',
      'Stop a crack from progressing to a split tooth',
      'Natural appearance compared with older silver or bulky crowns',
      'A written plan if you need to phase treatment over months',
    ],
    footerCallout: 'Broken filling or sensitive tooth? The sooner we see it, the simpler the fix usually is.',
    resultsIntro:
      'Function and aesthetics together — that is the point of modern restorative work.',
    resultHighlights: [
      'A crown wrapped a cracked molar and stopped temperature sensitivity.',
      'An implant crown replaced a missing first molar for stable chewing.',
      'Worn front teeth were lengthened with bonded composite for a younger smile line.',
    ],
    beforeAfterSlides: slides(d1, d3, d2, [
      'Restorative dental work',
      'Crowns and fillings',
      'Renewed smile function',
    ]),
    imagePrimary: d1,
    imageSecondary: d3,
  },
  {
    slug: 'endodontics',
    title: 'Endodontics',
    categoryLabel: 'Root canal therapy',
    metaDescription:
      'Root canal treatment at Smilora — relieve toothache and save natural teeth with careful, modern endodontic care.',
    tagline: 'When the nerve inside a tooth is inflamed or infected, root canal therapy can save the tooth — often the same day you are in pain.',
    overview:
      'Endodontics is about removing bacteria from the root canal system, shaping and disinfecting the space, then sealing it so infection does not return. We use rubber dam isolation, thorough anaesthesia, and step-by-step explanations so you know what is happening.',
    overviewExtra:
      'After treatment, a permanent filling or crown protects the tooth from fracture — we coordinate that before you leave.',
    included: [
      'Pulp and periapical testing plus radiographic diagnosis',
      'Profound local anaesthesia and rubber-dam isolation',
      'Chemo-mechanical cleaning and shaping of canals',
      'Obturation (root filling) with biocompatible materials',
      'Temporary restoration and crown planning',
      'Written after-care and what-to-expect notes',
    ],
    benefits: [
      'Relief from throbbing or lingering hot/cold pain',
      'Keep your natural root and bone support',
      'Often less invasive than extract-and-replace for restorable teeth',
      'Modern techniques focused on comfort and predictability',
    ],
    footerCallout: 'Toothache that wakes you up? Call us — same-day assessment when possible.',
    resultsIntro:
      'Saving teeth is not old-fashioned — it is often the smartest long-term choice.',
    resultHighlights: [
      'A patient with a sleepless night from an abscess felt relief after the first visit.',
      'A darkening front tooth was saved and later crowned for a natural look.',
      'A nervous patient completed care with breaks and headphones — no drama.',
    ],
    beforeAfterSlides: slides(d2, d1, d3, [
      'Root canal and tooth-saving care',
      'Comfortable dental treatment',
      'Endodontic therapy',
    ]),
    imagePrimary: d2,
    imageSecondary: d1,
  },
  {
    slug: 'oral-surgery',
    title: 'Oral Surgery',
    categoryLabel: 'Extractions',
    metaDescription:
      'Tooth extractions and wisdom teeth at Smilora — careful planning, clear aftercare, and support through healing.',
    tagline: 'Whether it is a painful wisdom tooth or a tooth that cannot be saved, we prioritise safety, clarity, and a smooth recovery.',
    overview:
      'Oral surgery covers extractions that are straightforward or require sectioning, bone removal, or suturing. We review your medical history, explain swelling and diet expectations, and give you written aftercare so dry socket and infection risks stay low.',
    overviewExtra:
      'If you are heading toward implants or orthodontics, we time extractions so the next step in your plan is seamless.',
    included: [
      'Clinical and radiographic assessment before surgery',
      'Local anaesthesia with anxiety-friendly pacing',
      'Surgical extraction or wisdom tooth removal as planned',
      'Post-op instructions, gauze protocol, and medication guidance',
      'Emergency contact information if you have concerns',
      'Follow-up or suture removal when needed',
    ],
    benefits: [
      'Removes the source of recurring infections or pain',
      'Creates space for orthodontic alignment when planned',
      'Clear expectations for swelling, diet, and healing time',
      'Coordination with restorative or orthodontic providers',
    ],
    footerCallout: 'Wisdom tooth acting up? Bring your X-ray — we will walk you through options.',
    resultsIntro:
      'Most patients are surprised how manageable recovery is when instructions are followed.',
    resultHighlights: [
      'Four impacted wisdom teeth removed with a calm, step-by-step approach.',
      'A fractured root was removed and the site grafted for a future implant.',
      'A very anxious patient completed treatment with reassurance and short breaks.',
    ],
    beforeAfterSlides: slides(d3, d2, d1, [
      'Oral surgery care',
      'Extraction and recovery',
      'Clinical dental suite',
    ]),
    imagePrimary: d3,
    imageSecondary: d2,
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics',
    categoryLabel: 'Braces & aligners',
    metaDescription:
      'Braces and clear aligners at Smilora — straighter teeth and a healthier bite for teens and adults in Melbourne.',
    tagline: 'Straight teeth are easier to clean and less prone to uneven wear — we will match the appliance to your case and lifestyle.',
    overview:
      'Orthodontic treatment moves teeth through controlled forces. We evaluate crowding, spacing, bite depth, and jaw relationships, then recommend fixed braces, clear aligners, or a combination. Adults often appreciate discreet aligner options; teens may move faster with braces.',
    overviewExtra:
      'Retention is part of the treatment — not an afterthought. We discuss fixed and removable retainers so your result lasts.',
    included: [
      'Clinical records: photos, scans or impressions',
      'Personalised treatment plan with estimated timeline',
      'Brackets or aligner delivery and adjustment visits',
      'Elastics or auxiliaries for bite correction when needed',
      'Progress monitoring and oral hygiene coaching',
      'Retention phase with clear wear instructions',
    ],
    benefits: [
      'Easier flossing in previously crowded areas',
      'Reduced risk of chips when protruding teeth are aligned',
      'Discreet options for professionals who prefer aligners',
      'Confidence when smiling and speaking',
    ],
    footerCallout: 'Wondering if aligners will work for your crowding? Book an orthodontic assessment.',
    resultsIntro:
      'Orthodontics is a journey — these stories show what consistency achieves.',
    resultHighlights: [
      'Severe crowding improved in under two years with braces and good elastic wear.',
      'An adult finished aligner therapy in ten months for mild relapse from teenage braces.',
      'A deep bite opened enough to stop edge-to-edge wear on front teeth.',
    ],
    beforeAfterSlides: slides(d1, d2, d3, [
      'Braces and alignment',
      'Orthodontic treatment',
      'Straighter smile',
    ]),
    imagePrimary: d1,
    imageSecondary: d2,
  },
  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    categoryLabel: 'Kids & teens',
    metaDescription:
      'Children’s dentist at Smilora — gentle exams, cleans, sealants, and positive first visits in Melbourne.',
    tagline: 'We help kids feel safe in the chair — with patience, simple words, and celebrations for brave little steps.',
    overview:
      'Baby teeth matter for speech, chewing, and holding space for adult teeth. We use tell-show-do, let kids hold the mirror, and explain noises before they happen. When treatment is needed, we involve parents in every decision — no surprises.',
    overviewExtra:
      'We also talk about diet, bottles, thumb habits, and sports guards so prevention continues between visits.',
    included: [
      'Age-appropriate exam and gentle clean when cooperative',
      'Fluoride varnish based on cavity risk',
      'Sealants on deep grooves of permanent molars',
      'Small fillings with minimal intervention when required',
      'Guidance for parents on brushing angles and routine',
      'Custom sports mouthguards for active children',
    ],
    benefits: [
      'Less dental fear as an adult when early visits go well',
      'Fewer cavities when sealants and hygiene line up',
      'Parents leave with a clear plan instead of guesswork',
      'A clinic culture that feels welcoming, not rushed',
    ],
    footerCallout: 'First visit for your little one? Ask us about our gentle introduction routine.',
    resultsIntro:
      'Little wins add up — confidence today means healthier habits tomorrow.',
    resultHighlights: [
      'A shy four-year-old completed a first exam with counting games and stickers.',
      'Sealants before school started helped a child stay cavity-free all year.',
      'A teen received a custom guard before footy season — parents loved the fit.',
    ],
    beforeAfterSlides: slides(d2, d3, d1, [
      'Children’s dental visit',
      'Gentle kids’ dentistry',
      'Family dental care',
    ]),
    imagePrimary: d2,
    imageSecondary: d3,
  },
  {
    slug: 'professional-teeth-whitening',
    title: 'Professional Teeth Whitening',
    categoryLabel: 'In-chair whitening',
    metaDescription:
      'Professional teeth whitening at Smilora — safe, dentist-supervised whitening for a brighter smile in Melbourne.',
    tagline: 'Lift years of staining from coffee, tea, and wine — with gums protected and sensitivity managed by our team.',
    overview:
      'Professional whitening uses higher-concentration gels than retail products, applied in short cycles with barriers on your gums. We record your starting shade, apply the gel safely, and re-evaluate until we hit a natural-looking brightness — not an artificial “glow in the dark” white.',
    overviewExtra:
      'Crowns and fillings will not lighten like enamel; we flag that before we start so your smile stays even.',
    included: [
      'Pre-whitening exam to rule out cracks or exposed roots',
      'Shade photos before and after treatment',
      'Gingival protection and isolated gel application',
      'In-office whitening cycle(s) per protocol',
      'Desensitising steps if you are prone to cold sensitivity',
      'Optional take-home trays for touch-ups',
    ],
    benefits: [
      'Noticeable brightening in one visit for many candidates',
      'Safer than overusing harsh OTC strips on thin enamel',
      'Personalised intensity if you are nervous about sensitivity',
      'Ideal before weddings, graduations, or photo-heavy events',
    ],
    footerCallout: 'Not sure if you are a candidate? A quick check takes minutes — book a whitening consult.',
    resultsIntro:
      'Shades vary by starting colour and enamel — here is what professional whitening can do under supervision.',
    resultHighlights: [
      'A coffee-loving professional jumped several shades before a conference.',
      'A bride whitened one week before photos — touch-up trays kept it fresh.',
      'Mild sensitivity was managed with desensitiser and shorter cycles — still a great result.',
    ],
    beforeAfterSlides: slides(d1, d2, d3, [
      'Brighter smile after whitening',
      'Professional teeth whitening',
      'Smile confidence',
    ]),
    imagePrimary: d1,
    imageSecondary: d2,
  },
];

/** Order and display titles for the /services hub page */
const SERVICES_HUB_ORDER = [
  'professional-teeth-whitening',
  'preventive-care',
  'cosmetic-dentistry',
  'periodontal-care',
  'restorative-treatments',
  'endodontics',
  'oral-surgery',
  'orthodontics',
  'pediatric-dentistry',
];

const SERVICES_HUB_TITLES = {
  'professional-teeth-whitening': 'Professional Whitening',
  'preventive-care': 'Preventive Care',
  'cosmetic-dentistry': 'Cosmetic Dentistry',
  'periodontal-care': 'Periodontal Care',
  'restorative-treatments': 'Restorative Treatments',
  endodontics: 'Endodontics',
  'oral-surgery': 'Oral Surgery',
  orthodontics: 'Orthodontics',
  'pediatric-dentistry': 'Pediatric Dentistry',
};

/** Unique hero image per service for the /services hub (no reuse across cards). */
const SERVICES_HUB_IMAGES = {
  'professional-teeth-whitening': '/assets/images/teeth-whitening-img.jpg',
  'preventive-care': '/assets/images/dental-services-img1.jpg',
  'cosmetic-dentistry': '/assets/images/dental-services-img4.jpg',
  'periodontal-care': '/assets/images/dental-services-img5.jpg',
  'restorative-treatments': '/assets/images/who-we-are-img2.jpg',
  endodontics: '/assets/images/about-us-img2.jpg',
  'oral-surgery': '/assets/images/photoslider-img2.jpg',
  orthodontics: '/assets/images/photoslider-img4.jpg',
  'pediatric-dentistry': '/assets/images/photoslider-img6.jpg',
};

export function getServicesHubCards() {
  return SERVICES_HUB_ORDER.map((slug) => {
    const s = servicesCatalog.find((x) => x.slug === slug);
    if (!s) return null;
    return {
      href: `/services/${slug}`,
      title: SERVICES_HUB_TITLES[slug] ?? s.title,
      description: s.tagline,
      image: SERVICES_HUB_IMAGES[slug] ?? s.imagePrimary,
      imageAlt: s.title,
      category: s.categoryLabel,
    };
  }).filter(Boolean);
}

export function getServiceBySlug(slug) {
  return servicesCatalog.find((s) => s.slug === slug) ?? null;
}

export function getAllServiceSlugs() {
  return servicesCatalog.map((s) => s.slug);
}
