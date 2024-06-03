import { Typography } from "@material-tailwind/react";
import React from "react";

const ContentHeaderComponent = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-1">
            <Typography variant="h6" color="black">
                {title}
            </Typography>
            <Typography variant="paragraph" color="blue-gray">
                {description}
            </Typography>
        </div>
    );
};

export default ContentHeaderComponent;
