import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import kaldiTranscript from "./sample-data/KateDarling_2018S-bbc-kaldi.json";
const mediaUrl = "https://download.ted.com/talks/KateDarling_2018S-950k.mp4";

import App from "../src";

storiesOf("Full App", module).add("demo", () => <App />);
