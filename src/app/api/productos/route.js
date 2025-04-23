import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM Productos");
  return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    )
  }
}

export async function POST(reques) {
  try {
    const { NombreProducto, Descripcion, Precio, Categoria } =
      await reques.json();
    const result = await conn.query("INSERT INTO Productos SET ?", {
      NombreProducto,
      Descripcion,
      Precio,
      Categoria,
    });
    return NextResponse.json({
      NombreProducto,
      Descripcion,
      Precio,
      Categoria,
      ID: result.insertId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
