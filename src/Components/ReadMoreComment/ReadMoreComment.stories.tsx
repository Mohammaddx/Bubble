import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ReadMoreComment from './index'

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

componentStory.add("Read More Comment Component", ()=>(
    <div>
        <header>
            <h1>Read More Comment Component</h1>
            <p>This component is for the form you write your comment to send it to the owner post
                you comment on it  </p>
        </header>
    </div>
))