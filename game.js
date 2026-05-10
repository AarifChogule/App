// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  party: null,
  scores: { bje: 25, congrass: 25, apa: 25, shs: 25 },
  diamonds: 30,
  ministerIndex: 0,
  scenarioIndex: 0,
  debateIndex: 0,
  scenarios: []
};

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-date').textContent =
    new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  renderPopularityBars();
  renderPartyGrid();
});

// ─── ZERO-SUM SCORING ─────────────────────────────────────────────────────────
// When one party gains, others lose proportionally. Total always normalizes to 100.
function applyScore(beneficiaryId, points) {
  const others = Object.keys(state.scores).filter(k => k !== beneficiaryId);
  state.scores[beneficiaryId] = Math.max(0, state.scores[beneficiaryId] + points);
  const costEach = points / others.length;
  others.forEach(k => state.scores[k] = Math.max(0, state.scores[k] - costEach));
  normalizeScores();
}

function normalizeScores() {
  const total = Object.values(state.scores).reduce((a, b) => a + b, 0);
  if (total > 0) {
    const factor = 100 / total;
    Object.keys(state.scores).forEach(k => {
      state.scores[k] = Math.round(state.scores[k] * factor * 10) / 10;
    });
  }
}

// ─── SCREEN ───────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  updateDiamondCounter();
}

// ─── DIAMOND COUNTER ──────────────────────────────────────────────────────────
function updateDiamondCounter() {
  let el = document.getElementById('diamond-counter');
  if (!el) {
    el = document.createElement('div');
    el.id = 'diamond-counter';
    document.body.appendChild(el);
  }
  el.innerHTML = `💎 <span>${state.diamonds}</span>`;
  el.style.display = (state.party && state.diamonds !== null) ? 'flex' : 'none';
}

// ─── WELCOME ──────────────────────────────────────────────────────────────────
function renderPopularityBars() {
  const container = document.getElementById('popularity-bars');
  GAME_DATA.parties.forEach(p => {
    container.innerHTML += `
      <div class="pop-bar-item">
        <div class="pop-bar-label">
          <span class="party-tag" style="background:${p.color}">${p.name}</span>
          <span style="font-size:13px;color:#8b949e">${p.fullName}</span>
        </div>
        <div class="pop-bar-track">
          <div class="pop-bar-fill" style="background:${p.color}" data-w="25"></div>
          <span class="pop-bar-pct">25%</span>
        </div>
      </div>`;
  });
  setTimeout(() => {
    document.querySelectorAll('.pop-bar-fill').forEach(b => b.style.width = '25%');
  }, 400);
}

// ─── PARTY SELECT ─────────────────────────────────────────────────────────────
function renderPartyGrid() {
  const grid = document.getElementById('party-grid');
  GAME_DATA.parties.forEach(p => {
    const card = document.createElement('div');
    card.className = 'party-card';
    card.style.setProperty('--pc', p.color);
    card.innerHTML = `
      <div class="party-card-char">${CHARACTERS[p.id]}</div>
      <div class="party-card-name" style="color:${p.color}">${p.name}</div>
      <div class="party-card-full">${p.fullName}</div>
      <div class="party-card-ideology">${p.ideology}</div>
      <div class="party-card-pop">
        <span style="font-size:12px;color:#8b949e">Starting Score</span>
        <div class="party-card-pop-bar"><div class="party-card-pop-fill" data-w="25" style="width:0%;background:${p.color}"></div></div>
        <span class="party-card-pop-num" style="color:${p.color}">25</span>
      </div>`;
    card.onclick = () => selectParty(p.id);
    grid.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll('.party-card-pop-fill').forEach(b => b.style.width = '25%');
  }, 600);
}

// ─── SELECT PARTY ─────────────────────────────────────────────────────────────
function selectParty(id) {
  state.party = GAME_DATA.parties.find(p => p.id === id);
  document.documentElement.style.setProperty('--party-color', state.party.color);
  renderCharacterScreen();
  showScreen('character-screen');
}

