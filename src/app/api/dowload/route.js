
// import { YtDlpServices } from "@/app/services/YtDlp";
// import { NextResponse } from "next/server";


// export async function POST(req) {
//   const { url, format } = await req.json();

//   if (!url) {
//     return NextResponse.json({ error: 'URL is required' }, { status: 400 });
//   }

//   if (!format) {
//     return NextResponse.json({ error: 'Format is required' }, { status: 400 });
//   }

//   try {
//     // Fetch video info and URL for the specified format
//     const { videoUrl, error } = await YtDlpServices(url, format);

//     if (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     if (!videoUrl) {
//       return NextResponse.json({ error: 'Format URL not found' }, { status: 404 });
//     }

//     const videoResponse = await fetch(videoUrl);

//     if (!videoResponse.ok) {
//       return NextResponse.json({ error: 'Failed to fetch video content' }, { status: 500 });
//     }

//     // Create a new response with the video content and set appropriate headers
//     return new Response(videoResponse.body, {
//       headers: {
//         'Content-Type': videoResponse.headers.get('Content-Type') || 'application/octet-stream',
//         'Content-Disposition': 'attachment; filename="downloaded_video.mp4"',
//       },
//     });

//   } catch (error) {
//     console.error('Error during download:', error);
//     return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
//   }
// }

// export const config = {
//     api: {
//       bodyParser: true,
//     },
//   }
import { YtDlpServices } from "@/app/services/YtDlp";
import { NextResponse } from "next/server";
import fetch from 'node-fetch';
import ytdl from "ytdl-core";

export async function POST(req) {
  const { url, format } = await req.json();

  
  if (!url) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  if (!format) {
    return NextResponse.json({ error: 'Quality is required' }, { status: 400 });
  }

  try {
    // Get video info from YouTube
    const info = await ytdl.getInfo(url);

    // Select the video format and quality
    const qua = ytdl.chooseFormat(info.formats, { quality: format });

    if (!qua) {
      return NextResponse.json({ error: 'Format not found' }, { status: 404 });
    }

    // Create a readable stream for the video file
    const videoStream = ytdl.downloadFromInfo(info, { qua });
const response = new Response(videoStream, {
    headers: {
      'Content-Type': qua?.mimeType || 'video/mp4',
      'Content-Disposition': `attachment; filename="${info?.videoDetails?.title}.${qua?.container || 'mp4'}"`,
    },
  })

    return  response;
  } catch (error) {
    console.error('Error during download:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
