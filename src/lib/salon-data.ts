export type SalonService = {
  id: string;
  name: string;
  category: string;
  durationMinutes: number;
  priceInr: number;
  sessions?: string;
  featured?: boolean;
};

export type Coupon = {
  code: string;
  description: string;
  discountPercent: number;
  minSpend: number;
};

export type ServiceCategoryContent = {
  image: string;
  description: string;
};

export const salonServices: SalonService[] = [
  { id: "peels", name: "Chemical Peels", category: "Skin", durationMinutes: 45, priceInr: 2500, featured: true },
  { id: "pigmentation", name: "Pigmentation Treatment", category: "Skin", durationMinutes: 60, priceInr: 4000 },
  { id: "hyper-pigmentation", name: "Hyper Pigmentation Program", category: "Skin", durationMinutes: 60, priceInr: 4800 },
  { id: "melasma", name: "Melasma Treatment", category: "Skin", durationMinutes: 60, priceInr: 5200, sessions: "6-8 sessions" },
  { id: "carbon-laser", name: "Carbon Laser Session", category: "Laser", durationMinutes: 50, priceInr: 5500, featured: true },
  { id: "fractional-laser", name: "Fractional Laser", category: "Laser", durationMinutes: 60, priceInr: 7200 },
  { id: "lhr", name: "Laser Hair Reduction (LHR)", category: "Laser", durationMinutes: 70, priceInr: 6200 },
  { id: "aloe-lhr", name: "Aloe LHR", category: "Laser", durationMinutes: 70, priceInr: 6800 },
  { id: "microblading", name: "Microblading", category: "Face Aesthetics", durationMinutes: 90, priceInr: 12000, featured: true },
  { id: "microneedling", name: "Microneedling + RF", category: "Face Aesthetics", durationMinutes: 80, priceInr: 7500 },
  { id: "prp-hair-face", name: "PRP (Hair / Face)", category: "Regrowth", durationMinutes: 70, priceInr: 6500 },
  { id: "scalp-treatment", name: "Scalp Therapy", category: "Hair", durationMinutes: 50, priceInr: 3200 },
  { id: "dandruff", name: "Dandruff Treatment", category: "Hair", durationMinutes: 45, priceInr: 2800 },
  { id: "gfc-face", name: "Face GFC", category: "Regrowth", durationMinutes: 60, priceInr: 7800 },
  { id: "gfc-hair", name: "Hair GFC", category: "Regrowth", durationMinutes: 70, priceInr: 8300 },
  { id: "hydra", name: "Hydra Facial", category: "Facials", durationMinutes: 60, priceInr: 3500 },
  { id: "advanced-hydra", name: "Advanced Hydra Facial", category: "Facials", durationMinutes: 75, priceInr: 5200, featured: true },
  { id: "meso-scalp", name: "Meso Therapy + Scalp Hydra", category: "Hair", durationMinutes: 80, priceInr: 5800 },
  { id: "bridal", name: "Bridal Custom Package", category: "Packages", durationMinutes: 120, priceInr: 15000, sessions: "Customizable" },
  { id: "bb-glow", name: "BB Glow", category: "Skin", durationMinutes: 60, priceInr: 4200 },
  { id: "slimming", name: "Slimming Program", category: "Body", durationMinutes: 75, priceInr: 6000 },
  { id: "liposuction", name: "Body Contouring Consultation", category: "Body", durationMinutes: 45, priceInr: 1000 },
  { id: "uti", name: "UTI Wellness Support Session", category: "Wellness", durationMinutes: 30, priceInr: 1500 },
  { id: "mole-removal", name: "Mole Removal", category: "Skin", durationMinutes: 40, priceInr: 3000 },
  { id: "freckles", name: "Freckles Treatment", category: "Skin", durationMinutes: 50, priceInr: 4500 },
  { id: "anti-aging", name: "Anti-Ageing Program", category: "Skin", durationMinutes: 60, priceInr: 5600 },
  { id: "stretch-marks", name: "Stretch Marks Correction", category: "Body", durationMinutes: 60, priceInr: 5900 },
  { id: "under-eye", name: "Under-Eye Depression Care", category: "Face Aesthetics", durationMinutes: 55, priceInr: 5000 },
  { id: "lip-pigmentation", name: "Lip Pigmentation Therapy", category: "Face Aesthetics", durationMinutes: 50, priceInr: 4300 },
  { id: "iv-glutathione", name: "IV Glutathione / Body Whitening", category: "Wellness", durationMinutes: 40, priceInr: 7000 },
  { id: "hair-regrowth", name: "Hair Regrowth Plan", category: "Regrowth", durationMinutes: 60, priceInr: 6200 },
  { id: "skin-toning", name: "Skin Toning Therapy", category: "Skin", durationMinutes: 50, priceInr: 3900 },
  { id: "dermaplaning", name: "Dermaplaning", category: "Facials", durationMinutes: 45, priceInr: 3400 },
  { id: "acne", name: "Acne Treatment", category: "Skin", durationMinutes: 60, priceInr: 4600 }
];

