import client from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {image, description} = body

    return NextResponse.json('');
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
