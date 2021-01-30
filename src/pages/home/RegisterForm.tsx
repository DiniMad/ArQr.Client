import React, {FunctionComponent, useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {Lock, Phone} from "@material-ui/icons";
import {cvar} from "../../utils";
import {Box, Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {SnackbarKey, useSnackbar} from "notistack";
import {keyframes} from "@emotion/react";


const initialValue = {
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
}
const errorMessages = {
    phoneNumber: {
        length: "شماره تلفن باید 11 رقم باشد",
        required: "شماره تلفن وارد نشده است.",
    },
    password: {
        regex: "رمز عبور باید حداقل 6 کارکتر شامل حداقل 1 حرف و 1 عدد باشد",
        required: "رمز عبور وارد نشده است.",
    },
    passwordConfirm: {
        match: "تکرار رمز عبور با رمز عبور مطابقت ندارد.",
        required: "تکرار رمز عبور وارد نشده است.",
    }
}
// 6 Characters, at least one letter and one number.
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const formSchema = yup.object({
    phoneNumber: yup.string()
        .length(11, errorMessages.phoneNumber.length)
        .required(errorMessages.phoneNumber.required),
    password: yup.string()
        .matches(passwordRegex, errorMessages.password.regex)
        .required(errorMessages.password.required),
    passwordConfirm: yup.string()
        .oneOf([yup.ref("password")], errorMessages.passwordConfirm.match)
        .required(errorMessages.passwordConfirm.required)
});

interface IProps {
    changeContent: () => void
}

const RegisterForm: FunctionComponent<IProps> = ({changeContent}) => {
    const {handleSubmit, register, errors} = useForm({
        mode: "onBlur",
        defaultValues: initialValue,
        resolver: yupResolver(formSchema)
    });

    const {enqueueSnackbar, closeSnackbar} = useSnackbar()

    const errorValues = Object.values(errors);
    const notificationKey = useRef<SnackbarKey>();
    useEffect(() => {
        displayErrors();
    }, [errorValues])

    const displayErrors = () => {
        const phoneNumberError = errors.phoneNumber && errors.phoneNumber.message
        const passwordError = errors.password && errors.password.message
        const passwordConfirmError = errors.passwordConfirm && errors.passwordConfirm.message
        if (phoneNumberError)
            notifyError(phoneNumberError);
        else if (passwordError)
            notifyError(passwordError);
        else if (passwordConfirmError)
            notifyError(passwordConfirmError);
        else
            closeSnackbar();
    }

    const notifyError = (error: string) => {
        closeSnackbar();
        notificationKey.current = enqueueSnackbar(error, {
            variant: "error",
            anchorOrigin: {
                vertical: "top",
                horizontal: "center"
            },
            persist: true
        });
    }

    const onSubmit = (data: any) => {
        // TODO: Send Login Request
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputBox>
                <PhoneIcon fontSize="large"/>
                <Input inputRef={register} name="phoneNumber" label="شماره تلفن" type="number" dir="rtl"/>
            </InputBox>
            <Box my="1.5rem"/>
            <InputBox>
                <LockIcon fontSize="large"/>
                <Input inputRef={register} name="password" label="رمز عبور" type="password" dir="rtl"/>
            </InputBox>
            <Box my="1.5rem"/>
            <InputBox>
                <LockIcon fontSize="large"/>
                <Input inputRef={register} name="passwordConfirm" label="تکرار رمز عبور" type="password" dir="rtl"/>
            </InputBox>
            <Box my="2.5rem"/>
            <SubmitButton href={undefined} type="submit" variant="outlined">ساخت</SubmitButton>
            <Box my=".5rem"/>
            <LoginPageButton href={undefined} onClick={changeContent}>ورود به حساب</LoginPageButton>
        </Form>
    );
};

const slideInAnimation = keyframes`
  from {
    margin-left: -20rem;
    opacity: 0;
  }
  to {
    margin-left: 0;
    opacity: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: ${slideInAnimation} 1s forwards;
`
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const PhoneIcon = styled(Phone)`
  color: ${cvar("primary")};
`
const LockIcon = styled(Lock)`
  color: ${cvar("primary")};
`
const Input = styled(TextField)`
  input {
    font-size: ${cvar("title2")};
    text-align: center;
    direction: ltr;
  }

  && label {
    font-size: ${cvar("title1")};
    color: ${cvar("primary")};
  }

  .MuiInput-underline {
    &:before {
      border-bottom-color: ${cvar("primaryDark")};
    }

    &:after {
      border-bottom-color: ${cvar("primaryLight")};
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom-color: ${cvar("primary")};
    }
  }
`
const SubmitButton = styled(Button)`
  && {
    font-size: ${cvar("title1")};
    color: ${cvar("primary")};
    border: 1px solid ${cvar("primaryDark")};;
    padding: .4rem 4rem;

    &:hover {
      border: 1px solid ${cvar("primaryLight")};
    }
  }
`

const LoginPageButton = styled(Button)`
  && {
    font-size: ${cvar("title2")};
    color: ${cvar("primary")};
    transition: color .5s;

    &:hover {
      background: transparent;
      color: ${cvar("primaryLight")};
    }
  }
`;
export default RegisterForm;