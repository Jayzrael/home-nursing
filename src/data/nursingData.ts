export interface HomeNursingServiceItem {
  id: string;
  title: string;
  category: 'ambulant' | 'non-ambulant' | 'specialized' | 'maternal';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  suitableFor: string[];
  duration: string;
}

export const THESANITAS_NURSE_INFO = {
  name: "TheSanitasNurse",
  nurseName: "Nurse Adaeze Okonkwo (RN, RM)",
  title: "Licensed Private Registered Nurse & Midwife",
  tagline: "Dedicated Hospital-Grade Clinical Care in the Comfort of Your Home in Ibadan",
  shortBio: "I am a fully licensed Registered Nurse and Midwife (NMCN) based in Ibadan, Oyo State. I provide dedicated one-on-one private home nursing care across Bodija, Oluyole, Jericho, Ring Road, Akobo, Iyaganku GRA, and surrounding areas. Always the same trusted nurse every visit.",
  phones: [
    { label: "Direct Phone Line", number: "0708 685 6431", link: "+2347086856431" },
    { label: "Secondary Line", number: "0806 363 6237", link: "+2348063636237" },
    { label: "Direct Emergency Triage", number: "+234 708 685 6431", link: "+2347086856431" }
  ],
  phone: "0708 685 6431",
  phoneFormatted: "0708 685 6431 / 0806 363 6237",
  whatsappNumber: "2347086856431",
  whatsappPrefill: "Hello Nurse Adaeze! I would like to inquire about booking private home nursing care in Ibadan for a family member.",
  email: "care@thesanitasnurse.com",
  secondaryEmail: "nurse@thesanitasnurse.com",
  googleBookingFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7zExampleFormLinkNursingCare2026/viewform?usp=sf_link",
  googleIntakeFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7zExamplePatientIntakeForm2026/viewform?usp=sf_link",
  locations: [
    {
      name: "Ibadan Central Practice Hub",
      address: "Bodija / Secretariat Axis, Ibadan, Oyo State"
    },
    {
      name: "South-West Dispatch Base",
      address: "Ring Road / Oluyole Estate, Ibadan, Oyo State"
    },
    {
      name: "Jericho & Iyaganku Coverage",
      address: "Jericho GRA, Iyaganku & Alalubosa, Ibadan, Oyo State"
    }
  ],
  stats: [
    { value: "100%", label: "Direct 1-on-1 Care Continuity (Always Nurse Adaeze)" },
    { value: "8+ Yrs", label: "Clinical & Hospital Nursing Experience" },
    { value: "NMCN", label: "Dual Certified Registered Nurse & Midwife" },
    { value: "500+", label: "Successful Private Home Visits in Ibadan & Beyond" }
  ]
};

export const AVON_HOME_NURSING_INFO = THESANITAS_NURSE_INFO;

