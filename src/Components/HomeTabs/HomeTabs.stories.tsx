import * as React from "react";

import { storiesOf } from "@storybook/react";

import { withInfo } from "@storybook/addon-info";

import { withKnobs } from "@storybook/addon-knobs/react";

import HomeTabs from "./index";

const componentStory = storiesOf("Component", module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      styles: {
        header: {
          padding: "10px",
          h1: {
            color: "#fff",
            backgroundColor: "dodgreblue",
            padding: "10px"
          }
        }
      }
    }
  });

componentStory.add("Home Tabs Component", () => (
  <div>
    <header>
      <h1>Home Tabs Component</h1>
      <p>This component containes 2 tabs :</p>

      <ul>
        <li>Global Feed </li>
        <li>Your Feed </li>
      </ul>
    </header>
  </div>
));
