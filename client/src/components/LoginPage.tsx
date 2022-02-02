import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginPage = (props: any) => {
  return (
    <Form className='login-form'>
      <h1>
        <span className='font-weight-bold'>Budget Tracker</span>
      </h1>
      <FormGroup>
        <Label for='email'>Email</Label>
        <Input type='email' placeholder='Email' />
      </FormGroup>
      <FormGroup>
        <Label for='password'>Password</Label>
        <Input type='password' placeholder='Password' />
      </FormGroup>
      <Button className='btn btn-dark btn-lg'>Login</Button>
      <div className='text-center'>
        <div>
          <a href='/sign-up'>Sign up</a>
        </div>
        <a href='/forgot-password'>Forgot Password</a>
      </div>
    </Form>
  );
};

export default LoginPage;
