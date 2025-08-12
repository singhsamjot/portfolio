// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

// preloader script ends here.........

// switch for setting
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate");
  document
    .getElementById("visualmodetogglebuttoncontainer")
    .classList.toggle("visualmodeshow");
}
function playpause() {
  if (document.getElementById("switchforsound").checked == false) {
    audio.pause();
  } else {
    audio.play();
  }
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  document
    .querySelector(".about-heading-article")
    .classList.toggle("heading-article-light");
  document
    .querySelector(".aboutHeadingP")
    .classList.toggle("heading-article-light");

  document
    .querySelector(".skills-heading-article")
    .classList.toggle("heading-article-light");
  document
    .querySelector(".skillsHeadingP")
    .classList.toggle("heading-article-light");

  document
    .querySelector(".projects-heading-article")
    .classList.toggle("heading-article-light");
  document
    .querySelector(".projectsHeadingP")
    .classList.toggle("heading-article-light");

  document
    .querySelector(".frontend-dev-heading")
    .classList.toggle("heading-article-light");

  document.getElementById("html").classList.toggle("language-gradient-class");
  document.getElementById("css").classList.toggle("language-gradient-class");

  document.getElementById("js").classList.toggle("language-gradient-class");

  document.getElementById("mouse").classList.toggle("mouse-light-mode");
  document.getElementById("mousewheel").classList.toggle("mouse-light-mode");
  document.getElementById("dot1").classList.toggle("mouse-light-mode");
  document.getElementById("dot2").classList.toggle("mouse-light-mode");
  document.getElementById("dot3").classList.toggle("mouse-light-mode");
  // document.getElementById('project-box1').classList.toggle('language-gradient-class');
  // document.getElementById('project-box2').classList.toggle('language-gradient-class');
  let projectBox = document.querySelectorAll(".project-box");
  projectBox.forEach((Box) => {
    Box.classList.toggle("language-gradient-class");
  });
}
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.toggle("show-toggle-menu");
  document.getElementById("emptyarea").classList.toggle("blur-class");
  document
    .getElementById("burger-bar1")
    .classList.toggle("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.toggle("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.remove("show-toggle-menu");
  document.getElementById("emptyarea").classList.remove("blur-class");
  document
    .getElementById("burger-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.remove("hamburger-animation3");
}

// close Mobile hamburger toggle menu while clicking in empty area
emptyArea.addEventListener("click", hidetogglemenu);
function hidetogglemenu() {
  document.body.classList.remove("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.remove("show-toggle-menu");
  document.getElementById("emptyarea").classList.remove("blur-class");
  document
    .getElementById("burger-bar1")
    .classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(
  ".navbar .navbar-tabs .navbar-tabs-ul a li"
);
const mobilenavLi = document.querySelectorAll(
  ".mobiletogglemenu .mobile-navbar-tabs-ul a li"
);

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 500) {
      current = section.getAttribute("id");
    }
  });

  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});
console.log(
  "%c Designed and Developed by Samjot Singh",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);

document.addEventListener(
  "contextmenu",
  function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  },
  false
);

let pupils = document.getElementsByClassName("pupil");
let pupilsArr = Array.from(pupils);
// console.log(pupils);

let pupilStartPoint = -1;
let pupilRange = 3;

// mouse X
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

// mouse Y position
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let pupilXCurrrentPosition = pupilStartPoint + fracXValue * pupilRange;
  let pupilYCurrrentPosition = pupilStartPoint + fracYValue * pupilRange;

  pupilsArr.forEach((curPupil) => {
    curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  });
};

const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

