import prisma from "./prismaClient";

export default async function getAllTamu() {
  try {
    const queryOutput = await prisma.tamu.findMany({
      include: {
        Pendidikan: true,
        Pekerjaan: true,
        Instansi: true,
        PemanfaatanData: true,
        Layanan: true,
        Fasilitas: true,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
}
