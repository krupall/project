import { FormSchema } from '../types/formTypes';

export const formSchema: FormSchema = {
  title: "User Profile Form",
  fields: [
    { label: "Full Name", type: "text", name: "fullName", required: true, placeholder: "Enter your full name" },
    { label: "Email Address", type: "text", name: "email", required: true, placeholder: "your.email@example.com" },
    { label: "Age", type: "number", name: "age", placeholder: "Enter your age" },
    { 
      label: "Occupation", 
      type: "select", 
      name: "occupation",
      options: ["Student", "Employed", "Self-Employed", "Retired", "Other"],
      required: true
    },
    { label: "Phone Number", type: "text", name: "phone", placeholder: "Enter your phone number" },
    { 
      label: "Preferred Contact Method", 
      type: "select", 
      name: "contactMethod",
      options: ["Email", "Phone", "Both"]
    },
    { label: "Subscribe to Newsletter", type: "checkbox", name: "subscribe" },
    { label: "Agree to Terms", type: "checkbox", name: "terms", required: true }
  ]
};