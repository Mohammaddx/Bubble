import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ReadMoreInfoProfile from './index'

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

componentStory.add("Read More Info Profile Component", ()=>(
    <div>
        <header>
            <h1>Read More Info Profile Component</h1>
            <p>It is the profile header of the account you entered on it,
                it containes a picture, name owner account, follow button and 
                unfavioret button 
            </p>
        </header>
    </div>
))