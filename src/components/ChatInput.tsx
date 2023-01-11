import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 1rem;
  border: 1px solid black;
`;

interface ButtonProps {
  readonly isLoading: boolean;
}
const Button = styled.button<ButtonProps>`
  position: absolute;
  top: calc(50% - 12px);
  right: 4px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  opacity: ${props => props.isLoading ? 0.5 : 1};
`;

const SVG = styled.svg`
  width: 24px;
  height: 24px;
`;

interface IChatInputMessage {
  message: string;
}

const ChatInput = () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const { register, handleSubmit, reset } = useForm<IChatInputMessage>();
  const onSubmit: SubmitHandler<IChatInputMessage> = async (data) => {
    if (isSendingMessage || data.message.length === 0) return;
    setIsSendingMessage(true);
    setTimeout(() => {
      reset();
      setIsSendingMessage(false);
    }, 5000);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('message')} type='text' />
      <Button onClick={handleSubmit(onSubmit)} isLoading={isSendingMessage} >
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </SVG>
      </Button>
    </Form>
  );
}

export { ChatInput };
