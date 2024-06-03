import toast from "react-hot-toast";

export const parseFileName = (file, state) => {
    const name = file.name;
    const extension = name.split(".").pop();
    const truncatedName =
        name.length > 25 ? `${name.slice(0, 25)}...${extension}` : name;
    state(truncatedName);
};

export const getIndexPosition = (id, state) => {
    const getPosition = (id) => state.findIndex((fields) => fields.id === id);

    return getPosition;
};

export function handleApiErrors(data) {
    if (data && data.errors) {
        for (const field in data.errors) {
            data.errors[field].forEach((errorMessage) => {
                toast.error(errorMessage);
            });
        }
    } else if (data || data.message || data.error) {
        toast.error(data.message ?? data.error);
    } else {
        toast.error("An unexpected error occurred.");
    }
}
