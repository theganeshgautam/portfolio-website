// Projects: edit this list. img = picture path, demo = live demo URL ("" shows a disabled button)
const PROJECTS = [
  {
    name: "URL Shortener Service",
    img: "./assets/url-shortener.png",
    desc: "Scalable URL shortening backend with JWT auth, rate limiting and click analytics.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github:
      "https://github.com/theganeshgautam/url-shortener",
    demo: "",
  },
  {
    name: "Subscription Management API",
    img: "./assets/subscription-api.png",
    desc: "Production-ready REST API with role-based access, bcrypt hashing and automated email reminders.",
    tags: ["Node.js", "Express", "Mongoose", "RBAC"],
    github:
      "https://github.com/theganeshgautam/subscription-automation-api",
    demo: "",
  },
  {
    name: "Real-Time Chat App",
    img: "./assets/chatappp.jpeg",
    desc: "Socket.IO messaging with live user tracking, JWT auth and Cloudinary media storage.",
    tags: ["Socket.IO", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/theganeshgautam/ChatApp",
    demo: "https://chatapp-h7xt.onrender.com/",
  },
  {
    name: "Nutrition Tracker",
    img: "./assets/nutrition tracker.png",
    desc: "Log meals and track nutrients over time.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/theganeshgautam/Nutrition-Tracker",
    demo: "",
  },
  {
    name: "foodBUDDY",
    img: "./assets/foodBUDDY.png",
    desc: "Food discovery app with a React front end calling a Node.js API.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/theganeshgautam/foodBUDDY",
    demo: "",
  },
];
const esc = (t) =>
  String(t).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
document.getElementById("projectGrid").innerHTML = PROJECTS.map(
  (p) => `
 <article class="card proj">
  <div class="thumb"><div class="ph" aria-hidden="true">${esc(
    p.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
  )}</div>
   <img src="${esc(p.img)}" alt="${esc(p.name)} screenshot" loading="lazy" onerror="this.remove()"></div>
  <div class="proj-b">
   <h3>${esc(p.name)}</h3>
   <p>${esc(p.desc)}</p>
   <ul class="chips">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
   <div class="plinks">
    <a class="btn p sm" href="${esc(p.github)}" target="_blank" rel="noopener">View on GitHub</a>
    ${p.demo ? `<a class="btn s sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : `<span class="btn s sm" aria-disabled="true" title="Live demo coming soon">Live demo</span>`}
   </div>
  </div>
 </article>`,
).join("");

// Skills (from CV)
const data = {
  Programming: [
    "C",
    "C++",
    "JavaScript",
    "Python (from training)",
    "SQL",
    "Shell",
  ],
  Frameworks: ["Node.js", "Express.js", "React.js"],
  "Systems & Networking": [
    "Linux",
    "REST API Design",
    "Authentication Mechanisms",
  ],
  Databases: ["MongoDB", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
  "Cloud & DevOps (in training)": [
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Ansible",
    "Grafana",
    "Prometheus",
  ],
};
document.getElementById("skillGrid").innerHTML = Object.entries(data)
  .map(
    ([g, list]) =>
      `<div class="card"><h3>${g}</h3><ul class="chips">${list.map((s) => `<li>${s}</li>`).join("")}</ul></div>`,
  )
  .join("");

// Typing effect
(() => {
  const roles = [
      "Full-Stack Developer",
      "AWS & DevOps Learner",
    ],
    el = document.getElementById("typed");
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
    el.textContent = roles[0];
    return;
  }
  let r = 0,
    c = 0,
    d = false;
  (function t() {
    const w = roles[r];
    c += d ? -1 : 1;
    el.textContent = w.slice(0, c);
    let s = d ? 40 : 90;
    if (!d && c === w.length) {
      d = true;
      s = 1400;
    } else if (d && c === 0) {
      d = false;
      r = (r + 1) % roles.length;
      s = 300;
    }
    setTimeout(t, s);
  })();
})();

// Theme
const root = document.documentElement,
  tb = document.getElementById("theme");
try {
  const s = localStorage.getItem("theme");
  if (s) root.dataset.theme = s;
} catch (e) {}
tb.onclick = () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch (e) {}
};

// Mobile menu
const bg = document.getElementById("burger"),
  ln = document.getElementById("links");
bg.onclick = () => {
  const o = ln.classList.toggle("open");
  bg.setAttribute("aria-expanded", o);
};
ln.querySelectorAll("a").forEach(
  (a) =>
    (a.onclick = () => {
      ln.classList.remove("open");
      bg.setAttribute("aria-expanded", false);
    }),
);

// Active nav link
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        ln.querySelectorAll("a").forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section").forEach((s) => io.observe(s));

// Contact form -> mailto
document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();
  const n = document.getElementById("n").value,
    em = document.getElementById("e").value,
    m = document.getElementById("m").value;
  location.href = `mailto:theganeshgautam@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from " + n)}&body=${encodeURIComponent(m + "\n\n" + n + "\n" + em)}`;
};
document.getElementById("yr").textContent = new Date().getFullYear();
