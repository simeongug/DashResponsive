import AffichMeteo from '../components/AffichMeteo'
import FormText from '../components/FormText'

// import MeteoVille from "./components/MeteoVille";
import React, { useState } from "react";

function MeteoVille() {
    const [ville, setVille] = useState("");
    const handlerSearch = (texte) => {
        setVille(texte);
    };
    return (
        <div className="MeteoVille">
            <h1>Meteo Ville</h1>
            <FormText handlerS={handlerSearch}></FormText>
            <p>Ville : {`${ville}`}</p>
            <AffichMeteo vil={`${ville}`}></AffichMeteo>
        </div>
    );
}

export default MeteoVille;
