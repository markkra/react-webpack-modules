import React from "react";
import { hot } from "react-hot-loader/root";

import styles from "./app.module.css";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className={styles.title}>Hello {name}</h1>
        <div class={styles["center-box"]}>
          <p class={styles["about-us"]}>
            We have built partnerships with small farms around the world to
            hand-select beans at the peak of season. We then carefully roast in
            small batches to maximize their potential.
          </p>
        </div>
      </>
    );
  }
}

export default hot(App);
