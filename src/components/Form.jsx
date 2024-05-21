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
      className="max-w-[736px] w-full mx-auto px-[24px] md:px-[40px] pt-[18px] md:pt-[34px] pb-[23px] md:pb-[39px] bg-white rounded-[15px]"
    >
      <h2 className="text-[30px] font-bold text-dark-gray">Contact Us</h2>
      <fieldset className="flex flex-col md:flex-row justify-between gap-[24px] md:gap-[16px] mt-[25px] w-full">
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
              }
            })}
            className="block w-full px-[23px] py-[11px] mt-[8px] border border-medium-gray rounded-lg text-[18px] cursor-pointer"
          />
          {errors.firstName && (
            <span className="block w-full mt-[8px] text-red">
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
              }
            })}
            className="block w-full px-[23px] py-[11px] mt-[8px] border border-medium-gray rounded-lg text-[18px] cursor-pointer"
          />
          {errors.lastName && (
            <span className="block w-full mt-[8px] text-red">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </fieldset>
      <fieldset className="mt-[24px] md:mt-[23px] w-full">
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
          className="block w-full px-[23px] py-[11px] mt-[8px] border border-medium-gray rounded-lg text-[18px] cursor-pointer"
        />
        {errors.email && (
          <span className="block w-full mt-[8px] text-red">
            {errors.email.message}
          </span>
        )}
      </fieldset>
      <fieldset className="mt-[24px] md:mt-[25px] w-full">
        <legend>
          Query Type <span>*</span>
        </legend>
        <div className="flex flex-col md:flex-row justify-between gap-[16px] mt-[16px] w-full">
          <label className="flex-1 w-full flex items-center gap-[17px] px-[29px] py-[11px] border border-medium-gray rounded-lg cursor-pointer">
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
            <p className="text-[18px]">General Enquiry</p>
          </label>
          <label className="flex-1 w-full flex items-center gap-[17px] px-[29px] py-[11px] border border-medium-gray rounded-lg cursor-pointer">
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
            <p className="text-[18px]">Support Request</p>
          </label>
        </div>
        {errors.queryType && (
          <span className="block w-full mt-[16px] text-red">
            {errors.queryType.message}
          </span>
        )}
      </fieldset>
      <fieldset className="mt-[24px] md:mt-[25px] w-full">
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
          className="block rows- w-full h-[240px] md:h-auto px-[23px] py-[10px] mt-[8px] border border-medium-gray rounded-lg text-[18px]"
        ></textarea>
        {errors.message && (
          <span className="block w-full mt-[8px] text-red">
            {errors.message.message}
          </span>
        )}
      </fieldset>
      <fieldset className="mt-[40px] w-full">
        <legend className="sr-only">Consent</legend>
        <div className="flex gap-[21px] px-[5px]">
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
            className="scale-[1.4]"
          />
          <label
            htmlFor="consent"
            className="text-[18px] tracking-[-0.9px] leading-[24px] cursor-pointer"
          >
            I consent to being contacted by the team <span>*</span>
          </label>
        </div>
        {errors.consent && (
          <span className="block w-full mt-[8px] text-red">
            {errors.consent.message}
          </span>
        )}
      </fieldset>
      <button
        type="submit"
        className="mt-[40px] md:mt-[41px] w-full px-[11px] py-[17px] rounded-[7px] text-[17px] font-bold bg-green text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
