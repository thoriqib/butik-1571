import RekapPenilaian from "@/app/components/RekapPenilaian";
import prisma from "@/app/utils/prismaClient";

export default async function RekapPenilaianPage() {
  const penilaian = await prisma.penilaian.findMany();

  const count = await prisma.penilaian.groupBy({
    by: ["skor"],
    _count: {
      id: true,
    },
  });

  return <RekapPenilaian penilaian={penilaian} count={count} />;
}
