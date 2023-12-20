import React from "react";
import styles from "./FAQ.module.scss";
import AccordionItem from "./AccordionItem";
import Button from "../../../components/Button";
export const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.description}>
          Here are some of our FAQs. if you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className={styles.box}>
        <AccordionItem label="What is Bookmark?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          perferendis blanditiis dignissimos id mollitia sequi iste reiciendis.
          Ut, est distinctio?
        </AccordionItem>
        <AccordionItem label="How can i request a new browser?">
          Vivamus luctus eros aliquet convallis ultricies. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. At nisi repellat ex mollitia. A
          natus quia laborum. Ut placeat quas molestiae nulla reprehenderit,
          optio fugiat sunt explicabo, delectus iure incidunt nesciunt officia
          distinctio vel, natus totam saepe quos nobis nostrum asperiores.
          Officiis, vel.
        </AccordionItem>
        <AccordionItem label="Is there a mobile app?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          perferendis blanditiis dignissimos id mollitia sequi iste reiciendis.
          Ut, est distinctio?
        </AccordionItem>
        <AccordionItem label="What about other Chromium browsers?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          perferendis blanditiis dignissimos id mollitia sequi iste reiciendis.
          Ut, est distinctio?
        </AccordionItem>
      </div>
      <div className={styles["btn-box"]}>
        <Button
          width={114}
          height={47}
          variant="primary"
          textClass={styles["btn-text"]}
          shadow
        >
          More Info
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
