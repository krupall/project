import React from 'react';
import { FormField } from '../../types/formTypes';

interface SelectFieldProps {
  field: FormField;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ field, value, error, onChange }) => {
  const { name, label, required, options = [] } = field;
  
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <select
        id={name}
        name={name}
        className={`form-select ${error ? 'is-invalid' : ''}`}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectField;