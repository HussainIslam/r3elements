import React from 'react'
import Example from './components/Example'
import { Card } from './snippets/snippets/'

const App = () => {

    return (
        <div>
            <section>
                <h1>Hussain</h1>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
            </section>
            <hr/>

            <Example>{ <Card text="Primary" classes="primary" /> }</Example>

        </div>
    )
}

export default App
