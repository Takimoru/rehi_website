import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Static content for AboutCard.
// This is okay if the content is only used here.
const aboutContent = {
  visionTitle: "Visi",
  visionDescription:
    "Menjadi perusahaan terkemuka dalam industri manufaktur yang mengutamakan inovasi, kualitas, dan keberlanjutan untuk memberikan solusi terbaik bagi pelanggan kami.",
  missionTitle: "Misi",
  missionDescription: `1. Menyediakan produk berkualitas tinggi yang memenuhi kebutuhan pelanggan dengan inovasi berkelanjutan.
2. Membangun hubungan jangka panjang dengan pelanggan melalui layanan yang unggul dan dukungan purna jual yang handal.
3. Menerapkan praktik bisnis yang berkelanjutan untuk menjaga lingkungan dan memberikan dampak positif bagi masyarakat.
4. Mendorong pengembangan karyawan melalui pelatihan dan kesempatan pertumbuhan untuk menciptakan tim yang kompeten dan termotivasi.`,
};

export function AboutCard() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{aboutContent.visionTitle}</CardTitle>
        <CardDescription>{aboutContent.visionDescription}</CardDescription>
      </CardHeader>

      <CardContent>
        <h3 className="text-lg font-semibold">
          {aboutContent.missionTitle}
        </h3>

        <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
          {aboutContent.missionDescription}
        </p>
      </CardContent>
    </Card>
  );
}
