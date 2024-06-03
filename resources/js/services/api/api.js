import { create } from "apisauce";
import { useUserInfoStore } from "../state/store";

const authApi = create({
    baseURL: import.meta.env.APP_URL ?? "http://localhost:8000",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

const api = create({
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

authApi.addRequestTransform((request) => {
    const store = useUserInfoStore.getState();
    const token = store.token;

    if (!["undefined", undefined, ""].includes(token)) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        window.location.replace("/login");
    }
});

// Auth
export const loginApi = (params) => api.post("/api/auth/login", params);
export const logoutApi = () => authApi.post("/api/auth/logout");

// Data Export
export const uploadDataMapper = (params) =>
    authApi.post("/api/data-mapper/upload", params, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

// export const testApi = (params) =>
//     api.post("/api/test-upload", params,

//     });
