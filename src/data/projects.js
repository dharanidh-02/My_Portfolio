export const portfolioProjects = [
  {
    id: 'prism',
    title: 'PRISM',
    subtitle: 'Hybrid Brain Tumor Classification System',
    category: 'AI / Healthcare',
    badge: 'TOP 10',
    match: '99% Match',
    year: '2026',
    rating: 'CLINICAL GRADE',
    description:
      'A deep learning platform that couples dual-stream convolutional feature extractors with multi-head self-attention mechanisms to classify multi-modal MRI scans (Glioma, Meningioma, Pituitary) with Grad-CAM visual heatmaps.',
    problem:
      'Manual radiological classification of brain tumors from multi-modal MRI scans is time-intensive and susceptible to fatigue, delaying critical neurosurgical decisions.',
    solution:
      'Couples CNN feature extractors with cross-attention fusion to process T1, T2, and FLAIR slices simultaneously, outputting high-confidence classifications with Grad-CAM heatmaps.',
    architecture:
      'MRI Preprocessing Pipeline → Dual-Stream CNN-Transformer Feature Backbone → Cross-Attention Fusion → Grad-CAM Visualizer.',
    metrics:
      '99.4% Multi-Class Accuracy across Glioma, Meningioma, and Pituitary tumors; <1.2s inference time per patient study.',
    tech: ['PyTorch', 'TensorFlow', 'OpenCV', 'FastAPI', 'React.js', 'Docker'],
    github: 'https://github.com/dharanidh-02',
    link: '#',
  },
  {
    id: 'pofd-net',
    title: 'POFD-Net',
    subtitle: 'Early Organ Failure Detection Platform',
    category: 'AI / Healthcare',
    badge: 'NEW',
    match: '98% Match',
    year: '2026',
    rating: 'ICU PREDICTIVE',
    description:
      'Continuous biometric telemetry ingestion platform utilizing temporal Bi-LSTM and GRU sequence architectures to forecast systemic multi-organ deterioration up to 18.4 hours prior to acute failure.',
    problem:
      'In critical care units, systemic multi-organ dysfunction syndrome often presents clinically only after irreversible cellular damage has occurred.',
    solution:
      'Ingests longitudinal vital signs (SpO2, blood pressure, pulse, lactate, creatinine) to compute dynamic organ degradation scores up to 24 hours prior to acute event onset.',
    architecture:
      'Biometric Telemetry Stream → Temporal Bi-LSTM & GRU Sequence Layer → Multi-Organ Degradation Regressor → Real-Time Webhook Alert Dispatcher.',
    metrics:
      '98.2% Sensitivity on ICU benchmark datasets with an average early detection window of 18.4 hours before acute event onset.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'Scikit-learn', 'Time-Series', 'React.js', 'PostgreSQL'],
    github: 'https://github.com/dharanidh-02',
    link: '#',
  },
  {
    id: 'rocksense',
    title: 'RockSense',
    subtitle: 'AI-Based Rockfall Prediction & Mine Alert System',
    category: 'AI / Safety Systems',
    badge: '#1 IN SAFETY',
    match: '99% Match',
    year: '2025–26',
    rating: 'SIH FINALIST',
    description:
      'Real-time edge computer vision using fine-tuned YOLOv11 fused with IoT micro-tilt and ultrasonic sensors mounted along mining terraces, triggering immediate acoustic sirens and cloud notifications.',
    problem:
      'Open-pit mining highwalls are prone to unpredictable rockfalls and slope failures, causing equipment destruction and fatal workplace accidents.',
    solution:
      'Edge vision running fine-tuned YOLOv11 on Raspberry Pi coupled with ultrasonic sensors, a 15-second false-positive stabilization filter, and automated sirens.',
    architecture:
      'Terrace Camera Feed → Edge YOLOv11 Crack Detection on Raspberry Pi → 15s Stabilization Window → Cloud WebSocket → Acoustic Sirens.',
    metrics:
      'Ranked Top 64 across South India at IIT Madras PALS InnoWAH!; 97.6% crack localization accuracy with zero false alarms during stress tests.',
    tech: ['YOLOv11', 'OpenCV', 'Python', 'Raspberry Pi', 'WebSockets', 'React.js', 'MongoDB'],
    github: 'https://github.com/dharanidh-02/ai_rockfall-main',
    link: '#',
  },
  {
    id: 'agrisense',
    title: 'AgriSense',
    subtitle: 'Agricultural Decision Intelligence & Crop Pathology',
    category: 'AI / Agriculture',
    badge: 'POPULAR',
    match: '97% Match',
    year: '2025',
    rating: 'PRECISION AGRI',
    description:
      'Precision agriculture mobile application combining drone multi-spectral NDVI aerial imaging, on-device MobileNet leaf pathology classification, and automated IoT micro-irrigation scheduling.',
    problem:
      'Delayed diagnosis of foliar blights and erratic irrigation schedules reduce smallholder crop yields by up to 40%.',
    solution:
      'Combines drone multi-spectral imaging for vegetative vigor analysis with real-time leaf disease classification and automated drip irrigation control.',
    architecture:
      'Spectral Aerial Imagery → MobileNet Leaf Classifier → IoT Soil Moisture Telemetry → Drip Valve Actuator Controller.',
    metrics:
      '96.8% multi-class leaf lesion accuracy with documented 30% water conservation during automated micro-irrigation trials.',
    tech: ['Flutter', 'TensorFlow', 'OpenCV', 'Gemini AI', 'Python', 'IoT'],
    github: 'https://github.com/dharanidh-02/AgriSense',
    link: '#',
  },
  {
    id: 'cardiomind',
    title: 'CardioMind AI',
    subtitle: 'Heart Disease Prediction & Cardiac Telemetry',
    category: 'AI / Healthcare',
    badge: 'HEALTHCARE',
    match: '96% Match',
    year: '2025',
    rating: 'CARDIAC AI',
    description:
      'Predictive cardiology pipeline integrating automated resting ECG waveform analysis with clinical biomarker risk regressions for early cardiovascular risk stratification.',
    problem:
      'Subtle morphological abnormalities in ambulatory ECG signals frequently evade standard diagnostic observation until symptoms escalate.',
    solution:
      'Employs 1D Convolutional Neural Networks on digitized ECG lead signals combined with gradient-boosted decision trees over clinical lab biomarkers.',
    architecture:
      'ECG Signal Filtering & Wavelet Transform → 1D CNN Feature Extractor → Gradient Boosting Biomarker Fusion → Risk Classifier.',
    metrics:
      '96.4% diagnostic sensitivity on MIT-BIH Arrhythmia benchmark dataset with sub-second inference.',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'React.js', 'Pandas'],
    github: 'https://github.com/dharanidh-02',
    link: '#',
  },
  {
    id: 'compatiq',
    title: 'CompatIQ',
    subtitle: 'Intelligent Document & Regulatory Compliance',
    category: 'AI / Document Systems',
    badge: 'ENTERPRISE RAG',
    match: '97% Match',
    year: '2026',
    rating: 'ENTERPRISE RAG',
    description:
      'Enterprise-grade Retrieval-Augmented Generation (RAG) platform performing automated compliance gap analyses against complex multi-jurisdictional legal and technical mandates.',
    problem:
      'Enterprise audit teams spend thousands of manual hours cross-referencing internal technical policies against evolving regulatory frameworks.',
    solution:
      'Builds a deterministic vector retrieval and semantic citation engine that audits documents against statutory standards with zero hallucination guarantee.',
    architecture:
      'Statute Document Chunking → Hybrid Dense/Sparse Vector Embeddings in ChromaDB → Strict Verifier Layer → Executive Audit Generator.',
    metrics:
      '<1.4s verified statutory clause retrieval with 100% cited provenance verification across tested corporate policies.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'React.js', 'Tailwind CSS'],
    github: 'https://github.com/dharanidh-02',
    link: '#',
  },
  {
    id: 'crm',
    title: 'College CRM',
    subtitle: 'Role-Based Academic Management Platform',
    category: 'Full Stack / Cloud',
    badge: 'BYTS INDIA',
    match: '99% Match',
    year: '2025',
    rating: 'ENTERPRISE CRM',
    description:
      'Production-grade institutional management system built during industry internship at BYTS India, offering role-based authentication, student analytics, and attendance telemetry on AWS.',
    problem:
      'Academic departments struggle with fragmented software silos for attendance tracking, student marks entry, and faculty reporting.',
    solution:
      'Single consolidated platform with strict JWT role separation (Admins, Faculty, Teachers), automated report generators, and clustered MongoDB storage.',
    architecture:
      'React.js SPA with Tailwind CSS → Express.js API Gateway with RBAC → MongoDB Atlas Sharded Cluster → AWS Cloud Infrastructure.',
    metrics:
      'Production deployment serving real departmental workloads with zero downtime and automated PDF/Excel grade report exports.',
    tech: ['MongoDB Atlas', 'Express.js', 'React.js', 'Node.js', 'AWS', 'Tailwind CSS'],
    github: 'https://github.com/dharanidh-02/Mern_CRM',
    link: 'https://clg-crm.netlify.app/',
  },
  {
    id: 'studycore',
    title: 'StudyCore AI',
    subtitle: 'Smart Academic Engine & AI Study Assistant',
    category: 'AI / Education',
    badge: 'EDUCATION',
    match: '95% Match',
    year: '2025',
    rating: 'ACADEMIC AI',
    description:
      'Intelligent student learning assistant integrating document parsing, conceptual flashcard synthesis, and dynamic quiz generation powered by Gemini API and IBM Granite.',
    problem:
      'College students waste considerable time manually distilling dense multi-hundred-page textbooks into actionable revision summaries.',
    solution:
      'Extracts key conceptual hierarchies from uploaded PDFs, generating interactive flashcard decks, spaced-repetition quizzes, and video recommendations.',
    architecture:
      'PDF Text Extraction & Semantic Chunking → Gemini API Synthesis Pipeline → Interactive React Quiz Engine.',
    metrics:
      'Automated revision deck generation in under 2.5 seconds per textbook chapter with high semantic retention.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Gemini AI', 'IBM Granite', 'Tailwind CSS'],
    github: 'https://github.com/dharanidh-02/StudyCore',
    link: '#',
  },
  {
    id: 'aquagrid',
    title: 'AquaGrid AI',
    subtitle: 'Smart Water Monitoring & Leak Detection',
    category: 'IoT / Full Stack',
    badge: 'IOT & SMART CITY',
    match: '96% Match',
    year: '2025',
    rating: 'SMART UTILITY',
    description:
      'IoT smart water distribution telemetry platform monitoring pipe pressure gradients, acoustic leak signatures, and automated consumption billing.',
    problem:
      'Municipal and campus water distribution networks lose up to 35% of total volume to undetected subterranean pipe ruptures.',
    solution:
      'Microcontroller sensor nodes measure ultrasonic flow and pressure continuously, dispatching immediate anomaly alerts to maintenance crews.',
    architecture:
      'ESP32 Sensor Arrays → MQTT Broker → InfluxDB Time-Series Engine → React Real-Time Telemetry Dashboard.',
    metrics:
      'Pinpointed pipeline pressure anomalies within 45 seconds of simulation onset with 98% localization accuracy.',
    tech: ['IoT', 'ESP32', 'Machine Learning', 'Node.js', 'React.js', 'MQTT', 'InfluxDB'],
    github: 'https://github.com/dharanidh-02/AquaGrid',
    link: '#',
  },
  {
    id: 'gigshield',
    title: 'GigShield',
    subtitle: 'Parametric Insurance Platform for Gig Workers',
    category: 'Fintech / Full Stack',
    badge: 'PARAMETRIC',
    match: '95% Match',
    year: '2025',
    rating: 'PARAMETRIC',
    description:
      'Parametric micro-insurance engine designed for delivery and rideshare gig economy workers with automated climate payouts triggered by certified weather APIs.',
    problem:
      'Gig workers suffer severe daily income loss during extreme downpours and floods without access to conventional insurance claim infrastructure.',
    solution:
      'Implements zero-touch parametric payouts where smart contracts execute automatic bank transfers as soon as certified weather station APIs confirm flood thresholds.',
    architecture:
      'Dynamic Risk Pricing Engine → Live Weather API Listener → Anti-Spoofing GPS Route Filter → Express.js Settlement Webhook.',
    metrics:
      'Sub-second automated claim approval and algorithmic premiums calibrated to hyperlocal flood risk frequency.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Machine Learning', 'REST APIs'],
    github: 'https://github.com/Ivis7vj/gigsheild',
    link: '#',
  },
]
