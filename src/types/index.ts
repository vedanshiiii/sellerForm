export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'text';
  options?: Option[];
  feedback?: string;
}

export interface Option {
  id?: string;
  text: string;
  feedback?: string;
}

export interface CustomQuestion {
  id?: string;
  text: string;
  options: { id?: string; text: string }[];
}

export interface FormData {
  category: string;
  questions: Question[];
  customQuestions: CustomQuestion[];
}

export interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
  type: 'question' | 'option';
  itemText: string;
} 