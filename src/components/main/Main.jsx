import Image from "./image/Image";

import candidateA from  '../../assets/img/ciro.png'
import candidateB from  '../../assets/img/bolsonaro.png'
import candidateC from  '../../assets/img/lula.png'
import candidateD from  '../../assets/img/simone.png'
import candidateE from  '../../assets/img/soraya.png'

function Main() {
    return (
        <main className="
            flex 
            mx-8 my-8
            flex-col
            items-center
            md:flex-row
            md:justify-center
            ">
            <Image img={candidateA}/>
            <Image img={candidateB}/>
            <Image img={candidateC}/>
            <Image img={candidateD}/>
            <Image img={candidateE}/>
        </main>
    )
}

export default Main;