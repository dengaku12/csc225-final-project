import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Console(props){
    const [gameConsole, setGameConsole] = useState(null);
    const { id } = props;

    useEffect(() => {
        axios.get("http://csc225.mockable.io/consoles/" + id).then((response)=>{
            setGameConsole(response.data);
            
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    if(!gameConsole){
        return <div className="alert alert-primary">
        <div className="spinner-border text-success mr-2" role="status">
            <span className="sr-only">Getting your consoles...</span>
        </div>
        Console coming right up...
        <div className="spinner-border text-danger ml-2" role="status">
            <span className="sr-only">Getting your consoles...</span>
        </div>
    </div>
    }

    return <div>
        <h1 className="text-center">Console Info</h1>
        <div className="card" style={{width: '20rem'}}>
            <img src={gameConsole.image} className="card-img-top" alt="console" />
            <div className="card-body">
                <h5 className="card-title">{gameConsole.name}</h5>
                <p className="card-text">Price: ${gameConsole.price}</p>
                <p className="card-text">Country: {gameConsole.country}</p>
                <p className="card-text">Release Year: {gameConsole.releaseYear}</p>
            </div>
        </div>
    </div>
}

export default Console;