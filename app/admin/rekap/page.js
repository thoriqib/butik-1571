import RekapTamu from "@/app/components/RekapTamu";
import prisma from "@/app/utils/prismaClient";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const startOfMonth = new Date(year, month - 1, 1);
const endOfMonth = new Date(year, month, 0);
const startOfYear = new Date(year, 0, 1);
const endOfYear = new Date(year, 11, 31);

const countTamuYear = await prisma.tamu.aggregate({
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

const countTamuMonth = await prisma.tamu.aggregate({
  where: {
    createdAt: {
      gte: startOfMonth,
      lte: endOfMonth,
    },
  },
  _count: {
    id: true,
  },
});



export default async function Rekap() {
  const jkTamu = await prisma.tamu.groupBy({
    by: ["jk"],
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

  const ptTamu = await prisma.tamu.groupBy({
    by: ["pt"],
    where: {
      createdAt: {
        gte: startOfYear,
        lte: endOfYear,
      },
    },
    _count: {
      id: true,
    },
    orderBy: {
      pt: "asc",
    },
  });
  const puTamu = await prisma.tamu.groupBy({
    by: ["pu"],
    where: {
      createdAt: {
        gte: startOfYear,
        lte: endOfYear,
      },
    },
    _count: {
      id: true,
    },
    orderBy: {
      pu: "asc",
    },
  });

  const countTamu = [countTamuYear, countTamuMonth];
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
