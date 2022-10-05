function Image(props) {
    return (
        <div>
            <img src={props.img} alt="candidate" 
            className="
            my-8
            md:mx-14
            "/>
        </div>
    )
}

export default Image