export const coupons: Coupon[] = [
  {
    code: "GLOW10",
    description: "10% off on skin and laser bookings above INR 4,000",
    discountPercent: 10,
    minSpend: 4000
  },
  {
    code: "BRIDAL20",
    description: "20% off on bridal package booking",
    discountPercent: 20,
    minSpend: 12000
  },
  {
    code: "HAIR15",
    description: "15% off on hair and scalp services above INR 5,000",
    discountPercent: 15,
    minSpend: 5000
  }
];

export const appointmentSlots = [
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM"
];

export const doctors = [
  {
    name: "Dr. Meera Sharma",
    title: "Senior Aesthetic Physician",
    expertise: "Laser aesthetics, pigmentation, and anti-ageing",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Rohan Nair",
    title: "Hair & Scalp Specialist",
    expertise: "PRP, GFC, hair regrowth and scalp restoration",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Aanya Verma",
    title: "Cosmetic Dermatology Consultant",
    expertise: "Hydra facials, acne protocols, and bridal skin prep",
    image:
      "https://images.unsplash.com/photo-1594824475544-3f3f7d8e8798?auto=format&fit=crop&w=900&q=80"
  }
];

export const equipment = [
  "Q-switched and fractional laser suite",
  "Medical-grade HydraFacial workstation",
  "Microneedling RF platform",
  "PRP and GFC preparation centrifuge",
  "High-precision skin analysis scanner",
  "Sterile scalp and mesotherapy injectors"
];

export const resultHighlights = [
  {
    title: "Melasma Correction",
    detail: "Visible reduction in uneven pigmentation by week 6",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Hydra + BB Glow Finish",
    detail: "Brighter, glass-like skin tone with minimal downtime",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Hair Density Revival",
    detail: "Improved scalp coverage after PRP/GFC sessions",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  }
];

export const promotions = [
  {
    title: "Summer Skin Reset",
    description: "Advanced Hydra Facial + Carbon Laser combo",
    priceTag: "INR 8,499"
  },
  {
    title: "Wedding Glow Calendar",
    description: "3-month bridal prep package with scalp hydra add-on",
    priceTag: "From INR 21,999"
  },
  {
    title: "Hair Rescue Weeks",
    description: "PRP + GFC + scalp therapy bundle",
    priceTag: "INR 14,999"
  }
];

export const serviceCategoryContent: Record<string, ServiceCategoryContent> = {
  Skin: {
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfort-first skin protocols designed to restore clarity, hydration, and confidence."
  },
  Laser: {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    description:
      "Precision laser treatments for smoother texture, even tone, and long-term skin goals."
  },
  "Face Aesthetics": {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    description:
      "Subtle, balanced facial aesthetic care that enhances your natural features."
  },
  Regrowth: {
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80",
    description:
      "Evidence-backed regrowth sessions for stronger roots and healthier density over time."
  },
  Hair: {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    description:
      "Scalp and hair wellness rituals that focus on comfort, strength, and shine."
  },
  Facials: {
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    description:
      "Glow-boosting facials for refreshed skin texture and a healthy luminous finish."
  },
  Packages: {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    description:
      "Curated treatment bundles planned around timelines, events, and personal priorities."
  },
  Body: {
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
    description:
      "Body care sessions centered around comfort, contour confidence, and visible progress."
  },
  Wellness: {
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    description:
      "Supportive wellness therapies for balanced energy, recovery, and everyday ease."
  }
};

export const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
