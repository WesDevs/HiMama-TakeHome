import React from 'react';

const Form = (props) => {
        return (
            <form action="thankyou.html" id="form">
                <ul className="props.formClass">
                {
                    props.formData.data1.map((items, i) => {
                        return <li key={i}>
                            <label htmlFor={items.for}>{items.label}</label>
                            <input type={items.inputType} id={items.for}name ={items.for} required/>
                        </li>
                    })
                }
                <li>
                    <label htmlFor={props.formData.upload.for}>{props.formData.upload.label}</label>
                    <input type={props.formData.upload.inputType} id={props.formData.upload.for}name ={props.formData.upload.for} accept={props.formData.upload.accept ? props.formData.upload.accept : ''} />
                </li>
                <h3>Daycare Information</h3>
                {
                    props.formData.data2.map((items, i) => {
                        return <li key={i}>
                            <label htmlFor={items.for}>{items.label}</label>
                            <input type={items.inputType} id={items.for}name={items.for} required/>
                            {
                                items.radioItems ? <ul>
                                    {
                                        <li>
                                            <input type={items.radioItems.type} name={items.radioItems.name} id={items.radioItems.for1} required />
                                            <label htmlFor={items.radioItems.for1}>{items.radioItems.label1}</label>
                                            <input type={items.radioItems.type} name={items.radioItems.name} id={items.radioItems.for2} required />
                                            <label htmlFor={items.radioItems.for2}>{items.radioItems.label2}</label>
                                        </li>
                                    }
                                </ul> : ''
                            }
                        </li>
                    })
                }
                </ul>
                <label htmlFor="submit" className="vhidden"></label>
                <button type="submit" name="submit">Submit!</button>
            </form>
        )
    }
    
export default Form;