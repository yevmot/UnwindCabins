import Map from "./../../../../../img/icons/map.svg";

const Location = () => {
    return (
        <div className="form-wrapper">
            <div className="img-wrapper">
                <img src={Map} />
            </div>
            <input
                type="text"
                className="form-loc"
                placeholder="I want to go"
            />
        </div>
    );
};

export default Location;
