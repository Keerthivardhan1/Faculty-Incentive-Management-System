import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function TravellingAllowance() {
  const [formData, setFormData] = useState({
    paperTitle: "",
    conferenceName: "",
    taDa: "",
  });

  const [errors, setErrors] = useState({});

  // Validation Function
  const validateForm = () => {
    let formErrors = {};

    if (!formData.paperTitle) {
      formErrors.paperTitle = "Paper title is required";
    }

    if (!formData.conferenceName) {
      formErrors.conferenceName = "Conference name is required";
    }

    if (!formData.taDa) {
      formErrors.taDa = "TA/DA field is required";
    } else if (isNaN(formData.taDa)) {
      formErrors.taDa = "TA/DA must be a number";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit the form
      console.log("Form data submitted:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-sm">
      {/* Paper Title */}
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="paperTitle">Paper Title</Label>
        <Input
          type="text"
          id="paperTitle"
          placeholder="Enter paper title"
          value={formData.paperTitle}
          onChange={handleInputChange}
        />
        {errors.paperTitle && <p className="text-red-500">{errors.paperTitle}</p>}
      </div>

      {/* Conference Name */}
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="conferenceName">Conference Name</Label>
        <Input
          type="text"
          id="conferenceName"
          placeholder="Enter conference name"
          value={formData.conferenceName}
          onChange={handleInputChange}
        />
        {errors.conferenceName && (
          <p className="text-red-500">{errors.conferenceName}</p>
        )}
      </div>

      {/* TA/DA */}
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="taDa">TA/DA</Label>
        <Input
          type="text"
          id="taDa"
          placeholder="Enter TA/DA"
          value={formData.taDa}
          onChange={handleInputChange}
        />
        {errors.taDa && <p className="text-red-500">{errors.taDa}</p>}
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>

      <Button
        type="submit">
        Submit
      </Button>
    </form>
  );
}
