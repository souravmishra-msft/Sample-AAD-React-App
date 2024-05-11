import { useEffect, useRef, useState } from 'react';

export const useActive = (time) => {
    const [active, setActive] = useState(false);
    const timer = useRef();
    const events = ["keypress", "mousemove", "touchmove", "click", "scroll"];

    useEffect(() => {
        const handleEvent = () => {

            /** Check if there are any previous timers that exits. If exits, then clear it. */
            if (timer.current) {
                window.clearTimeout(timer.current);
            }

            setActive(true);

            /** Once the time that we pass as argument is over, we set setActive to false. */
            timer.current = window.setTimeout(() => {
                setActive(false);
            }, time);
        }

        /** Iterate through all the events in the events Array and attach a listener to each of those events */
        events.forEach((event) => document.addEventListener(event, handleEvent));

        return () => {
            /** Remove the listeners when the components unmounts */
            events.forEach((event) => {
                document.removeEventListener(event, handleEvent);
            });
            clearTimeout(timer.current);
        };
    }, [time]);

    /** return the active state */
    return active;
}