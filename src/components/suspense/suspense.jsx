import React from 'react'

import { LoadingContainer, LoadingSpinner } from './suspense.styles'
export const Suspense = () => {
    return (

        <LoadingContainer>
            <h1>Loading...</h1>
            <LoadingSpinner></LoadingSpinner>
        </LoadingContainer>
    )
}
