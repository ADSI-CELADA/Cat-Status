import { Card, Image } from '@nextui-org/react'
import React, { useState } from 'react'

export const ImageStatus = ({ numberState }) => {


    return (
        <>
            <div className='flex items-center justify-end mt-10'>
                <Image
                    alt="NextUI hero Image with delay"
                    src={`https://app.requestly.io/delay/500000000000/https://http.cat/${numberState.value}`}
                    width={262}
                    style={{ width: "800px", height: "220px" }}
                />

                {
                    numberState.value == 0 ? <p className='ml-80 text-lg'>
                    Aprende los estados http con gatos <span className='text-4xl'>😺</span>
                </p> : <p className='ml-10 text-lg'>
                    {numberState.description}
                </p>
                }
            </div>
        </>
    )
}
