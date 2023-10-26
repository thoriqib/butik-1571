import RekapPenilaian from "@/app/components/RekapPenilaian";
import prisma from "@/app/utils/prismaClient";

export default async function RekapPenilaianPage() {
  const now = new Date();
  const year = now.getFullYear();
  const startOfYear = new Date(year, 0, 1);
  const endOfYear = new Date(year, 11, 31);
  const penilaian = await prisma.penilaian.findMany({
    orderBy: {
      createdAt: "desc",
    }
  });

  const count = await prisma.penilaian.groupBy({
    by: ["skor"],
    where: {
      createdAt: {
        gte: startOfYear,
        lte: endOfYear,
      },
    },
    _count: {
      id: true,
    },
  });

  return <RekapPenilaian penilaian={penilaian} count={count} />;
}
