import React from 'react'
import { SigninContainer, SigninWrapper, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, FormButton2} from './SigninElements'

const SignIn = () => {
  return (
    <>
      <SigninContainer>
        <SigninWrapper>
          <FormWrap>
            <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Phone Number</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton2 to='checkout2'>Continue</FormButton2>
              <FormButton2 to='signup'>Sign Up</FormButton2>
              <Text>Forgot password</Text>
            </Form>
            </FormContent>
          </FormWrap>
        </SigninWrapper>
      </SigninContainer>
    </>
  )
}

export default SignIn