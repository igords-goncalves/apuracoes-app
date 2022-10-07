import { useEffect, useState } from "react";

function Data(props) {
    const url =
        "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return setCandidates(data.cand)
            });
    }, []);

    console.log(Array.isArray(candidates))

    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default Data;
