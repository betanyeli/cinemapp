import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    const hasWindow = typeof window !== 'undefined';

    useEffect(() => {
        const media = hasWindow ? window.matchMedia(query) : null;
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;