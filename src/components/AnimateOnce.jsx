'use client'
import React, { useRef, useEffect, useState } from 'react';
import 'animate.css';

export const AnimateOnce = ({ children, animation, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            });
        }, { threshold: [0, 0.25, 0.5, 0.75, 1] }); // Multiple thresholds

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (isVisible) {
            elementRef.current.classList.add('animate__animated', animation);
        }
    }, [isVisible, animation]);

    return (
        <div id={id} ref={elementRef}>
            {children}
        </div>
    );
};
