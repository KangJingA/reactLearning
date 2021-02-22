import React, {useEffect, useState, useRef} from 'react'

const Dropdown = ( {options, selected, onSelectedChange, label} ) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    //only set up event listener once
    // .addEventListener events get called first, followed by those in react
    useEffect(()=>{

        const onBodyClick = (event) => {
            
            // checks if the element that clicked is inside the ref
            // inside the dropdown 
            if (ref.current && ref.current.contains(event.target)){
                return;
            }

            // if you click outside the dropdown
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        // detach event listener whenever the dropdown is not visible
        return () => {
            document.body.removeEventListener('click',onBodyClick);
        };


    },[]);

    const renderedOptions = options.map((option) => {

        // don't render on the dropdown if the option is selected already
        if (option.value === selected.value){
            return null;
        }
        return(
            <div 
            key={option.value} 
            className="item"
            onClick={()=> onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })
    // ref.current returns you the div that you have referenced to 
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : '' }`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;