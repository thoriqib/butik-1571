// import Cookies from "cookies";
// import clientPromise from "../../lib/mongodb";
// const { createHash } = require("node:crypto");
import prisma from "@/app/utils/prismaClient";
import { NextResponse } from "next/server";

export const POST = async (request, res) => {
  const body = await request.json();
  const db = await prisma.user.findUnique({
    where: {
      username: body.username,
    },
  });
  return NextResponse.json(body);
  //   if (db.length == 0) {
  //     res.redirect("/login?msg=Incorrect username or password");
  //     return;
  //   }
  //   const user = users[0];
  //   const guess_hash = createHash("sha256").update(guess).digest("hex");
  //   if (guess_hash == user.Password) {
  //     const cookies = new Cookies(req, res);
  //     cookies.set("username", username);
  //     res.redirect("/");
  //   } else {
  //     res.redirect("/login?msg=Incorrect username or password");
  //   }
};
