export const profile = {
  name: "Sree Lasya Katari",
  short: "Lasya K.",
  role: "Software Test Engineer",
  company: "Cognizant Technology Solutions",
  location: "Hyderabad, India",
  email: "katarisreelasya25@gmail.com",
  github: "https://github.com/katarisreelasya",
  linkedin: "https://linkedin.com/in/katarisreelasya",
  resume: "/resume.pdf",
  url: "https://katarisreelasya.dev",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "development", label: "Development" },
  { id: "expertise", label: "Expertise" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI" },
  { id: "contact", label: "Contact" },
] as const;

export const highlights = [
  "Software Test Engineer at Cognizant",
  "Former Software Developer at Lonrix",
  "B.Tech CSE | CGPA 9.0",
  "Full-Stack Development Experience",
  "Test Automation & Quality Engineering",
  "AI-Assisted Development Enthusiast",
];

export const developmentCards = [
  { title: "Backend Services", desc: "Scalable RESTful services built with ASP.NET Core MVC, Entity Framework Core, Node.js and Express.js.", tags: ["ASP.NET Core", "C#", "Node.js", "Express.js"] },
  { title: "Secure APIs", desc: "JWT authentication, role-based authorization and centralized error handling to protect every endpoint.", tags: ["JWT", "RBAC", "Swagger"] },
  { title: "Modern Web Apps", desc: "Responsive full-stack applications delivered with Angular and React on top of robust APIs.", tags: ["Angular", "React", "TypeScript"] },
  { title: "Data & Persistence", desc: "SQL Server queries, stored procedures and MongoDB models designed for reliable data processing.", tags: ["SQL Server", "MongoDB", "Mongoose"] },
  { title: "Logging & Maintainability", desc: "Structured logging with Serilog and clean, debuggable code that is easy to evolve.", tags: ["Serilog", "Git", "Docker"] },
  { title: "Full Lifecycle Delivery", desc: "From implementation to quality assurance across Agile/Scrum and SDLC practices.", tags: ["Agile", "SDLC", "CI/CD"] },
];

export const qualityCards = [
  { title: "Functional Testing", desc: "Validating features against business requirements with structured, traceable test cases." },
  { title: "Regression Testing", desc: "Protecting stable behaviour with repeatable suites that run on every change." },
  { title: "Smoke Testing", desc: "Fast build-verification checks that confirm critical paths before deeper testing." },
  { title: "Sanity Testing", desc: "Focused validation of fixes and small changes to keep releases moving safely." },
  { title: "Integration Testing", desc: "Verifying that services, APIs and databases work together as one system." },
  { title: "Defect Management", desc: "Clear, reproducible Jira defects with severity, evidence and lifecycle tracking." },
];

export const automationBlocks = [
  { label: "Framework Development", items: ["Python", "Selenium", "PyTest"] },
  { label: "Framework Architecture", items: ["Page Object Model", "Data Driven Testing", "Keyword Driven Testing", "Reusable Components"] },
  { label: "Reporting & Execution", items: ["Screenshot Capture", "Tag Execution", "Automated Reporting"] },
];

export const apiDbCards = [
  { title: "REST API Testing", desc: "Request, response, status and schema validation across endpoints.", tags: ["Postman", "Swagger"] },
  { title: "SQL Validation", desc: "Query-level verification of stored data against expected results.", tags: ["SQL Server"] },
  { title: "MongoDB Verification", desc: "Document-level checks for NoSQL-backed applications.", tags: ["MongoDB"] },
  { title: "Backend Testing", desc: "Business logic, auth and error handling validated below the UI.", tags: ["JWT", "REST"] },
  { title: "Data Integrity Checks", desc: "Ensuring records stay consistent between UI, API and database.", tags: ["End-to-end"] },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["Python", "C#", "Java", "JavaScript", "TypeScript", "SQL"] },
  { title: "Automation", items: ["Selenium", "PyTest", "POM", "BDD"] },
  { title: "Backend", items: ["ASP.NET Core MVC", "Entity Framework Core", "Node.js", "Express.js"] },
  { title: "Frontend", items: ["Angular", "React"] },
  { title: "Databases", items: ["SQL Server", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "Jira", "Docker"] },
  { title: "AI Tools", items: ["GitHub Copilot", "Claude", "AI Agents", "RAG", "Prompt Engineering", "Context Engineering", "MCP"] },
];

export const experience = [
  {
    company: "Cognizant Technology Solutions",
    role: "Software Test Engineer",
    period: "Dec 2025 - Present",
    points: ["Test Automation", "Framework Development", "API Testing", "Database Validation", "Jira Defect Management", "Banking Domain Testing"],
  },
  {
    company: "Lonrix Private Limited",
    role: "Software Developer",
    period: "Apr 2025 - Sep 2025",
    points: ["ASP.NET Core", "REST APIs", "SQL Server", "JWT Authentication", "Role-Based Authorization", "Serilog Logging"],
  },
];

export const projects = [
  {
    title: "Zing Wells",
    subtitle: "Enterprise Automation Platform",
    tech: ["Python", "Selenium", "PyTest", "SQL", "Postman"],
    features: ["Hybrid Framework", "POM", "Data Driven Testing", "Keyword Driven Testing", "Failure Screenshots", "API Testing", "Database Validation"],
    github: "https://github.com/katarisreelasya",
    file: "test_login.py",
    code: ["def test_valid_login(driver):", "    page = LoginPage(driver)", "    page.login(user, pwd)", "    assert page.is_dashboard()", "    api.verify_session(token)", "    db.assert_user_active(user)"],
  },
  {
    title: "Smart Hotel Booking Platform",
    subtitle: "Full-Stack Booking System",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: ["Hotel Search", "Booking Management", "Admin Dashboard", "Authentication", "Reviews"],
    github: "https://github.com/katarisreelasya",
    file: "booking.routes.ts",
    code: ["router.post('/bookings',", "  auth, async (req, res) => {", "  const b = await Booking", "    .create(req.body);", "  res.status(201).json(b);", "});"],
  },
  {
    title: "GMR Alumni Association Portal",
    subtitle: "Community & Networking Portal",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["Alumni Registration", "Networking", "Event Management", "Admin Dashboard"],
    github: "https://github.com/katarisreelasya",
    file: "AlumniList.tsx",
    code: ["export function AlumniList() {", "  const { data } = useAlumni();", "  return data.map(a => (", "    <AlumniCard key={a.id}", "      {...a} />", "  ));"],
  },
];

export const aiCards = [
  { title: "Prompt Engineering", desc: "Crafting precise prompts that turn LLMs into dependable engineering collaborators." },
  { title: "Context Engineering", desc: "Curating the right context, tools and constraints so AI output stays accurate." },
  { title: "AI Agents", desc: "Agentic workflows that plan, call tools and automate repetitive engineering tasks." },
  { title: "RAG", desc: "Retrieval-augmented generation grounding answers in trusted project knowledge." },
  { title: "GitHub Copilot", desc: "Accelerating test and feature code with AI pair programming." },
  { title: "Claude", desc: "Reasoning, code review and documentation support in everyday delivery." },
];
