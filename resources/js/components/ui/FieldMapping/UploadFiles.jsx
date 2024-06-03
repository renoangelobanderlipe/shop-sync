import { Typography } from "@material-tailwind/react";
import React from "react";
import Papa from "papaparse";
import { useMappingFileUpload } from "../../../services/state/store";
import { parseFileName } from "../../../utils/helpers";

const FieldMapping = () => {
    const setRightFile = useMappingFileUpload((state) => state.setRightFile);
    const setLeftFile = useMappingFileUpload((state) => state.setLeftFile);

    const setLeftFileName = useMappingFileUpload(
        (state) => state.setLeftFileName,
    );
    const leftFileName = useMappingFileUpload((state) => state.leftFileName);

    const setRightFileName = useMappingFileUpload(
        (state) => state.setRightFileName,
    );
    const rightFileName = useMappingFileUpload((state) => state.rightFileName);

    const handleLeftFile = (event) => {
        const file = event.target.files[0];

        if (file) {
            parseCsv(file, setLeftFile);
            parseFileName(file, setLeftFileName);
        }
    };

    const handRightFile = (event) => {
        const file = event.target.files[0];

        if (file) {
            parseCsv(file, setRightFile);
            parseFileName(file, setRightFileName);
        }
    };

    const parseCsv = (file, state) => {
        Papa.parse(file, {
            header: true,
            preview: 1,
            complete: (results) => {
                const headers = results.meta.fields;
                const modifiedHeaders = headers.map((title, index) => ({
                    id: index,
                    title,
                }));
                state(modifiedHeaders);
            },
        });
    };

    return (
        <>
            <div className="flex justify-between">
                <div className=" flex flex-col gap-[8px]">
                    <Typography
                        variant="paragraph"
                        color="black"
                        className="font-bold"
                    >
                        File to be converted
                    </Typography>
                    <div className="rounded-5 flex">
                        <label className="w-fit rounded-l-[6px] border-b-[1px] border-l-[1px] border-t-[1px] border-[#607D8B] bg-white p-2 text-[14px]  !text-neutral-700 lg:min-w-[300px]">
                            {leftFileName}
                        </label>
                        <label
                            htmlFor="leftFileUpload"
                            className=" flex w-fit cursor-pointer items-center justify-center rounded-r-[5px]  bg-neutral-700 px-3 py-[12px]  text-[12px] font-bold uppercase text-white"
                        >
                            Choose File
                        </label>
                        <input
                            id="leftFileUpload"
                            type="file"
                            className="hidden"
                            onChange={handleLeftFile}
                        />
                    </div>
                    <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="3xl:!text-[14px] !text-[12px]"
                    >
                        Upload a CSV File that contains fields you want to
                        convert.
                    </Typography>
                </div>

                <div className=" flex flex-col gap-[8px]">
                    <Typography
                        variant="paragraph"
                        color="black"
                        className="font-bold"
                    >
                        Output Reference
                    </Typography>
                    <div className="rounded-5 flex">
                        <label className="w-fit min-w-[300px] rounded-l-[6px] border-b-[1px] border-l-[1px] border-t-[1px] border-[#607D8B] bg-white p-2 text-[14px] text-neutral-700">
                            {rightFileName}
                        </label>
                        <label
                            htmlFor="rightFileUpload"
                            className=" flex w-fit cursor-pointer items-center justify-center rounded-r-[5px]  bg-neutral-700 px-3 py-[12px] text-[12px] font-bold uppercase text-white"
                        >
                            Choose File
                        </label>
                        <input
                            id="rightFileUpload"
                            type="file"
                            className="hidden"
                            onChange={handRightFile}
                        />
                    </div>
                    <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="3xl:!text-[14px] !text-[12px]"
                    >
                        Upload a CSV File that contains fields you want to
                        convert.
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default FieldMapping;
