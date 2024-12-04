import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../components/config';

export default function Privacy() {
    const [privacy, setPrivacy] = useState({})

    useEffect(() => {
        axios.get(`${API_BASE_URL}privacy/get-privacy`)
            .then(function (res) {
                setPrivacy(res?.data?.privacy)
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
                <h1>{privacy?.title}</h1>
                <div className='contents' dangerouslySetInnerHTML={{ __html: privacy?.desc}}></div>
            </div>
        </div>
    )
}
