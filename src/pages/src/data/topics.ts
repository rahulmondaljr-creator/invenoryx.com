export type TopicSection =
  | { type: "text"; heading: string; body: string[] }
  | { type: "list"; heading: string; items: string[] }
  | { type: "formula"; heading: string; formula: string; note?: string }
  | { type: "table"; heading: string; headers: string[]; rows: string[][] };

export type Topic = {
  slug: string;
  category: string;
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
  difficulty: "beginner" | "intermediate" | "advanced";
  minutes: number;
  tags: string[];
  updated: string;
  content: { en: TopicSection[]; bn: TopicSection[] };
};

export const topics: Topic[] = [
  {
    slug: "ohms-law",
    category: "electrical",
    title: { en: "Ohm's Law Explained", bn: "ওমের সূত্র সম্পূর্ণ ব্যাখ্যা" },
    desc: {
      en: "The most fundamental relationship in electrical engineering: voltage, current and resistance.",
      bn: "বিদ্যুৎ প্রকৌশলের সবচেয়ে মৌলিক সম্পর্ক: ভোল্টেজ, কারেন্ট ও রেজিস্ট্যান্স।",
    },
    difficulty: "beginner",
    minutes: 6,
    tags: ["voltage", "current", "resistance", "formula"],
    updated: "2026-10-17",
    content: {
      en: [
        { type: "text", heading: "Introduction", body: [
          "Ohm's law states that the current flowing through a conductor between two points is directly proportional to the voltage across the two points, provided temperature and other physical conditions stay constant.",
          "In simple words: push harder (more voltage) and more current flows; resist more and less current flows.",
        ]},
        { type: "formula", heading: "The Formula", formula: "V = I × R", note: "V = voltage (volts), I = current (amperes), R = resistance (ohms)" },
        { type: "text", heading: "Where It Comes From", body: [
          "German physicist Georg Simon Ohm published this relationship in 1827. He found that for metallic conductors, the ratio of voltage to current stays constant — and that constant is the resistance.",
        ]},
        { type: "table", heading: "The Three Forms", headers: ["Quantity", "Formula", "Unit"], rows: [
          ["Voltage", "V = I × R", "volt (V)"],
          ["Current", "I = V ÷ R", "ampere (A)"],
          ["Resistance", "R = V ÷ I", "ohm (Ω)"],
        ]},
        { type: "text", heading: "Worked Example", body: [
          "A 12 V battery is connected across a 220 Ω resistor. Using I = V ÷ R: I = 12 ÷ 220 ≈ 0.0545 A, or about 54.5 mA.",
          "Check the other way: V = 0.0545 × 220 ≈ 12 V. The numbers agree.",
        ]},
        { type: "list", heading: "Limitations and Safety", items: [
          "Only applies to 'ohmic' materials — mostly metals at constant temperature.",
          "Does not apply directly to non-linear components like diodes and transistors.",
          "Resistance changes with temperature, so a hot resistor behaves differently.",
          "Mains electricity work must be done by qualified electricians. This page is educational theory only.",
        ]},
      ],
      bn: [
        { type: "text", heading: "ভূমিকা", body: [
          "ওমের সূত্র বলে — তাপমাত্রা ও অন্যান্য শারীরিক অবস্থা অপরিবর্তিত থাকলে, কোনো পরিবাহকের দুই বিন্দুর মধ্যে দিয়ে প্রবাহিত কারেন্ট সেই দুই বিন্দুর মধ্যের ভোল্টেজের সমানুপাতিক।",
          "সহজভাবে: বেশি চাপ (ভোল্টেজ) দিলে বেশি কারেন্ট বয়ে যায়; বেশি প্রতিরোধ থাকলে কারেন্ট কমে যায়।",
        ]},
        { type: "formula", heading: "সূত্র", formula: "V = I × R", note: "V = ভোল্টেজ (ভোল্ট), I = কারেন্ট (অ্যাম্পিয়ার), R = রেজিস্ট্যান্স (ওহম)" },
        { type: "text", heading: "ইতিহাস", body: [
          "জার্মান পদার্থবিদ গিওর্গ সাইমন ওম ১৮২৭ সালে এই সম্পর্ক প্রকাশ করেন। তিনি দেখান ধাতব পরিবাহকে ভোল্টেজ ও কারেন্টের অনুপাত স্থির থাকে — সেই স্থির মানই রেজিস্ট্যান্স।",
        ]},
        { type: "table", heading: "তিনটি রূপ", headers: ["রাশি", "সূত্র", "একক"], rows: [
          ["ভোল্টেজ", "V = I × R", "ভোল্ট (V)"],
          ["কারেন্ট", "I = V ÷ R", "অ্যাম্পিয়ার (A)"],
          ["রেজিস্ট্যান্স", "R = V ÷ I", "ওহম (Ω)"],
        ]},
        { type: "text", heading: "উদাহরণ", body: [
          "১২ ভোল্ট ব্যাটারি ২২০ ওহম রেজিস্টরের সাথে যুক্ত। I = V ÷ R = 12 ÷ 220 ≈ ০.০৫৪৫ অ্যাম্পিয়ার, অর্থাৎ প্রায় ৫৪.৫ মিলিঅ্যাম্পিয়ার।",
          "উল্টোদিকে যাচাই: V = 0.0545 × 220 ≈ ১২ ভোল্ট। মান দুটো মিলে গেল।",
        ]},
        { type: "list", heading: "সীমাবদ্ধতা ও নিরাপত্তা", items: [
          "শুধু 'ওমিক' উপাদানে প্রযোজ্য — মূলত ধাতু, স্থির তাপমাত্রায়।",
          "ডায়োড বা ট্রানজিস্টরের মতো নন-লিনিয়ার উপাদানে সরাসরি প্রযোজ্য নয়।",
          "তাপমাত্রা বাড়লে রেজিস্ট্যান্স বদলায় — গরম রেজিস্টর ভিন্ন আচরণ করে।",
          "বাসাবাড়ির মেইন লাইনের কাজ যোগ্য ইলেকট্রিশিয়ান করবে। এই পেজ শুধু শিক্ষামূলক তত্ত্ব।",
        ]},
      ],
    },
  },
  {
    slug: "electrical-power",
    category: "electrical",
    title: { en: "Electrical Power and Energy", bn: "বিদ্যুৎশক্তি ও শক্তি" },
    desc: {
      en: "How electrical power is calculated and how energy consumption in kWh works.",
      bn: "বিদ্যুৎশক্তি কীভাবে হিসাব হয় এবং কিলোওয়াট-ঘণ্টায় বিদ্যুৎ ব্যবহার কীভাবে কাজ করে।",
    },
    difficulty: "beginner",
    minutes: 5,
    tags: ["power", "watt", "kwh", "energy"],
    updated: "2026-10-17",
    content: {
      en: [
        { type: "text", heading: "Introduction", body: [
          "Electrical power is the rate at which electrical energy is transferred or converted. A device that converts more energy per second has more power.",
        ]},
        { type: "formula", heading: "Power Formula", formula: "P = V × I", note: "Same as P = I² × R = V² ÷ R. Unit: watt (W)" },
        { type: "text", heading: "Energy Over Time", body: [
          "Energy = Power × Time. Utility companies bill in kilowatt-hours (kWh): 1 kWh = a 1000 W load running for 1 hour.",
          "Example: a 100 W bulb used 10 hours a day consumes 100 × 10 = 1000 Wh = 1 kWh = 1 unit per day.",
        ]},
        { type: "table", heading: "Typical Appliance Power (approximate)", headers: ["Appliance", "Typical Power"], rows: [
          ["LED bulb", "9 W"],
          ["Phone charger", "10–20 W"],
          ["Ceiling fan", "50–75 W"],
          ["Refrigerator", "100–200 W (running)"],
          ["Electric iron", "1000 W"],
          ["Water heater (geyser)", "1500–3000 W"],
        ]},
        { type: "text", heading: "Worked Example", body: [
          "A 12 V motor draws 2 A. Power = 12 × 2 = 24 W. Running it for 5 hours uses 24 × 5 = 120 Wh = 0.12 kWh.",
        ]},
        { type: "list", heading: "Limitations and Safety", items: [
          "Nameplate ratings are approximate; real consumption varies with load and condition.",
          "High-power devices need proper wiring and protection — never overload a socket.",
          "Cost calculation needs your local tariff rate, which varies by country and provider.",
        ]},
      ],
      bn: [
        { type: "text", heading: "ভূমিকা", body: [
          "বিদ্যুৎশক্তি হলো প্রতি সেকেন্ডে কত বিদ্যুৎশক্তি স্থানান্তর বা রূপান্তর হচ্ছে তার হার।",
        ]},
        { type: "formula", heading: "শক্তির সূত্র", formula: "P = V × I", note: "একইভাবে P = I² × R = V² ÷ R। একক: ওয়াট (W)" },
        { type: "text", heading: "সময়ের সাথে শক্তি", body: [
          "শক্তি = শক্তি × সময়। বিদ্যুৎ কোম্পানি কিলোওয়াট-ঘণ্টায় (kWh) বিল করে: ১ kWh = ১০০০ ওয়াট লোড ১ ঘণ্টা চালু।",
          "উদাহরণ: ১০০ ওয়াটের বাল্ব দিনে ১০ ঘণ্টা জ্বললে খরচ ১০০ × ১০ = ১০০০ Wh = ১ kWh = দিনে ১ ইউনিট।",
        ]},
        { type: "table", heading: "প্রচলিত যন্ত্রের শক্তি (আনুমানিক)", headers: ["যন্ত্র", "সাধারণ শক্তি"], rows: [
          ["এলইডি বাল্ব", "৯ W"],
          ["ফোন চার্জার", "১০–২০ W"],
          ["সিলিং ফ্যান", "৫০–৭৫ W"],
          ["ফ্রিজ", "১০০–২০০ W (চলন্ত অবস্থায়)"],
          ["ইলেকট্রিক আয়রন", "১০০০ W"],
          ["গিজার", "১৫০০–৩০০০ W"],
        ]},
        { type: "text", heading: "উদাহরণ", body: [
          "১২ ভোল্টের মোটর ২ অ্যাম্পিয়ার টানে। শক্তি = ১২ × ২ = ২৪ ওয়াট। ৫ ঘণ্টা চালালে খরচ ২৪ × ৫ = ১২০ Wh = ০.১২ kWh।",
        ]},
        { type: "list", heading: "সীমাবদ্ধতা ও নিরাপত্তা", items: [
          "নেমপ্লেটের মান আনুমানিক; বাস্তব খরচ লোড ও অবস্থা অনুযায়ী কমবেশি হয়।",
          "বেশি শক্তির যন্ত্রে সঠিক তার ও প্রোটেকশন দরকার — কোনো সকেটে অতিরিক্ত লোড দেবে না।",
          "খরচের হিসাবে তোমার এলাকার ট্যারিফ রেট জানা দরকার — দেশ ও প্রোভাইডারভেদে ভিন্ন।",
        ]},
      ],
    },
  },
  {
    slug: "how-leds-work",
    category: "electronics",
    title: { en: "How LEDs Work", bn: "এলইডি কীভাবে কাজ করে" },
    desc: {
      en: "The light-emitting diode: physics, forward voltage, and the current-limiting resistor calculation.",
      bn: "লাইট-এমিটিং ডায়োড: পদার্থবিদ্যা, ফরোয়ার্ড ভোল্টেজ ও কারেন্ট-লিমিটিং রেজিস্টরের হিসাব।",
    },
    difficulty: "beginner",
    minutes: 6,
    tags: ["led", "diode", "resistor", "electronics"],
    updated: "2026-10-17",
    content: {
      en: [
        { type: "text", heading: "Introduction", body: [
          "An LED (light-emitting diode) is a semiconductor p–n junction that emits light when current flows through it in the forward direction. Electrons recombine with holes and release energy as photons — this is called electroluminescence.",
          "The colour of the light depends on the semiconductor material's band gap: roughly 1.8–2.2 V for red, up to about 3.0–3.4 V for blue and white.",
        ]},
        { type: "text", heading: "Polarity and Forward Voltage", body: [
          "An LED conducts in only one direction. The longer leg is the anode (+). Below its forward voltage (Vբ) almost no current flows; above it, current rises very fast — which is why a series resistor is mandatory.",
        ]},
        { type: "formula", heading: "Current-Limiting Resistor", formula: "R = (Vs − Vf) ÷ If", note: "Vs = supply voltage, Vf = LED forward voltage, If = desired current (usually 10–20 mA)" },
        { type: "text", heading: "Worked Example", body: [
          "A red LED (Vբ = 2 V, If = 20 mA) on a 9 V battery: R = (9 − 2) ÷ 0.02 = 350 Ω. The nearest standard value, 390 Ω, is a safe choice.",
        ]},
        { type: "list", heading: "Advantages", items: [
          "Very efficient — most energy becomes light, not heat.",
          "Long lifetime, typically 25,000–50,000+ hours.",
          "Tiny, fast switching, works well with low-voltage circuits.",
        ]},
        { type: "list", heading: "Limitations and Safe Experiments", items: [
          "Polarity sensitive — connecting backwards simply does not light (it blocks current).",
          "High-power LEDs need heat sinks and proper drivers.",
          "Safe beginner project: a 3 V coin cell, one LED and one 220 Ω resistor. Never experiment with mains electricity.",
        ]},
      ],
      bn: [
        { type: "text", heading: "ভূমিকা", body: [
          "এলইডি (লাইট-এমিটিং ডায়োড) এক ধরনের সেমিকন্ডাক্টর p–n জংশন, যেখানে ফরোয়ার্ড দিকে কারেন্ট প্রবাহিত হলে আলো নির্গমন হয়। ইলেকট্রন হোলের সাথে পুনর্মিলিত হয়ে ফোটন আকারে শক্তি ছাড়ে — একেই ইলেক্ট্রোলুমিনিসেন্স বলে।",
          "আলোর রঙ নির্ভর করে সেমিকন্ডাক্টরের ব্যান্ড গ্যাপে: লাল প্রায় ১.৮–২.২ ভোল্ট, নীল ও সাদা প্রায় ৩.০–৩.৪ ভোল্ট।",
        ]},
        { type: "text", heading: "পোলারিটি ও ফরোয়ার্ড ভোল্টেজ", body: [
          "এলইডি শুধু এক দিকেই কারেন্ট পারে। লম্বা পা হলো অ্যানোড (+)। ফরোয়ার্ড ভোল্টেজের নিচে প্রায় কোনো কারেন্ট যায় না; তার উপরে গেলে কারেন্ট খুব দ্রুত বাড়ে — তাই সিরিজে রেজিস্টর বাধ্যতামূলক।",
        ]},
        { type: "formula", heading: "কারেন্ট-লিমিটিং রেজিস্টর", formula: "R = (Vs − Vf) ÷ If", note: "Vs = সাপ্লাই ভোল্টেজ, Vf = এলইডির ফরোয়ার্ড ভোল্টেজ, If = কাঙ্ক্ষিত কারেন্ট (সাধারণত ১০–২০ mA)" },
        { type: "text", heading: "উদাহরণ", body: [
          "লাল এলইডি (Vf = 2 V, If = 20 mA) ৯ ভোল্ট ব্যাটারিতে: R = (9 − 2) ÷ 0.02 = ৩৫০ Ω। নিকটতম স্ট্যান্ডার্ড মান ৩৯০ Ω নিরাপদ পছন্দ।",
        ]},
        { type: "list", heading: "সুবিধা", items: [
          "খুব দক্ষ — বেশিরভাগ শক্তিই আলো হয়, তাপ নয়।",
          "দীর্ঘজীবী — সাধারণত ২৫,০০০–৫০,০০০+ ঘণ্টা।",
          "ছোট, দ্রুত সুইচিং, লো-ভোল্টেজ সার্কিটে সহজে ব্যবহারযোগ্য।",
        ]},
        { type: "list", heading: "সীমাবদ্ধতা ও নিরাপদ পরীক্ষা", items: [
          "পোলারিটি-নির্ভর — উল্টো দিকে লাগালে জ্বলে না (কারেন্ট আটকে যায়)।",
          "বেশি শক্তির এলইডিতে হিটসিংক ও ড্রাইভার দরকার।",
          "নিরাপদ শুরুর প্রজেক্ট: ৩ ভোল্টের কয়েন সেল, একটি এলইডি, একটি ২২০ ওহম রেজিস্টর। মেইন্স বিদ্যুৎ নিয়ে কখনো পরীক্ষা করবে না।",
        ]},
      ],
    },
  },
  {
    slug: "gear-ratio",
    category: "mechanical",
    title: { en: "Gear Ratios", bn: "গিয়ার অনুপাত" },
    desc: {
      en: "How gear pairs trade speed for torque, with a worked calculation.",
      bn: "গিয়ার জোড়া গতিকে টর্কের বিনিময়ে কীভাবে বদলায় — হিসাবসহ।",
    },
    difficulty: "beginner",
    minutes: 5,
    tags: ["gears", "torque", "rpm", "mechanism"],
    updated: "2026-10-17",
    content: {
      en: [
        { type: "text", heading: "Introduction", body: [
          "Gears transmit rotation between shafts. When two gears mesh, the smaller one (pinion) drives the larger one. The gear ratio tells you how speed and torque are transformed.",
        ]},
        { type: "formula", heading: "Gear Ratio", formula: "Ratio = N(driven) ÷ N(driver)", note: "N = number of teeth. Output speed = input speed ÷ ratio; ideal output torque = input torque × ratio." },
        { type: "text", heading: "Worked Example", body: [
          "A 20-tooth pinion drives a 60-tooth gear: ratio = 60 ÷ 20 = 3, written 3:1 (reduction).",
          "At 900 rpm input, output = 900 ÷ 3 = 300 rpm. Ideally torque triples; in reality it is slightly less because of friction.",
        ]},
        { type: "table", heading: "Common Gear Types", headers: ["Type", "Typical Use"], rows: [
          ["Spur", "Simple parallel-shaft drives, gearboxes"],
          ["Helical", "Quieter, smoother high-speed drives"],
          ["Bevel", "Shafts meeting at an angle (e.g., car differential)"],
          ["Worm", "Large reductions, self-locking (e.g., tuning pegs)"],
        ]},
        { type: "list", heading: "Where You See It", items: [
          "Bicycles: pedalling slowly but with force to climb.",
          "Car gearboxes: low gears for pull, high gears for speed.",
          "Cordless drills and robot arms, for precise control of motion.",
        ]},
        { type: "list", heading: "Limitations", items: [
          "Friction in real gears wastes some energy (efficiency is typically 95–99% per stage).",
          "Backlash (small free play between teeth) limits precision.",
          "This is an idealised model — real design needs strength and material checks by qualified engineers.",
        ]},
      ],
      bn: [
        { type: "text", heading: "ভূমিকা", body: [
          "গিয়ার দুই শ্যাফটের মধ্যে ঘূর্ণন স্থানান্তর করে। দুটি গিয়ার জোড়া লাগলে ছোটটা (পিনিয়ন) বড়টাকে ঘোরায়। গিয়ার অনুপাত বলে দেয় গতি ও টর্ক কীভাবে রূপান্তরিত হবে।",
        ]},
        { type: "formula", heading: "গিয়ার অনুপাত", formula: "অনুপাত = N(চালিত) ÷ N(চালক)", note: "N = দাঁতের সংখ্যা। আউটপুট গতি = ইনপুট গতি ÷ অনুপাত; আদর্শ আউটপুট টর্ক = ইনপুট টর্ক × অনুপাত।" },
        { type: "text", heading: "উদাহরণ", body: [
          "২০ দাঁতের পিনিয়ন ৬০ দাঁতের গিয়ারকে ঘোরায়: অনুপাত = ৬০ ÷ ২০ = ৩, লেখা হয় ৩:১ (রেডাকশন)।",
          "৯০০ rpm ইনপুটে আউটপুট = ৯০০ ÷ ৩ = ৩০০ rpm। আদর্শভাবে টর্ক তিনগুণ; বাস্তবে ঘর্ষণে সামান্য কম।",
        ]},
        { type: "table", heading: "প্রচলিত গিয়ারের প্রকার", headers: ["প্রকার", "সাধারণ ব্যবহার"], rows: [
          ["স্পার", "সরল সমান্তরাল শ্যাফট, গিয়ারবক্স"],
          ["হেলিকাল", "নিঃশব্দ, মসৃণ উচ্চগতির ড্রাইভ"],
          ["বেভেল", "কোণে মিলিত শ্যাফট (যেমন গাড়ির ডিফারেনশিয়াল)"],
          ["ওয়ার্ম", "বড় রেডাকশন, সেলফ-লকিং (যেমন টিউনিং পেগ)"],
        ]},
        { type: "list", heading: "কোথায় দেখা যায়", items: [
          "সাইকেল: ঢালে উঠতে জোরে ধীরে প্যাডেল মারা।",
          "গাড়ির গিয়ারবক্স: টানের জন্য লো গিয়ার, গতির জন্য হাই গিয়ার।",
          "কর্ডলেস ড্রিল ও রোবট আর্ম — নিয়ন্ত্রিত নড়াচড়ার জন্য।",
        ]},
        { type: "list", heading: "সীমাবদ্ধতা", items: [
          "বাস্তব গিয়ারে ঘর্ষণে কিছু শক্তি নষ্ট হয় (দক্ষতা সাধারণত ৯৫–৯৯% প্রতি স্টেজ)।",
          "ব্যাকল্যাশ (দাঁতের মধ্যে সামান্য ফাঁক) নির্ভুলতা কমায়।",
          "এটি আদর্শ মডেল — বাস্তব ডিজাইনে দৃঢ়তা ও উপাদান যাচাইয়ের দরকার হয়।",
        ]},
      ],
    },
  },
  {
    slug: "solar-pv-basics",
    category: "renewable",
    title: { en: "Solar PV Cell Basics", bn: "সোলার পিভি সেলের ভিত্তি" },
    desc: {
      en: "How photovoltaic cells turn sunlight into electricity, and how to estimate real output.",
      bn: "ফটোভোলটাইক সেল কীভাবে সূর্যের আলোকে বিদ্যুতে রূপান্তর করে এবং বাস্তব আউটপুটের আন্দাজ।",
    },
    difficulty: "intermediate",
    minutes: 7,
    tags: ["solar", "photovoltaic", "renewable", "energy"],
    updated: "2026-10-17",
    content: {
      en: [
        { type: "text", heading: "Introduction", body: [
          "A solar PV cell is a semiconductor junction (usually silicon) where photons from sunlight knock electrons loose, and the internal electric field sweeps them out as current. This is the photovoltaic effect, first demonstrated practically by Edmond Becquerel in 1839 and developed into modern silicon cells in the 1950s.",
        ]},
        { type: "text", heading: "From Cell to Array", body: [
          "Cells are wired into modules (panels), panels into strings, and strings into an array with an inverter that converts DC into grid AC. System losses occur in wiring, inverter, temperature and soiling.",
        ]},
        { type: "formula", heading: "Output Estimate", formula: "P = A × G × η", note: "A = panel area (m²), G = solar irradiance (≈1000 W/m² in full sun), η = efficiency (0.17–0.23 typical for commercial modules)" },
        { type: "text", heading: "Worked Example", body: [
          "A 2 m² panel at 20% efficiency in full sun: P = 2 × 1000 × 0.20 = 400 W.",
          "Monthly energy (ideal): 400 W × 4 peak-sun hours × 30 days = 48 kWh. A realistic grid-tied estimate multiplies by a derating factor of roughly 0.75 for temperature, dust and inverter losses — around 36 kWh/month.",
        ]},
        { type: "table", heading: "Key Loss Factors", headers: ["Factor", "Effect"], rows: [
          ["Temperature", "Output drops about 0.35–0.45% per °C above 25°C"],
          ["Shading", "One shaded cell can disproportionately cut output"],
          ["Soiling / dust", "Gradual loss; cleaning restores it"],
          ["Inverter", "Typically 3–8% conversion loss"],
        ]},
        { type: "list", heading: "Limitations and Safety", items: [
          "No output at night; output varies with weather and season.",
          "Panel angle and direction (in the northern hemisphere, south-facing) strongly affect yield.",
          "Rooftop DC wiring and grid connection must be installed and certified by professionals.",
        ]},
      ],
      bn: [
        { type: "text", heading: "ভূমিকা", body: [
          "সোলার পিভি সেল এক ধরনের সেমিকন্ডাক্টর জংশন (সাধারণত সিলিকন) যেখানে সূর্যালোকের ফোটন ইলেকট্রন ছাড়িয়ে দেয়, আর অভ্যন্তরীণ ইলেকট্রিক ফিল্ড সেগুলোকে কারেন্ট হিসেবে বের করে নিয়ে আসে — এটাই ফটোভোলটাইক প্রভাব। ১৮৩৯ সালে এডমন্ড বেকেরেল প্রথম প্রদর্শন করেন; আধুনিক সিলিকন সেল গড়ে ওঠে ১৯৫০-এর দশকে।",
        ]},
        { type: "text", heading: "সেল থেকে অ্যারে", body: [
          "সেল যুক্ত হয় মডিউলে (প্যানেল), প্যানেল স্ট্রিং-এ, আর স্ট্রিং অ্যারেতে — সাথে থাকে ইনভার্টার যা ডিসি-কে গ্রিডের এসিতে রূপান্তর করে। তার, ইনভার্টার, তাপমাত্রা ও ধুলোয় শক্তির কিছু অংশ নষ্ট হয়।",
        ]},
        { type: "formula", heading: "আউটপুটের আন্দাজ", formula: "P = A × G × η", note: "A = প্যানেলের ক্ষেত্রফল (m²), G = সৌর বিকিরণ (পূর্ণ রোদে ≈১০০০ W/m²), η = দক্ষতা (বাণিজ্যিক মডিউলে সাধারণত ০.১৭–০.২৩)" },
        { type: "text", heading: "উদাহরণ", body: [
          "২০% দক্ষতার ২ m² প্যানেল পূর্ণ রোদে: P = ২ × ১০০০ × ০.২০ = ৪০০ W।",
          "মাসিক শক্তি (আদর্শ): ৪০০ W × ৪ পিক-সান ঘণ্টা × ৩০ দিন = ৪৮ kWh। বাস্তবসম্মত হিসাবে তাপমাত্রা, ধুলো ও ইনভার্টার লস ধরে প্রায় ০.৭৫ গুণ ধরলে মাসে প্রায় ৩৬ kWh।",
        ]},
        { type: "table", heading: "মূল লসের কারণ", headers: ["কারণ", "প্রভাব"], rows: [
          ["তাপমাত্রা", "২৫°C-এর উপর প্রতি °C-এ আউটপুট প্রায় ০.৩৫–০.৪৫% কমে"],
          ["ছায়া", "একটি ছায়াপড়া সেল অনুপাতহীনভাবে আউটপুট কমাতে পারে"],
          ["ধুলো", "ধীরে ধীরে লস; পরিষ্কার করলে ফিরে আসে"],
          ["ইনভার্টার", "সাধারণত ৩–৮% রূপান্তর লস"],
        ]},
        { type: "list", heading: "সীমাবদ্ধতা ও নিরাপত্তা", items: [
          "রাতে কোনো আউটপুট নেই; আবহাওয়া ও ঋতুতে উৎপাদন ওঠানামা করে।",
          "প্যানেলের কোণ ও দিক (উত্তর গোলার্ধে দক্ষিণমুখী) উৎপাদনে বড় প্রভাব ফেলে।",
          "ছাদের ডিসি তার ও গ্রিড সংযোগ অবশ্যই পেশাদারদের দিয়ে স্থাপন ও সনদপ্রাপ্ত করাতে হবে।",
        ]},
      ],
    },
  },
  {
    slug: "neural-network-basics",
    category: "ai",
    title: { en: "Neural Network Basics", bn: "নিউরাল নেটওয়ার্কের ভিত্তি" },
    desc: {
      en: "What artificial neurons are, how networks learn, and where the limits are.",
      bn: "কৃত্রিম নিউরন কী, নেটওয়ার্ক কীভাবে শেখে এবং সীমা কোথায়।",
    },
    difficulty: "beginner",
    minutes: 7,
    tags: ["ai", "machine learning", "neural network"],
    updated: "2026-10-17",
    content: {
      en: [
        { type: "text", heading: "Introduction", body: [
          "A neural network is a computing model loosely inspired by biological neurons. Instead of following fixed rules, it learns patterns from examples — which makes it useful for tasks that are hard to describe with exact rules, like recognising images or speech.",
        ]},
        { type: "text", heading: "The Artificial Neuron", body: [
          "Each neuron takes several inputs, multiplies them by weights (how important each input is), adds a bias, and passes the sum through an activation function that decides how strongly the neuron fires.",
        ]},
        { type: "formula", heading: "Neuron Output", formula: "y = f(w₁x₁ + w₂x₂ + … + b)", note: "w = weights, x = inputs, b = bias, f = activation (common: ReLU, sigmoid)" },
        { type: "list", heading: "How a Network Learns", items: [
          "Make a prediction and measure the error (loss).",
          "Backpropagation calculates how much each weight contributed to the error.",
          "Gradient descent nudges every weight slightly to reduce the error.",
          "Repeat over many examples (epochs) until the error is acceptably low.",
        ]},
        { type: "table", heading: "Key Parts", headers: ["Part", "Role"], rows: [
          ["Input layer", "Receives raw data (pixels, numbers, words)"],
          ["Hidden layers", "Learn progressively abstract features"],
          ["Output layer", "Produces the final answer (class, number)"],
          ["Loss function", "Measures how wrong the prediction is"],
          ["Optimizer", "Updates weights to reduce the loss"],
        ]},
        { type: "list", heading: "Applications and Limits", items: [
          "Used in image recognition, translation, forecasting and medical imaging support.",
          "Needs lots of data and compute; quality of data decides quality of results.",
          "Can be confidently wrong — outputs must be verified in critical uses.",
          "It finds statistical patterns; it does not 'understand' like a human.",
        ]},
      ],
      bn: [
        { type: "text", heading: "ভূমিকা", body: [
          "নিউরাল নেটওয়ার্ক জৈবিক নিউরন থেকে অনুপ্রাণিত এক ধরনের কম্পিউটিং মডেল। এটা নির্দিষ্ট নিয়ম মেনে নয়, উদাহরণ থেকে প্যাটার্ন শেখে — তাই ছবি চেনা বা কথা শোনার মতো কাজে এটা কার্যকর যেখানে নিখুঁত নিয়ম লেখা কঠিন।",
        ]},
        { type: "text", heading: "কৃত্রিম নিউরন", body: [
          "প্রতিটি নিউরন কয়েকটি ইনপুট নেয়, প্রতিটির সাথে ওজন (weight) গুণ করে, একটি বায়াস (bias) যোগ করে, তারপর স্থিতিকরণ ফাংশন (activation) দিয়ে পাস করিয়ে ঠিক করে নিউরনটি কতটা জ্বলবে।",
        ]},
        { type: "formula", heading: "নিউরনের আউটপুট", formula: "y = f(w₁x₁ + w₂x₂ + … + b)", note: "w = ওজন, x = ইনপুট, b = বায়াস, f = অ্যাক্টিভেশন (প্রচলিত: ReLU, sigmoid)" },
        { type: "list", heading: "নেটওয়ার্ক কীভাবে শেখে", items: [
          "একটি অনুমান করে এর ভুল (loss) মাপে।",
          "ব্যাকপ্রোপাগেশন হিসাব করে কোন ওজনের কত দায়।",
          "গ্রেডিয়েন্ট ডিসেন্ট প্রতিটি ওজন সামান্য সামান্য ঘুরিয়ে ভুল কমায়।",
          "অনেক উদাহরণে (epochs) এটি চালিয়ে ভুল গ্রহণযোগ্য পর্যায়ে নামানো হয়।",
        ]},
        { type: "table", heading: "মূল অংশ", headers: ["অংশ", "কাজ"], rows: [
          ["ইনপুট লেয়ার", "কাঁচা ডেটা নেয় (পিক্সেল, সংখ্যা, শব্দ)"],
          ["হিডেন লেয়ার", "ক্রমশ গভীর বৈশিষ্ট্য শেখে"],
          ["আউটপুট লেয়ার", "চূড়ান্ত উত্তর দেয় (শ্রেণি, সংখ্যা)"],
          ["লস ফাংশন", "অনুমান কতটা ভুল তা মাপে"],
          ["অপ্টিমাইজার", "লস কমাতে ওজন বদলায়"],
        ]},
        { type: "list", heading: "ব্যবহার ও সীমা", items: [
          "ছবি চেনা, অনুবাদ, পূর্বাভাস ও মেডিকেল ইমেজিং-সহায়তায় ব্যবহৃত হয়।",
          "প্রচুর ডেটা ও কম্পিউটিং শক্তি দরকার; ডেটার মানই ফলাফলের মান ঠিক করে।",
          "আত্মবিশ্বাসের সাথে ভুল করতে পারে — গুরুত্বপূর্ণ কাজে ফল যাচাই বাধ্যতামূলক।",
          "এটা পরিসংখ্যানগত প্যাটার্ন খুঁজে; মানুষের মতো 'বোঝে' না।",
        ]},
      ],
    },
  },
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);

export const topicsByCategory = (categoryId: string) =>
  topics.filter((t) => t.category === categoryId);
