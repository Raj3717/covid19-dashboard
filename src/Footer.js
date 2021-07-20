import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='content'>
            <div>
                <ul><h3>Built by Raj</h3></ul>
                <ul>MTech CSE</ul>
                <ul>NSUT, Delhi</ul>
                <ul>2020-2022</ul>
            </div>
            <div>
                <ul><h3>Legal</h3></ul>
                <ul><a href="javascript: void(0)">Privacy Policy</a></ul>
                <ul><a href="javascript: void(0)">Data Policy</a></ul>
                <ul><a href="javascript: void(0)">Terms of Services</a></ul>
            </div>
            <div>
                <ul><h3>About</h3></ul>
                <ul><a href='https://www.linkedin.com/in/raj-krishan-149464112/' target='_blank' rel='noreferrer'>LinkedIn</a></ul>
                <ul><a href='https://www.facebook.com/raj3717/' target='_blank' rel='noreferrer'>Facebook</a></ul>
                <ul><a href='https://github.com/Raj3717/covid19-dashboard' target='_blank' rel='noreferrer'>GitHub</a></ul>
            </div>
        </div>
    )
}

export default Footer
