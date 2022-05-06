import React, { useState} from "react";
import { useAppContext } from '../../../context/AppContext';
import { Input } from './Input/Input';
import { validator } from '../../../shared/utility';

export const Step = ({data, isActive}) => {
    const fieldArray = [];
    let fields;

    const {activeStep, setActiveStep, form, setForm, setGithubData} = useAppContext();
    const [githubError, setGithubError] = useState(false);


    if (data.id !== 'step1') {
        for (let field in data.fields) {
            fieldArray.push(data.fields[field]);
        }
        fields = fieldArray.map((field, i) => {
            const type = field.config.type;
            const isRequired = field.validation.required;
            return <Input key={i} data={field} touched={field.touched} invalid={!field.validation.isValid} changed={(event) => inputChangedHandler(event, type, isRequired)} />
        });
    } else {
        fields = (
            <div className='intro'>
                <h2>{data.title}</h2>
                <div>{data.content}</div>
            </div>
        );
    }

    const inputChangedHandler = (e, type, required) => {
        const updatedStep = {...data};
        const updatedForm = {...form};

        updatedStep.fields[e.target.name].touched = true;
        // if checkbox, we get checked property instead of field value
        const fieldValue = type === 'checkbox' ? e.target.checked : e.target.value;
        // update value and isValid property for the field
        updatedStep.fields[e.target.name].validation.isValid = validator(fieldValue, type, required);
        updatedStep.fields[e.target.name].value = fieldValue;

        // stepIsValid logic, check all fields
        let stepIsValid = true;
        for (let fieldName in updatedStep.fields) {
            stepIsValid = updatedStep.fields[fieldName].validation.isValid && stepIsValid;
            updatedStep.stepIsValid = stepIsValid;
        }

        // Update step data
        updatedForm.steps[updatedStep.id] = {fields: updatedStep.fields, stepIsValid: updatedStep.stepIsValid};

        // update formIsValid when all steps are valid
        let formIsValid = true;
        for (let step in updatedForm.steps) {
            formIsValid = updatedForm.steps[step].stepIsValid && formIsValid;
            updatedForm.formIsValid = formIsValid;
        }
        // Set form state
        setForm(updatedForm);
    }

    const nextButtonHandler = (activeStep, formData) => {
        if (activeStep < 2) {
            setActiveStep(activeStep + 1);
        } else {
            // here fetch github data
            fetchGithubData(formData);  
        }
    }

    const fetchGithubData = (formData) => {
        const githubUsername = formData.steps.step2.fields.username.value;
        
        if (formData.formIsValid) {
            // fetch github data
            fetch(`https://api.github.com/users/${githubUsername}`)
            .then(res => {
                if (res.status === 200) {
                    setGithubError(false);
                    return res.json();
                } else {
                    setGithubError(true);
                }
            })
            .then(data => {
                setGithubData(data);
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className={`step ${isActive ? 'active' : ''}`} id={`${data.id}`}>
            <div className="step-content">
                <div className='form-fields'>
                    {fields}
                </div>
                {githubError ? <span className="error-message">User not found. Go back and enter another username!</span> : null}
                <div className='buttons-wrapper'>
                    { data.id !== 'step1' && <button className='back btn btn-secondary' onClick={() => setActiveStep(activeStep - 1)}>Back</button>}
                    <button className={`next btn btn-primary ${data.stepIsValid ? '' : 'disabled'}`} onClick={() => nextButtonHandler(activeStep, form)}>{data.id === 'step3' ? 'Show Info' : 'Next'}</button>
                </div>
            </div>
        </div>
    );
}