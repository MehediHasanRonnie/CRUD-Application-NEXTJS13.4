import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ messege: "Topic Created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  try {
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { Response: "Colud not found data" },
      { status: 400 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ messege: "Topic deleted" }, { status: 200 });
}
