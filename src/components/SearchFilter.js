import { useState, useEffect, useRef } from 'react';

function SearchFilter() {
    const initData = useRef()
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(initData.current);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                res.json().then(data => {
                    initData.current = data;
                    setResult(data);
                })
            })
            .catch(error => {
                console.error("error when fetch data")
            })
    }, [])

    useEffect(() => {
        if (search === '') {
            setResult(initData.current);
        } else {
            const filteredArray = initData.current.filter(item => {
                return item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
            });
            setResult(filteredArray);
        }
    }, [search])

    return (
        <div>
            <input
                type='text'
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
            />
            <ul>
                {result && result.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchFilter;