module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/mohsensami/src/contexts/GamificationContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GamificationProvider",
    ()=>GamificationProvider,
    "useGamification",
    ()=>useGamification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const GamificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = "gamification_progress";
function GamificationProvider({ children }) {
    const [completedActions, setCompletedActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const totalActions = 10;
    // Load progress from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const data = JSON.parse(saved);
                setCompletedActions(new Set(data.completedActions || []));
            } catch (error) {
                console.error("Failed to load gamification progress:", error);
            }
        }
    }, []);
    // Save progress to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            completedActions: Array.from(completedActions)
        }));
    }, [
        completedActions
    ]);
    const completeAction = (actionId)=>{
        setCompletedActions((prev)=>{
            if (prev.has(actionId)) return prev;
            const newSet = new Set(prev);
            newSet.add(actionId);
            return newSet;
        });
    };
    const resetProgress = ()=>{
        setCompletedActions(new Set());
    };
    const isRewardUnlocked = completedActions.size >= totalActions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GamificationContext.Provider, {
        value: {
            completedActions,
            totalActions,
            isRewardUnlocked,
            completeAction,
            resetProgress
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/mohsensami/src/contexts/GamificationContext.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function useGamification() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GamificationContext);
    if (!context) {
        throw new Error("useGamification must be used within a GamificationProvider");
    }
    return context;
}
}),
"[project]/Desktop/mohsensami/src/data/content.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"personal\":{\"name\":\"Mohsen Sami\",\"title\":\"Frontend Developer | Next.js, React.js\",\"location\":\"Tehran, Iran\",\"bio\":\"Experienced Frontend Developer with 5+ years of expertise, combining a strong work ethic with versatile technical skills. Passionate about leveraging cutting-edge technologies to build impactful solutions and drive a company's mission forward.\",\"yearsExperience\":\"5+\",\"projectsCompleted\":\"20+\"},\"contact\":{\"email\":\"mohsensami.pv@gmail.com\",\"phone\":\"+98-9033451850\",\"linkedin\":\"https://www.linkedin.com/in/mohsensami\",\"linkedinLabel\":\"mohsensami\"},\"experience\":[{\"title\":\"Frontend Developer\",\"company\":\"Delfard\",\"location\":\"On-Site · Tehran, Iran\",\"period\":\"04/2021 - Present\",\"description\":\"Zohal.io is a streamlined Web Service API provider offering developers and businesses ready-to-integrate APIs for rapid product development\",\"achievements\":[\"Launched Zohal.io from scratch, architecting and developing a scalable Next.js monorepo with B2B (API token management) and B2C (no-code) platforms, including a landing page, user dashboard (dashboard.zohal.io), and admin backoffice.\",\"Led frontend development end-to-end using Mantine, Tailwind, and CSS Modules, while mentoring and managing a junior developer to maintain code quality and best practices.\",\"Delivered a seamless user experience for both technical (API integration) and non-technical users, driving adoption of the company's web services\"]},{\"title\":\"FullStack Developer\",\"company\":\"Hacoupian\",\"location\":\"On-Site · Tehran, Iran\",\"period\":\"04/2020 - 03/2022\",\"description\":\"Property Hunter is an AI-powered proptech platform that analyzes your preferences to recommend the best properties for purchase in any target area.\",\"achievements\":[\"As a key contributor to the monorepo project, I led frontend development, architecting and building a responsive Next.js web application and React Native/Expo mobile app with a focus on modularity and seamless user experience.\",\"Beyond frontend work, I actively contributed to full-stack development—integrating APIs with tRPC, optimizing database operations with Prisma, and ensuring end-to-end system cohesion.\"]},{\"title\":\"Backend Developer\",\"company\":\"NovinMarketing \",\"location\":\"On-Site · Tehran, Iran\",\"period\":\"04/2019 - 02/2020\",\"description\":\"Matap is an innovative healthcare consultation platform that connects patients with expert doctors through seamless digital interactions, making specialist care more accessible than ever.\",\"achievements\":[\"As the Frontend Developer, I spearheaded the refactoring of Matap’s web and mobile interfaces using React Native, Expo, TypeScript, and WebSocket, enhancing real-time communication between patients and doctors.\",\"This overhaul optimized the consultation workflow using edge technologies, reducing latency and improving usability across platforms.\"]},{\"title\":\"Wordpress Developer\",\"company\":\"Espinasweb \",\"location\":\"On-Site · Tehran, Iran\",\"period\":\"04/2018 - 02/2019\",\"description\":\"Matap is an innovative healthcare consultation platform that connects patients with expert doctors through seamless digital interactions, making specialist care more accessible than ever.\",\"achievements\":[\"As the Frontend Developer, I spearheaded the refactoring of Matap’s web and mobile interfaces using React Native, Expo, TypeScript, and WebSocket, enhancing real-time communication between patients and doctors.\",\"This overhaul optimized the consultation workflow using edge technologies, reducing latency and improving usability across platforms.\"]},{\"title\":\"Wordpress Developer\",\"company\":\"Seoyab\",\"location\":\"On-Site · Tehran, Iran\",\"period\":\"04/2017 - 02/2018\",\"description\":\"Matap is an innovative healthcare consultation platform that connects patients with expert doctors through seamless digital interactions, making specialist care more accessible than ever.\",\"achievements\":[\"As the Frontend Developer, I spearheaded the refactoring of Matap’s web and mobile interfaces using React Native, Expo, TypeScript, and WebSocket, enhancing real-time communication between patients and doctors.\",\"This overhaul optimized the consultation workflow using edge technologies, reducing latency and improving usability across platforms.\"]}],\"skills\":[{\"category\":\"Framework\",\"items\":[{\"name\":\"Next.js\",\"level\":80},{\"name\":\"React.js\",\"level\":80}]},{\"category\":\"Language\",\"items\":[{\"name\":\"TypeScript\",\"level\":90},{\"name\":\"JavaScript\",\"level\":75}]},{\"category\":\"Mobile\",\"items\":[{\"name\":\"React Native\",\"level\":75},{\"name\":\"Expo\",\"level\":85}]},{\"category\":\"Library\",\"items\":[{\"name\":\"React-Hook-Form\",\"level\":95},{\"name\":\"React-Query\",\"level\":95},{\"name\":\"Zod\",\"level\":95},{\"name\":\"CVA\",\"level\":95},{\"name\":\"React-Table\",\"level\":80}]},{\"category\":\"Styling\",\"items\":[{\"name\":\"Tailwind CSS\",\"level\":95},{\"name\":\"Nativewind\",\"level\":85}]},{\"category\":\"State Management\",\"items\":[{\"name\":\"Zustand\",\"level\":80},{\"name\":\"Redux\",\"level\":75}]},{\"category\":\"API & Backend\",\"items\":[{\"name\":\"TRPC\",\"level\":50},{\"name\":\"REST APIs\",\"level\":50}]},{\"category\":\"UI Libraries\",\"items\":[{\"name\":\"ShadCN\",\"level\":95},{\"name\":\"Mantine\",\"level\":95},{\"name\":\"Material UI\",\"level\":75}]},{\"category\":\"Tools & DevOps\",\"items\":[{\"name\":\"TurboRepo\",\"level\":85},{\"name\":\"Git\",\"level\":85}]}],\"education\":{\"degree\":\"Bachelor's Degree of Computer Engineering (Software)\",\"institution\":\"PatameNoor University\",\"period\":\"06/2014\",\"descriptions\":[\"Completed a comprehensive Computer Engineering program specializing in Software Engineering, building a strong foundation in algorithms, data structures, software architecture, and modern development practices.\",\"Developed practical skills through academic projects and coursework that directly translate to real-world application development, emphasizing clean code, scalability, and user-centric design.\"]},\"gameMode\":{\"hints\":{\"simpleMode\":\"Fun's not your thing? Go simple.\",\"skills\":\"drag the bubble left to see my skills\",\"experience\":\"drag the bubble right to see my experience\",\"education\":\"to see my education\",\"educationKey\":\"E\",\"about\":\"to see about me\",\"aboutKey\":\"A\",\"contact\":\"for contact\",\"contactKey\":\"C\"},\"buttons\":{\"switchToSimple\":\"Switch to Simple Mode\",\"switchToGame\":\"Switch to Game Mode\",\"resumeDownload\":\"Download My Resume\"}},\"sections\":{\"about\":{\"title\":\"About Me\",\"subtitle\":\"Crafting Digital Experiences\",\"paragraphs\":[\"I am a passionate frontend and backend developer with over 8 years of hands-on experience in React.js, Next.js, WordPress, Node.js, and Express.js, specializing in crafting beautiful, functional, and high-performance web applications. I have worked with many leading tech companies in Tehran and completed numerous freelance projects, bridging the gap between creative design and technology to deliver interactive, scalable, and responsive solutions.\",\" I am deeply committed to writing clean, maintainable code, building Progressive Web Apps (PWA), and creating fast, mobile-first experiences optimized for modern web standards.\"],\"stats\":[{\"value\":\"8+\",\"label\":\"Years Experience\"},{\"value\":\"15+\",\"label\":\"Tech Stack\"}],\"videoAlt\":\"Your browser does not support the video tag.\"},\"experience\":{\"title\":\"Experience Timeline\"},\"skills\":{\"title\":\"Tech Stack\",\"proficiencyLabel\":\"Proficiency\"},\"education\":{\"title\":\"Education\"},\"contact\":{\"title\":\"Get In Touch\",\"description\":\"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.\"}},\"footer\":{\"builtWith\":\"Built with\",\"by\":\"by\",\"author\":\"Mohsen Sami\",\"copyright\":\"All rights reserved.\"},\"achievements\":{\"goldenButtonLabel\":\"Unlock Final Achievement\",\"modalTitle\":\"🎉 Congratulations!\",\"modalMessage\":\"You've completed all the achievements and explored every corner of this portfolio!\",\"modalSubMessage\":\"I'd love to hear your thoughts about this experience.\",\"feedbackPrompt\":\"Share your feedback via email:\",\"emailButtonLabel\":\"Send Feedback\",\"closeButtonLabel\":\"Close\"},\"gamification\":{\"tasks\":{\"action_1\":\"Download my resume\",\"action_2\":\"Drag buttons in correct direction (game mode)\",\"action_3\":\"Interact with 3D scene (simple mode)\",\"action_4\":\"Use keyboard shortcuts (A, E, or C keys)\",\"action_5\":\"Scroll to end of simple mode\",\"action_6\":\"Visit experience cards\",\"action_7\":\"Switch between modes\",\"action_8\":\"Explode a particle (game mode)\",\"action_9\":\"Activate all tech stack card achievements simultaneously\",\"action_10\":\"Click the golden achievement button\"},\"hintLabel\":\"Need a hint?\"}}"));}),
"[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamificationProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$contexts$2f$GamificationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/src/contexts/GamificationContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$data$2f$content$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/mohsensami/src/data/content.json (json)");
"use client";
;
;
;
;
;
;
function GamificationProgress() {
    const { completedActions, totalActions, isRewardUnlocked } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$contexts$2f$GamificationContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGamification"])();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHintTooltip, setShowHintTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Get a random remaining task hint
    const remainingTaskHint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const allActions = [
            "action_1",
            "action_2",
            "action_3",
            "action_4",
            "action_5",
            "action_6",
            "action_7",
            "action_8",
            "action_9",
            "action_10"
        ];
        let remaining = allActions.filter((action)=>!completedActions.has(action));
        // Don't show action_10 hint unless 9 actions are completed
        if (remaining.length > 1) {
            remaining = remaining.filter((action)=>action !== "action_10");
        }
        if (remaining.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * remaining.length);
        const randomAction = remaining[randomIndex];
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$src$2f$data$2f$content$2e$json__$28$json$29$__["default"].gamification.tasks[randomAction];
    }, [
        completedActions
    ]);
    // Don't render on mobile
    if (isMobile) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed bottom-24 left-24 z-40 pointer-events-auto",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 0.8,
            duration: 0.4
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative bg-primary-500/10 border border-primary-500/30 rounded-lg shadow-lg overflow-hidden",
                initial: false,
                animate: {
                    width: "auto",
                    height: "auto"
                },
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative",
                    initial: false,
                    animate: {
                        paddingLeft: isHovered ? "1rem" : "0.5rem",
                        paddingRight: isHovered ? "1rem" : "0.5rem",
                        paddingTop: isHovered ? "0.75rem" : "0.5rem",
                        paddingBottom: isHovered ? "0.75rem" : "0.5rem"
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: !isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "flex items-center gap-2 whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: `p-1.5 rounded ${isRewardUnlocked ? "bg-yellow-500/20" : "bg-primary-500/20"}`,
                                        animate: isRewardUnlocked ? {
                                            scale: [
                                                1,
                                                1.05,
                                                1
                                            ]
                                        } : {},
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 1
                                        },
                                        children: isRewardUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                            className: "w-4 h-4 text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4 text-primary-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                            lineNumber: 126,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-foreground/70 font-mono",
                                        children: [
                                            completedActions.size,
                                            "/",
                                            totalActions
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5 mb-2.5 whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: `p-1.5 rounded ${isRewardUnlocked ? "bg-yellow-500/20" : "bg-primary-500/20"}`,
                                                animate: isRewardUnlocked ? {
                                                    scale: [
                                                        1,
                                                        1.05,
                                                        1
                                                    ]
                                                } : {},
                                                transition: {
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 1
                                                },
                                                children: isRewardUnlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                    className: "w-4 h-4 text-yellow-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-4 h-4 text-primary-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-foreground/70 font-mono",
                                                children: [
                                                    completedActions.size,
                                                    "/",
                                                    totalActions
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            remainingTaskHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1 rounded hover:bg-primary-500/20 transition-colors ml-auto",
                                                onMouseEnter: ()=>setShowHintTooltip(true),
                                                onMouseLeave: ()=>setShowHintTooltip(false),
                                                "aria-label": "Show hint",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                    className: "w-3.5 h-3.5 text-primary-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: Array.from({
                                            length: totalActions
                                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: `w-4 h-1 rounded-full ${index < completedActions.size ? "bg-primary-500" : "bg-foreground/10"}`,
                                                initial: {
                                                    scale: 0
                                                },
                                                animate: {
                                                    scale: 1
                                                },
                                                transition: {
                                                    delay: index * 0.05
                                                }
                                            }, index, false, {
                                                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isRewardUnlocked && isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute w-1.5 h-1.5 bg-yellow-400 rounded-full",
                                        style: {
                                            left: "50%",
                                            top: "50%"
                                        },
                                        initial: {
                                            scale: 0,
                                            x: 0,
                                            y: 0,
                                            opacity: 1
                                        },
                                        animate: {
                                            scale: [
                                                0,
                                                1,
                                                0
                                            ],
                                            x: Math.cos(i * Math.PI * 2 / 5) * 30,
                                            y: Math.sin(i * Math.PI * 2 / 5) * 30,
                                            opacity: [
                                                1,
                                                1,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatDelay: 2,
                                            delay: i * 0.1
                                        }
                                    }, i, false, {
                                        fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showHintTooltip && remainingTaskHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 5
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "absolute -top-14 right-0 px-3 py-2 bg-background/95 border border-primary-500/30 rounded-lg shadow-xl whitespace-nowrap z-50 backdrop-blur-sm pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-foreground/90",
                            children: remainingTaskHint
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$mohsensami$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-full right-6 -mt-1 w-2 h-2 bg-background/95 border-r border-b border-primary-500/30 transform rotate-45"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                    lineNumber: 244,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/mohsensami/src/components/GamificationProgress.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6427dd0c._.js.map