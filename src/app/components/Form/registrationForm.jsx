import React from "react";
// import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./form.css";
import Back from "../Back/Back";

const RegistrationForm = () => {
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  return (
    <div className="wrapper">
      <Back />
      <form className="container">
        <h1>Registration Form</h1>
        <div className="column">
          <h3>Personal Details</h3>
          <input type="text" placeholder="Full Name" />
          <input type="number" placeholder="Mobile Number" />
          <Select
                  isSearchable={false}
                  placeholder="Gender"
                  unstyled={true}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={gender}
                />
          <div className="row">
            <div className="column">
              <h3>Date of Birth</h3>
              <div class="row">
                <input type="date" placeholder="DD" />
              </div>
            </div>
            <div className="column">
              <h3>Upload Photo</h3>
              <div class="row">
                <input
                  placeholder="Photo"
                  type="file"
                  className="input-fields"
                  id="photo"
                />
              </div>
            </div>
            
          </div>

          <h3>Aadhar Details</h3>
          <input type="number" placeholder="Aadhar Number" />

          <h3>Aadhar Upload</h3>
          <input
            placeholder="Aadhar"
            type="file"
            className="input-fields"
            id="photo"
          />

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
