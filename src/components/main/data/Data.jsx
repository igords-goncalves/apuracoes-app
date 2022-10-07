function Data(props) {
    return (
        <div>
            <ul>
                <li className="font-normal text-sm text-gray-800">
                    {props.votes}
                </li>
                <li className="font-semibold text-2xl text-gray-700">
                    {props.percent}%
                </li>
                <li className="font-light text-base text-gray-800">
                    PT
                    {/* TODO:Create a logic to get the main party  */}
                </li>
                <li className="font-semibold text-sm text-gray-800">
                    {props.number} - {props.name}
                </li>
            </ul>
        </div>
    );
}

export default Data;
