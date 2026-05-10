const GAME_DATA = {

  parties: [
    {
      id: 'bje',
      name: 'BJE',
      fullName: 'Bharatiya Jana Ekta',
      popularity: 35,
      color: '#FF6B35',
      ideology: 'Nationalism & Security',
      emoji: '🏛️',
      character: {
        name: 'Commander Vikram Singh',
        title: 'Ex-Army General & Party President',
        avatar: '🪖',
        description: 'A decorated war hero who traded his uniform for politics. Commander Vikram Singh believes in a strong, unified nation above all else. He speaks in commands, thinks in strategy, and sees every political challenge as a battlefield to conquer. Citizens either fear or deeply respect him — there is no middle ground.',
        traits: ['Authoritative', 'Nationalist', 'Iron-Willed'],
        quote: '"A strong nation needs an even stronger leader. I am that leader. No compromise, no surrender."'
      }
    },
    {
      id: 'congrass',
      name: 'Congrass',
      fullName: 'Congrass Democratic Party',
      popularity: 15,
      color: '#4A90D9',
      ideology: 'Welfare & Democracy',
      emoji: '🤝',
      character: {
        name: 'Advocate Priya Mehta',
        title: 'Human Rights Lawyer & Party Chairperson',
        avatar: '👩‍⚖️',
        description: 'A passionate advocate who fought landmark cases for the poor and marginalized. Priya Mehta entered politics because she believed that laws alone cannot change a nation — leaders must. Known for her fierce debates, brilliant speeches, and an unbreakable commitment to democracy. She carries the hopes of millions.',
        traits: ['Compassionate', 'Democratic', 'Fearless'],
        quote: '"Every citizen deserves dignity, healthcare, and a voice. My government will guarantee exactly that."'
      }
    },
    {
      id: 'apa',
      name: 'APA',
      fullName: 'Aam Progressive Alliance',
      popularity: 10,
      color: '#9B59B6',
      ideology: 'Anti-Corruption & Development',
      emoji: '🔍',
      character: {
        name: 'Engineer Arvind Dubey',
        title: 'Tech Entrepreneur & Party Founder',
        avatar: '👨‍💻',
        description: 'A former software engineer who built startups before building a political movement. Arvind Dubey is obsessed with data, transparency, and systems that actually work. He is the opposite of a traditional politician — no drama, just results. Citizens love his no-nonsense style and zero tolerance for corruption.',
        traits: ['Transparent', 'Data-Driven', 'Reform-Minded'],
        quote: '"Corruption is a bug in the system. I am here to fix the code — permanently."'
      }
    },
    {
      id: 'shs',
      name: 'SHS',
      fullName: 'Samaj Haq Sangathan',
      popularity: 5,
      color: '#27AE60',
      ideology: 'Rural Rights & Traditional Values',
      emoji: '🌾',
      character: {
        name: 'Sardar Gulab Khan',
        title: 'Community Elder & Party Supreme Leader',
        avatar: '👳',
        description: 'Born in a small village with no electricity, Gulab Khan spent 40 years fighting for rural rights, clean water, and the dignity of common people. He speaks the language of the farmer, the shepherd, and the laborer. Millions of rural families see him as one of their own — a true son of the soil.',
        traits: ['Community-Focused', 'Traditional', 'Deeply Trusted'],
        quote: '"Our roots are our strength. We protect the land, the people, and our way of life — no matter what."'
      }
    }
  ],

  ministries: [
    {
      id: 'finance',
      name: 'Finance Minister',
      icon: '💰',
      description: 'Manages the national budget, taxation, and economic policy. The backbone of the government.',
      candidates: [
        {
          name: 'Rahul Verma',
          role: 'Young Finance Graduate — IIM Ahmedabad',
          detail: 'Fresh ideas, modern approach, digital-first thinking. Enthusiastic but lacks real-world policy experience.',
          approval: 3
        },
        {
          name: 'Suresh Mehta',
          role: 'Experienced Banker — 15+ Years in Finance',
          detail: 'Trusted by markets and financial institutions. Brings unmatched stability, credibility, and crisis management.',
          approval: 7
        },
        {
          name: 'Dr. Anita Sharma',
          role: 'Former Opposition Finance Minister',
          detail: 'Highly skilled with a national track record. Loyalty may be questioned by party loyalists — but the results would be excellent.',
          approval: 5
        }
      ]
    },
    {
      id: 'education',
      name: 'Education Minister',
      icon: '📚',
      description: 'Oversees schools, universities, and the national curriculum. Shapes the future generation.',
      candidates: [
        {
          name: 'Prof. Deepa Nair',
          role: 'University Professor — 20 Years Academic Career',
          detail: 'Respected academic with deep knowledge of education reform. Strong public approval from intellectuals and teachers.',
          approval: 7
        },
        {
          name: 'Vikram Joshi',
          role: 'Corporate HR Executive — MNC Background',
          detail: 'Wants to modernize education with industry-academia ties. Popular with the business class, skeptical among teachers.',
          approval: 4
        },
        {
          name: 'Salma Sheikh',
          role: 'National Teacher Union Leader',
          detail: 'Hero of the teacher community. Will massively boost teacher morale but may push costly wage demands.',
          approval: 6
        }
      ]
    },
    {
      id: 'pr',
      name: 'PR Minister',
      icon: '📢',
      description: 'Manages government communications, media relations, and the public image of your leadership.',
      candidates: [
        {
          name: 'Riya Kapoor',
          role: 'Celebrity TV Anchor — Prime Time Host',
          detail: 'Glamorous and well-known. Great for public optics but critics question depth and crisis communication skills.',
          approval: 4
        },
        {
          name: 'Arun Bose',
          role: 'Veteran Print Journalist — 25 Years Experience',
          detail: 'Credible, respected, and deeply media-savvy. Will give the government a trusted and powerful public voice.',
          approval: 8
        },
        {
          name: 'Neha Singh',
          role: 'Social Media Influencer — 5 Million Followers',
          detail: 'Connects with youth brilliantly. High digital reach but lacks crisis communication and traditional media experience.',
          approval: 5
        }
      ]
    },
    {
      id: 'secretary',
      name: 'Chief Secretary',
      icon: '🗂️',
      description: 'Coordinates all government departments and ensures your policy decisions are actually executed.',
      candidates: [
        {
          name: 'P.K. Srivastava',
          role: 'Retired IAS Officer — 35 Years Service',
          detail: 'A seasoned bureaucrat with unmatched administrative experience. Trusted across all departments, zero tolerance for delays.',
          approval: 8
        },
        {
          name: 'Ananya Rao',
          role: 'Young Tech Entrepreneur — Startup Founder',
          detail: 'Brings digital transformation and process automation ideas. Inexperienced in government systems but innovatively driven.',
          approval: 5
        },
        {
          name: 'Ram Prasad',
          role: 'Senior Party Loyalist — 20 Years With Party',
          detail: 'Deeply loyal to the party and personally trusted. Limited administrative skill set but ensures political discipline.',
          approval: 3
        }
      ]
    },
    {
      id: 'health',
      name: 'Health Minister',
      icon: '🏥',
      description: 'Leads national health policy, public hospitals, and emergency pandemic response.',
      candidates: [
        {
          name: 'Dr. Rajan Pillai',
          role: 'Senior Surgeon & Hospital Director',
          detail: 'Internationally trained doctor with public health expertise spanning 3 decades. Highly trusted by the general public.',
          approval: 9
        },
        {
          name: 'Sunita Devi',
          role: 'NGO Rural Health Worker — Grassroots Leader',
          detail: 'Champion of grassroots healthcare. Loved by rural voters. Limited experience managing large-scale national systems.',
          approval: 6
        },
        {
          name: 'Ravi Pharma',
          role: 'Pharmaceutical Industry CEO',
          detail: 'Has strong health sector knowledge and connections. However, the obvious conflict of interest raises serious corruption concerns.',
          approval: 2
        }
      ]
    },
    {
      id: 'transport',
      name: 'Transportation Minister',
      icon: '🚇',
      description: 'Manages roads, railways, metro projects, and the massive infrastructure contracts that come with them.',
      candidates: [
        {
          name: 'Col. Rajesh Nath (Retd.)',
          role: 'Retired Army Engineer Colonel',
          detail: 'Led major infrastructure projects for the armed forces. Efficient, disciplined, and has zero tolerance for corruption.',
          approval: 7
        },
        {
          name: 'Meera Thomas',
          role: 'Award-Winning Civil Infrastructure Engineer',
          detail: 'Built three major national bridges on time and on budget. Public deeply trusts her technical expertise and track record.',
          approval: 8
        },
        {
          name: 'Dinesh Contractor',
          role: 'Construction Contractor with Party Connections',
          detail: 'Gets things built fast using his network. But persistent kickback allegations make him a serious political liability.',
          approval: 2
        }
      ]
    },
    {
      id: 'justice',
      name: 'Justice Minister',
      icon: '⚖️',
      description: 'Oversees the judiciary, legal reforms, and law enforcement policy across the nation.',
      candidates: [
        {
          name: 'Justice S.P. Verma (Retd.)',
          role: 'Retired High Court Chief Justice',
          detail: 'Impeccable 40-year judicial career with landmark rulings on human rights. Brings unquestionable credibility to the role.',
          approval: 9
        },
        {
          name: 'Adv. Fatima Shaikh',
          role: 'Senior Human Rights Lawyer',
          detail: 'Fierce defender of civil liberties with a national reputation. Very popular with activists, minorities, and legal circles.',
          approval: 7
        },
        {
          name: 'Sanjay Loyalist',
          role: 'Government-Aligned Senior Advocate',
          detail: 'Known for defending the party in high-profile cases. Widely seen as biased by the opposition, media, and legal community.',
          approval: 3
        }
      ]
    }
  ],

  commonScenarios: [
    {
      id: 'flood',
      title: '🌊 Capital City — Catastrophic Flood',
      story: 'A catastrophic flood has hit the capital city. Over 500,000 citizens are displaced, roads are completely submerged, and hospitals are overwhelmed with casualties. National TV channels are live from rooftops. The world is watching. Every hour of delay costs lives.',
      urgency: 'CRITICAL',
      choices: [
        { text: 'Deploy the Army for immediate relief operations, emergency shelters, and medical camps across all affected zones', approval: 10, outcome: 'The army\'s lightning-fast response saves thousands. Citizens erupt with gratitude. Your approval surges across the nation.' },
        { text: 'Set up a National Relief Fund, coordinate NGO and state government support immediately', approval: 6, outcome: 'The relief fund provides aid, though the slower deployment frustrates some citizens who expected faster boots on the ground.' },
        { text: 'Hold a press conference blaming the previous government for poor drainage infrastructure and city planning failures', approval: -8, outcome: 'Citizens are outraged. People are stranded on rooftops and you\'re playing blame games. Trust collapses overnight.' }
      ]
    },
    {
      id: 'inflation',
      title: '📈 National Inflation Crisis — Food Prices Skyrocket',
      story: 'Food prices have surged 40% in the past month. Middle-class families are skipping meals. Street markets are chaotic. Economists warn of a full recession. The opposition is holding daily press conferences demanding your resignation.',
      urgency: 'HIGH',
      choices: [
        { text: 'Immediately subsidize essential food items, cap prices on all staples, and deploy price-check squads in markets', approval: 8, outcome: 'Citizens breathe a sigh of relief. Markets stabilize within days and public confidence in your government grows significantly.' },
        { text: 'Launch a special government investigation into price gouging by wholesale traders and distributors', approval: 5, outcome: 'Seen as responsible but slow. People want immediate action, not committees. Frustration remains but trust holds.' },
        { text: 'Announce bulk import of food commodities — will take 3 months to arrive and stabilize markets', approval: 2, outcome: 'Economically sound in the long run but citizens are suffering right now. Public frustration and opposition attacks grow louder.' }
      ]
    },
    {
      id: 'education',
      title: '✏️ Education System Collapse — Teacher Strike Goes National',
      story: 'Over 200,000 teachers across the country have gone on an indefinite strike demanding better pay, job security, and improved school facilities. 50 million students cannot attend classes. Parents are furious. Exams are being cancelled.',
      urgency: 'HIGH',
      choices: [
        { text: 'Accept all teacher demands immediately and announce a salary revision package — end the strike today', approval: 9, outcome: 'Teachers flood back to classrooms. Parents cheer. Seen as a compassionate, decisive leader who actually listens.' },
        { text: 'Form an expert committee to review all demands and deliver recommendations within 60 days', approval: 4, outcome: 'Partially satisfies some teachers but the strike continues partially. Critics call it a delay tactic.' },
        { text: 'Issue legal notices to striking teachers under the Essential Services Maintenance Act', approval: -6, outcome: 'Teachers escalate. Public sympathy completely shifts against the government. Media calls it "war on teachers."' }
      ]
    },
    {
      id: 'pandemic',
      title: '🦠 Pandemic Outbreak — Virus Spreading in Major Cities',
      story: 'A dangerous new virus has spread rapidly to 12 major cities. Hospitals are filling up fast. Global health organizations are alarmed. Citizens are panicking. Pharmacies have run out of medicine. Your health response will define your political legacy.',
      urgency: 'CRITICAL',
      choices: [
        { text: 'Declare a national health emergency — free treatment for all citizens, strict containment zones, immediate vaccine procurement', approval: 10, outcome: 'Citizens feel protected and cared for. Cases drop dramatically. International community praises your bold leadership.' },
        { text: 'Implement partial city restrictions and launch a national public awareness and testing campaign', approval: 6, outcome: 'Balanced approach. Reduces public panic but some critics say stronger containment was needed weeks earlier.' },
        { text: 'Claim that numbers are exaggerated by opposition media — delay response to avoid economic disruption', approval: -9, outcome: 'Disaster. Virus spreads completely uncontrolled. Citizens feel abandoned. Medical system collapses. International embarrassment.' }
      ]
    },
    {
      id: 'corruption',
      title: '💸 Metro Project Corruption — ₹5,000 Crore Scandal Exposed',
      story: 'A sting operation by an independent news agency reveals that ₹5,000 crore has been siphoned from the national metro infrastructure project. A minister in your own cabinet is directly implicated. Leaked documents are everywhere. Parliament is in uproar.',
      urgency: 'CRITICAL',
      choices: [
        { text: 'Dismiss the minister within the hour, freeze all accounts immediately, hand case to CBI with zero political interference', approval: 10, outcome: 'Decisive anti-corruption action. Citizens see you as genuinely different from corrupt politicians. Approval skyrockets.' },
        { text: 'Suspend the minister pending an internal party inquiry — results in 7 days', approval: 5, outcome: 'Partially appreciated but "why 7 days?" becomes the dominant opposition attack line. Seen as protecting one of your own.' },
        { text: 'Defend the minister publicly and call the sting a "political conspiracy" orchestrated by the opposition', approval: -8, outcome: 'Public outrage is instant and massive. Citizens believe you are actively shielding corruption. Governance trust collapses.' }
      ]
    },
    {
      id: 'protest',
      title: '✊ Nationwide Opposition Protest — 2 Million on Streets',
      story: 'The opposition has organized a massive nationwide protest with over 2 million people on the streets demanding early elections and complete policy reversals. Major highways are blocked. International media is broadcasting it live. The country is watching.',
      urgency: 'MODERATE',
      choices: [
        { text: 'Publicly invite all opposition leaders for a televised national dialogue — open, transparent, broadcast live', approval: 8, outcome: 'Seen as a democratic and confident leader who is not afraid of debate. Public respects the open-handed approach.' },
        { text: 'Allow peaceful protests while officially offering a structured government feedback session with citizen representatives', approval: 5, outcome: 'Balanced and respectful of democratic rights. Protests continue but the situation does not escalate further.' },
        { text: 'Deploy heavy police force to disperse all protest gatherings immediately across the country', approval: -7, outcome: 'Violent clashes televised live. International condemnation. Citizens and media brand your government authoritarian.' }
      ]
    },
    {
      id: 'justice',
      title: '⚖️ Judge Bribery Scandal — Audio Evidence Goes Viral',
      story: 'A leaked audio recording of a sitting High Court judge negotiating a ₹2 crore bribe to deliver a verdict in a corporate case has gone viral — 50 million views overnight. Citizens are outraged. The integrity of the entire justice system is under national question.',
      urgency: 'HIGH',
      choices: [
        { text: 'Demand immediate Supreme Court inquiry, order a full judicial audit, and publicly commit to zero tolerance in the judiciary', approval: 9, outcome: 'Citizens applaud your decisive commitment to rule of law. Judicial credibility begins a slow but clear path to restoration.' },
        { text: 'Transfer the judge immediately to a non-judicial administrative role pending independent legal review', approval: 5, outcome: 'Seen as cautious but fair. The legal community approves the measured constitutional approach.' },
        { text: 'Publicly dismiss the leak as fabricated opposition propaganda designed to destabilize the judiciary', approval: -8, outcome: 'Massive national backlash. Citizens and legal experts believe you are actively shielding corruption in the courts.' }
      ]
    }
  ],

  partyScenarios: {
    bje: [
      {
        id: 'border',
        title: '🪖 Border Crisis — Neighboring Country Provocation',
        story: 'A neighboring country has violated the border 12 times this month and is conducting large military exercises near the Line of Control. Citizens and army veterans are demanding a strong national response. The army awaits your orders. The world is watching.',
        urgency: 'CRITICAL',
        choices: [
          { text: 'Deploy additional military divisions to the border immediately and issue a firm diplomatic ultimatum to the neighboring government', approval: 9, outcome: 'The nation applauds your strength. The neighbor pulls back within 48 hours. Nationalist support surges massively.' },
          { text: 'Engage in back-channel diplomatic negotiations while visibly increasing military readiness on the border', approval: 6, outcome: 'International community appreciates the restrained diplomacy. Some citizens at home want a stronger visible response.' },
          { text: 'Dismiss it as media sensationalism and take no significant military or diplomatic action', approval: -6, outcome: 'Citizens feel the government is weak and unprepared. Opposition uses this relentlessly. "Coward government" trends nationally.' }
        ]
      },
      {
        id: 'riots',
        title: '🔥 Religious Festival — Communal Riots Break Out',
        story: 'Violent clashes have broken out between two communities during a major national religious festival. 3 people are dead, 50 injured, and social media is rapidly inflaming tensions. Major cities are under curfew. The army is on standby.',
        urgency: 'CRITICAL',
        choices: [
          { text: 'Deploy peacekeeping forces immediately with strict neutral orders — arrest all instigators from any community', approval: 9, outcome: 'Violence is fully controlled within 48 hours. All communities credit the government\'s firm and completely neutral approach.' },
          { text: 'Publicly blame the minority community and call for strict one-sided action against them only', approval: -7, outcome: 'International condemnation pours in. Minority communities completely lose trust. Nation is further divided and inflamed.' },
          { text: 'Temporarily suspend the festival and impose a strict city-wide curfew for 2 weeks', approval: 4, outcome: 'Violence stops but religious groups are furious about the festival suspension. Mixed public reaction follows.' }
        ]
      },
      {
        id: 'military',
        title: '🛡️ Military Budget Debate — Parliament Showdown',
        story: 'Parliament is locked in a heated budget debate. Defense experts demand a 25% increase in military spending citing serious regional threats. The finance ministry warns this would force cuts to social welfare programs. You must decide today.',
        urgency: 'MODERATE',
        choices: [
          { text: 'Approve the full 25% military budget increase — national security is non-negotiable above all else', approval: 8, outcome: 'Military morale surges to an all-time high. Nationalist citizens strongly approve. Social sector advocates raise concerns.' },
          { text: 'Approve a 10% budget increase while fully protecting all core welfare programs from any cuts', approval: 6, outcome: 'Both sides are partially satisfied with the balanced approach. Seen as pragmatic leadership.' },
          { text: 'Reject the increase and redirect defense funds toward welfare — the military is already strong enough', approval: -5, outcome: 'Military leadership publicly expresses displeasure. Core nationalist voters feel deeply betrayed by their own party.' }
        ]
      },
      {
        id: 'media',
        title: '📺 Anti-National Media Controversy',
        story: 'A major national news channel is continuously broadcasting reports questioning army operations and calling border policies catastrophic failures. Party workers are demanding the channel be immediately shut down. Civil society is split down the middle.',
        urgency: 'MODERATE',
        choices: [
          { text: 'Launch a formal court-based legal investigation — let the independent judicial system decide on the matter', approval: 7, outcome: 'The democratic approach earns appreciation from intellectuals and moderates. Due legal process begins credibly.' },
          { text: 'Immediately revoke the channel\'s broadcasting license using emergency executive powers', approval: 3, outcome: 'The nationalist base is satisfied. But international press freedom organizations immediately condemn the move loudly.' },
          { text: 'Take no action — freedom of the press must be protected even when the coverage is unfair', approval: -4, outcome: 'Core party supporters feel completely let down. The channel continues its campaign against your government unchecked.' }
        ]
      }
    ],

    congrass: [
      {
        id: 'farmers',
        title: '🌾 Farmer Loan Waiver Crisis — March on Capital',
        story: 'Hundreds of thousands of debt-crushed farmers have marched to the capital. Suicides in farm belts are increasing weekly. Their single demand: complete loan waivers now. The nation\'s conscience is bleeding. All cameras are on you.',
        urgency: 'CRITICAL',
        choices: [
          { text: 'Announce complete and unconditional loan waiver for all farmers immediately — no conditions, no delays', approval: 10, outcome: 'Farmers celebrate in the streets. Rural India erupts in joy. Seen as the most powerful welfare decision in a generation.' },
          { text: 'Offer 50% waiver for all small farmers with structured installment plans for larger agricultural loans', approval: 6, outcome: 'Partially satisfying for many. Still leaves thousands struggling. Seen as "almost there but not quite."' },
          { text: 'Reject all loan waivers and propose expanded crop insurance as the sustainable long-term solution', approval: -7, outcome: 'Farmers are devastated. Farm suicides continue. "Welfare party abandoned farmers" becomes the national headline.' }
        ]
      },
      {
        id: 'minority',
        title: '🕊️ Minority Discrimination — A National Crisis',
        story: 'A series of documented incidents — employment denials, housing discrimination, and three mob attacks on minorities — have been widely covered. Human rights organizations are demanding immediate government action. The United Nations has sent a formal letter.',
        urgency: 'HIGH',
        choices: [
          { text: 'Pass a comprehensive Anti-Discrimination Act with strict penalties and fast-track courts to handle all cases', approval: 9, outcome: 'Minority communities regain trust in the government. India wins international praise for upholding constitutional rights.' },
          { text: 'Establish a National Reconciliation Committee with community dialogue programs across affected states', approval: 5, outcome: 'Peaceful and consultative approach. But critics and affected communities want stronger immediate legal protection.' },
          { text: 'Deny any systemic discrimination and blame the opposition for "sensationalizing isolated incidents"', approval: -8, outcome: 'Devastating backlash from minorities, activists, and international community. The party\'s core identity is questioned.' }
        ]
      },
      {
        id: 'healthcare',
        title: '🏥 Universal Healthcare — The Promise Must Be Kept',
        story: 'A national people\'s movement is demanding free healthcare for every citizen. The rich use private hospitals while millions die unable to pay basic medical bills. This was your central election promise. Citizens are now testing if you meant it.',
        urgency: 'HIGH',
        choices: [
          { text: 'Launch a Universal Health Guarantee — free quality treatment in all government hospitals, no questions asked', approval: 10, outcome: 'A historic moment. Millions of poor families cheer across the country. International health organizations applaud loudly.' },
          { text: 'Massively expand existing health schemes to cover 80% of the population with heavy subsidies for the rest', approval: 7, outcome: 'Major and recognized progress. Not the full promise, but a significant and credible step forward that people appreciate.' },
          { text: 'Declare it fiscally unviable and propose a public-private partnership model as the alternative', approval: -6, outcome: 'Citizens feel betrayed. "The welfare party broke its biggest promise" becomes an election-defining attack forever.' }
        ]
      },
      {
        id: 'press',
        title: '📰 Press Freedom Under Attack',
        story: 'Multiple investigative journalists have been arrested under colonial-era sedition laws. A major newspaper\'s printing presses were raided last night. International press freedom indices now rank the country in the bottom 20. The world is alarmed.',
        urgency: 'HIGH',
        choices: [
          { text: 'Release all arrested journalists immediately, repeal the sedition law, and constitutionally guarantee press freedom', approval: 9, outcome: 'Democracy is celebrated across the country. Press freedom index improves dramatically. India earns massive global respect.' },
          { text: 'Release the journalists but maintain the existing sedition law with stricter judicial oversight guidelines', approval: 5, outcome: 'Journalists are freed but feel insecure about future. International concern about legal framework remains.' },
          { text: 'Accuse the detained journalists of spreading dangerous misinformation and announce further crackdowns', approval: -7, outcome: 'International outrage explodes. India is listed among the worst nations for press freedom. Democratic values shattered.' }
        ]
      }
    ],

    apa: [
      {
        id: 'sting',
        title: '🎥 Cabinet Minister Caught on Camera — Live Sting',
        story: 'A hidden camera sting has caught your own cabinet minister accepting a ₹50 lakh bribe live on video. The unedited footage has been played on every news channel across the country. Millions of citizens who voted for APA specifically because of anti-corruption promises are watching your response.',
        urgency: 'CRITICAL',
        choices: [
          { text: 'Dismiss the minister within the hour, freeze all assets, and hand the case to the CBI with zero political interference', approval: 11, outcome: 'Citizens erupt in approval. This is exactly why they voted APA. Zero tolerance is completely vindicated in their eyes.' },
          { text: 'Suspend the minister immediately pending a thorough internal party inquiry to be completed within 7 days', approval: 5, outcome: 'Appreciated as a step but "why 7 days?" becomes the dominant attack line. Seen as softness on a clear-cut case.' },
          { text: 'Hold a press conference claiming the sting was orchestrated and stand fully behind the accused minister', approval: -10, outcome: 'Catastrophic collapse. The one thing APA was built on was anti-corruption. Defending this destroys everything built.' }
        ]
      },
      {
        id: 'unemployment',
        title: '👨‍💼 Youth Unemployment — #NoJobsNoVote Explodes',
        story: 'Millions of educated young graduates are unemployed. The viral movement #NoJobsNoVote is trending at number one nationally for three weeks. Massive protests are blocking city centers in 20 cities. The government application ratio is now 500 applicants for every 1 post.',
        urgency: 'HIGH',
        choices: [
          { text: 'Launch a National Job Creation Mission — 2 million new tech, infrastructure, and public sector jobs within 2 years', approval: 9, outcome: 'Youth erupt with hope across the country. Seen as a government that genuinely understands and acts on their pain.' },
          { text: 'Open skill development centers in every district with mandatory industry placement tie-ups for all graduates', approval: 7, outcome: 'Practical, structured, and believable. Youth appreciate the organized plan even if it\'s not immediate.' },
          { text: 'Issue statements blaming the previous government for decades of mismanagement as the root cause of unemployment', approval: -6, outcome: 'Citizens are completely tired of blame. "You\'ve been in power two years" becomes the response that destroys the deflection.' }
        ]
      },
      {
        id: 'investment',
        title: '🌐 Smart City Foreign Investment Decision',
        story: 'A major international tech consortium wants to invest ₹80,000 crore to build 5 fully integrated smart cities. The opposition is calling it "selling the country." Citizens are divided sharply — development and jobs vs. national sovereignty and data privacy.',
        urgency: 'MODERATE',
        choices: [
          { text: 'Accept the investment with full transparency, public contracts published online, and a citizen oversight board', approval: 9, outcome: 'Seen as smart, transparent, and confident governance. Development begins fast. Economic confidence surges nationally.' },
          { text: 'Negotiate strongly for better terms — 60% mandatory local employment, full tech transfer, and data sovereignty clause', approval: 7, outcome: 'Praised widely for protecting the national interest while still enabling transformative development. Balanced win.' },
          { text: 'Reject all foreign investment entirely on grounds of protecting national sovereignty and digital security', approval: -4, outcome: 'Development sector deeply frustrated. International investor confidence collapses. Economic growth projections fall sharply.' }
        ]
      },
      {
        id: 'electricity',
        title: '⚡ Free Electricity Promise — D-Day Arrives',
        story: 'APA promised 200 units of free electricity to every household. The Power Ministry has now confirmed the treasury cannot sustain it at current reserves. The opposition is running countdown clocks on TV. Citizens who voted on this promise are waiting.',
        urgency: 'HIGH',
        choices: [
          { text: 'Deliver the full 200 free units immediately — cut all non-essential government expenses to fully fund it', approval: 10, outcome: 'Promise kept. Citizens trust APA completely. "APA delivers" becomes the dominant narrative across the country.' },
          { text: 'Phase the rollout over 18 months, starting immediately with the poorest 40% of households first', approval: 6, outcome: 'Most understand the practical phased approach. Some disappointment at the delay but goodwill largely remains intact.' },
          { text: 'Quietly withdraw the promise citing "economic realities discovered only after taking office"', approval: -9, outcome: 'Promise broken. Trust collapses completely. "They lied just like all the others" becomes impossible to recover from.' }
        ]
      }
    ],

    shs: [
      {
        id: 'religiouslaw',
        title: '🕌 Religious Law Demand — National Controversy Erupts',
        story: 'Senior religious leaders closely affiliated with your party are publicly demanding religion-based community laws be enacted within 90 days. Urban citizens and constitutional experts are alarmed. Your rural base is loudly demanding compliance. Every TV channel is covering it.',
        urgency: 'HIGH',
        choices: [
          { text: 'Form a Constitutional Religious Advisory Council to carefully review all demands — no immediate legislation will be enacted', approval: 7, outcome: 'Seen as respecting religious sentiment while maintaining constitutional balance. Both sides are partially satisfied.' },
          { text: 'Firmly and publicly reject all religious law demands — the constitution guarantees equality for every citizen', approval: 5, outcome: 'Urban India and constitutional experts applaud. Some traditional religious supporters express disappointment but respect the principle.' },
          { text: 'Fully implement all demanded religious community laws to completely honor the traditional party base', approval: -6, outcome: 'Constitutional crisis declared by experts. Minorities panic. International alarm. Secular citizens call for your resignation.' }
        ]
      },
      {
        id: 'womenedu',
        title: '👩‍🎓 Girls\' Schools Shut Down — Rural Controversy',
        story: 'Conservative elder councils in 3 major rural districts have forcibly shut down all girls\' schools claiming education for women violates "traditional community values." 80,000 girls are locked out of school. National media is covering this daily. The world is watching.',
        urgency: 'CRITICAL',
        choices: [
          { text: 'Take an immediate and firm public stand — every girl will attend school, law enforcement deployed to reopen all schools today', approval: 10, outcome: 'A defining hero moment nationally. All schools reopen. Even conservative rural citizens respect the courageous clear decision.' },
          { text: 'Send women community leaders to engage in dialogue with elders to resolve the issue peacefully and locally', approval: 5, outcome: 'Peaceful approach appreciated by some. But 40,000 girls remain out of school for weeks. Seen as too cautious.' },
          { text: 'Publicly state that local cultural traditions must be respected and the government will not interfere', approval: -9, outcome: 'National and international outrage. UN formally condemns. Activists demand resignation. Rights groups march on the capital.' }
        ]
      },
      {
        id: 'donation',
        title: '🕌 Mosque Donation Scandal — Documents Leaked',
        story: 'Financial documents leaked to the press show ₹30 crore in religious donations to mosques linked directly to the party were secretly redirected to fund political campaigns. The religious community feels deeply betrayed. Corruption watchdogs are demanding full accountability.',
        urgency: 'HIGH',
        choices: [
          { text: 'Order a full independent financial audit immediately, publicly suspend all involved officials, and return every rupee', approval: 9, outcome: 'Religious community trust is restored. Citizens see genuine accountability. The scandal is neutralized by decisive action.' },
          { text: 'Suspend the accused officials and publicly promise a thorough government investigation within 30 days', approval: 5, outcome: 'Partially effective. The religious community watches cautiously and awaits the investigation results with guarded hope.' },
          { text: 'Publicly defend all expenditure as legitimate "community development" and protect all officials involved', approval: -7, outcome: 'Religious communities feel utterly betrayed. Citizens see pure hypocrisy from a party built on community trust.' }
        ]
      },
      {
        id: 'water',
        title: '💧 Rural Water Crisis — 3,000 Villages Running Completely Dry',
        story: 'A severe drought has left 3,000 of your core rural villages with zero water supply for 3 straight weeks. Women are walking 10 kilometers daily to fetch water. Children are sick from dehydration. These are your most loyal voters and they are suffering right now.',
        urgency: 'CRITICAL',
        choices: [
          { text: 'Deploy emergency water tankers to every village today — and simultaneously announce a permanent rural pipeline construction project', approval: 11, outcome: 'Villages erupt with gratitude. Rural citizens say "SHS is truly ours." The core vote bank is solidified beyond question.' },
          { text: 'Launch an immediate large-scale Rainwater Harvesting and Borewell Mission as the sustainable long-term solution', approval: 6, outcome: 'Long-term thinking is appreciated. But immediate suffering continues and some rural frustration at the delay grows.' },
          { text: 'Hold a press conference blaming the state government for failing to maintain water infrastructure over decades', approval: -6, outcome: 'Your own core voters are furious. "We voted for you and you blame others while our children have no water" becomes viral.' }
        ]
      }
    ]
  }

};
