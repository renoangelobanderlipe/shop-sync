export const theme = {
    button: {
        defaultProps: {
            variant: "filled",
            size: "sm",
            color: "blue",
            fullWidth: false,
            ripple: true,
            className: "flex items-center gap-2",
        },
        valid: {
            variants: ["filled", "outlined", "gradient", "text"],
            sizes: ["sm", "md", "lg"],
            colors: ["gray", "blue", "red"],
        },
        styles: {
            base: {
                initial: {
                    verticalAlign: "align-middle",
                    userSelect: "select-none",
                    fontFamily: "font-sans",
                    fontWeight: "font-bold",
                    textAlign: "text-center",
                    textTransform: "uppercase",
                    transition: "transition-all",
                    disabled:
                        "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
                },
                fullWidth: {
                    display: "block",
                    width: "w-full",
                },
            },
            sizes: {
                sm: {
                    fontSize: "text-xs",
                    py: "py-2",
                    px: "px-3",
                    borderRadius: "rounded-lg",
                },
                md: {
                    fontSize: "text-xs",
                    py: "py-[12px]",
                    px: "px-3",
                    borderRadius: "rounded-lg",
                },
                lg: {
                    fontSize: "text-sm",
                    py: "py-3",
                    px: "px-4",
                    borderRadius: "rounded-lg",
                },
            },
            variants: {
                filled: {
                    gray: {
                        backgroud: "bg-neutral-300",
                        color: "text-white",
                        shadow: "shadow-md shadow-gray-500/20",
                        hover: "hover:shadow-lg hover:shadow-gray-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },

                    blue: {
                        backgroud: "bg-primary-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-blue-500/20",
                        hover: "hover:shadow-lg hover:shadow-blue-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },

                    red: {
                        backgroud: "bg-danger-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-red-500/20",
                        hover: "hover:shadow-lg hover:shadow-red-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                },

                outlined: {
                    gray: {
                        border: "border border-neutral-500",
                        color: "text-gray-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-gray-200",
                        active: "active:opacity-[0.85]",
                    },

                    blue: {
                        border: "border border-primary-500",
                        color: "text-primary-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-blue-200",
                        active: "active:opacity-[0.85]",
                    },

                    red: {
                        border: "border border-danger-500",
                        color: "text-danger-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-red-200",
                        active: "active:opacity-[0.85]",
                    },
                },
                text: {
                    gray: {
                        color: "text-neutral-500",
                        hover: "hover:bg-neutral-500/10",
                        active: "active:bg-neutral-500/30",
                    },

                    blue: {
                        color: "text-primary-500",
                        hover: "hover:bg-primary-500/10",
                        active: "active:bg-primary-500/30",
                    },
                    red: {
                        color: "text-danger-500",
                        hover: "hover:bg-danger-500/10",
                        active: "active:bg-danger-500/30",
                    },
                },
            },
        },
    },

    card: {
        defaultProps: {
            variant: "filled",
            color: "white",
            shadow: true,
            className: "",
        },
        valid: {
            variants: ["filled"],
            colors: ["transparent", "white"],
        },
        styles: {
            base: {
                initial: {
                    position: "relative",
                    display: "flex flex-col gap-5 overflow-y-auto p-5 3xl:p-6",
                    gap: "gap-5",
                    flexDirection: "flex-col",
                    backgroundClip: "bg-clip-border",
                    borderRadius: "rounded-[10px]",
                    height: "h-screen",
                },
                shadow: {
                    boxShadow: "shadow-container",
                },
            },
            variants: {
                filled: {
                    transparent: {
                        backgroud: "bg-transparent",
                        color: "text-body",
                        shadow: "shadow-container",
                    },
                    white: {
                        backgroud: "bg-white",
                        color: "text-body",
                        boxShadow: "shadow-container",
                    },
                },
            },
        },
    },

    input: {
        defaultProps: {
            variant: "outlined",
            size: "md",
            color: "blue",
            label: "",
            error: false,
            success: false,
            icon: undefined,
            labelProps: { className: "hidden" },
            containerProps: undefined,
            shrink: false,
            className: "",
        },
        valid: {
            variants: ["outlined"],
            sizes: ["md", "lg"],
            colors: ["black", "blue", "red"],
        },
        styles: {
            base: {
                container: {
                    position: "relative",
                    width: "w-fit",
                    minWidth: "min-w-[200px]",
                },
                input: {
                    peer: "peer",
                    width: "w-full",
                    height: "h-full",
                    bg: "bg-transparent",
                    color: "text-neutral-700",
                    fontFamily: "font-sans",
                    fontWeight: "font-normal",
                    outline: "outline outline-0 focus:outline-0",
                    disabled: "disabled:bg-blue-gray-50 disabled:border-0",
                    transition: "transition-all",
                },

                icon: {
                    display: "grid",
                    placeItems: "place-items-center",
                    position: "absolute",
                    color: "text-primary-500",
                },
                asterisk: {
                    display: "inline-block",
                    color: "text-danger-500",
                    ml: "ml-0.5",
                },
            },
            variants: {
                outlined: {
                    base: {
                        input: {
                            border: "!border bg-white text-neutral-900 placeholder:text-neutral-600 placeholder:opacity-100  ",
                            borderWidth: "placeholder-shown:border border",
                            borderColor:
                                "placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200",
                            floated: {
                                borderWidth: "border focus:border-2",
                                borderColor:
                                    "border-t-transparent focus:border-t-transparent",
                            },
                        },
                        inputWithIcon: {
                            pr: "!pr-9",
                        },
                        icon: {
                            top: "top-2/4",
                            right: "right-3",
                            transform: "-translate-y-2/4",
                        },
                        label: {
                            position: "-top-1.5",
                            fontSize: "peer-placeholder-shown:text-sm",
                            floated: {
                                fontSize: "text-[11px] peer-focus:text-[11px]",
                            },
                            before: {
                                content: "before:content[' ']",
                                display: "before:block",
                                boxSizing: "before:box-border",
                                width: "before:w-2.5",
                                height: "before:h-1.5",
                                mt: "before:mt-[6.5px]",
                                mr: "before:mr-1",
                                borderColor:
                                    "peer-placeholder-shown:before:border-transparent",
                                borderRadius: "before:rounded-tl-md",
                                floated: {
                                    bt: "before:border-t peer-focus:before:border-t-2",
                                    bl: "before:border-l peer-focus:before:border-l-2",
                                },
                                pointerEvents: "before:pointer-events-none",
                                transition: "before:transition-all",
                                disabled:
                                    "peer-disabled:before:border-transparent",
                            },
                            after: {
                                content: "after:content[' ']",
                                display: "after:block",
                                flexGrow: "after:flex-grow",
                                boxSizing: "after:box-border",
                                width: "after:w-2.5",
                                height: "after:h-1.5",
                                mt: "after:mt-[6.5px]",
                                ml: "after:ml-1",
                                borderColor:
                                    "peer-placeholder-shown:after:border-transparent",
                                borderRadius: "after:rounded-tr-md",
                                floated: {
                                    bt: "after:border-t peer-focus:after:border-t-2",
                                    br: "after:border-r peer-focus:after:border-r-2",
                                },
                                pointerEvents: "after:pointer-events-none",
                                transition: "after:transition-all",
                                disabled:
                                    "peer-disabled:after:border-transparent",
                            },
                        },
                    },
                    sizes: {
                        md: {
                            container: {
                                height: "h-10",
                            },
                            input: {
                                fontSize: "text-sm",
                                px: "px-3",
                                py: "py-2.5",
                                borderRadius: "rounded-[7px]",
                            },
                            label: {
                                lineHeight:
                                    "peer-placeholder-shown:leading-[3.75]",
                            },
                            icon: {
                                width: "w-5",
                                height: "h-5",
                            },
                        },
                        lg: {
                            container: {
                                height: "h-11",
                            },
                            input: {
                                fontSize: "text-sm",
                                px: "px-3",
                                py: "py-3",
                                borderRadius: "rounded-md",
                            },
                            label: {
                                lineHeight:
                                    "peer-placeholder-shown:leading-[4.1]",
                            },
                            icon: {
                                width: "w-6",
                                height: "h-6",
                            },
                        },
                    },
                    colors: {
                        input: {
                            black: {
                                color: "text-neutral-900",
                                borderColor: "border-neutral-900",
                                borderColorFocused: "focus:border-neutral-900",
                            },

                            blue: {
                                border: " ",
                                borderColor: "!border-neutral-500",
                                borderColorFocused:
                                    "focus:!border-primary-500 focus:!border-t-primary-500",
                            },

                            red: {
                                borderColor: "border-blue-gray-200",
                                borderColorFocused:
                                    "focus:!border-danger-500 focus:!border-t-danger-500 ",
                            },
                        },
                        label: {
                            black: {
                                color: "!text-black peer-focus:text-black",
                                before: "before:border-black peer-focus:before:!border-black",
                                after: "after:border-black peer-focus:after:!border-black",
                            },
                            white: {
                                color: "!text-white peer-focus:text-white",
                                before: "before:border-white peer-focus:before:!border-white",
                                after: "after:border-white peer-focus:after:!border-white",
                            },
                            "blue-gray": {
                                color: "text-blue-gray-400 peer-focus:text-blue-gray-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-blue-gray-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-blue-gray-500",
                            },
                            gray: {
                                color: "text-blue-gray-400 peer-focus:text-gray-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-gray-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-gray-500",
                            },
                            brown: {
                                color: "text-blue-gray-400 peer-focus:text-brown-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-brown-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-brown-500",
                            },
                            "deep-orange": {
                                color: "text-blue-gray-400 peer-focus:text-deep-orange-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-deep-orange-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-deep-orange-500",
                            },
                            orange: {
                                color: "text-blue-gray-400 peer-focus:text-orange-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-orange-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-orange-500",
                            },
                            amber: {
                                color: "text-blue-gray-400 peer-focus:text-amber-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-amber-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-amber-500",
                            },
                            yellow: {
                                color: "text-blue-gray-400 peer-focus:text-yellow-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-yellow-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-yellow-500",
                            },
                            lime: {
                                color: "text-blue-gray-400 peer-focus:text-lime-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-lime-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-lime-500",
                            },
                            "light-green": {
                                color: "text-blue-gray-400 peer-focus:text-light-green-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-light-green-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-light-green-500",
                            },
                            green: {
                                color: "text-blue-gray-400 peer-focus:text-green-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-green-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-green-500",
                            },
                            teal: {
                                color: "text-blue-gray-400 peer-focus:text-teal-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-teal-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-teal-500",
                            },
                            cyan: {
                                color: "text-blue-gray-400 peer-focus:text-cyan-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-cyan-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-cyan-500",
                            },
                            "light-blue": {
                                color: "text-blue-gray-400 peer-focus:text-light-blue-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-light-blue-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-light-blue-500",
                            },
                            blue: {
                                color: "text-blue-gray-400 peer-focus:text-blue-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-blue-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-blue-500",
                            },
                            indigo: {
                                color: "text-blue-gray-400 peer-focus:text-indigo-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-indigo-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-indigo-500",
                            },
                            "deep-purple": {
                                color: "text-blue-gray-400 peer-focus:text-deep-purple-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-deep-purple-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-deep-purple-500",
                            },
                            purple: {
                                color: "text-blue-gray-400 peer-focus:text-purple-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-purple-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-purple-500",
                            },
                            pink: {
                                color: "text-blue-gray-400 peer-focus:text-pink-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-pink-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-pink-500",
                            },
                            red: {
                                color: "text-blue-gray-400 peer-focus:text-red-500",
                                before: "before:border-blue-gray-200 peer-focus:before:!border-red-500",
                                after: "after:border-blue-gray-200 peer-focus:after:!border-red-500",
                            },
                        },
                    },
                    error: {
                        input: {
                            borderColor:
                                "border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500",
                            borderColorFocused: "focus:border-red-500",
                        },
                        label: {
                            color: "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
                            before: "before:border-red-500 peer-focus:before:border-red-500",
                            after: "after:border-red-500 peer-focus:after:border-red-500",
                        },
                    },
                    success: {
                        input: {
                            borderColor:
                                "border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500",
                            borderColorFocused: "focus:border-green-500",
                        },
                        label: {
                            color: "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
                            before: "before:border-green-500 peer-focus:before:border-green-500",
                            after: "after:border-green-500 peer-focus:after:border-green-500",
                        },
                    },
                    shrink: {
                        input: {
                            borderTop: "!border-t-transparent",
                        },
                        label: {
                            fontSize: "!text-[11px]",
                            lineHeight: "!leading-tight",
                            borderColor:
                                "before:!border-blue-gray-200 after:!border-blue-gray-200",
                        },
                    },
                },
            },
        },
    },
    iconButton: {
        defaultProps: {
            variant: "filled",
            size: "md",
            color: "gray",
            fullWidth: false,
            ripple: true,
            className: "",
        },
        valid: {
            variants: ["filled", "outlined", "gradient", "text"],
            sizes: ["sm", "md", "lg"],
            colors: [
                "white",
                "blue-gray",
                "gray",
                "brown",
                "deep-orange",
                "orange",
                "amber",
                "yellow",
                "lime",
                "light-green",
                "green",
                "teal",
                "cyan",
                "light-blue",
                "blue",
                "indigo",
                "deep-purple",
                "purple",
                "pink",
                "red",
            ],
        },
        styles: {
            base: {
                position: "relative",
                verticalAlign: "align-middle",
                userSelect: "select-none",
                fontFamily: "font-sans",
                fontWeight: "font-medium",
                textAlign: "text-center",
                textTransform: "uppercase",
                transition: "transition-all",
                disabled:
                    "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
            },
            sizes: {
                sm: {
                    width: "w-8",
                    maxWidth: "max-w-[32px]",
                    height: "h-8",
                    maxHeight: "max-h-[32px]",
                    borderRadius: "rounded-lg",
                    fontSize: "text-xs",
                },
                md: {
                    width: "w-10",
                    maxWidth: "max-w-[40px]",
                    height: "h-10",
                    maxHeight: "max-h-[40px]",
                    borderRadius: "rounded-lg",
                    fontSize: "text-xs",
                },
                lg: {
                    width: "w-12",
                    maxWidth: "max-w-[48px]",
                    height: "h-12",
                    maxHeight: "max-h-[48px]",
                    borderRadius: "rounded-lg",
                    fontSize: "text-sm",
                },
            },
            variants: {
                filled: {
                    white: {
                        backgroud: "bg-white",
                        color: "text-blue-gray-900",
                        shadow: "shadow-md shadow-blue-gray-500/10",
                        hover: "hover:shadow-lg hover:shadow-blue-gray-500/20",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    "blue-gray": {
                        backgroud: "bg-blue-gray-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-blue-gray-500/20",
                        hover: "hover:shadow-lg hover:shadow-blue-gray-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    gray: {
                        backgroud: "bg-gray-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-gray-500/20",
                        hover: "hover:shadow-lg hover:shadow-gray-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    brown: {
                        backgroud: "bg-brown-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-brown-500/20",
                        hover: "hover:shadow-lg hover:shadow-brown-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    "deep-orange": {
                        backgroud: "bg-deep-orange-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-deep-orange-500/20",
                        hover: "hover:shadow-lg hover:shadow-deep-orange-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    orange: {
                        backgroud: "bg-orange-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-orange-500/20",
                        hover: "hover:shadow-lg hover:shadow-orange-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    amber: {
                        backgroud: "bg-amber-500",
                        color: "text-black",
                        shadow: "shadow-md shadow-amber-500/20",
                        hover: "hover:shadow-lg hover:shadow-amber-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    yellow: {
                        backgroud: "bg-yellow-500",
                        color: "text-black",
                        shadow: "shadow-md shadow-yellow-500/20",
                        hover: "hover:shadow-lg hover:shadow-yellow-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    lime: {
                        backgroud: "bg-lime-500",
                        color: "text-black",
                        shadow: "shadow-md shadow-lime-500/20",
                        hover: "hover:shadow-lg hover:shadow-lime-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    "light-green": {
                        backgroud: "bg-light-green-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-light-green-500/20",
                        hover: "hover:shadow-lg hover:shadow-light-green-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    green: {
                        backgroud: "bg-green-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-green-500/20",
                        hover: "hover:shadow-lg hover:shadow-green-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    teal: {
                        backgroud: "bg-teal-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-teal-500/20",
                        hover: "hover:shadow-lg hover:shadow-teal-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    cyan: {
                        backgroud: "bg-cyan-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-cyan-500/20",
                        hover: "hover:shadow-lg hover:shadow-cyan-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    "light-blue": {
                        backgroud: "bg-light-blue-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-light-blue-500/20",
                        hover: "hover:shadow-lg hover:shadow-light-blue-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    blue: {
                        backgroud: "bg-blue-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-blue-500/20",
                        hover: "hover:shadow-lg hover:shadow-blue-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    indigo: {
                        backgroud: "bg-indigo-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-indigo-500/20",
                        hover: "hover:shadow-lg hover:shadow-indigo-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    "deep-purple": {
                        backgroud: "bg-deep-purple-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-deep-purple-500/20",
                        hover: "hover:shadow-lg hover:shadow-deep-purple-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    purple: {
                        backgroud: "bg-purple-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-purple-500/20",
                        hover: "hover:shadow-lg hover:shadow-purple-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    pink: {
                        backgroud: "bg-pink-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-pink-500/20",
                        hover: "hover:shadow-lg hover:shadow-pink-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    red: {
                        backgroud: "bg-red-500",
                        color: "text-white",
                        shadow: "shadow-md shadow-red-500/20",
                        hover: "hover:shadow-lg hover:shadow-red-500/40",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                },
                gradient: {
                    white: {
                        backgroud: "bg-white",
                        color: "text-blue-gray-900",
                        shadow: "shadow-md shadow-blue-gray-500/10",
                        hover: "hover:shadow-lg hover:shadow-blue-gray-500/20",
                        focus: "focus:opacity-[0.85] focus:shadow-none",
                        active: "active:opacity-[0.85] active:shadow-none",
                    },
                    "blue-gray": {
                        backgroud:
                            "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-blue-gray-500/20",
                        hover: "hover:shadow-lg hover:shadow-blue-gray-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    gray: {
                        backgroud:
                            "bg-gradient-to-tr from-gray-600 to-gray-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-gray-500/20",
                        hover: "hover:shadow-lg hover:shadow-gray-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    brown: {
                        backgroud:
                            "bg-gradient-to-tr from-brown-600 to-brown-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-brown-500/20",
                        hover: "hover:shadow-lg hover:shadow-brown-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    "deep-orange": {
                        backgroud:
                            "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-deep-orange-500/20",
                        hover: "hover:shadow-lg hover:shadow-deep-orange-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    orange: {
                        backgroud:
                            "bg-gradient-to-tr from-orange-600 to-orange-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-orange-500/20",
                        hover: "hover:shadow-lg hover:shadow-orange-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    amber: {
                        backgroud:
                            "bg-gradient-to-tr from-amber-600 to-amber-400",
                        color: "text-black",
                        shadow: "shadow-md shadow-amber-500/20",
                        hover: "hover:shadow-lg hover:shadow-amber-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    yellow: {
                        backgroud:
                            "bg-gradient-to-tr from-yellow-600 to-yellow-400",
                        color: "text-black",
                        shadow: "shadow-md shadow-yellow-500/20",
                        hover: "hover:shadow-lg hover:shadow-yellow-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    lime: {
                        backgroud:
                            "bg-gradient-to-tr from-lime-600 to-lime-400",
                        color: "text-black",
                        shadow: "shadow-md shadow-lime-500/20",
                        hover: "hover:shadow-lg hover:shadow-lime-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    "light-green": {
                        backgroud:
                            "bg-gradient-to-tr from-light-green-600 to-light-green-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-light-green-500/20",
                        hover: "hover:shadow-lg hover:shadow-light-green-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    green: {
                        backgroud:
                            "bg-gradient-to-tr from-green-600 to-green-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-green-500/20",
                        hover: "hover:shadow-lg hover:shadow-green-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    teal: {
                        backgroud:
                            "bg-gradient-to-tr from-teal-600 to-teal-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-teal-500/20",
                        hover: "hover:shadow-lg hover:shadow-teal-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    cyan: {
                        backgroud:
                            "bg-gradient-to-tr from-cyan-600 to-cyan-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-cyan-500/20",
                        hover: "hover:shadow-lg hover:shadow-cyan-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    "light-blue": {
                        backgroud:
                            "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-light-blue-500/20",
                        hover: "hover:shadow-lg hover:shadow-light-blue-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    blue: {
                        backgroud:
                            "bg-gradient-to-tr from-blue-600 to-blue-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-blue-500/20",
                        hover: "hover:shadow-lg hover:shadow-blue-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    indigo: {
                        backgroud:
                            "bg-gradient-to-tr from-indigo-600 to-indigo-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-indigo-500/20",
                        hover: "hover:shadow-lg hover:shadow-indigo-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    "deep-purple": {
                        backgroud:
                            "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-deep-purple-500/20",
                        hover: "hover:shadow-lg hover:shadow-deep-purple-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    purple: {
                        backgroud:
                            "bg-gradient-to-tr from-purple-600 to-purple-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-purple-500/20",
                        hover: "hover:shadow-lg hover:shadow-purple-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    pink: {
                        backgroud:
                            "bg-gradient-to-tr from-pink-600 to-pink-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-pink-500/20",
                        hover: "hover:shadow-lg hover:shadow-pink-500/40",
                        active: "active:opacity-[0.85]",
                    },
                    red: {
                        backgroud: "bg-gradient-to-tr from-red-600 to-red-400",
                        color: "text-white",
                        shadow: "shadow-md shadow-red-500/20",
                        hover: "hover:shadow-lg hover:shadow-red-500/40",
                        active: "active:opacity-[0.85]",
                    },
                },
                outlined: {
                    white: {
                        border: "border border-white",
                        color: "text-white",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-white/50",
                        active: "active:opacity-[0.85]",
                    },
                    "blue-gray": {
                        border: "border border-blue-gray-500",
                        color: "text-blue-gray-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-blue-gray-200",
                        active: "active:opacity-[0.85]",
                    },
                    gray: {
                        border: "border border-gray-500",
                        color: "text-gray-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-gray-200",
                        active: "active:opacity-[0.85]",
                    },
                    brown: {
                        border: "border border-brown-500",
                        color: "text-brown-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-brown-200",
                        active: "active:opacity-[0.85]",
                    },
                    "deep-orange": {
                        border: "border border-deep-orange-500",
                        color: "text-deep-orange-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-deep-orange-200",
                        active: "active:opacity-[0.85]",
                    },
                    orange: {
                        border: "border border-orange-500",
                        color: "text-orange-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-orange-200",
                        active: "active:opacity-[0.85]",
                    },
                    amber: {
                        border: "border border-amber-500",
                        color: "text-amber-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-amber-200",
                        active: "active:opacity-[0.85]",
                    },
                    yellow: {
                        border: "border border-yellow-500",
                        color: "text-yellow-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-yellow-200",
                        active: "active:opacity-[0.85]",
                    },
                    lime: {
                        border: "border border-lime-500",
                        color: "text-lime-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-lime-200",
                        active: "active:opacity-[0.85]",
                    },
                    "light-green": {
                        border: "border border-light-green-500",
                        color: "text-light-green-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-light-green-200",
                        active: "active:opacity-[0.85]",
                    },
                    green: {
                        border: "border border-green-500",
                        color: "text-green-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-green-200",
                        active: "active:opacity-[0.85]",
                    },
                    teal: {
                        border: "border border-teal-500",
                        color: "text-teal-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-teal-200",
                        active: "active:opacity-[0.85]",
                    },
                    cyan: {
                        border: "border border-cyan-500",
                        color: "text-cyan-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-cyan-200",
                        active: "active:opacity-[0.85]",
                    },
                    "light-blue": {
                        border: "border border-light-blue-500",
                        color: "text-light-blue-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-light-blue-200",
                        active: "active:opacity-[0.85]",
                    },
                    blue: {
                        border: "border border-blue-500",
                        color: "text-blue-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-blue-200",
                        active: "active:opacity-[0.85]",
                    },
                    indigo: {
                        border: "border border-indigo-500",
                        color: "text-indigo-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-indigo-200",
                        active: "active:opacity-[0.85]",
                    },
                    "deep-purple": {
                        border: "border border-deep-purple-500",
                        color: "text-deep-purple-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-deep-purple-200",
                        active: "active:opacity-[0.85]",
                    },
                    purple: {
                        border: "border border-purple-500",
                        color: "text-purple-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-purple-200",
                        active: "active:opacity-[0.85]",
                    },
                    pink: {
                        border: "border border-pink-500",
                        color: "text-pink-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-pink-200",
                        active: "active:opacity-[0.85]",
                    },
                    red: {
                        border: "border border-red-500",
                        color: "text-red-500",
                        hover: "hover:opacity-75",
                        focus: "focus:ring focus:ring-red-200",
                        active: "active:opacity-[0.85]",
                    },
                },
                text: {
                    white: {
                        color: "text-white",
                        hover: "hover:bg-white/10",
                        active: "active:bg-white/30",
                    },
                    "blue-gray": {
                        color: "text-blue-gray-500",
                        hover: "hover:bg-blue-gray-500/10",
                        active: "active:bg-blue-gray-500/30",
                    },
                    gray: {
                        color: "text-gray-500",
                        hover: "hover:bg-gray-500/10",
                        active: "active:bg-gray-500/30",
                    },
                    brown: {
                        color: "text-brown-500",
                        hover: "hover:bg-brown-500/10",
                        active: "active:bg-brown-500/30",
                    },
                    "deep-orange": {
                        color: "text-deep-orange-500",
                        hover: "hover:bg-deep-orange-500/10",
                        active: "active:bg-deep-orange-500/30",
                    },
                    orange: {
                        color: "text-orange-500",
                        hover: "hover:bg-orange-500/10",
                        active: "active:bg-orange-500/30",
                    },
                    amber: {
                        color: "text-amber-500",
                        hover: "hover:bg-amber-500/10",
                        active: "active:bg-amber-500/30",
                    },
                    yellow: {
                        color: "text-yellow-500",
                        hover: "hover:bg-yellow-500/10",
                        active: "active:bg-yellow-500/30",
                    },
                    lime: {
                        color: "text-lime-500",
                        hover: "hover:bg-lime-500/10",
                        active: "active:bg-lime-500/30",
                    },
                    "light-green": {
                        color: "text-light-green-500",
                        hover: "hover:bg-light-green-500/10",
                        active: "active:bg-light-green-500/30",
                    },
                    green: {
                        color: "text-green-500",
                        hover: "hover:bg-green-500/10",
                        active: "active:bg-green-500/30",
                    },
                    teal: {
                        color: "text-teal-500",
                        hover: "hover:bg-teal-500/10",
                        active: "active:bg-teal-500/30",
                    },
                    cyan: {
                        color: "text-cyan-500",
                        hover: "hover:bg-cyan-500/10",
                        active: "active:bg-cyan-500/30",
                    },
                    "light-blue": {
                        color: "text-light-blue-500",
                        hover: "hover:bg-light-blue-500/10",
                        active: "active:bg-light-blue-500/30",
                    },
                    blue: {
                        color: "text-blue-500",
                        hover: "hover:bg-blue-500/10",
                        active: "active:bg-blue-500/30",
                    },
                    indigo: {
                        color: "text-indigo-500",
                        hover: "hover:bg-indigo-500/10",
                        active: "active:bg-indigo-500/30",
                    },
                    "deep-purple": {
                        color: "text-deep-purple-500",
                        hover: "hover:bg-deep-purple-500/10",
                        active: "active:bg-deep-purple-500/30",
                    },
                    purple: {
                        color: "text-purple-500",
                        hover: "hover:bg-purple-500/10",
                        active: "active:bg-purple-500/30",
                    },
                    pink: {
                        color: "text-pink-500",
                        hover: "hover:bg-pink-500/10",
                        active: "active:bg-pink-500/30",
                    },
                    red: {
                        color: "text-red-500",
                        hover: "hover:bg-red-500/10",
                        active: "active:bg-red-500/30",
                    },
                },
            },
        },
    },
    typography: {
        styles: {
            variants: {
                h1: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[64px]",
                    fontWeight: "font-black",
                    lineHeight: "leading-tight",
                },
                h2: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: " text-[32px] lg:text-[55px]",
                    fontWeight: "font-black",
                    lineHeight: "leading-[1.3]",
                },
                h3: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[32px] md:text-[36px] lg:text-[40px] ",
                    fontWeight: "font-bold",
                    lineHeight: "leading-snug",
                },
                h4: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[24px] lg:text-[36px]",
                    fontWeight: "font-bold",
                    lineHeight: "leading-snug",
                },
                h5: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[20px] md:text-[24px]",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h6: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[14px] lg:text-[18px]",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-relaxed",
                },
                lead: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-xl",
                    fontWeight: "font-normal",
                    lineHeight: "leading-relaxed",
                },
                paragraph: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-[14px]  3xl:text-[16px]",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
                small: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-sm lg:text-[10px]  3xl:text-[12px]",
                    fontWeight: "font-light",
                    lineHeight: "leading-normal",
                },
            },
            colors: {
                black: {
                    color: "text-neutral-900",
                },
                white: {
                    color: "text-white",
                },
                red: {
                    color: "text-red",
                },
                "blue-gray": {
                    color: "text-neutral-700",
                },
                blue: {
                    color: "text-primary-500",
                },
                gray: {
                    color: "text-neutral-400",
                },
            },
        },
    },

    dialog: {
        defaultProps: {
            size: "sm",
            dismiss: {
                enabled: false,
            },
            animate: {
                unmount: {},
                mount: {},
            },
            className: " flex flex-col gap-24",
        },
        valid: {
            sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
        },
        styles: {
            base: {
                backdrop: {
                    display: "grid",
                    placeItems: "place-items-center",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "w-screen",
                    height: "h-screen",
                    backgroundColor: "bg-black",
                    backgroundOpacity: "bg-opacity-50",
                    backdropFilter: "backdrop-blur-md",
                },
                container: {
                    position: "relative",
                    bg: "",
                    m: "m-0",
                    borderRadius: "rounded-lg 3xl:rounded-xl",
                    boxShadow: "shadow-2xl",
                    color: "text-text-body",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
            },
        },
    },
    dialogHeader: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                display: "flex",
                alignItems: "items-center",
                flexShrink: "shrink-0",
                p: "px-24 pt-24 md:px-48 md:pt-48",
            },
        },
    },
    dialogBody: {
        defaultProps: {
            className: "flex flex-col gap-24",
            divider: false,
        },
        styles: {
            base: {
                initial: {
                    position: "relative",
                    p: "px-24 md:px-48",
                    color: "text-blue-gray-500",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
                divider: {
                    borderTop: "border-t",
                    borderTopColor: "border-t-blue-gray-100",
                    borderBottom: "border-b",
                    borderBottomColor: "border-b-blue-gray-100",
                },
            },
        },
    },
    dialogFooter: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                display: "flex",
                alignItems: "items-center",
                justifyContent: "justify-end",
                flexShrink: "shrink-0",
                flexWrap: "flex-wrap",
                p: "px-24 pb-24 md:px-48 md:pb-48",
                color: "text-blue-gray-500",
            },
        },
    },
    list: {
        defaultProps: {
            ripple: true,
            className: "",
        },
        styles: {
            base: {
                list: {
                    display: "flex",
                    flexDirection: "flex-col",
                    gap: "gap-1",
                    minWidth: "min-w-[240px]",
                    p: "p-2",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-normal",
                    color: "text-blue-gray-700",
                },
                item: {
                    initial: {
                        display: "flex",
                        alignItems: "items-center",
                        width: "w-full",
                        padding: "p-2",
                        borderRadius: "rounded-2 ",
                        textAlign: "font-medium text-start",
                        lightHeight: "leading-tight",
                        transition: "transition-all",
                        bg: "hover:bg-primary-100 focus:bg-primary-100 focus:text-primary-600 active:bg-primary-100 active:text-primary",
                        color: "hover:text-primary-500  hover:text-primary-600 focus:text-primary-500 active:text-primary-500",
                        outline: "outline-none",
                    },
                    selected: {
                        bg: "bg-primary-100",
                        color: "text-primary-500",
                    },
                },
            },
        },
    },

    tabs: {
        defaultProps: {
            className: "active:text-primary-500 transition-colors duration-300",
            orientation: "horizontal",
        },
        styles: {
            base: {
                overflow: "overflow-hidden",
            },
            horizontal: {
                display: "flex flex-col gap-5",
            },
            vertical: {
                display: "flex",
            },
        },
    },

    tabsHeader: {
        defaultProps: {
            className: "w-fit overflow-x-auto whitespace-nowrap ",
        },
        indicatorProps: {},
        styles: {
            base: {
                display: "flex",
                position: "relative",
                bg: "bg-transparent",
                bgOpacity: "bg-opacity-60",
                borderRadius: "rounded-lg",
                p: "p-1",
            },
            horizontal: {
                flexDirection: "flex-row",
            },
            vertical: {
                flexDirection: "flex-col",
            },
        },
    },
    tabPanel: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                width: "w-full",
                height: "h-max",
                color: "text-gray-700",
                p: "p-0",
                fontSmoothing: "antialiased",
                fontFamily: "font-sans",
                fontSize: "text-base",
                fontWeight: "font-light",
                lineHeight: "leading-relaxed",
            },
        },
    },
    checkbox: {
        defaultProps: {
            color: "blue",
            label: undefined,
            icon: undefined,
            ripple: true,
            className: "",
            disabled: false,
            containerProps: undefined,
            labelProps: undefined,
            iconProps: undefined,
        },
        valid: {
            colors: [
                "blue-gray",
                "gray",
                "brown",
                "deep-orange",
                "orange",
                "amber",
                "yellow",
                "lime",
                "light-green",
                "green",
                "teal",
                "cyan",
                "light-blue",
                "blue",
                "indigo",
                "deep-purple",
                "purple",
                "pink",
                "red",
            ],
        },
        styles: {
            base: {
                root: {
                    display: "inline-flex",
                    alignItems: "items-center",
                },
                container: {
                    position: "relative",
                    display: "flex",
                    alignItems: "items-center",
                    cursor: "cursor-pointer",
                    p: "p-2",
                    borderRadius: "rounded-full",
                },
                input: {
                    background: "bg-white",
                    peer: "peer",
                    position: "relative",
                    appearance: "appearance-none",
                    width: "w-[18px]",
                    height: "h-[18px]",
                    borderWidth: "border",
                    borderRadius: "rounded-[5px]",
                    borderColor: "border-blue-gray-200",
                    cursor: "cursor-pointer",
                    transition: "transition-all",
                    before: {
                        content: "before:content['']",
                        display: "before:block",
                        bg: "before:bg-primary-300",
                        width: "before:w-5",
                        height: "before:h-5",
                        borderRadius: "before:rounded-full",
                        position: "before:absolute",
                        top: "before:top-2/4",
                        left: "before:left-2/4",
                        transform:
                            "before:-translate-y-2/4 before:-translate-x-2/4",
                        opacity: "before:opacity-0 hover:before:opacity-10",
                        transition: "before:transition-opacity",
                    },
                },
                label: {
                    color: "text-gray-700",
                    fontWeight: "font-light",
                    userSelect: "select-none",
                    cursor: "cursor-pointer",
                    mt: "mt-px",
                },
                icon: {
                    color: "text-white",
                    position: "absolute",
                    top: "top-2/4",
                    left: "left-2/4",
                    translate: "-translate-y-2/4 -translate-x-2/4",
                    pointerEvents: "pointer-events-none",
                    opacity: "opacity-0 peer-checked:opacity-100",
                    transition: "transition-opacity",
                },
                disabled: {
                    opacity: "opacity-50",
                    pointerEvents: "pointer-events-none",
                },
            },
            colors: {
                gray: {
                    background: "checked:bg-gray-500",
                    border: "checked:border-gray-500",
                    before: "checked:before:bg-gray-500",
                },
                brown: {
                    background: "checked:bg-brown-500",
                    border: "checked:border-brown-500",
                    before: "checked:before:bg-brown-500",
                },
                "deep-orange": {
                    background: "checked:bg-deep-orange-500",
                    border: "checked:border-deep-orange-500",
                    before: "checked:before:bg-deep-orange-500",
                },
                orange: {
                    background: "checked:bg-orange-500",
                    border: "checked:border-orange-500",
                    before: "checked:before:bg-orange-500",
                },
                amber: {
                    background: "checked:bg-amber-500",
                    border: "checked:border-amber-500",
                    before: "checked:before:bg-amber-500",
                },
                yellow: {
                    background: "checked:bg-yellow-500",
                    border: "checked:border-yellow-500",
                    before: "checked:before:bg-yellow-500",
                },
                lime: {
                    background: "checked:bg-lime-500",
                    border: "checked:border-lime-500",
                    before: "checked:before:bg-lime-500",
                },
                "light-green": {
                    background: "checked:bg-light-green-500",
                    border: "checked:border-light-green-500",
                    before: "checked:before:bg-light-green-500",
                },
                green: {
                    background: "checked:bg-green-500",
                    border: "checked:border-green-500",
                    before: "checked:before:bg-green-500",
                },
                teal: {
                    background: "checked:bg-teal-500",
                    border: "checked:border-teal-500",
                    before: "checked:before:bg-teal-500",
                },
                cyan: {
                    background: "checked:bg-cyan-500",
                    border: "checked:border-cyan-500",
                    before: "checked:before:bg-cyan-500",
                },
                "light-blue": {
                    background: "checked:bg-light-blue-500",
                    border: "checked:border-light-blue-500",
                    before: "checked:before:bg-light-blue-500",
                },
                blue: {
                    background: "checked:bg-blue-500",
                    border: "checked:border-blue-500",
                    before: "checked:before:bg-blue-500",
                },
                indigo: {
                    background: "checked:bg-indigo-500",
                    border: "checked:border-indigo-500",
                    before: "checked:before:bg-indigo-500",
                },
                "deep-purple": {
                    background: "checked:bg-deep-purple-500",
                    border: "checked:border-deep-purple-500",
                    before: "checked:before:bg-deep-purple-500",
                },
                purple: {
                    background: "checked:bg-purple-500",
                    border: "checked:border-purple-500",
                    before: "checked:before:bg-purple-500",
                },
                pink: {
                    background: "checked:bg-pink-500",
                    border: "checked:border-pink-500",
                    before: "checked:before:bg-pink-500",
                },
                red: {
                    background: "checked:bg-red-500",
                    border: "checked:border-red-500",
                    before: "checked:before:bg-red-500",
                },
            },
        },
    },
    alert: {
        defaultProps: {
            variant: "ghost",
            color: "blue",
            icon: undefined,
            open: true,
            action: undefined,
            onClose: undefined,
            animate: {
                unmount: {},
                mount: {},
            },
            className: "",
        },
        valid: {
            variants: ["ghost"],
            colors: ["orange", "green", "blue", "red"],
        },
        styles: {
            base: {
                alert: {
                    position: "relative",
                    display: "block",
                    width: "w-fit",
                    fontFamily: "font-sans",
                    fontSize: "text-[14px]",
                    fontWeight: "font-semibold",
                    px: "px-3",
                    py: "py-3",
                    borderRadius: "rounded-2",
                },
                action: {
                    position: "!absolute",
                    top: "top-3",
                    right: "right-3",
                },
            },
            variants: {
                ghost: {
                    orange: {
                        backgroud: "bg-warning-100",
                        color: "text-warning-700",
                    },

                    green: {
                        backgroud: "bg-success-100",
                        color: "text-success-700",
                    },

                    blue: {
                        backgroud: "bg-info-100",
                        color: "text-info-700",
                    },

                    red: {
                        backgroud: "bg-danger-700",
                        color: "text-danger-700",
                    },
                },
            },
        },
    },
};
