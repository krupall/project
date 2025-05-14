import React from 'react';
import FormRenderer from './components/FormRenderer';
import { useForm } from './hooks/useForm';
import { formSchema } from './utils/sampleSchemas';
import './App.css';

function App() {
  const {
    formState,
    errors,
    submitted,
    submittedData,
    handleChange,
    handleSubmit,
    resetForm
  } = useForm(formSchema);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center mb-4">
            <h1 className="display-5 fw-bold">Dynamic Form Renderer</h1>
            <p className="lead">
              Complete the form below with your information
            </p>
          </div>

          <FormRenderer
            schema={formSchema}
            formState={formState}
            errors={errors}
            submittedData={submittedData}
            submitted={submitted}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
          />
        </div>
      </div>
    </div>
  );
}

export default App