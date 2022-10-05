function Button(props) {
    return (
        <div className={props.mt}>
            <button 
                type="button" 
                className={props.option}>
                    {props.label}
            </button>
        </div>
    );
}

export default Button;
