import React from 'react';

const Link = ({className,href,children}) => {
    const onClick = (event) => {
        
        // if control or command key is held down
        // opens in new tab
        if (event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault(); // preventts full page reload
        window.history.pushState({}, '',href); //changes the url
        
        const navEvent = new PopStateEvent('popstate'); 
        window.dispatchEvent(navEvent)
    };
    return (
    <a
    className={className}
    href={href}
    onClick={onClick}
    >{children}</a>
    )
};

export default Link;