import React from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RFValue } from 'react-native-responsive-fontsize';

const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', padding: RFValue(20) }}>
                <Form>
                    <Item>
                        <Input
                            placeholder="Username"
                            onChangeText={formik.handleChange('username')}
                            value={formik.values.username}
                        />
                    </Item>
                    {formik.errors.username && <Text>{formik.errors.username}</Text>}

                    <Item>
                        <Input
                            placeholder="Email"
                            onChangeText={formik.handleChange('email')}
                            value={formik.values.email}
                        />
                    </Item>
                    {formik.errors.email && <Text>{formik.errors.email}</Text>}

                    <Item>
                        <Input
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={formik.handleChange('password')}
                            value={formik.values.password}
                        />
                    </Item>
                    {formik.errors.password && <Text>{formik.errors.password}</Text>}

                    <Button block onPress={formik.handleSubmit} style={{ marginTop: RFValue(20) }}>
                        <Text>Sign Up</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}