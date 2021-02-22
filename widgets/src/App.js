import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import reactDom from 'react-dom';

const items = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework',
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers',
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components',
    },
  ];

  // passed down to options component as props
const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'A shade of blue',
      value: 'blue'
    }
]

export default () => {
  // const [selected,setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
      <div>
          {/* <Accordion items={items}/> */}
          {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
          {showDropdown ? 
            <Dropdown
            selected={selected}
            onSelectedChange={setSelected} 
            options={options} 
            /> 
            : null
          }
           */}
           <Translate />
      </div>
  )
};