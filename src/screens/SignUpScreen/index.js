import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { stackName } from '../../configs/navigationConstants'
import { Text, Button, BackgroundView, TextInput, LoginForm } from '../../components'
import { COLORS } from '../../themes'
import { Formik } from 'formik'
import *as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email must not be empty')
        .email('Invalid email'),
    password: Yup.string()
        .required('Password must not be empty')
        .max(8, 'Characters are more than 8')
        .min(4, 'Characters are less than 4'),
    name: Yup.string()
        .required('Name must not be empty')
        .matches(/^[A-Za-z ]*$/, 'Invalid name'),
    phone: Yup.number()
        .typeError('Invalid phone number')
        .positive('Phone number must not be negative')
        .integer('Phone number must be integer')
        .required('Phone number must not be empty'),
})

export default function SignUpScreen({ navigation }) {
    const handleSubmit = () => {
        console.log('huan');
    }
    return (
        <BackgroundView style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '', name: '', phone: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, values, touched, handleChange, handleSub, it, handleBlur }) => {
                    return (
                        <LoginForm style={styles.loginForm}>
                            <TextInput
                                title='Email'
                                placeholder='email@example.com'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                errMsg={errors.email}
                                touched={touched.email}
                            />
                            <TextInput
                                title='Password'
                                placeholder='******'
                                password
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                errMsg={errors.password}
                                touched={touched.password}
                            />
                            <TextInput
                                title='Name'
                                placeholder='Huan Ba'
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                errMsg={errors.name}
                                touched={touched.name}
                            />
                            <TextInput
                                title='Phone'
                                placeholder='091-xxx-xxxx'
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                errMsg={errors.phone}
                                touched={touched.phone}
                            />
                            <Button text='Sign Up' title style={styles.button} />
                            <TouchableOpacity onPress={() => navigation.navigate(stackName.loginStack)}>
                                <Text style={styles.text} >
                                    Already have an account ?
                                </Text>
                            </TouchableOpacity>
                        </LoginForm>
                    )
                }}
            </Formik>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        marginTop: 12,
        backgroundColor: COLORS.regularGray
    },
    text: {
        color: COLORS.lightGray,
        marginTop: 15
    }
})

{/* <LoginForm style={styles.loginForm}>
                <TextInput title='Email' />
                <TextInput title='Password' password secureTextEntry />
                <TextInput title='Name' />
                <TextInput title='Phone' />
                <Button text='Sign Up' title style={styles.button} />
                <TouchableOpacity onPress={() => navigation.navigate(stackName.loginStack)}>
                    <Text style={styles.text} >
                        Already have an account
                    </Text>
                </TouchableOpacity>
            </LoginForm> */}