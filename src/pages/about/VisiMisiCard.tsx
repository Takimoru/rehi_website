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
    "To be the most trusted and reliable partner for global furniture procurement, recognized for uncompromising quality and seamless export operations.",
};

const aboutMisiContent = {
  missionTitle: "Our Mission",
  missionDescription: 
  [
    "Menyediakan produk berkualitas tinggi yang memenuhi kebutuhan pelanggan dengan inovasi berkelanjutan.",
    "Membangun hubungan jangka panjang dengan pelanggan melalui layanan yang unggul dan dukungan purna jual yang handal.",
    "Menerapkan praktik bisnis yang berkelanjutan untuk menjaga lingkungan dan memberikan dampak positif bagi masyarakat.",
    "Mendorong pengembangan karyawan melalui pelatihan dan kesempatan pertumbuhan untuk menciptakan tim yang kompeten dan termotivasi."
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
