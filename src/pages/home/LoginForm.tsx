import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {Box, Button, TextField} from "@material-ui/core";
import {cvar} from "../../utils";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Lock, Phone} from "@material-ui/icons";
import {SnackbarKey, useSnackbar} from 'notistack';
import Home from "./Home";


const initialValue = {
    phoneNumber: "",
    password: "",
}
const errorMessages = {
    phoneNumber: {
        lengh: "شماره تلفن باید 11 رقم باشد",
        required: "شماره تلفن وارد نشده است.",
    },
    password: {
        regex: "رمز عبور باید حداقل 6 کارکتر شامل حداقل 1 حرف و 1 عدد باشد",
        required: "رمز عبور وارد نشده است.",
    }
}
// 6 Characters, at least one letter and one number.
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const formSchema = yup.object({
    phoneNumber: yup.string().length(11, errorMessages.phoneNumber.lengh).required(errorMessages.phoneNumber.required),
    password: yup.string().matches(passwordRegex, errorMessages.password.regex).required(errorMessages.password.required),
});

const LoginForm = () => {
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
        if (phoneNumberError)
            notifyError(phoneNumberError);
        else if (passwordError)
            notifyError(passwordError);
        else
            closeSnackbar(notificationKey.current);
    }

    const notifyError = (error: string) => {
        closeSnackbar(notificationKey.current);
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

    const navigateToRegisterPage = () => {
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
            <Box my="2.5rem"/>
            <SubmitButton href={undefined} type="submit" variant="outlined">ورود</SubmitButton>
            <Box my=".5rem"/>
            <RegisterPageButton href={undefined} onClick={navigateToRegisterPage}>ساخت حساب</RegisterPageButton>
        </Form>
    );
}

const Form = styled.form`
  ${Home as any} & {
    grid-row: 1;
    grid-column: 1;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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

const RegisterPageButton = styled(Button)`
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

export default LoginForm;