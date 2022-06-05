import useClassNames from "../../hooks/useClassnames";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  height?: "large" | "medium" | "small" | "fullscreen";
}

const heightClassNameMap = {
  large: styles.loading_large,
  medium: styles.loading_medium,
  small: styles.loading_small,
  fullscreen: styles.loading_fullscreen,
};

const Spinner = ({ height = "small" }: SpinnerProps) => {
  return (
    <div
      className={useClassNames(
        styles.loading_container,
        heightClassNameMap[height]
      )}
    >
      <svg
        className={styles.loading_spinner}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1" fill="white">
          <path d="M21.4966 7.19357C22.3734 6.72512 22.7145 5.62412 22.1203 4.82715C21.0707 3.41941 19.7202 2.25304 18.1589 1.41808C16.066 0.298861 13.6882 -0.174609 11.3262 0.0575466C8.96421 0.289702 6.7241 1.21706 4.88915 2.72234C3.0542 4.22763 1.70683 6.24323 1.01742 8.51427C0.328006 10.7853 0.327517 13.2098 1.01601 15.4811C1.70451 17.7524 3.05107 19.7686 4.88541 21.2746C6.71975 22.7806 8.95949 23.7089 11.3214 23.942C13.0834 24.1159 14.8544 23.8971 16.5094 23.3104C17.4464 22.9782 17.7749 21.8734 17.3064 20.9966C16.838 20.1197 15.7486 19.8099 14.7922 20.0812C13.7848 20.3669 12.7276 20.4633 11.675 20.3594C10.0216 20.1962 8.45383 19.5464 7.16979 18.4922C5.88575 17.438 4.94316 16.0267 4.46121 14.4368C3.97926 12.8468 3.9796 11.1497 4.46219 9.55999C4.94478 7.97026 5.88794 6.55934 7.1724 5.50564C8.45687 4.45194 10.0249 3.80279 11.6783 3.64028C13.3317 3.47777 14.9962 3.8092 16.4612 4.59266C17.394 5.09146 18.2192 5.75921 18.8977 6.55676C19.5419 7.31391 20.6197 7.66201 21.4966 7.19357Z" />
        </mask>
        <path
          d="M21.4966 7.19357C22.3734 6.72512 22.7145 5.62412 22.1203 4.82715C21.0707 3.41941 19.7202 2.25304 18.1589 1.41808C16.066 0.298861 13.6882 -0.174609 11.3262 0.0575466C8.96421 0.289702 6.7241 1.21706 4.88915 2.72234C3.0542 4.22763 1.70683 6.24323 1.01742 8.51427C0.328006 10.7853 0.327517 13.2098 1.01601 15.4811C1.70451 17.7524 3.05107 19.7686 4.88541 21.2746C6.71975 22.7806 8.95949 23.7089 11.3214 23.942C13.0834 24.1159 14.8544 23.8971 16.5094 23.3104C17.4464 22.9782 17.7749 21.8734 17.3064 20.9966C16.838 20.1197 15.7486 19.8099 14.7922 20.0812C13.7848 20.3669 12.7276 20.4633 11.675 20.3594C10.0216 20.1962 8.45383 19.5464 7.16979 18.4922C5.88575 17.438 4.94316 16.0267 4.46121 14.4368C3.97926 12.8468 3.9796 11.1497 4.46219 9.55999C4.94478 7.97026 5.88794 6.55934 7.1724 5.50564C8.45687 4.45194 10.0249 3.80279 11.6783 3.64028C13.3317 3.47777 14.9962 3.8092 16.4612 4.59266C17.394 5.09146 18.2192 5.75921 18.8977 6.55676C19.5419 7.31391 20.6197 7.66201 21.4966 7.19357Z"
          stroke="#AA9AB2"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#path-1-inside-1)"
        />
      </svg>
    </div>
  );
};

export default Spinner;