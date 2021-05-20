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
        return <div className="d-flex justify-content-center alert alert-primary">
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
        return <div className="d-flex flex-column  align-items-center">
            <Console id={selectedConsole}/>
            <button className="btn btn-danger mb-5" style={{width: '20rem'}} onClick={() => setSelectedConsole(null)}>Reset</button>
        </div>
    }
    return <div className="d-flex flex-column justify-content-center">
        <h1 className="text-center">Consoles</h1>
        {gameConsoles.map(gameConsole => {
            return (
                <div className="row mb-4 d-flex justify-content-center border bg-secondary" key={gameConsole.id}>
                    <div className="col-lg">
                        <button className="btn btn-dark" onClick={() => setSelectedConsole(gameConsole.id)}>
                            {gameConsole.name}
                        </button>
                    </div>
                    <div className="col-lg">
                        <img src={gameConsole.image} className="img-fluid rounded-lg border border-dark" alt="console" />
                    </div>
                </div>
            );
        })}
    </div>
}

export default Consoles;