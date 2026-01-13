(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/mohsensami/src/components/Scene3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractiveBackground",
    ()=>InteractiveBackground,
    "default",
    ()=>Scene3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
// Single minimal ring with subtle rotation and mouse interaction
function MinimalRing(param) {
    let { mousePosition } = param;
    _s();
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MinimalRing.useFrame": (state)=>{
            if (ringRef.current) {
                const t = state.clock.getElapsedTime();
                // Base rotation
                ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
                ringRef.current.rotation.y = t * 0.15;
                // Mouse-based rotation (subtle)
                ringRef.current.rotation.x += (mousePosition.y - 0.5) * 0.3;
                ringRef.current.rotation.y += (mousePosition.x - 0.5) * 0.3;
                // Floating animation
                ringRef.current.position.y = Math.sin(t * 0.3) * 0.2;
                // Mouse-based position offset (subtle)
                ringRef.current.position.x = (mousePosition.x - 0.5) * 0.5;
                ringRef.current.position.z = (mousePosition.y - 0.5) * 0.5;
                // Mouse-based scale (subtle pulse on hover)
                const distanceFromCenter = Math.sqrt(Math.pow(mousePosition.x - 0.5, 2) + Math.pow(mousePosition.y - 0.5, 2));
                const scale = 1 + (0.5 - distanceFromCenter) * 0.2;
                ringRef.current.scale.set(scale, scale, scale);
            }
        }
    }["MinimalRing.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ringRef,
        position: [
            0,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                args: [
                    2,
                    0.02,
                    16,
                    100
                ]
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#537FE7",
                transparent: true,
                opacity: 0.15,
                emissive: "#6B95F0",
                emissiveIntensity: 0.2
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(MinimalRing, "p0omQiteSeSUymJDeC/FGrjwy8U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = MinimalRing;
// Ultra minimal particle field
function MinimalParticles() {
    _s1();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesCount = 500;
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MinimalParticles.useMemo[positions]": ()=>{
            const pos = new Float32Array(particlesCount * 3);
            for(let i = 0; i < particlesCount * 3; i += 3){
                const radius = 4 + Math.random() * 4;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;
                pos[i] = radius * Math.sin(phi) * Math.cos(theta);
                pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
                pos[i + 2] = radius * Math.cos(phi);
            }
            return pos;
        }
    }["MinimalParticles.useMemo[positions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MinimalParticles.useFrame": (state)=>{
            if (particlesRef.current) {
                const t = state.clock.getElapsedTime();
                particlesRef.current.rotation.y = t * 0.02;
            }
        }
    }["MinimalParticles.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: particlesRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                    attach: "attributes-position",
                    args: [
                        positions,
                        3
                    ]
                }, void 0, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                size: 0.02,
                color: "#87B1F9",
                transparent: true,
                opacity: 0.2,
                sizeAttenuation: true
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s1(MinimalParticles, "qNKXtuGChPKI5LfVeEWoH/12XZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = MinimalParticles;
function InteractiveBackground() {
    _s2();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveBackground.useEffect": ()=>{
            let hasInteracted = false;
            const handleMouseMove = {
                "InteractiveBackground.useEffect.handleMouseMove": (e)=>{
                    setMousePosition({
                        x: e.clientX / window.innerWidth,
                        y: e.clientY / window.innerHeight
                    });
                    // Detect significant mouse movement (interaction)
                    if (!hasInteracted) {
                        const distance = Math.sqrt(Math.pow(e.clientX / window.innerWidth - 0.5, 2) + Math.pow(e.clientY / window.innerHeight - 0.5, 2));
                        if (distance > 0.1) {
                            hasInteracted = true;
                            // Trigger gamification action
                            const event = new CustomEvent("scene3d-interaction");
                            window.dispatchEvent(event);
                        }
                    }
                }
            }["InteractiveBackground.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "InteractiveBackground.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["InteractiveBackground.useEffect"];
        }
    }["InteractiveBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                    camera: {
                        position: [
                            0,
                            0,
                            6
                        ],
                        fov: 60
                    },
                    style: {
                        opacity: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                            intensity: 0.15
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MinimalParticles, {}, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[540px] h-[540px] rounded-full blur-3xl opacity-40",
                style: {
                    background: "radial-gradient(circle, rgba(83, 127, 231, 0.6) 0%, rgba(107, 149, 240, 0.35) 50%, transparent 70%)",
                    left: "".concat(mousePosition.x * 100, "%"),
                    top: "".concat(mousePosition.y * 100, "%"),
                    transform: "translate(-50%, -50%)",
                    transition: "left 0.8s cubic-bezier(0.4, 0, 0.2, 1), top 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-35",
                style: {
                    background: "radial-gradient(circle, rgba(135, 177, 249, 0.5) 0%, rgba(175, 203, 251, 0.25) 50%, transparent 70%)",
                    left: "".concat((1 - mousePosition.x) * 100, "%"),
                    top: "".concat((1 - mousePosition.y) * 100, "%"),
                    transform: "translate(-50%, -50%)",
                    transition: "left 1s cubic-bezier(0.4, 0, 0.2, 1), top 1s cubic-bezier(0.4, 0, 0.2, 1)"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-primary-950/50 via-background/70 to-primary-900/50"
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-50",
                style: {
                    background: "radial-gradient(circle at ".concat(mousePosition.x * 100, "% ").concat(mousePosition.y * 100, "%, rgba(83, 127, 231, 0.25) 0%, transparent 50%)"),
                    transition: "background 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s2(InteractiveBackground, "joc79xzWGKfMJ0ZZirXVmDCYBOU=");
_c2 = InteractiveBackground;
function Scene3D() {
    _s3();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Scene3D.useEffect": ()=>{
            const handleMouseMove = {
                "Scene3D.useEffect.handleMouseMove": (e)=>{
                    setMousePosition({
                        x: e.clientX / window.innerWidth,
                        y: e.clientY / window.innerHeight
                    });
                }
            }["Scene3D.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "Scene3D.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["Scene3D.useEffect"];
        }
    }["Scene3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 -z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    6
                ],
                fov: 60
            },
            style: {
                opacity: 0.6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.15
                }, void 0, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        5,
                        5,
                        5
                    ],
                    intensity: 0.3
                }, void 0, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        0,
                        0
                    ],
                    intensity: 0.2,
                    color: "#537FE7"
                }, void 0, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MinimalRing, {
                    mousePosition: mousePosition
                }, void 0, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MinimalParticles, {}, void 0, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/mohsensami/src/components/Scene3D.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s3(Scene3D, "joc79xzWGKfMJ0ZZirXVmDCYBOU=");
_c3 = Scene3D;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "MinimalRing");
__turbopack_context__.k.register(_c1, "MinimalParticles");
__turbopack_context__.k.register(_c2, "InteractiveBackground");
__turbopack_context__.k.register(_c3, "Scene3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/mohsensami/src/components/Scene3D.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/mohsensami/src/components/Scene3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_mohsensami_src_components_Scene3D_tsx_ad89e7e8._.js.map