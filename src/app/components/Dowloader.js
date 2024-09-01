"use client";
import React, { useState } from 'react';

export default function DownloadServiceCard() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('');
  const [formats, setFormats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadLink(null);

    try {
      // Fetch the video information
      const response = await fetch(`/api/vixeo?url=${encodeURIComponent(url)}`, {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok) {
        // Populate the formats dynamically
        const availableFormats = data.response.formats.map(format => ({
          itag: format.itag,
          qualityLabel: format.qualityLabel,
          mimeType: format.mimeType,
        }));
        setFormats(availableFormats);
        if (availableFormats.length > 0) {
          setFormat(availableFormats[0].itag); // Set the first format as default
        }
      } else {
        setError(data.error || 'Failed to retrieve video info. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadLink(null);

    try {
      // Trigger the download
      const response = await fetch('/api/dowload', {
        method: 'POST',
        body: JSON.stringify({ url, format }),
      });

      const data = await response.json();
      if (response.ok) {
        setDownloadLink(data.downloadLink);
      } else {
        setError(data.message || 'Failed to download. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-gilroy flex items-center justify-center bg-black">
      <div className="rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700 max-w-sm w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Video & Image Downloader</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Download your favorite videos and images quickly and easily.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="text-sm font-medium"
              htmlFor="url"
            >
              Enter URL
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              id="url"
              placeholder="https://example.com/video"
              value={url}
              onChange={handleUrlChange}
              required
              type="url"
            />
          </div>
          { !formats && <button
            className={`inline-flex items-center justify-center w-full h-10 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Fetching Formats...' : 'Fetch Formats'}
          </button>}
        </form>

        {formats.length > 0 && (
          <form onSubmit={handleDownload} className="space-y-4 mt-4">
            <div>
              <label
                className="text-sm font-medium"
                htmlFor="format"
              >
                Choose Format
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                id="format"
                value={format}
                onChange={handleFormatChange}
              >
                {formats.map(f => (
                  <option key={f.itag} value={f.itag}>
                    {f.qualityLabel || f.mimeType} (itag: {f.itag})
                  </option>
                ))}
              </select>
            </div>
            <button
              className={`inline-flex items-center justify-center w-full h-10 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Downloading...' : 'Download'}
            </button>
          </form>
        )}

        {error && (
          <div className="text-red-500 text-sm mt-4">
            {error}
          </div>
        )}

        {downloadLink && (
          <div className="mt-4">
            <a
              href={downloadLink}
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download your file
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
