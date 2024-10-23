import Button from "../../../../buttons/Button";

const FormBtn = () => {
    return (
        <div className="btn">
            <Button
                text="Find available cabins"
                bgColor="var(--dark-green)"
                textColor="white"
                hoverColor="var(--orange)"
            />
        </div>
    );
};

export default FormBtn;
