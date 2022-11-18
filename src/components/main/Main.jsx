import { Fade } from "react-awesome-reveal";

import Card from "./data/Card";
import CardSecondRound from "./data/CardSecondRound";

function Main(props) {
    function getRound(label) {
        if(label === "1º TURNO") {
            return (
                <Card />
            )
        } else {
            return (
                <CardSecondRound />
            )
        }
    }

    return (
        <>
            <Fade>
                <main
                    className="
            flex 
            my-8
            flex-col
            items-center
            md:flex-row
            md:justify-center
            "
                > 
                    {getRound(props.label)}
                </main>
            </Fade>
        </>
    );
}

export default Main;
