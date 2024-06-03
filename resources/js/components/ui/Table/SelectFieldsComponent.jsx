import React, { useState, useEffect } from "react";
import SearchFieldsComponent from "./SearchFieldsComponent";
import {
    useDataMapperStore,
    useMappingFileUpload,
} from "../../../services/state/store";
import TableComponent from "./TableComponent";

const SelectFieldsComponent = () => {
    const TABLE_HEAD_LEFT = ["Shopify Fields"];
    const TABLE_HEAD_RIGHT = ["Magento Fields"];
    const leftFile = useMappingFileUpload((state) => state.leftFile);
    const rightFile = useMappingFileUpload((state) => state.rightFile);

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredLeftFile, setFilteredLeftFile] = useState([]);
    const [filteredRightFile, setFilteredRightFile] = useState([]);

    useEffect(() => {
        // Filter leftFile based on searchQuery
        setFilteredLeftFile(
            leftFile.filter((row) =>
                row.title.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
        );

        // Filter rightFile based on searchQuery
        setFilteredRightFile(
            rightFile.filter((row) =>
                row.title.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
        );
    }, [searchQuery, leftFile, rightFile]);

    const leftSelectedFields = useDataMapperStore(
        (state) => state.leftSelectedFields,
    );
    const rightSelectedFields = useDataMapperStore(
        (state) => state.rightSelectedFields,
    );

    const setLeftSelectedFields = useDataMapperStore(
        (state) => state.setLeftSelectedFields,
    );
    const setRightSelectedFields = useDataMapperStore(
        (state) => state.setRightSelectedFields,
    );

    const setFormattedLeftField = useDataMapperStore(
        (state) => state.setFormattedLeftField,
    );
    const setFormattedRightField = useDataMapperStore(
        (state) => state.setFormattedRightField,
    );

    const transformArrayToObjects = (array) => {
        return array.map((title, index) => ({
            id: index,
            title: title,
        }));
    };

    const handleLeftSelect = (title) => {
        const updatedLeftSelectedFields = leftSelectedFields.includes(title)
            ? leftSelectedFields.filter((item) => item !== title)
            : [...leftSelectedFields, title];

        setLeftSelectedFields(updatedLeftSelectedFields);
        setFormattedLeftField(
            transformArrayToObjects(updatedLeftSelectedFields),
        );
    };

    const handleRightSelect = (title) => {
        const updatedRightSelectedFields = rightSelectedFields.includes(title)
            ? rightSelectedFields.filter((item) => item !== title)
            : [...rightSelectedFields, title];

        setRightSelectedFields(updatedRightSelectedFields);
        setFormattedRightField(
            transformArrayToObjects(updatedRightSelectedFields),
        );
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="flex flex-col gap-4">
            <SearchFieldsComponent onSearchChange={handleSearchChange} />
            <div className=" flex h-[300px] flex-col items-end gap-3">
                <div className="flex w-full gap-0 overflow-auto !rounded-3 border border-neutral-200">
                    {/* Left FILE */}
                    <TableComponent
                        tableHead={TABLE_HEAD_LEFT}
                        tableRows={filteredLeftFile}
                        selectedFields={leftSelectedFields}
                        handleSelect={handleLeftSelect}
                    />

                    {/* Right File */}
                    <TableComponent
                        tableHead={TABLE_HEAD_RIGHT}
                        tableRows={filteredRightFile}
                        selectedFields={rightSelectedFields}
                        handleSelect={handleRightSelect}
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectFieldsComponent;
