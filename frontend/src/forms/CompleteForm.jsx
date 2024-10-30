// CompleteForm.js
import React, { useEffect, useState } from "react";
// import validationCode from './validationCode'; // Adjust import based on your structure

import validationCode from "./validationCode";

import formFieldsConfig from "./formFieldsConfig";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { log } from "console";

const CompleteForm = ({ formType }) => {
   console.log("form type = " , formType);
  const fields = formFieldsConfig[formType]; // Get the fields based on formType
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);
  const [status , setStatus] = useState("");

  useEffect(() => {
    setErrors({});
    setFormData({});
  }, [formType]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationCode[formType](formData);
    console.log("Validation errors:", validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      setStatus("Form submitted successfully");
      setErrors({})
      setFormData({})
    } else {
      setErrors(validationErrors); // Now an object with field names as keys
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-sm">
    {fields.map((field) => (
      <div
        key={field.name}
        className="grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor={field.name}>{field.label}</Label>
        <Input
          type={field.type}
          id={field.name}
          placeholder={field.placeholder}
          value={formData[field.name] || ""}
          onChange={handleInputChange}
        />
        {errors[field.name] && (
          <p className="text-red-500">{errors[field.name]}</p>
        )}
      </div>
    ))}
    <span className=" font-bold text-green" >{status}</span>
    <Button type="submit">Submit</Button>
  </form>
  
  );
};

export default CompleteForm;
