import { YtDlpServices } from "@/app/services/YtDlp";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const response = await YtDlpServices(url);
    return NextResponse.json({ msg: "Video information retrieved successfully", response });
  } catch (error) {
    console.error('Error during retrieval:', error);
    return NextResponse.json({ msg: "Some Error Occurred", error: error.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false, // No need for body parsing in a GET request
  },
};
