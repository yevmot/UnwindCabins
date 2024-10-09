import Card from "./InspirationCard";
import InspirationCardList from "../../../../../helpers/InspirationCardList";

const InspirationCards = () => {
    return (
        <div className="container">
            <div className="card-container">
                {InspirationCardList.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            img={card.img}
                            slogan={card.slogan}
                            title={card.title}
                            text={card.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default InspirationCards;
