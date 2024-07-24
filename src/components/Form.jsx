import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[46rem] w-full mx-auto px-[1.5rem] md:px-[2.5rem] pt-[1.125rem] md:pt-[2.125rem] pb-[1.4375rem] md:pb-[2.4375rem] bg-white rounded-[.9375rem]"
    >
      <h2 className="text-[1.875rem] font-bold text-dark-gray">Contact Us</h2>
      <fieldset className="flex flex-col md:flex-row justify-between gap-[1.5rem] md:gap-[1rem] mt-[1.5625rem] w-full">
        <legend className="sr-only">Personal Information</legend>
        <div className="flex-1 w-full">
          <label htmlFor="firstName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register("firstName", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[a-zA-Z]+$/i,
                message: "Please enter a valid first name",
              },
            })}
            className={`block w-full px-[1.4375rem] py-[.6875rem] mt-[.5rem] border border-medium-gray rounded-lg text-[1.125rem] cursor-pointer ${
              errors.message ? "border-red" : ""
            }`}
          />
          {errors.firstName && (
            <span className="block w-full mt-[.5rem] text-red">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="flex-1 w-full">
          <label htmlFor="lastName">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[a-zA-Z]+$/i,
                message: "Please enter a valid last name",
              },
            })}
            className={`block w-full px-[1.4375rem] py-[.6875rem] mt-[.5rem] border border-medium-gray rounded-lg text-[1.125rem] cursor-pointer ${
              errors.message ? "border-red" : ""
            }`}
          />
          {errors.lastName && (
            <span className="block w-full mt-[.5rem] text-red">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </fieldset>
      <fieldset className="mt-[1.5rem] md:mt-[1.4375rem] w-full">
        <legend className="sr-only">Contact Information</legend>
        <label htmlFor="email">
          Email Address <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          validation={errors.email}
          className={`block w-full px-[1.4375rem] py-[.6875rem] mt-[.5rem] border border-medium-gray rounded-lg text-[1.125rem] cursor-pointer ${
            errors.message ? "border-red" : ""
          }`}
        />
        {errors.email && (
          <span className="block w-full mt-[.5rem] text-red">
            {errors.email.message}
          </span>
        )}
      </fieldset>
      <fieldset className="mt-[1.5rem] md:mt-[1.5625rem] w-full">
        <legend>
          Query Type <span>*</span>
        </legend>
        <div className="flex flex-col md:flex-row justify-between gap-[1rem] mt-[1rem] w-full">
          <label className="flex-1 w-full flex items-center gap-[1.0625rem] px-[1.8125rem] py-[.6875rem] border border-medium-gray rounded-lg cursor-pointer">
            <input
              type="radio"
              id="generalEnquiry"
              name="queryType"
              value="General Enquiry"
              {...register("queryType", {
                required: {
                  value: true,
                  message: "Please select a query type",
                },
              })}
              className="scale-[1.4] cursor-pointer"
            />
            <p className="text-[1.125rem]">General Enquiry</p>
          </label>
          <label className="flex-1 w-full flex items-center gap-[1.0625rem] px-[1.8125rem] py-[.6875rem] border border-medium-gray rounded-lg cursor-pointer">
            <input
              type="radio"
              id="supportRequest"
              name="queryType"
              value="Support Request"
              {...register("queryType", {
                required: {
                  value: true,
                  message: "Please select a query type",
                },
              })}
              className="scale-[1.4] cursor-pointer"
            />
            <p className="text-[1.125rem]">Support Request</p>
          </label>
        </div>
        {errors.queryType && (
          <span className="block w-full mt-[1rem] text-red">
            {errors.queryType.message}
          </span>
        )}
      </fieldset>
      
      <fieldset className="mt-[1.5rem] md:mt-[1.5625rem] w-full">
        <legend className="sr-only">Message</legend>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="3"
          {...register("message", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          className={`block rows- w-full h-[15rem] md:h-auto px-[1.4375rem] py-[.625rem] mt-[.5rem] border border-medium-gray rounded-lg text-[1.125rem] ${
            errors.message ? "border-red" : ""
          }`}
        ></textarea>
        {errors.message && (
          <span className="block w-full mt-[.5rem] text-red">
            {errors.message.message}
          </span>
        )}
      </fieldset>

      <fieldset className="mt-[2.5rem] w-full">
        <legend className="sr-only">Consent</legend>
        <div className="flex gap-[1.3125rem] px-[.3125rem]">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            {...register("consent", {
              required: {
                value: true,
                message:
                  "To submit the form, please consent to being contacted",
              },
            })}
            className="scale-[1.4] cursor-pointer"
          />
          <label
            htmlFor="consent"
            className="text-[1.125rem] tracking-[-0.0563rem] leading-[1.5rem] cursor-pointer"
          >
            I consent to being contacted by the team <span>*</span>
          </label>
        </div>
        {errors.consent && (
          <span className="block w-full mt-[.5rem] text-red">
            {errors.consent.message}
          </span>
        )}
      </fieldset>
      <button
        type="submit"
        className="mt-[2.5rem] md:mt-[2.5625rem] w-full px-[.6875rem] py-[1.0625rem] rounded-[.4375rem] text-[1.0625rem] font-bold bg-green text-white hover:bg-light-green hover:text-green transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
