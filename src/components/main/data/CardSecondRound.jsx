import Image from "../image/Image";

import candidateA from "../../../assets/img/lula.png";
import candidateB from "../../../assets/img/bolsonaro.png";

import Data from "./Data";

import { useEffect, useState } from "react";

function CardSecondRound() {
    const [candidate0, setCandidate0] = useState({});
    const [candidate1, setCandidate1] = useState({});

    const urlSecondRound = 
        "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json" 

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch(urlSecondRound)
            .then((res) => res.json())
            .then((data) => {
                return setCandidates(data.cand);
            });
    }, []);

    useEffect(() => {
        candidates.map((curr, i, arr) => {
            setCandidate0(arr[0]);
            setCandidate1(arr[1]);
        });
    });

    function getParty(string) {
        try {
            if(!string) return
            return string.split('-')[0]
        } catch (error) {
            throw error
        }
    }

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
                    party={getParty(candidate0.cc)}
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
                    party={getParty(candidate1.cc)}
                    number={candidate1.n}
                    name={candidate1.nm}
                />
            </div>
        </>
    );
}

export default CardSecondRound;