// ─── CHARACTER ────────────────────────────────────────────────────────────────
function renderCharacterScreen() {
  const p = state.party;
  const c = p.character;
  document.getElementById('character-wrapper').innerHTML = `
    <p class="char-top-label">YOU ARE NOW LEADING</p>
    <div class="char-card" style="--pc:${p.color}">
      <div class="char-svg-wrap">
        ${CHARACTERS[p.id]}
      </div>
      <div class="char-name">${c.name}</div>
      <div class="char-title">${c.title}</div>
      <div class="char-party-badge" style="background:${p.color}">${p.name} — ${p.fullName}</div>
      <p class="char-desc">${c.description}</p>
      <div class="char-traits">${c.traits.map(t => `<span class="char-trait" style="color:${p.color};border-color:${p.color}40">${t}</span>`).join('')}</div>
      <div class="char-quote">${c.quote}</div>
    </div>
    <div class="diamond-info-box">
      <div class="diamond-info-icon">💎</div>
      <div>
        <strong>You start with 30 Diamonds</strong><br>
        <span>Spend 6 diamonds to unlock premium ministers or make an excellent decision in any scenario or debate. Use them wisely — you only have 5 chances.</span>
      </div>
    </div>
    <button class="btn-primary" onclick="startMinisters()">⚙️ FORM YOUR GOVERNMENT →</button>`;
}

// ─── MINISTERS ────────────────────────────────────────────────────────────────
function startMinisters() {
  state.ministerIndex = 0;
  showScreen('minister-screen');
  renderMinisterStep();
}

function renderMinisterStep() {
  const idx = state.ministerIndex;
  if (idx >= GAME_DATA.ministries.length) { startScenarios(); return; }
  const m = GAME_DATA.ministries[idx];
  const pct = Math.round((idx / GAME_DATA.ministries.length) * 100);
  const p = state.party;

  document.getElementById('minister-step-label').textContent =
    `Ministry ${idx + 1} of ${GAME_DATA.ministries.length} — ${m.name}`;
  document.getElementById('minister-progress-fill').style.width = pct + '%';
  document.getElementById('live-score-mini').innerHTML =
    `Your Score: <span style="color:${p.color};font-weight:700">${state.scores[p.id].toFixed(1)}</span> / 100 pts`;

  const premC = m.premiumCandidate;
  const canAfford = state.diamonds >= premC.cost;

  document.getElementById('minister-body').innerHTML = `
    <div class="minister-role-card">
      <div class="minister-role-header">
        <span class="minister-role-icon">${m.icon}</span>
        <span class="minister-role-name">${m.name}</span>
      </div>
      <p class="minister-role-desc">${m.description}</p>
      <div class="minister-candidates">
        ${m.candidates.map((c, i) => `
          <div class="candidate-card" onclick="pickMinister(${i}, false)" id="cand-${i}">
            <span class="candidate-alpha">${['A','B','C'][i]}</span>
            <div class="candidate-info">
              <div class="candidate-name">${c.name}</div>
              <div class="candidate-role" style="color:${p.color}">${c.role}</div>
              <div class="candidate-detail">${c.detail}</div>
            </div>
            <div class="candidate-approval">+${c.approval} pts</div>
          </div>`).join('')}
        <div class="candidate-card premium-card ${canAfford ? '' : 'cant-afford'}"
             onclick="${canAfford ? 'pickMinister(3, true)' : 'showCantAfford()'}" id="cand-3">
          <span class="candidate-alpha diamond-alpha">💎</span>
          <div class="candidate-info">
            <div class="candidate-name">${premC.name}</div>
            <div class="candidate-role" style="color:#f0b429">${premC.role}</div>
            <div class="candidate-detail">${premC.detail}</div>
          </div>
          <div class="candidate-approval diamond-pts">
            +${premC.approval} pts<br>
            <small style="color:${canAfford ? '#f0b429' : '#666'}">💎 6 diamonds</small>
          </div>
        </div>
      </div>
    </div>`;
}

function pickMinister(idx, isPremium) {
  const m = GAME_DATA.ministries[state.ministerIndex];
  const chosen = isPremium ? m.premiumCandidate : m.candidates[idx];

  if (isPremium) { state.diamonds -= chosen.cost; }

  document.querySelectorAll('.candidate-card').forEach(c => { c.onclick = null; c.style.opacity = '0.4'; });
  const cardEl = document.getElementById(`cand-${idx}`);
  cardEl.style.opacity = '1';
  cardEl.classList.add('selected');

  applyScore(state.party.id, chosen.approval);
  showScorePopup('+' + chosen.approval, true);

  setTimeout(() => { state.ministerIndex++; renderMinisterStep(); }, 900);
}

