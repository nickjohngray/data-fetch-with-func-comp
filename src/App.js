import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
    const [data, setData] = useState([]);
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        fetch(endPoint)
            .then(r => r.json())
            .then((posts) => {
                console.log('fetch data');
                console.log(posts);
            })
    }, []);

    useEffect(() => {
        axios.get(endPoint).then(response => {
            console.log('axios data');
            console.log(response.data);
        })
    }, [])

    useEffect(() => {
        getDataAsync();
        getFetchDataAsync();
    }, [])

    const getFetchDataAsync = async () => {
        const response = await fetch(endPoint);
        const posts = await response.json();
        console.log('getFetchDataAsync');
        console.log(posts);
    }

    const getDataAsync = async () => {
        const response = await axios.get(endPoint);
        console.log('axios data with async');
        console.log(response.data);
        setData(response.data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>
                    An Example using await async, promise with fetch and axios
                </h1>
                <p>
                   Data from end point
                </p>
            </header>

          <div style={style.content}>
            {data.map( (item) => <div>
                <div style={style.title}>{item.title} </div>
                <div style={style.body}>{item.body} </div>
            </div>)}
        </div>
        </div>

    );
}

const style = {
    content: {
        fontWeight: 'bold',
        fontSize: '20px',
        background: 'black',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height:'200px',
        overflow:'scroll'

    },
    title: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'red'
    },
    body: {
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'grey'
    }

}

export default App;