export const HOME_NURSING_SERVICES: HomeNursingServiceItem[] = [
  {
    id: "ambulant-home-care",
    title: "Ambulant Patient Home Care",
    category: "ambulant",
    categoryLabel: "Mobile Patients",
    shortDesc: "Routine vital signs checks, medication administration, chronic disease management, and clinical supervision for mobile patients in Ibadan.",
    fullDesc: "I provide regular in-home visits for mobile individuals across Ibadan requiring professional medical supervision. From tracking hypertension and diabetes to managing prescription schedules and clinical wound inspections, I ensure your loved one remains healthy and safe at home.",
    features: [
      "Vital signs monitoring & clinical logging (BP, Pulse, Blood Sugar, SpO2)",
      "Medication management, injection administration & compliance reviews",
      "Sterile wound inspection & minor dressing changes",
      "Dietary & lifestyle guidance tailored to Nigerian diets",
      "Direct WhatsApp clinical reports sent to family after each visit"
    ],
    suitableFor: [
      "Elderly individuals living in Ibadan",
      "Hypertensive and diabetic patients needing regular monitoring",
      "Patients recovering from illness who require check-ups"
    ],
    duration: "1 to 3 hours per visit, or scheduled weekly routines"
  },
  {
    id: "non-ambulant-bedridden-care",
    title: "Bedridden & Immobility Nursing",
    category: "non-ambulant",
    categoryLabel: "Bedridden Care",
    shortDesc: "Intensive 1-on-1 bedside nursing, pressure ulcer prevention, assisted mobility, and clinical hygiene for bed-bound individuals.",
    fullDesc: "Comprehensive clinical care for bed-bound patients recovering from stroke, spinal injuries, or major surgery in Ibadan. I manage every aspect of bedside nursing — from strict 2-hour repositioning schedules and skin barrier care to catheter maintenance and passive range-of-motion physiotherapy support.",
    features: [
      "Pressure ulcer (bedsore) prevention, staging & sterile dressing",
      "Urinary catheter management, care & sterile hygiene",
      "Assisted bed bathing, skin moisturization & barrier protection",
      "Passive limb exercises & assisted transfer to wheelchair",
      "Full daily clinical logs and physician collaboration"
    ],
    suitableFor: [
      "Stroke survivors with partial or total paralysis",
      "Post-orthopedic surgery recovery patients",
      "Frail elderly patients with severe mobility constraints"
    ],
    duration: "Half-day (4–6 hours), full-day (8–12 hours), or dedicated scheduled shifts"
  },
  {
    id: "wound-care-surgical-dressing",
    title: "Clinical Wound Care & Dressing",
    category: "specialized",
    categoryLabel: "Specialized Nursing",
    shortDesc: "Sterile wound management for post-surgical incisions, C-section wounds, diabetic foot ulcers, and trauma recovery in Ibadan.",
    fullDesc: "Hospital-grade sterile wound care delivered at your bedside in Ibadan. Using advanced dressings, aseptic technique, and careful assessment, I accelerate tissue healing and prevent dangerous wound infections without the pain and stress of hospital commutes.",
    features: [
      "Aseptic dressing changes for C-section & abdominal surgeries",
      "Diabetic foot ulcer cleaning, debridement & pressure relief",
      "Infection surveillance (early detection of redness, warmth, dehiscence)",
      "Suture & staple removal under physician orders",
      "Photographic wound healing progress tracking for your doctor"
    ],
    suitableFor: [
      "Post-operative patients recently discharged from hospital (UCH, private hospitals in Ibadan)",
      "Diabetic patients with slow-healing foot wounds or ulcers",
      "Mothers recovering from Caesarean section deliveries"
    ],
    duration: "Single visits or alternate-day wound dressing schedules"
  },
  {
    id: "elderly-geriatric-dementia-care",
    title: "Elderly & Dementia Home Support",
    category: "specialized",
    categoryLabel: "Geriatric Support",
    shortDesc: "Compassionate, patient-centered nursing for elderly parents in Ibadan, cognitive impairment support, and respite for family caregivers.",
    fullDesc: "Caring for an aging parent in Ibadan requires clinical vigilance paired with deep patience and warmth. I provide structured daily routines, cognitive stimulation, fall prevention measures, and gentle medication oversight so your elderly parent can age gracefully in their familiar surroundings.",
    features: [
      "Morning & evening medication administration and compliance checks",
      "Fall risk assessment & home safety environment optimization",
      "Cognitive engagement, memory routines & calm dementia support",
      "Nutritional intake tracking and hydration encouragement",
      "Reliable respite for family caregivers balancing work and care"
    ],
    suitableFor: [
      "Elderly parents in Ibadan needing daily clinical oversight",
      "Individuals with early-to-moderate dementia or Alzheimer's",
      "Families needing trusted care while at work or living abroad"
    ],
    duration: "Regular daily visits, weekly plans, or continuous care schedules"
  },
  {
    id: "antenatal-postnatal-mother-baby-care",
    title: "Postnatal & Newborn Care (RN/RM)",
    category: "maternal",
    categoryLabel: "Mother & Baby",
    shortDesc: "Midwife-led in-home postnatal recovery, C-section incision care, lactation support, and newborn health monitoring across Ibadan.",
    fullDesc: "As a dual-certified Registered Midwife and Nurse based in Ibadan, I provide hands-on post-delivery support right at your home during the critical first 6 weeks. I care for both mother and newborn — ensuring smooth recovery, confident breastfeeding, and peace of mind.",
    features: [
      "C-section wound assessment, sterile cleaning and dressing",
      "Lactation support: proper latch techniques & engorgement relief",
      "Newborn health checks: cord care, weight tracking & jaundice check",
      "Postpartum recovery guidance & maternal emotional well-being checks",
      "Safe newborn bathing, soothing techniques & thermal care"
    ],
    suitableFor: [
      "New mothers recovering from Caesarean or vaginal delivery in Ibadan",
      "First-time mothers needing hands-on newborn guidance",
      "Mothers experiencing breastfeeding challenges or sore incisions"
    ],
    duration: "Single check-up visits, 2-week intensive, or 6-week fourth-trimester plans"
  },
  {
    id: "health-education-chronic-disease",
    title: "Chronic Disease Coaching & Education",
    category: "specialized",
    categoryLabel: "Health Education",
    shortDesc: "One-on-one health coaching for hypertension, diabetes, stroke prevention, and adapting traditional Nigerian diets.",
    fullDesc: "Empowering patients and families with actionable medical knowledge in Ibadan. I teach practical self-management skills — from correct insulin injection techniques and blood pressure logging to culturally tailored meal adjustments that protect your cardiovascular health.",
    features: [
      "Instruction on home glucometer & digital BP monitor operation",
      "Insulin injection training, storage rules & rotation techniques",
      "Nigerian dietary coaching: reducing sodium & balancing carbs",
      "Emergency red-flag training for family members and domestic staff",
      "Medication organization with pill planners to eliminate missed doses"
    ],
    suitableFor: [
      "Newly diagnosed diabetic or hypertensive patients in Ibadan",
      "Family members and caregivers managing a loved one's treatment",
      "Individuals seeking to prevent cardiovascular complications"
    ],
    duration: "Dedicated 1-on-1 coaching sessions or integrated with regular visits"
  }
];

