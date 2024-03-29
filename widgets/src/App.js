import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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
  const [selected,setSelected]= useState(options[0])
  return (
      <div>
        <Header />
        <Route path="/">
          <Accordion items={items}/>
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
          label="select a colour"
          options={options}
          selected={selected}
          onSelectedChange={setSelected} />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
  )
};