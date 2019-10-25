import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import HiScreen from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    inline: true,
    styles: {
        header:{
            padding: '10px',
            h1:{
                color: '#fff',
                backgroundColor: 'dodgerblue',
                padding: '10px'
            },
            strong: {
                color: 'dodgerblue'
            }
        }
    }
})

componentStory.add("Hi Screen Component", ()=>(
    <div>
        <header>
            <h1>Hi Screen Component</h1>
            <p>This component just like a Welcome page 
                when you click on "GET STARTED" button, you will move 
                to home bage.
            </p>

            <HiScreen />
        </header>
    </div>
    
))