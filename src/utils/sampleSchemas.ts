import { FormSchema } from '../types/formTypes';

export const formSchema: FormSchema = {
  "title": "User Registration",
  "fields": [
    { "label": "Name", "type": "text", "name": "name", "required": true },
    { "label": "Age", "type": "number", "name": "age" },
    { "label": "Subscribe", "type": "checkbox", "name": "subscribe" },
    {
      "label": "Gender",
      "type": "select",
      "name": "gender",
      "options": ["Male", "Female", "Other"]
    }
  ]
};