function showCantAfford() {
  showToast("Not enough diamonds! You need 💎 6 diamonds.");
}

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
function startScenarios() {
  const partySpecific = GAME_DATA.partyScenarios[state.party.id];
  state.scenarios = [...GAME_DATA.commonScenarios, ...partySpecific];
  state.scenarioIndex = 0;
  showScreen('scenario-screen');
  showAINewsFlash(() => renderScenario());
}

function renderScenario() {
  if (state.scenarioIndex >= state.scenarios.length) { startDebate(); return; }
  const s = state.scenarios[state.scenarioIndex];
  const total = state.scenarios.length;
  const idx = state.scenarioIndex + 1;
  const p = state.party;

  document.getElementById('scenario-meta').innerHTML =
    `<strong>Scenario ${idx} / ${total}</strong> &nbsp;·&nbsp; ${p.name} Government &nbsp;·&nbsp; 💎 ${state.diamonds} diamonds`;
  updateScoreboard();

  const regularChoices = s.choices.filter(c => !c.diamond);
  const diamondChoice = s.choices.find(c => c.diamond);
  const canAfford = state.diamonds >= 6;

  document.getElementById('scenario-body').innerHTML = `
    <div class="scenario-card">
      <div class="scenario-urgency-bar ${s.urgency}"></div>
      <div class="scenario-card-inner">
        <span class="scenario-urgency-badge ${s.urgency}">${s.urgency}</span>
        <div class="scenario-title">${s.title}</div>
        <p class="scenario-story">${s.story}</p>
        <div class="scenario-choices-label">YOUR RESPONSE AS PARTY LEADER</div>
        <div class="scenario-choices">
          ${regularChoices.map((c, i) => `
            <button class="btn-choice" onclick="pickScenario(${i}, false)" id="sc-${i}">
              <span class="choice-letter" style="color:${p.color}">${['A','B','C'][i]}</span>
              <span>${c.text}</span>
            </button>`).join('')}
          ${diamondChoice ? `
            <button class="btn-choice diamond-choice ${canAfford ? '' : 'cant-afford'}"
                    onclick="${canAfford ? 'pickScenario(3, true)' : 'showCantAfford()'}" id="sc-3">
              <span class="choice-letter" style="color:#f0b429">💎</span>
              <span>${diamondChoice.text} <small style="color:${canAfford ? '#f0b429' : '#666'}"> — costs 6 diamonds</small></span>
            </button>` : ''}
        </div>
      </div>
    </div>`;
}

function pickScenario(choiceIdx, isDiamond) {
  const s = state.scenarios[state.scenarioIndex];
  const regularChoices = s.choices.filter(c => !c.diamond);
  const diamondChoice = s.choices.find(c => c.diamond);
  const chosen = isDiamond ? diamondChoice : regularChoices[choiceIdx];

  document.querySelectorAll('.btn-choice').forEach(b => b.disabled = true);

  if (isDiamond) state.diamonds -= chosen.cost;
  applyScore(state.party.id, chosen.approval);
  showScorePopup((chosen.approval >= 0 ? '+' : '') + chosen.approval, chosen.approval >= 0);

  showOutcomeOverlay(chosen.approval, chosen.outcome, () => {
    state.scenarioIndex++;
    if (state.scenarioIndex < state.scenarios.length) {
      showAINewsFlash(() => renderScenario());
    } else {
      startDebate();
    }
  });
}

