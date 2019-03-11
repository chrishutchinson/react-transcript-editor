import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MediaPlayer from "../src";

storiesOf("Media Player", module).add("example", () => (
  <MediaPlayer
    mediaUrl="https://storage.googleapis.com/coverr-main/mp4/Pigeon-Impossible.mp4"
    hookSeek={() => {}}
    hookIsPlaying={() => {}}
    hookPlayMedia={() => {}}
    hookOnTimeUpdate={() => {}}
    timecodeOffset={0}
  />
));
