import React from 'react'
import { useFormikContext } from 'formik'
import {Button} from "react-native";

export default function FormikSubmitButton({title, ...props}) {

    const {handleSubmit} = useFormikContext();

    return (
        <Button title={title} onPress={handleSubmit} {...props}/>
    )
}
