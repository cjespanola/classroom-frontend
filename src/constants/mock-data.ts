import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  // Computer Engineering Technology (CPET)
  {
    id: 1,
    code: "CPET101",
    name: "Introduction to Computer Engineering Technology",
    department: "CPET",
    description:
        "Introduces the fundamentals of computer engineering technology, computer systems, and industry practices.",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    code: "CPET201",
    name: "Digital Logic Circuits",
    department: "CPET",
    description:
        "Covers number systems, logic gates, Boolean algebra, combinational, and sequential circuits.",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    code: "CPET301",
    name: "Microprocessor Systems",
    department: "CPET",
    description:
        "Focuses on microprocessor architecture, assembly language programming, and embedded applications.",
    created_at: new Date().toISOString(),
  },

  // Electrical Engineering Technology (EET)
  {
    id: 4,
    code: "EET101",
    name: "Basic Electrical Circuits",
    department: "EET",
    description:
        "Introduces electrical quantities, Ohm's Law, circuit analysis, and electrical measurements.",
    created_at: new Date().toISOString(),
  },
  {
    id: 5,
    code: "EET202",
    name: "Industrial Motor Controls",
    department: "EET",
    description:
        "Covers motor control circuits, relays, contactors, and industrial control system applications.",
    created_at: new Date().toISOString(),
  },
  {
    id: 6,
    code: "EET303",
    name: "Power Distribution Systems",
    department: "EET",
    description:
        "Studies electrical power generation, transmission, distribution, and protection systems.",
    created_at: new Date().toISOString(),
  },

  // Electronics Engineering Technology (EsET)
  {
    id: 7,
    code: "ESET101",
    name: "Fundamentals of Electronics",
    department: "EsET",
    description:
        "Introduces electronic components, semiconductor devices, and basic electronic circuits.",
    created_at: new Date().toISOString(),
  },
  {
    id: 8,
    code: "ESET202",
    name: "Analog Electronics",
    department: "EsET",
    description:
        "Focuses on amplifiers, operational amplifiers, filters, and analog circuit analysis.",
    created_at: new Date().toISOString(),
  },
  {
    id: 9,
    code: "ESET304",
    name: "Digital Communications",
    department: "EsET",
    description:
        "Covers digital communication systems, modulation techniques, signal transmission, and communication networks.",
    created_at: new Date().toISOString(),
  },
];