import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Question, FormData } from '@/types';
import FeedbackModal from './FeedbackModal';

const CATEGORIES = ['Electronics', 'Fashion', 'Home & Kitchen', 'Sports'];

const SAMPLE_QUESTIONS: Record<string, Question[]> = {
  Electronics: [
    {
      id: 'e1',
      text: 'What type of electronic device are you looking for?',
      type: 'single',
      options: [
        { id: 'e1-1', text: 'Smartphone' },
        { id: 'e1-2', text: 'Laptop' },
        { id: 'e1-3', text: 'Tablet' },
        { id: 'e1-4', text: 'Smart Watch' },
        { id: 'e1-5', text: 'Other' },
      ],
    },
    {
      id: 'e2',
      text: 'What are your primary requirements?',
      type: 'multiple',
      options: [
        { id: 'e2-1', text: 'Battery Life' },
        { id: 'e2-2', text: 'Performance' },
        { id: 'e2-3', text: 'Camera Quality' },
        { id: 'e2-4', text: 'Storage Capacity' },
        { id: 'e2-5', text: 'Display Quality' },
      ],
    },
    {
      id: 'e3',
      text: 'What is your preferred brand?',
      type: 'single',
      options: [
        { id: 'e3-1', text: 'Apple' },
        { id: 'e3-2', text: 'Samsung' },
        { id: 'e3-3', text: 'Dell' },
        { id: 'e3-4', text: 'Other' },
      ],
    },
  ],
  Fashion: [
    {
      id: 'f1',
      text: 'What type of clothing are you interested in?',
      type: 'single',
      options: [
        { id: 'f1-1', text: 'Casual Wear' },
        { id: 'f1-2', text: 'Formal Wear' },
        { id: 'f1-3', text: 'Sports Wear' },
        { id: 'f1-4', text: 'Traditional Wear' },
      ],
    },
    {
      id: 'f2',
      text: 'What factors influence your purchase decision?',
      type: 'multiple',
      options: [
        { id: 'f2-1', text: 'Style' },
        { id: 'f2-2', text: 'Comfort' },
        { id: 'f2-3', text: 'Price' },
        { id: 'f2-4', text: 'Brand' },
        { id: 'f2-5', text: 'Material Quality' },
      ],
    },
    {
      id: 'f3',
      text: 'What is your preferred size?',
      type: 'single',
      options: [
        { id: 'f3-1', text: 'Small' },
        { id: 'f3-2', text: 'Medium' },
        { id: 'f3-3', text: 'Large' },
        { id: 'f3-4', text: 'Extra Large' },
      ],
    },
  ],
  'Home & Kitchen': [
    {
      id: 'h1',
      text: 'What type of home product are you looking for?',
      type: 'single',
      options: [
        { id: 'h1-1', text: 'Furniture' },
        { id: 'h1-2', text: 'Kitchen Appliances' },
        { id: 'h1-3', text: 'Home Decor' },
        { id: 'h1-4', text: 'Cleaning Supplies' },
      ],
    },
    {
      id: 'h2',
      text: 'What features are important to you?',
      type: 'multiple',
      options: [
        { id: 'h2-1', text: 'Durability' },
        { id: 'h2-2', text: 'Ease of Use' },
        { id: 'h2-3', text: 'Energy Efficiency' },
        { id: 'h2-4', text: 'Design' },
        { id: 'h2-5', text: 'Maintenance' },
      ],
    },
    {
      id: 'h3',
      text: 'What is your preferred style?',
      type: 'single',
      options: [
        { id: 'h3-1', text: 'Modern' },
        { id: 'h3-2', text: 'Traditional' },
        { id: 'h3-3', text: 'Minimalist' },
        { id: 'h3-4', text: 'Other' },
      ],
    },
  ],
  Sports: [
    {
      id: 's1',
      text: 'What type of sports equipment are you looking for?',
      type: 'single',
      options: [
        { id: 's1-1', text: 'Fitness Equipment' },
        { id: 's1-2', text: 'Team Sports' },
        { id: 's1-3', text: 'Outdoor Sports' },
        { id: 's1-4', text: 'Water Sports' },
      ],
    },
    {
      id: 's2',
      text: 'What factors are important in your selection?',
      type: 'multiple',
      options: [
        { id: 's2-1', text: 'Quality' },
        { id: 's2-2', text: 'Safety' },
        { id: 's2-3', text: 'Durability' },
        { id: 's2-4', text: 'Price' },
        { id: 's2-5', text: 'Brand' },
      ],
    },
    {
      id: 's3',
      text: 'What is your skill level?',
      type: 'single',
      options: [
        { id: 's3-1', text: 'Beginner' },
        { id: 's3-2', text: 'Intermediate' },
        { id: 's3-3', text: 'Advanced' },
        { id: 's3-4', text: 'Professional' },
      ],
    },
  ],
};

