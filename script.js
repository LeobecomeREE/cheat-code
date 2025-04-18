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


 "EE 4 super": [
 
        {
            "question": "Electrical contact materials used in switches, brushes, relay must possess?",
            "choices": [
                "High thermal conductivity and high melting point",
                "Low thermal conductivity and low melting point",
                "High thermal conductivity and low melting point",
                "Low thermal conductivity and high melting point"
            ],
            "answer": "High thermal conductivity and high melting point"
        },
        {
            "question": "Which of the following is not standard distribution voltage?",
            "choices": ["13.2kV", "13.8kV", "16 kV", "34.5kV"],
            "answer": "16 kV"
        },
        {
            "question": "In an oscillating LC circuit, the maximum charge on the capacitor is Q. The charge on capacitor when the energy is stored equally between electric and magnetic field is:",
            "choices": ["Q/2", "Q/V3", "Q/√2", "Q"],
            "answer": "Q/√2"
        },
        {
            "question": "Which method is used for fast load flow calculation?",
            "choices": ["Newtons-Raphson", "Gauss Seidel", "Decoupled", "Gauss"],
            "answer": "Newtons-Raphson"
        },
        {
            "question": "The amount of frequency deviation from the carrier center of frequency for FM transmitter is proportional to what characteristic of the modulating signal?",
            "choices": ["Phase", "Amplitude", "Frequency", "Shape"],
            "answer": "Frequency"
        },
        {
            "question": "An act penalizing Pilferage of electricity, theft of transmission lines/materials and rationalizing system loss by phasing out pilferage losses",
            "choices": ["RA 7920", "RA 7832", "RA 9136", "RA 8495"],
            "answer": "RA 7832"
        },
        {
            "question": "The synchronous motor can be made self-starting by providing.",
            "choices": ["Damper winding on rotor poles", "Damper winding on stator", "(a) or (b)", "None of the above"],
            "answer": "Damper winding on rotor poles"
        },
        {
            "question": "The gassing is the phenomenon which occurs in",
            "choices": ["Oil transformers", "Mercury arc rectifier", "Cells", "Oil cylinders"],
            "answer": "Cells"
        },
        {
            "question": "Electric Power Industry Reform Act of 2001 is also known as",
            "choices": ["RA 7920", "RA 7832", "RA 9136", "RA 8495"],
            "answer": "RA 9136"
        },
        {
            "question": "A loop test is applied to find the",
            "choices": ["Ground fault of the cable", "Short circuit fault of the cable", "Open circuit fault of the cable", "(A) or (B)"],
            "answer": "(A) or (B)"
        },
        {
            "question": "In a generator, short circuit current is limited by",
            "choices": ["Transient reactance", "Sub-transient reactance", "Synchronous reactance", "All of these"],
            "answer": "All of these"
        },
        {
            "question": "Order of the lightning discharge current is",
            "choices": ["10,000-amp", "100-amp", "1 amp", "1 microampere"],
            "answer": "10,000-amp"
        },
        {
            "question": "Convergence of the transmission load flow is always assured in case of",
            "choices": ["Newton-Raphson method", "Gauss-Seidel method", "Gauss method", "both A and B"],
            "answer": "Newton-Raphson method"
        },
        {
            "question": "In a parallel plate capacitor of the capacitance Co the electric field is E. If a dielectric slab with dielectric constant equal to 7 is introduced to fill capacitor completely, capacitance will become",
            "choices": ["Co", "7Co", "Co/7", "Co/3.5"],
            "answer": "7Co"
        },
        {
            "question": "In a parallel plate capacitor of the capacitance Co the electric field is E. If a dielectric slab with dielectric constant equal to 7 is introduced to fill capacitor completely, the electric field will become",
            "choices": ["E/7", "E/3.5", "E", "7E"],
            "answer": "E/7"
        },
        {
            "question": "Carrier current protection scheme is normally used for",
            "choices": ["HV transmission lines only.", "HV transmission and cables.", "HV cables only.", "None of the above"],
            "answer": "HV transmission lines only."
        },
        {
            "question": "AC system has the following disadvantages over DC system",
            "choices": ["Skin effect exists", "Line regulation is more", "Charging current exists", "Proximity effect exists"],
            "answer": "Skin effect exists"
        },
        {
            "question": "The transient currents are associated with the.",
            "choices": [
                "Applied voltage to the circuit",
                "Changes in the stored energy in the inductors and capacitors",
                "Resistance of the circuit",
                "Impedance of the circuit"
            ],
            "answer": "Changes in the stored energy in the inductors and capacitors"
        },
        {
            "question": "In a loss-free R-L-C circuit the transient current is",
            "choices": ["Sinusoidal", "Oscillating", "None-oscilating", "Square wave"],
            "answer": "Oscillating"
        },
        {
            "question": "What is the color of neutral wire insulation?",
            "choices": ["Black", "Yellow", "Green", "White"],
            "answer": "White"
        },
        {
            "question": "The double energy transients occur in the",
            "choices": ["R-L circuit", "Pure Inductive Circuit", "R-C circuit", "R-L-C circuit"],
            "answer": "R-L-C circuit"
        },
        {
            "question": "The resistance phasor of a series RC circuit points to the right. The capacitive reactance phasor points while the diagonal of the rectangle having the two phasors as sides represents the _",
            "choices": ["Up, impedance", "Down, impedance", "Left, current", "Up, total voltage"],
            "answer": "Down, impedance"
        },
        {
            "question": "The main purpose of using core in transformer is to?",
            "choices": ["Decrease reluctance of the common magnetic circuit", "Decrease iron losses", "Prevent hysteresis losses", "Prevent eddy current losses"],
            "answer": "Decrease reluctance of the common magnetic circuit"
        },
        {
            "question": "If the height of the transmission tower is decreased, the capacitance of the line will.",
            "choices": ["Increase", "Decrease", "Remain same", "Decrease exponentially"],
            "answer": "Increase"
        },
        {
            "question": "The maximum load that a power transformer can carry is limited by its",
            "choices": ["Voltage ratio", "Temperature noise", "Copper loss", "Dielectric strength of oil"],
            "answer": "Copper loss"
        },
        {
            "question": "Settling time is inversely proportional to product of the damping ratio and",
            "choices": ["Time constant", "Peak time", "Maximum overshoot", "Undamped natural frequency of the roots"],
            "answer": "Undamped natural frequency of the roots"
        },
        {
            "question": "Which of the following instruments will be used to measure 500 kV a.c. voltage?",
            "choices": ["Moving coil voltmeter", "Electrostatic voltmeter", "Moving iron voltmeter", "Hot wire instrument"],
            "answer": "Electrostatic voltmeter"
        },
        {
            "question": "Which of the following instruments will be used to measure the temperature above 1400 degree centigrade?",
            "choices": ["A simple thermometer pyrometer", "Electrical resistance pyrometer", "Thermo-electric pyrometer", "None of the above"],
            "answer": "Thermo-electric pyrometer"
        },
        {
            "question": "The curve between discharge in m/s and time is called",
            "choices": ["Discharge duration curve", "Load curve", "Hydrograph", "Flow histogram"],
            "answer": "Discharge duration curve"
        },
        {
            "question": "Percentage of U-235 in natural uranium is",
            "choices": ["0.235", "235", "2.35", "0.7"],
            "answer": "0.7"
        },
        {
            "question": "An automatic device that operates at preset values is known as",
            "choices": ["Mercury switch", "Relay", "Fuse", "Contactor"],
            "answer": "Relay"
        },
        {
            "question": "How many hours can a load be called a Continuous load?",
            "choices": ["One hour", "2 hours", "3 hours", "24 hours"],
            "answer": "3 hours"
        },
        {
            "question": "Commonly used atomic fuels are?",
            "choices": ["Uranium, U-235", "Plutonium, Pu-239", "Thorium, Th-232", "All of these"],
            "answer": "All of these"
        },
        {
            "question": "The inductance of line is minimum when",
            "choices": ["G M D is high", "G M R is high", "Both G M D and G M R are high", "G M D is low but G M R is high"],
            "answer": "G M R is high"
        },
        {
            "question": "What device is used to measure the temperature of a motor winding while the motor is in operation?",
            "choices": ["Seismic probe", "Thermocouple", "Proximity probe", "Resistance temperature detector"],
            "answer": "Thermocouple"
        },
        {
            "question": "The vacuum inside an incandescent lamp is of the order of",
            "choices": ["10-² mm Hg", "10-³ mm Hg", "10 mm Hg", "10⁵ mm Hg"],
            "answer": "10-³ mm Hg"
        },
        {
            "question": "What is the function of Zigzag transformer?",
            "choices": ["Step down the voltage", "Stabilize the voltage", "Step up the voltage", "Derive a neutral for grounding"],
            "answer": "Derive a neutral for grounding"
        },
        {
            "question": "Which of the following vapors/gas will give yellow color in a filament lamp?",
            "choices": ["Helium", "Mercury", "Sodium", "Magnesium"],
            "answer": "Sodium"
        },
        {
            "question": "Which of the following is incorrect about HVDC?",
            "choices": ["Corona loss is higher in HVDC", "No inductance & Capacitance", "No skin effect in conductor", "Voltage drop is less"],
            "answer": "Corona loss is higher in HVDC"
        },
        {
            "question": "The value of diverter resistance for a series DC motor is of the order of",
            "choices": ["0.10", "20", "200", "4000"],
            "answer": "0.10"
        },
        {
            "question": "The term which allows any person or entity to purchase energy from transmission, distribution whichever has a low charge rate is?",
            "choices": ["Open Access", "Transmission and Distribution charge", "Electricity Distribution charge", "Generation charge"],
            "answer": "Open Access"
        },
        {
            "question": "The Dielectric loss can be measured by?",
            "choices": ["Energy meter", "Electrostatic wattmeter", "Wheatstone bridge", "None of the above"],
            "answer": "Electrostatic wattmeter"
        },
        {
            "question": "What is the permitted lighting fixture in clothes closet?",
            "choices": ["Pendant", "Recessed mounted", "Open lights", "Partially enclosed lamp"],
            "answer": "Recessed mounted"
        },
        {
            "question": "The law that induces emf and current always opposes the cause producing them was discovered by?",
            "choices": ["Lenz", "Faraday", "Maxwell", "Ohm"],
            "answer": "Lenz"
        },
        {
            "question": "Disconnecting means should be located in sight belongs to what Rule?",
            "choices": ["Construction Rule", "Design Rule", "Installation Rule", "Manufacturer's Rule"],
            "answer": "Installation Rule"
        },
        {
            "question": "A notice issued by the system operator when peace and order problem exist which may affect grid operation is called?",
            "choices": ["Security alert", "Red alert", "Blue alert", "Yellow alert"],
            "answer": "Security alert"
        },
        {
            "question": "What is the device used by computers to communicate to other computers through telephone line?",
            "choices": ["Modem", "DSL", "Cable box", "Telephone interface"],
            "answer": "Modem"
        },
        {
            "question": "Air Blast circuit breaker is used for?",
            "choices": ["Over Current", "Short duty", "Intermittent duty", "Repeated duty"],
            "answer": "Repeated duty"
        },
        {
            "question": "Which of the following distribution system gives the greater reliability?",
            "choices": ["Radial system", "Ring system", "DC 3-wire system", "Open loop system"],
            "answer": "Ring system"
        },
        {
            "question": "The characteristic impedance of a transmission line is given by?",
            "choices": ["(L/C)^(1/2)", "2π(L/C)^(1/2)", "(LC)^(1/2)", "LC"],
            "answer": "(L/C)^(1/2)"
        },
        {
            "question": "PEC defines as recognizable as suitable for the specific purpose function, use, environment, application and so forth as?",
            "choices": ["Listed", "Labeled", "Identified", "Isolated"],
            "answer": "Identified"
        },
        {
            "question": "Which inductor is used at high frequencies?",
            "choices": ["Cast iron cored", "Iron alloy cored", "Sheet steel cored", "Ceramic cored"],
            "answer": "Ceramic cored"
        }
],


 "ESAS 4 super": [
 
    {
        "question": "What refers to a slender member which prevents parts of it structure moving to each other under compressive force?",
        "choices": ["Tie", "Column", "Arch", "Strut"],
        "answer": "Strut"
    },
    {
        "question": "An object that has momentum must also have ____",
        "choices": ["Acceleration", "Impulse", "Kinetic Energy", "Potential Energy"],
        "answer": "Kinetic Energy"
    },
    {
        "question": "Work and Energy can be a function of all the following EXCEPT:",
        "choices": ["Force and time", "Force and Distance", "Torque and angular rotation", "Temporary and entropy"],
        "answer": "Force and time"
    },
    {
        "question": "Given a free-falling body with air resistance neglected, if the final position travelled is four times its initial position. By what factor does the velocity of the body increase?",
        "choices": ["Twice", "Half", "four times", "same"],
        "answer": "Twice"
    },
    {
        "question": "Two balls are thrown from the roof of a building with the same initial speed. One is thrown horizontally while the other is thrown at an angle of 20 degrees above the horizontal. Which hits the ground with the greatest speed? Ignore air resistance.",
        "choices": ["The one thrown horizontally", "The one thrown at 20 degrees", "They hit the ground with the same speed", "The answer cannot be determined with the given information"],
        "answer": "They hit the ground with the same speed"
    },
    {
        "question": "Which of the following refers to the parallel axis theorem for second moment area for strength of materials?",
        "choices": ["Maxwell theorem", "Young’s theorem", "Steiner’s theorem", "Mohr’s theorem"],
        "answer": "Steiner’s theorem"
    },
    {
        "question": "Longitudinal stress in a thin-walled cylinder is___",
        "choices": ["equal to the hoop stress", "twice the hoop stress", "half of the hoop stress", "one-fourth of hoop stress"],
        "answer": "half of the hoop stress"
    },
    {
        "question": "Principal stress occur on those plans:",
        "choices": ["Where the shearing stress is zero", "Which are 45 degrees apart", "Where the shearing stress in minimum", "Which are subjected to pure tension"],
        "answer": "Where the shearing stress in minimum"
    },
    {
        "question": "The location of the maximum shearing stress in the structural steel rolled section is at the:",
        "choices": ["Flange junction of web and flange", "Web junction of web and flange", "Uniform a cross section", "Web neutral axis"],
        "answer": "Web neutral axis"
    },
    {
        "question": "Which statement about area moments of inertia is FALSE?",
        "choices": ["I = integral of d^2 (dA)", "Area moments of inertia are always positive", "The area closest to the axis of interest are the most significant", "The area moment of inertia arises whenever the magnitude of the surface force varies linearly with distance"],
        "answer": "The area moment of inertia arises whenever the magnitude of the surface force varies linearly with distance"
    },
    {
        "question": "Which of the following is NOT a method for truss analysis?",
        "choices": ["Methods of joints", "Methods of sections", "Maxwell diagram", "Methos of transmissibility"],
        "answer": "Methos of transmissibility"
    },
    {
        "question": "What is rupture strength?",
        "choices": ["Stress at failure", "Breaking stress", "Tensile Stress", "Maximum Stress"],
        "answer": "Breaking stress"
    },
    {
        "question": "What is the maximum moment of a beam supported at both ends and carries a uniform load of w throughout its entire length?",
        "choices": ["wL/2", "wL/2", "wL^2/8", "wL^2/4"],
        "answer": "wL^2/8"
    },
    {
        "question": "Which of the following are NOT units of pressure?",
        "choices": ["Pa", "N/m^2", "bars", "kg/m^2"],
        "answer": "kg/m^2"
    },
    {
        "question": "What is called weight per unit volume of a substance?",
        "choices": ["Density", "Specific gravity", "Specific weight", "Specific volume"],
        "answer": "Specific weight"
    },
    {
        "question": "The dimensional formula for specific gravity is given by:",
        "choices": ["M1L0T1", "M1L1T0", "M0L0T0", "M0L1T1"],
        "answer": "M0L0T0"
    },
    {
        "question": "An external pressure exerted on a fluid is transmitted uniformly throughout the volume of the fluid. This statement is known as ___",
        "choices": ["Bernoulli’s theorem", "Pascal’s principles", "Archimedes principle", "Torricelli’s theorem"],
        "answer": "Pascal’s principles"
    },
    {
        "question": "Which of the following adds head?",
        "choices": ["Turbine", "Reciprocating pump", "Centrifugal pump", "Rotary pump"],
        "answer": "Centrifugal pump"
    },
    {
        "question": "Impulse type turbine named after his creator",
        "choices": ["Pelton", "Kaplan", "Francis", "Propeller"],
        "answer": "Pelton"
    },
    {
        "question": "A hygrometer is an instrument to measure___",
        "choices": ["relative density of liquids", "viscosity", "relative humidity", "atmospheric pressure"],
        "answer": "relative humidity"
    },
    {
        "question": "On doubling the speed, N, of a centrifugal pump, all of the following are true, EXCEPT:",
        "choices": ["Volume flow rate, Q is increased by a factor of 2", "Head, H is increased by a factor of 4", "Horsepower, P is increased by a factor of 8", "Head, horsepower and volume low rate are independently variable"],
        "answer": "Head, horsepower and volume low rate are independently variable"
    },
    {
        "question": "Which is NOT covered by Thermodynamics?",
        "choices": ["Utilization of energy", "Transformation of energy", "Transfer of energy", "Storage of energy"],
        "answer": "Storage of energy"
    },
    {
        "question": "Dimension of specific volume is ___",
        "choices": ["Dimension: L³/M"],
        "answer": "Dimension: L³/M"
    },
    {
        "question": "The refrigerator is left open for 10 hrs, what will happen in the room temperature?",
        "choices": ["the room will be colder", "The room will slightly increase temperature", "The room will get hotter", "The room will not change its temperature"],
        "answer": "The room will get hotter"
    },
    {
        "question": "In a quasi-equilibrium process, the pressure in a system",
        "choices": ["remains constant", "varies with temperature", "is everywhere constant at an instant", "increase if the volume increases"],
        "answer": "is everywhere constant at an instant"
    },
    {
        "question": "Which of the following in the thermodynamics is considered as the heat content of a system?",
        "choices": ["Internal heat", "Molar heat", "Entropy", "Enthalpy"],
        "answer": "Enthalpy"
    },
    {
        "question": "Which of the following is a quasi-equilibrium process?",
        "choices": ["Mixing paint in a can", "Compression of air in a cylinder", "Combustion", "A balloon bursting"],
        "answer": "Compression of air in a cylinder"
    },
    {
        "question": "Which of the following is a variable renewable source of energy?",
        "choices": ["Hydro-power", "Biomass energy", "Geothermal energy", "Solar energy"],
        "answer": "Solar energy"
    },
    {
        "question": "The space required of a steam power station ____",
        "choices": ["More than diesel power station", "Equal to diesel power station", "Less than diesel power station", "None of the above"],
        "answer": "More than diesel power station"
    },
    {
        "question": "What are considered as the “building blocks” of engineering materials?",
        "choices": ["Atoms", "Elements", "Matters", "Compounds"],
        "answer": "Atoms"
    },
    {
        "question": "Which of the elements has the highest atomic number?",
        "choices": ["Titanium", "Uranium", "Radium", "Plutonium"],
        "answer": "Uranium"
    },
    {
        "question": "The chemical process which occurs when water is added to cement is called___",
        "choices": ["oxidation", "plastic flow", "Brownian movement", "hydration"],
        "answer": "hydration"
    },
    {
        "question": "Which of the following is not true about ideal gases?",
        "choices": ["They move in random motion", "No attractive forces between atoms", "They do not apply pressure", "They have negligible size"],
        "answer": "They do not apply pressure"
    },
    {
        "question": "An empty glass was initially place with a cube of ice. A water was filled into a glass such that the ice at the top of the glass. What will happen after the ice melts?",
        "choices": ["cannot determine since no density of ice and water are given", "some spilled", "some spilled on the side of the glass", "nothing spilled"],
        "answer": "nothing spilled"
    },
    {
        "question": "Chemical bonds are described as having different strengths, strong bonds are also called",
        "choices": ["primary bonds", "secondary bonds", "tertiary bonds", "none of the bonds"],
        "answer": "primary bonds"
    },
    {
        "question": "A device used in terminal power plant to reduce air pollution?",
        "choices": ["Pulverize", "Electrostatic Precipitator", "Desulfurizer", "Chimney"],
        "answer": "Electrostatic Precipitator"
    },
    {
        "question": "A piece of copper is drawn into a continuous wire. What behavior is the copper exhibiting?",
        "choices": ["Brittle only", "Elastic only", "plastic only", "both brittle and elastic"],
        "answer": "plastic only"
    },
    {
        "question": "What characteristics of Tool steel?",
        "choices": ["water resistance", "heat resistance", "Toughness", "All of these"],
        "answer": "All of these"
    },
    {
        "question": "Which of the following does cold-working a metal cause?",
        "choices": [
            "elongation of grains in the flow direction, an increase in dislocation density, and an overall increase in energy of metal",
            "elongation of grains in the flow direction, a decrease in dislocation density, and an overall decrease in energy of the metal",
            "elongation of grains in the flow direction, a decrease in dislocation density, and an overall increase in the energy of the metal",
            "shortening of gains in the flow direction, a decrease in dislocation density, and an overall decrease in the energy of the metal"
        ],
        "answer": "elongation of grains in the flow direction, an increase in dislocation density, and an overall increase in energy of metal"
    },
    {
        "question": "Which of the following statement is FALSE?",
        "choices": [
            "High-strength low-alloy steels are not as strong as non-alloy low carbon steels",
            "Small amounts of copper increase the tensile strength f steels.",
            "Small amounts of silicon in steels have little influence on toughness or fabricability.",
            "Addition of small amounts of silicon to steel can cause a marked decrease in yield strength of steel."
        ],
        "answer": "High-strength low-alloy steels are not as strong as non-alloy low carbon steels"
    },
    {
        "question": "When sugar is heated and let it cool what happened?",
        "choices": ["Crystaline to amorphous", "Amorphous to crystalline", "Polymetric to crystalline", "Crystaline to polymetric"],
        "answer": "Crystaline to amorphous"
    },
    {
        "question": "What is the ASTM tension testing designation for standard methods for steel products?",
        "choices": ["A370", "E345", "E870", "C674"],
        "answer": "A370"
    },
    {
        "question": "Which of the following statements is FALSE?",
        "choices": [
            "There is considerable increase in hardness and strength of cold-worked metal",
            "Cold working a metal significantly reduces ductility",
            "Cold working causes a slight decrease in the density and electrical conductivity of a metal",
            "Cold work decreases the yield point of metal"
        ],
        "answer": "Cold work decreases the yield point of metal"
    },
    {
        "question": "Low carbon steels are generally used in the “as rolled” or “as fabricated” state. What is the reason for this?",
        "choices": [
            "They come in many different shapes and thickness",
            "Their strength generally cannot be increased by heat treatment",
            "They degrade severely under heat treatment",
            "Their chromium content is so low"
        ],
        "answer": "Their strength generally cannot be increased by heat treatment"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": [
            "Hot-working can be regarded ad the simultaneous combination of cold-working and annealing",
            "Hot working causes much strain hardening of the metal",
            "Hot working increases the density of the metal",
            "One of the primary goals of hot working is to produce a fine-grained product"
        ],
        "answer": "Hot working causes much strain hardening of the metal"
    },
    {
        "question": "A thin mild steel wire is loaded by adding loads in equal increments till it breaks. The extensions noted with increasing loads will behave as under ___",
        "choices": ["Uniform throughout", "Increase uniformly", "First increase and then decrease", "Increase uniformly first and then increase rapidly"],
        "answer": "Increase uniformly first and then increase rapidly"
    },
    {
        "question": "When a source of sound is moving with respect to an observer or an observer is moving with respect to the source, the pitch of sound heard by the observer is different from the pitch heard when the source and observer are both at rest. What do you call this change in the frequency caused by the motion?",
        "choices": ["skin effect", "hall effect", "Doppler effect", "Peltier effect"],
        "answer": "Doppler effect"
    },
    {
        "question": "What physical property of a material refers to the highest potential difference that an insulating material of a given thickness can withstand for a specified time without occurrence of electrical breakdown through its bulk?",
        "choices": ["Thermal expansion", "Conductivity", "Dielectric strength", "Electric Resistivity"],
        "answer": "Dielectric strength"
    },
    {
        "question": "Objects that emit their own light are called?",
        "choices": ["Solar", "luminated", "Photovoltaic", "Illuminated"],
        "answer": "Illuminated"
    },
    {
        "question": "What is the term for a high-speed memory used to store a small amount of data temporarily so that the data can be retrieved quickly?",
        "choices": ["Cache memory", "Audio and video memory", "Volatile memory", "Scratched memory"],
        "answer": "Cache memory"
    },
    {
        "question": "Which statement is TRUE about the sparse matrices?",
        "choices": [
            "You can use sparse function to remove cells from cell array variables",
            "The sparse unction requires its input to be a full matrix at least 50% zero elements",
            "sparse matrices always use less memory than their associated full matrices",
            "Mixture of sparse and full matrices can be combined in all of MATHLAB’s built in arithmetic operations"
        ],
        "answer": "sparse matrices always use less memory than their associated full matrices"
    },
    {
        "question": "Which of the following is NOT a pre-defined variable in MATLAB?",
        "choices": ["oi", "inf", "j", "gravity"],
        "answer": "gravity"
    },
    {
        "question": "W, X, and Y are Boolean variables. W and X are inputs to an AND gate and its output combines with Y in another AND gate resulting in Z. What values of W, X, and Y will result in z = 1?",
        "choices": ["1,0,1", "1,1,1", "1,1,0", "0,1,1"],
        "answer": "1,1,1"
    },
    {
        "question": "Which of the following is an example of an integrity violation of e-commerce security?",
        "choices": [
            "A website is not actually operated by the entity by the customer behaves it to be",
            "A merchant uses customer information in a manner not intended by the customer",
            "A customer denies that he or she is the person who placed the order",
            "An unauthorized person intercepts an online communication and changes its content"
        ],
        "answer": "A website is not actually operated by the entity by the customer behaves it to be"
    },
    {
        "question": "Which of the following is CORRECT?",
        "choices": [
            "The critical path helps prove how long the project will take",
            "There can be only one critical path",
            "The network diagram will change every time the end date changes",
            "A project can never have negative float"
        ],
        "answer": "The critical path helps prove how long the project will take"
    },
    {
        "question": "All of the following are characteristic of a project EXCEPT:",
        "choices": [
            "It is temporary",
            "It has definite beginning and end",
            "It creates a unique product",
            "It repeats itself every month"
        ],
        "answer": "It repeats itself every month"
    },
    {
        "question": "If project time and cost are not as important as the number of resources used each month, which of the following is the BEST thing to do?",
        "choices": [
            "Perform a Monte Cade analysis",
            "Fast track the project",
            "perform resource optimization",
            "Analyze the life cycle cost"
        ],
        "answer": "perform resource optimization"
    },
    {
        "question": "Which of the following statements about the Project Management Office (PMO) is TRUE?",
        "choices": [
            "The PMO standardizes the management of projects",
            "A supportive PMO directly manages most projects within organization",
            "A directive PMO allows the project manager to control most aspects of the project",
            "A directive PMO provides project managers but is not responsible for the results of projects"
        ],
        "answer": "The PMO standardizes the management of projects"
    },
    {
        "question": "What refers to the amount of money paid for the use of borrowed capital?",
        "choices": ["Interest", "Rate of interest", "Simple interest", "Principal"],
        "answer": "Interest"
    },
    {
        "question": "The circuit conductors between the final overcurrent device protecting the circuit and the outlet(s).",
        "choices": ["Service lateral", "Service conductor", "Branch circuit", "Feeder"],
        "answer": "Branch circuit"
    },
    {
        "question": "Can receptacles are allowed to put under a bathtub or directly over a shower stall?",
        "choices": [
            "Yes, outlet must be GFCI protected and weatherproof",
            "Yes, outlet must be GFCI protected and with cover",
            "Yes, outlet must be weatherproof",
            "Never"
        ],
        "answer": "Never"
    },
    {
        "question": "The disconnecting means for motor circuits shall have an ampere rating of at least 115% of the full-load current rating of the motor.",
        "choices": ["Manufacturing rule", "Construction rule", "Wiring design rule", "Installation rule"],
        "answer": "Installation rule"
    },
    {
        "question": "When the circuit breakers are installed in enclosed switchboards, they are usually derated to a certain percentage. What is the percentage?",
        "choices": ["60%", "50%", "80%", "70%"],
        "answer": "80%"
    },
    {
        "question": "The grounding electrode conductor shall be",
        "choices": ["Copper", "Copper-clad-aluminum", "Aluminum", "all of these"],
        "answer": "all of these"
    },
    {
        "question": "An enclosure of porcelain or other insulating materials fitting with terminals and intended for connecting the flexible chord carrying a pendant to the permanent wiring is ___",
        "choices": ["cable bus", "counterpose", "raceway", "rosette"],
        "answer": "rosette"
    },
    {
        "question": "A spark occurring between nearby metallic objects or from such objects to the lightning protection systems or to ground is called___",
        "choices": ["Flashover", "Sparkover", "Side flash", "Electrostatic discharge"],
        "answer": "Side flash"
    },
    {
        "question": "In RA 7920, the minimum age for PEE is",
        "choices": ["24", "25", "23", "21"],
        "answer": "25"
    },
    {
        "question": "Which are NOT included in duties and responsibilities of PRBEE?",
        "choices": [
            "Supervise and regulate the practice of electrical engineering in the Philippines",
            "Issue special permits to individual foreign electrical engineers and electricians for specific projects",
            "Perform such other functions and duties may be necessary to implement as effectivity of this ACT",
            "All of these"
        ],
        "answer": "All of these"
    },
    {
        "question": "It is also referred to as “Anti-electricity and Electric Transmission Lines/Materials Pilferage Act of 1994”",
        "choices": ["RA 7832", "RA 11361", "RA 11285", "10968"],
        "answer": "RA 7832"
    },
    {
        "question": "The overall energy program formulated and updated yearly by the DOE and submitted to congress pursuant to RA 7638 is known as PEP which means",
        "choices": [
            "Philippine Energy Project",
            "Philippine Electricity Plant",
            "Philippine Energy Plan",
            "Philippine Electrical Project"
        ],
        "answer": "Philippine Energy Plan"
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
