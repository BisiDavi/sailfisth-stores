import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import {

    Card,
    CardBody,
    Button
} from 'reactstrap'

const Buttons = () => {
    return (
        <div id="buttons" className="docs-item element">
            <h5 className="text-uppercase mb-4">Buttons</h5>
            <div className="docs-desc"><p className="lead">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. See the <a href="https://reactstrap.github.io/components/buttons/">ReactStrap documentation</a> for more details. </p></div>
            <div className="mt-5">
                <Card className="mb-3">
                    <CardBody>
                        <h6 className="text-uppercase mb-4">Button Colors</h6>
                        <Button color="primary" className="mr-1 mb-2">Primary</Button>
                        <Button color="secondary" className="mr-1 mb-2">Secondary</Button>
                        <Button color="muted" className="mr-1 mb-2">Muted</Button>
                        <Button color="success" className="mr-1 mb-2">Success</Button>
                        <Button color="danger" className="mr-1 mb-2">Danger</Button>
                        <Button color="warning" className="mr-1 mb-2">Warning</Button>
                        <Button color="info" className="mr-1 mb-2">Info</Button>
                        <Button color="light" className="mr-1 mb-2">Light</Button>
                        <Button color="dark" className="mr-1 mb-2">Dark</Button>
                        <Button color="link" className="mr-1 mb-2">Link</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h6 className="text-uppercase mb-4">Button Sizes</h6>
                        <Button color="dark" size="lg" className="mr-1 mb-2">Large button</Button>
                        <Button color="dark" className="mr-1 mb-2">Standard button</Button>
                        <Button color="dark" size="sm" className="mr-1 mb-2">Small button</Button>
                    </CardBody>
                </Card>
            </div>
            <div className="mt-4">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {highlightCode}
                </SyntaxHighlighter>
            </div>
        </div>
    )
};

export default Buttons;

const highlightCode =
    `import { Button } from 'reactstrap'

const Component = () => {
    return (
        <>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
        </>
    )
}

export default Component
`