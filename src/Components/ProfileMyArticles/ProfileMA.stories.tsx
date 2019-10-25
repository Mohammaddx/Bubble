import * as React from "react";
import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ProfileMyArticles from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    info: {
        inline: true,
        styles: {
            header: {
                padding: '10px',
                h1:{
                    color: '#fff',
                    backgroundColor: 'dodgreblue',
                    padding: '10px'
                }
            }
        }
    }
})

componentStory.add("Profiel My Articles Component", ()=>(
<div>
    <header>
        <h1>Profiel My Articles Component</h1>
        <p>This component shows the my article in profile page </p>
    </header>
    <ProfileMyArticles />
</div>
))