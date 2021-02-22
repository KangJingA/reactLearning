import { useState, useEffect} from 'react'; // only need to import when u need jsx

const Route = ({ path, children }) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {

        // rerender when location has changed
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        // listens to event at link.js
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate',onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null
};

export default Route;