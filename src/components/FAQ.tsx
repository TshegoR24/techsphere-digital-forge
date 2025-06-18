import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: [
      "Browse our course catalog and select a course.",
      "Click 'Start Learning Free' or 'View Course'.",
      "Sign up or log in to access course materials.",
    ],
  },
  {
    question: "Are there any free courses?",
    answer: [
      "Yes, many beginner courses are free to start.",
      "Look for the 'Free' tab in the course showcase.",
    ],
  },
  {
    question: "How can I become an instructor?",
    answer: [
      "Click 'Start Teaching' in the Instructors section.",
      "Submit your profile and expertise for review.",
      "Get approved and publish your first course.",
    ],
  },
  {
    question: "What support is available for students?",
    answer: [
      "Access to community forums and Q&A.",
      "Direct messaging with instructors.",
      "Responsive email support.",
    ],
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-gray-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked <span className="text-primary">Questions</span></h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl shadow-md">
            <AccordionTrigger className="text-lg font-semibold px-6 py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {faq.answer.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ; 