import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import './form.css';
import Back from '../Back/Back';
import {createBase, writeFile} from '../../utils/fs'
import addUser from '../../utils/database';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  const genderValue = watch('gender');
  const validateDateOfBirth = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    const dayDiff = today.getDate() - selectedDate.getDate();

    if (selectedDate > today) {
      return 'Date of Birth cannot be a future date';
    }

    if (
      age < 12 ||
      (age === 12 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
      return 'Age must be at least 12 years';
    }

    return true;
  };

  const onSubmit = async (data, e) => {
    
    const param = {
      id : data.name +"-"+data. anumber,
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      dob: data.dob,
      photo: data.photo[0],
      anumber: data.anumber,
      aadhar: data.aadhar[0],
      date: new Date().toISOString(),
    };

    console.log(data);
    addUser(param);
  };

  useEffect(() => {
    if (!genderValue) register('gender', { required: 'Please select gender' });
  }, [register, genderValue]);
  // console.log({ errors, genderValue });
  return (
    <div className="wrapper">
      <Back />
      <form
        className="container"
        name="registration"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Registration Form</h1>
        <div className="column">
          <h3>Personal Details</h3>
          <input
            type="text"
            placeholder="Full Name"
            {...register('name', { required: 'Full Name is required' })}
          />
          {errors.name && <p className="errormsg">{errors.name.message}</p>}

          <input
            type="text"
            placeholder="Mobile Number"
            minLength={10}
            maxLength={10}
            {...register('phone', {
              required: 'Mobile Number is required',
              pattern: {
                value: /^\d+$/,
                message: 'Mobile Number must contain only digits',
              },
              minLength: {
                value: 10,
                message: 'Mobile Number must be at least 10 digits',
              },
            })}
          />
          {errors.phone && <p className="errormsg">{errors.phone.message}</p>}

          <Select
            options={genderOptions}
            placeholder="Gender"
            isSearchable={false}
            className="react-select-container"
            classNamePrefix="react-select"
            onChange={(option) => setValue('gender', option.value)}
          />
          {errors.gender && <p className="errormsg">{errors.gender.message}</p>}

          <div className="row" style={{ gap: '8px' }}>
            <div className="column">
              <h3>Date of Birth</h3>
              <Controller
                control={control}
                name="dob"
                rules={{
                  required: 'Date of Birth is required',
                  validate: validateDateOfBirth,
                }}
                render={({ field }) => (
                  <DatePicker
                    showYearPicker={true}
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    dateFormat="dd/MM/yyyy"
                    className="input"
                  />
                )}
              />
              {errors.dob && <p className="errormsg">{errors.dob.message}</p>}
            </div>
            <div className="column">
              <h3>Upload Photo</h3>
              <input
                type="file"
                {...register('photo', { required: 'Photo is required' })}
              />
              {errors.photo && (
                <p className="errormsg">{errors.photo.message}</p>
              )}
            </div>
          </div>

          <h3>Aadhar Details</h3>
          <input
            type="text"
            minLength={12}
            maxLength={12}
            placeholder="Aadhar Number"
            {...register('anumber', {
              required: 'Aadhar Number is required',
              pattern: {
                value: /^\d+$/,
                message: 'Aadhar Number must contain only digits',
              },
              minLength: {
                value: 12,
                message: 'Aadhar Number must be at least 12 digits',
              },
            })}
          />
          {errors.photo && <p className="errormsg">{errors.anumber.message}</p>}
          <h3>Aadhar Upload</h3>
          <input
            type="file"
            {...register('aadhar', { required: 'Aadhar is required' })}
          />
          {errors.aadhar && <p className="errormsg">{errors.aadhar.message}</p>}

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     alert(data);
//   };

//   const password = watch('password');

//   return (
//     <div className="canvas">
//       <div className="wrapper">
//         <div className="images">
//           <img src={`/assets/gym-bg.webp`} alt="asdf" />
//         </div>
//         <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-field">
//             <label htmlFor="name">Full Name</label>
//             <input
//               className="input-fields"
//               {...register('name', { required: true })}
//               id="name"
//             />
//             {errors.name && (
//               <span className="error">This field is required</span>
//             )}
//           </div>

//           <div className="form-field">
//             <label htmlFor="mobile">Mobile</label>
//             <input
//               className="input-fields"
//               {...register('mobile', { pattern: /^[0-9+-]+$/i })}
//               id="mobile"
//             />
//             {errors.mobile && (
//               <span className="error">Invalid mobile number</span>
//             )}
//           </div>

//           <div className="form-field">
//             <label htmlFor="aadhar">Aadhar Id</label>
//             <input
//               type="number"
//               minLength={12}
//               maxLength={12}
//               className="input-fields"
//               id="aadhar"
//             />
//             {errors.aadhar && (
//               <span className="error">Invalid Aadhar number</span>
//             )}
//           </div>

//           <div className="form-field">
//             <label htmlFor="aadhar-photo">Upload Aadhar Card photo</label>
//             <input type="file" className="input-fields" id="aadhar-photo" />
//           </div>

//           <div className="form-field">
//             <label htmlFor="selectField">Gender</label>
//             <Controller
//               name="selectField"
//               control={control}
//               render={({ field }) => (
//                 <Select
//                   className="select-field"
//                   options={[
//                     {
//                       Male: 'Male',
//                     },
//                     { Female: 'Female' },
//                     { Other: 'Other' },
//                   ]}
//                   onChange={(selectedOption) => {
//                     field.onChange(selectedOption || ''); // Pass an empty string if selectedOption is undefined
//                   }}
//                   value={field.value || ''}
//                 />
//               )}
//             />
//           </div>

//           <div className="form-field">
//             <label htmlFor="photo">Upload Photo</label>
//             <input type="file" className="input-fields" id="photo" />
//           </div>

//           <div id="submit-button">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

export default RegistrationForm;

// const Form = () => {
//   return (
//     <form className="registration-form">
//       <input placeholder="Photo" type="file" name="photo" />
//       <input placeholder="Aadhar card  photo" type="file" name="adhar-photo" />
//       <input placeholder="Date of Birth" type="date" name="dob" />
//       <input placeholder="Registration Date" type="date" name="reg_date" />
//       <button type="submit">Submit</button>{' '}
//     </form>
//   );
// };

// export default Form;
