import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import { withKnobs} from '@storybook/addon-knobs/react'


import Home from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    info: {
        inline: true,
        styles: {
            header:{
                padding: '10px',
                h1: {
                    color: '#fff',
                    backgroundColor: 'dodgerblue',
                    padding: '10px'
                },
                strong: {
                    color: '#fff'
                }
            }
        }
    }
})

componentStory.add("Home Component", ()=>(
    <div>
        <header>
            <h1>Home component</h1>
            <p>This component show to us the populer tags that the other
                accounts used it mostly and show to us the global feed and my feed of articles
            </p>
        </header>

        <Home />
    </div>
    
))