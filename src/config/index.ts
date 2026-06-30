import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sukesh Periyasamy — Medical Technology & AI Researcher",
  author: "Sukesh Periyasamy",
  description:
    "Early-career researcher specializing in Medical Technology, SERS Biosensors, EMG Signal Processing, and AI-driven medical systems.",
  lang: "en",
  siteLogo: "/sukesh-photo.png",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Manuscripts", href: "#manuscripts" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
    { text: "Awards", href: "#awards" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/sukeshperiyasamy" },
    { text: "Github", href: "https://github.com/sukeshperiyasamy" },
    { text: "Email", href: "mailto:sukeshperiyasamy@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://sukeshiitj.me",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sukesh Periyasamy",
    specialty: "Medical Technology & AI Researcher",
    summary:
      "Junior Research Fellow at IIT Jodhpur integrating computational analysis, biomedical instrumentation, and machine learning to build clinically grounded AI systems for early disease detection.",
    email: "sukeshperiyasamy@gmail.com",
  },
  about: {
    description: `I am an early-career researcher with a Master in Medical Technology from IIT Jodhpur (jointly with AIIMS Jodhpur). My journey began with coding and software development, but it quickly evolved. Programming taught me how to build software, while exploring hardware internals taught me how computers function. During my B.Sc. in IT and Master of Computer Applications (MCA), I honed my programming skills and built machine learning models. I then asked a fundamental question: What if the software I built could solve problems beyond computers and directly improve people's lives?

This led me to pursue interdisciplinary research at the intersection of engineering, medicine, and AI. Entering an interdisciplinary environment where engineers, clinicians, and biomedical researchers worked together completely changed my perspective. I realized that developing healthcare technologies requires much more than technical knowledge—it requires understanding biological systems, clinical practice, experimental research, and the real challenges faced by patients and healthcare professionals.

Today, as a Junior Research Fellow at IIT Jodhpur, I work on developing Surface-Enhanced Raman Spectroscopy (SERS) biosensors for the label-free detection of sepsis-related biomarkers. My research spans microfabrication, structural characterization using Scanning Electron Microscopy (SEM), and computational analysis of Raman spectra. Alongside this, I developed an EMG-based human-computer interaction system using Arduino, BioAmp EXG sensors, and Unity. I believe the future of healthcare lies in the thoughtful integration of intelligent algorithms, reliable biomedical devices, and clinical expertise.`,
    image: "/sukesh-photo.png",
  },
  skills: [
    {
      category: "Programming",
      items: ["Python", "JavaScript"],
    },
    {
      category: "Scientific Computing",
      items: ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"],
    },
    {
      category: "Data Analysis",
      items: ["Statistical Analysis", "Signal Processing", "Data Preprocessing"],
    },
    {
      category: "Machine Learning",
      items: ["Feature Engineering", "Supervised Learning", "Model Evaluation"],
    },
    {
      category: "Signal Processing",
      items: ["EMG Acquisition", "Filtering", "Envelope Detection", "Calibration"],
    },
    {
      category: "Spectral Analysis",
      items: ["Raman Spectroscopy", "FTIR", "SERS Processing", "DFT Simulations"],
    },
    {
      category: "Fabrication & Morphology",
      items: ["Photolithography", "PVD (Sputtering, Thermal & E-beam)", "SEM (Scanning Electron Microscopy)"],
    },
    {
      category: "Web & Mobile",
      items: ["Android SDK", "FastAPI", "React", "Tailwind CSS", "Redis"],
    },
    {
      category: "Software & Platforms",
      items: ["Git", "GitHub", "Linux", "Unity 3D", "Arduino", "Raspberry Pi"],
    },
  ],
  experience: [
    {
      company: "Indian Institute of Technology Jodhpur",
      position: "Junior Research Fellow (JRF) — Funded by TCS",
      startDate: "2026",
      endDate: "Present",
      type: "research",
      summary: [
        "Developing silicon-based Surface-Enhanced Raman Spectroscopy (SERS) biosensors for sensitive, label-free biomarker detection targeting neonatal sepsis.",
        "Conducting cleanroom microfabrication processes including photolithography and Physical Vapor Deposition (PVD) systems (sputtering, thermal evaporation, e-beam evaporation) to design and fabricate nanostructured sensing platforms.",
        "Performing structural and morphological characterisation of fabricated substrates using Scanning Electron Microscopy (SEM) and analysing micro/nanostructures.",
        "Developing Python-based computational pipelines for Raman, FTIR, and SERS spectral preprocessing, including ALS baseline correction, Savitzky–Golay smoothing, peak detection, and spectral feature extraction.",
        "Validating molecular spectra using Density Functional Theory (DFT) simulations (Gaussian 16, Avogadro) against experimental Raman and FTIR measurements to accurately identify biomarkers such as LPS, LTA, and NAM.",
        "Conducting experimental optimisation of nanostructured sensing platforms to improve spectral enhancement, reproducibility, and sensitivity for biomarker applications.",
      ],
    },
    {
      company: "Jodhpur City Knowledge and Innovation Foundation (JCKIF)",
      position: "Internship — Product Management",
      startDate: "Oct 2024",
      endDate: "Mar 2025",
      type: "industry",
      summary: [
        "Managed digital product catalogue ensuring accurate listings and metadata consistency.",
        "Captured and edited product images to enhance visual quality and user appeal.",
      ],
    },
    {
      company: "Atos Syntel",
      position: "Internship — Software Testing",
      startDate: "Oct 2022",
      endDate: "Nov 2022",
      type: "industry",
      summary: [
        "Performed manual and automation testing (functional, integration, regression) within an Agile development environment, collaborating with teams on bug tracking.",
      ],
    },
    {
      company: "KEC College",
      position: "Workshop Instructor — 4-Day Technical Training",
      startDate: "2024",
      endDate: "2024",
      type: "teaching",
      summary: [
        "Conducted a hands-on technical workshop for 35+ students covering Computer Hardware, Linux, Web Development, Git, Cloud, and IoT fundamentals.",
      ],
    },
  ],
  manuscripts: [
    {
      title: "Experimental and DFT-Assisted Raman Characterisation of N-Acetylmuramic Acid",
      status: "Manuscript in Preparation",
      institution: "IIT Jodhpur",
      year: "2026",
      summary: [
        "Acquired high-quality Raman spectra of bulk N-acetylmuramic acid (NAM) under optimized conditions and developed a complete data-processing workflow (baseline correction, smoothing, normalization, reproducibility analysis) to establish a validated reference spectrum for bacterial cell-wall studies.",
        "Performed Density Functional Theory (DFT) calculations to simulate Raman spectra and accurately assign theoretical vibrational modes, demonstrating the combined utility of experimental and computational methods for identifying NAM in Raman-based diagnostic applications.",
      ],
    },
  ],
  projects: [
    {
      name: "Silicon-Based SERS Biosensor Development",
      summary: "Designing and fabricating silicon-based SERS substrates in a cleanroom environment via photolithography and PVD for improved plasmonic enhancement. Developing computational workflows for Raman, FTIR, and SERS spectral preprocessing for neonatal sepsis biomarker identification.",
      image: "/silicon-sers.jpeg",
      linkSource: "https://github.com/sukeshperiyasamy",
      linkPreview: "#projects",
      tech: ["Python", "DFT", "Raman", "FTIR", "SEM"],
    },
    {
      name: "AnteClick — Mobile Banking Phishing Protection",
      summary: "An Android cybersecurity platform and SDK to detect phishing URLs and fake banking apps in under 300ms using Android Accessibility Service for heuristic analysis (typosquatting, homographs) without inspecting private data.",
      image: "/anteclick.png",
      linkSource: "https://github.com/sukeshperiyasamy",
      linkPreview: "https://anteclick.app/",
      tech: ["Jetpack Compose", "FastAPI", "Redis", "Python", "React"],
    },
    {
      name: "NeuroSync — EMG-Based VR Controller",
      summary: "Built a real-time EMG-based control system for a Unity VR football game. Implemented full signal pipeline: amplification, filtering, envelope detection, and peak confirmation with auto-calibration and rise-only triggering.",
      image: "/emg-project.jpeg",
      linkSource: "https://github.com/sukeshperiyasamy",
      linkPreview: "#projects",
      tech: ["Arduino Uno", "BioAmp EXG Pill", "Unity 3D"],
    },
  ],
  education: [
    {
      institution: "Indian Institute of Technology Jodhpur (Joint with AIIMS)",
      degree: "Master in Medical Technology",
      cgpa: "CGPA: 8.53 / 10",
      location: "Rajasthan, India",
      startDate: "2024",
      endDate: "2026",
    },
    {
      institution: "Erode Sengunthar Engineering College",
      degree: "Master of Computer Applications (MCA)",
      cgpa: "CGPA: 7.20 / 10",
      location: "Tamil Nadu, India",
      startDate: "2022",
      endDate: "2024",
    },
    {
      institution: "Kongu Arts and Science College",
      degree: "B.Sc. Information Technology",
      cgpa: "CGPA: 6.90 / 10",
      location: "Tamil Nadu, India",
      startDate: "2019",
      endDate: "2022",
    },
  ],
  awards: [
    {
      title: "Finalist – Smart India Hackathon 2024",
      details: "Recognized for innovative solutions developed under the national hackathon framework.",
    },
    {
      title: "1st Prize – Website Creation Competition",
      details: "Awarded for exceptional design, layout execution, and implementation details.",
    },
    {
      title: "2nd Prize – Code Fighter Competition",
      details: "Coding and algorithmic challenge showcasing quick problem-solving and efficiency.",
    },
    {
      title: "Bronze Medal – Inter-Collegiate Taekwondo",
      details: "Martial arts competition representing collegiate athletic achievement.",
    },
    {
      title: "Represented Tamil Nadu – Senior National Softball Championship",
      details: "State-level representation at the national softball championship.",
    },
  ],
};
