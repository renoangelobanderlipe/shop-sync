import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Checkbox, Typography } from "@material-tailwind/react";
import React from "react";

const TableComponent = ({
    tableHead,
    tableRows,
    selectedFields,
    handleSelect,
}) => {
    return (
        <table className="inline-flex w-full min-w-max table-auto flex-col text-left">
            <thead className="sticky top-0 z-10 table-header-group !w-full  bg-neutral-200 align-top">
                <tr className="table-row">
                    {tableHead.map((head) => (
                        <th
                            key={head}
                            className="table-cell border-blue-gray-100 px-4 py-3"
                        >
                            <Typography
                                variant="paragraph"
                                color="black"
                                className="flex items-center gap-3 text-base font-bold"
                            >
                                <Checkbox ripple={false} />
                                {head}
                                <ChevronUpDownIcon className="h-3 w-3" />
                            </Typography>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="flex w-full flex-col">
                {tableRows?.map((item) => (
                    <tr key={item.id} className=" w-full">
                        <td className="flex w-full flex-col border-b border-neutral-200 px-4 py-3">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="flex items-center gap-3 !text-base font-normal"
                            >
                                <Checkbox
                                    ripple={false}
                                    checked={selectedFields.includes(
                                        item.title,
                                    )}
                                    onChange={() => handleSelect(item.title)}
                                />
                                {item.title}
                            </Typography>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
