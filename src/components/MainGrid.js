import React, { useState } from 'react'
import { BsGear, BsList, BsPencilSquare } from 'react-icons/bs'
import Avator from './reusable/Avator'
import SearchBar from './reusable/SearchBar'
import signImage from '/public/images/signImage.png'
import AntModal from './ui/AntModal'
import GetExpenses from './data/GetExpenses'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import AntInput from './ui/AntInput';
import { Spin, Divider, Input } from 'antd'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/config';



export default function MainGrid() {
    const [openModalExpense, setOpenModalExpense] = useState(false);
    const [loading, setLoading] = useState(false);
    const expensesCollectionRef = collection(db, "expense_details");

    const { TextArea } = Input;


    const formik = useFormik({
        initialValues: {
            expense_type: '',
            amount: '',
            comment: ''
        },
        validationSchema: Yup.object({
            expense_type: Yup.string()
                .required("Expense type is required"),

            amount: Yup.number()
                .integer("Must be a number")
                .required("Amount is required"),
            comment: Yup.string()
                .required("Comment is required")
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true)
            try {
                await addDoc(expensesCollectionRef, values);
                setLoading(false);
                resetForm();
                setOpenModalExpense(false);
            } catch (error) {
                console.log(error);
            }
        }
    })

    const handleCancel = () => {
        setOpenModalExpense(false);
    }
    const showModal = () => {
        setOpenModalExpense(true);
    }

    return (
        <>
            <AntModal title="New expense" onCancel={handleCancel} open={openModalExpense}>
                <form onSubmit={formik.handleSubmit} className='space-y-6'>
                    <div>
                        <AntInput
                            id='expense_type'
                            name='expense_type'
                            type='text'
                            placeholder='Expense type'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.expense_type}
                        />
                        {formik.touched.expense_type && formik.errors.expense_type ? (
                            <div className='mt-1 text-red-600 text-xs'>{formik.errors.expense_type}</div>
                        ) : null}
                    </div>
                    <div>
                        <AntInput
                            id='amount'
                            name='amount'
                            type='number'
                            placeholder='Amount used'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.amount}
                        />
                        {formik.touched.amount && formik.errors.amount ? (
                            <div className='mt-1 text-red-600 text-xs'>{formik.errors.amount}</div>
                        ) : null}
                    </div>
                    <div>
                        <TextArea rows={4}
                            id='comment'
                            name='comment'
                            type='textarea'
                            placeholder='Comment on expense'
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
            </AntModal>

            <div className='grid grid-cols-12 gap-6 px-6 h-screen'>
                <div className='col-span-3 overflow-auto'>
                    <div className='flex items-center space-x-3 sticky top-0 bg-[#f6f8fc] z-50 py-2'>
                        <button className='h-30 w-30 hover:bg-gray-200 w-fit p-2 rounded-full'>
                            <BsList size={26} />
                        </button>
                        <div>
                            <h3 className='text-xl font-semibold'>InCheck</h3>
                        </div>
                    </div>

                    <button className='flex space-x-3 bg-white px-5 py-5 rounded-2xl hover:shadow-md mt-6 active:scale-95 sticky top-12' onClick={showModal}>
                        <BsPencilSquare size={20} color='gray' />
                        <div className='text-sm'>New Expense</div>
                    </button>

                    <div className='mt-4'>
                        <AntModal />
                    </div>
                </div>

                <div className='col-span-9  overflow-auto  scrollbar-hide'>
                    <div className='flex gap-6 sticky top-0 bg-[#f6f8fc] py-2'>
                        <div className='flex-1'>
                            <SearchBar />
                        </div>

                        <div className=' flex items-center space-x-4 justify-end'>
                            <div className='bg-[#eaf1fb] px-5 py-3 rounded-3xl'>
                                <h2 className='text-sm font-light'>Ksh 20,000</h2>
                            </div>
                            <div className='flex items-center justify-items-end space-x-6'>
                                <BsGear size={26} color='gray' />
                                <Avator src={signImage} alt="Profile Avator" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl overflow-hidden mt-5 mb-4'>
                        <div className='px-8 py-6  bg-white '>
                            <h2 className='text-xl font-normal'>Home</h2>
                        </div>
                        <div className='px-6 pb-6'>
                            <GetExpenses />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