export default function SellerForm() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [customQuestions, setCustomQuestions] = useState([
    { text: '', options: [''] },
    { text: '', options: [''] },
    { text: '', options: [''] },
  ]);
  const [feedbackModal, setFeedbackModal] = useState<{
    isOpen: boolean;
    type: 'question' | 'option';
    itemId: string;
    itemText: string;
  }>({
    isOpen: false,
    type: 'question',
    itemId: '',
    itemText: '',
  });

  const { handleSubmit } = useForm<FormData>();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setQuestions(SAMPLE_QUESTIONS[category] || []);
  };

  const handleFeedback = (type: 'question' | 'option', itemId: string, itemText: string) => {
    setFeedbackModal({
      isOpen: true,
      type,
      itemId,
      itemText,
    });
  };

  const handleFeedbackSubmit = (feedback: string) => {
    if (feedbackModal.type === 'question') {
      setQuestions(questions.map(q =>
        q.id === feedbackModal.itemId ? { ...q, feedback } : q
      ));
    } else {
      setQuestions(questions.map(q => ({
        ...q,
        options: q.options?.map(o =>
          o.id === feedbackModal.itemId ? { ...o, feedback } : o
        ),
      })));
    }
    toast.success('Feedback saved successfully!');
  };

  const updateCustomQuestion = (index: number, text: string) => {
    setCustomQuestions(prev => {
      const updated = [...prev];
      updated[index].text = text;
      return updated;
    });
  };

  const updateCustomOption = (qIdx: number, oIdx: number, value: string) => {
    setCustomQuestions(prev => {
      const updated = [...prev];
      updated[qIdx].options[oIdx] = value;
      return updated;
    });
  };

  const addCustomOption = (qIdx: number) => {
    setCustomQuestions(prev => {
      const updated = [...prev];
      updated[qIdx].options.push('');
      return updated;
    });
  };

  const addCustomQuestion = () => {
    setCustomQuestions(prev => ([...prev, { text: '', options: [''] }]));
  };

  const onSubmit = (data: FormData) => {
    // Here you would typically save to a backend
    console.log('Form data:', data);
    toast.success('Form saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Category Selection */}
        <div className="bg-white shadow rounded-lg p-6">
          <label htmlFor="category" className="block text-lg font-medium text-gray-900 mb-4">
            Select Category
          </label>
          <select
            id="category"
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base px-4 py-3 h-12 text-black placeholder-gray-400"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Questions */}
        {questions.map((question) => (
          <div key={question.id} className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900">{question.text}</h3>
              <button
                type="button"
                onClick={() => handleFeedback('question', question.id, question.text)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            {question.options && (
              <div className="mt-4 space-y-2">
                {question.options.map((option) => (
                  <div key={option.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <span className="text-gray-700">{option.text}</span>
                    <button
                      type="button"
                      onClick={() => handleFeedback('option', option.id, option.text)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Custom Questions */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Custom Seller Questions</h3>
          {customQuestions.map((question, idx) => (
            <div key={idx} className="mb-4">
              <label className="block text-gray-700 mb-1">Custom Question {idx + 1}</label>
              <input
                type="text"
                value={question.text}
                onChange={(e) => updateCustomQuestion(idx, e.target.value)}
                placeholder="e.g., What specific use case do you have for this product?"
                className="w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base px-4 text-black placeholder-gray-400 mb-2"
              />
              <div className="ml-2">
                <label className="block text-gray-600 mb-1">Options</label>
                {question.options.map((option, oIdx) => (
                  <input
                    key={oIdx}
                    type="text"
                    value={option}
                    onChange={(e) => updateCustomOption(idx, oIdx, e.target.value)}
                    placeholder={`Option ${oIdx + 1}`}
                    className="w-full h-10 rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base px-3 text-black placeholder-gray-400 mb-1"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addCustomOption(idx)}
                  className="mt-1 text-indigo-600 hover:underline text-sm"
                >
                  + Add Option
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addCustomQuestion}
            className="w-full mt-2 py-2 border border-indigo-200 rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 text-base font-medium"
          >
            + Add Another Question
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Form
          </button>
        </div>
      </form>

      <FeedbackModal
        isOpen={feedbackModal.isOpen}
        onClose={() => setFeedbackModal({ ...feedbackModal, isOpen: false })}
        onSubmit={handleFeedbackSubmit}
        type={feedbackModal.type}
        itemText={feedbackModal.itemText}
      />
    </div>
  );
} 