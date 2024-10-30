// validationCode.js
import {
    validateResearchPaperForm,
    validateJournalForm,
    validatePatentForm,
    validatePHDForm,
    validateStudyLeaveForm,
    validateTadaForm,
    validateConferenceForm
  } from './formValidations';
  
  const validationCode = {
    researchPaper: validateResearchPaperForm,
    journal: validateJournalForm,
    patent: validatePatentForm,
    phd: validatePHDForm,
    studyLeave: validateStudyLeaveForm,
    tada: validateTadaForm,
    conference:validateConferenceForm,
    travellingallowances:validateTadaForm
    
  };
  
  export default validationCode;
  