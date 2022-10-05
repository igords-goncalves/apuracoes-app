import { useEffect, useState } from "react"

function Data(props) {

    const url = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json'

    const [id, setId] = useState(0)
    const [votes, setVotes] = useState(0)
    const [percentVotes, setPercentVotes] = useState(0)
    const [party, setParty] = useState("")
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.cand.forEach(data => {
                    setId(data.seq)
                    setVotes(data.vap)
                    setPercentVotes(data.pvap)
                    setParty(data.cc)
                    setName(data.nm)
                    setNumber(data.n)
                });
            })
    }, [])

    return (
        <div>
            <p>{votes}</p>
            <p>{percentVotes}</p>
            <p>{party}</p>
            <p>{name}</p>
        </div>
    )
}

export default Data