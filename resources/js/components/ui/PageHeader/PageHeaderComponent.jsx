import { useState } from "react";
import {
    IconButton,
    Input,
    Tooltip,
    Typography,
    input,
} from "@material-tailwind/react";
import {
    ArrowLeftCircleIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const PageHeaderComponent = ({
    pageTitle,
    pageDescription,
    withBackIcon = false,
    withRenameIcon = false,
}) => {
    const [toggle, setToggle] = useState(false);

    const navigate = useNavigate();
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <IconButton
                    variant="text"
                    className={`${withBackIcon ? "block" : "hidden"} `}
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeftCircleIcon className="text-primary-500 w-5" />
                </IconButton>

                <Tooltip content="Saving as Draft is coming soon">
                    <div className="flex items-center gap-3">
                        <div className=" flex flex-col gap-2">
                            {toggle ? (
                                <Input
                                    disabled
                                    variant="standard"
                                    placeholder="Standard"
                                />
                            ) : (
                                <Typography variant="h3">
                                    {pageTitle}
                                </Typography>
                            )}
                            <Typography variant="paragraph">
                                {pageDescription}
                            </Typography>
                        </div>
                        <IconButton
                            disabled
                            variant="text"
                            onClick={() => setToggle(() => !toggle)}
                        >
                            <PencilSquareIcon
                                className={`${withRenameIcon ? "block" : "hidden"} w-4 text-primary-500`}
                            />
                        </IconButton>
                    </div>
                </Tooltip>
            </div>
            {/* buttons */}
        </div>
    );
};

export default PageHeaderComponent;
