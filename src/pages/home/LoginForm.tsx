import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {Box, Button, TextField} from "@material-ui/core";
import {cvar} from "../../utils";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Lock, Phone} from "@material-ui/icons";
import {SnackbarKey, useSnackbar} from 'notistack';


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

function LoginForm() {

    const {handleSubmit, register, errors} = useForm({
        mode: "onBlur",
        defaultValues: initialValue,
        resolver: yupResolver(formSchema)
    });
    const {enqueueSnackbar, closeSnackbar} = useSnackbar()

    const notificationKey = useRef<SnackbarKey>();
    useEffect(() => {
        displayErrors();
    }, [Object.values(errors)])

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
            <Box my="2rem"/>
            <InputBox>
                <LockIcon fontSize="large"/>
                <Input inputRef={register} name="password" label="رمز عبور" type="password" dir="rtl"/>
            </InputBox>
            <Box my="3rem"/>
            <SubmitButton href={undefined} type="submit" variant="outlined">
                ورود
            </SubmitButton>
        </Form>
    );
}

const Form = styled.form`
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
      border-bottom-color: ${cvar("primary")};
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom-color: ${cvar("primaryLight")};
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

export default LoginForm;