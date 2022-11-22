function Image(props) {
    return (
        <div className="mb-8">
            <img src={props.img} alt="candidate"/>
        </div>
    )
}

export default Image