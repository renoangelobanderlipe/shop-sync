import React from "react";
import ContentHeaderComponent from "../PageHeader/ContentHeaderComponent";
import UploadFiles from "../FieldMapping/UploadFiles";
import SelectFieldsComponent from "../Table/SelectFieldsComponent";

const UploadToMapComponent = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
                <ContentHeaderComponent
                    title={"Upload Files to Map"}
                    description={
                        "Upload two CSV files that will be used to map the file."
                    }
                />
                <UploadFiles />
            </div>

            <div className="flex flex-col gap-5">
                <ContentHeaderComponent
                    title={"Choose fields to Map"}
                    description={
                        "Choose fields that you needed that will be mapped on the next step."
                    }
                />
                <SelectFieldsComponent />
            </div>
        </div>
    );
};

export default UploadToMapComponent;
