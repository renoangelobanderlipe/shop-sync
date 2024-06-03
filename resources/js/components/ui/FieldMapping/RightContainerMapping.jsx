import { DndContext, closestCorners } from "@dnd-kit/core";
import React, { useState } from "react";
import { useDataMapperStore } from "../../../services/state/store";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { IconButton, Typography } from "@material-tailwind/react";
import ColumnFields from "./ColumnFields";
import { LockOpenIcon } from "@heroicons/react/24/solid";

const RightContainerMapping = () => {
    const formattedRightField = useDataMapperStore(
        (state) => state.formattedRightField,
    );

    const [rightState, setRightState] = useState(formattedRightField ?? []);
    const setRightField = useDataMapperStore((state) => state.setRightField);
    const rightField = useDataMapperStore((state) => state.rightField);

    setRightField(rightState);

    const getRightPosition = (id) =>
        rightState.findIndex((fields) => fields.id === id);

    const handleDragRightEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setRightState((fields) => {
            const originalPos = getRightPosition(active.id);
            const newPos = getRightPosition(over.id);

            return arrayMove(fields, originalPos, newPos);
        });
    };

    return (
        <div className="h-[375px]  w-[370px] overflow-y-auto overflow-x-hidden">
            <DndContext
                onDragEnd={handleDragRightEnd}
                collisionDetection={closestCorners}
            >
                <SortableContext
                    items={Array.isArray(rightState) ? rightState : []}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="!shadow-shadow !rounded-[8px] !shadow-lg ">
                        <div className="sticky top-0 z-10 flex select-none items-center justify-between rounded-t-2 bg-neutral-300 p-3">
                            <Typography variant="h6" color="black">
                                Magento Fields
                            </Typography>
                            <IconButton variant="text">
                                <LockOpenIcon className="h-3 w-3 text-neutral-900" />
                            </IconButton>
                        </div>

                        {Array.isArray(rightState) && rightState.length > 0 ? (
                            rightState.map((item, index) => (
                                <div
                                    className="rounded-[8px] bg-white p-0"
                                    key={index}
                                >
                                    <ColumnFields
                                        id={item.id}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        ) : (
                            <Typography variant="body2">
                                No fields available
                            </Typography>
                        )}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default RightContainerMapping;
