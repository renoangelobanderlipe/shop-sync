import React, { useState } from "react";
import { useDataMapperStore } from "../../../services/state/store";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { IconButton, Typography } from "@material-tailwind/react";
import ColumnFields from "./ColumnFields";
import { LockOpenIcon } from "@heroicons/react/24/solid";

const LeftContainerMapping = () => {
    const formattedLeftField = useDataMapperStore(
        (state) => state.formattedLeftField,
    );

    const [leftState, setLeftState] = useState(formattedLeftField ?? []);
    const setLeftField = useDataMapperStore((state) => state.setLeftField);
    const leftField = useDataMapperStore((state) => state.leftField);

    setLeftField(leftState);

    const getLeftPosition = (id) =>
        leftState.findIndex((fields) => fields.id === id);

    const handleDragLeftEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setLeftState((file) => {
            const originalPos = getLeftPosition(active.id);
            const newPos = getLeftPosition(over.id);

            return arrayMove(file, originalPos, newPos);
        });
    };

    return (
        <div className="h-[375px]  w-[370px] overflow-y-auto overflow-x-hidden">
            <DndContext
                onDragEnd={handleDragLeftEnd}
                collisionDetection={closestCorners}
            >
                <SortableContext
                    items={Array.isArray(leftState) ? leftState : []}
                    strategy={verticalListSortingStrategy}
                >
                    <div className="rounded-2 shadow-container ">
                        <div className="rounded-t-2 bg-neutral-300 sticky top-0 z-10 flex items-center justify-between p-3 select-none">
                            <Typography variant="h6" color="black">
                                Shopify Fields
                            </Typography>
                            <IconButton variant="text">
                                <LockOpenIcon className="text-neutral-900 w-3 h-3" />
                            </IconButton>
                        </div>

                        {Array.isArray(leftState) && leftState.length > 0 ? (
                            leftState.map((item, index) => (
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

export default LeftContainerMapping;
