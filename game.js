// ─── GAME STATE ───────────────────────────────────────────────────────────────
const state = {
  party: null,
  ministerScore: 0,
  scenarioScore: 0,
  competitorScore: 0,
  ministerIndex: 0,
  scenarioIndex: 0,
  scenarios: [],
  choiceLog: []
};

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-date').textContent =
    new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  renderPopularityBars();
  renderPartyGrid();
});

// ─── SCREEN CONTROL ───────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ─── WELCOME: POPULARITY BARS ────────────────────────────────────────────────
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
          <div class="pop-bar-fill" style="background:${p.color}" data-w="${p.popularity}"></div>
          <span class="pop-bar-pct">${p.popularity}%</span>
        </div>
      </div>`;
  });
  setTimeout(() => {
    document.querySelectorAll('.pop-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
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
      <div class="party-card-emoji">${p.emoji}</div>
      <div class="party-card-name">${p.name}</div>
      <div class="party-card-full">${p.fullName}</div>
      <div class="party-card-ideology">${p.ideology}</div>
      <div class="party-card-pop">
        <span style="font-size:12px;color:#8b949e">Popularity</span>
        <div class="party-card-pop-bar">
          <div class="party-card-pop-fill" data-w="${p.popularity}" style="width:0%;background:${p.color}"></div>
        </div>
        <span class="party-card-pop-num">${p.popularity}%</span>
      </div>`;
    card.onclick = () => selectParty(p.id);
    grid.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll('.party-card-pop-fill').forEach(b => b.style.width = b.dataset.w + '%');
  }, 600);
}

// ─── SELECT PARTY ─────────────────────────────────────────────────────────────
function selectParty(id) {
  state.party = GAME_DATA.parties.find(p => p.id === id);
  document.documentElement.style.setProperty('--party-color', state.party.color);
  renderCharacterScreen();
  showScreen('character-screen');
}

// ─── CHARACTER SCREEN ─────────────────────────────────────────────────────────
function renderCharacterScreen() {
  const p = state.party;
  const c = p.character;
  const alphaHex = '33';
  document.getElementById('character-wrapper').innerHTML = `
    <p class="char-top-label">YOU ARE NOW LEADING</p>
    <div class="char-card" style="--pc:${p.color};--pc-alpha:${p.color}${alphaHex}">
      <span class="char-avatar">${c.avatar}</span>
      <div class="char-name">${c.name}</div>
      <div class="char-title">${c.title}</div>
      <div class="char-party-badge" style="background:${p.color}">${p.name} — ${p.fullName}</div>
      <p class="char-desc">${c.description}</p>
      <div class="char-traits">
        ${c.traits.map(t => `<span class="char-trait" style="color:${p.color};border-color:${p.color}40">${t}</span>`).join('')}
      </div>
      <div class="char-quote">${c.quote}</div>
    </div>
    <button class="btn-primary" onclick="startMinisters()">⚙️ FORM YOUR GOVERNMENT →</button>`;
}

// ─── MINISTER PHASE ───────────────────────────────────────────────────────────
function startMinisters() {
  state.ministerIndex = 0;
  state.ministerScore = 0;
  showScreen('minister-screen');
  renderMinisterStep();
}

