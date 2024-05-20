import React from "react";

const Form = () => {
  return (
    <form
      action=""
      class="max-w-[736px] w-full mx-auto px-[24px] md:px-[40px] pt-[18px] md:pt-[34px] pb-[23px] md:pb-[39px] bg-white rounded-[15px]"
    >
      <h2 class="text-[30px] font-bold text-dark-gray">Contact Us</h2>
      <fieldset class="flex flex-col md:flex-row justify-between gap-[24px] md:gap-[16px] mt-[25px] w-full">
        <legend class="sr-only">Personal Information</legend>
        <div class="flex-1 w-full">
          <label for="firstName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            class="block w-full px-[23px] py-[11px] mt-[8px] border border-black rounded-lg text-[18px] cursor-pointer"
          />
        </div>
        <div class="flex-1 w-full">
          <label for="lastName">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            class="block w-full px-[23px] py-[11px] mt-[8px] border border-black rounded-lg text-[18px] cursor-pointer"
          />
        </div>
      </fieldset>
      <fieldset class="mt-[24px] md:mt-[23px] w-full">
        <legend class="sr-only">Contact Information</legend>
        <label for="email">
          Email Address <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="block w-full px-[23px] py-[11px] mt-[8px] border border-black rounded-lg text-[18px] cursor-pointer"
        />
      </fieldset>
      <fieldset class="mt-[24px] md:mt-[25px] w-full">
        <legend>
          Query Type <span>*</span>
        </legend>
        <div class="flex flex-col md:flex-row justify-between gap-[16px] mt-[16px] w-full">
          <label class="flex-1 w-full flex items-center gap-[17px] px-[29px] py-[11px] border border-black rounded-lg cursor-pointer">
            <input
              type="radio"
              id="generalEnquiry"
              name="queryType"
              class="scale-[1.4] cursor-pointer"
            />
            <p class="text-[18px]">General Enquiry</p>
          </label>
          <label class="flex-1 w-full flex items-center gap-[17px] px-[29px] py-[11px] border border-black rounded-lg cursor-pointer">
            <input
              type="radio"
              id="supportRequest"
              name="queryType"
              class="scale-[1.4] cursor-pointer"
            />
            <p class="text-[18px]">Support Request</p>
          </label>
        </div>
      </fieldset>
      <fieldset class="mt-[24px] md:mt-[25px] w-full">
        <legend class="sr-only">Message</legend>
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="3"
          class="block rows- w-full h-[240px] md:h-auto px-[23px] py-[10px] mt-[8px] border border-black rounded-lg text-[18px]"
        ></textarea>
      </fieldset>
      <fieldset class="flex gap-[21px] mt-[40px] px-[5px] w-full">
        <legend class="sr-only">Consent</legend>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          class="scale-[1.4]"
        />
        <label
          for="checkbox"
          class="text-[18px] tracking-[-0.9px] leading-[24px] cursor-pointer"
        >
          I consent to being contacted by the team <span>*</span>
        </label>
      </fieldset>
      <button
        type="submit"
        class="mt-[40px] md:mt-[41px] w-full px-[11px] py-[17px] rounded-[7px] text-[17px] font-bold bg-green text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
