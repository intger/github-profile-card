import React, { createContext, useContext, useState } from "react";

const Context = createContext({
    activeStep: 0,
    setActiveStep: () => {},
    form: {},
    setForm: () => {},
    githubData: {},
    setGithubData: () => {},
});

export const AppContext = ({children}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({});
    const [githubData, setGithubData] = useState(null);
    return (
        <Context.Provider value={{activeStep, setActiveStep, form, setForm, githubData, setGithubData,}}>
            {children}
        </Context.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw Error('Check App Context');
    }

    return context;
}