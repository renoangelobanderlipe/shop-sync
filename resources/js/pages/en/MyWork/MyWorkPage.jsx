import { PlusIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Card,
    List,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import MyWorkPageCard from "../../../components/ui/Card/MyWorkPageCard";
import { useNavigate } from "react-router-dom";
import PageHeaderComponent from "../../../components/ui/PageHeader/PageHeaderComponent";

const data = [
    {
        label: "My Templates",
        value: "templates",
        desc: (
            <>
                {Array(20)
                    .fill(null)
                    .map((_, index) => (
                        <MyWorkPageCard />
                        // <CustomCard key={index} />
                    ))}
            </>
        ),
    },
    {
        label: "Drafts",
        value: "drafts",
        desc: <MyWorkPageCard />,
    },
];

const MyWorkPage = () => {
    const [activeTab, setActiveTab] = useState();
    const navigate = useNavigate();
    return (
        <>
            {/* Move this to pageheader component */}
            <div className="flex justify-between">
                <PageHeaderComponent
                    pageTitle={"Data Mapper"}
                    pageDescription={"Insert Page description here...."}
                />
                <div className="flex items-center">
                    <Button type="button" onClick={() => navigate("/drafts")}>
                        <PlusIcon className="h-4 w-4" />
                        Map File
                    </Button>
                </div>
            </div>

            {/* Content */}
            <Card>
                <Tabs id="custom-animation" value={data[0].value}>
                    <TabsHeader
                        indicatorProps={{
                            className:
                                "bg-primary-100 shadow-none text-primary-500  px-2 py-1",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={` ${
                                    activeTab === value
                                        ? "font-bold  text-primary-500"
                                        : "text-[#607D8B]" // Conditional styling
                                }`}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel
                                key={value}
                                value={value}
                                className="max-h-[500px] overflow-y-auto"
                            >
                                {/* <div className="flex flex-col gap-[24px] ">
                                    {desc}
                                </div> */}
                                <List className="flex w-full flex-col gap-3 rounded p-0 shadow-none">
                                    {desc}
                                </List>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </Card>
        </>
    );
};

export default MyWorkPage;
