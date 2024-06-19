import React, { useState } from 'react'
import Text from './Inputs/Text';
import CheckBox from './Inputs/CheckBox';
import Radio from './Inputs/Radio';
import DropDown from './Inputs/DropDown';
import Email from './Inputs/Email';
import ContactNum from './Inputs/ContactNum';
import Date from './Inputs/Date';
import Password from './Inputs/Password';
import Submit from './Inputs/Submit';
import File from './Inputs/File';
import Number from './Inputs/Number';
import Time from './Inputs/Time';
import Url from './Inputs/Url';
import Image from './Inputs/Image';
import Month from './Inputs/Month';
import Week from './Inputs/Week';
import Range from './Inputs/Range';


const Design = ({ form }) => {

    const [values, setValues] = useState({});
    const [check, setCheck] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Data submitted: ", values);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));

    };

    const handleChangeDropDwon = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setValues((prev) => ({ ...prev, [name]: value }));

    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        let temp = [...check]

        if (temp.includes(value)) {
            temp = temp.filter((item) => {
                if (item !== value) {
                    return item
                }
            })
            setCheck(temp)
            setValues(prevState => ({
                ...prevState,
                [name]: temp
            }));
            console.log(check);
        }

        if (e.target.checked) {


            temp.push(value)

            setCheck(temp)

            setValues(prevState => ({
                ...prevState,
                [name]: temp
            }));

        }
    }


    const handleRadioChange = (e) => {
        const { name, value } = e.target;

        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleDate = (e) => {
        const { name, value } = e.target;

        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e)}>
                {form && Object.keys(form).map((field) => {
                    const { type } = form[field]

                    return (

                        <div key={field}>
                            {type === 'text' && (
                                <Text input={form[field]} handleChange={handleChange} />)}
                            {type === 'email' && (
                                <Email input={form[field]} handleChange={handleChange} />)}
                            {type === 'tel' && (
                                <ContactNum input={form[field]} handleChange={handleChange} />)}
                            {type === 'checkbox' && (
                                <CheckBox jsonData={form[field]} handleCheckboxChange={handleCheckboxChange} />)}
                            {type === 'radio' && (
                                <Radio input={form[field]} handleRadioChange={handleRadioChange} />)}
                            {type === 'dropdown' && (
                                <DropDown input={form[field]} handleChangeDropDwon={handleChangeDropDwon} />)}
                            {(type === 'date' || type === 'datetime-local') && (
                                <Date input={form[field]} handleDate={handleDate} />)}
                            {type === 'password' && (
                                <Password input={form[field]} handleChange={handleChange} />)}
                            {type === 'file' && (
                                <File input={form[field]} handleChange={handleChange} />)}
                            {type === 'url' && (
                                < Url input={form[field]} handleChange={handleChange} />)}
                            {type === 'image' && (
                                <Image input={form[field]} handleChange={handleChange} />)}
                            {type === 'number' && (
                                <Number input={form[field]} handleChange={handleChange} />)}
                            {type === 'time' && (
                                <Time input={form[field]} handleChange={handleChange} />)}
                            {type === 'month' && (
                                < Month input={form[field]} handleChange={handleChange} />)}
                            {type === 'week' && (
                                <Week input={form[field]} handleChange={handleChange} />)}
                            {type === 'range' && (
                                <Range input={form[field]} handleChange={handleChange} />)}






                            {type === 'submit' && (
                                <Submit handleSubmit={handleSubmit} />)}
                            {type === 'button' && (
                                <Submit handleButton='' />)}

                        </div>
                    );
                })}
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default Design;
