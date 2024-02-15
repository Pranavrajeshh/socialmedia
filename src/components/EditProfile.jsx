import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'

const EditProfile = () => {

    const {user}=useSelector((state)=>state.user)
    const dispatch =useDispatch();
    const [errMsg,setErrMsg]=useState("")
    const [isSubmittin,setIsSubmitting]=useState(false)
    const [picture,setPicture]=useState(null)

    const{
        register,
        handleSubmit,
        formState:{errors},
    }=useForm({
        mode:"onChange",
        defaultValues:{...user},
    })

    const onSubmit=async(data)=>{}

    return (
        <div>
            <div className='fixed z-50 inset-0 overflow-y-auto'>
                <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <div className='fixed inset-0 transition-opacity'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile