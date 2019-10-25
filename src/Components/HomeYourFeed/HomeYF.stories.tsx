import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import HomeYourFeed from './index'

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

componentStory.add("Home Your Feed Component", ()=>(
    <div>
        <header>
            <h1>Home Your Feed Component</h1>
            <p>
                This component show to me my articles
            </p>
        </header>
        <HomeYourFeed />
    </div>
    
))