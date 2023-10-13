import RekapTamu from "@/app/components/RekapTamu";
import prisma from "@/app/utils/prismaClient";

const countTamu = await prisma.tamu.aggregate({
  _count: {
    id: true,
  },
});

export default async function Rekap() {
  const jkTamu = await prisma.tamu.groupBy({
    by: ["jk"],
    _count: {
      id: true,
    },
  });

  const ptTamu = await prisma.tamu.groupBy({
    by: ["pt"],
    _count: {
      id: true,
    },
    orderBy: {
      pt: "asc",
    },
  });
  const puTamu = await prisma.tamu.groupBy({
    by: ["pu"],
    _count: {
      id: true,
    },
    orderBy: {
      pu: "asc",
    },
  });
  return (
    <>
      <RekapTamu
        jkTamu={jkTamu}
        ptTamu={ptTamu}
        puTamu={puTamu}
        countTamu={countTamu}
      />
    </>
  );
}
