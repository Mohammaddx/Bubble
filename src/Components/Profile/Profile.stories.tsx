import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import Profile from './index'

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
                    backgroundColor: 'dodgerblue',
                    padding: '10px'
                }
            }
        }
    }
})

componentStory.add("Profile Component", ()=>(
    <div>
        <header>
            <h1>Profile Component</h1>
            <p>This component for my profile or the profile of the owner account,
                this page containes a 2 sections : 
            </p>
            <ul>
                <li>Profile Header</li>
                <li>Profile Body</li>
            </ul>

            <p>you can see the articles and change your account
                information by click on a specific button.
            </p>
        </header>
    <Profile />
    </div>
))