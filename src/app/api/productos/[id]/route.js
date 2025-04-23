import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const result = await conn.query("SELECT * FROM Productos WHERE ID = ?", [
      id,
    ]);

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "El producto no fue encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result[0]);
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

export async function PUT(request, { params }) {
  const { id } = await params;
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE Productos SET ? WHERE ID = ?", [
      data,
      id,
    ]);

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "Producto no existe",
        },
        {
          status: 404,
        }
      );
    }

    const updatedProduct = await conn.query(
      "SELECT * FROM Productos WHERE ID = ?",
      [id]
    );
    return NextResponse.json(updatedProduct[0]);
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

export async function DELETE(request, { params }) {
    const {id} = await params;
  try {
    const result = await conn.query("DELETE FROM Productos WHERE ID = ?", [id,]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return new Response(null, { status: 204 });
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
