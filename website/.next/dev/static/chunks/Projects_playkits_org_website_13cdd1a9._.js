(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/playkits.org/website/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const menuItems = [
    {
        label: "Home",
        href: "/",
        ariaLabel: "Go to home page",
        rotation: -6,
        hoverStyles: {
            bgColor: "#4d3ef4",
            textColor: "#ffffff"
        }
    },
    {
        label: "Playkits",
        href: "/playkits",
        ariaLabel: "View our playkits",
        rotation: 4,
        hoverStyles: {
            bgColor: "#f40b70",
            textColor: "#ffffff"
        }
    },
    {
        label: "Science",
        href: "/science",
        ariaLabel: "Learn about the science",
        rotation: -4,
        hoverStyles: {
            bgColor: "#fe9001",
            textColor: "#ffffff"
        }
    },
    {
        label: "Partners",
        href: "/partners",
        ariaLabel: "Partner with us",
        rotation: 6,
        hoverStyles: {
            bgColor: "#988c67",
            textColor: "#ffffff"
        }
    },
    {
        label: "About",
        href: "/about",
        ariaLabel: "About Playkits",
        rotation: -5,
        hoverStyles: {
            bgColor: "#7a6ef7",
            textColor: "#ffffff"
        }
    },
    {
        label: "Contact",
        href: "/contact",
        ariaLabel: "Contact us",
        rotation: 5,
        hoverStyles: {
            bgColor: "#f60929",
            textColor: "#ffffff"
        }
    }
];
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const animationDuration = 0.5;
    const staggerDelay = 0.08;
    // Close menu on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleEscape = {
                "Header.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") setIsOpen(false);
                }
            }["Header.useEffect.handleEscape"];
            window.addEventListener("keydown", handleEscape);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("keydown", handleEscape)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Close menu on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (e)=>{
                    if (menuRef.current && !menuRef.current.contains(e.target)) {
                        setIsOpen(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isOpen
    ]);
    const menuVariants = {
        closed: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: animationDuration * 0.6,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        },
        open: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: animationDuration,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    const itemVariants = {
        closed: {
            opacity: 0,
            y: 20,
            rotate: 0
        },
        open: (i)=>({
                opacity: 1,
                y: 0,
                rotate: menuItems[i]?.rotation || 0,
                transition: {
                    duration: animationDuration * 0.8,
                    delay: prefersReducedMotion ? 0 : i * staggerDelay,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                }
            }),
        exit: (i)=>({
                opacity: 0,
                y: 10,
                transition: {
                    duration: animationDuration * 0.4,
                    delay: prefersReducedMotion ? 0 : (menuItems.length - i) * (staggerDelay * 0.5)
                }
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 p-4 lg:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex h-12 w-12 items-center justify-center",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/playkitslogo.svg",
                                alt: "Playkits logo",
                                className: "h-12 w-12"
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden text-xl font-semibold tracking-tight text-foreground sm:block",
                            style: {
                                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
                            },
                            children: "Playkits.org"
                        }, void 0, false, {
                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: menuRef,
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-md transition-colors hover:bg-card",
                            "aria-label": "Toggle navigation menu",
                            "aria-expanded": isOpen,
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        rotate: -90,
                                        opacity: 0
                                    },
                                    animate: {
                                        rotate: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        rotate: 90,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5 text-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this)
                                }, "close", false, {
                                    fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        rotate: 90,
                                        opacity: 0
                                    },
                                    animate: {
                                        rotate: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        rotate: -90,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-5 w-5 text-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, this)
                                }, "menu", false, {
                                    fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute right-0 top-16 z-40 overflow-hidden rounded-3xl border border-border/50 bg-card/95 shadow-2xl backdrop-blur-xl",
                                variants: menuVariants,
                                initial: "closed",
                                animate: "open",
                                exit: "closed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "mb-6 flex justify-center",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.8
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                delay: staggerDelay * 2,
                                                duration: animationDuration * 0.6
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/playkitslogo.svg",
                                                alt: "Playkits logo",
                                                className: "h-14 w-14"
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "flex flex-col items-center gap-2",
                                            children: [
                                                menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        custom: index,
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20,
                                                            rotate: 0
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            rotate: hoveredIndex === index ? 0 : item.rotation,
                                                            scale: hoveredIndex === index ? 1.08 : 1
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 10,
                                                            rotate: 0
                                                        },
                                                        onHoverStart: ()=>setHoveredIndex(index),
                                                        onHoverEnd: ()=>setHoveredIndex(null),
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 400,
                                                            damping: 25,
                                                            delay: prefersReducedMotion ? 0 : index * staggerDelay
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            onClick: ()=>setIsOpen(false),
                                                            "aria-label": item.ariaLabel,
                                                            className: "relative block overflow-hidden rounded-full px-8 py-3 text-center text-base font-medium transition-colors duration-200",
                                                            style: {
                                                                backgroundColor: hoveredIndex === index ? item.hoverStyles.bgColor : "transparent",
                                                                color: hoveredIndex === index ? item.hoverStyles.textColor : "#1e1c15"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                className: "relative z-10",
                                                                animate: {
                                                                    y: hoveredIndex === index ? -2 : 0
                                                                },
                                                                transition: {
                                                                    duration: 0.15
                                                                },
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, item.label, false, {
                                                        fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    custom: menuItems.length,
                                                    variants: itemVariants,
                                                    initial: "closed",
                                                    animate: "open",
                                                    exit: "exit",
                                                    className: "mt-4 w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://gofundme.com/playkits",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        onClick: ()=>setIsOpen(false),
                                                        className: "block w-full rounded-full bg-deep-twilight px-8 py-3.5 text-center text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg",
                                                        children: "Donate Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/playkits.org/website/components/layout/header.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(Header, "xGSUPQQ+xKmMj6fkI+HpkKsAKBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/playkits.org/website/components/ui/animated-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn,
    "FadeInStagger",
    ()=>FadeInStagger,
    "StaggerItem",
    ()=>StaggerItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function FadeIn({ children, delay = 0, className }) {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/Projects/playkits.org/website/components/ui/animated-wrapper.tsx",
            lineNumber: 18,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.5,
            delay
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/playkits.org/website/components/ui/animated-wrapper.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "VVlbsF4XHDtJtLWyDw/S3b1ysqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = FadeIn;
function FadeInStagger({ children, className }) {
    _s1();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/Projects/playkits.org/website/components/ui/animated-wrapper.tsx",
            lineNumber: 44,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            margin: "-50px"
        },
        variants: {
            visible: {
                transition: {
                    staggerChildren: 0.1
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/playkits.org/website/components/ui/animated-wrapper.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s1(FadeInStagger, "VVlbsF4XHDtJtLWyDw/S3b1ysqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = FadeInStagger;
function StaggerItem({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/playkits.org/website/components/ui/animated-wrapper.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c2 = StaggerItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FadeIn");
__turbopack_context__.k.register(_c1, "FadeInStagger");
__turbopack_context__.k.register(_c2, "StaggerItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/playkits.org/website/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/playkits.org/website/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Projects/playkits.org/website/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KitTeaser",
    ()=>KitTeaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/playkits.org/website/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const kits = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"],
        name: "The Anchor",
        tagline: "Personal healing journey",
        description: "A carefully curated collection of sensory tools, comfort objects, and guided activities designed to help one child process trauma at their own pace. Each kit becomes a personal sanctuary of safety.",
        cost: "$18",
        serves: "1 child",
        gradient: "from-deep-twilight/20 via-deep-twilight-light/10 to-transparent",
        accentColor: "deep-twilight",
        glowColor: "rgba(77, 62, 244, 0.3)"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        name: "The Circle",
        tagline: "Healing through community",
        description: "Group activities and cooperative games that bring children together, fostering connection and shared resilience. Perfect for shelters and community centers where collective healing happens.",
        cost: "$85",
        serves: "15-20 children",
        gradient: "from-rosewood/20 via-rosewood-light/10 to-transparent",
        accentColor: "rosewood",
        glowColor: "rgba(244, 11, 112, 0.3)"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        name: "The Facilitator",
        tagline: "Empowering caregivers",
        description: "Comprehensive training materials, activity guides, and trauma-informed resources that equip staff to facilitate play-based healing with confidence and compassion.",
        cost: "$55",
        serves: "Staff training",
        gradient: "from-honey-bronze/20 via-honey-bronze-light/10 to-transparent",
        accentColor: "honey-bronze",
        glowColor: "rgba(254, 144, 1, 0.3)"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        name: "The Resilience Pack",
        tagline: "Hope without borders",
        description: "Culturally-sensitive kits designed specifically for displaced children, featuring universal games and comfort items that transcend language barriers and create moments of joy.",
        cost: "$12",
        serves: "1 child",
        gradient: "from-olive-wood/20 via-olive-wood-light/10 to-transparent",
        accentColor: "olive-wood",
        glowColor: "rgba(152, 140, 103, 0.4)"
    }
];
function KitTeaser({ isStandalone = false }) {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigate = (newIndex)=>{
        if (newIndex < 0 || newIndex >= kits.length) return;
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
    };
    const handleDragEnd = (_, info)=>{
        setIsDragging(false);
        const threshold = 50;
        if (info.offset.x < -threshold && activeIndex < kits.length - 1) {
            navigate(activeIndex + 1);
        } else if (info.offset.x > threshold && activeIndex > 0) {
            navigate(activeIndex - 1);
        }
    };
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KitTeaser.useEffect": ()=>{
            const handleKeyDown = {
                "KitTeaser.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "ArrowLeft") navigate(activeIndex - 1);
                    if (e.key === "ArrowRight") navigate(activeIndex + 1);
                }
            }["KitTeaser.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "KitTeaser.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["KitTeaser.useEffect"];
        }
    }["KitTeaser.useEffect"], [
        activeIndex
    ]);
    const activeKit = kits[activeIndex];
    const cardVariants = {
        enter: (direction)=>({
                x: direction > 0 ? 300 : -300,
                opacity: 0,
                scale: 0.8,
                rotateY: direction > 0 ? 15 : -15
            }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        },
        exit: (direction)=>({
                x: direction < 0 ? 300 : -300,
                opacity: 0,
                scale: 0.8,
                rotateY: direction < 0 ? 15 : -15,
                transition: {
                    duration: 0.5,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                }
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative overflow-hidden bg-gradient-to-b from-background via-deep-twilight-light/10 to-background ${isStandalone ? 'pt-28 pb-20 lg:pt-36 lg:pb-28' : 'py-24 lg:py-32'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-deep-twilight/5 blur-3xl",
                        animate: {
                            x: [
                                0,
                                30,
                                0
                            ],
                            y: [
                                0,
                                -20,
                                0
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-honey-bronze/5 blur-3xl",
                        animate: {
                            x: [
                                0,
                                -30,
                                0
                            ],
                            y: [
                                0,
                                20,
                                0
                            ]
                        },
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mb-16 text-center",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.7,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
                                children: "Our Playkits"
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-6 font-serif text-4xl font-medium leading-tight text-foreground lg:text-5xl",
                                children: "Tools designed for healing"
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
                                children: "Each kit is thoughtfully crafted to meet children where they are in their healing journey."
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "relative mx-auto max-w-4xl",
                        style: {
                            perspective: "1200px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-4 top-1/2 z-20 -translate-y-1/2 lg:-left-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>navigate(activeIndex - 1),
                                    disabled: activeIndex === 0,
                                    className: "flex h-12 w-12 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-4 top-1/2 z-20 -translate-y-1/2 lg:-right-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>navigate(activeIndex + 1),
                                    disabled: activeIndex === kits.length - 1,
                                    className: "flex h-12 w-12 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                custom: direction,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    custom: direction,
                                    variants: prefersReducedMotion ? {} : cardVariants,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    drag: prefersReducedMotion ? false : "x",
                                    dragConstraints: {
                                        left: 0,
                                        right: 0
                                    },
                                    dragElastic: 0.1,
                                    onDragStart: ()=>setIsDragging(true),
                                    onDragEnd: handleDragEnd,
                                    className: "relative cursor-grab active:cursor-grabbing",
                                    style: {
                                        transformStyle: "preserve-3d"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative overflow-hidden rounded-3xl bg-gradient-to-br ${activeKit.gradient} p-1`,
                                        style: {
                                            boxShadow: `0 25px 50px -12px ${activeKit.glowColor}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-[22px] bg-card/95 backdrop-blur-xl p-8 lg:p-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: `absolute left-0 top-0 h-1 bg-${activeKit.accentColor}`,
                                                    initial: {
                                                        width: 0
                                                    },
                                                    animate: {
                                                        width: "100%"
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: [
                                                            0.22,
                                                            1,
                                                            0.36,
                                                            1
                                                        ]
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-8 lg:grid-cols-2 lg:gap-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: `relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br ${activeKit.gradient}`,
                                                                    initial: {
                                                                        scale: 0.5,
                                                                        opacity: 0
                                                                    },
                                                                    animate: {
                                                                        scale: 1,
                                                                        opacity: 1
                                                                    },
                                                                    transition: {
                                                                        delay: 0.2,
                                                                        duration: 0.5,
                                                                        type: "spring"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            className: `absolute inset-0 rounded-3xl border-2 border-${activeKit.accentColor}/30`,
                                                                            animate: {
                                                                                scale: [
                                                                                    1,
                                                                                    1.2,
                                                                                    1
                                                                                ],
                                                                                opacity: [
                                                                                    0.5,
                                                                                    0,
                                                                                    0.5
                                                                                ]
                                                                            },
                                                                            transition: {
                                                                                duration: 2,
                                                                                repeat: Infinity,
                                                                                ease: "easeInOut"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(activeKit.icon, {
                                                                            className: `h-16 w-16 text-${activeKit.accentColor}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "mt-8 text-center",
                                                                    initial: {
                                                                        opacity: 0,
                                                                        y: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        y: 0
                                                                    },
                                                                    transition: {
                                                                        delay: 0.3
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-serif text-5xl font-medium text-foreground",
                                                                            children: activeKit.cost
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-sm text-muted-foreground",
                                                                            children: "/ kit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-2 text-sm text-muted-foreground",
                                                                            children: [
                                                                                "Serves ",
                                                                                activeKit.serves
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col justify-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                                    className: `text-sm font-medium uppercase tracking-wider text-${activeKit.accentColor}`,
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    transition: {
                                                                        delay: 0.2
                                                                    },
                                                                    children: activeKit.tagline
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                                                    className: "mt-3 font-serif text-3xl font-medium text-foreground lg:text-4xl",
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    transition: {
                                                                        delay: 0.25
                                                                    },
                                                                    children: activeKit.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                                    className: "mt-6 text-lg leading-relaxed text-muted-foreground",
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    transition: {
                                                                        delay: 0.3
                                                                    },
                                                                    children: activeKit.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "mt-8",
                                                                    initial: {
                                                                        opacity: 0,
                                                                        y: 20
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        y: 0
                                                                    },
                                                                    transition: {
                                                                        delay: 0.4
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        asChild: true,
                                                                        className: "rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/playkits",
                                                                            children: [
                                                                                "Learn more",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                    className: "ml-2 h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                                    lineNumber: 310,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                }, activeIndex, false, {
                                    fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 flex justify-center gap-3",
                                children: kits.map((kit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>navigate(index),
                                        className: `relative h-3 overflow-hidden rounded-full transition-all duration-300 ${index === activeIndex ? "w-10" : "w-3"}`,
                                        whileHover: {
                                            scale: 1.2
                                        },
                                        whileTap: {
                                            scale: 0.9
                                        },
                                        "aria-label": `Go to ${kit.name}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute inset-0 rounded-full transition-colors duration-300 ${index === activeIndex ? `bg-${kit.accentColor}` : "bg-muted-foreground/30"}`
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            index === activeIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: `absolute inset-0 rounded-full bg-${kit.accentColor}`,
                                                layoutId: "activeDot",
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, kit.name, true, {
                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-8 hidden justify-center gap-4 lg:flex",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.5
                                },
                                children: kits.map((kit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>navigate(index),
                                        className: `group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${index === activeIndex ? `bg-${kit.accentColor}/10 ring-2 ring-${kit.accentColor}/30` : "bg-muted/50 hover:bg-muted"}`,
                                        whileHover: {
                                            y: -2
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(kit.icon, {
                                                className: `h-5 w-5 transition-colors ${index === activeIndex ? `text-${kit.accentColor}` : "text-muted-foreground group-hover:text-foreground"}`
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-medium transition-colors ${index === activeIndex ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`,
                                                children: kit.name
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, kit.name, true, {
                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-16 text-center",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            variant: "outline",
                            className: "rounded-full bg-transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/playkits",
                                children: [
                                    "View all playkits",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "ml-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/playkits.org/website/components/home/kit-teaser.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(KitTeaser, "Rp9bLBiFdFbA8Wr5J6DpUQTieUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$playkits$2e$org$2f$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = KitTeaser;
var _c;
__turbopack_context__.k.register(_c, "KitTeaser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_playkits_org_website_13cdd1a9._.js.map