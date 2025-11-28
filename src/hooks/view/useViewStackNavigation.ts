import { useState, useMemo } from 'react';

type ViewType = string; 
export const useViewStackNavigation = (initialView: ViewType) => {
    const [viewStack, setViewStack] = useState<ViewType[]>([initialView]);
    
    const activeView = viewStack[viewStack.length - 1];

    const Navigation = useMemo(() => ({
        push: (newView: ViewType) => {
            if (viewStack[viewStack.length - 1] !== newView) {
                setViewStack((prevStack) => [...prevStack, newView]);
            }
        },

        back: () => {
            if (viewStack.length > 1) {
                setViewStack((prevStack) => prevStack.slice(0, -1));
            }
        },

        start: () => {
            setViewStack([initialView]);
        }
        
    }), [viewStack, initialView]); 

    return { activeView, Navigation };
};