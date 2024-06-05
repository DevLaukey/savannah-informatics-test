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
      "An organized  photo album. All in one collection. Easy to manage and share.",
    image: "./album.png",
  },
  {
    title: "User management",
    description: "Enabled User Authentication and Access",
    image: "./auth.png",
  },
  {
    title: "Filtered Results",
    description:
      "Search for album. Find what you're looking for quickly and easily.",
    image: "./search.png",
  },
];

const featureList = [
  "Dark/Light Theme",
  "Advanced Search",
  "Responsive Design",
  "Secure Authentication",
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
