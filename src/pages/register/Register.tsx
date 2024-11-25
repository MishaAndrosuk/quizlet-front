import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IRegisterValues } from "../../store/reducers/auth/types";
import "./Register.css"

const Register = () => {
    const { register } = useActions(); 
    const navigate = useNavigate();

    const initialValues: IRegisterValues = {
        email: "",
        username: "",
        password: "",
        confirmedPassword: "",
        firstName: "",
        lastName: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Некоректний email")
            .required("Обов'язкове поле"),
        username: Yup.string()
            .required("Обов'язкове поле")
            .min(3, "Мінімум 3 символи"),
        password: Yup.string()
            .required("Обов'язкове поле")
            .min(6, "Пароль має містити мінімум 6 символів"),
        confirmedPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Паролі не співпадають")
            .required("Повторіть пароль"),
        firstName: Yup.string().required("Обов'язкове поле"),
        lastName: Yup.string().required("Обов'язкове поле"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values: IRegisterValues) => {
            try {
                const result: any = await register(values); 

                if (result.success) {
                    navigate("/"); 
                } else {
                    console.log(result.message); 
                }
            } catch (error) {
                console.error("Register error:", error);
                alert("Сталася помилка під час реєстрації.");
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-column gap-2" style={{ maxWidth: "400px", margin: "auto" }}>
                <label htmlFor="email">Email</label>
                <InputText
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <small style={{ color: "red" }}>{formik.errors.email}</small>
                )}

                <label htmlFor="username">Username</label>
                <InputText
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                    <small style={{ color: "red" }}>{formik.errors.username}</small>
                )}

                <label htmlFor="password">Password</label>
                <InputText
                    id="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <small style={{ color: "red" }}>{formik.errors.password}</small>
                )}

                <label htmlFor="confirmedPassword">Confirm Password</label>
                <InputText
                    id="confirmedPassword"
                    type="password"
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmedPassword && formik.errors.confirmedPassword && (
                    <small style={{ color: "red" }}>{formik.errors.confirmedPassword}</small>
                )}

                <label htmlFor="firstName">First Name</label>
                <InputText
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <small style={{ color: "red" }}>{formik.errors.firstName}</small>
                )}

                <label htmlFor="lastName">Last Name</label>
                <InputText
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <small style={{ color: "red" }}>{formik.errors.lastName}</small>
                )}

                <Button type="submit">Register</Button>
            </div>
        </form>
    );
};

export default Register;
