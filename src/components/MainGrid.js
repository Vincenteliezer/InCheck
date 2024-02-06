import React, { useState } from 'react'
import { BsBell, BsCash, BsChat, BsCheckCircle, BsClock, BsCurrencyExchange, BsGear, BsGraphUpArrow, BsGrid, BsList, BsListTask, BsPencilSquare, BsPiggyBank, BsShieldLock, BsShopWindow } from 'react-icons/bs'
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
import YourStats from './data/YourStats'
import Button from './ui/Button'
import YourTasks from './data/YourTasks'
import Passwords from './data/Passwords'
import Bank from './data/Bank'
import AntDrawer from './ui/AntDrawer'



export default function MainGrid() {
    const [openModalExpense, setOpenModalExpense] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [activeButton, setActiveButton] = useState(1);
    // const [openDrawer, setOpenDrawer] = useState(false);

    // const showDrawer = () => {
    //     setOpenDrawer(true);
    // };
    // const onCloseDrawer = () => {
    //     setOpenDrawer(false);
    // };



    const handleButtonClick = (btnNumber) => {
        setActiveButton(btnNumber);
    };

    const expensesCollectionRef = collection(db, "expense_details");

    const { TextArea } = Input;

    const formik = useFormik({
        initialValues: {
            time: '',
            expense_type: '',
            amount: '',
            comment: ''
        },
        validationSchema: Yup.object({
            time: Yup.date()
                .required("Date time is required"),
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
                resetForm();
                setIsSuccess(true);

            } catch (error) {
                console.log(error);
                setIsSuccess(false);

            } finally {
                setLoading(false);
            }
        }
    })

    const handleCancel = () => {
        setOpenModalExpense(false);
        setIsSuccess(false);

    }
    const showModal = () => {
        setOpenModalExpense(true);
    }

    return (
        <>
            <AntModal title="NEW EXPENSE" onCancel={handleCancel} open={openModalExpense}>

                {isSuccess ? (
                    <div className='flex flex-col items-center justify-center'>
                        <BsCheckCircle size={60} className='text-green-500' />
                        <div className='mt-4 text-xl'>
                            Cool, Expense added successfully!
                        </div>
                    </div>
                ) : (
                    <form onSubmit={formik.handleSubmit} className='space-y-6'>
                        <div>
                            <AntInput
                                prefix={<BsClock size={18} className='mr-1' color='gray' />}
                                id='time'
                                name='time'
                                type='datetime-local'
                                placeholder='Select date/time'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.time}
                            />
                            {formik.touched.time && formik.errors.time ? (
                                <div className='mt-1 text-red-600 text-xs'>{formik.errors.time}</div>
                            ) : null}
                        </div>
                        <div>
                            <AntInput
                                prefix={<BsShopWindow size={18} className='mr-1' color='gray' />}
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
                                prefix={<BsCash size={18} className='mr-1' color='gray' />}
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
                                prefix={<BsChat size={18} className='mr-1' />}
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
                                <Spin className='text-white' style={{ color: "white" }} />
                            ) : "Add Expense"}
                        </button>
                    </form>
                )}

            </AntModal>
            {/* <AntDrawer open={openDrawer} onClose={onCloseDrawer} /> */}
            <div className='grid grid-cols-12 gap-6 px-6 h-screen'>
                <div className='col-span-full lg:col-span-3 overflow-auto hidden lg:block'>
                    <div className='flex items-center space-x-3 sticky top-0 bg-[#f6f8fc] z-50 py-6'>
                        <button className='h-30 w-30 hover:bg-gray-200 w-fit p-2 rounded-full'>
                            <BsGrid size={24} color='gray' />
                        </button>
                        <div>
                            <h3 className='text-xl font-light'>InCheck</h3>
                        </div>
                    </div>
                    <button className='flex space-x-3 bg-[#c2e7fe] px-5 py-5 rounded-2xl hover:shadow-md mt-6 active:scale-95 sticky top-12' onClick={showModal}>
                        <BsPencilSquare size={20} color='black' />
                        <div className='text-sm'>New Expense</div>
                    </button>

                    <div className='w-full mt-4 space-y-3'>
                        <Button onClick={() => handleButtonClick(1)}>
                            <BsGraphUpArrow size={20} color='gray' />
                            <div className='text-sm'>Your stats</div>
                        </Button>

                        <Button onClick={() => handleButtonClick(2)}>
                            <BsCurrencyExchange size={20} color='gray' />
                            <div className='text-sm'>All expenses</div>
                        </Button>



                        <Button onClick={() => handleButtonClick(3)}>
                            <BsListTask size={20} color='gray' />
                            <div className='text-sm'>Tasks</div>
                        </Button>

                        <Button onClick={() => handleButtonClick(4)}>
                            <BsShieldLock size={20} color='gray' />
                            <div className='text-sm'>Passwords</div>
                        </Button>

                        <Button onClick={() => handleButtonClick(5)}>
                            <BsPiggyBank size={20} color='gray' />
                            <div className='text-sm'>My bank</div>
                        </Button>
                    </div>



                    <div className='mt-4'>
                        <AntModal />
                    </div>
                </div>

                <div className='col-span-full lg:col-span-9  overflow-auto  scrollbar-hide'>
                    <div className='flex gap-6 sticky top-0 bg-[#f6f8fc] py-6 z-50'>

                        <div className='flex-1 flex items-center space-x-4 lg:space-x-0'>
                            <BsGrid size={26} color='gray' className='lg:hidden' />
                            <SearchBar />
                        </div>

                        <div className=' flex items-center space-x-4 justify-end'>
                            <div className='bg-[#eaf1fb] px-5 py-3 rounded-3xl hidden lg:block'>
                                <h2 className='text-sm font-light'>Ksh 20,000</h2>
                            </div>
                            <div className='flex items-center justify-items-end space-x-6'>
                                <BsBell size={20} color='gray' className='hidden lg:block' />
                                <Avator src={signImage} alt="Profile Avator" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl overflow-hidden mt-5 mb-4 sticky top-10'>
                        <div className='px-8 py-6  bg-white '>
                            <h2 className='text-xl font-normal'>Home</h2>
                        </div>
                        <div className='px-6 pb-6'>
                            {activeButton === 1 && <YourStats />}
                            {activeButton === 2 && <GetExpenses />}
                            {activeButton === 3 && <YourTasks />}
                            {activeButton === 4 && <Passwords />}
                            {activeButton === 5 && <Bank />}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
