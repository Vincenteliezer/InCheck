import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import AntInput from './ui/AntInput';
import { Spin, Divider } from 'antd'


export default function AddExpense() {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            expensetype: '',
            amount: '',
            comment: ''
        },
        validationSchema: Yup.object({
            expensetype: Yup.string()
                .required("Expense type is required"),

            amount: Yup.number()
                .integer("Must be a number")
                .required("Amount is required"),
            comment: Yup.string()
                .required("Comment is required")
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_SHEETLABS_BASE_URL}`, {
                    expensetype: values.expensetype,
                    amount: values.amount,
                    comment: values.comment,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa(`${process.env.NEXT_PUBLIC_SHEETLABS_EMAIL}:${process.env.NEXT_PUBLIC_SHEETLABS_AUTH_TOKEN}`)
                    },
                })
                if (response.status === 204) {
                    setLoading(false);
                    resetForm();

                } else {
                    throw new Error('Something went wrong on api server!');
                }
            } catch (error) {
                console.log("ERROR ADDING EXPENSES", error.message);
            }

        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='space-y-3'>
                <div>
                    <AntInput
                        id='expensetype'
                        name='expensetype'
                        type='text'
                        placeholder='Enter expense type'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expensetype}
                    />
                    {formik.touched.expensetype && formik.errors.expensetype ? (
                        <div className='mt-1 text-red-600 text-xs'>{formik.errors.expensetype}</div>
                    ) : null}
                </div>
                <div>
                    <AntInput
                        id='amount'
                        name='amount'
                        type='number'
                        placeholder='Enter Amount'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                    />
                    {formik.touched.amount && formik.errors.amount ? (
                        <div className='mt-1 text-red-600 text-xs'>{formik.errors.amount}</div>
                    ) : null}
                </div>
                <div>
                    <AntInput
                        id='comment'
                        name='comment'
                        type='textarea'
                        placeholder='Enter comment'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                        <div className='mt-1 text-red-600 text-xs'>{formik.errors.comment}</div>
                    ) : null}
                </div>
                <Divider orientation='center'>*</Divider>

                <button type="submit" className='bg-blue-500 w-full mt-4  p-3 rounded-md font-medium text-white'>
                    {loading ? (
                        <Spin />
                    ) : "Add Expense"}
                </button>
            </form>
        </div>
    )
}
