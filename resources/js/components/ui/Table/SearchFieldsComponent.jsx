import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";

import React, { useState } from "react";

const SearchFieldsComponent = ({ onSearchChange }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearchChange(event.target.value);
    };
    return (
        <div className="flex justify-between">
            <Input
                placeholder="Search Fields"
                icon={<MagnifyingGlassIcon className="w-4" />}
                value={query}
                onChange={handleInputChange}
            />
            {/* <Input
                placeholder="Search Fields"
                icon={<MagnifyingGlassIcon className="w-4" />}
            /> */}
        </div>
    );
};

export default SearchFieldsComponent;
