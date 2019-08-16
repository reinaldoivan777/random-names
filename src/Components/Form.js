import React, { Component, Fragment } from 'react';
import { Input, Button, Container } from 'reactstrap';
import Result from './Result';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: '',
            result: ''
        };
    }

    randomize(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleRandom = () => {
        const { names } = this.state;
        const listName = names.split(' ');

        this.setState({
            result: listName[this.randomize(listName.length)]
        });
    };

    handleChange = e => {
        this.setState({
            names: e.target.value
        });
    };

    render() {
        const { result } = this.state;
        return (
            <Fragment>
                <Container>
                    <Input
                        type='textarea'
                        className='form-control mb-3'
                        placeholder='Enter Names'
                        onChange={e => this.handleChange(e)}
                    />
                    <Button className='mb-3' color='primary' onClick={() => this.handleRandom()}>
                        Click to Random
                    </Button>
                </Container>
                {result && <Result result={result} />}
            </Fragment>
        );
    }
}

export default Form;
