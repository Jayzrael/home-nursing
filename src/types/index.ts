export interface Qualification {
  title: string;
  issuer: string;
  year?: string;
  description: string;
  badge?: string;
}

export interface NursingService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'clinical' | 'specialized' | 'elderly-maternal' | 'support';
  features: string[];
  duration: string;
  suitableFor: string[];
  pricingNote?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      tips?: string[];
    }[];
    conclusion: string;
    nurseTip: string;
  };
}

export interface FormFieldGuide {
  id: string;
  step: string;
  fieldName: string;
  fieldType: string;
  required: boolean;
  helpText: string;
  options?: string[];
  purpose: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relationship: string;
  serviceReceived: string;
  rating: number;
  quote: string;
  date: string;
}

export interface ServiceArea {
  name: string;
  coverage: string;
  travelFee: string;
}

export interface WorkingHour {
  day: string;
  hours: string;
  isEmergencyAvailable: boolean;
}
