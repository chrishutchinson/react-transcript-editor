import React from "react";
import PropTypes from "prop-types";
import styles from "./VolumeControl/VolumeControl.module.css";
class PauseWhileTyping extends React.Component {
  render() {
    return (
      <div>
        <p className={styles.helpText}>Pause While Typing</p>
        <label className={styles.switch}>
          <input
            type="checkbox"
            defaultChecked={this.props.isPauseWhileTypingOn}
            onChange={this.props.handleToggle}
          />
          <span className={styles.slider} />
        </label>
      </div>
    );
  }
}

PauseWhileTyping.propTypes = {
  handleToggle: PropTypes.func,
  isPauseWhileTypingOn: PropTypes.bool
};

export default PauseWhileTyping;
