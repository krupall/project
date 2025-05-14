import React from 'react';
import { FormField } from '../../types/formTypes';

interface TextFieldProps {
  field: FormField;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({ field, value, error, onChange }) => {
  const { name, label, required, placeholder, type } = field;
  
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder || ''}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextField;