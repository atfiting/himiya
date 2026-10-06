// assistant.js
import { renderCrystalLattice } from './crystal.js';
import {
  balanceEquation,
  classifyReaction,
  determineBondType,
  getCrystalData,
  KNOWLEDGE
} from './chem.js';
import { THEORY } from './theory-data.js';

const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const crystalTitle = document.getElementById('crystalTitle');
const crystalDesc = document.getElementById('crystalDesc');
const crystalLegend = document.getElementById('crystalLegend');

renderCrystalLattice(null);

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;
  handleCommand(text);
  userInput.value = '';
});

document.querySelectorAll('.quick-buttons button').forEach(btn => {
  btn.addEventListener('click', () => handleCommand(btn.dataset.cmd));
});

function handleCommand(text) {
  addMessage(text, 'user');
  const lower = text.toLowerCase();

  // Уравнять
  if (lower.includes('уравня') || (text.includes('=') && !lower.includes('тип'))) {
    const eq = text.replace(/^.*?(?=[A-Z0-9(])/i, '').trim();
    const res = balanceEquation(eq);
    if (res.success) {
      addMessage(`Уравненное уравнение:\n\n**${res.balanced}**`, 'bot', 'balance');
    } else {
      addMessage('Не получилось уравнять: ' + res.error, 'bot');
    }
    return;
  }

  // Тип реакции
  if (lower.includes('тип реакции') || lower.includes('тип реакц')) {
    const eq = text.replace(/тип реакции/i, '').trim();
    const res = classifyReaction(eq);
    if (res.success) {
      addMessage(`**${res.type}**\n\n${res.explanation}`, 'bot', 'reaction');
    } else {
      addMessage(res.error, 'bot');
    }
    return;
  }

  // Тип связи
  if (lower.includes('связь') || lower.includes('связи') || lower.includes('тип связи')) {
    const formula = text
      .replace(/какая связь в/i, '')
      .replace(/тип связи в/i, '')
      .replace(/связь в/i, '')
      .replace(/тип связи/i, '')
      .replace(/\?/g, '')
      .trim();
    const res = determineBondType(formula);
    if (res.success) {
      addMessage(`**${res.type}**\n\n${res.explanation}`, 'bot', 'bond');
    } else {
      addMessage(res.error, 'bot');
    }
    return;
  }

  // Кристаллическая решётка
  if (lower.includes('решётк') || lower.includes('решетк') || lower.includes('покажи')) {
    const sub = text
      .replace(/покажи/i, '')
      .replace(/решётку/gi, '')
      .replace(/решетку/gi, '')
      .replace(/решётка/gi, '')
      .replace(/решетка/gi, '')
      .trim();
    const res = getCrystalData(sub);
    if (res.error) {
      addMessage(res.error, 'bot');
    } else {
      addMessage(`**${res.name}**\nТип: ${res.type}\n\n${res.description}`, 'bot', 'crystal');
      showCrystal(res);
    }
    return;
  }

  // Объяснение темы
  for (const key in KNOWLEDGE) {
    if (lower.includes(key)) {
      addMessage(KNOWLEDGE[key], 'bot', 'info');
      return;
    }
  }

  // Если ничего не подошло
  addMessage(
    `Я не понял вопрос. Попробуй так:\n\n` +
    `• «уравняй H2 + O2 = H2O»\n` +
    `• «тип реакции 2H2 + O2 = 2H2O»\n` +
    `• «связь в NaCl»\n` +
    `• «покажи решётку NaCl»\n` +
    `• «объясни валентность»`,
    'bot'
  );
}

function addMessage(text, sender, type = null) {
  const div = document.createElement('div');
  div.className = `message ${sender}`;

  let tagHtml = '';
  if (type) {
    const tags = {
      balance: '<span class="tag balance">⚖️ Уравнивание</span>',
      reaction: '<span class="tag reaction">🔬 Тип реакции</span>',
      bond: '<span class="tag bond">🔗 Тип связи</span>',
      crystal: '<span class="tag crystal">💎 Решётка</span>',
      info: '<span class="tag info">📖 Объяснение</span>'
    };
    tagHtml = tags[type] || '';
  }

  const formatted = escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  div.innerHTML = `<div class="bubble">${tagHtml}${formatted}</div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showCrystal(data) {
  crystalTitle.textContent = data.name || 'Кристаллическая решётка';
  crystalDesc.textContent = data.description || '';
  crystalLegend.innerHTML = '';
  if (data.ions) {
    data.ions.forEach(ion => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      const color = '#' + ion.color.toString(16).padStart(6, '0');
      item.innerHTML = `<span class="legend-dot" style="background:${color}"></span><span>${ion.element}${ion.charge || ''}</span>`;
      crystalLegend.appendChild(item);
    });
  }
  renderCrystalLattice(data);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============ ТЕОРИЯ ============
const theoryBtn = document.getElementById('theoryBtn');
const theoryModal = document.getElementById('theoryModal');
const theoryClose = document.getElementById('theoryClose');
const theoryContent = document.getElementById('theoryContent');
const gradeBtns = document.querySelectorAll('.grade-btn');

if (theoryBtn) {
  theoryBtn.addEventListener('click', () => {
    theoryModal.style.display = 'flex';
    renderTheoryList(8);
  });
}

if (theoryClose) {
  theoryClose.addEventListener('click', () => {
    theoryModal.style.display = 'none';
  });
}

if (theoryModal) {
  theoryModal.addEventListener('click', (e) => {
    if (e.target === theoryModal) theoryModal.style.display = 'none';
  });
}

gradeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    gradeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTheoryList(parseInt(btn.dataset.grade));
  });
});

function renderTheoryList(grade) {
  const paragraphs = Object.entries(THEORY).filter(([key, val]) => val.grade === grade);

  let html = `<h2>${grade} класс — выберите параграф</h2><div class="theory-list">`;
  paragraphs.forEach(([key, val]) => {
    html += `
      <div class="theory-item">
        <div class="theory-item-title">${val.title}</div>
        <div class="theory-item-actions">
          <button class="theory-open-btn" data-key="${key}">📖 Теория</button>
          ${val.video ? `<a href="${val.video}" target="_blank" class="video-btn">🎬 Видео Урок</a>` : ''}
        </div>
      </div>
    `;
  });
  html += '</div>';
  theoryContent.innerHTML = html;

  document.querySelectorAll('.theory-open-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      const item = THEORY[key];
      theoryContent.innerHTML = `
        <button class="theory-back-btn">← Назад к списку</button>
        <h2>${item.title}</h2>
        <div class="theory-body">${item.text}</div>
        ${item.video ? `<a href="${item.video}" target="_blank" class="video-btn large">🎬 Видео Урок по теме</a>` : '<p class="no-video">Видеоурок пока не добавлен</p>'}
      `;
      document.querySelector('.theory-back-btn').addEventListener('click', () => renderTheoryList(grade));
    });
  });
}