import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ReadMore from './index'

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

componentStory.add("Read More Component", ()=>(
    <div>
        <header>
            <h1>Read More Component</h1>
            <p>This component move you to the profile of the owner the post
                by click on "Read More" link at the button of the article
            </p>
        </header>
    <ReadMore />
    </div>
))