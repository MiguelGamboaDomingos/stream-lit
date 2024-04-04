export const fetchLocalMedia = () => {
  const audioFiles = require.context('../../public/media/audio', false, /\.(mp3)$/);
  const videoFiles = require.context('../../public/media/video', false, /\.(mp4)$/);

  const getMediaInfo = (context, type) => {
    return context.keys().map((key) => {
      const file = context(key).default;
      return {
        src: file,
        name: key.split('/').pop(),
        type: type,
        duration: 0, // Defina a duração do arquivo aqui
        cover: `../public/media/${type}/${key.split('/').pop().replace(/\.[^/.]+$/, '')}.jpg` // Pegue a capa do arquivo
      };
    });
  };

  return { audioFiles: getMediaInfo(audioFiles, 'audio'), videoFiles: getMediaInfo(videoFiles, 'video') };
};