import React, { useState } from "react";
import { getVendorIncome } from "../../api";
import { getVendorTransactions } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import vendorIncomeAction from "../../redux/action-creators/vendorIncomeAction";
import vendorTransactionsAction from "../../redux/action-creators/vendorTansactionsAction";

export default function Income() {

    const [showAmount, setShowAmount] = React.useState("none")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const incomeList = useSelector(state => state.incomeList)
    const transactionsData = useSelector(state => state.transactionsData)
    const dispatch = useDispatch()

    React.useEffect(() => {
        async function getData() {
            try {
                const income = await getVendorIncome()
                const transactions = await getVendorTransactions()
                dispatch(vendorIncomeAction(income))
                dispatch(vendorTransactionsAction(transactions))
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getData()
    },[])

    function toggleEntry() {
        setShowAmount("block")
    }

    function toggleExit() {
        setShowAmount("none")
    }

    if (loading) {
        return (
            <div className="equipment--page">
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <>
                <h1>Error: {error.message}</h1>
                <pre>{error.status} - {error.statusText}</pre>
            </>
        )
    }
      

    const barElements = incomeList.map(item => (
        <div key={item.id} className="bar--container">
            <div className="bar">
                <span style={{ height: `${(item.income / 500000) * 100}%` }}>
                    <h5
                        className="floating--text"
                        // style={{display: showAmount}}
                    >{item.income}</h5>
                </span>
            </div>
            <p>{item.month.slice(0, 2)}</p>
        </div>
    ))

    const incomeCardElements = transactionsData.map(item => (
        <div key={item.id} className="transaction--card">
            <h4>Ksh {item.amount}</h4>
            <span>{item.date}</span>
        </div>
    ))

    return (
        <div className="income--page">
            <div className="income--page--container">
                <h1>This is income page</h1>
                <h2>Ksh 400000</h2>
                <div 
                   className="income--levels--container--parent"
                   onMouseEnter={toggleEntry}
                   onMouseOut={toggleExit}
                >
                    <div className="income--levels--container">
                        <div className="level-line">
                            <p>500000</p>
                            <hr className="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>400000</p>
                            <hr className="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>300000</p>
                            <hr className="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>200000</p>
                            <hr className="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>100000</p>
                            <hr className="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>0</p>
                            <hr className="dotted"></hr>
                        </div>
                    </div>
                    <section 
                         className="bars-container"
                    >
                        {barElements}
                    </section>
                </div>
                <div className="transactions--area">
                    <div className="transactions--header">
                        <h3>Your transactions ({transactionsData.length})</h3>
                        <p>Last 30 days</p>
                    </div>
                    {incomeCardElements}
                </div>
            </div>
        </div>
    )
}