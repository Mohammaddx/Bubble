import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ProfileTabs from './index'

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

componentStory.add("Profile Tabs Component", ()=>(
    <div>
        <header>
            <h1>Profile Tabs Component</h1>
            <p>This component containes 2 tabs in profile page 
                and those 2 tabs is : 
            </p>

            <ul>
                <li>My Articles</li>
                <li>Favioret Articles</li>
            </ul>

            <p>When you click on any one of thes tabs it will appered a specific
                articles
            </p>
        </header>
    <ProfileTabs />
    </div>
))