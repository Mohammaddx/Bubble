import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import ArticleHeader from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    info:{
        inline: true,
    styles:{
        header: {
            padding: '10px',
            h1: {
                color: '#fff',
                backgroundColor: 'dodgerblue',
                padding: '10px'
            },
            strong: {
                color: 'dodgerblue'
            }
        }
    }
    }
})

componentStory.add("Article Header Component", ()=>(
    <div>
        <header>
            <h1>Article Body Component</h1>
        <p>as we said in the <strong>article component</strong>
        the article body is a component in the article component,
        that's containe a picture for account, the username for the account
        and a button to give the post owner a like if you like his article</p>
        </header>
    </div>
))