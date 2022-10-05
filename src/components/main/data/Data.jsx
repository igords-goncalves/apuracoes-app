import { useEffect, useState } from "react"

function Data(props) {

    const url = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json'

    const [votes, setVotes] = useState(0)
    const [percentVotes, setPercentVotes] = useState(0)
    const [party, setParty] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.cand.forEach(data => {
                    console.log(data.nm)
                });
            })
    }, [])



    return (
        <div>
            Data
        </div>
    )
}

export default Data