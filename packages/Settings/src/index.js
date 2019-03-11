import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import Toggle from "./Toggle/";

import style from "./index.module.css";

import TimecodeOffset from "./TimecodeOffset";

const Settings = ({
  handleSettingsToggle,
  handlePauseWhileTyping,
  handleIsScrollIntoViewChange,
  handleRollBackValueInSeconds,
  handleShowTimecodes,
  handleShowSpeakers,
  handleSetTimecodeOffset,
  handleAnalyticsEvents,
  defaultValuePauseWhileTyping,
  defaultValueScrollSync,
  defaultRollBackValueInSeconds,
  showTimecodes,
  showSpeakers,
  timecodeOffset
}) => (
  <div className={style.settings}>
    <h2 className={style.header}>Settings Panel</h2>
    <div className={style.closeButton} onClick={handleSettingsToggle}>
      <FontAwesomeIcon icon={faWindowClose} />
    </div>

    <div className={style.controlsContainer}>
      <section className={style.settingElement}>
        <div className={style.label}>Pause While Typing</div>
        <Toggle
          defaultValue={defaultValuePauseWhileTyping}
          label={"Pause while typing"}
          handleToggle={handlePauseWhileTyping}
        />
      </section>

      <section className={style.settingElement}>
        <div className={style.label}>Scroll Sync</div>
        <Toggle
          defaultValue={defaultValueScrollSync}
          label={"ScrollSync"}
          handleToggle={handleIsScrollIntoViewChange}
        />
      </section>

      <section className={style.settingElement}>
        <div className={style.label}>Rollback Interval (sec)</div>
        <input
          className={style.rollbackValue}
          type="text"
          value={defaultRollBackValueInSeconds}
          onChange={handleRollBackValueInSeconds}
          name="lname"
        />
      </section>

      <section className={style.settingElement}>
        <div className={style.label}>Show Timecodes</div>
        <Toggle
          defaultValue={showTimecodes}
          label={"Hide Timecodes"}
          handleToggle={handleShowTimecodes}
        />
      </section>

      <section className={style.settingElement}>
        <div className={style.label}>Show Speaker Labels</div>
        <Toggle
          defaultValue={showSpeakers}
          label={"Hide Speaker Labels"}
          handleToggle={handleShowSpeakers}
        />
      </section>

      <section className={style.settingElement}>
        <div className={style.timecodeLabel}>Timecode Offset ℹ</div>
        <TimecodeOffset
          timecodeOffset={timecodeOffset}
          handleSetTimecodeOffset={handleSetTimecodeOffset}
          handleAnalyticsEvents={handleAnalyticsEvents}
        />
      </section>
    </div>
  </div>
);

Settings.propTypes = {
  showTimecodes: PropTypes.bool,
  showSpeakers: PropTypes.bool,
  timecodeOffset: PropTypes.number,
  handleShowTimecodes: PropTypes.func,
  handleShowSpeakers: PropTypes.func,
  handleSetTimecodeOffset: PropTypes.func,
  handleSettingsToggle: PropTypes.func,
  handlePauseWhileTyping: PropTypes.func,
  handleIsScrollIntoViewChange: PropTypes.func,
  handleRollBackValueInSeconds: PropTypes.func,
  defaultValueScrollSync: PropTypes.bool,
  defaultValuePauseWhileTyping: PropTypes.bool,
  defaultRollBackValueInSeconds: PropTypes.number
};

export default Settings;
