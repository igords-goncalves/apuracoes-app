import Card from "../components/card/Card";
import CardSecondRound from "../components/card/CardSecondRound";

function Main(props) {
    function getRound(label) {
        if (label === "1º TURNO") {
            return <Card />;
        } else {
            return <CardSecondRound />;
        }
    }

    return (
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
    );
}

export default Main;
