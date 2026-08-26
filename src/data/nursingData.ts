export interface HomeNursingServiceItem {
  id: string;
  title: string;
  category: 'consultation' | 'monitoring' | 'wound' | 'maternal' | 'education' | 'home-visit';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  suitableFor: string[];
  duration: string;
  iconName: string;
}

export const DHERM_HEALTH_INFO = {
  name: "DHERMHEALTCONNET",
  displayName: "DhermHealthConnect",
  motto: "Bringing Professional Care to Your Doorstep.",
  nurseName: "Emmanuel Damilola Mary",
  nurseQualifications: "RN, RM, BLS, BNSc",
  title: "Registered Nurse & Registered Midwife",
  tagline: "Compassionate, Professional Nursing Care — Wherever You Are.",
  shortBio: "I'm a Registered Nurse and Midwife with clinical training across pediatric, medical-surgical, emergency, and psychiatric nursing settings. My background includes hands-on experience in maternal and child health, immunization and growth monitoring, wound care, and patient education — with a particular passion for community health awareness and holistic, compassionate patient care.",
  careApproach: "I believe good nursing care goes beyond treatment — it's about listening, educating, and making patients and their families feel supported every step of the way, whether that's in a hospital ward or the comfort of their own home.",
  areasOfExpertise: [
    { title: "Pediatric & Maternal-Child Health", desc: "Comprehensive infant wellness, developmental monitoring, immunization oversight, and dedicated post-delivery maternal recovery." },
    { title: "Emergency Response & Triage", desc: "Rapid clinical assessment, vital sign stabilization, acute symptom escalation, and emergency patient guidance." },
    { title: "Wound Care & IV Management", desc: "Hospital-standard aseptic dressings, post-operative surgical care, diabetic ulcer management, and sterile infusion protocols." },
    { title: "Patient Education & Counseling", desc: "Empowering individuals and families with disease self-management, nutritional guidance, and clear medical coaching." },
    { title: "Infection Control & Safety Standards", desc: "Strict sterile protocols, cross-contamination prevention, and safe home healthcare environment optimization." }
  ],
  phones: [
    { label: "Direct Phone Line", number: "0706 395 8561", link: "+2347063958561" },
    { label: "Emergency & WhatsApp Triage", number: "0706 395 8561", link: "+2347063958561" }
  ],
  phone: "0706 395 8561",
  phoneFormatted: "0706 395 8561",
  whatsappNumber: "2347063958561",
  whatsappPrefill: "Hello Nurse Emmanuel Damilola Mary! I would like to inquire about booking professional nursing care through DhermHealthConnect.",
  email: "akintundeolukunla@gmail.com",
  locations: [
    {
      name: "Primary Clinical Outreach",
      address: "Direct In-Home Care & Virtual Consultations Nationwide"
    },
    {
      name: "Private Bedside Dispatch",
      address: "Scheduled In-Home Visits & Nursing Support"
    }
  ],
  stats: [
    { value: "RN & RM", label: "Dual Certified Nurse & Midwife (BLS, BNSc)" },
    { value: "Since 2020", label: "Hospital & Community Clinical Exposure" },
    { value: "100%", label: "Personalized 1-on-1 Patient Continuity" },
    { value: "24/7", label: "Responsive Patient Support & Virtual Triage" }
  ]
};

// Aliases for backwards compatibility
export const THESANITAS_NURSE_INFO = DHERM_HEALTH_INFO;
export const AVON_HOME_NURSING_INFO = DHERM_HEALTH_INFO;

