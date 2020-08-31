//SurveyField contains logic to render a single label and text input
import React from 'react';

//({ input }), automatically looks up the props of input and assigned to the variable called "input"
export default ({input, label, meta:{error, touched}}) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/>
            <div className="red-text" style={{ marginButtom: '20px' }}> 
                {touched && error} 
            </div>
            
        </div>
    );
};