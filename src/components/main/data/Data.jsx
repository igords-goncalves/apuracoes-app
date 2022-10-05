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

                return candidates.map((obj) => {
                    return {
                        id: obj.seq,
                        votes: obj.vap,
                        percentOfVotes: obj.pvap,
                        party: obj.cc,
                        number: obj.n,
                        name: obj.nm,
                    }
                })
            })
            // console.log(datas[0].name)
            .then(datas => console.log(datas[0].name))
    }, []);

    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export default Data;
