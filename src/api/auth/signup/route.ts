import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password, confirmPassword } = await req.json();

  if (!email || !password || !confirmPassword) {
    return Response.json({ message: "Lengkapi semua field!" }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return Response.json({ message: "Password tidak sama" }, { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: email,
  });

  if (exist) {
    return Response.json(
      { message: "Email ini sudah terdaftar" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  return Response.json({
    message: "Berhasil membuat akun!",
    user: {
      id: user.id,
      email: user.email,
    },
  });
}
