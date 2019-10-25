import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import SignIn from './index'

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

componentStory.add("Sign In Component", ()=>(
    <div>
        <header>
            <h1>Sign In component</h1>
            <p>This component to enter to your account</p>
        </header>
    <SignIn />
    </div>
))