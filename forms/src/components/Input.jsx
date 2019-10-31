import React from 'react';
import * as Validations from '../lib/validation'
class Input extends React.Component {

    state = {
        errors: []
    }

    handleChange(event){
        // console.log(event.target);
        const{
            onChange,
            inputValidations = []
        } = this.props
        
        let tempErrors = [];

        if(inputValidations.length) {
            inputValidations.forEach(item => {
                let error = Validations[item.name](event.target.value,item.params)
                if(error) {
                    tempErrors.push(error);
                }
            });
        }

        if(tempErrors.length) {
            this.setState({
                errors: tempErrors
            })
        }
        else {
             this.setState({
                errors: []
            })
        }
        onChange(event,this.state.errors);
        setTimeout(() => {
            console.log(this.state.errors)
        }, 1);
    }

    render () {
        const {
            name,
            value,
            type='text'
        } = this.props;

        // console.log(this.state)

        return (
            <div>
            <input
                name={name}
                onChange={(event) => this.handleChange(event)}
                value={value}
                type={type}
            />
            </div>

        )
    }
}
export default Input