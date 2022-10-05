import Button from "../button/Button";

function Header() {
    return (
        <div className="w-full h-80 bg-green-500 flex items-center justify-between">
            <div className="ml-16">
                <h1 className="text-5xl font-bold text-white mb-3">
                    Eleiçoes 2022
                </h1>
                <h2 className=" text-4xl font-light text-white mb-3">
                    Geral Ordinária
                </h2>
                <h3 className="text-2xl font-black text-green-700">
                    02/10/2022
                </h3>
            </div>
            <Button
                label="1º TURNO"
                option="
                mr-16 
                rounded-full 
                border-none 
                bg-green-700 
                px-10 
                py-3 
                text-3xl 
                font-medium 
                text-white 
                sm:w-auto"
            />
        </div>
    );
}

export default Header;
