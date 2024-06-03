import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { LockOpenIcon } from "@heroicons/react/24/solid";
import { Chip, IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import DragIcon from "../../../assets/DragIcon";

const ColumnFields = ({ id, title }) => {
    const { attributes, listeners, setNodeRef, transform, transition, index } =
        useSortable({
            id,
        });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="border-border flex w-full items-center justify-between rounded-none border-b-[1px] bg-white p-3"
        >
            <div className="flex gap-3">
                <DragIcon />
                <Typography
                    variant="paragraph"
                    className="select-none text-[16px]"
                >
                    {title}
                </Typography>
            </div>

            <IconButton variant="text">
                <LockOpenIcon className="text-neutral-900  w-3 h-3" />
            </IconButton>
        </div>
    );
};

export default ColumnFields;
