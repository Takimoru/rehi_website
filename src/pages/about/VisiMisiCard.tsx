import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Static content for AboutCard.
// This is okay if the content is only used here.
const aboutVisiContent = {
  visionTitle: "Visi",
  visionDescription:
    "To be the most trusted and reliable partner for global furniture procurement, recognized for uncompromising quality and seamless export operations.",
};

const aboutMisiContent = {
  missionTitle: "Misi",
  missionDescription: 
  <ul>
    <li>Menyediakan produk berkualitas tinggi yang memenuhi kebutuhan pelanggan dengan inovasi berkelanjutan.</li>
    <li>Membangun hubungan jangka panjang dengan pelanggan melalui layanan yang unggul dan dukungan purna jual yang handal.</li>
    <li>Menerapkan praktik bisnis yang berkelanjutan untuk menjaga lingkungan dan memberikan dampak positif bagi masyarakat.</li>
    <li>Mendorong pengembangan karyawan melalui pelatihan dan kesempatan pertumbuhan untuk menciptakan tim yang kompeten dan termotivasi.</li>
  </ul>
}

export function AboutVisiCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{aboutVisiContent.visionTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
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
      <CardContent>
        <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
          {aboutMisiContent.missionDescription}
        </p>
      </CardContent>
    </Card>
  );
}