function renderMinisterStep() {
  const ministries = GAME_DATA.ministries;
  const idx = state.ministerIndex;
  if (idx >= ministries.length) { startScenarios(); return; }

  const m = ministries[idx];
  const pct = Math.round((idx / ministries.length) * 100);
  const p = state.party;

  document.getElementById('minister-step-label').textContent =
    `Ministry ${idx + 1} of ${ministries.length} — ${m.name}`;
  document.getElementById('minister-progress-fill').style.width = pct + '%';
  document.getElementById('live-score-mini').innerHTML =
    `Government Approval So Far: <span>+${state.ministerScore}</span>`;

  document.getElementById('minister-body').innerHTML = `
    <div class="minister-role-card">
      <div class="minister-role-header">
        <span class="minister-role-icon">${m.icon}</span>
        <span class="minister-role-name">${m.name}</span>
      </div>
      <p class="minister-role-desc">${m.description}</p>
      <div class="minister-candidates">
        ${m.candidates.map((c, i) => `
          <div class="candidate-card" onclick="pickMinister(${i})" id="cand-${i}">
            <span class="candidate-alpha">${['A','B','C'][i]}</span>
            <div class="candidate-info">
              <div class="candidate-name">${c.name}</div>
              <div class="candidate-role" style="color:${p.color}">${c.role}</div>
              <div class="candidate-detail">${c.detail}</div>
            </div>
            <div class="candidate-approval">+${c.approval} pts</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function pickMinister(candidateIdx) {
  const m = GAME_DATA.ministries[state.ministerIndex];
  const chosen = m.candidates[candidateIdx];

  document.querySelectorAll('.candidate-card').forEach(c => {
    c.onclick = null;
    c.style.opacity = '0.4';
  });
  document.getElementById(`cand-${candidateIdx}`).style.opacity = '1';
  document.getElementById(`cand-${candidateIdx}`).classList.add('selected');

  state.ministerScore += chosen.approval;
  state.choiceLog.push({ phase: 'minister', ministry: m.name, choice: chosen.name, pts: chosen.approval });

  showScorePopup('+' + chosen.approval, true);

  setTimeout(() => {
    state.ministerIndex++;
    renderMinisterStep();
  }, 900);
}

// ─── SCENARIO PHASE ───────────────────────────────────────────────────────────
function startScenarios() {
  const partySpecific = GAME_DATA.partyScenarios[state.party.id];
  state.scenarios = [...GAME_DATA.commonScenarios, ...partySpecific];
  state.scenarioIndex = 0;
  state.scenarioScore = 0;
  state.competitorScore = 0;
  showScreen('scenario-screen');
  renderScenario();
}

function renderScenario() {
  if (state.scenarioIndex >= state.scenarios.length) { showResults(); return; }

  const s = state.scenarios[state.scenarioIndex];
  const total = state.scenarios.length;
  const idx = state.scenarioIndex + 1;
  const p = state.party;

  // Header
  document.getElementById('scenario-meta').innerHTML =
    `<strong>Scenario ${idx} / ${total}</strong> &nbsp;·&nbsp; ${state.party.name} Government`;

  updateScoreboard();

  // Body
  document.getElementById('scenario-body').innerHTML = `
    <div class="scenario-card">
      <div class="scenario-urgency-bar ${s.urgency}"></div>
      <div class="scenario-card-inner">
        <span class="scenario-urgency-badge ${s.urgency}">${s.urgency}</span>
        <div class="scenario-title">${s.title}</div>
        <p class="scenario-story">${s.story}</p>
        <div class="scenario-choices-label">YOUR RESPONSE AS PARTY LEADER</div>
        <div class="scenario-choices">
          ${s.choices.map((c, i) => `
            <button class="btn-choice" onclick="pickScenario(${i})" id="sc-${i}">
              <span class="choice-letter" style="color:${p.color}">${['A','B','C'][i]}</span>
              <span>${c.text}</span>
            </button>`).join('')}
        </div>
      </div>
    </div>`;
}

function pickScenario(choiceIdx) {
  const s = state.scenarios[state.scenarioIndex];
  const chosen = s.choices[choiceIdx];

  document.querySelectorAll('.btn-choice').forEach(b => b.disabled = true);

  const pts = chosen.approval;
  state.scenarioScore += pts;
  if (pts < 0) state.competitorScore += Math.abs(pts) * 2;

  state.choiceLog.push({
    phase: 'scenario',
    title: s.title,
    choice: chosen.text.substring(0, 60) + '…',
    pts
  });

  showScorePopup((pts >= 0 ? '+' : '') + pts, pts >= 0);

  const overlay = document.createElement('div');
  overlay.className = 'outcome-overlay';
  overlay.innerHTML = `
    <div class="outcome-card">
      <div class="outcome-icon">${pts >= 8 ? '🏆' : pts >= 4 ? '👍' : pts >= 0 ? '😐' : pts >= -5 ? '📉' : '💥'}</div>
      <div class="outcome-score ${pts >= 0 ? 'positive' : 'negative'}">${pts >= 0 ? '+' : ''}${pts}</div>
      <p class="outcome-text">${chosen.outcome}</p>
      <button class="outcome-btn" onclick="nextScenario(this)">
        ${state.scenarioIndex + 1 >= state.scenarios.length ? '📊 See Final Results' : 'Next Scenario →'}
      </button>
    </div>`;
  document.body.appendChild(overlay);
}

function nextScenario(btn) {
  btn.closest('.outcome-overlay').remove();
  state.scenarioIndex++;
  renderScenario();
}

function updateScoreboard() {
  const p = state.party;
  const playerTotal = state.ministerScore + state.scenarioScore;
  const oppTotal = state.competitorScore;

  const chips = GAME_DATA.parties.map(party => {
    const isPlayer = party.id === p.id;
    const score = isPlayer
      ? party.popularity + playerTotal
      : party.popularity + oppTotal;
    return `<div class="score-chip ${isPlayer ? 'player-chip' : ''}" style="--pc:${party.color}">
      <span class="chip-party" style="color:${party.color}">${party.name}</span>
      <span class="chip-val">${score > 0 ? '+' : ''}${score}</span>
    </div>`;
  }).join('');
  document.getElementById('live-scoreboard').innerHTML = chips;
}

// ─── FINAL RESULTS ────────────────────────────────────────────────────────────
function showResults() {
  showScreen('result-screen');

  const playerTotal = state.ministerScore + state.scenarioScore;
  const oppGain = state.competitorScore;
  const p = state.party;

  const results = GAME_DATA.parties.map(party => ({
    ...party,
    finalScore: party.id === p.id
      ? party.popularity + playerTotal
      : party.popularity + oppGain
  })).sort((a, b) => b.finalScore - a.finalScore);

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
            <span>Base ${r.popularity}% + ${isPlayer ? 'Performance' : 'Opposition Gain'}</span>
          </div>
        </div>
        <div class="result-score-num" style="color:${r.color}">${r.finalScore}</div>
      </div>`;
  }).join('');

  const breakdownRows = [
    { label: 'Base Party Popularity', val: `+${p.popularity}` },
    { label: 'Minister Selection Score', val: `+${state.ministerScore}` },
    { label: 'Scenario Performance Score', val: `${state.scenarioScore >= 0 ? '+' : ''}${state.scenarioScore}` },
    { label: 'Opposition Competitor Score', val: `+${oppGain} (given to rivals)` },
    { label: 'YOUR FINAL SCORE', val: p.popularity + playerTotal }
  ];

  document.getElementById('result-wrapper').innerHTML = `
    <div class="result-header">
      <h2>🗳️ Final Election Results</h2>
      <p>All decisions have been made. The votes are in.</p>
    </div>

    <div class="winner-banner">
      <h3>${playerWon ? '🎉 CONGRATULATIONS! YOU WIN!' : '💔 DEFEAT — OPPOSITION WINS'}</h3>
      <p>${playerWon
        ? `Under your leadership, <strong>${p.name}</strong> has won the national election! ${p.character.name} will now lead the country as Prime Minister. The citizens have spoken — your decisions earned their trust.`
        : `Despite your efforts, <strong>${winner.name}</strong> has won the national election. Your mistakes gave the opposition the advantage they needed to claim victory. Every decision counts in politics.`
      }</p>
    </div>

    ${rows}

    <div class="score-breakdown">
      <h4>YOUR SCORE BREAKDOWN</h4>
      ${breakdownRows.map((r, i) => `
        <div class="breakdown-row">
          <span>${r.label}</span>
          <strong style="color:${i === breakdownRows.length - 1 ? state.party.color : 'inherit'}">${r.val}</strong>
        </div>`).join('')}
    </div>

    <button class="play-again-btn" onclick="resetGame()">🔄 PLAY AGAIN</button>`;

  setTimeout(() => {
    document.querySelectorAll('.result-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
  }, 300);
}

// ─── RESET ────────────────────────────────────────────────────────────────────
function resetGame() {
  Object.assign(state, {
    party: null, ministerScore: 0, scenarioScore: 0,
    competitorScore: 0, ministerIndex: 0, scenarioIndex: 0,
    scenarios: [], choiceLog: []
  });
  document.documentElement.style.setProperty('--party-color', '#f0b429');
  showScreen('welcome-screen');
}

// ─── SCORE POPUP ──────────────────────────────────────────────────────────────
function showScorePopup(text, positive) {
  const el = document.getElementById('score-popup');
  el.textContent = text;
  el.className = 'score-popup ' + (positive ? 'positive' : 'negative');
  void el.offsetWidth;
  el.classList.add('show');
  setTimeout(() => el.className = 'score-popup', 1300);
}
