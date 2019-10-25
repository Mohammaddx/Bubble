import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import IndexPage from './index'

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

componentStory.add("Index Page Component", ()=>(
    <div>
        <header>
            <h1>Index Page Component</h1>
            <p>This component containes all component and pages in the site without 
                Hi Screen page 
            </p>
        </header>
        <IndexPage />
    </div>

    
))