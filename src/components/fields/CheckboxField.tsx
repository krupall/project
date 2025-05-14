import React from 'react';
import { FormField } from '../../types/formTypes';

interface CheckboxFieldProps {
  field: FormField;
  value: boolean;
  error?: string;
  onChange: (name: string, value: boolean) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ field, value, error, onChange }) => {
  const { name, label, required } = field;
  
  return (
    <div className="mb-3">
      <div className="form-check">
        <input
          id={name}
          name={name}
          type="checkbox"
          className={`form-check-input ${error ? 'is-invalid' : ''}`}
          checked={value}
          onChange={(e) => onChange(name, e.target.checked)}
        />
        <label htmlFor={name} className="form-check-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default CheckboxField;