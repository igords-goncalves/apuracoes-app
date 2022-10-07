function Data(props) {
    return (
        <div className="px-10">
            <ul>
                <li className="font-normal text-sm text-gray-900">
                    {props.votes}
                </li>
                <li className="font-semibold text-2xl text-gray-800">
                    {props.percent}%
                </li>
                <li className="font-light text-base text-gray-900">
                    PT
                </li>
                <li className="font-semibold text-sm text-gray-900">
                    {props.number} - {props.name}
                </li>
            </ul>
        </div>
    );
}

export default Data;
