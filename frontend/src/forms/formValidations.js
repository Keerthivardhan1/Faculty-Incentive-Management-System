import formFieldsConfig from './formFieldsConfig';
import { validateField } from './validationUtils';

export const validateResearchPaperForm = (formData) => {
  const errors = {};
  formFieldsConfig.researchPaper.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};

export const validateJournalForm = (formData) => {
  const errors = {};
  formFieldsConfig.journal.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};

export const validatePatentForm = (formData) => {
  const errors = {};
  formFieldsConfig.patent.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};

export const validatePHDForm = (formData) => {
  const errors = {};
  formFieldsConfig.combined.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};

export const validateStudyLeaveForm = (formData) => {
  const errors = {};
  formFieldsConfig.studyLeave.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};

export const validateTadaForm = (formData) => {
  const errors = {};
  formFieldsConfig.tada.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};

export const validateConferenceForm = (formData) => {
  const errors = {};
  formFieldsConfig.conference.forEach(field => {
    const error = validateField(field, formData[field.name]);
    if (error) {
      errors[field.name] = error;
    }
  });
  return errors;
};
