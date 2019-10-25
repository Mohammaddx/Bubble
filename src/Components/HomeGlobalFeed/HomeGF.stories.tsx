import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import HomeGlobalFeed from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    info: {
        inline: true,
        styles: {
            header: {
                padding: '10px',
                h1: {
                    color: '#fff',
                    backgroundColor: 'dodgerblue',
                    padding: '10px' 
                }
            }
        }
    }
})

componentStory.add("Home Global Feed Component", ()=>(
    <div>
        <header>
            <h1>Home Global Feed Component</h1>
        <p>This component show us the global articles in the website, and these articles
            shows to other accounts </p>
        </header>
        <HomeGlobalFeed />
            
    </div>
    
))