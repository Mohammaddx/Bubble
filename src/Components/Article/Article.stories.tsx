import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import Article from './index'

const componentStory = storiesOf("Component", module).addDecorator(withKnobs)
.addDecorator(withInfo)
.addParameters({
    info:{
        inline: true,
        styles: {
            header: {
                padding: '10px',
                h1:{
                    color: '#fff',
                    backgroundColor: 'dodgerblue',
                    padding: '10px'
                },
                strong:{
                    color: 'dodgerblue'
                }
            },
        },
    },
})

componentStory.add("Article Component", ()=>(
    <div>
        <header>
        <h1>Article component</h1>
        <p>This component shows to us how the article looks like, 
            it containes 2 sections, those sections is: 
        </p>

        <ul>
                <li><strong>Header Section</strong></li>
                <li><strong>Body Section</strong></li>
            </ul>

            <p>and the end of the article there is a link "Read More..." it will pass you 
                to profile persone who posts this article.
            </p>
            </header> 
    </div>
))