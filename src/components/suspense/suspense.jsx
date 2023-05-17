import React from 'react'
import '../../components/suspense/suspense.scss'
export const Suspense = () => {
    return (

        <div className="loading-container">
            <h1>Loading...</h1>
            <div className="loading-spinner"></div>
        </div>
    )
}