export const HOME_NURSING_SERVICES: HomeNursingServiceItem[] = [
  {
    id: "online-nursing-consultation",
    title: "Online Nursing Consultation",
    category: "consultation",
    categoryLabel: "Virtual Care",
    shortDesc: "Convenient, private virtual clinical consultations for symptom assessment, triage, recovery check-ins, and health guidance.",
    fullDesc: "Access professional nursing insight wherever you are. Through secure video or voice consultations, get immediate clinical guidance, recovery assessments, lab test review discussions, and clear next steps for your health concerns without leaving home.",
    features: [
      "Real-time vital symptom assessment and clinical triage",
      "Post-discharge recovery check-ins and recovery milestone tracking",
      "Second opinions on daily care routines and recovery protocols",
      "Direct digital summary and personalized care recommendations",
      "Immediate escalation guidance for urgent conditions"
    ],
    suitableFor: [
      "Patients needing quick clinical advice without clinic commutes",
      "Families seeking professional guidance for managing sick relatives",
      "Individuals recovering at home who require ongoing check-ins"
    ],
    duration: "30 to 45 minutes per consultation session",
    iconName: "stethoscope"
  },
  {
    id: "health-education",
    title: "Health Education & Lifestyle Coaching",
    category: "education",
    categoryLabel: "Wellness & Prevention",
    shortDesc: "Empowering patients and families with actionable health literacy, disease prevention strategies, and healthy lifestyle routines.",
    fullDesc: "Knowledge is the cornerstone of lasting health. We provide structured education sessions tailored to your lifestyle, focusing on chronic disease prevention, nutrition, wellness preservation, and practical family caregiver training.",
    features: [
      "Customized health literacy and wellness roadmaps",
      "Practical family caregiver training and safety coaching",
      "Nutritional guidance adapted to traditional African diets",
      "Hygiene, infection prevention, and sanitation best practices",
      "Holistic wellness coaching for all age groups"
    ],
    suitableFor: [
      "Families managing home care for elderly or recovering relatives",
      "Individuals seeking proactive health and lifestyle optimization",
      "Community groups and corporate wellness programs"
    ],
    duration: "45 to 60 minute interactive coaching sessions",
    iconName: "heart-pulse"
  },
  {
    id: "bp-diabetes-monitoring",
    title: "Blood Pressure & Diabetes Monitoring",
    category: "monitoring",
    categoryLabel: "Chronic Disease",
    shortDesc: "Routine blood pressure checks, blood glucose tracking, insulin administration guidance, and cardiovascular risk management.",
    fullDesc: "Stay ahead of hypertension and diabetes complications with regular, accurate clinical tracking. We provide in-home or guided vitals monitoring, blood sugar logging, insulin administration support, and tailored dietary advice to keep readings stable.",
    features: [
      "Precise digital & manual blood pressure assessment and trend tracking",
      "Fasting and random blood glucose testing with calibrated glucometers",
      "Insulin injection technique training and site rotation coaching",
      "Dietary sodium and carbohydrate management coaching",
      "Structured clinical log sheets shared directly with your physician"
    ],
    suitableFor: [
      "Hypertensive and diabetic patients needing consistent monitoring",
      "Elderly individuals who struggle with home monitoring devices",
      "Patients undergoing medication adjustments"
    ],
    duration: "45 minutes per visit or scheduled regular routines",
    iconName: "activity"
  },
  {
    id: "wound-care-guidance",
    title: "Wound Care Guidance & Dressing",
    category: "wound",
    categoryLabel: "Specialized Care",
    shortDesc: "Hospital-grade sterile dressing, surgical incision care, diabetic foot ulcer management, and infection surveillance.",
    fullDesc: "Accelerate healing and prevent dangerous complications with skilled wound management. Utilizing aseptic techniques and modern dressing materials, we provide sterile cleaning, dressing changes, and ongoing healing assessment in the comfort of your home.",
    features: [
      "Strict aseptic dressing changes for surgical incisions and C-sections",
      "Diabetic foot ulcer cleaning, debridement oversight, and pressure relief",
      "Early infection surveillance (redness, exudate, temperature, swelling)",
      "Suture and staple removal under medical orders",
      "Photo progress logs documenting wound granulation and healing"
    ],
    suitableFor: [
      "Post-operative patients discharged after surgical procedures",
      "Mothers healing from Caesarean section incisions",
      "Individuals with chronic, slow-healing wounds or diabetic ulcers"
    ],
    duration: "45 to 60 minutes per dressing session",
    iconName: "bandage"
  },
  {
    id: "medication-education",
    title: "Medication Education & Adherence",
    category: "education",
    categoryLabel: "Pharmacology & Safety",
    shortDesc: "Prescription schedule organization, side-effect awareness, safe injection practices, and compliance coaching.",
    fullDesc: "Prevent drug interactions, missed doses, and medication errors. We help organize daily pill regimens, explain drug indications and potential side effects in plain language, and coach safe administration techniques for injections and specialty medications.",
    features: [
      "Comprehensive prescription review and organizer setup",
      "Instruction on oral, subcutaneous, and intramuscular administration",
      "Side effect identification and contraindication checks",
      "Pill dispenser scheduling to eliminate missed or double dosing",
      "Storage requirements guidance (e.g. insulin and biologic refrigeration)"
    ],
    suitableFor: [
      "Patients taking multiple daily medications (polypharmacy)",
      "Caregivers needing clarity on complex drug schedules",
      "Patients self-administering insulin or anticoagulant injections"
    ],
    duration: "40 to 60 minutes per education session",
    iconName: "pill"
  },
  {
    id: "antenatal-postnatal-support",
    title: "Antenatal & Postnatal Support",
    category: "maternal",
    categoryLabel: "Maternal & Child",
    shortDesc: "Midwife-led maternal health guidance, postpartum recovery, C-section care, newborn cord care, and lactation coaching.",
    fullDesc: "Expert, compassionate maternal care led by a certified Registered Midwife. From pregnancy wellness education to post-delivery home care, lactation assistance, and newborn health checks, we support mother and baby through every milestone of early parenthood.",
    features: [
      "Midwife-led post-delivery maternal recovery assessment and incision care",
      "Lactation support: latching techniques, engorgement relief, and pumping",
      "Newborn wellness checks: umbilical cord care, jaundice check, and weight",
      "Antenatal birth preparation and early labor warning sign guidance",
      "Postpartum emotional well-being check-ins and family reassurance"
    ],
    suitableFor: [
      "Expectant mothers seeking antenatal education and reassurance",
      "Postpartum mothers recovering from vaginal or C-section birth",
      "First-time parents needing hands-on newborn care guidance"
    ],
    duration: "60 to 90 minutes per maternal visit",
    iconName: "baby"
  },
  {
    id: "home-nursing-visits",
    title: "Home Nursing Visits",
    category: "home-visit",
    categoryLabel: "Bedside Care",
    shortDesc: "Dedicated in-home clinical nursing, vital signs monitoring, bedside hygiene, convalescence care, and elderly support.",
    fullDesc: "Receive attentive, hospital-standard clinical nursing directly at your doorstep. We provide comprehensive bedside care, assisted mobility, hygiene support, vital signs surveillance, and compassionate companionship for patients recovering at home or aging in place.",
    features: [
      "Complete vital signs assessment, logging, and health checks",
      "Assisted mobility, repositioning to prevent bedsores, and safe transfers",
      "Bedside hygiene support and skin barrier protection",
      "Medication administration and clinical treatment implementation",
      "Direct regular updates and progress reports shared with family members"
    ],
    suitableFor: [
      "Elderly family members requiring attentive daily or weekly support",
      "Patients recovering from major illness, stroke, or surgery at home",
      "Busy families needing trusted, professional nursing continuity"
    ],
    duration: "Flexible visit blocks (2–4 hours) or scheduled recurring routines",
    iconName: "home"
  }
];

