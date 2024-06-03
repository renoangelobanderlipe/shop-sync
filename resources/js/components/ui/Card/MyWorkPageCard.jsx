import {
    Card,
    CardBody,
    List,
    ListItem,
    Typography,
} from "@material-tailwind/react";
import React from "react";

const MyWorkPageCard = () => {
    return (
        <ListItem className=" flex w-full items-center justify-between">
            <div className="gap-1">
                <Typography variant="h6">UI/UX Design</Typography>
                <Typography
                    variant="small"
                    color="gray"
                    className="lg:text-[12px]"
                >
                    Magento to Shopify
                </Typography>
            </div>
            <Typography variant="small" color="gray">
                Published 21 days ago
            </Typography>
        </ListItem>
    );
};

export default MyWorkPageCard;
