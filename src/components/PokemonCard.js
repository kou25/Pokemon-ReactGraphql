import React,{useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt';
export default function PokemonCard({pokemon,index}) {

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed:400,
            glare: true,
            "max-glare": 1
        });
      }, [pokemon]);

    return (
        <div className="card">
            <div className="content">
                <div className="Image-conatiner">
                    <div className="circle"></div>
                    <img src={pokemon?.image}/>
                </div>
                <h2>{index + 1}</h2>
                <h3>{pokemon?.name}</h3>
                <div className="button-section">
                {pokemon?.attacks?.special.slice(0,3).map(attack=><button>{attack?.name}</button>)}
                </div>
            </div>
        </div>
    )
}
