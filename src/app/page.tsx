"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const GameMode = dynamic(() => import("@/components/GameMode"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect mobile and redirect to /simple
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);

    if (checkMobile) {
      router.replace("/simple");
    }
  }, [router]);

  // Don't render anything on mobile (during redirect)
  if (isMobile === null || isMobile === true) {
    return null;
  }

  // Only render GameMode on desktop
  return <GameMode />;
}
