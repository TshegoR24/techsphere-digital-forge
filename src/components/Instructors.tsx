import { Button } from "@/components/ui/button";
import { UserPlus, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Earn income sharing your expertise",
  "Flexible teaching schedule",
  "Access to a vibrant tech community",
  "Grow your personal brand and network",
];

const steps = [
  "Apply online with your profile & expertise",
  "Get approved by our team",
  "Publish your first course & start teaching!",
];

const Instructors = () => (
  <section id="instructors" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-2">
            <UserPlus className="h-8 w-8 text-primary" />
            Become an <span className="text-primary">Instructor</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Share your tech knowledge, inspire learners, and earn income on your terms. Join our growing community of top-rated instructors!
          </p>
          <ul className="mb-8 space-y-2">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-base">
                <CheckCircle className="h-5 w-5 text-green-500" /> {b}
              </li>
            ))}
          </ul>
          <Button size="lg" className="rounded-full px-8 py-4 text-lg flex items-center gap-2">
            Start Teaching <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">How to Get Started</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {steps.map((step, i) => (
                <li key={i} className="pl-1">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Instructors; 