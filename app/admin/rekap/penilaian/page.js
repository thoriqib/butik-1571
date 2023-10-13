import PenilaianTable from "@/app/components/PenilaianTable";
import Sad from "@/app/components/emoticon/Sad";
import Smile from "@/app/components/emoticon/Smile";
import prisma from "@/app/utils/prismaClient";

export default async function RekapPenilaian() {
  let data = [];
  const penilaian = await prisma.penilaian.findMany();
  penilaian.map((p, i) => {
    let obj = {};
    obj.no = i + 1;
    obj.penilaian = p.skor == 2 ? "Puas" : "Tidak Puas";
    obj.saran = p.saran;
    obj.tanggal = `${p.createdAt.getDate()}-${p.createdAt.getMonth()}-${p.createdAt.getFullYear()}`;

    data.push(obj);
  });

  const count = await prisma.penilaian.groupBy({
    by: ["skor"],
    _count: {
      id: true,
    },
  });

  return (
    <div className="flex items-center justify-center flex-col m-4 w-full h-full">
      <h1 className="text-2xl font-bold"> Rekap Penilaian </h1>
      <div className="flex items-center justify-center">
        <div className="stats shadow m-4">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <Sad width="48px" height="48px" color="red" />
            </div>
            <div className="stat-title">Tidak Puas</div>
            <div className="stat-value">{count[0]._count.id}</div>
            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <Smile width="48px" height="48px" color="green" />
            </div>
            <div className="stat-title">Puas</div>
            <div className="stat-value">{count[1]._count.id}</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
          </div>
        </div>
      </div>
      <div className="card w-11/12 bg-base-100 shadow-xl rounded-lg mt-8 mb-20 mx-4">
        <div className="card-body">
          <PenilaianTable data={data} />
        </div>
      </div>
    </div>
  );
}
