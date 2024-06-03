import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useUserInfoStore } from "../../../services/state/store";
import Lottie from "lottie-react";
import authenticateJson from "@assets/json/authentication.json";
import { loginApi } from "../../../services/api/api";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        // defaultValues: {
        //     email: "example@example.com",
        // },
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const setToken = useUserInfoStore((state) => state.setToken);

    const onSubmit = async (loginData) => {
        const { ok, data } = await loginApi(loginData);

        if (ok) {
            setToken(data.token);
            navigate("/");
            toast.success(data.message);
        } else {
            setError("root", {
                message: data.error,
            });
        }
    };

    return (
        <div className="grid h-screen grid-cols-12 overflow-hidden">
            <div className=" relative hidden bg-[#FFE9D1] dark:bg-[#14181c] lg:col-span-7 lg:block xl:col-span-8">
                <div className=" flex items-center justify-center w-full">
                    <Lottie animationData={authenticateJson} loop={true} />
                </div>
            </div>
            <div className=" lg:col-span-5 lg:p-8 xl:col-span-4 2xl:col-span-4 flex flex-col items-center col-span-12">
                <form
                    className="3xl:p-6 lg:p-0 flex flex-col items-center gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="3xl:mt-24 flex flex-col gap-4 mt-12">
                        <Typography
                            variant="h3"
                            className=" ont-semibold leading-7 text-center uppercase"
                        >
                            Login
                        </Typography>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className=" font-normal text-center"
                        >
                            Seamless Access, Secure Connection: Your Gateway to
                            a Personalized Experience.
                        </Typography>
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <div className="form-control !w-full ">
                            <label htmlFor="email">
                                <span className="text-[.875rem] leading-5">
                                    Email Address
                                </span>
                            </label>
                            <Input
                                {...register("email")}
                                error={errors.email}
                                id="email"
                                name="email"
                                size="md"
                                placeholder="Email Address"
                                containerProps={{ className: "w-full" }}
                            />
                            {errors.email && (
                                <div className="text-red-500">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">
                                <span className="text-[.875rem] leading-5">
                                    Password
                                </span>
                            </label>
                            <Input
                                {...register("password")}
                                type="password"
                                containerProps={{ className: "w-full" }}
                                error={errors.password}
                                id="password"
                                name="password"
                                size="md"
                                placeholder="Password"
                                variant="outlined"
                            />
                            {errors.password && (
                                <div className="text-red-500">
                                    {errors.password.message}
                                </div>
                            )}
                        </div>
                        <div className="line-h flex justify-between">
                            <label></label>
                            <NavLink
                                to="/sign-in"
                                className="text-sm leading-5"
                            >
                                Forgot Password?
                            </NavLink>
                        </div>
                    </div>

                    <Button
                        disabled={isSubmitting}
                        type="submit"
                        size="md"
                        fullWidth={true}
                        className="flex items-center justify-center gap-4 text-[14px]"
                    >
                        <ArrowRightEndOnRectangleIcon className="w-4 h-4" />
                        {isSubmitting ? "Loading..." : "Login"}
                    </Button>
                    {errors.root && (
                        <div className="text-red-500">
                            {errors.root.message}
                        </div>
                    )}

                    <p className="mt-6 text-sm leading-5 text-center">
                        Don't have an account?{" "}
                        <NavLink
                            className="text-primary-500 hover:underline font-semibold"
                            to="/register"
                        >
                            Create One
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
