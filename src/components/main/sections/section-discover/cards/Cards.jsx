import Card from "./Card";
import cardList from "../../../../../helpers/DiscoverCardList";
import "./style.css";

const Cards = () => {
    return (
        <div className="container">
            <div className="card-container">
                {cardList.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            img={card.img}
                            location={card.location}
                            title={card.title}
                            price={card.price}
                            text={card.text}
                            review={card.review}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
