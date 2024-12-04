import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../components/config';

export default function Terms() {
    const [terms, setTerms] = useState({})

    useEffect(() => {
        axios.get(`${API_BASE_URL}terms/get-terms`)
            .then(function (res) {
                setTerms(res?.data?.terms)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }, [])

    return (
        <div className="terms__privacy">
            <div className="container">
                <h1>{terms?.title}</h1>
                <div className='contents' dangerouslySetInnerHTML={{ __html: terms?.desc}}></div>
            </div>
        </div>
    )
}
