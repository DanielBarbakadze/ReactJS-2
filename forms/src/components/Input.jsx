import React from 'react';

class Input extends React.Component {
    render () {
        const {
            name,
            onChange,
            value,
            type='text'
        } = this.props;

        return (
            <input
                name={name}
                onChange={onChange}
                value={value}
                type={type}
            />
        )
    }
}
export default Input