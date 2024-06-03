import { Typography } from "@material-tailwind/react";
import LeftContainerMapping from "./LeftContainerMapping";
import RightContainerMapping from "./RightContainerMapping";
import SearchFieldsComponent from "../Table/SearchFieldsComponent";
import ContentHeaderComponent from "../PageHeader/ContentHeaderComponent";

const Mapping = () => {
    return (
        <div className=" flex flex-col gap-4">
            <ContentHeaderComponent
                title={"Mapping the Fields"}
                description={
                    "Match the existing header fields from both files that may contain the same data. "
                }
            />
            {/* <SearchFieldsComponent /> */}

            <div className=" flex justify-between overflow-x-hidden">
                <LeftContainerMapping />
                <RightContainerMapping />
            </div>
        </div>
    );
};

export default Mapping;