// ─── AI NEWS FLASH ────────────────────────────────────────────────────────────
function showAINewsFlash(callback) {
  const p = state.party;
  const opponentIds = GAME_DATA.parties.map(x => x.id).filter(id => id !== p.id);
  const actorId = opponentIds[Math.floor(Math.random() * opponentIds.length)];
  const actor = GAME_DATA.parties.find(x => x.id === actorId);
  const actions = GAME_DATA.aiActions[actorId];
  const action = actions[Math.floor(Math.random() * actions.length)];

  const isAttack = action.type === 'attack';
  const isScandal = action.type === 'scandal';
  const pts = action.points;

  if (isScandal) {
    applyScore(actorId, pts); // negative, hurts actor
  } else if (isAttack) {
    applyScore(p.id, -pts);   // attack hurts player, benefits actor
  } else {
    applyScore(actorId, pts); // boost benefits actor
  }

  const headline = action.text.replace('{party}', p.name);
  const detail = action.detail.replace('{party}', p.name);
  const scoreText = isScandal
    ? `${actor.name} ${pts > 0 ? '+' : ''}${pts} pts`
    : isAttack
    ? `${p.name} -${pts} pts · ${actor.name} +${pts} pts`
    : `${actor.name} +${pts} pts`;

  const overlay = document.createElement('div');
  overlay.className = 'ai-news-overlay';
  overlay.innerHTML = `
    <div class="ai-news-card">
      <div class="ai-news-ticker">📡 BREAKING NEWS</div>
      <div class="ai-news-party" style="color:${actor.color}">${actor.emoji} ${actor.name} — AI COMPETITOR</div>
      <div class="ai-news-headline">${headline}</div>
      <div class="ai-news-detail">${detail}</div>
      <div class="ai-news-score ${isScandal ? 'scandal' : isAttack ? 'attack' : 'boost'}">
        ${isScandal ? '📉' : isAttack ? '⚔️' : '📈'} ${scoreText}
      </div>
      <div class="ai-news-bar">
        ${GAME_DATA.parties.map(x => `
          <div class="ai-bar-item">
            <span style="color:${x.color};font-size:11px;font-weight:700">${x.name}</span>
            <div class="ai-mini-bar"><div style="width:${Math.min(100,state.scores[x.id])}%;background:${x.color};height:100%;border-radius:3px;transition:width 0.5s ease"></div></div>
            <span style="font-size:12px;font-weight:700;color:${x.color}">${state.scores[x.id].toFixed(1)}</span>
          </div>`).join('')}
      </div>
      <button class="ai-news-btn" onclick="this.closest('.ai-news-overlay').remove(); (${callback})()">Continue →</button>
    </div>`;
  document.body.appendChild(overlay);
}

function updateScoreboard() {
  const chips = GAME_DATA.parties.map(party => {
    const isPlayer = party.id === state.party.id;
    return `<div class="score-chip ${isPlayer ? 'player-chip' : ''}" style="--pc:${party.color}">
      <span class="chip-party" style="color:${party.color}">${party.name}${isPlayer ? ' ⭐' : ''}</span>
      <span class="chip-val">${state.scores[party.id].toFixed(1)}</span>
    </div>`;
  }).join('');
  document.getElementById('live-scoreboard').innerHTML = chips;
}

// ─── DEBATE ───────────────────────────────────────────────────────────────────
function startDebate() {
  state.debateIndex = 0;
  showScreen('debate-screen');
  renderDebateRound();
}

