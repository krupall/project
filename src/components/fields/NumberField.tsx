import React from 'react';
import { FormField } from '../../types/formTypes';

interface NumberFieldProps {
  field: FormField;
  value: string | number;
  error?: string;
  onChange: (name: string, value: string) => void;
}

const NumberField: React.FC<NumberFieldProps> = ({ field, value, error, onChange }) => {
  const { name, label, required, placeholder } = field;
  
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="number"
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder={placeholder || ''}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default NumberField;