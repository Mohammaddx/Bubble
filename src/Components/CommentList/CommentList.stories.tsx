import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import CommentList from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    info:{
        inline: true,
        styles: {
            header:{
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

componentStory.add("Comment List Componenet", ()=>(
    <div>
        <header>
            <h1>Comment List Component</h1>
            <p>This Component containes all comment you comment it on 
                a post.
            </p>
            <CommentList />
        </header>
    </div>
))