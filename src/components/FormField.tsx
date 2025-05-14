import React from 'react';
import { FormField as FormFieldType } from '../types/formTypes';
import TextField from './fields/TextField';
import NumberField from './fields/NumberField';
import CheckboxField from './fields/CheckboxField';
import SelectField from './fields/SelectField';

interface FormFieldProps {
  field: FormFieldType;
  value: any;
  error?: string;
  onChange: (name: string, value: any) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, error, onChange }) => {
  // Render the appropriate field component based on the field type
  switch (field.type) {
    case 'text':
      return (
        <TextField
          field={field}
          value={value as string}
          error={error}
          onChange={onChange}
        />
      );
    
    case 'number':
      return (
        <NumberField
          field={field}
          value={value as string | number}
          error={error}
          onChange={onChange}
        />
      );
    
    case 'checkbox':
      return (
        <CheckboxField
          field={field}
          value={value as boolean}
          error={error}
          onChange={onChange}
        />
      );
    
    case 'select':
      return (
        <SelectField
          field={field}
          value={value as string}
          error={error}
          onChange={onChange}
        />
      );
    
    default:
      return (
        <TextField
          field={field}
          value={value as string}
          error={error}
          onChange={onChange}
        />
      );
  }
};

export default FormField;