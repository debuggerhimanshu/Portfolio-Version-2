"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import BootScreen from "@/components/boot/BootScreen";
import PortfolioFrame from "@/components/layout/PortfolioFrame";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <BootScreen
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {!loading && <PortfolioFrame />}
    </>
  );
}