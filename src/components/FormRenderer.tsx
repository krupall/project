import React from 'react';
import { FormSchema, FormState, FormErrors } from '../types/formTypes';
import FormField from './FormField';
import { Check, RefreshCw } from 'lucide-react';

interface FormRendererProps {
  schema: FormSchema;
  formState: FormState;
  errors: FormErrors;
  submittedData: FormState | null;
  submitted: boolean;
  handleChange: (name: string, value: string | number | boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
}

const FormRenderer: React.FC<FormRendererProps> = ({
  schema,
  formState,
  errors,
  submittedData,
  submitted,
  handleChange,
  handleSubmit,
  resetForm
}) => {
  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h3 className="mb-0">{schema.title}</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {schema.fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formState[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}

          <div className="d-flex gap-2 mt-4">
            <button type="submit" className="btn btn-primary">
              <Check size={18} className="me-1" />
              Submit
            </button>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={resetForm}
            >
              <RefreshCw size={18} className="me-1" />
              Reset
            </button>
          </div>
        </form>

        {submitted && submittedData && (
          <div className="mt-4">
            <h4>Submitted Data:</h4>
            <pre className="bg-light p-3 rounded">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormRenderer;