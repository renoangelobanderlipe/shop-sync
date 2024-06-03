import ContentHeaderComponent from "../PageHeader/ContentHeaderComponent";
import { Alert, Button, Input, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { handleApiErrors, parseFileName } from "../../../utils/helpers";
import { uploadDataMapper } from "../../../services/api/api";
import toast from "react-hot-toast";
import {
    useDataMapperStore,
    useExportDataStore,
} from "../../../services/state/store";

const ExportFileComponent = () => {
    const leftField = useDataMapperStore((state) => state.leftField);
    const rightField = useDataMapperStore((state) => state.rightField);

    const email = useExportDataStore((state) => state.email);
    const setEmail = useExportDataStore((state) => state.setEmail);

    const file = useExportDataStore((state) => state.file);
    const setFile = useExportDataStore((state) => state.setFile);

    const limit = useExportDataStore((state) => state.limit);
    const setLimit = useExportDataStore((state) => state.setLimit);

    const fileName = useExportDataStore((state) => state.fileName);
    const setFileName = useExportDataStore((state) => state.setFileName);

    const mergedFields = leftField.reduce(
        (result, { title: leftTitle }, index) => {
            const rightFieldItem = rightField[index];
            const rightTitle = rightFieldItem ? rightFieldItem.title : null;
            result[leftTitle] = rightTitle;
            return result;
        },
        {},
    );

    const handleFile = async (event) => {
        const file = event.target.files[0];

        if (file) {
            setFile(file);
            parseFileName(file, setFileName);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataParams = {
            file: file,
            fields: mergedFields,
            limit: limit,
            email: email,
        };

        const { data, ok } = await uploadDataMapper(dataParams);
        if (ok) {
            toast.success(data.success);
        } else {
            handleApiErrors(data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
                <div className="flex flex-col gap-4">
                    <ContentHeaderComponent
                        title={"Upload Files to be Converted"}
                        description={
                            "Upload the CSV data that will be converted to Shopify"
                        }
                    />
                    <div className="flex gap-6">
                        <div className=" flex flex-col gap-2">
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="font-bold"
                            >
                                File to be converted
                            </Typography>
                            <div className="flex rounded-5">
                                <label className="w-fit rounded-l-[6px] border-b-[1px] border-l-[1px] border-t-[1px] border-[#607D8B] bg-white p-2 text-[14px]  !text-neutral-700 lg:min-w-[300px]">
                                    {fileName}
                                </label>
                                <label
                                    htmlFor="baseFile"
                                    className=" flex w-fit cursor-pointer items-center justify-center rounded-r-[5px]  bg-neutral-700 px-3 py-[12px]  text-[12px] font-bold uppercase text-white"
                                >
                                    Choose File
                                </label>
                                <input
                                    id="baseFile"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFile}
                                />
                            </div>
                            <Typography
                                variant="paragraph"
                                color="blue-gray"
                                dataLimit
                                className="text-[12px]"
                            >
                                Upload a CSV File that contains the data you
                                want to convert.
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="font-bold"
                            >
                                Data Limit
                            </Typography>
                            <Input
                                type="number"
                                value={limit}
                                className="!w-[86px]"
                                min={1}
                                onChange={(e) => setLimit(e.target.value)}
                            />
                            <Typography
                                variant="paragraph"
                                color="blue-gray"
                                className="text-[12px]"
                            >
                                Enter the limit of data rows to be exported.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <ContentHeaderComponent
                        title={"Export File"}
                        description={
                            "Download the file or send it to your email address."
                        }
                    />
                    <div className="flex flex-col gap-2">
                        <Typography
                            variant="paragraph"
                            color="black"
                            className="font-bold"
                        >
                            Email Address
                        </Typography>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <Button variant="outlined" size="md" type="submit">
                            Download CSV File
                        </Button>

                        <Button variant="filled" size="md" type="submit">
                            Send to Email
                        </Button>
                    </div>
                    <Alert
                        color="blue"
                        icon={<InformationCircleIcon className="h-4 w-4" />}
                    >
                        Large files over 10 MB must be sent to your email for
                        download.
                    </Alert>
                </div>
            </div>
        </form>
    );
};

export default ExportFileComponent;
