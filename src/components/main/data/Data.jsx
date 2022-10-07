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

    function getArryId(ids) {
        return ids.map(({ seq }) => Number(seq));
    }

    function getArryVotes(votes) {
        return votes.map(({ vap }) => Number(vap));
    }

    function getArrayPercentOfVotes(percent) {
        return percent.map(({ pvap }) => parseFloat(pvap).toFixed(2));
    }

    function getArrayParty(party) {
        party.map(({ cc }) => cc);
    }

    function getArryNumber(number) {
        return number.map(({ n }) => Number(n));
    }

    function getArrayNames(name) {
        return name.map(({ nm }) => nm);
    }

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const candidates = data.cand;
                return candidates;
            })
            .then((datas) => {
                setId(getArryId(datas));
                setVotes(getArryVotes(datas));
                setPercentOfVotes(getArrayPercentOfVotes(datas));
                setParty(getArrayParty(datas));
                setNumber(getArryNumber(datas));
                setName(getArrayNames(datas));
            });
    }, []);

    return (
        <div>
            <ul>
                <li>{votes[0]}</li>
                <li>{percentOfVotes[0]}%</li>
                {/* <li>{party[0]}</li> */}
                <li>
                    {number[0]} - {name[0]}
                </li>
            </ul>
        </div>
    );
}

export default Data;
