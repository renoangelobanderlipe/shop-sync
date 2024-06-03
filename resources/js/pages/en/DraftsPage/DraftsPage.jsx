import {
    Button,
    Card,
    Checkbox,
    Step,
    Stepper,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import PageHeaderComponent from "../../../components/ui/PageHeader/PageHeaderComponent";
import {
    ArrowUpOnSquareIcon,
    DocumentArrowUpIcon,
    DocumentIcon,
    FolderArrowDownIcon,
    PlusIcon,
    TableCellsIcon,
} from "@heroicons/react/24/solid";
import FieldMapping from "../../../components/ui/FieldMapping/UploadFiles";
import ContentHeaderComponent from "../../../components/ui/PageHeader/ContentHeaderComponent";
import SelectFieldsComponent from "../../../components/ui/Table/SelectFieldsComponent";
import SearchFieldsComponent from "../../../components/ui/Table/SearchFieldsComponent";
import Mapping from "../../../components/ui/FieldMapping/Mapping";
import UploadToMapComponent from "../../../components/ui/Upload/UploadToMapComponent";
import ExportFileComponent from "./../../../components/ui/Export/ExportFileComponent";

const DraftsPage = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Array of steps for the Stepper component
    const steps = [
        {
            icon: (
                <DocumentArrowUpIcon className="h-[18px] w-[18px] text-white" />
            ),
            title: "Upload Files",
            description: "Files to be mapped",
        },
        {
            icon: <TableCellsIcon className="h-[18px] w-[18px] text-white" />,
            title: "Mapping Files",
            description: "Match fields",
        },
        {
            icon: (
                <ArrowUpOnSquareIcon className="h-[18px] w-[18px] text-white" />
            ),
            title: "Export File",
            description: "Download file",
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handlePrev = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <div className="flex justify-between">
                <PageHeaderComponent
                    pageTitle={"New Draft 1"}
                    withBackIcon={true}
                    withRenameIcon={true}
                />
                <div className="flex items-center gap-3">
                    <Tooltip content="Save as Template is coming soon">
                        <Button variant="outlined" type="button" disabled>
                            <DocumentIcon className="w-4 h-4" />
                            Save As Template
                        </Button>
                    </Tooltip>
                    <Tooltip content="Save As Draft is coming soon">
                        <Button type="button" disabled>
                            <FolderArrowDownIcon className="w-4 h-4" />
                            Save As Draft
                        </Button>
                    </Tooltip>
                </div>
            </div>

            <Card>
                <div className="flex justify-center w-full px-4 pb-6">
                    {/* Stepper with Dynamic Content */}
                    <Stepper
                        className="w-full"
                        activeLineClassName="bg-primary-500"
                        activeStep={activeStep}
                    >
                        {steps.map((step, index) => (
                            <Step
                                key={index}
                                className="static rounded-[4px]"
                                activeClassName="ring-0 !bg-primary-500 text-white"
                                completedClassName="!bg-primary-500 text-primary-500"
                                onClick={() => setActiveStep(index)}
                            >
                                {step.icon}
                                <div className="absolute -bottom-[3rem] w-max text-center">
                                    <Typography
                                        className="!text-[14px]"
                                        variant="h6"
                                        color={
                                            activeStep === index
                                                ? "blue"
                                                : "blue-gray"
                                        }
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color={
                                            activeStep === index
                                                ? "blue"
                                                : "blue-gray"
                                        }
                                        className="text-[12px] font-normal"
                                    >
                                        {step.description}
                                    </Typography>
                                </div>
                            </Step>
                        ))}
                    </Stepper>
                </div>

                {/* Dynamic Content Area */}
                <div className="flex flex-col gap-[24px]">
                    {/* Example: Content for the first step */}
                    {activeStep === 0 && <UploadToMapComponent />}

                    {/* Add more content for other steps */}
                    {activeStep === 1 && <Mapping />}
                    {activeStep === 2 && <ExportFileComponent />}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    <Button
                        size="md"
                        onClick={handlePrev}
                        disabled={activeStep === 0}
                    >
                        Previous
                    </Button>
                    <Button
                        size="md"
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                    >
                        Next
                    </Button>
                </div>
            </Card>
        </>
    );
};

export default DraftsPage;
