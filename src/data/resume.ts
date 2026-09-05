export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const profile = {
  name: "Jeffery H. Brown",
  displayName: "Jeff Brown",
  title:
    "Systems Programmer · Developer · Systems Engineer · Software QA Specialist",
  email: "jhbmac@pobox.com",
  emailLabel: "jhbmac@pobox.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jeff-brown-959a74b",
    github: "https://github.com/jhbmac",
  },
};

export const summary =
  "Over 25 years of experience working with software and systems as a systems programmer, developer, systems engineer, and software Quality Assurance specialist. Expertise and proven experience developing QA methodologies, developing and implementing testing automation systems, and writing test plans, product documentation, and technical training. Successfully managed all aspects of software project lifecycle, from requirements definition through budgeting, planning, scheduling, testing, and delivery. Customer-facing as well as supervisory and management experience.";

export const skills = [
  {
    label: "Hardware",
    items: [
      "IBM S/370",
      "IBM S/390",
      "Open Systems (HP-UX, IBM, Sun)",
      "Intel",
      "Apple",
    ],
  },
  {
    label: "Communications",
    items: [
      "Cisco routers and switches",
      "3Com routers and hubs",
      "Comten Front End Processors",
      "IBM 37XX Communications Controllers",
    ],
  },
  {
    label: "Systems",
    items: [
      "IBM VSE/SP",
      "IBM MVS/XA",
      "IBM VM",
      "Unix",
      "Windows Family",
      "Netware",
      "Linux",
    ],
  },
  {
    label: "Methodologies and Protocols",
    items: ["COM/DCOM", "DCE", "SOAP", "REST"],
  },
  {
    label: "Languages",
    items: [
      "360/370 Assembly",
      "COBOL",
      "PL/I",
      "FORTRAN",
      "PASCAL",
      "C/C++",
      "Visual Basic",
      "Perl",
      "HTML",
      "Java",
      "PL/SQL",
      "XML",
      "Script",
      "Ruby",
    ],
  },
  {
    label: "Databases",
    items: ["Oracle", "MS-SQL", "MySQL", "DB/2"],
  },
  {
    label: "Applications",
    items: [
      "Utilities such as ISPF, SQLPlus, PVCS, Perforce, Subversion, Git",
      "Applications such as Lotus Notes, multi-media applications, and many 4GL development tools",
      "Call Tracking/Management",
      "Test Case Tracking/Management",
      "Exchange, Transaction and Site Servers",
      "Microsoft Windows/Office, MS Project",
      "IIS and Apache Web servers",
      "Glassfish Application Server",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "VP Quality Assurance Engineering",
    organization: "Home Lending Pal",
    location: "",
    dates: "August 2021 – August 2022",
    bullets: [
      "Strategic and tactical implementation of quality assurance practices in a FinTech company",
      "Developed scripts using Selenium WebDriver to automate testing of web-based application",
      "Developed scripts to automate testing of iOS and Android application using Xcode and Android Debugging Tool",
    ],
  },
  {
    role: "Engineering Support/Quality Assurance Team Lead",
    organization: "Validic",
    location: "Durham, NC",
    dates: "September 2014 – June 2021",
    bullets: [
      "Team lead for Engineering Support/QA Team for an mHealth company",
      "Supervise day-to-day operations of QA and Engineering Support team",
      "Implement process control, test management, and test automation",
      "Define and implement needs for test tools, defect tracking tools, and metrics for testing and defect tracking",
      "Test cloud based mHealth product components",
      "Analyze customer support issue for root cause; recommend code fixes for product defects reported by customer issues",
      "Recommend data reconciliation and mitigation solutions",
      "Coordinated with device partners on status of APIs and customer reported issues",
    ],
  },
  {
    role: "Software Quality Assurance Consultant",
    organization: "Validic",
    location: "",
    dates: "June 2014 – September 2014",
    bullets: [
      "Identify any gaps in current testing process",
      "Make tool and process correction recommendations to senior management",
      "Assist in the implementation of accepted recommendations",
    ],
  },
  {
    role: "Audio/Video Technician (Volunteer)",
    organization: "ProductCamp RTP",
    location: "",
    dates: "2013 – 2014",
    bullets: [
      "Prepared and maintained audio and video equipment for use by presenters during the conference",
    ],
  },
  {
    role: "Consultant",
    organization: "Creoss Business Solutions, LLC",
    location: "Highlands Ranch, CO",
    dates: "December 2009 – December 2012",
    bullets: [
      "Contracted to BMC Software/StreamStep (December 2011): enhanced the StreamStep product manual and scripted installers to support Solaris 10 and Solaris 11",
      "Contracted to National Cinema Advertising Company (March 2011 – June 2011): mentored multiple QA teams during their switch from Waterfall to Agile for a multi-component and multi-database software as a service product line; mentored IT teams managing environments and deployments for Paceline Environment Suites; provided best practices for Agile testing",
      "Contracted to DOD Sub-Contractor (December 2009 – December 2010): filled Business Analyst, Environment Engineering, Application Administrator, QA Manager, and QA Technical Lead roles for a multi-platform SaaS product; wrote comprehensive test cases for positive and negative path testing; executed customer-accepted test cases for UAT as part of the regression set; debugged problems and tested code fixes for Java-based software",
    ],
  },
  {
    role: "Senior Quality Assurance Engineer",
    organization: "Digitalsmiths",
    location: "Morrisville, NC",
    dates: "January 2008 – August 2009",
    bullets: [
      "Designed test plans testing a video indexing software as a service product",
      "Designed, created, and maintained automated testing and test-result analysis scripts",
      "Debugged problems and tested code fixes for Python-based software",
      "Installed, implemented and maintained defect tracking system",
      "Maintained test tool documentation for use by all engineers",
      "Installed, implemented and maintained a multi-guest VMWare test and build environment",
      "Supervised day to day testing of the current Quality Assurance team consisting of three total engineers",
    ],
  },
  {
    role: "Senior Software Verification Engineer",
    organization: "Inlet Technologies",
    location: "Raleigh, NC",
    dates: "January 2007 – December 2007",
    bullets: [
      "Designed comprehensive test plans testing of a video encoding and analysis product line",
      "Designed, created, and maintained automated testing and test-result analysis scripts",
      "Debugged problems and created code fixes for C#/.NET-based product line",
      "Supervised two part-time employees: one intern and one part-time Test Engineer",
      "Created training material for use by new test engineers",
    ],
  },
  {
    role: "Staff Quality Engineer/Technical Lead",
    organization: "Attachmate-NetIQ, Inc.",
    location: "Durham, NC",
    dates: "2003 – 2006",
    bullets: [
      "Designed comprehensive test plans for enterprise-wide testing of an applications management product line",
      "Designed, created, and maintained an enterprise-class testing lab of over 100 UNIX servers and over 200 Windows servers; supported test and build environment",
      "Designed, created, and maintained automated testing and test-result analysis scripts",
      "Debugged reported problems and created code fixes for C++-based product",
      "Continually evaluated new technology, focusing on supported APIs and SDKs",
      "Wrote functional and design specifications for Java/XML-based user interface to IBM server application",
      "Created and managed annual budget for testing lab",
    ],
  },
  {
    role: "Senior Product Developer and Senior Quality Assurance Representative",
    organization: "BMC Software, Inc.",
    location: "Houston, TX",
    dates: "1998 – 2003",
    bullets: [
      "Started as a Quality Assurance Representative; later moved to Development",
      "Designed comprehensive test plans for enterprise-wide testing of a network optimization product line",
      "Designed, created, and maintained a 70-system, 15-server, enterprise-class testing lab",
      "Designed, created, and maintained isolated network configuration for testing lab",
      "Designed, created, and maintained automated testing and test-result analysis scripts",
      "Debugged reported problems and created code fixes for C++-based product graphical interface",
      "Continually evaluated new technology, focusing on supported APIs and SDKs",
      "Completed market research and business plan for $30 million/year product",
      "Wrote functional and design specifications for Java/XML-based user interface to IBM server application",
      "Developed Java-based user interface application",
    ],
  },
  {
    role: "Lead Quality Assurance Representative",
    organization: "Tangram Enterprise Solutions, Inc.",
    location: "Cary, NC",
    dates: "1989 – 1998",
    bullets: [
      "Started as a Senior Technical Support Representative resolving product problems and questions; later moved to Quality Assurance",
      "Managed day-to-day operations of Quality Assurance Team, including project planning and management, annual salary review",
      "Managed a team of one part-time and three full-time employees",
      "Maintained budget for testing lab and made purchasing recommendations for hardware and software",
      "Provided feedback on functional and design specifications for software distribution products",
      "Developed, maintained, and executed product plans for development team",
      "Conducted market research to identify new opportunities for product line",
      "Assisted customers with product installation and implementation",
    ],
  },
  {
    role: "Consultant/Principal",
    organization: "Audicon, Inc.",
    location: "Durham, NC",
    dates: "1988 – 1989",
    bullets: [
      "Started own consulting company; won contract at IBM and became integral part of test team for new version of VTAM for VSE, MVS, and VM",
      "Created product specifications",
      "Marketed professional services",
      "Designed collateral for market communications",
      "Provided responses to Requests for Proposals",
      "Conducted business planning and market analysis",
      "Wrote TSO, JES2, and ACF2 exits",
      "Programmed to IBM APIs and extensively used Software Development Kits",
    ],
  },
  {
    role: "Senior Systems Engineer",
    organization: "Computer Associates International, Inc.",
    location: "Indianapolis, IN",
    dates: "1986 – 1988",
    bullets: [
      "Created functional and design specification for customer implementations",
      "Researched viability of product enhancements and provided estimates of required resources",
      "Conducted product training with customers",
      "Assigned as regional specialist but was used as a national specialist in extreme customer situations",
      "Participated in technical presentations and technical training for disk/tape management, job accounting, and security product lines",
      "Primary for VSE/SP products: Dynam/D, Dynam/T, Dynam/FI, JARS, Top Secret, Scheduler",
      "Primary for MVS/XA products: CA-7, CA-11, ACF/2, JARS",
      "Primary for VM products: ACF/2",
    ],
  },
  {
    role: "Systems Programmer",
    organization: "Old Kent Financial Corp.",
    location: "Grand Rapids, MI",
    dates: "1984 – 1986",
    bullets: [
      "Installed and maintained Computer Associates system software packages Dynam/D, Dynam/T, Dynam/FI, and JARS on production and test systems",
      "Installed and maintained IBM VM/SP and DOS VSE/SP operating systems on production and test systems",
      "Acted as backup systems programmer for COMTEN communications front-end processors",
    ],
  },
  {
    role: "Systems Programmer and Computer Operator",
    organization: "Ruppman Marketing Services",
    location: "Peoria, IL",
    dates: "1979 – 1984",
    bullets: [
      "Installed and maintained IBM DOS VS and VSE operating systems on production network",
      "Assisted application programming staff in debugging dumps and other abend conditions",
      "Ran production operations shift",
    ],
  },
];

export const education = [
  {
    institution: "University of Phoenix",
    detail: "Business – Information Systems",
    dates: "01/1999 – 12/2000",
  },
  {
    institution: "North Carolina State University",
    detail: "Multi-disciplinary Studies",
    dates: "01/1990 – 12/1997",
  },
  {
    institution: "Bradley University",
    detail: "Computer Science",
    dates: "01/1974 – 07/1975",
  },
];

export const certifications = [
  "Paceline Level 2 Certifications",
  "Certified Scrum Master",
];

export const awards = [
  "Tangram: MVP Customer Support/Quality Assurance, 1992",
  "Tangram: Order of the Piranha, 1993",
  "Tangram: President's Award, 1993",
  "BMC Software, Inc.: PM&D Annual Award, 1999",
  "BMC Software, Inc.: OSM Horizon Award, 2000",
  "BMC Software, Inc.: Team Excellence Award, 2000",
];