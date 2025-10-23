"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ActionId =
  | "action_1"
  | "action_2"
  | "action_3"
  | "action_4"
  | "action_5"
  | "action_6"
  | "action_7"
  | "action_8"
  | "action_9"
  | "action_10";

interface GamificationState {
  completedActions: Set<ActionId>;
  totalActions: number;
  isRewardUnlocked: boolean;
}

interface GamificationContextType extends GamificationState {
  completeAction: (actionId: ActionId) => void;
  resetProgress: () => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(
  undefined
);

const STORAGE_KEY = "gamification_progress";

export function GamificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [completedActions, setCompletedActions] = useState<Set<ActionId>>(
    new Set()
  );
  const totalActions = 10;

  // Load progress from localStorage on mount
  useEffect(() => {
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
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completedActions: Array.from(completedActions),
      })
    );
  }, [completedActions]);

  const completeAction = (actionId: ActionId) => {
    setCompletedActions((prev) => {
      if (prev.has(actionId)) return prev;
      const newSet = new Set(prev);
      newSet.add(actionId);
      return newSet;
    });
  };

  const resetProgress = () => {
    setCompletedActions(new Set());
  };

  const isRewardUnlocked = completedActions.size >= totalActions;

  return (
    <GamificationContext.Provider
      value={{
        completedActions,
        totalActions,
        isRewardUnlocked,
        completeAction,
        resetProgress,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error(
      "useGamification must be used within a GamificationProvider"
    );
  }
  return context;
}
