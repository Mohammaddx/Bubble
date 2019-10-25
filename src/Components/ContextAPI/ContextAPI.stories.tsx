import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import CommentsContext from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    inline: true,
    styles: {
        header:{
            padding: '10px',
            h1: {
                color: '#fff',
                background: 'dodgerblue',
                padding: '10px'
            },
            strong: {
                color: 'dodgerblue'
            }
        }
    }
})

componentStory.add("Comments Context Component", ()=>(
    <div>
        <header>
            <h1>Comments Context Component</h1>
            <p>This component is a contextAPI to share the states
                dor all component i need, 
                so here i use it for a <strong>Comment Componenet</strong>
                and use this component in <strong>Comment List</strong>
            </p>

            <CommentsContext />
        </header>
    </div>
))