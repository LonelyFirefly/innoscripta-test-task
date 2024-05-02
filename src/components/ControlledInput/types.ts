export interface IControlledInput {
    label?: string;
    control: any;
    name: string;
    rules?: Record<string, any>;
    placeholder: string;
    type: string;
  }