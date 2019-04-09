var thumbnailGenerator = require('hls-live-thumbnails');

var opt = {
        //secret: "super-secret",
        interval: 10,
        initialThumbnailCount: 1,
        endless: true,
        clearOutputDir: true,
        playlistUrl: "https://mdstrm.com/live-stream-playlist/5988625542916c5029
e26e36.m3u8",
        outputNamePrefix : 100,
        outputDir: "./output",
        tempDir: "./temp"
};

generator = new thumbnailGenerator.ThumbnailGenerator(opt);
