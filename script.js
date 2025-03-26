const categories = {
    "ESAS SUPER 3": [
      {
        "question": "If the mass on a body were doubled, its acceleration due to gravity would be",
        "choices": ["doubled", "haived", "unchanged", "four times"],
        "answer": "unchanged"
    },
    {
        "question": "Which of the following anchor is designed for medium and heavy weight fastening in solid materials?",
        "choices": ["Anchor clamp", "Toggle bolt anchor", "wall grip anchor", "stud-bolt anchor"],
        "answer": "stud-bolt anchor"
    },
    {
        "question": "Under which type of loading does fatigue occur?",
        "choices": ["Static load", "Plane load", "Repeated load", "Higher load"],
        "answer": "Repeated load"
    },
    {
        "question": "The ratio of the moment of inertia of the cross-section of the beam to the section modulus.",
        "choices": ["Equal to the radius gyration", "Equal to the area of the cross-section", "Measure a distance", "Dependent on the modulus of elasticity of the beam measure"],
        "answer": "Measure a distance"
    },
    {
        "question": "Unit of Strain is",
        "choices": ["meter", "milimeter", "MPa", "unitless"],
        "answer": "unitless"
    },
    {
        "question": "Poisson's ratio is the ratio of the",
        "choices": [
            "Unit lateral deformation to the unit longitudinal deformation",
            "Unit stress to unit strain",
            "Elastic limit to proportional limit",
            "Shear strain to compressive strain"
        ],
        "answer": "Unit lateral deformation to the unit longitudinal deformation"
    },
    {
        "question": "A simple beam 'L' meters long carries a concentrated load of 'P' Newtons at the midspan. What is the maximum bending moment of the beam?",
        "choices": ["PL/4", "PL2/4", "PL/2", "PL2/6"],
        "answer": "PL/4"
    },
    {
        "question": "Which of the following are NOT units of pressure?",
        "choices": ["Pa", "N/m²", "bars", "kg/m²"],
        "answer": "kg/m²"
    },
    {
        "question": "Device used to measure the velocity of a liquid?",
        "choices": ["Venturi meter", "Manometer", "Bourdon gauge", "Pitot tube"],
        "answer": "Pitot tube"
    },
    {
        "question": "The following valves are used for shut-off service. Which one is NOT included?",
        "choices": ["plug cock", "ball valve", "butterfly valve", "gate valve"],
        "answer": "butterfly valve"
    },
    {
        "question": "Under which of the following conditions is Bernoulli's equation valid?",
        "choices": [
            "All points evaluated must be on the same streamline",
            "The fluid must be incompressible",
            "The fluid must be inviscid",
            "All of the above"
        ],
        "answer": "All of the above"
    },
    {
        "question": "Point at which solid, liquid and vapor forms of a substance simultaneously exist.",
        "choices": ["Critical", "Boiling", "Triple", "Flash"],
        "answer": "Triple"
    },
    {
        "question": "How does an adiabatic process compare to an isentropic process?",
        "choices": [
            "adiabatic: heat transfer = 0; isentropic: heat transfer ≠ 0",
            "adiabatic: heat transfer ≠ 0; isentropic: heat transfer = 0",
            "adiabatic: reversible; isentropic: not reversible",
            "both: heat transfer = 0; isentropic: reversible"
        ],
        "answer": "both: heat transfer = 0; isentropic: reversible"
    },
    {
        "question": "An open system of First Law of Thermodynamics should be utilized for all the following, EXCEPT",
        "choices": ["A turbine", "A compressor", "A piston-cylinder device with no inlet/outlet", "A nozzle"],
        "answer": "A piston-cylinder device with no inlet/outlet"
    },
    {
        "question": "What law of nature underpins the concept of balanced chemical equation?",
        "choices": ["Gay-Lussac Law", "Faraday's Law", "Second law of thermodynamics", "First law of Thermodynamics"],
        "answer": "First law of Thermodynamics"
    },
    {
        "question": "Which of the following thermodynamic cycles is the most efficient?",
        "choices": ["Brayton", "Rankine", "Carnot", "Combined Brayton-Rankine"],
        "answer": "Carnot"
    },
    {
        "question": "What cycle is used for cooling system for aircraft?",
        "choices": ["Bell-Coleman", "Carnot", "Brayton", "Reverse Brayton"],
        "answer": "Bell-Coleman"
    },
    {
        "question": "What is the charge of elements that belongs to group 2A (IIA)?",
        "choices": ["+1", "-1", "+2", "-2"],
        "answer": "+2"
    },
    {
        "question": "In electrolysis, the anions migrate to the anode. Which of the following ions migrate to the other electrode?",
        "choices": ["Acidic ions", "Neutral ions", "Basic ions", "Cations"],
        "answer": "Cations"
    },
    {
        "question": "What is the chemical symbol for Calcium Chloride?",
        "choices": ["CaCl3", "CaCl2", "Ca2Cl", "Ca3Cl"],
        "answer": "CaCl2"
    },
    {
        "question": "What per cent of human body is carbon?",
        "choices": ["24%", "18%", "15%", "20%"],
        "answer": "18%"
    },
    {
        "question": "What is the percent of alcohol in a 90-proof whisky?",
        "choices": ["40%", "45%", "90%", "10%"],
        "answer": "45%"
    },
    {
        "question": "What field of study encompasses the procurement and production of metals?",
        "choices": ["Metallurgy", "Geology", "Material Science", "Metalgraphy"],
        "answer": "Metallurgy"
    },
    {
        "question": "How many atoms are in the unit cell of a body-centered cubic (BCC) structure?",
        "choices": ["1", "2", "3", "4"],
        "answer": "2"
    },
    {
        "question": "What is the generic name of a class of polymer which is commercially known as nylon?",
        "choices": ["Polyacetals", "Polyamide", "Cellulose", "Polyester"],
        "answer": "Polyamide"
    },
    {
        "question": "For completely corrosion-resistant stainless steel, what minimum percentage of chromium in the alloy is required?",
        "choices": ["1.1%", "3.2%", "15%", "11%"],
        "answer": "11%"
    },
    {
        "question": "Which of the following materials is NOT a viscoelastic material?",
        "choices": ["plastic", "metals", "concrete", "glass"],
        "answer": "metals"
    },
    {
        "question": "What type of materials usually has a higher index of refraction?",
        "choices": ["Lighter materials", "Heavier materials", "less dense materials", "denser materials"],
        "answer": "denser materials"
    },
    {
        "question": "Which of the following bus has a function of directing memory and I/O devices transfer?",
        "choices": ["Data", "Device", "Address", "Control"],
        "answer": "Control"
    },
    {
        "question": "On systems where there are multiple operating systems, the decision to load a particular one is done by?",
        "choices": ["File control block", "Process control block", "boot loader", "bootstrap"],
        "answer": "boot loader"
    },
    {
        "question": "What is the standardized communication technique for expressing instructions to a computer?",
        "choices": ["flow chart", "programming language", "algorithm", "logic"],
        "answer": "programming language"
    },
    {
        "question": "Is an act of sending e-mail or creating web pages that are designed to collect an individual's online bank, credit card or other login information?",
        "choices": ["Phishing", "Spam", "Hacking", "Malware"],
        "answer": "Phishing"
    },
    {
        "question": "What do you call a person who gains illegal access to a computer system?",
        "choices": ["Computer enthusiasts", "Electronic enthusiasts", "Hacker", "Computer pirate"],
        "answer": "Hacker"
    },
    {
        "question": "Which of the following computer program is NOT considered open-source software?",
        "choices": ["Firefox", "Microsoft office", "Linux", "OpenOffice.org"],
        "answer": "Microsoft office"
    },
    {
        "question": "A technician has installed a new video card and the computer will now only boot into VGA mode. Which of the following may be the cause of the problem?",
        "choices": ["There is an operating system incompatibility.", "The external monitor is not compatible", "The new card is not DVI compatible", "The incorrect drivers are installed"],
        "answer": "The incorrect drivers are installed"
    },
    {
        "question": "When installing the heatsink back into a computer after replacing a failed processor, which of the following must be done during installation?",
        "choices": ["Thermal compound must be installed between processor and heatsink.", "Thermal compound must be installed between processor and system board", "An isopropyl alcohol pad must be placed between the processor and the heatsink", "An isopropyl alcohol pad must be placed between the processor and the system board."],
        "answer": "Thermal compound must be installed between processor and heatsink."
    },
    {
        "question": "Matthew is downloading an 800 kB file from the internet using his 28.8 k modem. How long will it take him to finish downloading?",
        "choices": ["0.46 min", "3.7 min", "3.8 min", "4.1 min"],
        "answer": "3.7 min"
    },
    {
        "question": "In a spreadsheet, the formula $A$3+$B3+D2 is entered into cell C2. The contents of cell C2 are copied and pasted into cell D5. The formula in cell D5 is?",
        "choices": ["$A$3+CS2+C4", "$B$6+SC4+C4", "$A$3+$B6+E5", "$A$3+$B2+B2"],
        "answer": "$A$3+$B6+E5"
    },
    {
        "question": "Which function is NOT provided by the MATLAB Mathematical function library?",
        "choices": ["Bessel functions", "Matrix eigenvalues", "Fourier transforms", "Line diagram"],
        "answer": "Line diagram"
    },
    {
        "question": "The MATLAB command will correctly define x, y, and z as symbols?",
        "choices": ["syms (x,y,z)", "syms xyz", "sym (x, y,z)", "sym x,y,z"],
        "answer": "syms (x,y,z)"
    },
{
        "question": "MATLAB command for getting the roots of 3x^2-4x+7=0",
        "choices": ["Roots", "Poly", "Polyfit", "Plot"],
        "answer": "Roots"
    },
    {
        "question": "By default, all the files in C++ are opened in ___ mode.",
        "choices": ["Binary", "VTC", "ISCII", "Text"],
        "answer": "Text"
    },
    {
        "question": "In financial accounting another term for Acid Test Ratio is",
        "choices": ["Quick ratio", "Current ratio", "Profit margin ratio", "Price-earning ratio"],
        "answer": "Quick ratio"
    },
    {
        "question": "Future worth is equivalent to _",
        "choices": ["P(1+n)Nj", "Pi1+nj^(n-1)", "P(1+i)^n", "Pi1+i)^(-n)"],
        "answer": "P(1+i)^n"
    },
    {
        "question": "Which of the following expressions is INCORRECT?",
        "choices": [
            "The future worth of a present amount, (F/P, i, n)= 1/(P/F, i,n)",
            "The future worth of an annuity, (F/A,i, n)= 1/(AAF,i, n)",
            "The present worth of an annuity,(P/A,i n) = iA/P, i, n)",
            "(ArF i, n)-i=(AP,i, n)"
        ],
        "answer": "(ArF i, n)-i=(AP,i, n)"
    },
    {
        "question": "The amount of property in which a willing buyer will pay to a willing seller for a property when neither one is under the compulsion to buy nor sell is called _ value.",
        "choices": ["Goodwill", "Second-hand", "Market", "Fair"],
        "answer": "Market"
    },
    {
        "question": "What refers to the establishing interrelationships between people and things in such a way that human and material resources are effectively focused toward achieving the goal of the company?",
        "choices": ["Planning", "Leading", "Organizing", "Controlling"],
        "answer": "Organizing"
    },
    {
        "question": "Which of the following techniques must a manager use if he decides to absorb the risk in the project?",
        "choices": [
            "Use a different technology",
            "Buying insurance",
            "Use a different supplier",
            "Create buffer in the form of management reserve or extra time to schedule"
        ],
        "answer": "Create buffer in the form of management reserve or extra time to schedule"
    },
    {
        "question": "A bank is advertising 9.5% account that yield 9.84% annually. Find how often interest is compounded.",
        "choices": ["Monthly", "Bimonthly", "Annually", "Quarterly"],
        "answer": "Monthly"
    },
    {
        "question": "When was R.A. 7920 passed by the House of Representatives and the Senate?",
        "choices": ["February 14, 1995", "February 21, 1994", "February 24, 1995", "February 21, 1995"],
        "answer": "February 21, 1994"
    },
    {
        "question": "Which is NOT a requirement for PRBEE?",
        "choices": [
            "At least 40 yrs old, good moral conduct",
            "At least 10 yrs experience",
            "Resident of the PH for 5 consecutive years",
            "Graduated BSEE from a PH-gov't recognized institution"
        ],
        "answer": "Resident of the PH for 5 consecutive years"
    },
    {
        "question": "Based on section 18 of R.A. 7920, the minimum age requirement for qualifications of applicants for Registered Master Electrician (RME) examination is at least _ years of age.",
        "choices": ["18", "19", "21", "23"],
        "answer": "19"
    },
    {
        "question": "What is Rule 11 in R.A. 7920?",
        "choices": ["Action on Communication", "Places and Dates of Examinations", "Program of Examination", "Publication of Examination"],
        "answer": "Places and Dates of Examinations"
    },
    {
        "question": "Which of the following is qualified as the chairman of the Continuing Professional Development Council for Electrical Engineering?",
        "choices": [
            "Representative from Association of Professional Organization (APO)",
            "PRBEE board member",
            "Representative from Academy",
            "PRC Commissioner"
        ],
        "answer": "PRBEE board member"
    },
    {
        "question": "Electrical equipment must be grounded to ensure that dangerous voltage on metal parts resulting from a ground fault can be reduced to a safe value. (I. True, II. False)",
        "choices": ["I only", "II only", "Both I or II", "Either I or II"],
        "answer": "I only"
    },
    {
        "question": "Rod and pipe electrodes shall NOT be less than ___ mm in length.",
        "choices": ["1,500", "2,400", "1,800", "2,800"],
        "answer": "2,400"
    },
    {
        "question": "Which of the following insulation color identifies the grounded conductor of a branch circuit?",
        "choices": ["Black", "Yellow", "Green", "White"],
        "answer": "White"
    },
    {
        "question": "Which of the following is NOT a hazardous practice?",
        "choices": [
            "Using the right tools/equipment",
            "Using improvised tools",
            "Servicing equipment in motion",
            "Operating without authority"
        ],
        "answer": "Using the right tools/equipment"
    },
    {
        "question": "What is the standard color for safety signages to indicate the presence of radiation hazards, example in the X-ray laboratory in the hospital?",
        "choices": ["Green with combination of red", "Orange", "Blue", "Purple with combination of yellow"],
        "answer": "Purple with combination of yellow"
    },
{
        "question": "What is the Law for renewable energy?",
        "choices": ["R.A. 9136", "R.A. 11285", "R.A. 11361", "R.A. 9513"],
        "answer": "R.A. 9513"
    },
    {
        "question": "Tall growing plants refer to plants, vines, and other plant species, which grow or have the potential to grow more than _ in height from the ground.",
        "choices": ["2 meters", "5 meters", "1 meter", "3 meters"],
        "answer": "3 meters"
    },
    {
        "question": "The land beneath, the air spaces surrounding, and the area traversed by power lines including its horizontal, vertical, and similar clearance requirements shall constitute the ___",
        "choices": ["Creepage distance", "Private property", "Power line corridor", "Public property"],
        "answer": "Power line corridor"
    }

],

"EE SUPER 3": [

    {
        "question": "In a wye-delta (4 wires) system, what color is use to identify the phase with maximum voltage to neutral (high leg)?",
        "choices": ["Yellow", "Red", "Orange", "Black"],
        "answer": "Orange"
    },
    {
        "question": "The units of capacitance are",
        "choices": ["volts/coulomb", "coulombs/volts", "ohms", "henry/b"],
        "answer": "coulombs/volts"
    },
    {
        "question": "The total electric flux through any closed surface surrounding charges is equal to the amount of charge enclosed. The above statement is associated with",
        "choices": ["Coulomb's square law", "Gauss's law", "Maxwell's first law", "Maxwell's second law"],
        "answer": "Gauss's law"
    },
    {
        "question": "What is the maximum output of cellular transmitter?",
        "choices": ["30 W", "60W", "6W", "3W"],
        "answer": "3W"
    },
    {
        "question": "The breakdown voltage for paper capacitors is usually",
        "choices": ["20 to 60 volts", "200 to 1600 volts", "2000 to 3000 volts", "more than 10000 volts"],
        "answer": "200 to 1600 volts"
    },
    {
        "question": "In Philippine Grid Code, which alert issued by the system operator when the contingency reserve is zero, a generation deficiency exists, or there is critical loading or imminent overloading of transmission lines and equipment?",
        "choices": ["Blue Alert", "Red Alert", "Yellow Alert", "Security Alert"],
        "answer": "Red Alert"
    },
    {
        "question": "The two conductors of a transmission line carry equal current l in opposite direction. The force on each conductor is",
        "choices": ["proportional to I", "proportional to distance between conductors", "proportional to I^2", "inversely proportional to I^2"],
        "answer": "proportional to I^2"
    },
    {
        "question": "A material which is slightly repelled by a magnetic field is known as",
        "choices": ["ferromagnetic material", "diamagnetic material", "paramagnetic material", "conducting material"],
        "answer": "diamagnetic material"
    },
    {
        "question": "The ratio of intensity of magnetization to the magnetization force is known as",
        "choices": ["flux density", "relative permittivity", "susceptibility", "none of the above"],
        "answer": "susceptibility"
    },
    {
        "question": "Paramagnetic materials have relative permeability",
        "choices": ["slightly < 1", "equal to unity", "slightly > 1", "≤1"],
        "answer": "slightly > 1"
    },
    {
        "question": "The property of a material which opposes the creation of magnetic flux in it is known as",
        "choices": ["reluctivity", "magneto motive force", "permeance", "reluctance"],
        "answer": "reluctance"
    },
    {
        "question": "The direction of induced emf can be found by",
        "choices": ["Laplace's law", "Lenz's law", "Fleming's right-hand rule", "Kirchhoff's voltage law"],
        "answer": "Lenz's law"
    },
    {
        "question": "Base load plants are designed to supply power at",
        "choices": ["low capital cost and low operating cost", "high capital cost and low operating cost", "low capital cost and high operating cost", "high capital cost and high operating cost"],
        "answer": "high capital cost and low operating cost"
    },
    {
        "question": "What is the electrical analogy of a body with mass 'm'?",
        "choices": ["1/C", "L", "C", "R"],
        "answer": "L"
    },
    {
        "question": "The amplitude modulation generated at a very low voltage or power amplifier is___ modulation.",
        "choices": ["minimum", "collector", "high-level", "low-level"],
        "answer": "low-level"
    },
    {
        "question": "Which of the following type of fault that used only the equivalent positive impedance of the circuit in the short-circuit calculation?",
        "choices": ["Line-to-line fault", "Double-line-to-ground fault", "Three-phase fault", "Single-line-to-ground fault"],
        "answer": "Three-phase fault"
    },
    {
        "question": "Which of the following define the meaning of load factor?",
        "choices": ["The ratio of maximum load to average load.", "The ratio of average load to install capacity.", "The ratio of average load to maximum load.", "The ratio of connected load to maximum load."],
        "answer": "The ratio of average load to maximum load."
    },
    {
        "question": "If the magnetic flux through a certain region is changing with time",
        "choices": ["an emf exist around the boundary", "a current must flow around the boundary", "an electric field must exist at the boundary", "a magnetic of connected load to maximum load"],
        "answer": "an emf exist around the boundary"
    },
    {
        "question": "In a capacitor start motor, the capacitor is replaced by an inductor having the same reactance as in capacitor. Then the motor will",
        "choices": ["be damaged", "start but run at a slow speed", "start and run at its rated speed", "not start"],
        "answer": "not start"
    },
    {
        "question": "When line to ground fault occur, the current in the faulted line is 100 Amp. What is the zero sequence current in this case?",
        "choices": ["Zero", "66.67 Amp", "33.3 Amp", "100 Amp"],
        "answer": "100 Amp"
    },
    {
        "question": "Which of the following transformer has only one winding?",
        "choices": ["current", "distribution", "autotransformer", "power"],
        "answer": "autotransformer"
    },
    {
        "question": "Which of the following AC device is used to measure the angle between the voltage and its current?",
        "choices": ["reactive meter", "power factor meter", "demand meter", "phase angle meter"],
        "answer": "phase angle meter"
    },
    {
        "question": "The grounded conductor is a/an _____ grounded conductor.",
        "choices": ["isolated", "guarded", "insulated", "intentionally"],
        "answer": "intentionally"
    },
    {
        "question": "A common utility's tariff practice to penalize industrial consumers whose power factor falls below _____ and give incentive for power factor above ___?",
        "choices": ["80%,90%", "75%,90%", "85%,85%", "75%,85%"],
        "answer": "85%,85%"
    },
    {
        "question": "Series Capacitor on transmission line is used to improve?",
        "choices": ["Steady state Stability", "Transient stability", "Both A and B", "Neither A or B"],
        "answer": "Both A and B"
    },
    {
        "question": "Chemical not used to protect or treat wooden poles from termites?",
        "choices": ["Alkaline Copper Quaternar", "Copper Azole", "Micronized copper Azole", "All of the above"],
        "answer": "All of the above"
    },
    {
        "question": "What is the type of communication that only one of the two parties can transmit at a time?",
        "choices": ["Full duplex", "Bicomm", "Half duplex", "Simplex"],
        "answer": "Half duplex"
    },
    {
        "question": "Which is true about magnetic flux?",
        "choices": ["have sources only", "have sink only", "have source & sinks", "do not have source & sinks"],
        "answer": "do not have source & sinks"
    },
    {
        "question": "An American engineer wishes to practice Electrical Engineering in the Philippines must have?",
        "choices": ["APEC", "Foreign Reciprocity", "ASEAN", "ACPE"],
        "answer": "Foreign Reciprocity"
    },
    {
        "question": "The no-load current drawn by transformer is usually what percent of the full-load current?",
        "choices": ["0.2 to 0.5 percent", "12 to 15 percent", "2 to 5 percent", "20 to 30 percent"],
        "answer": "2 to 5 percent"
    },
    {
        "question": "No-load test on a transformer is carried out to determine?",
        "choices": ["copper loss", "magnetizing current and loss", "magnetizing current", "efficiency of the transformer"],
        "answer": "magnetizing current and loss"
    },
    {
        "question": "The dielectric strength of transformer oil is expected to be?",
        "choices": ["1kV", "100 kV", "33 kV", "330 kV"],
        "answer": "33 kV"
    },
    {
        "question": "The efficiency of a transformer will be maximum when?",
        "choices": ["copper losses = hysteresis losses", "hysteresis losses = eddy current losses", "eddy current losses = copper losses", "copper losses = iron losses"],
        "answer": "copper losses = iron losses"
    },
    {
        "question": "In each transformer for a given applied voltage, losses which remain constant irrespective of load changes are?",
        "choices": ["friction and windage losses", "copper losses", "hysteresis and eddy current losses", "none of the above"],
        "answer": "hysteresis and eddy current losses"
    },
    {
        "question": "If the variable part of annual cost on account of interest and depreciation on the capital outlay is equal to the annual cost of electrical energy wasted in the conductors, the total annual cost will be minimum and the corresponding size of conductor will be most economical. This statement is known as?",
        "choices": ["Kelvin's law", "Kirchhoff's law", "Ohm's law", "Faraday's law"],
        "answer": "Kelvin's law"
    },
    {
        "question": "The square root of the ratio of line impedance and shunt admittance is called the?",
        "choices": ["Surge impedance of the line", "Regulation of the line", "Conductance of the line", "None of the above"],
        "answer": "Surge impedance of the line"
    },
    {
        "question": "Which of the following D.C. distribution system is the simplest and lowest in first cost?",
        "choices": ["Radial system", "Ring system", "Inter-connected system", "None of the above"],
        "answer": "Radial system"
    },
    {
        "question": "A 310 km line is considered as?",
        "choices": ["Long line", "Medium line", "Short line", "Any of the above"],
        "answer": "Long line"
    },
    {
        "question": "In the list below, which one is not a type of present-day nuclear power plant?",
        "choices": ["Boiling water reactor", "Fusion-fission reactor", "Low pressure reactor", "Fast breeder reactor"],
        "answer": "Low pressure reactor"
    },
    {
        "question": "Which one of the following tests is preferred for checking the parameters of transmission line switchgear insulation?",
        "choices": ["an AC high potential test", "short circuit and open circuit test", "DC high potential test", "power factor test"],
        "answer": "an AC high potential test"
    },
    {
        "question": "Insulators are commonly made of?",
        "choices": ["Ceramic", "Porcelain", "Mica", "all of these"],
        "answer": "Porcelain"
    },
    {
        "question": "Insulators used for transmission line at the dead-end tower are?",
        "choices": ["suspension type", "strain type", "shackle type", "pin type"],
        "answer": "strain type"
    }

],

};



