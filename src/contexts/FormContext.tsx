import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number
    name: string
    tipo: string
    leito: string
}

type Action = {
    type: FormActions
    payload: any
}

type ContextType = {
    state: State
    dispatch: (action: Action) => void
}

type FormProviderProps = {
    children: ReactNode
}


const initialData: State = {
    currentStep: 0,
    name: '',
    tipo: '',
    leito: ''
}

//Context, Reducer, Provider, Hook

// Criação do Context
const FormContext = createContext<ContextType | undefined>(undefined)

//Criação do Reducer
// Guarda as variaveis dos campos
export enum FormActions {
    setCurrentStep,
    SetName,
    SetTipo,
    SetLeito
}

// payload = è onde eu mando a informação
const FormReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload }
        case FormActions.SetName:
            return { ...state, name: action.payload }
        case FormActions.SetTipo:
            return { ...state, tipo: action.payload }
        case FormActions.SetLeito:
            return { ...state, leito: action.payload }
        default:
    }       return state
}

//Criação do Provider
export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(FormReducer, initialData)
    const value = { state, dispatch }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//Criação do Hook
// Todos os CONTEXT devem ser utilizados dentro da tag <FormProvider>
export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
}