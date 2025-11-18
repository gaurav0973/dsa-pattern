import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  { question: 'What is Pattern-sheet?', answer: 'Pattern-sheet is a platform designed to help you track your progress on Data Structures and Algorithms problems, specifically curated to prepare for coding interviews.' },
  { question: 'How are problems organized?', answer: 'Problems are organized into categories based on common DSA patterns and topics, following a structured path from basics to advanced concepts.' },
  { question: 'Will more company-specific questions be added?', answer: 'Yes, we plan to continuously update our problem lists and add sheets that are tailored for specific top tech companies.' },
  { question: 'Are premium questions available?', answer: 'Premium features, including exclusive questions and advanced analytics, are on our roadmap. Stay tuned for updates!' },
  { question: 'Can I submit my own problems?', answer: 'Currently, problem submission is not a feature, but we are considering community contributions for the future.' },
];

function FAQs() {
  return (
    <div className="max-w-2xl mx-auto my-12 p-4 text-center">

      <h1 className="text-4xl font-semibold mb-8">Frequently Asked Questions</h1>

      <Accordion type="single" collapsible className="w-full text-left">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
}

export default FAQs;
