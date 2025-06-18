import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Intro to Web Development",
    level: "Beginner",
    price: 0,
    type: "Free",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
    alt: "Students coding together in a web development class",
  },
  {
    id: 2,
    title: "Advanced React & TypeScript",
    level: "Advanced",
    price: 49,
    type: "Paid",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    alt: "React and TypeScript code on a laptop screen",
  },
  {
    id: 3,
    title: "Python for Data Science",
    level: "Beginner",
    price: 0,
    type: "Free",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&h=300&fit=crop",
    alt: "Data science student analyzing data on a laptop",
  },
  {
    id: 4,
    title: "Fullstack JavaScript Bootcamp",
    level: "Advanced",
    price: 99,
    type: "Paid",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=300&fit=crop",
    alt: "Fullstack JavaScript developer working on multiple monitors",
  },
];

const filterCourses = (filter: string) => {
  switch (filter) {
    case "Free":
      return courses.filter((c) => c.type === "Free");
    case "Paid":
      return courses.filter((c) => c.type === "Paid");
    case "Beginner":
      return courses.filter((c) => c.level === "Beginner");
    case "Advanced":
      return courses.filter((c) => c.level === "Advanced");
    default:
      return courses;
  }
};

const CourseShowcase = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Explore Our <span className="text-primary">Courses</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-center">
          Upskill with our curated tech courses for all levels. Start free or go advanced!
        </p>
        <Tabs defaultValue="Free" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="Free">Free</TabsTrigger>
            <TabsTrigger value="Paid">Paid</TabsTrigger>
            <TabsTrigger value="Beginner">Beginner</TabsTrigger>
            <TabsTrigger value="Advanced">Advanced</TabsTrigger>
          </TabsList>
          {["Free", "Paid", "Beginner", "Advanced"].map((tab) => (
            <TabsContent value={tab} key={tab}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filterCourses(tab).map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <img
                      src={course.image}
                      alt={course.alt}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">Level: <span className="font-medium">{course.level}</span></p>
                        <p className="text-sm text-gray-500 mb-4">{course.price === 0 ? "Free" : `$${course.price}`}</p>
                      </div>
                      <Button className="w-full mt-auto rounded-full" size="lg">
                        {course.price === 0 ? "Start Learning Free" : "View Course"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CourseShowcase; 