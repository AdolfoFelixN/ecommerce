import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request){
    const result = await conn.query("SELECT NOW()");
    return NextResponse.json(result[0])
}