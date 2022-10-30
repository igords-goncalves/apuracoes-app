function Button(props) {
    return (
        <div className={props.mt}>
            <button 
                type="button" 
                className={props.option}
                onClick={props.callBack}
                >
                    {props.label}
            </button>
        </div>
    );
}

export default Button;
