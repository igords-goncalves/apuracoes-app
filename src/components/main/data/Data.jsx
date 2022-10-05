import { useEffect, useState } from "react";

function Data(props) {
    const url =
        "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";

    const [id, setId] = useState(0);
    const [votes, setVotes] = useState(0);
    const [percentOfVotes, setPercentOfVotes] = useState(0);
    const [party, setParty] = useState("");
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const candidates = data.cand;
                return candidates;
            })
            .then((datas) => {
                setId(datas.map(({ seq }) => seq));
                setVotes(datas.map(({ vap }) => vap));
                setPercentOfVotes(datas.map(({ pvap }) => pvap));
                setParty(datas.map(({ cc }) => cc));
                setNumber(datas.map(({ n }) => n));
                setName(datas.map(({ nm }) => nm));
            });
    }, []);

    return (
        <div>
            <ul>
                <li>{votes[0]}</li>
                <li>{percentOfVotes[0]}</li>
                <li>{party[0]}</li>
                <li>{number[0]} - {name[0]}</li>
            </ul>
        </div>
    )
}

export default Data;
