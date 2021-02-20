import React, { useState }from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(0); // array destructuring. first element: what you want to keep track on. Second element: function to update

    const renderedItems = items.map((item,index) => {
        const active = index === activeIndex ? 'active' : '';
        // helper function 
        const onTitleClick = (index) => {
            setActiveIndex(index); // whole component will rerender
        }

        // wrap in function in an arrow function means that you only call the function later
        // if you dont wrap it, the function will be called immediately when the webpage renders
        return <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}> 
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })

    return <div className="ui styled accordion">
        {renderedItems}
    </div>;
}

export default Accordion;