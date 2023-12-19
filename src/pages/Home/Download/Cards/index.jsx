import Button from "../../../../components/Button";
import styles from "./Cards.module.scss";

const Cards = ({ cards }) => {
  return cards.map((card, idx) => (
    <div key={card.id} className={styles.container}>
      <svg className={styles.icon}>
        <use href={card.icon}></use>
      </svg>
      <h4 className={styles.title}>Add to {card.browser}</h4>
      <p className={styles.info}>Minimum version {card.version}</p>
      <svg className={styles.dots}>
        <use href="/src/assets/images/svg/icons.svg#icon-bg-dots"></use>
      </svg>
      <Button width={230} height={46} textClass={styles["btn-text"]} shadow>
        Add & install Extension
      </Button>
    </div>
  ));
};

export default Cards;
