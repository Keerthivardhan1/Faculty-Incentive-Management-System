// validationUtils.js
export const validateField = (field, value) => {
    if (field.required && !value) {
      return `${field.label} is required.`;
    }
  
    switch (field.type) {
      case "text":
        if (field.name === "token" && !/^\w+$/.test(value)) {
          return `${field.label} should contain only alphanumeric characters.`;
        }
        break;
      case "url":
        try {
          new URL(value);
        } catch (_) {
          return `${field.label} must be a valid URL.`;
        }
        break;
      case "date":
        if (isNaN(new Date(value).getTime())) {
          return `${field.label} must be a valid date.`;
        }
        break;
      case "file":
        if (!value) {
          return `${field.label} is required.`;
        }
        break;
      case "select":
        if (!field.options.includes(value)) {
          return `Invalid value for ${field.label}.`;
        }
        break;
      default:
        break;
    }
  
    return null;
  };
  