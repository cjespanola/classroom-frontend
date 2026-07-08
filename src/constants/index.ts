import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
    STUDENT: "student",
    TEACHER: "teacher",
    ADMIN: "admin",
};

export const ROLE_OPTIONS = [
    {
        value: USER_ROLES.STUDENT,
        label: "Student",
        icon: GraduationCap,
    },
    {
        value: USER_ROLES.TEACHER,
        label: "Teacher",
        icon: School,
    },
];

export const DEPARTMENTS = [
    "CPET",
    "ESET",
    "EET",
    "CT",
    "WET",
    "AET",
    "HVAC",
] as const;

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
];

const getEnvVar = (key: string): string => {
    const value = import.meta.env[key];
    if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

const isValidUrl = (val: string): boolean => {
    try {
        new URL(val);
        return true;
    } catch {
        return false;
    }
};

const assert = (condition: boolean, message: string) => {
    if (!condition) throw new Error(message);
};

export const CLOUDINARY_UPLOAD_URL = getEnvVar("VITE_CLOUDINARY_UPLOAD_URL");
export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
export const BACKEND_BASE_URL = getEnvVar("VITE_BACKEND_BASE_URL");

export const BASE_URL = import.meta.env.VITE_API_URL;
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;

export const CLOUDINARY_UPLOAD_PRESET = getEnvVar("VITE_CLOUDINARY_UPLOAD_PRESET");

// Validate environment values
assert(isValidUrl(CLOUDINARY_UPLOAD_URL), `VITE_CLOUDINARY_UPLOAD_URL is not a valid URL: ${CLOUDINARY_UPLOAD_URL}`);
assert(isValidUrl(BACKEND_BASE_URL), `VITE_BACKEND_BASE_URL is not a valid URL: ${BACKEND_BASE_URL}`);
assert(isValidUrl(BASE_URL), `VITE_API_URL is not a valid URL: ${BASE_URL}`);
assert(CLOUDINARY_CLOUD_NAME.trim().length > 0, `VITE_CLOUDINARY_CLOUD_NAME must not be empty`);
assert(CLOUDINARY_UPLOAD_PRESET.trim().length > 0, `VITE_CLOUDINARY_UPLOAD_PRESET must not be empty`);
assert(ACCESS_TOKEN_KEY.trim().length > 0, `VITE_ACCESS_TOKEN_KEY must not be empty`);
assert(REFRESH_TOKEN_KEY.trim().length > 0, `VITE_REFRESH_TOKEN_KEY must not be empty`);

export const REFRESH_TOKEN_URL = new URL('/refresh-token', BASE_URL).toString();
export const teachers = [
    {
        id: "1",
        name: "Cj Espanola",
    },
    {
        id: "2",
        name: "Jane Smith",
    },
    {
        id: "3",
        name: "Dr. Alan Turing",
    },
];

export const subjects = [
    // CPET
    {
        id: 1,
        name: "Introduction to Computer Engineering Technology",
        code: "CPET101",
        department: "CPET",
    },
    {
        id: 2,
        name: "Digital Logic Circuits",
        code: "CPET201",
        department: "CPET",
    },

    // ESET
    {
        id: 3,
        name: "Fundamentals of Electronics",
        code: "ESET101",
        department: "ESET",
    },
    {
        id: 4,
        name: "Analog Electronics",
        code: "ESET201",
        department: "ESET",
    },

    // EET
    {
        id: 5,
        name: "Basic Electrical Circuits",
        code: "EET101",
        department: "EET",
    },
    {
        id: 6,
        name: "Industrial Motor Controls",
        code: "EET201",
        department: "EET",
    },

    // CT
    {
        id: 7,
        name: "Construction Materials",
        code: "CT101",
        department: "CT",
    },
    {
        id: 8,
        name: "Surveying Fundamentals",
        code: "CT201",
        department: "CT",
    },

    // WET
    {
        id: 9,
        name: "Shielded Metal Arc Welding",
        code: "WET101",
        department: "WET",
    },
    {
        id: 10,
        name: "Gas Metal Arc Welding",
        code: "WET201",
        department: "WET",
    },

    // AET
    {
        id: 11,
        name: "Automotive Engine Fundamentals",
        code: "AET101",
        department: "AET",
    },
    {
        id: 12,
        name: "Automotive Electrical Systems",
        code: "AET201",
        department: "AET",
    },

    // HVAC
    {
        id: 13,
        name: "Refrigeration Fundamentals",
        code: "HVAC101",
        department: "HVAC",
    },
    {
        id: 14,
        name: "Air Conditioning Systems",
        code: "HVAC201",
        department: "HVAC",
    },
];

