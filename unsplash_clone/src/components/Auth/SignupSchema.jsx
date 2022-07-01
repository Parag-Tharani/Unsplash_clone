import * as yup from "yup";

export const formSchema = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    username: yup.string().required("Required"),
    password: yup.string().min(8).required("Required")
});