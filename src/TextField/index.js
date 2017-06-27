/**
 * Created by nabokov on 27.06.2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
               autoComplete={"off"}
               floatingLabelText={label}
               errorText={error}
               {...input}
               {...custom}
    />
);

export default renderTextField;