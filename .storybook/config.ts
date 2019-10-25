import { configure } from '@storybook/react';
import { setDefaults } from "@storybook/addon-info";

// addon-info
setDefaults({
    header: true, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true // Displays the source of story Component
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../src",true, /.stories.tsx$/)
function loadStories(){
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module)