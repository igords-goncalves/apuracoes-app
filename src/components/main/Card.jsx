// A idéia é que cada elemento com foto
// e dados seja um componente da tela

import Image from "./image/Image";
import candidateA from "../../assets/img/lula.png";
import candidateB from "../../assets/img/bolsonaro.png";
import Data from "./data/Data";

function Card(props) {
    return (
        <>
            <div
                className="
        flex
        flex-col
        items-center
        "
            >
                <Image img={candidateA} />
                <Data />
            </div>
            
            <div
                className="
        flex
        flex-col
        items-center
        "
            >
                <Image img={candidateB} />
                <Data />
            </div>
        </>
    );
}

export default Card;