export const SERVICE_AREAS_DATA = [
  {
    region: "Metropolitan Coverage & Urban Centers",
    areas: "City-wide residential neighborhoods, estates, and urban districts",
    responseTime: "Rapid response & flexible morning/afternoon scheduled visits",
    availability: "7 days a week (Morning, Afternoon & Dedicated Shifts)"
  },
  {
    region: "Residential Communities & Suburbs",
    areas: "Suburban zones, family estates, and extended community areas",
    responseTime: "Pre-arranged scheduled appointments and recurring plans",
    availability: "7 days a week (Flexible scheduling)"
  },
  {
    region: "Nationwide Online Consultations",
    areas: "Available to patients and families anywhere via secure video & audio",
    responseTime: "Same-day booking & scheduled virtual appointments",
    availability: "Monday to Sunday (Flexible hours)"
  }
];

export const WORKING_HOURS_DATA = [
  {
    service: "Home Nursing Visits (Day Shifts)",
    hours: "7:00 AM – 6:00 PM",
    days: "Monday – Sunday",
    note: "Flexible arrival times tailored to patient routine"
  },
  {
    service: "Online Nursing Consultations & Telehealth",
    hours: "8:00 AM – 9:00 PM",
    days: "Monday – Sunday",
    note: "Secure video or phone appointments"
  },
  {
    service: "Direct WhatsApp & Phone Line",
    hours: "24 Hours / 7 Days",
    days: "Round-the-clock Triage",
    note: "Direct communication on 0706 395 8561"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    quote: "Nurse Damilola provided exemplary post-operative wound care and vitals monitoring for my mother. Her professionalism, hygiene, and calm demeanor gave our entire family peace of mind.",
    author: "Mrs. Folashade A.",
    relationship: "Daughter of Care Recipient",
    location: "Home Nursing & Wound Care",
    rating: 5,
    date: "Recent Patient Review"
  },
  {
    id: "test-2",
    quote: "The virtual consultation and antenatal coaching were so thorough. She listened attentively, answered every single concern about my newborn, and guided us through umbilical cord care step by step.",
    author: "Blessing & Emmanuel O.",
    relationship: "First-time Parents",
    location: "Antenatal & Postnatal Support",
    rating: 5,
    date: "Recent Client"
  },
  {
    id: "test-3",
    quote: "Managing my father's hypertension and diabetes had become overwhelming until Nurse Emmanuel stepped in with regular BP checks, blood sugar logs, and dietary advice. Highly recommended!",
    author: "Dr. K. Babatunde",
    relationship: "Family Representative",
    location: "Chronic Condition Monitoring",
    rating: 5,
    date: "Verified Family Review"
  },
  {
    id: "test-4",
    quote: "Her bedside manner is extraordinary. Having a licensed nurse and midwife come straight to our home made my grandmother's recovery after discharge smooth and stress-free.",
    author: "Chukwudi N.",
    relationship: "Grandson of Patient",
    location: "Bedside Home Care",
    rating: 5,
    date: "Verified Review"
  }
];
