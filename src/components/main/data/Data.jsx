function Data(props) {
    return (
        <div className="px-8">
            <ul>
                <li>{props.votes}</li>
                <li>{props.percent}</li>
                <li>PT</li>
                <li className="flex ">{props.number} - {props.name}</li>
            </ul>
        </div>
    );
}

export default Data;
