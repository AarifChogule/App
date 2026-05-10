// Custom SVG character portraits for each party leader
const CHARACTERS = {

  // BJE — Strong Old Man, white hair & beard, military bearing
  bje: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260">
    <defs>
      <radialGradient id="bjeBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FF6B3518"/>
        <stop offset="100%" stop-color="#00000000"/>
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="130" rx="95" ry="120" fill="url(#bjeBg)"/>

    <!-- Military jacket -->
    <rect x="18" y="158" width="164" height="102" fill="#1E3A1E" rx="8"/>
    <!-- Jacket inner V -->
    <polygon points="100,158 70,172 76,260 100,238 124,260 130,172" fill="#152B15"/>
    <!-- White shirt in collar -->
    <polygon points="100,158 82,168 100,180 118,168" fill="#F2F2F2"/>
    <!-- Epaulettes -->
    <rect x="16" y="156" width="32" height="16" fill="#2C502C" rx="4"/>
    <rect x="152" y="156" width="32" height="16" fill="#2C502C" rx="4"/>
    <rect x="16" y="156" width="32" height="5" fill="#C8A820" rx="2"/>
    <rect x="152" y="156" width="32" height="5" fill="#C8A820" rx="2"/>
    <!-- Medals -->
    <rect x="30" y="178" width="18" height="11" fill="#FFD700" rx="2"/>
    <rect x="52" y="178" width="18" height="11" fill="#CC2200" rx="2"/>
    <rect x="74" y="178" width="18" height="11" fill="#BBBBBB" rx="2"/>
    <!-- Jacket buttons -->
    <circle cx="100" cy="200" r="5" fill="#C8A820"/>
    <circle cx="100" cy="220" r="5" fill="#C8A820"/>
    <circle cx="100" cy="240" r="5" fill="#C8A820"/>

    <!-- Neck -->
    <rect x="78" y="138" width="44" height="24" fill="#C07248"/>

    <!-- White hair sides & back (drawn before head) -->
    <ellipse cx="44" cy="82" rx="22" ry="34" fill="#E4E4E4"/>
    <ellipse cx="156" cy="82" rx="22" ry="34" fill="#E4E4E4"/>
    <ellipse cx="100" cy="50" rx="54" ry="20" fill="#DCDCDC"/>

    <!-- HEAD -->
    <ellipse cx="100" cy="92" rx="50" ry="54" fill="#C47248"/>

    <!-- White hair on top -->
    <ellipse cx="100" cy="46" rx="46" ry="18" fill="#D8D8D8"/>
    <path d="M58,52 Q100,34 142,52 Q120,44 100,42 Q80,44 58,52" fill="#CCCCCC"/>
    <!-- Hair lines -->
    <path d="M62,50 Q100,38 138,50" stroke="#C0C0C0" stroke-width="2" fill="none"/>
    <path d="M58,58 Q100,44 142,58" stroke="#C0C0C0" stroke-width="1.5" fill="none"/>

    <!-- Ears -->
    <ellipse cx="50" cy="94" rx="10" ry="14" fill="#A86038"/>
    <ellipse cx="150" cy="94" rx="10" ry="14" fill="#A86038"/>
    <ellipse cx="50" cy="94" rx="6" ry="10" fill="#985028"/>
    <ellipse cx="150" cy="94" rx="6" ry="10" fill="#985028"/>

    <!-- Forehead wrinkles -->
    <path d="M64,70 Q100,64 136,70" stroke="#9A5228" stroke-width="1.5" fill="none" opacity="0.55"/>
    <path d="M68,63 Q100,58 132,63" stroke="#9A5228" stroke-width="1" fill="none" opacity="0.4"/>

    <!-- Bushy white eyebrows angled inward (stern) -->
    <path d="M58,78 Q74,67 88,74" stroke="#DCDCDC" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M112,74 Q126,67 142,78" stroke="#DCDCDC" stroke-width="9" stroke-linecap="round" fill="none"/>
    <!-- Brow furrow -->
    <path d="M92,72 Q100,66 108,72" stroke="#8A4820" stroke-width="2.5" fill="none"/>

    <!-- Eyes — stern, narrow, powerful -->
    <ellipse cx="76" cy="87" rx="12" ry="9" fill="#1E0E06"/>
    <ellipse cx="124" cy="87" rx="12" ry="9" fill="#1E0E06"/>
    <ellipse cx="76" cy="87" rx="10" ry="7" fill="#EDE6D8"/>
    <ellipse cx="124" cy="87" rx="10" ry="7" fill="#EDE6D8"/>
    <circle cx="76" cy="88" r="5.5" fill="#120804"/>
    <circle cx="124" cy="88" r="5.5" fill="#120804"/>
    <circle cx="78" cy="85" r="2" fill="white" opacity="0.75"/>
    <circle cx="126" cy="85" r="2" fill="white" opacity="0.75"/>
    <!-- Heavy eyelid -->
    <path d="M64,83 Q76,78 88,83" stroke="#7A3818" stroke-width="3" fill="none"/>
    <path d="M112,83 Q124,78 136,83" stroke="#7A3818" stroke-width="3" fill="none"/>
    <!-- Stern lower lid line -->
    <path d="M66,92 Q76,95 86,92" stroke="#9A5228" stroke-width="1.5" fill="none"/>
    <path d="M114,92 Q124,95 134,92" stroke="#9A5228" stroke-width="1.5" fill="none"/>

    <!-- Nose — broad, strong -->
    <path d="M96,100 Q90,112 86,116 Q100,122 114,116 Q110,112 104,100" fill="#AA6038"/>
    <ellipse cx="88" cy="115" rx="8" ry="5.5" fill="#985028"/>
    <ellipse cx="112" cy="115" rx="8" ry="5.5" fill="#985028"/>
    <ellipse cx="88" cy="116" rx="3.5" ry="2.5" fill="#6A2E10"/>
    <ellipse cx="112" cy="116" rx="3.5" ry="2.5" fill="#6A2E10"/>

    <!-- FULL WHITE BEARD -->
    <ellipse cx="60" cy="118" rx="26" ry="30" fill="#E2E2E2"/>
    <ellipse cx="140" cy="118" rx="26" ry="30" fill="#E2E2E2"/>
    <ellipse cx="100" cy="136" rx="36" ry="26" fill="#D8D8D8"/>
    <path d="M64,130 Q80,158 100,164 Q120,158 136,130 Q120,150 100,155 Q80,150 64,130" fill="#D0D0D0"/>
    <!-- Thick white mustache -->
    <path d="M74,122 Q87,114 100,116 Q113,114 126,122" stroke="#DCDCDC" stroke-width="10" stroke-linecap="round" fill="none"/>
    <!-- Beard texture -->
    <path d="M78,124 Q74,140 72,152" stroke="#C8C8C8" stroke-width="1.5" fill="none"/>
    <path d="M100,118 L100,156" stroke="#C8C8C8" stroke-width="1.5" fill="none"/>
    <path d="M122,124 Q126,140 128,152" stroke="#C8C8C8" stroke-width="1.5" fill="none"/>
    <path d="M88,120 Q84,138 82,150" stroke="#C4C4C4" stroke-width="1" fill="none"/>
    <path d="M112,120 Q116,138 118,150" stroke="#C4C4C4" stroke-width="1" fill="none"/>
  </svg>`,

  // Congrass — Young nerdy guy, glasses, messy hair, eager
  congrass: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260">
    <defs>
      <radialGradient id="congBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4A90D918"/>
        <stop offset="100%" stop-color="#00000000"/>
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="130" rx="95" ry="120" fill="url(#congBg)"/>

    <!-- Body: Blue collared shirt -->
    <rect x="28" y="162" width="144" height="98" fill="#2255AA" rx="8"/>
    <!-- Collar -->
    <polygon points="100,162 76,174 82,260 100,242 118,260 124,174" fill="#1A4490"/>
    <!-- White shirt / inner collar -->
    <polygon points="100,162 84,172 100,184 116,172" fill="#F5F5F5"/>
    <!-- Shirt pocket -->
    <rect x="38" y="178" width="28" height="22" fill="#1A4490" rx="3"/>
    <!-- Pens in pocket -->
    <rect x="44" y="172" width="4" height="14" fill="#FF4444" rx="2"/>
    <rect x="50" y="172" width="4" height="14" fill="#222222" rx="2"/>
    <rect x="56" y="172" width="4" height="14" fill="#44AA44" rx="2"/>
    <!-- Shirt buttons -->
    <circle cx="100" cy="204" r="4" fill="#1A4490"/>
    <circle cx="100" cy="222" r="4" fill="#1A4490"/>
    <circle cx="100" cy="240" r="4" fill="#1A4490"/>

    <!-- Neck -->
    <rect x="82" y="145" width="36" height="20" fill="#F0C88A"/>

    <!-- HEAD -->
    <ellipse cx="100" cy="98" rx="46" ry="50" fill="#F2CB8E"/>

    <!-- Ears -->
    <ellipse cx="54" cy="100" rx="9" ry="12" fill="#E0B87A"/>
    <ellipse cx="146" cy="100" rx="9" ry="12" fill="#E0B87A"/>
    <ellipse cx="54" cy="100" rx="6" ry="8" fill="#D0A868"/>
    <ellipse cx="146" cy="100" rx="6" ry="8" fill="#D0A868"/>

    <!-- MESSY dark hair — spiky, disheveled, nerdy -->
    <!-- Base hair -->
    <ellipse cx="100" cy="60" rx="48" ry="24" fill="#1A0E06"/>
    <!-- Spiky bits pointing up and sideways -->
    <polygon points="78,44 72,22 84,42" fill="#1A0E06"/>
    <polygon points="92,40 88,16 98,38" fill="#201208"/>
    <polygon points="106,38 100,14 112,36" fill="#1A0E06"/>
    <polygon points="118,42 116,20 126,40" fill="#1A0E06"/>
    <polygon points="132,48 134,28 140,46" fill="#201208"/>
    <!-- Side hair tufts -->
    <ellipse cx="52" cy="74" rx="12" ry="18" fill="#1A0E06"/>
    <ellipse cx="148" cy="74" rx="12" ry="18" fill="#1A0E06"/>
    <!-- Front hair tuft drooping down -->
    <path d="M82,52 Q86,64 90,62 Q88,58 96,56 Q102,54 108,56 Q106,62 110,64 Q116,60 120,52" fill="#201208"/>
    <!-- One random tuft sticking up more -->
    <polygon points="104,42 100,20 114,40" fill="#221408"/>

    <!-- Eyebrows — slightly raised, curious -->
    <path d="M62,80 Q76,74 86,78" stroke="#1A0E06" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M114,78 Q124,74 138,80" stroke="#1A0E06" stroke-width="5" stroke-linecap="round" fill="none"/>

    <!-- ROUND THICK GLASSES -->
    <!-- Frame left -->
    <circle cx="76" cy="93" r="17" fill="none" stroke="#222222" stroke-width="4"/>
    <!-- Frame right -->
    <circle cx="124" cy="93" r="17" fill="none" stroke="#222222" stroke-width="4"/>
    <!-- Bridge -->
    <line x1="93" y1="93" x2="107" y2="93" stroke="#222222" stroke-width="4"/>
    <!-- Temple arms -->
    <line x1="58" y1="90" x2="46" y2="86" stroke="#222222" stroke-width="3.5"/>
    <line x1="141" y1="90" x2="153" y2="86" stroke="#222222" stroke-width="3.5"/>
    <!-- Glass lens tint -->
    <circle cx="76" cy="93" r="14" fill="#AACCFF" opacity="0.18"/>
    <circle cx="124" cy="93" r="14" fill="#AACCFF" opacity="0.18"/>
    <!-- Lens glare -->
    <path d="M66,84 Q70,80 76,82" stroke="white" stroke-width="2.5" fill="none" opacity="0.6"/>
    <path d="M114,84 Q118,80 124,82" stroke="white" stroke-width="2.5" fill="none" opacity="0.6"/>

    <!-- Eyes behind glasses — wide, eager -->
    <circle cx="76" cy="93" r="7" fill="#3A2010"/>
    <circle cx="124" cy="93" r="7" fill="#3A2010"/>
    <circle cx="76" cy="93" r="5" fill="#1A0E06"/>
    <circle cx="124" cy="93" r="5" fill="#1A0E06"/>
    <circle cx="78" cy="90" r="2.2" fill="white" opacity="0.8"/>
    <circle cx="126" cy="90" r="2.2" fill="white" opacity="0.8"/>

    <!-- Nose — slim, small, nerdy -->
    <path d="M98,102 Q94,110 92,114 Q100,118 108,114 Q106,110 102,102" fill="#D8A870"/>
    <ellipse cx="93" cy="112" rx="5" ry="3.5" fill="#C89860"/>
    <ellipse cx="107" cy="112" rx="5" ry="3.5" fill="#C89860"/>

    <!-- Mouth — open enthusiastic grin -->
    <path d="M78,124 Q100,136 122,124" fill="#CC6644"/>
    <path d="M78,124 Q100,136 122,124 Q110,130 100,132 Q90,130 78,124" fill="#BB4433"/>
    <!-- Teeth showing -->
    <rect x="85" y="124" width="30" height="8" fill="#F5F5F0" rx="3"/>
    <!-- Smile lines / dimples -->
    <path d="M74,120 Q72,126 74,130" stroke="#D0A870" stroke-width="2" fill="none"/>
    <path d="M126,120 Q128,126 126,130" stroke="#D0A870" stroke-width="2" fill="none"/>

    <!-- Cheek flush (excited) -->
    <ellipse cx="68" cy="112" rx="10" ry="6" fill="#FFB0A0" opacity="0.4"/>
    <ellipse cx="132" cy="112" rx="10" ry="6" fill="#FFB0A0" opacity="0.4"/>
  </svg>`,

  // APA — Historical background, Gandhi-style, dignified
  apa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260">
    <defs>
      <radialGradient id="apaBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#9B59B618"/>
        <stop offset="100%" stop-color="#00000000"/>
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="130" rx="95" ry="120" fill="url(#apaBg)"/>

    <!-- Body: White Nehru/Khadi jacket -->
    <rect x="22" y="158" width="156" height="102" fill="#F2F0E8" rx="8"/>
    <!-- Nehru collar (standing collar) -->
    <rect x="82" y="152" width="36" height="26" fill="#E8E6DE" rx="4"/>
    <!-- Center button line -->
    <line x1="100" y1="178" x2="100" y2="260" stroke="#DDDBD0" stroke-width="2.5"/>
    <!-- Buttons - small, simple -->
    <circle cx="100" cy="186" r="4" fill="#D8D6CE"/>
    <circle cx="100" cy="202" r="4" fill="#D8D6CE"/>
    <circle cx="100" cy="218" r="4" fill="#D8D6CE"/>
    <circle cx="100" cy="234" r="4" fill="#D8D6CE"/>
    <!-- Breast pocket -->
    <rect x="118" y="174" width="26" height="18" fill="#E8E6DE" rx="2"/>
    <!-- Pen in pocket -->
    <rect x="127" y="168" width="4" height="14" fill="#222222" rx="2"/>
    <!-- Khadi texture lines subtle -->
    <path d="M22,175 Q100,172 178,175" stroke="#E0DED6" stroke-width="1" fill="none"/>
    <path d="M22,195 Q100,192 178,195" stroke="#E0DED6" stroke-width="1" fill="none"/>

    <!-- Neck -->
    <rect x="82" y="140" width="36" height="22" fill="#B87848"/>

    <!-- HEAD -->
    <ellipse cx="100" cy="96" rx="46" ry="50" fill="#BC7C4C"/>

    <!-- Ears -->
    <ellipse cx="54" cy="98" rx="9" ry="13" fill="#A86C3C"/>
    <ellipse cx="146" cy="98" rx="9" ry="13" fill="#A86C3C"/>
    <ellipse cx="54" cy="98" rx="6" ry="9" fill="#985C2C"/>
    <ellipse cx="146" cy="98" rx="6" ry="9" fill="#985C2C"/>

    <!-- GANDHI TOPI — white cap (historical) -->
    <!-- Cap base band -->
    <rect x="50" y="56" width="100" height="16" fill="#ECECEC" rx="4"/>
    <!-- Cap top (slightly pointed/boat shape) -->
    <ellipse cx="100" cy="56" rx="50" ry="14" fill="#F2F0E8"/>
    <path d="M50,56 Q100,30 150,56" fill="#EEECEA"/>
    <!-- Cap highlight -->
    <path d="M60,52 Q100,36 140,52" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.6"/>
    <!-- Cap band detail -->
    <line x1="50" y1="66" x2="150" y2="66" stroke="#D8D6CE" stroke-width="1.5"/>
    <!-- Dark hair peeking from under cap -->
    <path d="M50,62 Q52,74 54,78" stroke="#1A0E06" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M150,62 Q148,74 146,78" stroke="#1A0E06" stroke-width="5" stroke-linecap="round" fill="none"/>

    <!-- Forehead lines — wise, experienced -->
    <path d="M64,76 Q100,70 136,76" stroke="#985C2C" stroke-width="1.5" fill="none" opacity="0.5"/>
    <path d="M68,70 Q100,65 132,70" stroke="#985C2C" stroke-width="1" fill="none" opacity="0.35"/>

    <!-- Eyebrows — thoughtful, calm -->
    <path d="M60,82 Q76,77 88,80" stroke="#2A1808" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M112,80 Q124,77 140,82" stroke="#2A1808" stroke-width="5" stroke-linecap="round" fill="none"/>

    <!-- ROUND WIRE-FRAME SPECTACLES (Gandhi style) -->
    <circle cx="76" cy="96" r="16" fill="none" stroke="#8B6914" stroke-width="2.5"/>
    <circle cx="124" cy="96" r="16" fill="none" stroke="#8B6914" stroke-width="2.5"/>
    <!-- Bridge -->
    <line x1="92" y1="95" x2="108" y2="95" stroke="#8B6914" stroke-width="2.5"/>
    <!-- Temple pieces -->
    <line x1="60" y1="93" x2="46" y2="90" stroke="#8B6914" stroke-width="2"/>
    <line x1="140" y1="93" x2="154" y2="90" stroke="#8B6914" stroke-width="2"/>
    <!-- Lens tint -->
    <circle cx="76" cy="96" r="13" fill="#FFEECC" opacity="0.15"/>
    <circle cx="124" cy="96" r="13" fill="#FFEECC" opacity="0.15"/>
    <!-- Lens glare -->
    <path d="M67,88 Q72,84 78,86" stroke="white" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M115,88 Q120,84 126,86" stroke="white" stroke-width="2" fill="none" opacity="0.5"/>

    <!-- Eyes — calm, wise, determined -->
    <circle cx="76" cy="96" r="7" fill="#2A1808"/>
    <circle cx="124" cy="96" r="7" fill="#2A1808"/>
    <circle cx="76" cy="96" r="5" fill="#160C04"/>
    <circle cx="124" cy="96" r="5" fill="#160C04"/>
    <circle cx="77.5" cy="93.5" r="2" fill="white" opacity="0.7"/>
    <circle cx="125.5" cy="93.5" r="2" fill="white" opacity="0.7"/>

    <!-- Nose — long, dignified -->
    <path d="M97,104 Q92,116 88,120 Q100,126 112,120 Q108,116 103,104" fill="#A86C3C"/>
    <ellipse cx="90" cy="119" rx="7" ry="5" fill="#985C2C"/>
    <ellipse cx="110" cy="119" rx="7" ry="5" fill="#985C2C"/>
    <ellipse cx="90" cy="120" rx="3" ry="2" fill="#6A3818"/>
    <ellipse cx="110" cy="120" rx="3" ry="2" fill="#6A3818"/>

    <!-- Mouth — determined, slight confident smile -->
    <path d="M80,130 Q100,138 120,130" stroke="#7A4C28" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- Smile lines at corners -->
    <path d="M80,130 Q78,134 80,138" stroke="#9A6840" stroke-width="1.5" fill="none"/>
    <path d="M120,130 Q122,134 120,138" stroke="#9A6840" stroke-width="1.5" fill="none"/>

    <!-- Side face aging lines -->
    <path d="M54,96 Q56,106 58,114" stroke="#9A6840" stroke-width="1.2" fill="none" opacity="0.4"/>
    <path d="M146,96 Q144,106 142,114" stroke="#9A6840" stroke-width="1.2" fill="none" opacity="0.4"/>
  </svg>`,

  // SHS — People's favorite, big warm smile, garland, humble
  shs: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260">
    <defs>
      <radialGradient id="shsBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#27AE6018"/>
        <stop offset="100%" stop-color="#00000000"/>
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="130" rx="95" ry="120" fill="url(#shsBg)"/>

    <!-- Body: Simple cream/off-white kurta -->
    <rect x="20" y="160" width="160" height="100" fill="#F5ECD8" rx="8"/>
    <!-- Kurta collar / neckline -->
    <path d="M78,160 Q100,175 122,160" stroke="#E0D0B0" stroke-width="2" fill="none"/>
    <!-- Center seam of kurta -->
    <line x1="100" y1="172" x2="100" y2="260" stroke="#E8DABB" stroke-width="2"/>
    <!-- Kurta embroidery border at collar — colorful traditional -->
    <path d="M68,162 Q100,178 132,162" stroke="#27AE60" stroke-width="3" fill="none"/>
    <path d="M70,168 Q100,182 130,168" stroke="#FF6B35" stroke-width="2" fill="none"/>

    <!-- GARLAND OF FLOWERS around neck -->
    <!-- Garland string -->
    <path d="M56,168 Q100,188 144,168" stroke="#228B22" stroke-width="2.5" fill="none"/>
    <!-- Flowers on garland -->
    <circle cx="62" cy="172" r="7" fill="#FFDD00"/>
    <circle cx="62" cy="172" r="4" fill="#FF8800"/>
    <circle cx="76" cy="180" r="7" fill="#FF6B6B"/>
    <circle cx="76" cy="180" r="4" fill="#CC2222"/>
    <circle cx="90" cy="185" r="7" fill="#FFDD00"/>
    <circle cx="90" cy="185" r="4" fill="#FF8800"/>
    <circle cx="100" cy="187" r="8" fill="#FF6B6B"/>
    <circle cx="100" cy="187" r="5" fill="#CC2222"/>
    <circle cx="110" cy="185" r="7" fill="#FFDD00"/>
    <circle cx="110" cy="185" r="4" fill="#FF8800"/>
    <circle cx="124" cy="180" r="7" fill="#FF6B6B"/>
    <circle cx="124" cy="180" r="4" fill="#CC2222"/>
    <circle cx="138" cy="172" r="7" fill="#FFDD00"/>
    <circle cx="138" cy="172" r="4" fill="#FF8800"/>
    <!-- Leaves on garland -->
    <ellipse cx="69" cy="176" rx="5" ry="3" fill="#2ECC40" transform="rotate(-30,69,176)"/>
    <ellipse cx="83" cy="183" rx="5" ry="3" fill="#27AE60" transform="rotate(-10,83,183)"/>
    <ellipse cx="117" cy="183" rx="5" ry="3" fill="#2ECC40" transform="rotate(10,117,183)"/>
    <ellipse cx="131" cy="176" rx="5" ry="3" fill="#27AE60" transform="rotate(30,131,176)"/>

    <!-- Neck -->
    <rect x="78" y="144" width="44" height="20" fill="#8B5A2B"/>

    <!-- HEAD — round, friendly, fuller face -->
    <ellipse cx="100" cy="98" rx="52" ry="54" fill="#8B5A2B"/>

    <!-- Ears — large, friendly -->
    <ellipse cx="48" cy="100" rx="11" ry="16" fill="#7A4A1E"/>
    <ellipse cx="152" cy="100" rx="11" ry="16" fill="#7A4A1E"/>
    <ellipse cx="48" cy="100" rx="7" ry="11" fill="#6E4018"/>
    <ellipse cx="152" cy="100" rx="7" ry="11" fill="#6E4018"/>

    <!-- Short dark hair (receding slightly, humble) -->
    <ellipse cx="100" cy="56" rx="52" ry="16" fill="#1A0E06"/>
    <ellipse cx="54" cy="66" rx="14" ry="16" fill="#1A0E06"/>
    <ellipse cx="146" cy="66" rx="14" ry="16" fill="#1A0E06"/>
    <!-- Grey streaks at temples (experienced) -->
    <ellipse cx="54" cy="70" rx="6" ry="8" fill="#6A6A6A"/>
    <ellipse cx="146" cy="70" rx="6" ry="8" fill="#6A6A6A"/>

    <!-- Warm weathered forehead lines -->
    <path d="M62,74 Q100,68 138,74" stroke="#6E4018" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M66,68 Q100,63 134,68" stroke="#6E4018" stroke-width="1" fill="none" opacity="0.4"/>

    <!-- Eyebrows — warm, raised slightly (friendly) -->
    <path d="M58,80 Q76,74 90,79" stroke="#1A0E06" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M110,79 Q124,74 142,80" stroke="#1A0E06" stroke-width="6" stroke-linecap="round" fill="none"/>

    <!-- Eyes — warm, slightly squinting from smile -->
    <ellipse cx="76" cy="92" rx="13" ry="10" fill="#1A0E06"/>
    <ellipse cx="124" cy="92" rx="13" ry="10" fill="#1A0E06"/>
    <ellipse cx="76" cy="92" rx="11" ry="8" fill="#E8D8C0"/>
    <ellipse cx="124" cy="92" rx="11" ry="8" fill="#E8D8C0"/>
    <circle cx="76" cy="93" r="6" fill="#1A0E06"/>
    <circle cx="124" cy="93" r="6" fill="#1A0E06"/>
    <!-- Warm eye shine -->
    <circle cx="78" cy="90" r="2.5" fill="white" opacity="0.8"/>
    <circle cx="126" cy="90" r="2.5" fill="white" opacity="0.8"/>
    <!-- Smile squint lines under eyes -->
    <path d="M64,100 Q76,104 88,100" stroke="#6E4018" stroke-width="2" fill="none"/>
    <path d="M112,100 Q124,104 136,100" stroke="#6E4018" stroke-width="2" fill="none"/>
    <!-- Crow's feet — friendly lines of laughter -->
    <path d="M60,96 Q56,100 58,106" stroke="#7A4A1E" stroke-width="1.5" fill="none"/>
    <path d="M140,96 Q144,100 142,106" stroke="#7A4A1E" stroke-width="1.5" fill="none"/>

    <!-- Nose — round, broad, friendly -->
    <path d="M96,104 Q88,116 84,120 Q100,128 116,120 Q112,116 104,104" fill="#7A4A1E"/>
    <ellipse cx="86" cy="119" rx="9" ry="6.5" fill="#6E4018"/>
    <ellipse cx="114" cy="119" rx="9" ry="6.5" fill="#6E4018"/>
    <ellipse cx="86" cy="120" rx="4" ry="3" fill="#4A2808"/>
    <ellipse cx="114" cy="120" rx="4" ry="3" fill="#4A2808"/>

    <!-- BIG WARM SMILE — wide, teeth showing, joyful -->
    <!-- Mouth opening -->
    <path d="M70,132 Q100,152 130,132 Q115,148 100,150 Q85,148 70,132" fill="#CC3322"/>
    <!-- Smile curve top lip -->
    <path d="M70,132 Q100,145 130,132" stroke="#993322" stroke-width="2" fill="none"/>
    <!-- Teeth — bright, wide smile -->
    <rect x="76" y="132" width="48" height="12" fill="#F5F5EE" rx="6"/>
    <!-- Tooth lines -->
    <line x1="88" y1="132" x2="88" y2="144" stroke="#E0E0D8" stroke-width="1"/>
    <line x1="100" y1="132" x2="100" y2="144" stroke="#E0E0D8" stroke-width="1"/>
    <line x1="112" y1="132" x2="112" y2="144" stroke="#E0E0D8" stroke-width="1"/>
    <!-- Lower lip -->
    <path d="M76,144 Q100,150 124,144" stroke="#7A4A1E" stroke-width="2" fill="none"/>
    <!-- Deep smile dimples -->
    <circle cx="68" cy="134" r="5" fill="#7A4A1E" opacity="0.35"/>
    <circle cx="132" cy="134" r="5" fill="#7A4A1E" opacity="0.35"/>
    <!-- Laugh lines -->
    <path d="M66,128 Q64,136 66,144" stroke="#6E4018" stroke-width="2" fill="none"/>
    <path d="M134,128 Q136,136 134,144" stroke="#6E4018" stroke-width="2" fill="none"/>

    <!-- Chubby cheeks (friendly) -->
    <ellipse cx="64" cy="116" rx="12" ry="8" fill="#FF9966" opacity="0.25"/>
    <ellipse cx="136" cy="116" rx="12" ry="8" fill="#FF9966" opacity="0.25"/>

    <!-- RAISED HAND — waving to the people -->
    <ellipse cx="162" cy="210" rx="18" ry="22" fill="#8B5A2B"/>
    <!-- Wrist -->
    <rect x="152" y="228" width="20" height="14" fill="#8B5A2B" rx="4"/>
    <!-- Fingers -->
    <ellipse cx="156" cy="196" rx="5" ry="14" fill="#7A4A1E" transform="rotate(-15,156,196)"/>
    <ellipse cx="164" cy="190" rx="5" ry="16" fill="#7A4A1E" transform="rotate(-5,164,190)"/>
    <ellipse cx="172" cy="193" rx="5" ry="14" fill="#7A4A1E" transform="rotate(8,172,193)"/>
    <ellipse cx="179" cy="200" rx="4" ry="12" fill="#7A4A1E" transform="rotate(18,179,200)"/>
    <!-- Thumb -->
    <ellipse cx="148" cy="208" rx="5" ry="11" fill="#7A4A1E" transform="rotate(-30,148,208)"/>
    <!-- Sleeve of kurta on hand -->
    <rect x="150" y="234" width="24" height="8" fill="#F5ECD8" rx="3"/>
    <rect x="150" y="234" width="24" height="3" fill="#27AE60" rx="2"/>
  </svg>`

};
