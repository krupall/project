import { useState, useCallback } from 'react';
import { FormSchema, FormState, FormErrors } from '../types/formTypes';

export const useForm = (schema: FormSchema) => {
  // Initialize form state with empty values for each field
  const initializeFormState = (): FormState => {
    const initialState: FormState = {};
    
    schema.fields.forEach(field => {
      // Set appropriate default values based on field type
      switch (field.type) {
        case 'checkbox':
          initialState[field.name] = false;
          break;
        case 'number':
          initialState[field.name] = '';
          break;
        case 'select':
          initialState[field.name] = field.options && field.options.length > 0 
            ? field.options[0] 
            : '';
          break;
        default:
          initialState[field.name] = '';
      }
    });
    
    return initialState;
  };

  const [formState, setFormState] = useState<FormState>(initializeFormState());
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Handle field change
  const handleChange = useCallback((name: string, value: string | number | boolean) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  // Validate the form
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    schema.fields.forEach(field => {
      if (field.required) {
        const value = formState[field.name];
        
        if (field.type === 'checkbox' && value === false) {
          newErrors[field.name] = `${field.label} is required`;
          isValid = false;
        } else if ((typeof value === 'string' && value.trim() === '') || value === null || value === undefined) {
          newErrors[field.name] = `${field.label} is required`;
          isValid = false;
        }
      }
    });
    
    setErrors(newErrors);
    return isValid;
  }, [formState, schema.fields]);

  // Handle form submission
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = validateForm();
    if (isValid) {
      setSubmitted(true);
      setSubmittedData({ ...formState });
    }
  }, [formState, validateForm]);

  // Reset the form
  const resetForm = useCallback(() => {
    setFormState(initializeFormState());
    setErrors({});
    setSubmitted(false);
    setSubmittedData(null);
  }, []);

  return {
    formState,
    errors,
    submitted,
    submittedData,
    handleChange,
    handleSubmit,
    resetForm
  };
};