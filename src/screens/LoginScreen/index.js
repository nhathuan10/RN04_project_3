import { Alert, StyleSheet, TouchableOpacity, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { stackName } from '../../configs/navigationConstants'
import { BackgroundView, Button, LoginForm, TextInput } from '../../components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { COLORS } from '../../themes'
import { Text } from '../../components'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email must not be empty')
        .email('Invalid email'),
    password: Yup.string()
        .required('Password must not be empty')
})

export default function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const email = useSelector(state => state.signUpReducer.userInfo.email);
    const password = useSelector(state => state.signUpReducer.userInfo.password);
    const animatedTimingValue = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(-100)).current;

    const handleSubmit = (values) => {
        if (values.email === email && values.password === password) {
            navigation.navigate(stackName.homeStack);
        } else {
            Alert.alert(
                'Sorry',
                'Incorrect email or password'
            )
        }
    }

    useEffect(() => {
        Animated.timing(animatedTimingValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start()
    })

    return (
        <BackgroundView style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, values, touched, handleChange, handleSubmit, handleBlur }) => {
                    return (
                        <LoginForm style={{ ...styles.loginForm, ...styles.loginForm, opacity: animatedTimingValue }}>
                            <TextInput
                                title='Email'
                                placeholder='email@example.com'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
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
                                value={values.password}
                                errMsg={errors.password}
                                touched={touched.password}
                            />
                            <Button text='Log in' title style={{ ...styles.button, backgroundColor: COLORS.boldGray }} onPressLogIn={handleSubmit} />
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ ...styles.text, color: COLORS.main }} >
                                    Create new account
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
        backgroundColor: COLORS.semiBoldGray,
        //flex: 1
    },
    loginForm: {
        height: 400,
        backgroundColor: COLORS.semiLightGray
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