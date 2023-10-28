import React, { useState } from "react";

export default function Income() {

    const [showAmount, setShowAmount] = React.useState("none")

    function toggleEntry() {
        setShowAmount("block")
    }

    function toggleExit() {
        setShowAmount("none")
    }

    console.log(showAmount)

    const incomeList = [
        { id: "1", month: "January", income: 120000 },
        { id: "2", month: "February", income: 95000 },
        { id: "3", month: "March", income: 405000 },
        { id: "4", month: "April", income: 80000 },
        { id: "5", month: "May", income: 315000 },
        { id: "6", month: "June", income: 90000 },
        { id: "7", month: "July", income: 110000 },
        { id: "8", month: "August", income: 100000 },
        { id: "9", month: "September", income: 85000 },
        { id: "10", month: "October", income: 125000 },
        { id: "11", month: "November", income: 98000 },
        { id: "12", month: "December", income: 500000 }
    ];

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
                            <hr class="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>400000</p>
                            <hr class="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>300000</p>
                            <hr class="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>200000</p>
                            <hr class="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>100000</p>
                            <hr class="dotted"></hr>
                        </div>
                        <div className="level-line">
                            <p>0</p>
                            <hr class="dotted"></hr>
                        </div>
                    </div>
                    <section 
                         className="bars-container"
                    >
                        {barElements}
                    </section>
                </div>

            </div>
        </div>
    )
}