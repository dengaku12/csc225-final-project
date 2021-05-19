import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Console from './Console';

function Consoles(){
    const [gameConsoles, setGameConsoles] = useState([]);
    const [selectedConsole, setSelectedConsole] = useState(null);

    useEffect(() => {
        axios.get("http://csc225.mockable.io/consoles").then((response)=>{
            setGameConsoles(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    if(gameConsoles.length === 0){
        return <div>
            <div className="spinner-border text-success mr-2" role="status">
                <span className="sr-only">Getting your consoles...</span>
            </div>
            Gettin your consoles...
            <div className="spinner-border text-danger ml-2" role="status">
                <span className="sr-only">Getting your consoles...</span>
            </div>
        </div>
    }
    if(!!selectedConsole){
        return <div>
            <Console id={selectedConsole}/>
            <button className="btn btn-danger" onClick={() => setSelectedConsole(null)}>Reset</button>
        </div>
    }
    return <div>
        {gameConsoles.map(gameConsole => {
            return (
                <p className="mb-2" key={gameConsole.id}>
                    <button className="btn btn-primary" onClick={() => setSelectedConsole(gameConsole.id)}>
                        {gameConsole.name}
                    </button>
                    <img src={gameConsole.image} className="img-fluid rounded" alt="console" />
                </p>
            );
        })}
    </div>
}

export default Consoles;