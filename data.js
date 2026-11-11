// ========================================== */
//             CENTRALIZED PORTFOLIO DATA     //
// ========================================== */

const PORTFOLIO_DATA = {
    coursework: [
        "Engineering Design", "Machine Design", "Solid Mechanics", "Dynamics & Vibrations",
        "Materials & Manufacturing", "Composites", "Aerodynamics", "Rapid Prototyping for Aerospace",
        "Microgravity Experiment Design", "Continuous Control Systems", "Intro to Electrical Engineering",
        "Fluid Mechanics", "Thermodynamics & Heat Transfer", "Computer Graphics & Design",
        "Intro to Machining", "ME Labs I-II"
    ],

    skills: [
        {
            category: "CAD & Design",
            icon: "fa-solid fa-cube",
            description: "Engineering drawings, assembly modeling, and complex design iteration.",
            items: ["SolidWorks", "Siemens NX", "Fusion 360", "CATIA", "AutoCAD"]
        },
        {
            category: "Analysis & Simulation",
            icon: "fa-solid fa-chart-line",
            description: "Structural FEA, thermal evaluation, computational fluid dynamics, and scripting.",
            items: ["Ansys", "SolidWorks FEA", "CFD", "MATLAB/Simulink"]
        },
        {
            category: "Manufacturing & Prototyping",
            icon: "fa-solid fa-industry",
            description: "Rapid prototyping, precision machining, and tooling design.",
            items: ["CNC Machining", "Injection Molding", "3D Printing", "Laser Cutting"]
        },
        {
            category: "Electronics & Hardware",
            icon: "fa-solid fa-microchip",
            description: "PCB layout, board bring-up, microcontroller systems, and circuit modeling.",
            items: ["KiCad", "Eagle", "Soldering & Bring-up", "Arduino"]
        },
        {
            category: "Programming & Tools",
            icon: "fa-solid fa-code",
            description: "Software development, technical documentation, and design suites.",
            items: ["Python", "JavaScript", "HTML/CSS", "Figma", "Google Workspace"]
        },
        {
            category: "Core Engineering",
            icon: "fa-solid fa-gears",
            description: "Design principles, material selection, and rigorous testing protocols.",
            items: ["Machine Design", "Materials Selection", "DFM / DFA", "Test Planning"]
        }
    ],

    experience: [
        {
            role: "Structures Engineer",
            organization: "Columbia Airplane Club, Columbia University",
            period: "Sep 2026 - Present",
            bullets: [
                "Design lightweight primary airframe structures, including wing spars, ribs, and fuselage supports, in SolidWorks for the AIAA Design/Build/Fly competition aircraft.",
                "Perform finite element analysis of structural loads, stress distribution, and deformation to drive material selection, weight optimization, and structural test planning."
            ]
        },
        {
            role: "Controls Engineer",
            organization: "Columbia Space Initiative",
            period: "Jan 2026 - Present",
            bullets: [
                "Developed and iterated CAD models for an in-space 3D printer, including structural frames, print heads, and material-handling systems, under microgravity design constraints.",
                "Evaluated materials and structural performance under thermal variation and launch loads to improve hardware reliability for space-based additive manufacturing."
            ]
        },
        {
            role: "Research Fellow",
            organization: "Dong Group, Columbia University",
            period: "Jan 2026 - Present",
            bullets: [
                "Designed micro-scale components of a steerable neural electrode in SolidWorks and used Ansys FEA to assess stress distribution, bending behavior, and buckling during curved insertion.",
                "Selected polymers by stiffness, flexibility, and biocompatibility and validated performance through gel phantom insertion tests with optical imaging and quantitative data analysis."
            ]
        },
        {
            role: "Research Fellow",
            organization: "Flower Memorial Lab, Columbia University",
            period: "Jun 2025 - Jul 2025",
            bullets: [
                "Designed PCB hardware for a medical fixation device in KiCad, optimizing component layout and engineering a sealed enclosure to protect the electronics.",
                "Modeled series LRC circuits in MATLAB, analyzing voltage drops, current flow, resonance, and transient response to optimize electronic design parameters."
            ]
        },
        {
            role: "Controls Engineer",
            organization: "Columbia University Formula Racing",
            period: "Sep 2023 - May 2025",
            bullets: [
                "Prototyped a redesigned pedal baseplate using 3D printing and laser cutting, then assembled and tested it on the existing chassis to validate fit and function.",
                "Collaborated with teammates to refine design specifications and ensure compatibility with existing vehicle systems while building hands-on manufacturing and assembly experience."
            ]
        },
        {
            role: "Research Assistant",
            organization: "Robotics and Rehabilitation (ROAR) Lab, Columbia University",
            period: "Aug 2024 - May 2025",
            bullets: [
                "Designed and built a robotic neck brace prototype in CAD, expanding head-movement range for mobility and comfort, and developed thread designs that align sensors and joints in parallel to increase stability and eliminate unwanted motion.",
                "Engineered a new PCB layout in Eagle integrating a 5V power supply to improve the functionality and performance of the prototype."
            ]
        },
        {
            role: "Proposal Developer & Researcher",
            organization: "NASA L'SPACE NPWEE Program, Remote",
            period: "Sep 2024 - Dec 2024",
            bullets: [
                "Analyzed experimental data and literature to define proposal metrics for the Basalt Aerogel Shock-absorbing Insulation System, including thermal conductivity and durability across planetary environments.",
                "Modeled the layered insulation design in Siemens NX (aerogel, basalt fiber fabric, polyimide encapsulation) to support design visualization and proposal documentation."
            ]
        }
    ],

    projects: {
        slideToy: {
            title: "Slide to Solve Toy",
            subtitle: "Mechanical Engineering Design & Prototyping (Drawn by Gerald Aguirre & Levis Alvaro)",
            badge: "Product Design",
            image: "Slidetoy.png",
            description: "Designed and engineered a fully interactive mechanical puzzle toy ('Slide to Solve') featuring a multi-component sliding number assembly, internal swing shafts, custom housing, and precision-toleranced ABS plastic components.",
            highlights: [
                "Created complete assembly drawings, exploded views, and individual part blueprints with detailed GD&T dimensions using SolidWorks.",
                "Engineered a Bill of Materials (BOM) specifying Acrylonitrile Butadiene Styrene (ABS) material properties across 9 distinct part assemblies.",
                "Designed interlocking slider mechanisms, slot paths, and sub-panel guides ensuring smooth tactile engagement and mechanical reliability."
            ],
            steps: [
                { title: "Parametric CAD Assembly", desc: "Modeled all 9 core components—including the Game Box, Slider Base, Box Top Sub-Assembly, and Slot Paths—with strict clearance tolerances." },
                { title: "Drafting & Blueprints", desc: "Generated multi-sheet engineering drawings featuring exact geometric dimensions, radius fillets, hole callouts ($4X \\Phi 0.20$), and scale ratios." },
                { title: "Material & BOM Specification", desc: "Compiled a comprehensive Bill of Materials specifying ABS plastic material parameters and precise component quantity requirements." }
            ],
            tags: ["SolidWorks", "Product Design", "Mechanical Assembly", "Rapid Prototyping", "GD&T"]
        },
        jackAssembly: {
            title: "Mechanical Jack Assembly & Machined Links",
            subtitle: "CAM Programming, CNC Machining & 3D Printing Workflow",
            badge: "Manufacturing & CAM",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
            description: "Executed a comprehensive hybrid manufacturing and assembly project to build a working mechanical jack. Combined additive manufacturing for custom left and right link arms with Computer-Aided Manufacturing (CAM) and CNC machining for precision structural blocks.",
            highlights: [
                "Programmed toolpaths and generated G-code using CAM software for precision CNC machining of metal/plastic blocks.",
                "3D printed custom left and right link arms with optimized infill densities for high structural rigidity and load-bearing performance.",
                "Performed tolerance stack-up analysis and final physical assembly, integrating pins, fasteners, and links for smooth mechanical operation."
            ],
            steps: [
                { title: "CAM Toolpath Generation", desc: "Developed optimal CNC milling strategies, speeds, feeds, and toolpaths in CAM software for block components." },
                { title: "CNC Block Machining", desc: "Machined stock blocks on the CNC mill, ensuring strict dimensional tolerances and clean surface finishes." },
                { title: "3D Printing Custom Links", desc: "Fabricated precision left and right link components via additive manufacturing to handle complex articulated loads." },
                { title: "Mechanical Assembly & Fit-Up", desc: "Fitted pins, fasteners, and machined blocks together with the 3D printed links to construct and test the functional jack assembly." }
            ],
            tags: ["CAM", "CNC Machining", "3D Printing", "Rapid Prototyping", "Mechanical Assembly"]
        },
        airplaneCAD: {
            title: "Toy Airplane CAD Modeling & Reverse Engineering",
            subtitle: "SolidWorks Surface & Parametric Modeling",
            badge: "CAD & Modeling",
            image: "IMG_1200.JPG",
            description: "Reverse-engineered a physical toy airplane by taking precise digital caliper measurements and implementing advanced SolidWorks tools, including surface lofts, wraps, revolved features, reference planes, and flex tools.",
            highlights: [
                "Captured complex organic curves and transition contours of the aircraft body using precise caliper measurements.",
                "Utilized advanced SolidWorks modeling tools such as lofts, wraps, revolved bosses, and reference planes to replicate aerodynamic geometry.",
                "Addressed sketch constraint conflicts and managed feature tree dependencies to ensure robust parametric rebuild stability."
            ],
            steps: [
                { title: "Physical Measurement & Scoping", desc: "Acquired critical dimensions with calipers, managing irregular curves and fine propeller details." },
                { title: "Advanced Lofts & Surface Modeling", desc: "Employed lofts, wraps, and revolved features to smoothly transition between organic body shapes and aerodynamic wings." },
                { title: "Rebuild Stability & Refinement", desc: "Resolved constraint conflicts and structured feature trees for robust parametric editing and design intent." }
            ],
            tags: ["SolidWorks", "Reverse Engineering", "Surface Modeling", "Lofts & Curves", "Design Intent"]
        },
        spacePrinter: {
            title: "In-Space 3D Printer",
            subtitle: "Columbia Space Initiative",
            badge: "Space Systems",
            image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
            description: "Developed and iterated comprehensive CAD models for an in-space 3D printer under microgravity design constraints. Engineered structural frames, print heads, and material-handling sub-assemblies.",
            highlights: [
                "Performed rigorous finite element simulations to evaluate structural performance under thermal variation and launch loads.",
                "Optimized material selection to maximize system reliability and minimize mass for space deployment.",
                "Collaborated across multidisciplinary student engineering teams to align mechanical sub-systems with avionics."
            ],
            steps: [
                { title: "Conceptual CAD Modeling", desc: "Designed modular print-head assemblies and lightweight titanium frames in SolidWorks, accounting for microgravity constraints." },
                { title: "FEA Thermal & Launch Simulation", desc: "Executed structural stress analysis under simulated vibrational launch profiles and thermal gradient fluctuations." },
                { title: "Prototyping & Integration", desc: "Fabricated functional test articles and integrated extrusion mechanisms with avionics control boards." }
            ],
            tags: ["SolidWorks", "FEA Analysis", "Thermal Testing", "Additive Manufacturing"]
        },
        neuralElectrode: {
            title: "Steerable Neural Electrode",
            subtitle: "Dong Group, Columbia University",
            badge: "Biomedical Engineering",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
            description: "Designed micro-scale components for a steerable neural electrode in SolidWorks and utilized Ansys FEA to evaluate stress distribution, bending behavior, and buckling during curved tissue insertion.",
            highlights: [
                "Selected advanced polymers based on precise stiffness, flexibility, and biocompatibility metrics.",
                "Validated physical performance through gel phantom insertion tests paired with optical imaging.",
                "Conducted quantitative data analysis to refine structural geometry and minimize tissue deflection."
            ],
            steps: [
                { title: "Micro-Component Design", desc: "Drafted flexible polymer micro-electrode structures in SolidWorks optimized for minimal tissue trauma." },
                { title: "Ansys FEA Buckling Analysis", desc: "Simulated curved insertion vectors to prevent premature buckling and ensure smooth tissue tracking." },
                { title: "Gel Phantom Validation", desc: "Performed physical insertion tests into transparent hydrogel phantoms, capturing optical displacement data." }
            ],
            tags: ["SolidWorks", "Ansys FEA", "Polymer Selection", "Optical Imaging"]
        },
        aerogelSystem: {
            title: "Basalt Aerogel Shock-Absorbing Insulation System",
            subtitle: "NASA L'SPACE NPWEE Program",
            badge: "Aerospace & NASA",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
            description: "Researched and proposed advanced thermal insulation metrics for planetary exploration environments under NASA's NPWEE program.",
            highlights: [
                "Analyzed experimental literature to define thermal conductivity and shock-absorbing durability across harsh planetary temperatures.",
                "Modeled layered insulation assemblies in Siemens NX incorporating aerogel, basalt fiber fabric, and polyimide encapsulation.",
                "Authored comprehensive proposal documentation supporting mission feasibility and visualization."
            ],
            steps: [
                { title: "Thermal Literature Review", desc: "Synthesized baseline thermal conductivity and impact dissipation metrics for extreme planetary surfaces." },
                { title: "Layered CAD Assembly in Siemens NX", desc: "Modeled composite sandwich layers combining aerogel cores, basalt fabric, and polyimide films." },
                { title: "NASA Proposal Synthesis", desc: "Compiled comprehensive technical documentation, mission cost estimates, and deployment feasibility reports." }
            ],
            tags: ["Siemens NX", "Thermal Analysis", "Aerospace Proposal", "Material Modeling"]
        },
        neckBrace: {
            title: "Robotic Neck Brace Prototype",
            subtitle: "Robotics and Rehabilitation (ROAR) Lab",
            badge: "Robotics & Rehab",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
            description: "Designed and built an advanced robotic neck brace prototype in CAD to expand head-movement range, comfort, and therapeutic mobility.",
            highlights: [
                "Engineered novel thread designs aligning sensors and mechanical joints in parallel to boost stability and eliminate unwanted motion.",
                "Developed a new custom PCB layout in Eagle integrating a 5V power supply to drive prototype actuation and sensor readout.",
                "Conducted iterative physical testing and ergonomic evaluations."
            ],
            steps: [
                { title: "Ergonomic CAD Iteration", desc: "Modeled articulated support brackets and parallel linkage mechanisms for smooth patient head motion." },
                { title: "Eagle PCB Integration", desc: "Designed custom power regulation circuitry and sensor interface boards to drive onboard actuators." },
                { title: "Assembly & Range Testing", desc: "Assembled physical prototype hardware and calibrated feedback sensors for ergonomic performance." }
            ],
            tags: ["CAD Modeling", "Eagle PCB", "Sensor Alignment", "Robotics"]
        }
    ],

    certifications: [
        {
            title: "QuestBridge Scholar",
            date: "Awarded 2022",
            description: "National recognition supporting exceptional academic achievement and leadership.",
            icon: "fa-solid fa-certificate"
        },
        {
            title: "10,000 Degrees Scholar",
            date: "Awarded 2022",
            description: "Scholarship and professional mentorship program backing higher education.",
            icon: "fa-solid fa-award"
        },
        {
            title: "Students Rising Above Scholar",
            date: "Awarded 2022",
            description: "Comprehensive leadership and career development fellowship.",
            icon: "fa-solid fa-medal"
        }
    ]
};