// Simple AI chat (demo) with optional proxy endpoint
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("ai-chat-toggle");
  const panel = document.getElementById("ai-chat-panel");
  const closeBtn = document.querySelector('.ai-close');
  const form = document.getElementById("ai-chat-form");
  const input = document.getElementById("ai-chat-input");
  const log = document.querySelector(".ai-chat-log");
  const copyBtn = document.getElementById('ai-copy');
  const clearBtn = document.getElementById('ai-clear');
  if (!toggle || !panel || !form || !input || !log) return;

  const timeNow = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const append = (text, cls) => {
    const wrap = document.createElement("div");
    const div = document.createElement("div");
    const ts = document.createElement("span");
    wrap.className = `msg-wrapper ${cls}`;
    div.className = `msg ${cls}`;
    div.textContent = text;
    ts.className = 'timestamp';
    ts.textContent = timeNow();
    wrap.appendChild(div);
    wrap.appendChild(ts);
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
  closeBtn && closeBtn.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
  });

  // Quick suggestion pills
  document.querySelectorAll('.ai-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      input.value = pill.getAttribute('data-say') || pill.textContent;
      input.focus();
    });
  });

  const PROXY_URL = window.AI_PROXY_URL || ""; // Set window.AI_PROXY_URL to use your serverless proxy
  const HISTORY_KEY = 'singhbot_history_v1';
  // Lightweight local knowledge base to avoid weird/duplicate demo replies
  const KB = {
    intro: "Hi! I'm Singh Bot. I can answer questions about Samjot's skills, experience and toolset.",
    summary: "Samjot is a full‑stack developer with 8+ years building modern web apps. Frontend: React/Next.js and Angular. Backend: Node.js/Express and Python (Django/Flask). Strong TypeScript, SQL, and cloud (AWS/Azure/GCP).",
    experience: "8+ years shipping user‑focused products end‑to‑end: React/Angular UIs, TypeScript, Node/Django APIs, SQL/Redis data, CI/CD and cloud infra (AWS/Azure/GCP). Emphasis on performance, accessibility and clean DX.",
    frontend: "Frontend focus: React/Next.js, Angular, TypeScript, Tailwind/CSS, testing with Jest/Cypress, animations with Framer Motion.",
    backend: "Backend stack: Node.js/Express, Python with Django/Flask, REST and GraphQL APIs, Auth, caching with Redis, background jobs, testing.",
    devops: "Cloud & DevOps: AWS/Azure/GCP, Docker/Kubernetes, CI/CD (GitHub Actions), IaC with Terraform.",
    contact: "Best way to contact: use the Email Me button at the top or write to samjotsinghcode@gmail.com."
  };

  let lastReply = "";
  const localAnswer = (qRaw) => {
    const q = (qRaw || '').toLowerCase();
    const includesAny = (arr) => arr.some(k => q.includes(k));
    if (includesAny(["hi","hello","hey","yo","hola"])) return "Hey! How can I help? Ask about skills, experience, stack or contact.";
    if (includesAny(["summary","overview","about you"])) return KB.summary;
    if (includesAny(["experience","years","background"])) return KB.experience;
    if (includesAny(["front","react","next","angular","ui"])) return KB.frontend;
    if (includesAny(["back","api","node","django","flask","server"])) return KB.backend;
    if (includesAny(["cloud","aws","azure","gcp","devops","docker","kubernetes","k8s","terraform"])) return KB.devops;
    if (includesAny(["contact","email","reach","connect"])) return KB.contact;
    if (includesAny(["skills","stack","tech"])) return `${KB.frontend} ${KB.backend} ${KB.devops}`;
    return "I can help with skills, experience, stack, projects or contact info. Try: “What’s your stack?” or “Tell me your experience.”";
  };
  // restore history
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    saved.forEach(m => append(m.text, m.role));
  } catch {}

  const saveMessage = (text, role) => {
    try {
      const arr = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      arr.push({ text, role, t: Date.now() });
      localStorage.setItem(HISTORY_KEY, JSON.stringify(arr).slice(-4000));
    } catch {}
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    append(q, "me");
    saveMessage(q, 'me');
    input.value = "";
    // typing indicator
    const typing = document.createElement('div');
    typing.className = 'msg typing bot';
    typing.innerHTML = '<span class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;

    if (!PROXY_URL) {
      let reply = localAnswer(q);
      if (reply === lastReply) {
        // provide variation by appending a short extra hint once
        reply = reply + " If you want specifics, ask about frontend, backend or cloud.";
      }
      lastReply = reply;
      typing.remove();
      append(reply, "bot");
      saveMessage(reply, 'bot');
      return;
    }

    try {
      const res = await fetch(PROXY_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prompt: q })
      });
      if (res.headers.get('content-type')?.includes('text/event-stream')) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let finalText = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const parts = buffer.split('\n\n');
          buffer = parts.pop();
          for (const p of parts) {
            const m = p.replace(/^data: /, '');
            try {
              const obj = JSON.parse(m);
              finalText = obj.reply || finalText;
            } catch {}
          }
        }
        typing.remove();
        const reply = finalText || localAnswer(q);
        append(reply, 'bot');
        saveMessage(reply, 'bot');
      } else {
        const data = await res.json();
        let reply = data.reply || localAnswer(q);
        if (reply === lastReply) reply = reply + " Anything else you’d like to know?";
        lastReply = reply;
        typing.remove();
        append(reply, "bot");
        saveMessage(reply, 'bot');
      }
    } catch (err) {
      typing.remove();
      const reply = localAnswer(q);
      append(reply, "bot");
      saveMessage(reply, 'bot');
    }
  });

  // Copy last bot message
  copyBtn && copyBtn.addEventListener('click', async () => {
    const msgs = Array.from(log.querySelectorAll('.msg.bot'));
    if (!msgs.length) return;
    const last = msgs[msgs.length - 1].textContent;
    try { await navigator.clipboard.writeText(last); copyBtn.textContent = 'Copied'; setTimeout(()=> copyBtn.textContent='Copy last', 1200);} catch {}
  });

  // Clear chat history
  clearBtn && clearBtn.addEventListener('click', () => {
    localStorage.removeItem(HISTORY_KEY);
    log.innerHTML = '';
  });
});

