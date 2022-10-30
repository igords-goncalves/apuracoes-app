import { useState } from "react";
import Button from "../button/Button";

function Header() {

    const [buttonLabel, setButtonLabel] = useState("1º TURNO")
    const [date, setDate] = useState(undefined)

    function setLabelAndDate() {
        if(buttonLabel === '1º TURNO') {
           setButtonLabel('2º TURNO')
           setDate('30/10/2022')
        } else {
            setButtonLabel('1º TURNO')
            setDate('02/10/2022')
        }
    }


    return (
        <div
            className="
            w-full 
            h-1/2
            bg-[#158A64]
            px-20 py-10
            flex
            items-center 
            flex-col
            justify-between
            md:flex-row"
        >
            <div
                className="
                text-center md:text-left"
            >
                <h1 className="text-4xl font-bold text-white mb-3">
                    Eleiçoes 2022
                </h1>
                <h2 className=" text-2xl font-light text-white mb-3">
                    Geral Ordinária
                </h2>
                <h3 className="text-xl font-black text-[#177353]">
                    {date}
                </h3>
            </div>
            <Button
                callBack={() => setLabelAndDate()}
                label={buttonLabel}
                mt="mt-8 md:mt-0"
                option="
                rounded-full 
                border-none 
                bg-[#177353]
                px-10 
                py-3 
                text-2xl md:text-3xl 
                font-medium 
                text-white"
            />
        </div>
    );
}

export default Header;
