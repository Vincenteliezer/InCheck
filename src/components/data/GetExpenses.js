"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Divider, Table, Skeleton } from "antd"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase/config';


export default function GetExpenses() {
    const [expenses, setExpenses] = useState([]);
    const expensesCollectionRef = collection(db, "expense_details");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllExpenses = async () => {
            setLoading(true);
            try {
                const response = await getDocs(expensesCollectionRef);
                setExpenses(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getAllExpenses();
    }, [])


    const columns = [
        {
            title: 'Expense Type',
            dataIndex: 'expense_type',
            key: 'expense_type',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
        },
    ];
    return (
        <>
            {loading ? (
                <Skeleton />
            ) : (
                <Table dataSource={expenses} columns={columns} key="title" rowKey="id" />
            )}
        </>
    )
}
