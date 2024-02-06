"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Divider, Table } from "antd"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase/config';


export default function GetExpenses() {
    const [expenses, setExpenses] = useState([]);
    const expensesCollectionRef = collection(db, "expense_details")

    useEffect(() => {
        const getAllExpenses = async () => {
            const response = await getDocs(expensesCollectionRef);
            setExpenses(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log("EXPENSE", response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getAllExpenses();
    }, [])


    const columns = [
        {
            title: 'Timestamp',
            dataIndex: "time",
            key: "time"
        },
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
        <Table dataSource={expenses} columns={columns} key="title" rowKey="id" />
    )
}
