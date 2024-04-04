// metadataExtractor.js
import mm from 'music-metadata';
import ffmpeg from 'fluent-ffmpeg';

// Função para extrair metadados de um arquivo de áudio
const extractAudioMetadata = async (audioFile) => {
  try {
    const metadata = await mm.parseFile(process.env.PUBLIC_URL + `/media/audio/${audioFile}`);
    const { title, duration, artist } = metadata.common;

    return {
      name: title || audioFile,
      duration: duration || 0,
      author: artist || "Artista Desconhecido",
      cover: `${process.env.PUBLIC_URL}/placeholder-audio-cover.jpg`
    };
  } catch (error) {
    console.error('Erro ao extrair metadados do arquivo de áudio:', error);
    return null;
  }
};

// Função para extrair metadados de um arquivo de vídeo
const extractVideoMetadata = async (videoFile) => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(process.env.PUBLIC_URL + `/media/video/${videoFile}`, (err, metadata) => {
      if (err) {
        console.error('Erro ao extrair metadados do arquivo de vídeo:', err);
        reject(err);
        return;
      }

      const { duration } = metadata.format;
      resolve({
        name: videoFile,
        duration: duration || 0,
        author: metadata.format.tags.artist || "Autor Desconhecido",
        cover: `${process.env.PUBLIC_URL}/placeholder-video-cover.jpg`
      });
    });
  });
};

export { extractAudioMetadata, extractVideoMetadata };