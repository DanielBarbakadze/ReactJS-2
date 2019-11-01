import React from 'react';
import * as Validations from '../lib/validation';
import * as Formatters from '../lib/formatter';
class Input extends React.Component {

    state = {
        errors: []
    }

    handleChange(event){
        // console.log(event.target);
        const{
            onChange,
            inputValidations = [],
            formatterValidations = []
        } = this.props
        
        let tempErrors = [];
        let formatterError = false;

        if(inputValidations.length) {
            inputValidations.forEach(item => {
                let error = Validations[item.name](event.target.value,item.params)
                if(error) {
                    tempErrors.push(error);
                }
            });
        }

        if(formatterValidations.length) {
            formatterValidations.forEach(item =>{
                let error = Formatters[item.name](event.target.value);

                if(error) {
                    formatterError = true;
                }
            })
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
        onChange(event,tempErrors,formatterError);
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