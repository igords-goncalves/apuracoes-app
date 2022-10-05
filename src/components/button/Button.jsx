function Button(props) {
    return (
        <div className="button">
            <button 
                type="button" 
                className={props.option}>
                    {props.label}
            </button>
        </div>
    );
}

export default Button;