// Accent color picker: persists in localStorage and updates CSS variables
document.addEventListener("DOMContentLoaded", () => {
  const ACCENT_KEY = "accentColor";
  const applyAccent = (color) => {
    document.documentElement.style.setProperty("--color-light-purple", color);
    document.documentElement.style.setProperty("--color-purple", color);
    // Update gradient if used
    const bgEls = document.querySelectorAll(".letsTalkBtn-BG");
    bgEls.forEach((el) => {
      el.style.backgroundImage = `linear-gradient(150deg, #71cbff, ${color})`;
    });
  };

  const saved = localStorage.getItem(ACCENT_KEY);
  if (saved) {
    applyAccent(saved);
    document
      .querySelectorAll(".accent-swatch")
      .forEach((b) => b.setAttribute("aria-checked", String(b.dataset.accent === saved)));
  }
  document.querySelectorAll(".accent-swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.accent;
      localStorage.setItem(ACCENT_KEY, color);
      applyAccent(color);
      document
        .querySelectorAll(".accent-swatch")
        .forEach((b) => b.setAttribute("aria-checked", String(b === btn)));
    });
  });

  // Theme presets
  const setPreset = (name) => {
    const root = document.documentElement;
    if (name === 'neo') {
      root.style.setProperty('--color-light-blue', '#80d4ff');
      root.style.setProperty('--color-light-purple', '#a78bfa');
    } else if (name === 'aurora') {
      root.style.setProperty('--color-light-blue', '#6ee7b7');
      root.style.setProperty('--color-light-purple', '#22d3ee');
    } else if (name === 'midnight') {
      root.style.setProperty('--color-light-blue', '#60a5fa');
      root.style.setProperty('--color-light-purple', '#9333ea');
    }
  };
  document.querySelectorAll('.theme-preset').forEach((b)=>{
    b.addEventListener('click', ()=> setPreset(b.dataset.preset));
  })

  // Initialize lucide icons
  try { window.lucide && window.lucide.createIcons(); } catch {}
});

// Magnetic hover for CTA button
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".letsTalkBtn");
  if (!cta) return;
  const textEl = cta.querySelector(".letsTalkBtn-text");
  const strength = 0.15;
  const onMove = (e) => {
    const rect = cta.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const scale = 1 + Math.min(0.06, Math.hypot(x, y) * strength);
    textEl && (textEl.style.transform = `scale(${scale})`);
  };
  const reset = () => {
    textEl && (textEl.style.transform = "scale(1)");
  };
  cta.addEventListener("mousemove", onMove);
  cta.addEventListener("mouseleave", reset);
});

// Subtle parallax on hero orbs
document.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.orb');
  if (!orbs.length) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  orbs.forEach((o, i) => {
    const depth = (i + 1) * 6; // slower for deeper
    o.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
  });
});

// 3D tilt effect for cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tilt');
  cards.forEach((card) => {
    const strength = 10;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${px * strength}deg) rotateX(${ -py * strength}deg)`;
    };
    const reset = () => { card.style.transform = 'none'; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', reset);
  });
});

// Smooth anchor transitions with fade overlay
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute('href');
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  const overlay = document.querySelector('.page-fade-overlay');
  if (overlay) {
    document.body.classList.add('fade-active');
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => document.body.classList.remove('fade-active'), 350);
    }, 50);
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Reveal progress bars on scroll
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');
  const headings = document.querySelectorAll('.skills-heading-article, .about-heading-article');
  const revealItems = document.querySelectorAll('.reveal-item');
  if (!('IntersectionObserver' in window)) {
    bars.forEach(b => b.classList.add('reveal'));
    headings.forEach(h => h.classList.add('reveal'));
    revealItems.forEach(i => i.classList.add('reveal-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal');
        io.unobserve(e.target);
      }
    })
  }, { threshold: 0.4 });
  bars.forEach(b => io.observe(b));
  headings.forEach(h => io.observe(h));

  const io2 = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        io2.unobserve(e.target);
      }
    })
  }, { threshold: 0.2 });
  revealItems.forEach((i, idx) => {
    i.style.transitionDelay = `${Math.min(idx * 60, 300)}ms`;
    io2.observe(i);
  });

  // Animate skill rings
  const rings = document.querySelectorAll('.ring');
  const io3 = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const p = parseFloat(e.target.dataset.p || '0') * 360;
        e.target.style.setProperty('--accent', getComputedStyle(document.documentElement).getPropertyValue('--color-light-purple') || '#a78bfa');
        e.target.style.background = `conic-gradient(var(--accent) ${p}deg, rgba(255,255,255,0.08) ${p}deg)`;
        io3.unobserve(e.target);
      }
    })
  }, { threshold: 0.3 });
  rings.forEach(r => io3.observe(r));
});
