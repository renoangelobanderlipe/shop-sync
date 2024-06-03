import { create } from "zustand";

export const useUserInfoStore = create((set) => ({
    email: "",
    token: localStorage.getItem("token") || null,

    setEmail: (email) => set({ email }),

    setToken: (token) => {
        set({ token });
        localStorage.setItem("token", token);
    },

    clearToken: () => {
        set({ token: "" });
        localStorage.removeItem("token");
    },
}));

export const useMappingFileUpload = create((set) => ({
    leftFile: [],
    rightFile: [],
    mappedFields: [],

    leftFileName: "",
    rightFileName: "",

    // Storing of uploaded file with validation
    setLeftFile: (leftFile) => {
        if (Array.isArray(leftFile)) {
            set({ leftFile });
        } else {
            console.error("leftFile must be an array");
        }
    },
    setRightFile: (rightFile) => {
        if (Array.isArray(rightFile)) {
            set({ rightFile });
        } else {
            console.error("rightFile must be an array");
        }
    },

    setMappedFields: (mappedFields) =>
        set(() => ({ mappedFields: mappedFields })),

    // Storing the names for the uploaded files
    setLeftFileName: (leftFileName) =>
        set(() => ({ leftFileName: leftFileName })),
    setRightFileName: (rightFileName) =>
        set(() => ({ rightFileName: rightFileName })),
}));

export const useDataMapperStore = create((set) => ({
    formattedLeftField: [],
    formattedRightField: [], // Initialize as an empty array
    leftSelectedFields: [],
    rightSelectedFields: [],

    setFormattedLeftField: (formattedLeftField) => set({ formattedLeftField }),
    setFormattedRightField: (formattedRightField) =>
        set({ formattedRightField }),
    setLeftSelectedFields: (leftSelectedFields) => set({ leftSelectedFields }),
    setRightSelectedFields: (rightSelectedFields) =>
        set({ rightSelectedFields }),

    rightField: [],
    leftField: [],
    setRightField: (rightField) => set({ rightField }),
    setLeftField: (leftField) => set({ leftField }),
}));

// Export Data Store
export const useExportDataStore = create((set) => ({
    file: null,
    email: "",
    limit: 100,
    fileName: "",

    setFile: (file) => set({ file }),
    setEmail: (email) => set({ email }),
    setLimit: (limit) => set({ limit }),
    setFileName: (fileName) => set({ fileName }),
}));
