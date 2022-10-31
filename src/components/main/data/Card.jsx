import Image from "../image/Image";
import candidateA from "../../../assets/img/lula.png";
import candidateB from "../../../assets/img/bolsonaro.png";
import candidateC from "../../../assets/img/simone.png";
import candidateD from "../../../assets/img/ciro.png";
import candidateE from "../../../assets/img/soraya.png";

import Data from "./Data";

import { useEffect, useState } from "react";

function Card() {
    const [candidate0, setCandidate0] = useState({});
    const [candidate1, setCandidate1] = useState({});
    const [candidate2, setCandidate2] = useState({});
    const [candidate3, setCandidate3] = useState({});
    const [candidate4, setCandidate4] = useState({});

    const url =
        "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";


    const urlSecondRound =
        "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json" 

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
            setCandidate0(arr[0]);
            setCandidate1(arr[1]);
            setCandidate2(arr[2]);
            setCandidate3(arr[3]);
            setCandidate4(arr[4]);
        });
    });

    return (
        <>
            <div
                className="
            flex
            flex-col
            mb-10
            md:mx-10
            "
            >
                <Image img={candidateA} />
                <Data
                    votes={candidate0.vap}
                    percent={candidate0.pvap}
                    party="PT"
                    number={candidate0.n}
                    name={candidate0.nm}
                />
            </div>
            <div
                className="
            flex
            flex-col
            mb-10
            md:mx-10
            
            "
            >
                <Image img={candidateB} />
                <Data
                    votes={candidate1.vap}
                    percent={candidate1.pvap}
                    party="PL"
                    number={candidate1.n}
                    name={candidate1.nm}
                />
            </div>
            <div
                className="
            flex
            flex-col
            mb-10
            md:mx-10
            "
            >
                <Image img={candidateC} />
                <Data
                    votes={candidate2.vap}
                    percent={candidate2.pvap}
                    party="MDB"
                    number={candidate2.n}
                    name={candidate2.nm}
                />
            </div>
            <div
                className="
            flex
            flex-col
            mb-10
            md:mx-10
            "
            >
                <Image img={candidateD} />
                <Data
                    votes={candidate3.vap}
                    percent={candidate3.pvap}
                    party="PDT"
                    number={candidate3.n}
                    name={candidate3.nm}
                />
            </div>
            <div
                className="
            flex
            flex-col
            mb-10
            md:mx-10
            "
            >
                <Image img={candidateE} />
                <Data
                    votes={candidate4.vap}
                    percent={candidate4.pvap}
                    party="UNIÃO"
                    number={candidate4.n}
                    name={candidate4.nm}
                />
            </div>
        </>
    );
}

export default Card;
