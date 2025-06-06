export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  details: string;
  images: string[];
  benefits: string[];
  countries: string[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    title: "Visitor Visa Services – Apply for Any Country with Ease",
    slug: "visitor-visa",
    description:
      "Planning to travel abroad for tourism, visiting family, attending business meetings, or medical treatment? At New Journey Immigration, we provide expert visitor visa services for all countries.",
    details: `Planning to travel abroad for tourism, visiting family, attending business meetings, or medical treatment?
At New Journey Immigration, we provide expert visitor visa services for all countries — guiding you step by step through the visa process so your travel dreams become reality.

From application forms to interview prep, document review to follow-ups — we take care of everything. Whether you're applying from India, UAE, Nigeria, Philippines, or Canada, we've got you covered.

✈️ We Provide Visitor Visa Services For:

🇨🇦 Canada Visitor Visa
Purpose: Tourism, visiting family/friends, business meetings
Validity: Up to 10 years (multiple-entry)
Requirements: Valid passport, invitation letter (if any), proof of funds, strong ties to home country
Our Support: Full application prep, help with biometrics, SOP writing, interview readiness

🇺🇸 USA Visitor Visa (B1/B2)
Purpose: Business (B1), Tourism/Family (B2)
Validity: Up to 10 years
Key Support: DS-160 Form, Visa Fee Guidance, Interview Training, Travel History Review

🇬🇧 UK Standard Visitor Visa
Purpose: Leisure, short courses, family visits, conferences
Stay Period: Up to 6 months
Documents: Travel itinerary, accommodation proof, sponsor letter (if applicable), bank statements

🇪🇺 Schengen Visa (Europe)
Covers: 27 countries (e.g., France, Germany, Italy, Spain, Netherlands)
Stay Duration: Up to 90 days within 180 days
Requirements: Valid travel insurance, round-trip tickets, financial documents, hotel booking
Bonus: We help create a clear travel plan across multiple countries

🇦🇺 Australia Visitor Visa (Subclass 600)
Duration: 3, 6, or 12 months
Use Cases: Tourism, family visit, short-term stay
Key Document: Genuine Temporary Entrant (GTE) Statement – we help you write it!

🇦🇪 UAE Visit Visa
Options: 30, 60, 90 days – single or multiple entry
Perks: Fast approval, e-visa available
Add-Ons: Travel insurance, hotel booking help, express processing

🌏 Other Countries We Support
We offer visitor visa services for over 60+ countries, including Singapore, Malaysia, Thailand, Japan, South Korea, New Zealand, Turkey, South Africa, Brazil, Mexico, Saudi Arabia, and more...

Need help with a country not listed here? Just contact us — we probably support it too!`,
    images: [
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201308/1_qvkrcb.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/5_fg6il0.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/4_gsaphb.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/2_psrps3.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/3_oasn0j.jpg",
    ],
    benefits: [
      "🌐 Expert Visa Consultants with in-depth knowledge of global immigration systems",
      "📝 Personalized Document Checklists based on your destination",
      "💼 High Approval Rates thanks to detailed case assessments",
      "🤝 Dedicated Case Managers to assist you from start to finish",
      "💬 Responsive Communication via phone, email, or WhatsApp",
      "🔒 Secure & Confidential handling of all your personal documents",
      "🛡️ Complete Travel Support – including insurance, bookings & cover letters",
      "✍️ Statement of Purpose (SOP) & Cover Letter Writing",
      "📄 Invitation Letter Drafting",
      "🎯 Mock Interview Preparation",
      "🧳 Flight & Hotel Itinerary Assistance",
      "💳 Travel Insurance Arrangements",
      "📋 Application Submission and Tracking",
      "✨ Visa Refusal Review & Re-application Support",
    ],
    countries: [
      "Canada",
      "USA",
      "UK",
      "Australia",
      "Schengen Countries (27 European Nations)",
      "UAE",
      "Singapore",
      "Malaysia",
      "Thailand",
      "Japan",
      "South Korea",
      "New Zealand",
      "Turkey",
      "South Africa",
      "Brazil",
      "Mexico",
      "Saudi Arabia",
      "60+ Countries Worldwide",
    ],
    faqs: [
      {
        id: 1,
        question: "Can I apply for multiple visitor visas at once?",
        answer:
          "Yes! If you plan to visit multiple countries, we can help you coordinate applications — such as Europe + UK + UAE in one travel plan. We manage timing, documentation, and ensure each application meets specific requirements.",
      },
      {
        id: 2,
        question: "What happens if my visa is refused?",
        answer:
          "We'll analyze the reason, strengthen your documents, and support you in re-applying or appealing where possible. Common refusal reasons include insufficient documentation, unclear travel purpose, or inadequate financial proof.",
      },
      {
        id: 3,
        question: "Is travel insurance mandatory?",
        answer:
          "Yes, especially for Schengen and some Asian countries. We can arrange the correct insurance coverage for you. Schengen countries require minimum €30,000 coverage, while other countries have varying requirements.",
      },
      {
        id: 4,
        question: "How soon should I apply before my travel date?",
        answer:
          "It's ideal to apply 1–3 months before your trip. Some countries have longer processing times, so earlier is always better. Peak seasons may require even earlier applications.",
      },
      {
        id: 5,
        question: "Can you assist with urgent visa processing?",
        answer:
          "Yes! We offer express/priority services for select countries — including UAE, UK, Canada, and more. Additional fees may apply for expedited processing.",
      },
      {
        id: 6,
        question: "What documents do I need for a visitor visa application?",
        answer:
          "Generally you'll need: valid passport, completed application forms, proof of financial means, travel itinerary, invitation letter (if applicable), proof of ties to home country, and photographs. Requirements vary by country.",
      },
      {
        id: 7,
        question: "Can I work on a visitor visa?",
        answer:
          "Generally no. Visitor visas are for tourism, family visits, or limited business activities like meetings. Unauthorized work can result in deportation and future visa bans.",
      },
      {
        id: 8,
        question: "What is the maximum duration of stay allowed?",
        answer:
          "Duration varies by country: US B1/B2 allows up to 6 months per visit, Schengen permits 90 days within 180 days, Canada visitor visas can be valid up to 10 years with 6-month stays.",
      },
    ],
  },
  {
    title: "Dependent Visa Services - Bring Your Family Together",
    slug: "dependent-visa",
    description:
      "Reunite with your family abroad through our comprehensive dependent visa services for spouses, children, and family members.",
    details: `Family Reunification Made Simple - Dependent Visa Services

At New Journey Immigration, we understand that being separated from your loved ones is one of the hardest parts of living abroad. Our dependent visa services help you bring your family members to join you in your new country, ensuring you can build your future together.

👨‍👩‍👧‍👦 Who Can Apply for Dependent Visas?

🇨🇦 Canada Dependent Visas:
• Spouse/Common-law Partner (including same-sex partners)
• Dependent Children (under 22 years old)
• Parents & Grandparents (through Super Visa or PGP)
• Adopted Children with proper documentation

🇦🇺 Australia Dependent Visas:
• Partner Visa (Subclass 820/801, 309/100)
• Child Visa (Subclass 101, 102, 445)
• Parent Visa (Subclass 103, 143, 173, 884)
• Remaining Relative Visa (Subclass 115, 835)

🇺🇸 USA Family-Based Immigration:
• Immediate Relatives (spouse, unmarried children under 21, parents)
• Family Preference Categories (F1, F2A, F2B, F3, F4)
• K-1 Fiancé(e) Visa
• K-3 Spouse of US Citizen

🇬🇧 UK Family Visas:
• Spouse/Partner Visa
• Child Dependent Visa
• Parent Visa (Adult Dependent Relative)
• Fiancé(e) Visa

🇳🇿 New Zealand Family Category:
• Partnership Resident Visa
• Dependent Child Resident Visa
• Parent Category Resident Visa
• Adult Sibling/Adult Child Category

✅ Our Comprehensive Dependent Visa Services:

1. Eligibility Assessment & Pathway Selection
• Detailed relationship assessment
• Financial requirement evaluation
• Best visa category recommendation
• Timeline and cost estimation

2. Document Preparation & Verification
• Marriage certificates and relationship evidence
• Birth certificates and family documents
• Financial support documentation
• Medical examinations coordination
• Police clearance certificates

3. Relationship Evidence Compilation
• Joint bank accounts and financial records
• Communication history (emails, calls, messages)
• Photos and travel history together
• Joint lease agreements or property ownership
• Affidavits from friends and family

4. Application Submission & Processing
• Complete application form preparation
• Document translation and certification
• Biometrics appointment booking
• Interview preparation (if required)
• Regular status updates and follow-ups

5. Post-Approval Support
• Travel document guidance
• Settlement assistance
• Work permit applications (where applicable)
• Healthcare enrollment
• School enrollment for children`,
    images: [],
    benefits: [
      "👨‍👩‍👧‍👦 Complete Family Reunification Services",
      "📋 Expert Relationship Evidence Compilation",
      "💰 Financial Requirement Assessment & Planning",
      "🌍 Multi-Country Dependent Visa Expertise",
      "⚡ Fast-Track Processing for Urgent Cases",
      "📞 Dedicated Family Immigration Specialists",
      "🔒 Confidential Handling of Personal Documents",
      "💬 Interview Preparation & Coaching",
      "🏠 Post-Arrival Settlement Assistance",
      "👶 Child-Specific Documentation Support",
      "💑 Same-Sex Partner Visa Expertise",
      "📝 Affidavit & Statutory Declaration Assistance",
      "🏥 Medical Examination Coordination",
      "🛂 Work Permit Applications for Dependents",
    ],
    countries: [
      "Canada (Spouse, Children, Parents)",
      "Australia (Partner, Child, Parent Visas)",
      "USA (Family-Based Immigration)",
      "UK (Family Visas)",
      "New Zealand (Family Category)",
      "European Union Countries",
      "Other Immigration Destinations",
    ],
    faqs: [
      {
        id: 4,
        question: "Who qualifies as a dependent for visa purposes?",
        answer:
          "Dependents typically include spouses, common-law or civil partners, and children under a specific age (usually 18 or 21). Some countries may also consider dependent parents, unmarried adult children with disabilities, or other family members in special circumstances. Each country has its own definition and requirements for dependent status.",
      },
      {
        id: 5,
        question: "Can dependents work or study on their visa?",
        answer:
          "Work and study rights for dependents vary by country and visa type. Some countries permit full work rights, others restrict work hours or require separate work permits, and some don't allow employment at all. Similarly, study rights may be limited or require additional permissions. We can provide country-specific guidance on these entitlements.",
      },
      {
        id: 6,
        question:
          "What if my relationship status changes while on a dependent visa?",
        answer:
          "Changes in relationship status such as divorce, separation, or death of the primary visa holder can significantly impact dependent visas. Most countries require notification of these changes, and the dependent may need to apply for a different visa category or leave the country. It's crucial to seek immediate advice if your circumstances change.",
      },
      {
        id: 201,
        question: "How long does dependent visa processing take?",
        answer:
          "Processing times vary by country and circumstances. Generally, it ranges from 1-6 months. Applications filed together with the primary applicant often process simultaneously, while subsequent dependent applications may take longer. Factors like document completeness and verification requirements can affect processing time.",
      },
      {
        id: 202,
        question:
          "Can dependent children continue on a dependent visa after turning 18?",
        answer:
          "Rules vary by country. Some allow dependent status to continue if the child remains financially dependent and is pursuing full-time education. Others require transition to a student visa or other categories. Planning ahead for these transitions is crucial to maintain legal status.",
      },
      {
        id: 203,
        question:
          "What financial requirements must sponsors meet for dependent visas?",
        answer:
          "Sponsors typically need to demonstrate sufficient income to support all dependents without relying on public funds. Requirements vary but often include minimum income thresholds, savings requirements, or combination of both. We help calculate specific requirements and prepare appropriate financial documentation.",
      },
      {
        id: 204,
        question: "Can dependents apply for permanent residency independently?",
        answer:
          "In many countries, dependents can eventually apply for permanent residency independently, especially after maintaining dependent status for a certain period. However, eligibility criteria and timing vary significantly. We help identify and prepare for such opportunities when available.",
      },
      {
        id: 205,
        question:
          "What happens to dependent visas if the primary visa holder changes jobs?",
        answer:
          "Impact varies by country and visa type. Some dependent visas remain valid if the primary holder changes employers within the same visa category. Others require notification or new applications. We help manage these transitions to maintain valid status for all family members.",
      },
    ],
  },
  {
    title: "Insurance Services",
    slug: "insurance",
    description:
      "Welcome to New Journey Immigration Insurance Solutions. We believe that every journey deserves protection.",
    details: `Welcome to New Journey Immigration Insurance Solutions
We believe that every journey deserves protection. Whether you're visiting Canada, inviting family members, studying, or traveling abroad, we provide trusted, affordable, and comprehensive insurance plans tailored to your needs.

With rising medical costs, travel insurance is not just recommended — it's essential. Our advisors work with leading Canadian insurance providers to ensure you are covered during your stay or trip.

🌍 Who We Help
We proudly serve:

• Tourists & Temporary Visitors to Canada
• Parents & Grandparents applying under Super Visa
• International Students & Work Permit Holders
• New Immigrants (PR applicants or awaiting OHIP)
• Canadian Residents Traveling Abroad
• Spouse Open Work Permit Holders
• Refugees & Asylum Seekers
• People who've been refused OHIP/MSP/other provincial health plans

Whether you need a short-term policy or long-term protection, our advisors ensure you get the best coverage.

✅ Types of Insurance Plans We Offer

1. Visitor to Canada Insurance
For anyone visiting Canada temporarily, including tourists, business visitors, or invited relatives.

Coverage Includes:
• Emergency medical care
• Hospitalization
• Prescription medication
• Ambulance fees
• Accidental injury coverage
• COVID-19-related expenses (in select policies)

Plan Duration: 7 days to 2 years
Age Limit: Up to 89 years (some plans up to 99)

2. Super Visa Insurance (Mandatory)
The Canadian Super Visa requires applicants to have at least $100,000 in private medical insurance from a Canadian company — valid for at least one year.

Why Choose Us?
• Plans from Manulife, GMS, Allianz, 21st Century, etc.
• Same-day issuance
• Refundable if the visa is refused
• Partial refund if your parents leave Canada early
• Competitive rates, multi-year plans available

3. International Student Insurance
Studying in Canada? You must have health insurance if you're not covered by a provincial plan.

Coverage Includes:
• Doctor visits & emergency care
• Eye exams & prescription drugs
• Hospital stays & surgery
• Dental (optional add-on)
• 24/7 multilingual support

We work with: MSH International, StudentGuard, GMS, Ingle, Morcare, and more.

4. New Immigrant/Work Permit Insurance
If you've just landed in Canada and are not yet eligible for government healthcare (e.g., OHIP in Ontario), private health insurance is critical.

Key Features:
• Affordable monthly premiums
• Coverage for medical emergencies
• No long waiting periods
• Optional dental and vision plans

5. Outbound Travel Insurance
Going abroad from Canada for a vacation or business? Your provincial health plan may not cover costs outside Canada.

Outbound Plans Include:
• Trip cancellation & interruption
• Lost/stolen luggage protection
• Emergency medical treatment abroad
• Flight delay compensation
• COVID-19 & quarantine coverage`,
    images: [],
    benefits: [
      "📜 Licensed & Certified Advisors",
      "🏦 Trusted partnerships with leading Canadian insurance companies",
      "💸 Competitive pricing with zero hidden fees",
      "📞 Support before, during & after your trip",
      "📍 Local GTA-based service with Canada-wide coverage",
      "💬 Multi-language support available (Gujarati, Hindi, Punjabi, English)",
      "🔄 Easy policy extension, cancellation, and claim support",
      "📋 Complete claim assistance and dispute resolution",
      "🛡️ What's Typically Covered: Emergency Medical Treatment, Hospital Room & Board, Doctor Consultations, Prescription Drugs, Diagnostic Tests, Medical Repatriation, Ambulance & Air Ambulance",
    ],
    countries: [
      "Canada (Visitor Insurance)",
      "Super Visa Insurance",
      "International Student Coverage",
      "New Immigrant Insurance",
      "Outbound Travel (Worldwide)",
      "Global Coverage Available",
    ],
    faqs: [
      {
        id: 1,
        question: "Is Super Visa insurance mandatory?",
        answer:
          "Yes, Super Visa insurance is mandatory. The Canadian government requires applicants to have at least $100,000 in private medical insurance from a Canadian company, valid for at least one year. We provide same-day issuance and refundable policies if the visa is refused.",
      },
      {
        id: 2,
        question:
          "What's the difference between visitor insurance and Super Visa insurance?",
        answer:
          "Super Visa insurance has specific government requirements: minimum $100,000 coverage, must be from a Canadian company, and valid for at least one year. Visitor insurance is more flexible with various coverage amounts and durations from 7 days to 2 years.",
      },
      {
        id: 3,
        question: "Can I get a refund if my parents leave Canada early?",
        answer:
          "Yes, many Super Visa insurance policies offer partial refunds if your parents leave Canada before the policy expires. We help you choose policies with favorable refund terms and assist with the refund process.",
      },
      {
        id: 4,
        question:
          "Do I need insurance if I'm a new immigrant waiting for OHIP?",
        answer:
          "Yes, there's typically a 3-month waiting period for OHIP coverage for new immigrants. Private health insurance is critical during this period to cover medical emergencies. We offer affordable monthly premiums with no long waiting periods.",
      },
      {
        id: 5,
        question: "What's not usually covered by travel insurance?",
        answer:
          "Common exclusions include: routine check-ups, cosmetic procedures, pre-existing conditions (unless specifically covered), ongoing treatment for chronic illnesses, and pregnancy & childbirth (unless add-on exists). Our advisors explain all exclusions before you purchase.",
      },
      {
        id: 6,
        question: "How do I make a claim and get support?",
        answer:
          "We provide complete claim support including: explaining your policy coverage, assisting with document collection, helping with claim submission, following up with insurance providers, and resolving disputes or denied claims. Having our expert by your side ensures fast approval and peace of mind.",
      },
      {
        id: 7,
        question: "Can I extend my insurance policy while in Canada?",
        answer:
          "Yes, most policies can be extended before they expire. We make it easy to extend your current policy, switch providers if needed, or add family members to existing policies. It's important to arrange extensions before your current coverage expires.",
      },
      {
        id: 8,
        question: "What insurance do international students need?",
        answer:
          "International students must have health insurance if not covered by provincial plans. We provide coverage for doctor visits, emergency care, eye exams, prescription drugs, hospital stays, surgery, and optional dental add-ons with 24/7 multilingual support.",
      },
    ],
  },
  {
    title: "Air Ticket Booking Services - Fly Smart, Fly Affordable",
    slug: "air-ticket",
    description:
      "Professional flight booking services with best prices, flexible options, and visa-compliant travel planning for students, families, and professionals.",
    details: `Your Journey Begins with the Right Flight - Professional Air Ticket Services

At New Journey Immigration, we understand that booking international flights can be overwhelming, especially when you're dealing with visa applications, study plans, or family relocations. Our professional air ticket booking services ensure you get the best deals, most convenient routes, and visa-compliant travel arrangements.

✈️ Why Choose Our Air Ticket Services?

🎯 Specialized Travel Planning:
• Student Travel Specialists - Understanding academic calendars and budget constraints
• Family Group Bookings - Coordinating travel for multiple family members
• Business Travel Solutions - Flexible tickets for professionals and entrepreneurs
• Immigration Travel - Visa-compliant bookings that support your application

💰 Best Price Guarantee:
• Real-time fare comparison across 500+ airlines
• Exclusive student discounts and youth fares
• Group booking discounts for families
• Early bird offers and seasonal promotions
• Price drop alerts and rebooking options

🌍 Global Route Expertise:
• Direct flights vs. connecting flights analysis
• Optimal layover planning (avoiding visa requirements)
• Multi-city itineraries for complex travel plans
• Alternative airports for better pricing
• Seasonal route recommendations

📋 Comprehensive Booking Services:

1. Pre-Booking Consultation
• Travel requirement analysis
• Budget planning and fare forecasting
• Visa requirement verification
• Travel insurance recommendations
• Baggage allowance optimization

2. Flight Search & Comparison
• Multi-airline fare comparison
• Route optimization for time and cost
• Flexible date searches for best prices
• Seat selection and meal preferences
• Special assistance arrangements

3. Booking Management
• Secure payment processing
• E-ticket delivery and confirmation
• Booking modifications and cancellations
• Travel document verification
• 24/7 booking support

4. Special Services
• Unaccompanied minor bookings
• Pet travel arrangements
• Excess baggage pre-booking
• Wheelchair and medical assistance
• Special meal requests

5. Travel Support
• Check-in assistance and reminders
• Flight status monitoring
• Rebooking for delays/cancellations
• Travel insurance claims support
• Airport transfer coordination

🎓 Student Travel Specialists:
• Academic calendar-based booking
• Student fare verification and discounts
• Extra baggage allowances for students
• Flexible change policies for study plans
• University partnership discounts

👨‍👩‍👧‍👦 Family Travel Experts:
• Coordinated family bookings
• Child fare calculations
• Infant travel arrangements
• Family seating preferences
• Group check-in assistance

💼 Business Travel Solutions:
• Flexible business class options
• Last-minute booking capabilities
• Corporate account management
• Expense reporting support
• Priority rebooking services`,
    images: [],
    benefits: [
      "✈️ Best Price Guarantee across 500+ Airlines",
      "🎓 Exclusive Student Discounts & Youth Fares",
      "👨‍👩‍👧‍👦 Family Group Booking Specialists",
      "🌍 Global Route Optimization & Planning",
      "📱 24/7 Booking Support & Assistance",
      "💼 Flexible Business Travel Solutions",
      "🛂 Visa-Compliant Travel Planning",
      "🧳 Baggage Allowance Optimization",
      "🔄 Free Rebooking for Delays/Cancellations",
      "🛡️ Travel Insurance Integration",
      "📋 Complete Travel Documentation Support",
      "⚡ Last-Minute Booking Capabilities",
      "🎯 Academic Calendar-Based Planning",
      "💳 Secure Payment Processing",
    ],
    countries: [
      "Canada (Toronto, Vancouver, Montreal)",
      "USA (New York, Los Angeles, Chicago)",
      "UK (London, Manchester, Edinburgh)",
      "Australia (Sydney, Melbourne, Perth)",
      "Europe (Paris, Frankfurt, Amsterdam)",
      "Asia-Pacific (Dubai, Singapore, Tokyo)",
      "500+ Global Destinations",
    ],
    faqs: [
      {
        id: 9,
        question: "When is the best time to book international flights?",
        answer:
          "Generally, booking 3-5 months before departure offers the best balance of availability and price for international flights. However, this can vary by destination and season. For peak travel periods (summer, major holidays), booking 5-6 months ahead is advisable. We monitor fare trends and can advise on optimal booking times for your specific route.",
      },
      {
        id: 10,
        question: "Do I need a confirmed return ticket for visa applications?",
        answer:
          "Most countries require proof of onward travel or return travel arrangements for visitor visa applications. While some accept flight reservations or itineraries without payment, others require confirmed (paid) tickets. This creates a dilemma, as you need a visa to travel but need travel proof for the visa. We can provide appropriate documentation to satisfy visa requirements without unnecessary financial risk.",
      },
      {
        id: 401,
        question:
          "What's the difference between refundable and non-refundable tickets?",
        answer:
          "Refundable tickets typically cost more but offer flexibility to change or cancel flights with minimal fees. Non-refundable tickets are cheaper but have strict change/cancellation penalties. We help evaluate which option best suits your needs based on visa timing and travel certainty.",
      },
      {
        id: 402,
        question:
          "How can I maximize baggage allowance for international flights?",
        answer:
          "Baggage allowances vary by airline, route, and ticket class. We help select airlines offering generous allowances, explain how to purchase extra baggage efficiently, and provide packing strategies to maximize your allowance while staying within regulations.",
      },
      {
        id: 403,
        question:
          "What happens if my flight is cancelled or significantly delayed?",
        answer:
          "Your rights depend on the airline, route, and reason for disruption. We assist with rebooking, compensation claims, and arranging accommodation if needed. We also help ensure your new travel arrangements align with visa validity and other commitments.",
      },
      {
        id: 404,
        question: "Are student discounts available for international flights?",
        answer:
          "Many airlines offer special fares for students and youth travelers. These often include extra baggage allowance and flexible change policies. We help verify eligibility and access these discounts through our partnerships with airlines and student travel organizations.",
      },
      {
        id: 405,
        question: "How do layovers affect visa requirements?",
        answer:
          "Some layovers require transit visas, while others don't if you stay in the international transit area. We help plan routes that minimize visa requirements and ensure you understand any transit documentation needed for your journey.",
      },
    ],
  },
  {
    title: "Finance Services - Education Loans & Forex Solutions",
    slug: "finance",
    description:
      "Complete financial solutions for international education and immigration - education loans, forex services, and financial planning.",
    details: `Your Financial Partner for International Dreams - Complete Finance Solutions

At New Journey Immigration, we understand that financing your international education or immigration journey is one of the biggest challenges. Our comprehensive finance services help you secure education loans, manage foreign exchange, and plan your finances effectively for a successful international experience.

💰 Education Loan Services:

🏦 Bank Partnerships & Loan Options:
• Nationalized Banks: SBI, PNB, Bank of Baroda, Canara Bank
• Private Banks: HDFC, ICICI, Axis Bank, Kotak Mahindra
• NBFCs: Avanse, Credila, InCred, Prodigy Finance
• International Lenders: MPower, MPOWER Financing, Stilt

📋 Loan Types We Assist With:
• Secured Education Loans (with collateral)
• Unsecured Education Loans (without collateral)
• Study Abroad Loans for specific countries
• Professional Course Loans (MBA, Engineering, Medicine)
• Skill Development & Certification Course Loans

💵 Loan Coverage:
• Tuition Fees (up to 100% coverage)
• Living Expenses & Accommodation
• Travel & Visa Costs
• Books, Equipment & Study Materials
• Health Insurance & Medical Expenses
• Laptop/Computer Purchase

📊 Loan Amount & Terms:
• Loan Amount: ₹4 Lakhs to ₹1.5 Crores
• Interest Rates: 8.5% to 15% per annum
• Repayment Period: 5 to 15 years
• Moratorium Period: Course duration + 6 months to 1 year

💱 Forex Services:

🌍 Foreign Exchange Solutions:
• Currency Exchange at competitive rates
• Forex Cards (Multi-currency & Single-currency)
• Demand Drafts & Wire Transfers
• Traveler's Cheques
• Cash Currency for immediate travel

💳 Forex Card Benefits:
• Better exchange rates than cash
• Secure and convenient for international use
• Multiple currency loading options
• Online account management
• Emergency card replacement worldwide
• ATM withdrawals globally

📈 Forex Services Include:
• Real-time exchange rate monitoring
• Forward booking for future requirements
• Bulk forex for large transactions
• Corporate forex solutions
• Remittance services for families
• Education fee payment solutions

💼 Financial Planning Services:

📋 Pre-Departure Financial Planning:
• Total cost estimation for study abroad
• Monthly budget planning for living expenses
• Emergency fund recommendations
• Tax implications and planning
• Insurance and investment advice

🎯 Loan Application Process:
1. Eligibility Assessment & Documentation
2. Bank Selection & Application Submission
3. Loan Processing & Approval
4. Disbursement Coordination
5. Repayment Planning & Support

📄 Required Documents:
• Academic transcripts and admission letters
• Income proof and financial statements
• Collateral documents (if applicable)
• Co-applicant details and guarantor information
• Identity and address proofs
• Passport and visa documents`,
    images: [],
    benefits: [
      "🏦 Partnerships with 15+ Banks & NBFCs",
      "💰 Loans up to ₹1.5 Crores with Competitive Rates",
      "📋 Complete Documentation & Application Support",
      "⚡ Fast-Track Loan Processing",
      "💱 Best Forex Rates & Multi-Currency Cards",
      "🌍 Global Remittance & Transfer Services",
      "📊 Comprehensive Financial Planning",
      "🔒 Secure & Compliant Financial Transactions",
      "📞 Dedicated Loan Relationship Managers",
      "💳 Collateral-Free Loan Options Available",
      "📈 Real-Time Exchange Rate Monitoring",
      "🎯 Customized Loan Solutions",
      "📱 Online Account Management",
      "🛡️ Emergency Financial Support",
    ],
    countries: [
      "USA (Education Loans & Forex)",
      "Canada (Study Loans & CAD Exchange)",
      "UK (GBP Forex & Education Financing)",
      "Australia (AUD Exchange & Study Loans)",
      "Europe (EUR Forex & Education Loans)",
      "Global Forex Services (50+ Currencies)",
      "Indian Banks & NBFCs",
    ],
    faqs: [
      {
        id: 11,
        question: "What are the typical requirements for education loans?",
        answer:
          "Education loan requirements typically include admission to a recognized institution, satisfactory academic records, co-applicant or guarantor (usually parents), collateral for higher loan amounts, and proof of repayment capacity. The documentation process is extensive but our team can guide you through each step and connect you with preferred lenders offering favorable terms for international education.",
      },
      {
        id: 12,
        question:
          "How much foreign currency can I legally carry when traveling abroad?",
        answer:
          "Foreign currency regulations vary by country. For Indian residents, you can carry up to USD 10,000 (or equivalent) in cash when traveling abroad. Any amount exceeding USD 5,000 (or equivalent) must be declared at customs. Additionally, there are annual limits under the Liberalized Remittance Scheme for total foreign exchange. We provide comprehensive guidance on forex regulations for your destination and home country.",
      },
      {
        id: 501,
        question: "What types of collateral are accepted for education loans?",
        answer:
          "Common collateral types include residential or commercial property, fixed deposits, insurance policies, and marketable securities. Some banks also offer collateral-free loans up to certain amounts based on the co-applicant's income and credit history. We help identify the most suitable loan structure based on your available assets.",
      },
      {
        id: 502,
        question: "How do forex cards compare to international credit cards?",
        answer:
          "Forex cards often offer better exchange rates and lower transaction fees compared to credit cards. They also provide better budget control and security. However, credit cards might offer rewards and emergency credit. We help compare options and often recommend a combination for maximum flexibility.",
      },
      {
        id: 503,
        question: "Can I get an education loan without a co-applicant?",
        answer:
          "While most banks require a co-applicant, some offer loans without co-applicants for students with strong academic records or admitted to premier institutions. These usually have higher interest rates or require additional security. We help explore all available options based on your situation.",
      },
      {
        id: 504,
        question: "What are the tax benefits available on education loans?",
        answer:
          "Interest paid on education loans is often tax-deductible under Section 80E of the Income Tax Act, with no upper limit. The deduction can be claimed for a maximum of 8 years. We provide guidance on maximizing tax benefits and maintaining proper documentation.",
      },
      {
        id: 505,
        question: "How can I protect against currency fluctuations?",
        answer:
          "We offer various hedging strategies including forward contracts and structured products. For education loans, some banks offer options to fix exchange rates for future payments. We help develop a comprehensive forex strategy aligned with your payment schedule.",
      },
    ],
  },
  {
    title: "Work Permit Services - Your Gateway to Global Employment",
    slug: "work-permit",
    description:
      "Expert assistance for international work permits, post-study work visas, and employer-sponsored work authorization across major destinations.",
    details: `Start Your International Career - Comprehensive Work Permit Services

At New Journey Immigration, we help skilled professionals, graduates, and workers obtain work permits and employment authorization in their desired countries. Our expert team navigates complex immigration laws to secure your right to work abroad legally and efficiently.

🌍 Work Permit Services by Country:

🇨🇦 Canada Work Permits:
• Post-Graduation Work Permit (PGWP) - up to 3 years
• Temporary Foreign Worker Program (TFWP)
• International Mobility Program (IMP)
• Open Work Permits for spouses
• Labour Market Impact Assessment (LMIA) support
• Global Talent Stream for tech professionals

🇦🇺 Australia Work Visas:
• Temporary Skill Shortage (TSS) Visa (Subclass 482)
• Skilled Independent Visa (Subclass 189)
• Skilled Nominated Visa (Subclass 190)
• Temporary Graduate Visa (Subclass 485)
• Working Holiday Visa (Subclass 417/462)
• Employer Nomination Scheme (ENS) Visa

🇺🇸 USA Work Authorization:
• H-1B Specialty Occupation Visa
• L-1 Intracompany Transfer Visa
• O-1 Extraordinary Ability Visa
• TN Visa for NAFTA Professionals
• Optional Practical Training (OPT) for students
• Employment Authorization Document (EAD)

🇬🇧 UK Work Visas:
• Skilled Worker Visa (formerly Tier 2)
• Global Talent Visa
• Graduate Route Visa (2 years post-study)
• Intra-company Transfer Visa
• Youth Mobility Scheme
• Seasonal Worker Visa

🇳🇿 New Zealand Work Visas:
• Essential Skills Work Visa
• Post-Study Work Visa (up to 3 years)
• Skilled Migrant Category
• Work to Residence Visa
• Working Holiday Visa
• Specific Purpose Work Visa

🇪🇺 European Union Work Permits:
• EU Blue Card for highly skilled workers
• National work permits for specific countries
• Intra-Corporate Transfer (ICT) permits
• Seasonal work permits
• Student work authorization

✅ Our Work Permit Services Include:

1. Eligibility Assessment & Strategy
• Skills assessment and qualification evaluation
• Work experience verification
• Language proficiency requirements
• Best pathway recommendation
• Timeline and cost planning

2. Job Search & Employer Matching
• Resume optimization for international markets
• Job search strategy and guidance
• Employer outreach and networking
• Interview preparation and coaching
• Salary negotiation support

3. Application Preparation
• Work permit application completion
• Supporting document compilation
• Educational credential assessment
• Professional reference letters
• Medical examinations coordination

4. Employer Support Services
• Labour Market Impact Assessment (LMIA) guidance
• Employer compliance requirements
• Job offer letter preparation
• Sponsorship documentation
• Recruitment process support

5. Post-Approval Services
• Work permit renewal assistance
• Permanent residency pathway planning
• Family member work permits
• Tax and social security guidance
• Settlement and integration support`,
    images: [],
    benefits: [
      "🌍 Multi-Country Work Permit Expertise",
      "🎓 Post-Study Work Visa Specialists",
      "💼 Employer-Sponsored Work Permit Support",
      "📋 Complete LMIA & Labour Market Assessment",
      "⚡ Fast-Track Processing for Urgent Cases",
      "🔍 Job Search & Employer Matching Services",
      "📝 Professional Resume & Application Optimization",
      "💬 Interview Preparation & Coaching",
      "🏢 Employer Compliance & Sponsorship Support",
      "👨‍👩‍👧‍👦 Family Work Permit Applications",
      "🔄 Work Permit Renewal & Extension Services",
      "🛂 Permanent Residency Pathway Planning",
      "📞 Dedicated Work Permit Specialists",
      "🏠 Post-Arrival Settlement Support",
    ],
    countries: [
      "Canada (PGWP, LMIA, Open Work Permits)",
      "Australia (TSS, Skilled Visas, Graduate Visa)",
      "UK (Skilled Worker, Graduate Route)",
      "USA (H-1B, L-1, O-1, OPT)",
      "New Zealand (Essential Skills, Post-Study)",
      "European Union (EU Blue Card, National Permits)",
      "Other Global Destinations",
    ],
    faqs: [
      {
        id: 13,
        question: "Do I need a job offer to apply for a work permit?",
        answer:
          "Requirements vary by country. Many require a job offer from an employer willing to sponsor your work permit. However, some countries offer open work permits for certain categories like post-graduation work permits, working holiday visas, or spouse/partner work permits. There are also points-based skilled migration programs where you can immigrate first and seek employment later.",
      },
      {
        id: 14,
        question: "Can I change employers while on a work permit?",
        answer:
          "Work permit flexibility varies significantly between countries. Some employer-specific work permits tie you to one employer, requiring new applications for job changes. Others allow limited changes within the same sector or occupation. Open work permits offer the most flexibility. Violating work permit conditions can jeopardize your immigration status, so professional advice before changing jobs is essential.",
      },
      {
        id: 601,
        question: "How long does it take to process a work permit application?",
        answer:
          "Processing times vary by country and permit type. Employer-sponsored permits typically take 2-4 months, while open work permits might be faster. Factors like labor market tests, occupation type, and application completeness affect processing time. We provide current timeline estimates for your specific situation.",
      },
      {
        id: 602,
        question: "What happens if I lose my job while on a work permit?",
        answer:
          "Procedures vary by country. Some permits give you time to find new employment, while others require immediate notification and status change. We help understand your rights, explore alternatives, and maintain legal status during employment transitions.",
      },
      {
        id: 603,
        question: "Can my family work on dependent visas?",
        answer:
          "Many countries allow spouses/partners of work permit holders to work, either automatically or through a simplified process. Children's work rights usually depend on age and visa type. We explain specific family work rights for your destination country.",
      },
      {
        id: 604,
        question: "What are the minimum salary requirements for work permits?",
        answer:
          "Minimum salary thresholds vary by country, occupation, and region. They ensure foreign workers receive market-rate compensation. We help understand these requirements and negotiate appropriate employment terms.",
      },
      {
        id: 605,
        question: "How can I convert my student visa to a work permit?",
        answer:
          "Many countries offer pathways from student to work visas, especially after graduating from local institutions. Requirements typically include job offers, minimum study duration, and specific qualifications. We guide through this transition process.",
      },
    ],
  },
  {
    title: "Permanent Residency (PR)",
    slug: "permanent-residency",
    description:
      "Secure your long-term future abroad with permanent residency programs for Canada, Australia, and more.",
    details: `Permanent Residency (PR) is a major milestone for anyone looking to settle abroad. At New Journey Immigration Education Consultants Pvt. Ltd., we provide in-depth consultation and application support for obtaining PR in countries such as Canada, Australia, and New Zealand.
      
      We assess your eligibility through points-based systems, occupation lists, and immigration pathways like Express Entry, Provincial Nominee Programs (PNPs), or skilled migration programs. Our team helps you prepare an impeccable application including your language test results, ECA (education credential assessment), employment history, and proof of funds.
      
      We guide you through documentation, government fees, portal registration, and health & police verification. Once approved, PR allows you to live, work, and enjoy most benefits in your chosen country.
      
      We also assist in post-PR steps like settling in, job finding, and eventually applying for citizenship. Our PR services are detailed, transparent, and aligned with your long-term goals.`,
    images: [],
    benefits: [
      "Points-based immigration system expertise",
      "Pathway selection and eligibility assessment",
      "Documentation and verification support",
      "Application submission and tracking",
      "Post-PR settlement assistance",
    ],
    countries: ["Canada", "Australia", "New Zealand"],
    faqs: [
      {
        id: 15,
        question: "What are the main pathways to permanent residency?",
        answer:
          "Common PR pathways include: skilled migration programs based on points systems (education, work experience, language skills); family sponsorship by citizens or current residents; employment-based nomination by qualifying employers; entrepreneurship or investment routes for business owners or investors; humanitarian or refugee programs; and long-term residency conversions after living in the country on temporary visas for a qualifying period.",
      },
      {
        id: 16,
        question: "How long does it take to obtain permanent residency?",
        answer:
          "Processing times vary greatly by country and immigration program, ranging from several months to several years. Canada's Express Entry can process applications in 6-12 months, while family-sponsored categories might take 1-2 years. Australian skilled migration typically takes 12-18 months. Factors affecting timelines include program backlogs, application completeness, verification processes, and country-specific quotas or caps.",
      },
      {
        id: 701,
        question:
          "What happens if my circumstances change during PR processing?",
        answer:
          "Changes in employment, marital status, or other circumstances must be reported to immigration authorities. Some changes may affect eligibility or require application updates. We help manage these changes to maintain application validity.",
      },
      {
        id: 702,
        question: "Can I include my family in my PR application?",
        answer:
          "Most countries allow including spouse/partner and dependent children in PR applications. Some also consider dependent parents or other family members. We help determine eligible family members and prepare their documentation.",
      },
      {
        id: 703,
        question: "What are the language requirements for PR?",
        answer:
          "Language requirements vary by country and immigration stream. Most require proof of proficiency in English (and French for Canada) through recognized tests like IELTS or CELPIP. We help understand specific requirements and prepare for language tests.",
      },
      {
        id: 704,
        question: "How do I maintain my PR status once approved?",
        answer:
          "PR maintenance usually requires minimum physical presence in the country and compliance with residency obligations. We advise on tracking residency days, travel implications, and renewal requirements.",
      },
      {
        id: 705,
        question: "What rights and benefits come with PR status?",
        answer:
          "PR typically includes rights to work, study, access healthcare, and social benefits. However, some restrictions may apply compared to citizens. We explain specific rights and limitations in your chosen country.",
      },
    ],
  },
  {
    title: "IELTS & PTE Coaching - Master English Proficiency Tests",
    slug: "coaching",
    description:
      "Achieve your target IELTS and PTE scores with expert coaching, personalized training, and proven strategies from certified trainers.",
    details: `Master English Proficiency Tests - Expert IELTS & PTE Coaching

At New Journey Immigration, we understand that achieving your target IELTS or PTE score is crucial for your international education, immigration, and career goals. Our comprehensive coaching programs are designed to help you master these tests with confidence and achieve the scores you need.

🎯 Why Choose Our IELTS & PTE Coaching?

📊 Proven Track Record:
• 95% of our students achieve their target scores
• Average score improvement of 1.5 bands in IELTS
• 15+ points improvement in PTE scores
• 500+ successful students placed in top universities
• Expert trainers with 10+ years of experience

🏆 Comprehensive Coaching Programs:

📚 IELTS Coaching (Academic & General):
• Complete 4-module training (Listening, Reading, Writing, Speaking)
• Band-wise targeted preparation (6.0 to 9.0)
• Academic IELTS for university admissions
• General IELTS for immigration purposes
• Computer-delivered IELTS preparation

💻 PTE Academic Coaching:
• All 20 question types covered comprehensively
• Score-based preparation (50 to 90 points)
• Computer-based test simulation
• AI-powered speaking practice
• Integrated skills development

🎓 Course Features & Methodology:

📋 Structured Learning Approach:
• Diagnostic test to assess current level
• Personalized study plan creation
• Module-wise skill development
• Regular progress tracking
• Intensive practice sessions

🗣️ Speaking Excellence Program:
• One-on-one speaking sessions
• Pronunciation and fluency training
• Topic-based discussion practice
• Mock speaking tests with feedback
• Confidence building exercises

✍️ Writing Mastery Classes:
• Task 1 & Task 2 comprehensive training
• Essay structure and organization
• Grammar and vocabulary enhancement
• Sample answer analysis
• Personalized feedback and correction

👂 Listening Skills Development:
• Various accent exposure (British, American, Australian)
• Note-taking strategies
• Question type specific techniques
• Speed and accuracy improvement
• Practice with authentic materials

📖 Reading Comprehension Training:
• Skimming and scanning techniques
• Time management strategies
• Question type analysis
• Vocabulary building
• Speed reading development

🏫 Learning Options:

🏢 Classroom Coaching:
• Small batch sizes (8-12 students)
• Interactive learning environment
• Peer learning opportunities
• Regular doubt clearing sessions
• Flexible timing options

💻 Online Coaching:
• Live interactive sessions
• Recorded lectures for revision
• Digital study materials
• Online practice tests
• Virtual speaking practice

👨‍🏫 Hybrid Learning:
• Combination of online and offline classes
• Flexibility to switch between modes
• Best of both learning environments
• Personalized attention
• Convenient scheduling

📅 Course Duration & Batches:
• Intensive Course: 4-6 weeks
• Regular Course: 8-12 weeks
• Weekend Batches: 12-16 weeks
• Crash Course: 2-3 weeks
• Flexible timings available`,
    images: [],
    benefits: [
      "🏆 95% Success Rate with Target Score Achievement",
      "👨‍🏫 Certified Trainers with 10+ Years Experience",
      "📊 Personalized Study Plans & Progress Tracking",
      "🎯 Small Batch Sizes (8-12 Students) for Individual Attention",
      "💻 Online, Offline & Hybrid Learning Options",
      "📝 Unlimited Mock Tests & Practice Materials",
      "🗣️ One-on-One Speaking Sessions",
      "✍️ Personalized Writing Feedback & Correction",
      "📚 Comprehensive Study Materials & Resources",
      "⏰ Flexible Timing & Weekend Batches",
      "🔄 Free Retake Classes if Target Not Achieved",
      "📱 Mobile App with Practice Tests",
      "🎧 Listening Practice with Multiple Accents",
      "📈 Regular Performance Analysis & Improvement Tips",
    ],
    countries: [
      "Canada (IELTS/PTE for Immigration & Study)",
      "Australia (PTE/IELTS for PR & Education)",
      "UK (IELTS for Study & Work Visas)",
      "USA (IELTS/PTE for University Admissions)",
      "New Zealand (IELTS/PTE for Immigration)",
      "European Countries (IELTS for Education)",
      "Global Recognition (140+ Countries)",
    ],
    faqs: [
      {
        id: 17,
        question: "What's the difference between IELTS and PTE exams?",
        answer:
          "While both assess English proficiency, key differences include: IELTS is paper-based or computer-delivered with human evaluators for speaking, while PTE is fully computer-based; PTE offers faster results (typically 48 hours vs. 13 days for IELTS); scoring systems differ (IELTS: 0-9 bands, PTE: 10-90 points); and test formats and question types vary. Some countries or institutions may accept one but not the other, so target requirements are important when choosing.",
      },
      {
        id: 18,
        question: "How long does it take to prepare for IELTS or PTE?",
        answer:
          "Preparation time depends on your current English level, target score, and learning pace. For most students, 2-3 months of dedicated preparation (8-10 hours weekly) is recommended. Students starting with lower proficiency may need 4-6 months. Our diagnostic assessments help determine your starting point and create a personalized study plan to achieve your target score in the optimal timeframe.",
      },
      {
        id: 801,
        question:
          "What are the key differences between Academic and General IELTS?",
        answer:
          "Academic IELTS is typically required for higher education and professional registration, focusing on academic language and complex topics. General IELTS suits migration and work purposes, using everyday English scenarios. Reading and Writing sections differ, while Speaking and Listening are identical.",
      },
      {
        id: 802,
        question: "How can I improve my speaking score?",
        answer:
          "Speaking improvement strategies include regular practice with native speakers, recording yourself, focusing on pronunciation and fluency, and learning common expression patterns. Our coaching includes targeted speaking exercises and mock interviews with detailed feedback.",
      },
      {
        id: 803,
        question: "What's the best way to practice for the writing section?",
        answer:
          "Effective writing practice involves understanding task requirements, learning essay structures, developing vocabulary, and getting expert feedback. We provide writing templates, common topic analysis, and individualized correction of practice essays.",
      },
      {
        id: 804,
        question: "How often can I retake IELTS or PTE?",
        answer:
          "There's no limit on test attempts, but we recommend adequate preparation between attempts. We help analyze previous test performance, identify improvement areas, and determine optimal timing for retests.",
      },
      {
        id: 805,
        question:
          "Which test format should I choose: paper-based or computer-delivered?",
        answer:
          "Choice depends on typing speed, computer comfort, and test center availability. Computer-delivered tests often offer more test dates and faster results. We help evaluate your strengths and choose the most suitable format.",
      },
    ],
  },
  {
    title: "Immigration & Citizenship",
    slug: "immigration-citizenship",
    description:
      "Build a secure future in your dream country with end-to-end immigration and citizenship support.",
    details: `Immigrating to a new country and eventually acquiring citizenship is a life-changing decision. At New Journey Immigration Education Consultants Pvt. Ltd., we walk you through every stage — from selecting the right country and visa type to achieving permanent residency and eventually applying for citizenship.
      
      Our immigration services include profile evaluation, points-based assessments, occupation matching, and guidance on family and employer-sponsored migration. We handle all types of immigration — skilled workers, entrepreneurs, family reunification, and students transitioning to PR.
      
      We also support citizenship applications, language and residency requirements, and legal steps such as oath-taking ceremonies and document verification.
      
      With in-house legal advisors and expert documentation teams, our immigration process is structured, transparent, and aligned with your goals. We ensure your transition from being a temporary resident to a citizen is smooth and legally sound.`,
    images: [],
    benefits: [
      "End-to-end immigration planning",
      "Citizenship application support",
      "Legal guidance and documentation",
      "Family and employer sponsorship assistance",
      "Post-immigration settlement support",
    ],
    countries: [
      "Canada",
      "Australia",
      "USA",
      "UK",
      "New Zealand",
      "European Countries",
    ],
    faqs: [
      {
        id: 19,
        question:
          "What are the residency requirements for citizenship in popular countries?",
        answer:
          "Residency requirements vary by country: Canada requires 3 out of 5 years (1,095 days) of physical presence; Australia requires 4 years of residency with at least 1 year as a PR; the USA requires 5 years (3 if married to a US citizen); and the UK requires either 5 or 6 years depending on your visa category, without exceeding permitted absences. Additional requirements typically include language proficiency, good character, and knowledge of society tests.",
      },
      {
        id: 20,
        question:
          "Do I need to renounce my current citizenship when becoming a citizen of another country?",
        answer:
          "This depends on the policies of both your current country and the new country. Some countries like India, China, and Japan don't permit dual citizenship, requiring renunciation of your original citizenship. Others like Canada, Australia, the UK, and the USA allow dual or multiple citizenships. Our immigration experts can advise on specific country combinations and potential implications for taxes, military service, and travel requirements.",
      },
      {
        id: 901,
        question: "What is the citizenship test and how can I prepare for it?",
        answer:
          "Citizenship tests typically cover country history, government, rights, responsibilities, and cultural knowledge. We provide study materials, practice tests, and preparation guidance specific to your destination country's requirements.",
      },
      {
        id: 902,
        question:
          "Can my children automatically get citizenship if I become a citizen?",
        answer:
          "Rules vary by country. Some grant automatic citizenship to minor children when parents naturalize, while others require separate applications. We help understand specific rules and plan family citizenship strategies.",
      },
      {
        id: 903,
        question: "What documents are needed for citizenship application?",
        answer:
          "Common requirements include proof of identity, residency history, language proficiency, tax compliance, and good character. Some countries require additional documentation. We help compile and verify all necessary documents.",
      },
      {
        id: 904,
        question: "How long does the citizenship process take?",
        answer:
          "Processing times vary by country, typically ranging from 6 months to 2 years after meeting residency requirements. Factors include application volumes, security checks, and ceremony scheduling. We provide current timeline estimates.",
      },
      {
        id: 905,
        question:
          "What benefits come with citizenship versus permanent residency?",
        answer:
          "Citizenship typically offers additional benefits like voting rights, passport access, unrestricted travel/work rights, and ability to run for public office. We explain specific advantages in your chosen country.",
      },
    ],
  },
];
