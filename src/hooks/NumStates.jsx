import React, { useEffect, useState } from 'react'

export const NumStates = () => {

    const [numberState, setNumberState] = useState({
        value : 0,
        description : ''
    });
    

    return {
        numberState,
        setNumberState
    };
};
