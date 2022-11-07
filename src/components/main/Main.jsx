import { Fade } from "react-awesome-reveal";

import Button from "../button/Button";
import Card from "./data/Card";
import CardSecondRound from "./data/CardSecondRound";

function Main(props) {

    function refreshPage() {
        window.location.reload(true)
    }

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

            <div className="flex items-center justify-center">
                <Button
                    title="Atualizar"
                    mt="mt-8 md:mt-0"
                    option="
                rounded-full 
                border-none 
                bg-[#FEB034]
                px-10 
                py-3 
                text-2xl md:text-3xl 
                font-medium 
                text-white"
                    callBack={() => refreshPage()}
                />
            </div>
        </>
    );
}

export default Main;
