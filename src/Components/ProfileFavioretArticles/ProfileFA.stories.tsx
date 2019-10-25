import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ProfileFavioretArticles from './index'

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

componentStory.add("Profile Favioret Articles Component", ()=>(
    <div>
        <header>
            <h1>Profile Favioret Articles Component</h1>
            <p>This component is existing in profile component tabs
                by this component you can see the articles which give it a like  </p>
        </header>
    <ProfileFavioretArticles />
    </div>
))