function renderDebateRound() {
  if (state.debateIndex >= GAME_DATA.debates.length) { showResults(); return; }
  const d = GAME_DATA.debates[state.debateIndex];
  const p = state.party;
  const canAfford = state.diamonds >= 6;

  document.getElementById('debate-header-info').innerHTML =
    `Round ${state.debateIndex + 1} of ${GAME_DATA.debates.length} &nbsp;·&nbsp; Topic: <strong>${d.topic}</strong> &nbsp;·&nbsp; 💎 ${state.diamonds}`;

  updateDebateScoreboard();

  const regularChoices = d.choices.filter(c => !c.diamond);
  const diamondChoice = d.choices.find(c => c.diamond);

  document.getElementById('debate-body').innerHTML = `
    <div class="debate-card">
      <div class="debate-question-label">DEBATE QUESTION</div>
      <div class="debate-question">"${d.question}"</div>
      <div class="debate-ai-responses">
        <div class="debate-ai-label">🤖 AI PARTIES RESPOND FIRST</div>
        ${GAME_DATA.parties.filter(x => x.id !== p.id).map(x => {
          const pts = d.aiPoints[x.id];
          return `<div class="debate-ai-row">
            <span class="debate-ai-party" style="color:${x.color}">${x.emoji} ${x.name}</span>
            <div class="debate-ai-speech">${d.aiResponses[x.id]}</div>
            <span class="debate-ai-pts" style="color:${x.color}">+${pts} pts</span>
          </div>`;
        }).join('')}
      </div>
      <div class="debate-your-turn">YOUR TURN — HOW DO YOU RESPOND?</div>
      <div class="debate-choices">
        ${regularChoices.map((c, i) => `
          <button class="btn-choice" onclick="pickDebate(${i}, false)">
            <span class="choice-letter" style="color:${p.color}">${['A','B','C'][i]}</span>
            <span>${c.text}</span>
          </button>`).join('')}
        ${diamondChoice ? `
          <button class="btn-choice diamond-choice ${canAfford ? '' : 'cant-afford'}"
                  onclick="${canAfford ? 'pickDebate(3, true)' : 'showCantAfford()'}">
            <span class="choice-letter" style="color:#f0b429">💎</span>
            <span>${diamondChoice.text} <small style="color:${canAfford ? '#f0b429' : '#666'}"> — costs 6 diamonds</small></span>
          </button>` : ''}
      </div>
    </div>`;
}

function pickDebate(choiceIdx, isDiamond) {
  const d = GAME_DATA.debates[state.debateIndex];
  const p = state.party;
  const regularChoices = d.choices.filter(c => !c.diamond);
  const diamondChoice = d.choices.find(c => c.diamond);
  const chosen = isDiamond ? diamondChoice : regularChoices[choiceIdx];

  document.querySelectorAll('.btn-choice').forEach(b => b.disabled = true);
  if (isDiamond) state.diamonds -= chosen.cost;

  // Apply AI party scores
  GAME_DATA.parties.forEach(x => {
    if (x.id !== p.id) applyScore(x.id, d.aiPoints[x.id]);
  });
  // Apply player score
  applyScore(p.id, chosen.approval);
  showScorePopup((chosen.approval >= 0 ? '+' : '') + chosen.approval, chosen.approval >= 0);

  showDebateResult(chosen, () => {
    state.debateIndex++;
    renderDebateRound();
  });
}

function showDebateResult(chosen, callback) {
  const overlay = document.createElement('div');
  overlay.className = 'outcome-overlay';
  overlay.innerHTML = `
    <div class="outcome-card">
      <div class="outcome-icon">${chosen.approval >= 10 ? '🏆' : chosen.approval >= 6 ? '👍' : chosen.approval >= 3 ? '😐' : '📉'}</div>
      <div class="outcome-score positive">+${chosen.approval} debate points</div>
      <p class="outcome-text">The audience reacts to your answer. Scores have been updated across all parties.</p>
      <button class="outcome-btn" onclick="this.closest('.outcome-overlay').remove(); (${callback})()">
        ${state.debateIndex + 1 >= GAME_DATA.debates.length ? '📊 See Final Election Results' : 'Next Round →'}
      </button>
    </div>`;
  document.body.appendChild(overlay);
}