let questionPool = [];
let currentQuestionIndex = 0;

const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const categoryTitle = document.getElementById("category-title");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        startQuiz(selectedCategory);
    });
});

function startQuiz(category) {
    questionPool = [...categories[category]];
    questionPool = shuffleArray(questionPool);
    currentQuestionIndex = 0;

    categoryTitle.textContent = category;
    menuContainer.style.display = "none";
    quizContainer.style.display = "block";

    /* ✅ **Added Fade-in Effect for the Quiz Section** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => { quizContainer.style.opacity = "1"; }, 100);

    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "🎉 REFRESH MO LANG PARA MAULIT MAY BUG KASI YUNG RESTART BUTTON HAHA 🎉";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";

     
        quizContainer.classList.add("celebrate");
        setTimeout(() => quizContainer.classList.remove("celebrate"), 2000);

        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(button, choice, currentQuestion.answer));

        /* ✅ **Smooth Button Click Effect** ✅ */
        button.style.transition = "transform 0.2s ease";
        button.addEventListener("mousedown", () => button.style.transform = "scale(0.95)");
        button.addEventListener("mouseup", () => button.style.transform = "scale(1)");

        choicesContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

const wrongSound = new Audio('wrong1.mp3'); // Ensure "wrong.mp3" is in your project folder

function handleChoice(button, selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
		btn.style.boxShadow = "0 0 10px #28a745";
        } else if (btn.textContent === selected) {
            btn.classList.add("incorrect");
		btn.style.animation = "shake 0.3s ease-in-out";
            wrongSound.play(); // Play sound when answer is incorrect
        }
    });

    if (selected === correct) {
        questionPool.splice(currentQuestionIndex, 1); // Remove question if answered correctly
    } else {
        questionPool.push(questionPool[currentQuestionIndex]); // Add question back to the pool if answered incorrectly
        questionPool.splice(currentQuestionIndex, 1); // Remove current question from this round
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    /* ✅ **Added Smooth Transition Between Questions** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => {
        loadQuestion();
        quizContainer.style.opacity = "1";
    }, 300);
});

restartButton.addEventListener("click", () => {
    // ✅ Reset Everything Like a Fresh App Start
    menuContainer.style.display = "block"; // Show menu again
    quizContainer.style.display = "none"; // Hide quiz
    quizContainer.classList.remove("celebrate");

    // ✅ Reset Buttons and UI
    nextButton.style.display = "none";  // Hide Next button initially
    restartButton.style.display = "none";  // Hide Restart button

    // ✅ Reload Question Pool to Start Fresh
    questionPool = []; // Clear old questions
    currentQuestionIndex = 0; // Reset index

    // ✅ Reload Category Selection to Restart Properly
    document.querySelectorAll(".category").forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            startQuiz(selectedCategory);
        });
    });
});