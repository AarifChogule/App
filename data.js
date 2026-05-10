const GAME_DATA = {

  parties: [
    {
      id: 'bje',
      name: 'BJE',
      fullName: 'Bharatiya Jana Ekta',
      motto: 'One Nation. One Leader. No Compromise.',
      color: '#FF6B35',
      ideology: 'Nationalism & Security',
      emoji: '🏛️',
      character: {
        name: 'Commander Vikram Singh',
        title: 'Ex-Army General & Party President',
        avatar: '🪖',
        description: 'A decorated war hero who traded his uniform for politics. Commander Vikram Singh believes in a strong, unified nation above all else. He speaks in commands, thinks in strategy, and sees every political challenge as a battlefield to conquer.',
        traits: ['Authoritative', 'Nationalist', 'Iron-Willed'],
        quote: '"A strong nation needs an even stronger leader. I am that leader. No compromise, no surrender."'
      }
    },
    {
      id: 'congrass',
      name: 'Congrass',
      fullName: 'Congrass Democratic Party',
      motto: 'Welfare for All. Democracy First.',
      color: '#4A90D9',
      ideology: 'Welfare & Democracy',
      emoji: '🤝',
      character: {
        name: 'Advocate Priya Mehta',
        title: 'Human Rights Lawyer & Party Chairperson',
        avatar: '👩‍⚖️',
        description: 'A passionate advocate who fought landmark cases for the poor and marginalized. Priya Mehta entered politics because she believed that laws alone cannot change a nation — leaders must. Known for her fierce debates and unbreakable commitment to democracy.',
        traits: ['Compassionate', 'Democratic', 'Fearless'],
        quote: '"Every citizen deserves dignity, healthcare, and a voice. My government will guarantee exactly that."'
      }
    },
    {
      id: 'apa',
      name: 'APA',
      fullName: 'Aam Progressive Alliance',
      motto: 'Zero Corruption. Pure Governance.',
      color: '#9B59B6',
      ideology: 'Anti-Corruption & Development',
      emoji: '🔍',
      character: {
        name: 'Engineer Arvind Dubey',
        title: 'Tech Entrepreneur & Party Founder',
        avatar: '👨‍💻',
        description: 'A former software engineer who built startups before building a political movement. Arvind Dubey is obsessed with data, transparency, and systems that actually work. The opposite of a traditional politician — no drama, just results.',
        traits: ['Transparent', 'Data-Driven', 'Reform-Minded'],
        quote: '"Corruption is a bug in the system. I am here to fix the code — permanently."'
      }
    },
    {
      id: 'shs',
      name: 'SHS',
      fullName: 'Samaj Haq Sangathan',
      motto: 'Voice of the People. Son of the Soil.',
      color: '#27AE60',
      ideology: 'Rural Rights & Traditional Values',
      emoji: '🌾',
      character: {
        name: 'Sardar Gulab Khan',
        title: 'Community Elder & Party Supreme Leader',
        avatar: '👳',
        description: 'Born in a small village with no electricity, Gulab Khan spent 40 years fighting for rural rights, clean water, and the dignity of common people. Millions of rural families see him as one of their own — a true son of the soil.',
        traits: ['Community-Focused', 'Traditional', 'Deeply Trusted'],
        quote: '"Our roots are our strength. We protect the land, the people, and our way of life — no matter what."'
      }
    }
  ],

  ministries: [
    {
      id: 'finance', name: 'Finance Minister', icon: '💰',
      description: 'Manages the national budget, taxation, and economic policy.',
      candidates: [
        { name: 'Rahul Verma',    role: 'Young Finance Graduate — IIM Ahmedabad',         detail: 'Fresh ideas, digital-first thinking. Enthusiastic but lacks real-world policy experience.',                              approval: 3 },
        { name: 'Suresh Mehta',   role: 'Experienced Banker — 15+ Years',                  detail: 'Trusted by markets. Brings stability, credibility, and excellent crisis management.',                                    approval: 7 },
        { name: 'Dr. Anita Sharma', role: 'Former Opposition Finance Minister',            detail: 'Highly skilled with a national track record. Loyalty may be questioned by party loyalists.',                            approval: 5 }
      ],
      premiumCandidate: { name: 'Dr. Meera Krishnan', role: '💎 Former IMF Senior Economist', detail: 'Managed national economies across 3 countries. Will stabilize markets overnight and attract massive foreign investment. World-class credibility.', approval: 11, diamond: true, cost: 6 }
    },
    {
      id: 'education', name: 'Education Minister', icon: '📚',
      description: 'Oversees schools, universities, and the national curriculum.',
      candidates: [
        { name: 'Prof. Deepa Nair', role: 'University Professor — 20 Years',               detail: 'Respected academic with deep knowledge of education reform. Strong approval from intellectuals and teachers.',            approval: 7 },
        { name: 'Vikram Joshi',     role: 'Corporate HR Executive — MNC Background',        detail: 'Wants to modernize education with industry ties. Popular with business class, skeptical among teachers.',               approval: 4 },
        { name: 'Salma Sheikh',     role: 'National Teacher Union Leader',                  detail: 'Hero of the teacher community. Boosts teacher morale but may push costly wage demands.',                                 approval: 6 }
      ],
      premiumCandidate: { name: 'Prof. Arjun Rao', role: '💎 Former UNESCO Global Education Director', detail: 'Redesigned education systems in 7 nations. Will bring world-class reforms, international funding, and sky-high literacy targets.', approval: 11, diamond: true, cost: 6 }
    },
    {
      id: 'pr', name: 'PR Minister', icon: '📢',
      description: 'Manages government communications, media relations, and public image.',
      candidates: [
        { name: 'Riya Kapoor',  role: 'Celebrity TV Anchor — Prime Time Host',              detail: 'Glamorous and well-known. Great optics but critics question depth and crisis communication skills.',                     approval: 4 },
        { name: 'Arun Bose',    role: 'Veteran Print Journalist — 25 Years',                detail: 'Credible, respected, and media-savvy. Will give the government a trusted and powerful public voice.',                    approval: 8 },
        { name: 'Neha Singh',   role: 'Social Media Influencer — 5 Million Followers',      detail: 'Brilliant with youth audiences. Lacks crisis communication and traditional media experience.',                           approval: 5 }
      ],
      premiumCandidate: { name: 'Karan Mehta', role: '💎 Former Whitehouse Communications Strategist', detail: 'Ran communications for 2 global leaders. Will control narratives, dominate media cycles, and make your government look unstoppable.', approval: 11, diamond: true, cost: 6 }
    },
    {
      id: 'secretary', name: 'Chief Secretary', icon: '🗂️',
      description: 'Coordinates all departments and ensures your decisions are actually executed.',
      candidates: [
        { name: 'P.K. Srivastava', role: 'Retired IAS Officer — 35 Years Service',         detail: 'Unmatched administrative experience. Trusted across all departments, zero tolerance for delays.',                       approval: 8 },
        { name: 'Ananya Rao',      role: 'Young Tech Entrepreneur — Startup Founder',       detail: 'Brings digital transformation. Inexperienced in government systems but innovatively driven.',                            approval: 5 },
        { name: 'Ram Prasad',      role: 'Senior Party Loyalist — 20 Years With Party',     detail: 'Deeply loyal and personally trusted. Limited skill set but ensures political discipline.',                               approval: 3 }
      ],
      premiumCandidate: { name: 'Dr. Nandita Rao', role: '💎 Former UN Administrative Director', detail: 'Ran operations for 40,000 UN staff across 60 countries. Brings systems, discipline, and zero-failure execution to your entire government.', approval: 11, diamond: true, cost: 6 }
    },
    {
      id: 'health', name: 'Health Minister', icon: '🏥',
      description: 'Leads national health policy, public hospitals, and pandemic response.',
      candidates: [
        { name: 'Dr. Rajan Pillai', role: 'Senior Surgeon & Hospital Director',             detail: 'Internationally trained with public health expertise spanning 3 decades. Highly trusted by citizens.',                  approval: 9 },
        { name: 'Sunita Devi',      role: 'NGO Rural Health Worker',                        detail: 'Champion of grassroots healthcare. Loved by rural voters. Limited large-scale system experience.',                      approval: 6 },
        { name: 'Ravi Pharma',      role: 'Pharmaceutical Industry CEO',                   detail: 'Strong sector knowledge but obvious conflict of interest raises serious corruption concerns.',                            approval: 2 }
      ],
      premiumCandidate: { name: 'Dr. Priya Nair', role: '💎 Former WHO South Asia Regional Director', detail: 'Led pandemic responses across 12 nations. Will build a world-class health system, attract WHO funding, and make every citizen feel protected.', approval: 12, diamond: true, cost: 6 }
    },
    {
      id: 'transport', name: 'Transportation Minister', icon: '🚇',
      description: 'Manages roads, railways, metro projects, and infrastructure contracts.',
      candidates: [
        { name: 'Col. Rajesh Nath (Retd.)', role: 'Retired Army Engineer Colonel',         detail: 'Led military infrastructure projects. Efficient, disciplined, zero tolerance for corruption.',                          approval: 7 },
        { name: 'Meera Thomas',             role: 'Award-Winning Civil Engineer',           detail: 'Built three major national bridges on time and on budget. Public deeply trusts her track record.',                       approval: 8 },
        { name: 'Dinesh Contractor',        role: 'Contractor with Party Connections',      detail: 'Gets things done fast using his network. Kickback allegations make him a serious political liability.',                  approval: 2 }
      ],
      premiumCandidate: { name: 'Aditya Kumar', role: '💎 Built Dubai Metro & Singapore MRT', detail: 'Delivered 3 of the world\'s most efficient transit systems. Will complete all infrastructure projects on time, under budget, and scandal-free.', approval: 12, diamond: true, cost: 6 }
    },
    {
      id: 'justice', name: 'Justice Minister', icon: '⚖️',
      description: 'Oversees the judiciary, legal reforms, and law enforcement policy.',
      candidates: [
        { name: 'Justice S.P. Verma (Retd.)', role: 'Retired High Court Chief Justice',    detail: 'Impeccable 40-year judicial career with landmark human rights rulings. Unquestionable credibility.',                    approval: 9 },
        { name: 'Adv. Fatima Shaikh',         role: 'Senior Human Rights Lawyer',          detail: 'Fierce defender of civil liberties. Very popular with activists, minorities, and legal circles.',                        approval: 7 },
        { name: 'Sanjay Loyalist',            role: 'Government-Aligned Senior Advocate',  detail: 'Known for defending the party. Widely seen as biased by opposition and media.',                                          approval: 3 }
      ],
      premiumCandidate: { name: 'Justice Kavita Sharma', role: '💎 Former Supreme Court Chief Justice', detail: 'Authored 200+ landmark rulings. Will reform the entire justice system, eliminate backlog, and restore complete public faith in courts.', approval: 12, diamond: true, cost: 6 }
    }
  ],

  commonScenarios: [
    {
      id: 'flood', title: '🌊 Capital City — Catastrophic Flood', urgency: 'CRITICAL',
      story: 'A catastrophic flood has hit the capital city. Over 500,000 citizens are displaced, roads are submerged, and hospitals are overwhelmed. National TV channels are live from rooftops. Every hour of delay costs lives.',
      choices: [
        { text: 'Deploy the Army for immediate relief, emergency shelters, and medical camps across all affected zones', approval: 8, outcome: 'The army\'s lightning response saves thousands. Citizens erupt with gratitude. Your approval surges nationwide.' },
        { text: 'Set up a National Relief Fund and coordinate NGO and state government support', approval: 5, outcome: 'Aid flows but slower deployment frustrates citizens who expected boots on ground faster.' },
        { text: 'Hold a press conference blaming the previous government for poor drainage infrastructure', approval: -7, outcome: 'Citizens are outraged. People are stranded on rooftops and you are playing blame games. Trust collapses.' },
        { text: '💎 Activate National Emergency Command — military, medical, media, relief under one center with unlimited resources', approval: 13, diamond: true, cost: 6, outcome: 'A masterclass in leadership. Citizens are awestruck. Your response becomes a global case study in governance excellence.' }
      ]
    },
    {
      id: 'inflation', title: '📈 Inflation Crisis — Food Prices Skyrocket', urgency: 'HIGH',
      story: 'Food prices have surged 40% in one month. Middle-class families are skipping meals. Economists warn of recession. The opposition holds daily press conferences demanding your resignation.',
      choices: [
        { text: 'Immediately subsidize essential food items and cap prices on all staples', approval: 8, outcome: 'Markets stabilize within days. Public confidence in your government grows significantly.' },
        { text: 'Launch a government investigation into price gouging by wholesale traders', approval: 5, outcome: 'Seen as responsible but slow. People want action, not committees.' },
        { text: 'Announce bulk food import — will take 3 months to arrive', approval: 2, outcome: 'Economically sound long-term but citizens are suffering right now. Opposition attacks grow louder.' },
        { text: '💎 Deploy price control task forces nationwide + direct food subsidies + emergency farmer incentives simultaneously', approval: 13, diamond: true, cost: 6, outcome: 'Triple-action response stuns everyone. Markets crash back to normal within 72 hours. You are called an economic genius.' }
      ]
    },
    {
      id: 'education', title: '✏️ Education Collapse — National Teacher Strike', urgency: 'HIGH',
      story: '200,000 teachers have gone on indefinite strike. 50 million students cannot attend class. Exams are being cancelled. Parents are furious. The nation\'s children are the hostages of this crisis.',
      choices: [
        { text: 'Accept all teacher demands immediately — end the strike today with a full salary revision', approval: 9, outcome: 'Teachers flood back to classrooms. Parents cheer. Seen as a compassionate, decisive leader who listens.' },
        { text: 'Form an expert committee to review demands within 60 days', approval: 4, outcome: 'Strike continues partially. Critics call it a delay tactic.' },
        { text: 'Issue legal notices to striking teachers under Essential Services Act', approval: -6, outcome: 'Teachers escalate. Public sympathy shifts completely against your government.' },
        { text: '💎 Announce Education Revolution Package — teacher pay + school renovation + free devices for every student', approval: 13, diamond: true, cost: 6, outcome: 'A historic education moment. Teachers, parents, and students all celebrate. You are called the Education Prime Minister.' }
      ]
    },
    {
      id: 'pandemic', title: '🦠 Pandemic Outbreak — Virus Spreading Fast', urgency: 'CRITICAL',
      story: 'A dangerous new virus has spread to 12 major cities. Hospitals are filling up. Global health organizations are alarmed. Citizens are panicking. Your health response will define your political legacy.',
      choices: [
        { text: 'Declare national health emergency — free treatment for all, strict containment zones, immediate vaccine procurement', approval: 9, outcome: 'Citizens feel protected. Cases drop dramatically. International community praises your bold leadership.' },
        { text: 'Implement partial restrictions and launch public awareness and testing campaign', approval: 6, outcome: 'Reduces panic but critics say stronger containment was needed earlier.' },
        { text: 'Claim numbers are exaggerated — delay response to avoid economic disruption', approval: -9, outcome: 'Disaster. Virus spreads uncontrolled. Medical system collapses. International embarrassment.' },
        { text: '💎 Full pandemic war protocol — lockdown + free treatment + vaccine in 30 days + economic safety net for all workers', approval: 14, diamond: true, cost: 6, outcome: 'Citizens feel completely safe. Cases eliminated in record time. WHO invites you to speak at global health summit as a model leader.' }
      ]
    },
    {
      id: 'corruption', title: '💸 Metro Corruption — ₹5,000 Crore Scandal', urgency: 'CRITICAL',
      story: 'A sting operation reveals ₹5,000 crore siphoned from the national metro project. A minister in your cabinet is directly implicated. Leaked documents are everywhere. Parliament is in uproar.',
      choices: [
        { text: 'Dismiss the minister immediately, freeze accounts, hand case to CBI with zero interference', approval: 9, outcome: 'Decisive action. Citizens see you as genuinely different from corrupt politicians. Approval skyrockets.' },
        { text: 'Suspend the minister pending internal party inquiry — results in 7 days', approval: 5, outcome: '"Why 7 days?" becomes the opposition\'s attack line. Seen as protecting your own.' },
        { text: 'Defend the minister as a "political conspiracy" by the opposition', approval: -8, outcome: 'Public outrage is instant and massive. Citizens believe you are shielding corruption.' },
        { text: '💎 Create independent anti-corruption court, dismiss minister, recover all ₹5,000 crore within 90 days — live on TV', approval: 14, diamond: true, cost: 6, outcome: 'Citizens are completely stunned. Never seen accountability at this level. You become the anti-corruption legend of Indian politics.' }
      ]
    },
    {
      id: 'protest', title: '✊ Nationwide Opposition Protest — 2 Million on Streets', urgency: 'MODERATE',
      story: 'The opposition has organized a massive nationwide protest with 2 million people demanding early elections. Highways are blocked. International media is broadcasting it live.',
      choices: [
        { text: 'Publicly invite all opposition leaders for a televised national dialogue — open and transparent', approval: 8, outcome: 'Seen as a democratic and confident leader not afraid of debate. Public respects the open approach.' },
        { text: 'Allow peaceful protests while offering a structured government feedback session', approval: 5, outcome: 'Balanced and respectful. Protests continue but situation does not escalate.' },
        { text: 'Deploy heavy police force to disperse all protest gatherings immediately', approval: -7, outcome: 'Violent clashes televised live. International condemnation. Citizens fear authoritarianism.' },
        { text: '💎 Hold a live 4-hour national town hall — answer every question from citizens and opposition leaders on national TV', approval: 13, diamond: true, cost: 6, outcome: 'The most watched political event in national history. Your confidence, honesty, and composure under fire win the country\'s heart.' }
      ]
    },
    {
      id: 'justice_scandal', title: '⚖️ Judge Bribery — Audio Evidence Goes Viral', urgency: 'HIGH',
      story: 'A leaked audio of a sitting judge negotiating a ₹2 crore bribe has gone viral — 50 million views. Citizens are outraged. The integrity of the entire justice system is under question.',
      choices: [
        { text: 'Demand immediate Supreme Court inquiry and full judicial audit — zero tolerance publicly declared', approval: 9, outcome: 'Citizens applaud your commitment to rule of law. Judicial trust begins slow restoration.' },
        { text: 'Transfer the judge to a non-judicial role pending independent legal review', approval: 5, outcome: 'Measured, constitutional approach appreciated by legal community.' },
        { text: 'Dismiss the leak as fabricated opposition propaganda', approval: -8, outcome: 'Massive backlash. Citizens believe you are shielding corruption in courts.' },
        { text: '💎 Launch National Judicial Reform Act — fast-track courts for corruption, independent oversight body, mandatory audio recordings of all hearings', approval: 13, diamond: true, cost: 6, outcome: 'You turn a crisis into a historic reform moment. Legal experts say this is the biggest judicial reform in 50 years.' }
      ]
    }
  ],

  partyScenarios: {
    bje: [
      {
        id: 'border', title: '🪖 Border Crisis — Military Provocation', urgency: 'CRITICAL',
        story: 'A neighboring country has violated the border 12 times this month and is conducting military exercises near the Line of Control. Citizens and army veterans demand a strong response.',
        choices: [
          { text: 'Deploy additional military divisions to the border and issue a firm diplomatic ultimatum', approval: 9, outcome: 'Nation applauds your strength. Neighbor backs down within 48 hours. Nationalist support surges.' },
          { text: 'Engage in back-channel diplomacy while visibly increasing military readiness', approval: 6, outcome: 'International community approves. Some citizens want a stronger visible response.' },
          { text: 'Dismiss it as media sensationalism and take no significant action', approval: -6, outcome: '"Coward government" trends nationally. Opposition uses this relentlessly.' },
          { text: '💎 Combine surgical deterrence with emergency UN address — show military strength AND diplomatic mastery simultaneously', approval: 13, diamond: true, cost: 6, outcome: 'World leaders are impressed. Nation erupts in pride. The neighbor backs off completely. You are called a strategic genius.' }
        ]
      },
      {
        id: 'riots', title: '🔥 Religious Festival — Communal Riots', urgency: 'CRITICAL',
        story: 'Violent clashes between two communities during a major religious festival. 3 dead, 50 injured. Social media is inflaming tensions. Major cities under curfew.',
        choices: [
          { text: 'Deploy peacekeeping forces immediately with strict neutral orders — arrest all instigators from any community', approval: 9, outcome: 'Violence controlled in 48 hours. All communities credit the firm neutral approach.' },
          { text: 'Publicly blame the minority community and call for one-sided action against them only', approval: -7, outcome: 'International condemnation. Minority communities completely lose trust.' },
          { text: 'Temporarily suspend the festival and impose curfew for 2 weeks', approval: 4, outcome: 'Violence stops but religious groups are furious about the suspension.' },
          { text: '💎 Deploy peacekeepers + hold emergency all-religion peace summit + broadcast message of unity on every channel', approval: 13, diamond: true, cost: 6, outcome: 'The peace summit is broadcast live. Religious leaders weep together. Violence ends in 12 hours. Nation calls it a miracle of leadership.' }
        ]
      },
      {
        id: 'military', title: '🛡️ Military Budget — Parliament Showdown', urgency: 'MODERATE',
        story: 'Parliament debates the national budget. Defence experts demand a 25% military spending increase. The finance ministry warns this will cut social welfare programs.',
        choices: [
          { text: 'Approve the full 25% military budget increase — national security above all', approval: 8, outcome: 'Military morale surges. Nationalist citizens strongly approve.' },
          { text: 'Approve 10% increase while fully protecting core welfare programs', approval: 6, outcome: 'Both sides partially satisfied. Seen as pragmatic leadership.' },
          { text: 'Reject the increase — redirect defense funds toward welfare', approval: -5, outcome: 'Core nationalist voters feel deeply betrayed.' },
          { text: '💎 Approve 20% military increase + cut wasteful government spending to fully fund welfare — no trade-off needed', approval: 13, diamond: true, cost: 6, outcome: 'A masterstroke. Military gets its funding, welfare is protected, and citizens see a leader who refuses to choose between security and care.' }
        ]
      },
      {
        id: 'media', title: '📺 Anti-National Media Controversy', urgency: 'MODERATE',
        story: 'A major channel continuously questions army operations and calls border policies failures. Party workers demand it be shut down. Civil society is divided.',
        choices: [
          { text: 'Launch a formal court-based legal investigation — let the system decide', approval: 7, outcome: 'Democratic approach earns appreciation from intellectuals. Due process begins.' },
          { text: 'Immediately revoke broadcasting license using emergency executive powers', approval: 3, outcome: 'Nationalist base happy. International press freedom groups condemn loudly.' },
          { text: 'Do nothing — freedom of press must be protected', approval: -4, outcome: 'Core party supporters feel let down. Channel continues its campaign unchecked.' },
          { text: '💎 Launch a live national debate between army experts and the channel — destroy their narrative with facts, not censorship', approval: 12, diamond: true, cost: 6, outcome: 'Your party\'s experts demolish every claim live on TV. The channel\'s credibility collapses. You win the war of information without touching press freedom.' }
        ]
      }
    ],

    congrass: [
      {
        id: 'farmers', title: '🌾 Farmer Loan Crisis — March on Capital', urgency: 'CRITICAL',
        story: 'Hundreds of thousands of debt-crushed farmers marched to the capital. Suicides are increasing. Their demand: complete loan waivers now. The nation\'s heart is bleeding.',
        choices: [
          { text: 'Announce complete and unconditional loan waiver for all farmers immediately', approval: 10, outcome: 'Farmers celebrate. Rural India erupts in joy. Greatest welfare decision in a generation.' },
          { text: 'Offer 50% waiver for small farmers with structured plans for larger loans', approval: 6, outcome: 'Partially satisfying. Many still struggling. "Almost there but not quite."' },
          { text: 'Reject waivers and propose expanded crop insurance as the solution', approval: -7, outcome: '"Welfare party abandoned farmers" becomes the national headline.' },
          { text: '💎 Full loan waiver + guaranteed minimum crop prices + free irrigation for 5 years + crop insurance — complete farmer protection package', approval: 14, diamond: true, cost: 6, outcome: 'Farmers call you the greatest leader they have ever seen. Rural votes are locked for a generation. Opposition has no counter argument.' }
        ]
      },
      {
        id: 'minority', title: '🕊️ Minority Discrimination — A National Crisis', urgency: 'HIGH',
        story: 'Documented incidents of employment denials, housing discrimination, and mob attacks on minorities have gone widely viral. The UN has sent a formal letter. The world is watching.',
        choices: [
          { text: 'Pass a comprehensive Anti-Discrimination Act with strict penalties and fast-track courts', approval: 9, outcome: 'Minority communities regain trust. India wins international praise for upholding constitutional rights.' },
          { text: 'Establish a National Reconciliation Committee with community dialogue programs', approval: 5, outcome: 'Peaceful approach appreciated. Critics want stronger immediate legal protection.' },
          { text: 'Deny any systemic discrimination and blame opposition for sensationalizing incidents', approval: -8, outcome: 'Devastating backlash. The party\'s core identity is publicly questioned.' },
          { text: '💎 Anti-Discrimination Act + ₹5,000 crore minority welfare fund + appointment of first-ever National Equality Commissioner', approval: 13, diamond: true, cost: 6, outcome: 'International standing of India rockets upward. Minority communities openly endorse your party. Opposition is completely silenced.' }
        ]
      },
      {
        id: 'healthcare', title: '🏥 Universal Healthcare — The Promise Must Be Kept', urgency: 'HIGH',
        story: 'A national movement demands free healthcare for every citizen. Millions die unable to pay medical bills. This was your central election promise. Citizens are now testing if you meant it.',
        choices: [
          { text: 'Launch Universal Health Guarantee — free treatment in all government hospitals', approval: 10, outcome: 'A historic moment. Millions of poor families cheer. International health organizations applaud.' },
          { text: 'Massively expand existing health schemes to cover 80% of population', approval: 7, outcome: 'Major progress appreciated. Not the full promise, but a significant step forward.' },
          { text: 'Declare it unviable and propose a public-private partnership instead', approval: -6, outcome: '"The welfare party broke its biggest promise" becomes an election-defining attack forever.' },
          { text: '💎 Universal Health Guarantee + 500 new public hospitals + free medicines + mental health coverage + 1 lakh new doctors hired', approval: 14, diamond: true, cost: 6, outcome: 'The most comprehensive health package in national history. You are called the Health Prime Minister. Opposition cannot argue against a single point.' }
        ]
      },
      {
        id: 'press', title: '📰 Press Freedom Under Attack', urgency: 'HIGH',
        story: 'Multiple investigative journalists arrested under sedition laws. A major newspaper was raided last night. International press freedom indices now rank the country in the bottom 20.',
        choices: [
          { text: 'Release all journalists, repeal sedition law, and constitutionally guarantee press freedom', approval: 9, outcome: 'Democracy celebrated. Press freedom index improves dramatically. Global respect earned.' },
          { text: 'Release journalists but maintain sedition law with stricter judicial oversight', approval: 5, outcome: 'Journalists freed but feel insecure. International concern remains.' },
          { text: 'Accuse detained journalists of spreading misinformation and double down on crackdowns', approval: -7, outcome: 'International outrage. India ranked among worst for press freedom.' },
          { text: '💎 Release all journalists + repeal sedition law + create Constitutional Press Freedom Tribunal + invite international observers', approval: 13, diamond: true, cost: 6, outcome: 'India shoots to top 10 in press freedom globally. You are called a defender of democracy. Citizens deeply trust a government that protects truth-tellers.' }
        ]
      }
    ],

    apa: [
      {
        id: 'sting', title: '🎥 Cabinet Minister Caught on Camera — Live Sting', urgency: 'CRITICAL',
        story: 'A hidden camera sting caught your own cabinet minister accepting ₹50 lakh in bribes live on video. It has been played on every channel. Citizens who voted APA specifically for anti-corruption promises are watching your response.',
        choices: [
          { text: 'Dismiss the minister within the hour, freeze assets, hand case to CBI with zero interference', approval: 11, outcome: 'Citizens erupt in approval. This is exactly why they voted APA. Zero tolerance completely vindicated.' },
          { text: 'Suspend minister pending internal inquiry within 7 days', approval: 5, outcome: '"Why 7 days?" becomes the dominant attack line. Seen as softness on a clear-cut case.' },
          { text: 'Hold press conference calling the sting fabricated and stand fully behind the minister', approval: -10, outcome: 'Catastrophic collapse. APA was built on anti-corruption. This destroys everything overnight.' },
          { text: '💎 Dismiss minister within the hour + file criminal charges + announce live anti-corruption audit of entire cabinet on national TV', approval: 14, diamond: true, cost: 6, outcome: 'The most watched political moment of the decade. Every citizen sees real accountability for the first time. APA becomes untouchable in public trust.' }
        ]
      },
      {
        id: 'unemployment', title: '👨‍💼 Youth Unemployment — #NoJobsNoVote Explodes', urgency: 'HIGH',
        story: 'Millions of educated youth are unemployed. #NoJobsNoVote is trending for 3 weeks. Protests block 20 city centers. The government job application ratio is 500 applicants per 1 post.',
        choices: [
          { text: 'Launch National Job Creation Mission — 2 million tech and infrastructure jobs in 2 years', approval: 9, outcome: 'Youth erupt with hope nationwide. Seen as a government that truly understands their pain.' },
          { text: 'Open skill development centers in every district with mandatory industry placement tie-ups', approval: 7, outcome: 'Practical and believable. Youth appreciate the structured plan.' },
          { text: 'Blame the previous government for decades of mismanagement', approval: -6, outcome: '"You\'ve been in power 2 years" becomes the perfect counter. Blame strategy backfires completely.' },
          { text: '💎 2 million jobs + 1 startup fund per district + guaranteed internship for every graduate + public startup index dashboard', approval: 13, diamond: true, cost: 6, outcome: 'Youth call it the most ambitious employment plan in history. Entrepreneurship explodes. Unemployment rate begins falling before your term ends.' }
        ]
      },
      {
        id: 'investment', title: '🌐 Smart City — Foreign Investment Decision', urgency: 'MODERATE',
        story: 'A major international tech consortium wants to invest ₹80,000 crore to build 5 smart cities. Opposition calls it "selling the country." Citizens are divided — development vs. sovereignty.',
        choices: [
          { text: 'Accept investment with full transparency, public contracts online, citizen oversight board', approval: 9, outcome: 'Seen as smart, transparent governance. Economic confidence surges nationally.' },
          { text: 'Negotiate better terms — 60% local employment + full tech transfer + data sovereignty clause', approval: 7, outcome: 'Praised for protecting national interest while enabling development.' },
          { text: 'Reject all foreign investment on national sovereignty grounds', approval: -4, outcome: 'Development sector frustrated. International investor confidence collapses.' },
          { text: '💎 Accept investment with full transparency + negotiate 70% local hiring + publish every contract live online + create public profit-sharing model', approval: 13, diamond: true, cost: 6, outcome: 'Called the most transparent FDI deal in history. Local employment skyrockets. International investors line up to work with your government.' }
        ]
      },
      {
        id: 'electricity', title: '⚡ Free Electricity Promise — D-Day Arrives', urgency: 'HIGH',
        story: 'APA promised 200 free electricity units per household. The Power Ministry confirms the treasury cannot sustain it. Opposition runs countdown clocks on TV. Citizens who voted on this promise are waiting.',
        choices: [
          { text: 'Deliver 200 free units immediately — cut non-essential government expenses to fund it', approval: 10, outcome: 'Promise kept. "APA delivers" becomes the viral narrative. Citizens trust completely.' },
          { text: 'Phase rollout over 18 months, starting with poorest 40% of households first', approval: 6, outcome: 'Most understand the practical approach. Some disappointment at delay.' },
          { text: 'Quietly retract the promise citing "economic realities discovered only after taking office"', approval: -9, outcome: 'Trust collapses. "They lied just like all others" becomes impossible to recover from.' },
          { text: '💎 Deliver 200 free units + install solar panels on 10 million homes + create National Energy Independence Fund for zero electricity cost within 5 years', approval: 14, diamond: true, cost: 6, outcome: 'The most visionary energy policy in national history. You don\'t just keep the promise — you make it permanent. Opposition is stunned into silence.' }
        ]
      }
    ],

    shs: [
      {
        id: 'religiouslaw', title: '🕌 Religious Law Demand — National Controversy', urgency: 'HIGH',
        story: 'Senior religious leaders affiliated with your party demand religion-based community laws within 90 days. Urban citizens and constitutional experts are alarmed. Your rural base is loudly demanding compliance.',
        choices: [
          { text: 'Form a Constitutional Religious Advisory Council — no immediate legislation', approval: 7, outcome: 'Both sides partially satisfied. Seen as respecting religion while maintaining constitutional balance.' },
          { text: 'Firmly and publicly reject all religious law demands — constitution guarantees equality', approval: 5, outcome: 'Urban India applauds. Some traditional supporters disappointed but respect the principle.' },
          { text: 'Fully implement all demanded religious community laws', approval: -6, outcome: 'Constitutional crisis. Minorities panic. International alarm. Secular citizens demand resignation.' },
          { text: '💎 Host National Constitutional Dialogue — bring religious scholars, legal experts, and citizens together for a landmark consensus-building summit', approval: 12, diamond: true, cost: 6, outcome: 'Called the wisest political move of the decade. Both religious and secular communities feel heard. You emerge as a unifying statesman, not a divisive politician.' }
        ]
      },
      {
        id: 'womenedu', title: '👩‍🎓 Girls\' Schools Shut Down — Rural Controversy', urgency: 'CRITICAL',
        story: 'Conservative elder councils in 3 rural districts forcibly shut down all girls\' schools claiming it violates "traditional values." 80,000 girls are locked out. National media covers it daily. The world is watching.',
        choices: [
          { text: 'Firm public stand — every girl will attend school, law enforcement deployed to reopen all schools today', approval: 10, outcome: 'A defining hero moment. All schools reopen. Even conservative rural citizens respect the courageous clear decision.' },
          { text: 'Send women community leaders to engage in dialogue with elders locally', approval: 5, outcome: 'Peaceful but slow. 40,000 girls still out of school for weeks. Seen as too cautious.' },
          { text: 'Publicly state that local cultural traditions must be respected — government will not interfere', approval: -9, outcome: 'National and international outrage. UN condemns. Activists demand resignation.' },
          { text: '💎 Reopen all schools with police + launch national Girls Education Fund + personally visit the district and meet with both elders and girls on live TV', approval: 14, diamond: true, cost: 6, outcome: 'You personally sit with the girls and promise their future on national television. The entire nation weeps with pride. It becomes the most powerful political moment of the year.' }
        ]
      },
      {
        id: 'donation', title: '🕌 Mosque Donation Scandal — Documents Leaked', urgency: 'HIGH',
        story: '₹30 crore in religious donations to party-linked mosques were secretly redirected to fund political campaigns. The religious community feels betrayed. Corruption watchdogs demand full accountability.',
        choices: [
          { text: 'Order full independent audit, publicly suspend all involved officials, and return every rupee', approval: 9, outcome: 'Religious community trust restored. Citizens see genuine accountability. Scandal neutralized.' },
          { text: 'Suspend accused officials and promise investigation within 30 days', approval: 5, outcome: 'Community watches cautiously. Awaits results with guarded hope.' },
          { text: 'Defend all expenditure as legitimate "community development" and protect officials', approval: -7, outcome: 'Religious communities feel utterly betrayed. Citizens see pure hypocrisy.' },
          { text: '💎 Full audit + return all funds + create permanent Independent Religious Donations Oversight Board with live public tracking', approval: 13, diamond: true, cost: 6, outcome: 'The community calls you the most honest religious leader in politics. The oversight board becomes a model adopted nationally. Trust is not just restored — it is multiplied.' }
        ]
      },
      {
        id: 'water', title: '💧 Rural Water Crisis — 3,000 Villages Running Dry', urgency: 'CRITICAL',
        story: '3,000 rural villages have had zero water for 3 weeks. Women walk 10km daily for water. Children are sick. These are your most loyal voters and they are suffering right now.',
        choices: [
          { text: 'Deploy emergency water tankers today + announce permanent rural pipeline construction project', approval: 11, outcome: 'Villages erupt with gratitude. Rural citizens say "SHS is truly ours." Core vote bank solidified massively.' },
          { text: 'Launch Rainwater Harvesting and Borewell Mission as long-term solution', approval: 6, outcome: 'Long-term thinking appreciated. But immediate suffering continues and frustration grows.' },
          { text: 'Hold press conference blaming state government for failing to maintain infrastructure', approval: -6, outcome: '"We voted for you and you blame others while our children have no water." Goes viral.' },
          { text: '💎 Emergency tankers today + pipeline project in 6 months + solar water pumps in every village + free water forever law for rural areas', approval: 14, diamond: true, cost: 6, outcome: 'You are worshipped in rural India. Not one village lacks water within 6 months. They name a river project after you. The rural vote is yours forever.' }
        ]
      }
    ]
  },

  aiActions: {
    bje: [
      { type: 'boost',  text: 'BJE holds a massive nationalist rally across 5 cities',       detail: 'Crowd of 500,000 chants for BJE. Public support surges.',      points: 5 },
      { type: 'attack', text: 'BJE media cell launches propaganda campaign against {party}',   detail: 'National TV ads accuse {party} of being "anti-national".',    points: 4 },
      { type: 'boost',  text: 'BJE announces military modernization package',                  detail: 'Defence community and veterans rally strongly behind BJE.',   points: 4 },
      { type: 'boost',  text: 'BJE organizes free medical camps in 200 rural villages',       detail: 'Citizens praise BJE\'s grassroots welfare outreach.',          points: 3 },
      { type: 'attack', text: 'BJE releases dossier exposing alleged {party} corruption links', detail: 'Press conference accuses {party} of financial irregularities.', points: 4 },
      { type: 'scandal',text: 'BJE internal power struggle leaks to national press',           detail: 'Party rebels publicly challenge leadership. Damage control begins.', points: -4 }
    ],
    congrass: [
      { type: 'boost',  text: 'Congrass launches nationwide farmer welfare roadshow',          detail: 'Rural citizens warmly receive Congrass\'s welfare promises.',   points: 5 },
      { type: 'attack', text: 'Congrass holds major press conference exposing {party} failures', detail: 'Detailed slideshow of {party}\'s governance gaps shown on TV.', points: 4 },
      { type: 'boost',  text: 'Congrass leader delivers powerful parliament speech',           detail: 'Standing ovation from gallery. Clips go viral online.',         points: 4 },
      { type: 'boost',  text: 'Congrass announces free legal aid program for the poor',       detail: 'Millions of citizens praise the initiative. Strong approval.',  points: 3 },
      { type: 'attack', text: 'Congrass files RTI exposing {party}\'s hidden expenditures',   detail: 'Documents released to all major newspapers and channels.',      points: 3 },
      { type: 'scandal',text: 'Congrass internal conflict — two senior leaders publicly clash', detail: 'Bitter public spat damages party\'s image of unity.',          points: -4 }
    ],
    apa: [
      { type: 'boost',  text: 'APA releases national corruption audit — names 50 officials',  detail: 'Citizens shocked and impressed by APA\'s transparency drive.',  points: 5 },
      { type: 'attack', text: 'APA launches anti-{party} campaign: "Time for real change"',   detail: 'Viral social media campaign targets {party}\'s weak decisions.',  points: 4 },
      { type: 'boost',  text: 'APA opens anti-corruption hotline — 1 million calls in 24 hrs', detail: 'National media calls it a landmark governance initiative.',     points: 4 },
      { type: 'boost',  text: 'APA publishes live government spending dashboard online',       detail: 'Transparency praised globally. Citizens feel informed and empowered.', points: 4 },
      { type: 'attack', text: 'APA sting exposes minor scandal linked to {party} member',     detail: 'Presented as proof that {party} cannot govern cleanly.',         points: 3 },
      { type: 'scandal',text: 'APA minister suddenly resigns citing personal reasons',         detail: 'Shock resignation raises questions about internal party stability.', points: -5 }
    ],
    shs: [
      { type: 'boost',  text: 'SHS holds massive rural community rally — 300,000 attend',     detail: 'Farmers and villagers passionately back SHS leadership.',       points: 5 },
      { type: 'attack', text: 'SHS accuses {party} of ignoring rural communities on national TV', detail: 'Emotional speech paints {party} as anti-farmer and out of touch.', points: 4 },
      { type: 'boost',  text: 'SHS launches free seed and fertilizer scheme for farmers',     detail: 'Rural communities celebrate SHS\'s direct on-ground support.',  points: 4 },
      { type: 'boost',  text: 'SHS elder gives moving speech about poverty on national television', detail: 'Video goes viral. Citizens moved by authenticity and passion.', points: 3 },
      { type: 'attack', text: 'SHS publishes report: "{party} has done nothing for villages in 1 year"', detail: 'Detailed village-by-village comparison damages {party}\'s image.', points: 3 },
      { type: 'scandal',text: 'SHS candidate caught in minor land grab controversy',           detail: 'Party rushes to do damage control as media circles.',            points: -4 }
    ]
  },

  debates: [
    {
      round: 1,
      topic: '💰 Economic Policy',
      question: 'The nation faces both inflation and unemployment. As the leader of your party, what is your single most important economic priority for the next 12 months?',
      aiResponses: {
        bje:      '"We will slash import duties and launch a ₹10 lakh crore Make-in-Nation manufacturing fund. Indian factories will power the entire economy."',
        congrass: '"We will immediately implement universal basic income — ₹6,000 per family per month — and no citizen will go to bed hungry under our watch."',
        apa:      '"We will digitize all government contracts, eliminate corruption leakages, and save ₹8 lakh crore annually. Clean money means real development."',
        shs:      '"We will cancel every farmer loan, set guaranteed minimum prices for every crop, and make sure the backbone of this nation — the farmer — finally prospers."'
      },
      aiPoints: { bje: 5, congrass: 6, apa: 7, shs: 4 },
      choices: [
        { text: 'Launch a ₹15 lakh crore National Development Fund targeting infrastructure, jobs, and technology simultaneously', approval: 7 },
        { text: 'Implement complete tax reform — simplify structure, expand tax base, and fund welfare without borrowing', approval: 6 },
        { text: 'Prioritize paying down national debt first to stabilize the economy before any new spending', approval: 3 },
        { text: '💎 Announce a full economic masterplan — debt reduction + development fund + tax reform + job guarantees — all simultaneously with live milestones', approval: 12, diamond: true, cost: 6 }
      ]
    },
    {
      round: 2,
      topic: '🏥 Healthcare & Education',
      question: 'Millions of citizens still lack basic healthcare and quality education. What concrete steps will your government take within the first 100 days?',
      aiResponses: {
        bje:      '"We will build 1,000 Sainik schools in every district and launch private-sector health partnerships. Strong body, strong mind, strong nation."',
        congrass: '"We will make every government school world-class and guarantee free healthcare to every single citizen. No exceptions, no conditions."',
        apa:      '"We will publish live dashboards for every hospital and school — citizens will track every rupee. Accountability is the first medicine."',
        shs:      '"We will build health centers in every village and bring teachers who speak local languages. Our rural children deserve the same future as city children."'
      },
      aiPoints: { bje: 4, congrass: 7, apa: 6, shs: 5 },
      choices: [
        { text: 'Announce free quality education for all children up to age 18 and free primary healthcare for every citizen in 100 days', approval: 8 },
        { text: 'Partner with private sector for 5,000 new hospitals and 10,000 upgraded schools within 2 years', approval: 5 },
        { text: 'Focus resources on 10 model districts as a pilot program before scaling nationally', approval: 3 },
        { text: '💎 Universal free healthcare + free education + live public tracker for every hospital and school + 1 lakh new doctors and teachers hired in 60 days', approval: 13, diamond: true, cost: 6 }
      ]
    },
    {
      round: 3,
      topic: '⚖️ Corruption & Governance',
      question: 'Corruption remains the biggest trust issue between citizens and their government. What is the single most powerful step your party will take to permanently end corruption?',
      aiResponses: {
        bje:      '"We will give our anti-corruption agencies complete independence and triple their budget. Anyone who steals from the nation will face the nation\'s full force."',
        congrass: '"We will pass the strongest Whistleblower Protection Act ever written and make every government contract fully public. Sunlight is the best disinfectant."',
        apa:      '"We will put every single rupee of government spending on a public dashboard, updated in real time. When citizens can see it, officials cannot steal it."',
        shs:      '"We will create village-level corruption watchdog committees led by citizens — not politicians. The people closest to the corruption will police it."'
      },
      aiPoints: { bje: 5, congrass: 6, apa: 8, shs: 5 },
      choices: [
        { text: 'Create a fully independent National Anti-Corruption Commission with power to prosecute any official — including cabinet ministers', approval: 9 },
        { text: 'Digitize 100% of government transactions within 6 months — every payment, every contract, fully public', approval: 7 },
        { text: 'Increase penalties — make corruption a non-bailable offence with mandatory 10-year minimum sentence', approval: 5 },
        { text: '💎 Independent commission + full digitization + whistleblower rewards + real-time public spending dashboard + auto-audit AI system — the most comprehensive anti-corruption system in the world', approval: 14, diamond: true, cost: 6 }
      ]
    }
  ]

};
