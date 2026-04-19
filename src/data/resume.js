// ─────────────────────────────────────────────
//  resume.js  –  single source of truth for all
//  portfolio content. Edit only this file to
//  update anything on the site.
// ─────────────────────────────────────────────

export const meta = {
  name: "Obaidullah Khan",
  title: "Technical Writer | API Documentation | Docs-as-Code | Agile Workflows",
  tagline:
    "Technical Writer & API Documentation Specialist with 3+ years turning complex engineering into content developers actually want to read.",
  location: "Bamberg, Bavaria, Germany",
  email: "okjadoon18@gmail.com",
  phone: "+4917676009120",
  linkedin: "https://www.linkedin.com/in/obaidullah-khan-8472971ab/",
  available: true,
  award: "Contributed to Brevo winning Postman's Top New API Award 2024",
};

export const stats = [
  { value: "3+",  label: "Years Experience" },
  { value: "40%", label: "Support ticket reduction" },
  { value: "20+", label: "Doc requests / day" },
  { value: "6+",  label: "SDK languages managed" },
  { value: "30+", label: "Research papers reviewed" },
  { value: "200+", label: "REST API Endpoints documentation owner" },
  { value: "100+", label: "API user guides written" },
  { value: "100+", label: "Changelogs documented" },
];

export const about = {
  bio: [
    "I'm a technical writer with <strong>3+ years of experience</strong> specialising in developer-facing documentation — APIs, SDKs, authentication flows, and developer portals. I've owned end-to-end documentation at Brevo, a leading CRM and email marketing platform used by millions.",
    "My background spans <strong>API documentation, software development, technical support, and penetration testing</strong> — giving me a uniquely broad technical lens. I translate complex systems into content that is clear, accessible, and genuinely useful.",
    "I hold an <strong>M.Sc. in International Software Systems Science</strong> from the University of Bamberg, where my thesis explored AR interaction types on mobile devices using Xcode, Unity 3D and C#.",
  ],
  info: [
    { key: "Location",   value: "Bamberg, Germany" },
    { key: "Education",  value: "M.Sc. International Software Systems Science" },
    { key: "University", value: "University of Bamberg" },
    { key: "B.Sc.",      value: "Computer Science, Bahria University" },
    { key: "Languages",  value: "English (Bilingual) · German (A2) · Turkish (A1) · Urdu (Native)"  },
    { key: "Status",     value: "Open to opportunities", highlight: true },
  ],
};

export const experience = [
  {
    company:  "Brevo / Sendinblue GmbH",
    role:     "Working Student Technical Writer (API)",
    duration: "Dec 2022 – Feb 2026",
    location: "Berlin, Germany",
    featured: true,
    bullets: [
      "Owned the full <strong>Brevo developer portal</strong> — API user guides, API references, Swagger OAS, Changelog, Recipes, and Postman workspace.",
      "Implemented a <strong>docs-as-code workflow</strong> using Markdown (.MD and .MDX) with CI/CD-based publication via GitHub and Agile methodologies.",
      "Managed <strong>SDKs across 6+ languages</strong>: C#, Java, C++, Python, Node.js, TypeScript, PHP.",
      "Contributed to Brevo winning the <strong>Top New API Award from Postman 2024</strong> by managing the Swagger/OAS spec and Postman workspace.",
      "Integrated AI and LLM tools into daily documentation workflows to improve output quality and throughput.",
      "Provided <strong>L2/L3 technical support</strong> to customers and development teams via Jira and Slack, achieving a 95% customer satisfaction rate.",
      "Played key role in implementing <strong>OAuth 2.0 authentication (Keycloak)</strong> for customers and diagnosing Oauth issues.",
      "<strong>Reduced customer support tickets by 40%</strong> through clear, user-focused procedural documentation and FAQ creation.",
      "Collaborated cross-functionally with Engineering, Product, QA, UX, and Customer Support teams.",
      "Worked with documentation platforms: <strong>Readme.io, Docusaurus, Fern</strong>.",
    ],
    tags: [
      { label: "Markdown / MDX",   color: "blue" },
      { label: "OpenAPI / Swagger", color: "blue" },
      { label: "Postman",           color: "blue" },
      { label: "GitHub CI/CD",      color: "blue" },
      { label: "OAuth 2.0",         color: "blue" },
      { label: "Readme.io",         color: "blue" },
      { label: "Docusaurus",        color: "blue" },
      { label: "Fern",              color: "blue" },
      { label: "Jira",              color: "blue" },
      { label: "REST APIs",         color: "blue" },
      { label: "L2/L3 Support",     color: "green" },
      { label: "Docs-as-Code",      color: "purple" },
    ],
  },
  {
    company:  "Trillium Information Security Systems",
    role:     "Intern Penetration Tester",
    duration: "Dec 2021 – Feb 2022",
    location: "Rawalpindi, Pakistan",
    featured: false,
    bullets: [
      "Studied OWASP Top 10 vulnerabilities and performed hands-on proof-of-concept demonstrations.",
      "Tested vulnerable web applications (bWAPP) and produced structured <strong>vulnerability reports</strong> presented to supervisors.",
      "Worked hands-on with: <strong>Burpsuite, Nmap, Ettercap, Wireshark, Metasploit, John the Ripper, Sqlmap</strong>.",
      "Studied <strong>ISO 27001 standards</strong> for Information Security Management Systems (ISMS).",
      "<strong>Top-ranked candidate among 30 interns</strong> — offered a full-time Penetration Tester position.",
    ],
    tags: [
      { label: "Penetration Testing", color: "purple" },
      { label: "Burpsuite",           color: "purple" },
      { label: "Metasploit",          color: "purple" },
      { label: "OWASP Top 10",        color: "purple" },
      { label: "ISO 27001",           color: "purple" },
      { label: "Nmap",                color: "purple" },
      { label: "InfoSec",             color: "green" },
    ],
  },
];

