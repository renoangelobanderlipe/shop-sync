import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Input, Typography } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    useDataMapperStore,
    useUserInfoStore,
} from "../../../services/state/store";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import ContentHeaderComponent from "./../PageHeader/ContentHeaderComponent";
import { uploadDataMapper } from "@services/api/api";
import { handleApiErrors } from "@utils/helpers";
import toast from "react-hot-toast";
const schema = z.object({
    file: z
        .instanceof(FileList)
        .refine((files) => files.length === 1, {
            message: "Exactly one file is required.",
        })
        .transform((files) => files[0]), // Extract the single file
    chunk: z
        .string()
        .transform((value) => {
            const parsed = parseInt(value, 10);
            return !isNaN(parsed) && parsed > 0 ? parsed : 0;
        })
        .refine((value) => value > 0, {
            message: "Chunk size is required and must be less than limit.",
        }),
    limit: z
        .string()
        .transform((value) => {
            const parsed = parseInt(value, 10);
            return !isNaN(parsed) && parsed > 0 ? parsed : 0;
        })
        .refine((value) => value > 0, {
            message: "Limit is required and must be a positive number.",
        }),
    email: z.string().email(),
});

const ExportFileComponent = () => {
    const email = useUserInfoStore((state) => state.email);
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: { email: email },
        resolver: zodResolver(schema),
    });

    const leftField = useDataMapperStore((state) => state.leftField);
    const rightField = useDataMapperStore((state) => state.rightField);

    const mergedFields = leftField.reduce(
        (result, { title: leftTitle }, index) => {
            const rightFieldItem = rightField[index];
            const rightTitle = rightFieldItem ? rightFieldItem.title : null;
            result[leftTitle] = rightTitle;
            return result;
        },
        {},
    );

    const onSubmit = async (params) => {
        const { data, ok } = await uploadDataMapper({
            ...params,
            fields: mergedFields,
        });
        if (ok) {
            toast.success(data.success);
        } else {
            setError("root", {
                message: data.error,
            });
            handleApiErrors(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                            <div className="rounded-5 flex">
                                <label className="w-fit rounded-l-[6px] border-b-[1px] border-l-[1px] border-t-[1px] border-[#607D8B] bg-white p-2 text-[14px]  !text-neutral-700 lg:min-w-[300px]">
                                    {watch("file")?.[0]?.name || "Choose File"}
                                </label>
                                <label
                                    htmlFor="baseFile"
                                    className=" flex w-fit cursor-pointer items-center justify-center rounded-r-[5px]  bg-neutral-700 px-3 py-[12px]  text-[12px] font-bold uppercase text-white"
                                >
                                    Choose File
                                </label>
                                <input
                                    {...register("file")}
                                    error={errors.file}
                                    id="baseFile"
                                    type="file"
                                    className="hidden"
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
                            {errors.file && (
                                <div className="text-red-500">
                                    {errors.file.message}
                                </div>
                            )}
                        </div>
                        <div>
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="font-bold"
                            >
                                Data Limit
                            </Typography>
                            <Input
                                {...register("limit")}
                                type="number"
                                placeholder="Data Limit"
                            />
                            {errors.limit && (
                                <div className="text-red-500">
                                    {errors.limit.message}
                                </div>
                            )}
                            <Typography
                                variant="paragraph"
                                color="blue-gray"
                                className="text-[12px]"
                            >
                                Enter the limit of data rows to be exported.
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="font-bold"
                            >
                                Batch Processing
                            </Typography>
                            <Input
                                {...register("chunk")}
                                type="number"
                                placeholder="Batch Processing"
                            />
                            {errors.chunk && (
                                <div className="text-red-500">
                                    {errors.chunk.message}
                                </div>
                            )}
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
                            {...register("email")}
                            type="email"
                            placeholder="Email"
                        />
                        {errors.email && (
                            <div className="text-red-500">
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    <div className="lg:flex-row flex flex-col gap-3">
                        <Button variant="outlined" size="md" type="submit">
                            Download CSV File
                        </Button>

                        <Button
                            variant="filled"
                            size="md"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Loading..." : "Send to Email"}
                        </Button>
                    </div>
                    {errors.root && (
                        <div className="text-red-500">
                            {errors.root.message}
                        </div>
                    )}
                    <Alert
                        color="blue"
                        icon={<InformationCircleIcon className="w-4 h-4" />}
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