function updateDebateScoreboard() {
  const chips = GAME_DATA.parties.map(party => {
    const isPlayer = party.id === state.party.id;
    return `<div class="score-chip ${isPlayer ? 'player-chip' : ''}" style="--pc:${party.color}">
      <span class="chip-party" style="color:${party.color}">${party.name}</span>
      <span class="chip-val">${state.scores[party.id].toFixed(1)}</span>
    </div>`;
  }).join('');
  const el = document.getElementById('debate-scoreboard');
  if (el) el.innerHTML = chips;
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function showResults() {
  showScreen('result-screen');
  const p = state.party;

  const results = GAME_DATA.parties
    .map(party => ({ ...party, finalScore: state.scores[party.id] }))
    .sort((a, b) => b.finalScore - a.finalScore);

  const winner = results[0];
  const playerWon = winner.id === p.id;
  const maxScore = results[0].finalScore;
  const rankEmojis = ['🥇', '🥈', '🥉', '4️⃣'];

  const rows = results.map((r, i) => {
    const isPlayer = r.id === p.id;
    const barPct = Math.max(5, Math.round((r.finalScore / maxScore) * 100));
    return `
      <div class="result-party-row ${i === 0 ? 'winner' : ''}">
        <div class="result-rank">${rankEmojis[i]}</div>
        <div class="result-party-info">
          <div class="result-party-name" style="color:${r.color}">${r.name} ${isPlayer ? '⭐' : ''}</div>
          <div class="result-party-sub">${r.fullName}</div>
        </div>
        <div class="result-bar-wrap">
          <div class="result-bar-track">
            <div class="result-bar-fill" style="background:${r.color}" data-w="${barPct}"></div>
          </div>
          <div class="result-bar-score" style="color:${r.color}">
            <span>Final Score</span>
          </div>
        </div>
        <div class="result-score-num" style="color:${r.color}">${r.finalScore.toFixed(1)}</div>
      </div>`;
  }).join('');

  document.getElementById('result-wrapper').innerHTML = `
    <div class="result-header">
      <h2>🗳️ Final Election Results</h2>
      <p>All decisions made. The debate is over. The votes are counted.</p>
    </div>
    <div class="winner-banner">
      <h3>${playerWon ? '🎉 CONGRATULATIONS! YOU WIN THE ELECTION!' : '💔 DEFEAT — OPPOSITION WINS'}</h3>
      <p>${playerWon
        ? `Under your leadership, <strong>${p.name}</strong> wins the national election! ${p.character.name} becomes Prime Minister. The citizens trusted your decisions.`
        : `Despite your effort, <strong>${winner.name}</strong> wins the election. The AI competitors outperformed your party in the zero-sum battle for public trust.`
      }</p>
    </div>
    ${rows}
    <div class="score-breakdown">
      <h4>FINAL SCORE SUMMARY</h4>
      <div class="breakdown-row"><span>All parties started equal</span><strong>25 pts each</strong></div>
      <div class="breakdown-row"><span>Total pool (zero-sum)</span><strong>100 pts</strong></div>
      <div class="breakdown-row"><span>Your final score (${p.name})</span><strong style="color:${p.color}">${state.scores[p.id].toFixed(1)} pts</strong></div>
      <div class="breakdown-row"><span>Diamonds remaining</span><strong>💎 ${state.diamonds}</strong></div>
    </div>
    <button class="play-again-btn" onclick="resetGame()">🔄 PLAY AGAIN</button>`;

  setTimeout(() => {
    document.querySelectorAll('.result-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
  }, 300);
}

// ─── RESET ────────────────────────────────────────────────────────────────────
function resetGame() {
  Object.assign(state, {
    party: null,
    scores: { bje: 25, congrass: 25, apa: 25, shs: 25 },
    diamonds: 30,
    ministerIndex: 0, scenarioIndex: 0, debateIndex: 0, scenarios: []
  });
  document.documentElement.style.setProperty('--party-color', '#f0b429');
  updateDiamondCounter();
  showScreen('welcome-screen');
}

// ─── OUTCOME OVERLAY ──────────────────────────────────────────────────────────
function showOutcomeOverlay(pts, outcomeText, callback) {
  const overlay = document.createElement('div');
  overlay.className = 'outcome-overlay';
  overlay.innerHTML = `
    <div class="outcome-card">
      <div class="outcome-icon">${pts >= 10 ? '🏆' : pts >= 6 ? '👍' : pts >= 0 ? '😐' : pts >= -5 ? '📉' : '💥'}</div>
      <div class="outcome-score ${pts >= 0 ? 'positive' : 'negative'}">${pts >= 0 ? '+' : ''}${pts} pts</div>
      <p class="outcome-text">${outcomeText}</p>
      <button class="outcome-btn" onclick="this.closest('.outcome-overlay').remove(); (${callback})()">Continue →</button>
    </div>`;
  document.body.appendChild(overlay);
}

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function showScorePopup(text, positive) {
  const el = document.getElementById('score-popup');
  el.textContent = text;
  el.className = 'score-popup ' + (positive ? 'positive' : 'negative');
  void el.offsetWidth;
  el.classList.add('show');
  setTimeout(() => el.className = 'score-popup', 1300);
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2500);
}
