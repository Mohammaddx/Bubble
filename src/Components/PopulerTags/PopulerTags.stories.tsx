import * as React from "react";

import { storiesOf } from "@storybook/react";

import { withInfo } from "@storybook/addon-info";

import { withKnobs } from "@storybook/addon-knobs/react";

import PopulerTags from "./index";

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

componentStory.add("Populer Tags Component", () => (
  <div>
    <header>
      <h1>Populer Tags Component</h1>
      <p>
        This component containes all tags that the other accounts when they want
        to add a new article ,thay are wrotin it, it's like a type of the
        article
      </p>
    </header>
  </div>
));
