import * as React from "react";

import { storiesOf } from "@storybook/react";

import {withInfo} from '@storybook/addon-info'

import {withKnobs} from '@storybook/addon-knobs/react'


import NavBar from './index'

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

componentStory.add("Navbar Component", ()=>(
    <div>
        <header>
            <h1>Navbar Component</h1>
            <p>This component  is a menu that you can 
                move from page to another when you click on the name of page 
                you want to move 
            </p>
        </header>
        <NavBar />
    </div>
   
))