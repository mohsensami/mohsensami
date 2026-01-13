(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DraggableParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$contexts$2f$GamificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/src/contexts/GamificationContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DraggableParticles() {
    _s();
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [explosions, setExplosions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [explodedIds, setExplodedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { completeAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$contexts$2f$GamificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGamification"])();
    // Initialize particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableParticles.useEffect": ()=>{
            const particleCount = 30;
            const colors = [
                "#537FE7",
                "#6B95F0",
                "#87B1F9",
                "#AFCBFB"
            ];
            const width = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
            const height = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
            particlesRef.current = Array.from({
                length: particleCount
            }, {
                "DraggableParticles.useEffect": (_, i)=>({
                        id: i,
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        size: Math.random() * 8 + 4,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    })
            }["DraggableParticles.useEffect"]);
        }
    }["DraggableParticles.useEffect"], []);
    // Track mouse position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableParticles.useEffect": ()=>{
            const handleMouseMove = {
                "DraggableParticles.useEffect.handleMouseMove": (e)=>{
                    setMousePos({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["DraggableParticles.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "DraggableParticles.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["DraggableParticles.useEffect"];
        }
    }["DraggableParticles.useEffect"], []);
    // Animate particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableParticles.useEffect": ()=>{
            const width = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
            const height = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
            let animationFrameId;
            const animate = {
                "DraggableParticles.useEffect.animate": ()=>{
                    particlesRef.current = particlesRef.current.map({
                        "DraggableParticles.useEffect.animate": (particle)=>{
                            let { x, y, vx, vy } = particle;
                            // Apply attraction force to mouse cursor
                            const dx = mousePos.x - x;
                            const dy = mousePos.y - y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            const attractionRadius = 150;
                            if (distance < attractionRadius && distance > 0) {
                                const force = (1 - distance / attractionRadius) * 0.08;
                                vx += dx / distance * force;
                                vy += dy / distance * force;
                            }
                            // Apply velocity
                            x += vx;
                            y += vy;
                            // Damping
                            vx *= 0.98;
                            vy *= 0.98;
                            // Add slight random movement
                            vx += (Math.random() - 0.5) * 0.1;
                            vy += (Math.random() - 0.5) * 0.1;
                            // Boundary bounce
                            if (x < 0 || x > width) vx *= -0.8;
                            if (y < 0 || y > height) vy *= -0.8;
                            // Keep in bounds
                            x = Math.max(0, Math.min(width, x));
                            y = Math.max(0, Math.min(height, y));
                            return {
                                ...particle,
                                x,
                                y,
                                vx,
                                vy
                            };
                        }
                    }["DraggableParticles.useEffect.animate"]);
                    forceUpdate({});
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["DraggableParticles.useEffect.animate"];
            animate();
            return ({
                "DraggableParticles.useEffect": ()=>cancelAnimationFrame(animationFrameId)
            })["DraggableParticles.useEffect"];
        }
    }["DraggableParticles.useEffect"], [
        mousePos
    ]);
    // Clean up explosions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DraggableParticles.useEffect": ()=>{
            if (explosions.length > 0) {
                const timer = setTimeout({
                    "DraggableParticles.useEffect.timer": ()=>{
                        setExplosions([]);
                    }
                }["DraggableParticles.useEffect.timer"], 2000);
                return ({
                    "DraggableParticles.useEffect": ()=>clearTimeout(timer)
                })["DraggableParticles.useEffect"];
            }
        }
    }["DraggableParticles.useEffect"], [
        explosions
    ]);
    const handleClick = (particle)=>{
        // Mark particle as exploded
        setExplodedIds((prev)=>new Set([
                ...prev,
                particle.id
            ]));
        // Trigger gamification action
        completeAction("action_8");
        // Create explosion particles
        const explosionCount = 12;
        const newExplosions = Array.from({
            length: explosionCount
        }, (_, i)=>{
            const angle = i / explosionCount * Math.PI * 2;
            const speed = Math.random() * 1.5 + 1;
            return {
                id: "".concat(particle.id, "-").concat(i, "-").concat(Date.now()),
                x: particle.x,
                y: particle.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: particle.color,
                size: Math.random() * 3 + 2
            };
        });
        setExplosions((prev)=>[
                ...prev,
                ...newExplosions
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        children: [
            particlesRef.current.filter((particle)=>!explodedIds.has(particle.id)).map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute pointer-events-auto cursor-pointer",
                    style: {
                        x: particle.x,
                        y: particle.y,
                        width: particle.size,
                        height: particle.size
                    },
                    onClick: ()=>handleClick(particle),
                    whileHover: {
                        scale: 1.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full h-full rounded-full",
                        animate: {
                            opacity: [
                                0.4,
                                0.8,
                                0.4
                            ]
                        },
                        transition: {
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        style: {
                            background: "radial-gradient(circle, ".concat(particle.color, ", transparent)"),
                            boxShadow: "0 0 ".concat(particle.size * 2, "px ").concat(particle.color)
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this)
                }, particle.id, false, {
                    fileName: "[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: explosions.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute pointer-events-none",
                        initial: {
                            x: exp.x,
                            y: exp.y,
                            scale: 1,
                            opacity: 0.8
                        },
                        animate: {
                            x: exp.x + exp.vx * 70,
                            y: exp.y + exp.vy * 70,
                            scale: [
                                1,
                                1.2,
                                0
                            ],
                            opacity: [
                                0.8,
                                0.5,
                                0
                            ]
                        },
                        exit: {
                            opacity: 0,
                            scale: 0
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        style: {
                            width: exp.size,
                            height: exp.size
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-full",
                            style: {
                                background: "radial-gradient(circle, ".concat(exp.color, ", transparent)"),
                                boxShadow: "0 0 ".concat(exp.size * 3, "px ").concat(exp.color)
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    }, exp.id, false, {
                        fileName: "[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(DraggableParticles, "C+fvcUwd7p7AXVZCBCvfj575VBA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$contexts$2f$GamificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGamification"]
    ];
});
_c = DraggableParticles;
var _c;
__turbopack_context__.k.register(_c, "DraggableParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/mohsensami/src/components/DraggableParticles.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_mohsensami_src_components_DraggableParticles_tsx_1e0aa512._.js.map