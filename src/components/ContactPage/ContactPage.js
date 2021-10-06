import CommonCard from "../../UI/Card/CommonCard";
import './ContactPage.css';
import React from "react";


function ContactPage(){
    return <div className='Main'>
        <div className='Layout'>
            <div className='Container'>
                <CommonCard>
                    <div className='Container'>Contact Me!

                        <div className='LoginBox'>
                            <button>
                                <div className='Email'>
                                    <a>Email:</a>
                                    <input type="text" placeholder="Something@gmail.com" />
                                </div>
                                <div className='PhoneNumber'>
                                    <a>Phone Number:</a>
                                    <input type="text" placeholder="999-999-9999" />

                                </div>
                            </button>

                        </div>
                        <div className='Subject'>
                            <button>
                                <div className='SubjectLine'>
                                        <a>Phone Number:</a>
                                        <input type="text" placeholder="Enter Subject Line" />

                                    </div>
                            </button>

                        </div>

                        <div className='MessageText'>
                            <p>Message:
                                <input type="text" placeholder="Type Message Here..." />
                            </p>


                        </div>

                    </div>
                </CommonCard>
            </div>
        </div>
    
    </div>
}

export default ContactPage;