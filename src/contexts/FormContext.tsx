import { createContext, useContext, useReducer } from "react";

//Context, Reducer, Provider, Hook

// Criação do Context
const FormContext = createContext(undefined)

//Criação do Reducer

// Guarda as variaveis dos campos
enum FormActions {
    setCurrentStep,
    SetName,
    SetTipo,
    SetLeito
}

const FormReducer = (state, action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return;
    }
}