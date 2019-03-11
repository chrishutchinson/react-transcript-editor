import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Settings from "../src";

storiesOf("Settings Panel", module).add("example", () => (
  <Settings
    timecodeOffset={0}
    handleSettingsToggle={action("handleSettingsToggle")}
  />
));
