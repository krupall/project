export interface FormField {
  label: string;
  type: string;
  name: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface FormSchema {
  title: string;
  fields: FormField[];
}

export interface FormState {
  [key: string]: string | number | boolean | null | undefined;
}

export interface FormErrors {
  [key: string]: string;
}