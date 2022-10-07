import { useEffect, useState } from "react";

function Data(props) {

    const [candidateA, setCandidateA] = useState({});
    const [candidateB, setCandidateB] = useState({});
    const [candidateC, setCandidateC] = useState({});
    const [candidateD, setCandidateD] = useState({});
    const [candidateE, setCandidateE] = useState({});

    const url =
        "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return setCandidates(data.cand);
            });
    }, []);


    useEffect(() => {
        candidates.map((curr, i, arr) => {
            setCandidateA(arr[0])
            setCandidateB(arr[1])
            setCandidateC(arr[2])
            setCandidateE(arr[3])
            setCandidateD(arr[4])
        })
    })

    console.log(candidateA, candidateB, candidateC, candidateD, candidateE)

    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default Data;
