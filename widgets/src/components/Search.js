import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [debouncedTerm,setDebouncedTerm] = useState(term);
    console.log('I run with every render');

    // only to update debounced term
    useEffect(()=> {
        // search immediately at initalization
        // only when hardcoded first search term state 
        // if (term && !results.length){
        //     search();
        // } else {

        // };

        // only search after 500ms
        const timeoutId = setTimeout(() => {
                setDebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
        
    },[term])

    //need to config to tell it when to run - empty array, array, no array at all
    useEffect(() => {
        
        //make request here
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                    },
            });

            setResults(data.query.search);
        };
        
        if (debouncedTerm) {
            search();
        };

    }, [debouncedTerm]); // only will run when term changes 

    // dangerouslySetInnerHTML -> makes you vulerable to xxs (cross site scripting) attack. with embedded js code in the html
    const renderedResults = results.map((result)=> {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={(e)=>{setTerm(e.target.value)}}
                        className="input"></input>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
};

export default Search;