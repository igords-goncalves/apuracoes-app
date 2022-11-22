import Image from "../image/Image";

import candidateA from "../../assets/img/lula.png";
import candidateB from "../../assets/img/bolsonaro.png";

import Data from "../data/Data";

import { useEffect, useState } from "react";

function CardSecondRound() {
    const [candidate0, setCandidate0] = useState({});
    const [candidate1, setCandidate1] = useState({});

    const baseURL = process.env.REACT_APP_TSE2ROUNDAPI

    const [candidates, setCandidates] = useState([]);

    function fetchData(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return setCandidates(data.cand);
            });
    }

    function getCandidates() {
        candidates.map((curr, i, arr) => {
            setCandidate0(arr[0]);
            setCandidate1(arr[1]);
            return null
        });
    }
    
    function getParty(string) {
        try {
            if(!string) return
            return string.split('-')[0]
        } catch (error) {
            throw error
        }
    }
    
    useEffect(() => fetchData(baseURL), []);

    useEffect(() => getCandidates());


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