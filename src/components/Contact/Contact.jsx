import React from 'react'
import './Contact.scss';
import { Facebook } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { X } from '@mui/icons-material';
import { Google } from '@mui/icons-material';
import { Pinterest } from '@mui/icons-material';


export const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your email...' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <Facebook />
                    <Instagram />
                    <X />
                    <Google />
                    <Pinterest />
                </div>
            </div>
        </div>
    )
}
