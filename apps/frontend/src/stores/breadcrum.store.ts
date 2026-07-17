import type { BreadcrumbItems } from "@/components/atomic/molecules";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


interface BreadcrumState {
    breadScrumItems: BreadcrumbItems[];
    setBreadscrumbItems: (breadScrumItems: BreadcrumbItems[]) => void;
};

export const useBreadcrumbStore = create<BreadcrumState>()(
    persist(
        (set) => ({
            breadScrumItems: [],
            setBreadscrumbItems: (breadScrumItems) => set({ breadScrumItems }),
        }),
        {
            name: "breadcrum-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
