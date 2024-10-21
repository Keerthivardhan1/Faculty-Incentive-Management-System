import React from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    paperTitle: "",
    conferenceName: "",
    taDa: "",
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formErrors = {};
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
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="text" />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
