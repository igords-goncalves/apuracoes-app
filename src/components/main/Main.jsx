import Button from "../button/Button";
import Card from "./data/Card";

function Main() {

    
    return (
        <>
        <main className="
            flex 
            my-8
            flex-col
            items-center
            md:flex-row
            md:justify-center
            "
        >
            <Card />     
        </main>
        <div className="flex items-center justify-center">
            <Button label='Atualizar'              
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
                // TODO: Create a func onClik to call results again
            />
        </div>
        </>
    );
}

export default Main;
