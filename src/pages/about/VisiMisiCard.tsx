import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Static content for AboutCard.
// This is okay if the content is only used here.
const aboutVisiContent = {
  visionTitle: "Our Vision",
  visionDescription:
    "To become Indonesia’s leading global partner in the rattan industry by connecting local craftsmanship, sustainable production, and world-class quality to international markets.",
};

const aboutMisiContent = {
  missionTitle: "Our Mission",
  missionDescription: 
  [
    "1. Deliver End-to-End Rattan Solutions",
    "Providing complete rattan solutions, from semi-finished materials to fully finished products, tailored to meet diverse global market needs.",

    "2. Empower Local Artisan Communities",
    "Collaborating with skilled artisan partners across Indonesia to create sustainable opportunities while preserving the country’s rich craftsmanship heritage.",

    "3. Maintain International Quality Standards",  
    "Ensuring every product is produced with strict quality control, consistency, and professionalism aligned with international market expectations.",

    "4. Build Reliable Global Partnerships",
    "Creating long-term relationships with buyers, distributors, and business partners through trust, transparency, and dependable service.",

    "5. Promote Sustainable Indonesian Craftsmanship",
    "Supporting responsible production practices while showcasing the beauty and value of Indonesian natural materials to the world.**"
  ] 
}

export function AboutVisiCard() {
  return (  
    <Card className="w-full max-w-3xl bg-primary">
      <CardHeader>
        <CardTitle className="text-primary-foreground">{
          aboutVisiContent.visionTitle
        }</CardTitle>
      </CardHeader>
      <CardContent className="text-primary-foreground">
        <p className="mt-2 whitespace-pre-line text-sm text-primary-foreground">
          {aboutVisiContent.visionDescription}
        </p>
      </CardContent>
    </Card>
  );
}

export function AboutMisiCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{aboutMisiContent.missionTitle}</CardTitle> 
      </CardHeader>
      <CardContent className="mt-2 whitespace-pre-line text-sm text-primary">
        <ul className="list-none space-y-4 pl-2">
          {aboutMisiContent.missionDescription.map((item) => (
            <li key={item} className="before:mr-2 before:content-['-'] grid grid-cols-[auto_1fr] gap-x-2 ">
              {item}
              </li>
          ))}
          </ul>
        
      </CardContent>
    </Card>
  );
}
