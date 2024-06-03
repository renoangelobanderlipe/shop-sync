import { PlusIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const PageContainer = ({ children }) => {
    return (
        <div className="3xl:gap-6 3xl:p-6 bg-main-bg lg:gap-5 lg:p-5 flex flex-col w-full h-screen">
            {children}{" "}
        </div>
    );
};

export default PageContainer;
