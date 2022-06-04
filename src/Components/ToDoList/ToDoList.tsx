import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ITaskList } from "../../types/tasklist";
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./ToDoList.module.scss";
import moment from "moment";
import Button from "../Button";

interface IToDoList {
  items: ITaskList[];
  onMarkAsDoneClick?: (id: number) => void;
  onRemoveItem?: (id: number) => void;
}

const ToDoList = ({ items, onMarkAsDoneClick, onRemoveItem }: IToDoList) => {
  return (
    <div className={styles.accordion_container}>
      <Accordion preExpanded={[0]} className={styles.accordion_container}>
        {items.map((item, index) => (
          <AccordionItem key={item.taskId} uuid={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {item.task}
                {item.done && (
                  <span className={styles.completed}>
                    <b>Completed!</b>
                  </span>
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.description_panel}>
                Target Date:{" "}
                <b>{moment(item.targetToAccomplish).format("MMMM D, YYYY")}</b>
                {item.done !== true && (
                  <>
                    <Button
                      position="end"
                      size="small"
                      color="danger"
                      onClick={onRemoveItem}
                      itemId={item.taskId}
                    >
                      Remove
                    </Button>
                    <Button
                      position="end"
                      size="small"
                      color="primary"
                      onClick={onMarkAsDoneClick}
                      itemId={item.taskId}
                    >
                      Mark as Done
                    </Button>
                  </>
                )}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ToDoList;
