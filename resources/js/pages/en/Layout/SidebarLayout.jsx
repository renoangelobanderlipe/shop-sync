import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SIDEBARROUTES } from "../../../routes/routes";
import { logoutApi } from "../../../services/api/api";
import toast from "react-hot-toast";
import { handleApiErrors } from "../../../utils/helpers";
import { useUserInfoStore } from "../../../services/state/store";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

const SidebarLayout = () => {
    const clearToken = useUserInfoStore((state) => state.clearToken);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const { data, ok } = await logoutApi();

        if (ok) {
            clearToken();
            toast.success(data.message ?? "Success");
            navigate("/login");
        } else {
            handleApiErrors(data);
        }
    };
    return (
        <Card className="border-border h-screen w-full max-w-[280px] gap-8 border-r-[1px] !px-4 !py-6 !shadow-none 3xl:max-w-[320px]">
            <div className="flex items-center w-10 h-10 gap-3">
                <img
                    src="https://four13.co/wp-content/uploads/2021/02/cropped-Four13Group-logo-favicon-01.png"
                    alt=""
                    srcSet=""
                />
                <Typography variant="h5" className="">
                    ShopSync
                </Typography>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div>
                    {SIDEBARROUTES.map((items, index) => (
                        <List key={index}>
                            <NavLink
                                to={items.path}
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "rounded-2 bg-primary-100 text-primary-600"
                                        : "text-body"
                                }
                            >
                                <ListItem className="">
                                    <ListItemPrefix>
                                        {items.icon}
                                    </ListItemPrefix>
                                    <Typography variant="h6">
                                        {items.pathName}
                                    </Typography>
                                </ListItem>
                            </NavLink>
                        </List>
                    ))}
                </div>
                <List>
                    {/* <NavLink to="/login" replace={true} onClick={handleLogout}> */}
                    <ListItem onClick={handleLogout}>
                        <ListItemPrefix>
                            <ArrowRightStartOnRectangleIcon className="h-[24px] w-[24px]" />
                        </ListItemPrefix>
                        <Typography variant="h6">Sign Out</Typography>
                    </ListItem>
                    {/* </NavLink> */}
                </List>
            </div>
        </Card>
    );
};

export default SidebarLayout;
