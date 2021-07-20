import React, {useState} from 'react'
import Modal from 'react-modal';
import { Card, CardContent} from "@material-ui/core";
import numeral from "numeral";
import './Header.css';

function Header({countries}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className='header'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={()=>setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            transparent: 'true'
                        }
                    }
                }>
                
                <div className='modalData'>
                <div className='header'><h1>Number of Cases Across Countries</h1></div>

                <div className='stateListTable'>
                <Card>
                    <CardContent>
                        <tr>
                            <td><b>Country</b></td>
                            <td><b>Number of Cases</b></td>
                        </tr>
                    {countries.map((country) => (  
                        <tr>
                            <td>{country.country}</td>
                            <td>{numeral(country.cases).format("0,0")}</td>
                        </tr>
                    ))}
                    </CardContent>
                </Card>
                </div>

                <div><button style={{textAlign: 'center'}} onClick={()=>setModalIsOpen(false)}>Close</button></div>
                </div>

            </Modal>

            <div className='left'>
                <h1>Covid-19 Dashboard</h1>
            </div>

            <div className='right'>
                <div className='headerColumn'>
                    <a className='headerLink' href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel='noreferrer'>Guidelines</a>
                </div>
                <div className='headerColumn'>
                    <a href='#' onClick={()=>setModalIsOpen(true)} >Countries</a>
                </div>
            </div>
        </div>
    )
}

export default Header
