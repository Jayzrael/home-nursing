export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  image: string;
  imageCredit?: string;
  tags: string[];
  content: string; // Full content of the article
}

export const BLOG_CATEGORIES = [
  'All',
  'Elderly Care',
  'Wound Care',
  'Maternal Health',
  'Chronic Disease',
  'Nutrition & Diet',
  'Health Education'
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-001',
    slug: 'how-to-care-for-aging-parent-at-home-nigeria',
    title: 'How to Care for an Aging Parent at Home in Nigeria',
    category: 'Elderly Care',
    date: 'August 10, 2026',
    readTime: '7 min read',
    author: {
      name: 'Nurse Emmanuel Damilola Mary',
      role: 'Registered Nurse & Midwife (RN, RM, BLS, BNSc)',
      avatar: '/images/nurse-bp-check.jpg'
    },
    excerpt: 'As Nigeria\'s population ages, more families find themselves caring for elderly parents at home. This guide provides practical, compassionate advice for Nigerian families on providing safe, dignified elderly home care.',
    image: '/images/nurse-bp-check.jpg',
    tags: ['elderly care', 'aging', 'Nigeria', 'home care', 'senior health'],
    content: `
Caring for an aging parent at home is one of the most meaningful acts of love a Nigerian family can demonstrate. According to the World Health Organization (WHO), by 2050, the number of people over 60 in Africa will more than double. In Nigeria, where the extended family system has traditionally provided a safety net, modern urban living and work demands are making this role more complex.

### Understanding Your Elderly Parent's Needs

Every elderly person has unique needs. Before establishing a care routine, it helps to assess your parent's physical and cognitive condition. Key areas to evaluate include:

- **Mobility**: Can they walk independently? Do they use a walking stick or wheelchair?
- **Cognitive health**: Are they experiencing memory lapses, confusion, or personality changes that could signal dementia?
- **Chronic conditions**: Are they managing hypertension, diabetes, arthritis, or cardiac disease?
- **Nutrition**: Are they eating adequate, balanced meals? Many elderly Nigerians lose appetite or have difficulty chewing.
- **Medication**: Do they take multiple drugs? Are they managing their prescriptions correctly?

### Creating a Safe Home Environment

Falls are the leading cause of injury among the elderly worldwide. Simple home modifications can dramatically reduce risk:

- Install grab bars in bathrooms and beside the toilet
- Remove loose rugs and electrical cords from walkways
- Ensure adequate lighting in corridors and staircases, especially at night
- Keep frequently used items at reachable heights to avoid climbing
- Consider a medical alert bracelet or simple phone at bedside for emergencies

### Daily Care Routines That Make a Difference

Consistency is comforting for elderly parents, particularly those with dementia. A predictable routine reduces anxiety and improves cooperation with care tasks.

**Morning Routine:**
- Assistance with bathing and oral hygiene
- Vital signs check (blood pressure, pulse, temperature)
- Medication administration with breakfast
- Light morning exercise or assisted walk

**Afternoon:**
- Nutritious lunch tailored to any dietary restrictions
- Short rest or nap period
- Mental stimulation: conversation, puzzles, or listening to familiar music

**Evening:**
- Evening medications administered with dinner
- Gentle stretching or passive exercises for bed-bound patients
- Safety checks before bedtime

### The Role of Professional Home Nurses

No matter how dedicated a family is, professional registered nurses provide clinical care that family members simply cannot replicate. A home nurse can:

- Monitor and document vital signs with clinical accuracy
- Administer injections and IV fluids safely
- Manage wounds, catheters, and other clinical equipment
- Recognize early warning signs of deterioration and escalate appropriately
- Provide caregiver relief so families can rest

### When to Call for Professional Help

Contact a home nursing service immediately if your elderly parent:

- Has a sudden change in consciousness or responsiveness
- Falls or sustains an injury
- Shows signs of infection (fever, redness, swelling around a wound)
- Refuses food and water for more than 24 hours
- Experiences sudden worsening of breathing or chest discomfort

### Caring for Yourself as a Caregiver

Caregiver burnout is real and common. Nigerian families often feel guilt about taking breaks, but self-care is not selfish — it is necessary. Connect with other caregivers, schedule regular respite breaks, and consider engaging a professional nurse for relief shifts.

**Summary:** Caring for an aging parent at home in Nigeria is a beautiful commitment. With the right environment, routines, and professional nursing support, your loved one can live comfortably, safely, and with dignity in the place they love most — home.
    `
  },
  {
    id: 'post-002',
    slug: 'wound-care-at-home-guide-nigeria',
    title: 'Complete Guide to Wound Care at Home: What Every Nigerian Family Should Know',
    category: 'Wound Care',
    date: 'August 5, 2026',
    readTime: '9 min read',
    author: {
      name: 'Nurse Bola Fashola',
      role: 'Clinical Wound Care Nurse Specialist (NMCN)',
      avatar: '/images/nurse-injection.jpg'
    },
    excerpt: 'Whether recovering from surgery, managing a diabetic foot ulcer, or treating a deep cut, proper wound care at home is essential. This comprehensive guide walks Nigerian families through safe, effective wound management.',
    image: '/images/nurse-home-visit.jpg',
    tags: ['wound care', 'dressing', 'diabetic ulcer', 'post-surgery', 'infection prevention'],
    content: `
Wound care is one of the most common reasons Nigerian families request home nursing services. Whether the wound is from surgery, a diabetic ulcer, a trauma injury, or a pressure sore from prolonged bed rest, proper management can mean the difference between rapid healing and serious life-threatening complications.

### Types of Wounds That Require Home Nursing Care

**Post-surgical wounds:** After operations — including Caesarean sections, abdominal surgeries, appendectomies, and orthopedic procedures — the incision must be kept clean, dry, and monitored for signs of healing or infection.

**Diabetic foot ulcers:** Nigeria has one of the highest rates of diabetes in Africa. Diabetic patients have impaired healing and nerve damage that makes foot wounds particularly dangerous. Without proper management, these can lead to amputation.

**Pressure ulcers (bedsores):** Develop in bedridden or immobile patients where sustained pressure cuts off blood supply to skin and underlying tissue. Prevention is far easier than treatment.

**Burn wounds:** From accidents in the home or kitchen. These require specialized dressing management depending on the degree of the burn.

### The Golden Rules of Wound Care

1. **Always wash hands thoroughly** before and after touching any wound or dressing
2. **Use sterile materials only** — never use cotton wool directly on a wound as fibres get embedded
3. **Never remove dressings that have adhered firmly** — soak first with saline to loosen
4. **Inspect surrounding skin** at every dressing change for redness, warmth, swelling, or discharge
5. **Report changes immediately** — a wound that was healing may suddenly deteriorate

### Step-by-Step Home Wound Dressing (General Guide)

This process should ideally be performed by or supervised by a registered nurse:

1. Gather supplies: sterile gauze pads, saline solution, appropriate wound dressing, medical tape, disposable gloves
2. Wash hands with soap and water for at least 20 seconds, then apply gloves
3. Carefully remove the old dressing — if stuck, soak with saline
4. Inspect the wound: note size, depth, colour, odour, and any discharge
5. Irrigate gently with saline — never use hydrogen peroxide or iodine on open wounds
6. Apply appropriate dressing (simple gauze, hydrocolloid, or foam depending on wound type)
7. Secure with tape without constricting circulation
8. Dispose of all used materials safely in a sealed bag

### Warning Signs of Wound Infection

Seek immediate medical attention if you observe:

- **Increased redness** spreading beyond the wound edges
- **Warmth and swelling** that was not previously present
- **Pus or cloudy discharge** with foul odour
- **Fever above 38.5°C** in the patient
- **Wound edges separating** (dehiscence) — especially after surgery
- **Red streaks** extending from the wound edge toward the heart (sign of spreading infection)

### Special Considerations: Diabetic Wound Care in Nigeria

For diabetic patients, it is critical to:

- Check blood sugar levels daily — uncontrolled sugar severely impairs healing
- Inspect both feet every single day, even when there are no symptoms
- Wear appropriate protective footwear and avoid walking barefoot
- Never attempt to "cut out" or home-treat a diabetic ulcer without professional supervision
- Attend all scheduled follow-ups with the physician and wound nurse

### Why Professional Home Wound Care is the Safer Choice

A registered wound care nurse brings clinical assessment skills that cannot be replicated by family members alone. They can detect subtle early signs of infection, apply specialized advanced dressings not available in pharmacies, document wound progress with photographs for physician review, and adjust the care plan as the wound evolves.

**Summary:** Wound care at home can be safe and effective when done correctly. Partner with a professional registered nurse for the best outcomes — especially for complex wounds like diabetic ulcers, post-surgical incisions, and pressure injuries.
    `
  },
  {
    id: 'post-003',
    slug: 'postnatal-care-new-mothers-nigeria',
    title: 'Postnatal Care: What Nigerian New Mothers Need to Know in the First 6 Weeks',
    category: 'Maternal Health',
    date: 'July 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Nurse Chiamaka Eze',
      role: 'Registered Midwife & Maternal Health Nurse (NMCN)',
      avatar: '/images/nurse-newborn.jpg'
    },
    excerpt: 'The six weeks following childbirth — the "fourth trimester" — are a critical and often underemphasized period for Nigerian mothers. Learn what proper postnatal care looks like and why professional home support matters.',
    image: '/images/nurse-newborn.jpg',
    tags: ['postnatal', 'mother', 'newborn', 'breastfeeding', 'C-section recovery', 'Nigeria'],
    content: `
Nigeria has one of the highest maternal mortality rates in the world, and a significant proportion of these deaths occur in the postnatal period — after delivery. Yet, for many Nigerian families, once a mother and baby leave the hospital, there is an assumption that the hard part is over.

The truth is, the first six weeks after childbirth are a time of tremendous physical and emotional adjustment — for both mother and baby. Professional postnatal home nursing care can be the difference between thriving and struggling.

### What Happens to Your Body After Delivery

Whether delivery was vaginal or by Caesarean section (C-section), your body goes through dramatic changes in the weeks after birth:

- The uterus begins contracting back to its pre-pregnancy size (involution) — causing afterpains especially during breastfeeding
- Lochia (postpartum vaginal discharge) transitions from red to pink to yellow-white over 4-6 weeks
- Hormone levels shift dramatically, which can trigger the "baby blues" or, in more serious cases, postnatal depression
- Your body is rebuilding energy stores depleted by pregnancy and labour
- Breast milk "comes in" typically within 2-5 days of delivery, bringing engorgement and soreness

### C-Section Recovery: What to Expect

C-section is the most common major surgery Nigerian women undergo, yet recovery education is often inadequate at discharge. Key points:

**The first 2 weeks:**
- The incision will be sore, swollen, and may feel numb — this is normal
- Keep the incision clean and dry; inspect daily for redness, swelling, or discharge
- Avoid lifting anything heavier than your baby
- Avoid driving and returning to vigorous activity

**Dressing and wound care:**
A registered home nurse should visit at least every 2-3 days to change dressings, assess the incision, and monitor for signs of wound infection or dehiscence (wound opening). Infected C-section wounds are a leading cause of maternal readmission to hospital in Nigeria.

**When to call for help immediately:**
- Fever above 38°C
- Incision is opening, leaking pus, or has a foul smell
- Severe abdominal pain beyond expected soreness
- Heavy bright red vaginal bleeding (soaking a pad in under an hour)
- Leg pain, redness, or swelling (could indicate deep vein thrombosis)

### Breastfeeding Support: A Critical Service

Nigeria's exclusive breastfeeding rates remain lower than the WHO recommendation of 6 months. Many new mothers stop breastfeeding early due to:

- Latch problems causing painful, cracked nipples
- Fear of insufficient milk supply
- Lack of support and guidance
- Mastitis (breast infection) that goes untreated

A home nurse or certified lactation supporter can help with:
- Assessing latch and positioning (including after C-section)
- Educating on demand feeding and milk supply
- Early detection and treatment guidance for mastitis
- Providing practical encouragement in the home environment

### Newborn Care in the Home

A postnatal home nurse also cares for your newborn:

- Daily weight checks to ensure adequate feeding and normal weight gain
- Umbilical cord hygiene — keep dry and clean, watch for infection signs
- Newborn jaundice monitoring (yellowing of skin and eyes) — most common in the first week
- Thermal care — ensuring the baby maintains a safe body temperature
- Guidance on positioning, safe sleep, and normal newborn behaviour

### Postnatal Emotional Health

The "baby blues" — mild tearfulness, mood swings, and anxiety — affect up to 80% of new mothers and typically resolve within 2 weeks. Postnatal depression (PND), however, affects approximately 1 in 5 Nigerian mothers and requires professional support.

Signs of postnatal depression to watch for:
- Persistent sadness or hopelessness beyond 2 weeks
- Inability to bond with the baby
- Extreme fatigue beyond normal new-parent tiredness
- Thoughts of harming yourself or the baby — **seek help immediately**

**Summary:** The postnatal period is not a time to "manage alone." Professional postnatal home nursing in the first 6 weeks protects both mother and baby, prevents complications, supports breastfeeding, and provides the emotional reassurance every new mother deserves.
    `
  },
  {
    id: 'post-004',
    slug: 'managing-hypertension-nigeria-diet-lifestyle',
    title: 'Managing High Blood Pressure in Nigeria: Practical Diet and Lifestyle Changes',
    category: 'Chronic Disease',
    date: 'July 20, 2026',
    readTime: '10 min read',
    author: {
      name: 'Dr. Emeka Okafor',
      role: 'Physician Consultant, Cardiovascular Health',
      avatar: '/images/nurse-bp-check.jpg'
    },
    excerpt: 'Hypertension affects 1 in 3 Nigerian adults, yet millions are undiagnosed or poorly controlled. This comprehensive guide explains what high blood pressure is, why it is especially prevalent in Nigeria, and how to manage it with diet, exercise, and medication adherence.',
    image: '/images/nurse-bp-check.jpg',
    tags: ['hypertension', 'blood pressure', 'heart disease', 'Nigeria', 'diet', 'lifestyle'],
    content: `
Hypertension — commonly known as "high blood pressure" — is often called the "silent killer" because it causes no symptoms until it damages vital organs. In Nigeria, it is estimated that over 30% of adults live with hypertension, making it one of the most prevalent non-communicable diseases in the country. Alarmingly, many of those affected are unaware of their condition.

### Understanding Blood Pressure Numbers

Blood pressure is measured in millimetres of mercury (mmHg) and expressed as two numbers:

- **Systolic pressure** (the top number): pressure when the heart beats
- **Diastolic pressure** (the bottom number): pressure when the heart rests between beats

Normal blood pressure is **below 120/80 mmHg**. Hypertension is diagnosed when readings consistently measure at **130/80 mmHg or higher**.

### Why Hypertension Is So Common in Nigeria

Several factors make Nigerians particularly susceptible to high blood pressure:

**Genetic predisposition:** People of African descent have a higher genetic risk of developing hypertension at younger ages and with greater severity.

**Dietary factors:** The traditional Nigerian diet can be high in sodium (from seasoning cubes, crayfish, stockfish, and added table salt), saturated fat (from palm oil in excess), and processed foods in urban areas.

**Stress:** Economic pressures, daily commuting, and occupational demands contribute to chronically elevated blood pressure.

**Physical inactivity:** Sedentary desk jobs, long commutes, and reduced traditional physical labour have increased the risk.

**Low awareness and healthcare access:** Many Nigerians only discover their high blood pressure during a health emergency — stroke, heart attack, or kidney failure.

### Adapting Nigerian Meals for Blood Pressure Control

You do not have to abandon Nigerian cuisine to control hypertension. Small, smart modifications make a significant difference:

**Reduce sodium in cooking:**
- Cut your use of seasoning cubes in half — they contain very high sodium
- Gradually reduce the amount of salt added during cooking and at the table
- Replace some seasoning cubes with fresh herbs: uziza, efirin (basil), scent leaf, ginger, and garlic are flavourful and heart-healthy
- Reduce smoked and dried fish, which are very high in sodium

**Increase potassium-rich foods:**
Potassium counteracts sodium's effect on blood pressure. Excellent Nigerian sources include:
- Plantain (especially unripe plantain)
- Waterleaf and other dark leafy vegetables
- Garden eggs (eggplant)
- Beans and lentils
- Bananas

**Control palm oil use:**
- Use palm oil in moderation — 1-2 tablespoons per pot, not a full cup
- Consider alternating with groundnut (peanut) oil or olive oil for some dishes

**Eat more whole grains:**
- Replace white rice with brown rice or ofada rice more frequently
- Include oats, millet, or guinea corn in your diet

**DASH Diet Adaptations for Nigeria:**
The DASH diet (Dietary Approaches to Stop Hypertension) is globally proven to lower blood pressure. Nigerian-friendly adaptations include:
- Jollof rice cooked with less salt and more tomatoes and pepper (natural lycopene)
- Efo riro with minimal seasoning cubes and generous waterleaf
- Moin moin (bean pudding) as a protein-rich, low-sodium option
- Oha or bitter leaf soup with reduced palm oil

### Exercise Recommendations for Hypertensive Patients

Physical activity lowers blood pressure by up to 5-8 mmHg — comparable to some medications. The WHO recommends at least 150 minutes of moderate activity per week:

- **Brisk walking:** Even 30 minutes of brisk walking around your neighbourhood 5 days a week is highly effective
- **Dancing** — a culturally enjoyable and effective cardiovascular activity
- **Housework and gardening** count toward your activity goals

**Important:** If you have uncontrolled hypertension (above 180/120), consult a physician before starting a new exercise programme.

### Medication Adherence: The Most Important Step

For many hypertensive patients, lifestyle changes alone are insufficient — they need antihypertensive medication. A critical problem in Nigeria is poor medication adherence due to cost, side effects, or feeling well and stopping treatment prematurely.

**Key message:** Never stop your blood pressure medication without consulting your doctor, even when you feel completely well. Blood pressure medication does not cure hypertension — it controls it, and stopping puts you at immediate risk of stroke or heart attack.

### The Role of Home Nursing in Hypertension Management

A registered home nurse can provide:

- Regular home blood pressure monitoring and logging
- Medication review and adherence support
- Dietary counselling adapted to your household's cooking practices
- Early identification of end-organ damage symptoms (headache, visual disturbance, chest pain, reduced urine output)
- Direct communication with your managing physician for medication adjustment

**Summary:** High blood pressure is largely manageable with the right combination of lifestyle changes, appropriate medication, and regular monitoring. With professional home nursing support, Nigerian patients with hypertension can reduce their risk of stroke, kidney failure, and heart disease dramatically.
    `
  },
  {
    id: 'post-005',
    slug: 'pressure-ulcer-prevention-bedridden-patients-nigeria',
    title: 'Preventing Pressure Ulcers (Bedsores) in Bedridden Patients: A Nigerian Caregiver Guide',
    category: 'Elderly Care',
    date: 'July 12, 2026',
    readTime: '7 min read',
    author: {
      name: 'Nurse Adaeze Okonkwo',
      role: 'Senior Home Care Registered Nurse (NMCN)',
      avatar: '/images/nurse-bp-check.jpg'
    },
    excerpt: 'Pressure ulcers — commonly called bedsores — are entirely preventable with the right care. This guide explains how Nigerian families can protect bedridden loved ones from this painful, dangerous complication.',
    image: '/images/nurse-home-visit.jpg',
    tags: ['pressure ulcer', 'bedsore', 'bedridden', 'elderly care', 'home nursing'],
    content: `
Pressure ulcers — also called decubitus ulcers or bedsores — are one of the most serious and painful complications that can develop in bedridden or immobile patients. In Nigeria, they are devastatingly common in patients recovering from stroke, after major surgery, or in elderly patients with limited mobility. The good news is that with the right knowledge and nursing care, the majority of pressure ulcers are completely preventable.

### What Causes Pressure Ulcers?

Pressure ulcers develop when sustained pressure on the skin cuts off blood supply to the tissue, causing cells to die. They most commonly occur over bony prominences — areas where bone is close to the skin surface, with little fat or muscle cushioning. The most common sites in Nigerian patients are:

- Sacrum (base of the spine / tailbone)
- Heels
- Hips (greater trochanters)
- Back of the head
- Shoulder blades
- Ankles and elbows

### Who Is at Highest Risk?

Patients at highest risk for pressure ulcers include:

- Those who are completely bedridden (stroke survivors, spinal cord injury, post-major surgery)
- Elderly patients with thin, fragile skin
- Patients with diabetes or vascular disease (impaired circulation)
- Those with urinary or faecal incontinence (moisture weakens skin integrity)
- Malnourished patients (protein deficiency impairs tissue repair)
- Patients who are unconscious or heavily sedated

### The Repositioning Schedule: The Single Most Important Prevention Measure

The most powerful intervention to prevent pressure ulcers is regular repositioning. For bedridden patients:

- **Change position at least every 2 hours**, day and night
- Use a written repositioning schedule or chart to track turning times
- For chair-bound patients, shift weight every 15-30 minutes
- When turning, use proper technique to avoid shear (dragging skin) — lift rather than drag the patient across the bed

**Repositioning positions to alternate:**
- Flat on the back (supine)
- On the right side (30-degree tilt using a foam wedge)
- On the left side (30-degree tilt)
- Slightly elevated head of bed (no more than 30 degrees to reduce shear)

### Skin Care: Your Daily Protection Routine

1. **Inspect the entire skin surface daily**, especially over bony prominences — at every repositioning
2. **Keep skin clean and dry**: Clean immediately after any episode of incontinence
3. **Moisturize regularly**: Apply barrier cream or lotion to dry skin — dry skin breaks more easily
4. **Avoid massage directly over bony prominences**: This can cause further tissue damage
5. **Use protective dressings** over high-risk areas (heels, sacrum) proactively

### Nutrition: Healing from the Inside Out

The skin requires adequate protein, calories, and micronutrients to maintain integrity and heal. For a bedridden patient:

- Ensure adequate protein: eggs, beans, lean meat, fish, and dairy
- Include vitamin C–rich foods: fresh tomatoes, peppers, citrus fruits — critical for collagen production
- Zinc from beans, seeds, and whole grains supports skin repair
- Ensure adequate hydration — dehydration significantly worsens skin vulnerability

### When to Call a Home Nurse Immediately

Contact a professional home nurse if you notice:

- A red area on the skin that does not fade within 30 minutes of pressure removal
- Any open wound or blister over a bony area
- Foul odour from the wound area
- Fever with a worsening wound

**Summary:** Pressure ulcers are a nursing emergency in prevention — consistent repositioning, meticulous skin care, proper nutrition, and pressure-relieving equipment form the foundation. Professional registered home nurses are trained specifically in pressure ulcer prevention and early intervention. For bedridden patients, this is one of the most important reasons to engage professional home nursing support.
    `
  },
  {
    id: 'post-006',
    slug: 'understanding-diabetes-management-nigeria',
    title: 'Living Well With Diabetes in Nigeria: A Comprehensive Home Management Guide',
    category: 'Chronic Disease',
    date: 'June 30, 2026',
    readTime: '11 min read',
    author: {
      name: 'Dr. Emeka Okafor',
      role: 'Physician Consultant, Cardiovascular Health',
      avatar: '/images/nurse-bp-check.jpg'
    },
    excerpt: 'Nigeria is home to the largest population of people living with diabetes in Africa. This guide covers everything you need to know about managing diabetes at home — from monitoring your blood sugar to adapting your diet and avoiding dangerous complications.',
    image: '/images/nurse-injection.jpg',
    tags: ['diabetes', 'blood sugar', 'insulin', 'Nigeria', 'diet', 'foot care', 'chronic disease'],
    content: `
Nigeria carries the largest burden of diabetes in Africa, with an estimated 5.3 million adults living with the condition — and millions more undiagnosed. Yet diabetes is highly manageable: people living with well-controlled diabetes can lead long, healthy, and full lives. The key is understanding your condition and following a consistent daily management routine.

### Understanding Diabetes: Type 1 vs. Type 2

**Type 1 Diabetes** is an autoimmune condition where the body produces little or no insulin. It requires insulin injections for survival. It commonly presents in young people.

**Type 2 Diabetes** (by far the most common type in Nigeria) occurs when the body becomes resistant to insulin or doesn't produce enough. It is strongly linked to lifestyle factors — diet, weight, and physical inactivity — though genetics also play a significant role.

### Understanding Your Blood Sugar Targets

Your healthcare team will set individual targets, but general guidelines are:

| Measurement | Target Range |
|---|---|
| Fasting blood glucose | 4.0 – 7.0 mmol/L (72 – 126 mg/dL) |
| 2 hours after meals | Below 10 mmol/L (180 mg/dL) |
| HbA1c (3-month average) | Below 7% (53 mmol/mol) |

### Self-Monitoring of Blood Glucose at Home

Testing your blood sugar regularly gives you vital real-time feedback on how food, exercise, and medication are affecting your control. A glucometer (blood sugar monitor) is an essential tool.

**When to test:**
- Fasting (first thing in the morning, before eating)
- 2 hours after your main meals
- Before and after exercise
- Before bed
- Anytime you feel unwell or suspect low blood sugar (hypoglycaemia)

### Adapting Nigerian Foods for Diabetes Management

The good news: many traditional Nigerian foods are excellent for blood sugar control. The challenge lies in portion sizes and preparation methods.

**Excellent choices for diabetics:**
- **Whole grains**: Brown rice, ofada rice, oats, guinea corn (sorghum), millet, and whole wheat swallow
- **Legumes**: Beans (ewa), lentils, soya beans — these are low glycaemic index and high in fibre
- **Vegetables**: All leaf vegetables (waterleaf, spinach, bitter leaf, ugwu), okra, garden eggs, tomatoes, cucumber
- **Unripe plantain**: Much lower in sugar than ripe plantain; excellent for diabetics when cooked
- **Lean proteins**: Fish, chicken (skinless), turkey, eggs

**Foods to reduce or moderate:**
- White rice in large portions — swap for smaller portions of brown or ofada rice
- Ripe plantain — high sugar content
- Eba (garri), pounded yam, amala in large quantities — high glycaemic index; reduce portion sizes significantly
- Sweet drinks, Fanta, Coke, bottled juices — eliminate entirely
- Chin chin, puff puff, fried dough — very high in sugar and fat

### Diabetic Foot Care: A Life-Saving Habit

Diabetic foot complications are the leading cause of non-traumatic lower limb amputation in Nigeria. Prevention requires daily vigilance:

**Daily foot care routine:**
1. Inspect both feet every day — use a mirror or ask a helper to check the sole
2. Wash feet daily with mild soap and lukewarm water (test temperature with elbow — never hot)
3. Dry thoroughly between each toe
4. Apply moisturizing cream to heels and soles (not between toes)
5. Cut nails straight across with clean scissors; never cut corners
6. Always wear protective footwear — never walk barefoot, including indoors
7. Inspect shoes before putting them on (objects inside can cause injury you cannot feel)

**Seek immediate medical attention for:**
- Any cut, blister, or wound on the foot — no matter how minor it seems
- Redness, swelling, or warmth in the foot
- Discolouration (darkening or blackening) of any part of the foot
- Any wound that is not healing after 2 days

### The Role of Professional Home Nursing in Diabetes Management

A registered home nurse provides invaluable diabetes support:

- Teaching correct insulin injection technique and rotation sites
- Monitoring blood glucose trends and communicating with your physician
- Performing professional diabetic foot assessments regularly
- Wound care for any diabetic foot injury
- Educating family members on recognizing and treating hypoglycaemia (low blood sugar)
- Supporting medication adherence through organized pill management

**Summary:** Diabetes management is a daily commitment, but it is absolutely achievable. With the right knowledge, dietary adjustments that respect your Nigerian food culture, consistent monitoring, medication adherence, and professional nursing support, you can live a long and well life with diabetes in Nigeria.
    `
  }
];
