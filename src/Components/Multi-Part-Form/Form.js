import React, { useEffect, useState } from 'react';
import { Step } from './Step/Step';
import { introTitle, introContent } from '../../shared/Strings';
import { useAppContext } from '../../context/AppContext';

import { Profile } from '../GithubProfile/Profile';

export const Form = () => {
    const [initialForm] = useState({
        steps: {
            step1: {
                title: introTitle,
                content: introContent,
                stepIsValid: true,
            },
            step2: {
                fields: {
                    firstname: {
                        validation: {
                            required: true,
                            isValid: false
                        },
                        type: 'input',
                        id: 'firstname',
                        value: '',
                        config: {
                            type: 'text',
                            placeholder: 'First Name'
                        },
                        touched: false,
                    },
                    lastname: {
                        validation: {
                            required: true,
                            isValid: false
                        },
                        type: 'input',
                        id: 'lastname',
                        value: '',
                        config: {
                            type: 'text',
                            placeholder: 'Last Name'
                        },
                        touched: false,
                    },
                    username: {
                        validation: {
                            required: true,
                            isValid: false
                        },
                        type: 'input',
                        id: 'username',
                        value: '',
                        config: {
                            type: 'text',
                            placeholder: 'Github Username'
                        },
                        touched: false,
                    },
                },
                stepIsValid: false
            }, 
            step3: {
                fields: {
                    email: {
                        validation: {
                            required: true,
                            isValid: false
                        },
                        type: 'input',
                        id: 'email',
                        value: '',
                        config: {
                            type: 'email',
                            placeholder: 'Email'
                        },
                        touched: false,
                    },
                    terms: {
                        validation: {
                            required: true,
                            isValid: false
                        },
                        type: 'input',
                        id: 'terms',
                        value: '',
                        config: {
                            type: 'checkbox',
                            placeholder: 'Accept the '  
                        },
                        touched: false,
                    },
                },
                stepIsValid: false
            },
        },
        formIsValid: false,
    });

    const {activeStep, setForm, githubData} = useAppContext();

    // Set form state into context
    useEffect(() => {
        setForm(initialForm);
    }, [initialForm, setForm]);

    let allSteps;

    const stepsArray = [];
    for (let step in initialForm.steps) {
        stepsArray.push({
            id: step,
            ...initialForm.steps[step]
        });
    }

    allSteps = stepsArray.map((step, i) => (
        <Step key={i} data={step} isActive={activeStep === i}/>
    ));

    return (
        <section className='section github-info'>
            <div className='container'>
                <h1>Github Workflow</h1>
                {githubData ? <Profile /> : 
                <div className='steps-container'>
                    {allSteps}
                </div> }
            </div>
        </section>
    )
}