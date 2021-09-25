import React from 'react';
import { Formik } from 'formik';


export default function FormikForm({initialValues, onSubmit, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {() => (
                <>{children}</>
            )}
        </Formik>
    )
}
