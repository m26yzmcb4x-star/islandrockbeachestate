"use client";

import { useEffect, useState, useRef, RefObject } from 'react';

export function useIntersectionObserver(
    threshold = 0.1,
    rootMargin = '0px'
): [RefObject<HTMLDivElement | null>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Content must never stay invisible: if IntersectionObserver isn't
        // available, or the element somehow never crosses the threshold
        // (a failed observer, a layout edge case), show it anyway.
        if (typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return;
        }

        const fallback = window.setTimeout(() => setIsVisible(true), 2000);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    window.clearTimeout(fallback);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            window.clearTimeout(fallback);
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin]);

    return [ref, isVisible];
}
