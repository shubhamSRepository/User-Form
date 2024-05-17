import React from 'react';
import '../Styles/Form.css';
import { useState } from 'react';


function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        salary: 0,
        image: null,
        imagePreviewUrl: ''
    });


    const handleChange = (event) => {

        const { name, value } = event.target;
        let updatedValue = value;

        // Capitalize first letter of the name
        if ((name === 'firstName' || 'lastName') && value.length > 0) {
            updatedValue = value.charAt(0).toUpperCase() + value.slice(1);

        }

        // When name is equal to 'age'
        if (name === 'age') {

        }

        // Check if the value already contains a decimal point
        if (name === 'salary' && value.split('.').length - 1 > 1) {
            return; // Prevent the state from being updated if more than one decimal point
        }
        else if (name === 'salary') {

        }

        // Updating state at last according to name
        setFormData({ ...formData, [name]: updatedValue });

    }


    // handling numeric keys from keyboard so that user cannot insert numeric values in name
    const handleKeyDownName = (event) => {
        // List of key codes for number keys (0-9) and numpad keys (0-9)
        const numberKeyCodes = [
            48, 49, 50, 51, 52, 53, 54, 55, 56, 57,  // Numbers 0-9
            96, 97, 98, 99, 100, 101, 102, 103, 104, 105 // Numpad 0-9
        ];

        if (numberKeyCodes.includes(event.keyCode)) {
            event.preventDefault();
        }
    };


    // handling all input from keyboards so that user cannot insert negative or decimal value
    const handleKeyDownAge = (event) => {
        // Prevent input from the keyboard
        event.preventDefault();
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: file });
                setFormData({ ...formData, imagePreviewUrl: reader.result });

                // setImageFile(file); // Save the file to state
                // setImagePreviewUrl(reader.result); // Save the preview URL to state
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };


    // reseting all input on pressing submit button
    const handleSubmitBtn = (event) => {
        event.preventDefault();
        setFormData({ firstName: "", lastName: "", age: 0, salary: 0, image: null, imagePreviewUrl: '' })
    }



    return (

        <div className='form-container'>

            <div className='form-heading'>
                <h1>User Form</h1>
            </div>

            <div className='form-body'>

                {/* data type - string
                 validations - first letter capital and no numerics  */}
                <div className='user-first-name'>

                    <h4>First Name</h4>

                    <input
                        type='text'
                        placeholder='first name'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownName}
                        required
                    />
                </div>


                {/* data type - string
                 validations - first letter capital and no numerics  */}
                <div className='user-last-name'>

                    <h4>Last Name</h4>

                    <input
                        type='text'
                        placeholder='last name'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownName}
                        required
                    />
                </div>


                {/* Data type - interger
                validations - age cannot be in negative or decimal */}
                <div className='user-age'>

                    <h4>Age</h4>

                    <input
                        type='number'
                        min={0}
                        placeholder='age'
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownAge}
                        required
                    />
                </div>


                {/* data type-float
                validations- salary cannot use two decimals */}
                <div className='user-salary'>

                    <h4>Salary</h4>

                    <input
                        type='double'
                        placeholder='salary'
                        name='salary'
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className='user-image'>

                    <h4>Image</h4>

                    <input
                        type='file'
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                {formData.imagePreviewUrl && (
                    <div>
                        <h6>Image Preview:</h6>
                        <img src={formData.imagePreviewUrl} alt="Preview" style={{ maxWidth: '100px', height: 'auto' }} />
                    </div>
                )}



                <div className='submit-button'>
                    <button onClick={handleSubmitBtn}>Submit</button>
                </div>



            </div>

        </div >

    )

}

export default Form;
