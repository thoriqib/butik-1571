import { PrismaClient } from "@prisma/client";
import { fakerID_ID as faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) {
    await prisma.penilaian.create({
      data: {
        skor: faker.number.int({ min: 1, max: 2 }),
        saran: faker.lorem.paragraph(),
        createdAt: faker.date.past({
          years: 2,
          refDate: "2023-10-13T00:00:00.000Z",
        }),
      },
    });
  }
  for (let i = 0; i < 100; i++) {
    await prisma.tamu.create({
      data: {
        nama: faker.person.fullName(),
        tahunlahir: faker.number.int({ min: 1970, max: 2005 }),
        email: faker.internet.email(),
        nohp: faker.phone.number(),
        jk: faker.helpers.arrayElement(["PRIA", "WANITA"]),
        pt: faker.number.int({ min: 1, max: 5 }),
        pu: faker.number.int({ min: 1, max: 7 }),
        namains: faker.company.name(),
        ki: faker.number.int({ min: 1, max: 9 }),
        dd: faker.number.int({ min: 1, max: 7 }),
        jl: faker.number.int({ min: 1, max: 5 }),
        fk: faker.number.int({ min: 1, max: 6 }),
        kebutuhan: faker.lorem.paragraph(),
        surat: "",
        createdAt: faker.date.past({
          years: 2,
          refDate: "2023-10-13T00:00:00.000Z",
        }),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
