import { Suspense, lazy } from "react";
import {
    Cog6ToothIcon,
    DocumentTextIcon,
    SquaresPlusIcon,
    TableCellsIcon,
} from "@heroicons/react/24/solid";

import { createBrowserRouter } from "react-router-dom";

import PageLayout from "@pages/en/Layout/PageLayout";

const LoginPage = lazy(() => import("@pages/en/Auth/LoginPage"));
const MyWorkPage = lazy(() => import("@pages/en/MyWork/MyWorkPage"));
const DraftsPage = lazy(() => import("@pages/en/DraftsPage/DraftsPage"));
const SettingsPage = lazy(() => import("@pages/en/Settings/SettingsPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <PageLayout />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<div>Loading...</div>}>
                <>Page Not Found</>
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: <>Coming Soon!</>,
                index: true,
            },
            {
                path: "/data-mapper",
                element: <MyWorkPage />,
            },
            {
                path: "/templates",
                element: <>Coming Soon!</>,
            },
            {
                path: "/drafts",
                element: <DraftsPage />,
            },
            {
                path: "/settings",
                element: <SettingsPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: (
            <Suspense fallback={<div>Loading</div>}>
                <>Page Not Found</>
            </Suspense>
        ),
    },
]);

export const SIDEBARROUTES = [
    {
        path: "/",
        pathName: "Dashboard",
        icon: <SquaresPlusIcon className="h-[24px] w-[24px]" />,
    },
    {
        path: "/data-mapper",
        pathName: "Data Mapper",
        icon: <TableCellsIcon className="h-[24px] w-[24px]" />,
    },
    {
        path: "/templates",
        pathName: "Explore Templates",
        icon: <DocumentTextIcon className="h-[24px] w-[24px]" />,
    },
    {
        path: "/settings",
        pathName: "Settings",
        icon: <Cog6ToothIcon className="h-[24px] w-[24px]" />,
    },
];