export const SERVICE_AREAS_DATA = [
  {
    region: "Ibadan North & Bodija Axis",
    areas: "Old Bodija, New Bodija, Agodi GRA, Ikolaba, Samonda, UI / UCH Axis, Sango",
    responseTime: "Rapid response & immediate home visits",
    availability: "7 days a week (Morning, Afternoon & Night Shifts)"
  },
  {
    region: "Ibadan South-West & Oluyole Hub",
    areas: "Oluyole Estate, Ring Road, Iyaganku GRA, Alalubosa GRA, Challenge, Liberty Road",
    responseTime: "Scheduled & same-day emergency visits",
    availability: "7 days a week (Flexible shift hours)"
  },
  {
    region: "Ibadan North-West & East / Extension",
    areas: "Jericho GRA, Eleyele, Dugbe, Onireke, Akobo, Ojoo, Moniya, Ologuneru",
    responseTime: "Scheduled in-home care & intensive blocks",
    availability: "7 days a week (Pre-arranged bookings)"
  }
];

export const WORKING_HOURS_DATA = [
  {
    service: "Private In-Home Visits (Morning / Afternoon)",
    hours: "7:00 AM – 6:00 PM",
    days: "Monday – Sunday",
    note: "Flexible arrival times across all Ibadan zones"
  },
  {
    service: "Overnight & Dedicated Shift Nursing",
    hours: "7:00 PM – 7:00 AM (12-Hour Blocks)",
    days: "By Prior Booking",
    note: "Continuous bedside monitoring in your Ibadan home"
  },
  {
    service: "Direct Phone & WhatsApp Triage Line",
    hours: "24 Hours / 7 Days",
    days: "Round-the-clock Availability",
    note: "Direct communication with Nurse Adaeze for urgent inquiries in Ibadan"
  }
];
