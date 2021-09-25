import React from 'react';
import { useFormikContext } from 'formik';
import { TextInput, View } from 'react-native';

export default function FormikField({name, ...props}) {

    const {handleChange, values } = useFormikContext();

    return (
        <View>
            <TextInput
                onChangeText={handleChange(name)}
                value={values[name]}
                {...props}
            />
        </View>
    )
}
