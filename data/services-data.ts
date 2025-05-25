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
    title: "Visitor Visa",
    slug: "visitor-visa",
    description:
      "Plan your journey abroad with expert visitor visa support for leisure, business, or medical travel.",
    details: `NJI Education. offers comprehensive visitor visa consultancy for individuals wishing to travel internationally for tourism, short-term business, medical purposes, or visiting family and friends. Our expert advisors understand the specific requirements for countries like the USA, Canada, UK, Australia, and many more. 
      
      We guide applicants through complex paperwork such as purpose declaration, invitation letters, financial proof, travel itineraries, and return commitments. Whether it's a B1/B2 visa for the US, or a tourist visa for Europe or Oceania, we provide detailed support to ensure your application meets every consulate's standards.
      
      Visitor visa durations vary by country and reason for travel, and renewals can be tricky. We help plan your entry and exit dates according to visa validity and even assist with possible extensions. If you're unsure about the category or eligibility, our consultants will help you choose the right path.
      
      From form-filling to interview prep, our visitor visa services ensure that you are well-prepared and confident throughout your application process.`,
    images: [
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201308/1_qvkrcb.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/5_fg6il0.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/4_gsaphb.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/2_psrps3.jpg",
      "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/3_oasn0j.jpg"

    ],
    benefits: [
      "Professional guidance through complex visa applications",
      "Country-specific expertise for major destinations",
      "Documentation assistance and verification",
      "Interview preparation and coaching",
      "Follow-up support and status tracking",
    ],
    countries: [
      "USA",
      "Canada",
      "UK",
      "Australia",
      "European Union",
      "New Zealand",
    ],
    faqs: [
      {
        id: 1,
        question: "What documents do I need for a visitor visa application?",
        answer:
          "For most visitor visa applications, you'll need a valid passport, completed application forms, proof of financial means, travel itinerary, invitation letter (if applicable), proof of ties to your home country, and photographs meeting specifications. Document requirements may vary by country, so we recommend consulting with our visa experts for country-specific requirements.",
      },
      {
        id: 2,
        question: "How long does the visitor visa process typically take?",
        answer:
          "Processing times vary significantly by country and season. Generally, it can take anywhere from 2-12 weeks. Peak travel seasons and holiday periods may extend processing times. We recommend applying at least 3 months before your intended travel date to accommodate any potential delays.",
      },
      {
        id: 3,
        question: "Can I extend my visitor visa while I'm abroad?",
        answer:
          "Many countries allow visitor visa extensions, but requirements vary significantly. Extensions typically require you to apply before your current visa expires, demonstrate sufficient funds, and provide a valid reason for extension. Some countries may restrict the number of extensions or total stay duration. Our consultants can guide you through specific country extension processes.",
      },
      {
        id: 101,
        question: "What happens if my visitor visa is rejected?",
        answer:
          "If your visa is rejected, we'll analyze the rejection reasons, address any concerns, strengthen your application, and help you reapply if appropriate. Some common reasons for rejection include insufficient documentation, unclear travel purpose, or inadequate financial proof. Our experts can help you overcome these challenges in your next application.",
      },
      {
        id: 102,
        question: "Can I work on a visitor visa?",
        answer:
          "Generally, visitor visas do not permit employment. However, some countries allow limited business activities like attending meetings, conferences, or negotiations. It's crucial to understand and respect these limitations as unauthorized work can result in serious consequences including deportation and future visa bans.",
      },
      {
        id: 103,
        question: "Do I need travel insurance for a visitor visa?",
        answer:
          "While not all countries mandate travel insurance for visitor visas, many strongly recommend or require it. Schengen countries, for example, require minimum coverage of €30,000. We recommend comprehensive travel insurance regardless of requirements to protect against medical emergencies and trip disruptions.",
      },
      {
        id: 104,
        question:
          "Can I apply for multiple countries' visitor visas simultaneously?",
        answer:
          "Yes, you can apply for multiple visitor visas concurrently, but it requires careful planning. We help coordinate application timing, manage passport logistics, and ensure each application meets specific country requirements. This is particularly useful for planning multi-country trips or backup travel options.",
      },
      {
        id: 105,
        question:
          "What is the maximum duration of stay allowed on a visitor visa?",
        answer:
          "Maximum stay duration varies by country. For example, US B1/B2 visas typically allow up to 6 months per visit, Schengen visas permit 90 days within a 180-day period, and some countries offer multiple-entry visas valid for several years. We can help you understand specific duration limits and plan your travel accordingly.",
      },
    ],
  },
  {
    title: "Dependent Visa",
    slug: "dependent-visa",
    description:
      "Reunite with your family abroad through our reliable dependent visa services.",
    details: `The Dependent Visa allows family members such as spouses, children, and sometimes even parents to accompany individuals who are legally residing or studying/working abroad. New Journey Immigration Education Consultants Pvt. Ltd. specializes in preparing dependent visa applications for countries including Canada, Australia, the USA, UK, and New Zealand.
      
      We help you determine eligibility based on your relationship, sponsor status, and host country policies. Some countries allow even unmarried partners under de facto relationships, provided there is proof of cohabitation.
      
      Our consultants provide assistance in compiling key documents such as marriage certificates, birth certificates, relationship proof, sponsor letters, and financial support evidence. We also guide sponsors in writing declarations and affidavits when needed.
      
      Each country has its own rules — for instance, some allow work rights for dependents, while others permit only limited stay and no employment. Navigating these differences is crucial. Our team keeps updated with every regulation change and global event that may impact visa outcomes.
      
      We aim to make your family's immigration journey smooth, safe, and compliant. With our service, you stay focused on your goals while we take care of bringing your loved ones closer to you.`,
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop&q=60",
    ],
    benefits: [
      "Family reunification expertise",
      "Relationship documentation assistance",
      "Country-specific eligibility assessment",
      "Sponsor guidance and documentation",
      "Post-approval settlement support",
    ],
    countries: ["Canada", "Australia", "USA", "UK", "New Zealand"],
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
    title: "Insurance",
    slug: "insurance",
    description:
      "Protect your international journey with complete travel and health insurance coverage.",
    details: `Studying or traveling abroad involves many uncertainties. That's why New Journey Immigration Education Consultants Pvt. Ltd. provides access to trusted travel and health insurance plans to safeguard your journey. We offer complete coverage options tailored for students, tourists, and professionals traveling abroad.
      
      Our team helps you choose policies that include coverage for hospitalization, outpatient treatments, emergency medical evacuation, accidental death, permanent disability, and personal liability abroad. In addition, we guide you through plans that cover trip cancellation, flight delays, lost baggage, and repatriation of remains.
      
      New Journey Immigration collaborates with reputed insurance providers to offer cost-effective and reliable solutions. We assist in application, policy understanding, document submission, and payment methods. Whether you're enrolling in short-term or long-term coverage, our insurance support ensures peace of mind while you focus on your studies or exploration.
      
      International laws and university guidelines often mandate insurance — we ensure compliance with local requirements and help you avoid policy gaps that could affect your visa or admission. Travel safe, study stress-free, and protect yourself from unexpected disruptions with our expert insurance guidance.`,
    images: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
    ],
    benefits: [
      "Comprehensive coverage options",
      "Tailored plans for students and travelers",
      "Expert policy comparison and selection",
      "Visa-compliant insurance solutions",
      "Claims assistance and support",
    ],
    countries: ["Global Coverage"],
    faqs: [
      {
        id: 7,
        question: "Is travel insurance mandatory for international travel?",
        answer:
          "While not universally mandatory, many countries now require proof of travel insurance with specific minimum coverage as part of visa applications. Even when not required, we strongly recommend comprehensive travel insurance to protect against medical emergencies, trip cancellations, and lost belongings, as international medical costs can be extremely high.",
      },
      {
        id: 8,
        question: "What should my travel insurance policy cover?",
        answer:
          "A comprehensive travel insurance policy should cover emergency medical expenses (including hospitalization and evacuation), trip cancellation/interruption, flight delays, lost/delayed baggage, personal liability, and personal accidents. For students or long-term travelers, additional coverage for routine medical care and mental health services is advisable.",
      },
      {
        id: 301,
        question: "How do I make an insurance claim while abroad?",
        answer:
          "Most insurers have 24/7 emergency assistance hotlines. We provide detailed guidance on the claims process, help you maintain necessary documentation, and assist with claim submissions. It's important to notify the insurer as soon as possible and keep all relevant receipts and medical reports.",
      },
      {
        id: 302,
        question: "Can I extend my insurance coverage while abroad?",
        answer:
          "Yes, many policies can be extended while abroad, but it's crucial to arrange this before your current coverage expires. We help evaluate extension options, compare costs, and ensure continuous coverage without gaps that could leave you vulnerable.",
      },
      {
        id: 303,
        question: "Are pre-existing conditions covered by travel insurance?",
        answer:
          "Coverage for pre-existing conditions varies by policy. Some insurers offer coverage with additional premiums or waiting periods. We help identify policies that match your medical needs and ensure you understand any exclusions or limitations.",
      },
      {
        id: 304,
        question:
          "What's the difference between travel and international student insurance?",
        answer:
          "Student insurance typically offers more comprehensive coverage for longer periods, including routine medical care, prescription medications, and sometimes dental/vision care. Travel insurance focuses more on emergencies and trip-related issues. We help choose the right type based on your situation.",
      },
      {
        id: 305,
        question: "How does insurance coverage work in different countries?",
        answer:
          "Coverage can vary by destination. Some policies offer worldwide coverage, while others exclude certain countries or regions. We ensure your policy provides appropriate coverage for all your destination countries and explain any regional limitations or requirements.",
      },
    ],
  },
  {
    title: "Air Ticket",
    slug: "air-ticket",
    description:
      "Book your flight with full support on cost, timing, and visa-compliant travel routes.",
    details: `Air travel is a major part of international education and immigration, and New Journey Immigration Education Consultants Pvt. Ltd. ensures that our clients get the best deals and travel experiences. We offer competitive and flexible air ticket booking options customized for students, families, and professionals.
      
      We understand the urgency and uncertainty that can come with visa processes, so our team offers expert booking management to accommodate delays or changes. We help you find the most affordable, convenient, and visa-compliant flight options that align with your travel goals and visa requirements.
      
      New Journey Immigration's air ticket services include airline preference guidance, optimal routes, stopover analysis, early-bird discounts, group bookings, student fares, and real-time booking confirmation. We also advise you on baggage allowances, customs, airport transfers, and connecting flights.
      
      In addition, we help students purchase travel insurance alongside ticket bookings for added safety. Our personalized booking services reduce stress and ensure your flight plans are accurate, secure, and affordable.`,
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=800&auto=format&fit=crop&q=60",
    ],
    benefits: [
      "Competitive and flexible booking options",
      "Special student and group fares",
      "Visa-compliant travel planning",
      "Baggage and customs guidance",
      "24/7 booking assistance",
    ],
    countries: ["Worldwide Destinations"],
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
    title: "Finance (Forex & Loan)",
    slug: "finance",
    description:
      "Ease your financial journey abroad with expert forex and education loan assistance.",
    details: `Managing finances is a key aspect of studying or settling abroad. New Journey Immigration Education Consultants Pvt. Ltd. offers professional assistance in arranging education loans, foreign exchange (forex), and financial planning to support your global ambitions.
      
      We help students and their families access bank loans with favorable interest rates, covering tuition fees, accommodation, living costs, and travel expenses. Our experts guide you through documentation, eligibility checks, and application submissions with nationalized and private banks.
      
      We also provide reliable forex services so that you can safely and easily exchange currency without high commissions. From prepaid forex cards to demand drafts and direct transfers, we help you move money legally and securely.
      
      For travelers, we offer advice on how to carry money abroad, what limits to follow, and how to comply with RBI or country-specific financial regulations. Our team ensures that your money matters are clear, compliant, and convenient.`,
    images: [
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1621981386829-2b616e01551f?w=800&auto=format&fit=crop&q=60",
    ],
    benefits: [
      "Education loan assistance with competitive rates",
      "Forex services with minimal commission",
      "Financial planning for international studies",
      "Regulatory compliance guidance",
      "Multiple currency options",
    ],
    countries: ["Global Financial Services"],
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
    title: "Work Permit",
    slug: "work-permit",
    description:
      "Pave your way to global employment with expert assistance on international work permits.",
    details: `Work permits are crucial for individuals planning to work abroad after studies or as skilled migrants. New Journey Immigration Education Consultants Pvt. Ltd. helps you apply for country-specific work permits through legally compliant and career-aligned pathways.
      
      We provide support for open work permits, employer-sponsored permits, and post-study work visas. Countries like Canada, UK, and Australia offer different streams — each with its own timelines, rules, and eligibility requirements. Our consultants ensure your resume, job offer letters, education credentials, and language scores are all properly aligned.
      
      We assist in applying for labor market assessments (if needed), biometrics, medical exams, visa fees, and follow-up interviews. We also brief you on rights, working hours, taxation, and renewal conditions under the law of the host country.
      
      Whether you're transitioning from a student visa or directly applying as a skilled worker, our team helps you begin your international career without delays or legal hassles.`,
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
    ],
    benefits: [
      "Open and employer-sponsored work permit assistance",
      "Post-study work visa guidance",
      "Labor market assessment support",
      "Document preparation and verification",
      "Rights and responsibilities briefing",
    ],
    countries: [
      "Canada",
      "Australia",
      "UK",
      "USA",
      "New Zealand",
      "European Union",
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
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
    ],
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
    title: "Coaching (IELTS & PTE)",
    slug: "coaching",
    description:
      "Ace your language proficiency test with tailored IELTS and PTE training programs.",
    details: `At New Journey Immigration, we understand how crucial English proficiency tests like IELTS and PTE are for your international dreams. Whether it's for university admission, visa eligibility, or PR, scoring high in these exams boosts your chances significantly.
      
      Our certified trainers conduct regular batches with structured lesson plans, practice exams, speaking drills, and mock interviews. We provide personalized strategies based on your current skill level, target band score, and time availability.
      
      Our classrooms are equipped with smart teaching tools, and we offer offline and online options to suit your convenience. From grammar fundamentals to advanced writing tactics, our holistic training ensures you feel confident on test day.
      
      Additionally, we offer detailed feedback, test registration help, and exam-day readiness tips. With our coaching, you don't just prepare for the exam — you master it.`,
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60",
    ],
    benefits: [
      "Certified IELTS and PTE trainers",
      "Personalized learning strategies",
      "Regular mock tests and performance analysis",
      "Small batch sizes for individual attention",
      "Online and offline learning options",
    ],
    countries: ["IELTS/PTE Recognized Countries"],
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
    images: [
      "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
    ],
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
