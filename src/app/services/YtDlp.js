import ytdl from 'ytdl-core';

export async function YtDlpServices(url, formatId = null) {
  try {
    const info = await ytdl.getInfo(url);
    if (!formatId) {
      return info;  
    }
    const format = info.formats.find(f => f.itag === parseInt(formatId));
    if (!format) {
      throw new Error('Format not found');
    }
    return { info, videoUrl: format.url };
  } catch (error) {
    console.error('Error fetching video info:', error);
    return { error: error.message };
  }
}
