import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import PageContainer from "@components/Container/PageContainer";
import { useUserInfoStore } from "../../../services/state/store";

const PageLayout = () => {
    const navigate = useNavigate();
    const { token } = useUserInfoStore();

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token, navigate]);
    return !token ? (
        <Navigate to="/login" replace />
    ) : (
        <div className="bg-background flex w-full h-screen">
            <SidebarLayout />

            <PageContainer>
                <Outlet />
            </PageContainer>
        </div>
    );
};

export default PageLayout;
