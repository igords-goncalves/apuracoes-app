function Button(props) {
    return (
        <div className={props.mt}>
            <button 
                type="button" 
                className={props.option}
                onClick={props.reload}
                >
                    {props.label}
            </button>
        </div>
    );
}

export default Button;
