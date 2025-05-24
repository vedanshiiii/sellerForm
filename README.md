# SellerForm: Customize Your Product Enquiry Experience

A full-stack web application that allows sellers to customize and provide feedback on buyer enquiry forms. The application is built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔗 Public shareable form pages with unique URLs
- 🎯 Category-based question selection
- 🧠 Feedback system for questions and options
- ✍️ Custom question creation
- 💾 Local storage for form data
- 📱 Mobile-responsive design
- ✅ Modern UI with smooth UX

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sellerform.git
   cd sellerform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── form/
│   │   └── [productId]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── FeedbackModal.tsx
│   └── SellerForm.tsx
└── types/
    └── index.ts
```

## Usage

1. Access the form at `/form/:productId` where `:productId` is your unique product identifier
2. Select a category to load relevant questions
3. Provide feedback on questions and options using the ❌ button
4. Add custom questions using the "Add Question" button
5. Save your form using the "Save Form" button

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