export const projects = [
  {
    type:  "Master's Thesis · 2025",
    title: "Implementation and Evaluation of Interaction types in Mobile-based AR",
    desc:  "Built an iOS AR application in Unity 3D evaluating three interaction paradigms — touch-based, device-based, and mid-air gestures — using C# scripting and an external hand-tracking SDK. The Realtime Hand SDK from Github was used for tracking changes in hand directions and fingers movement that scaled or moved 3D models. Included a user study with 12 participants and review of 30+ research papers from IEEE, ACM, and ISMAR.",
    tags:  ["Unity 3D", "C#", "Xcode / iOS", "AR", "User Study"],
    accent: "purple",
  },
  {
    type:  "Bachelor's Thesis · 2020-2021",
    title: "Realtor AR",
    desc:  "Built an Android AR application in Android Studio using Java. The application helped Real Estate companies pitch commercial and residential projects to clients by augmenting 3d house models feeded in database, on the actual plot of land. There were options to view the model while walking around a full-scale model of the house, there were different paints and textures you could add to the house and you could also record the AR scene for future uses.The thesis included a review of 50+ research papers.",
    tags:  ["Unity 3D", "Java", "Android Studio / Android", "AR", "ARCore", "Sceneform plugin", "Sketchup"],
    accent: "purple",
  },
  {
    type:  "Master's Project · 2023–2024",
    title: "KaaS — Kathara as a Service",
    desc:  "Developed a containerised web platform for network simulation in a team setting using Python, Vue.js, Docker, FastAPI, and MongoDB with Kathara for network emulation.",
    tags:  ["Python", "Vue.js", "FastAPI", "Docker", "MongoDB", "Kathara"],
    accent: "green",
  },
  {
    type:  "Documentation Project · Brevo",
    title: "Brevo Developer Portal Rebuild",
    desc:  "Owned the developer portal end-to-end: API references, SDK guides, Postman workspace, and OAuth integration docs. Implemented docs-as-code pipelines and documentation quality processes that contributed to winning Postman's Top API Award 2024.",
    tags:  ["Docusaurus", "OpenAPI", "Postman", "GitHub Actions", "Fern", "Readme.io", "Award-winning"],
    accent: "blue",
  },
];

export const skills = [
  {
    group: "Documentation",
    color: "blue",
    items: ["API Reference Docs", "Developer Guides", "OpenAPI / OAS", "Swagger Specs", "Release Notes/ Changelog", "SDK Docs", "Technical Writing", "Onboarding Guides", "XML / JSON Docs", "CI/CD workflows", "Doc-as-code approach", "Markdown" ],
  },
  {
    group: "Tools & Platforms",
    color: "blue",
    items: ["Readme.io", "Docusaurus", "Fern", "Postman", "GitHub / Git", "GitLab", "Jira", "VS Code", "Docker", "Kubernetes", "Android Studio", "Xcode"],
  },
  {
    group: "Engineering",
    color: "green",
    items: ["REST APIs", "OAuth 2.0 / SSO", "CI/CD Pipelines", "Markdown / MDX", "SQL / Postgres", "Neo4j", "Cloud / Web Services", "Linux / Bash"],
  },
  {
    group: "Programming",
    color: "green",
    items: ["C#", "Python", "Java", "JavaScript / TS", "PHP", "C++", "React Native", "Vue.js", "Unity 3D"],
  },
  {
    group: "Security",
    color: "purple",
    items: ["Penetration Testing", "OWASP Top 10", "ISO 27001", "Burpsuite", "Metasploit", "Wireshark", "Nmap", "Sqlmap"],
  },
  {
    group: "Soft Skills",
    color: "teal",
    items: ["Cross-team Collaboration", "Technical Communication", "Technical Support", "Agile / Scrum", "L2/L3 Support", "User Research", "Problem Solving"],
  },
];

export const education = [
  {
    degree:   "M.Sc. International Software Systems Science",
    school:   "University of Bamberg",
    duration: "Apr 2022 – Sep 2025",
    location: "Bamberg, Germany",
    courses:  ["Software Quality", "Distributed Systems", "SOA (Java, Spring Boot, Docker, Kubernetes)", "Functional Programming", "Computer & Mobile Networking", "Advanced Databases (SQL, Postgres, Neo4j)", "Advanced Security & Privacy"],
  },
  {
    degree:   "B.Sc. Computer Science",
    school:   "Bahria University",
    duration: "Feb 2017 – Feb 2021",
    location: "Islamabad, Pakistan",
    courses:  ["Data Structures and Algorithms", "Machine Learning", "Computer Programming", "Calculus and Numerical Analysis", "Information Security", "Web and App Development"],
  },
];

export const certifications = [
  { title: "API Crash Course",                    provider: "Udemy" },
  { title: "Information Architecture Fundamentals", provider: "Udemy" },
  { title: "A2 German Language",                  provider: "Goethe Institute" },
];
