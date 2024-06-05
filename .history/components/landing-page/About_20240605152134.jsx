import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Album Management",
    description:
      "Easily create, edit, and organize your photo albums. Keep your memories well-arranged and accessible.",
    image: "https://placehold.co/1024x480",
  },
  {
    title: "User Profiles",
    description:
      "Manage user profiles with ease. View and edit user details, and keep track of user activities.",
    image: "https://placehold.co/1024x480",
  },
  {
    title: "AI-Powered Photo Insights",
    description:
      "Leverage AI to gain insights into your photos. Automatically categorize and tag photos for easy retrieval.",
    image: "https://placehold.co/1024x480",
  },
];

const featureList = [
  "Dark/Light Theme",
  "User Reviews",
  "Advanced Search",
  "Responsive Design",
  "Secure Authentication",
  "Team Collaboration",
  "Real-time Updates",
  "Newsletter Integration",
  "Minimalist Design",
];

export const About = () => {
  return (
    <section id="features" className="container py-4 sm:py-6 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
       
        What makes {""}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          it Intresting?
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;