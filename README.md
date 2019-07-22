## Client Side: Shaka by google 
Build instructions: https://github.com/google/shaka-player/blob/master/docs/tutorials/welcome.md
```bash
# Install prerequisites 
curl https://raw.githubusercontent.com/google/shaka-player/master/build/install-linux-prereqs.sh | bash
# Get source and compile
git clone https://github.com/google/shaka-player.git
cd shaka-player
python build/all.py
# Test
./build/test.py --browsers Chrome
```
## Server Side
### Attemp 1: Generate HLS Stream using FFmpeg
```bash
ffmpeg -i ../test.mp4 -c:a aac -strict experimental -c:v libx264 -s 854x480 -aspect 16:9 -f hls -hls_list_size 1000000 -hls_time 2 index.m3u8
ffmpeg -i ../test.mp4 -c:a aac -strict experimental -c:v libx264 -s 640x360 -aspect 16:9 -f hls -hls_list_size 1000000 -hls_time 2 index.m3u8
ffmpeg -i ../test.mp4 -c:a aac -strict experimental -c:v libx264 -s 426x240 -aspect 16:9 -f hls -hls_list_size 1000000 -hls_time 2 index.m3u8
```

### Attemp 2: Generate DASH Stream using X264 and MP4BOX
Tutorial: https://bitmovin.com/mp4box-dash-content-generation-x264/
```bash
# (Re)Encode
sudo apt install x264
x264 --output intermediate.264 --fps 24 --preset slow --bitrate 2400 --vbv-maxrate 4800 --vbv-bufsize 9600 --min-keyint 48 --keyint 48 --scenecut 0 --no-scenecut --pass 1 test.mp4
# Add MP4 container
sudo apt install gpac
MP4Box -add intermediate.264 -fps 24
# Segmentation
MP4Box -dash 4000 -frag 4000 -rap -segment-name segment_ -out manifest.mpd ../out.mp4
MP4Box -dash 4000 -frag 4000 -rap -segment-name audio_segment_ -out audio.mpd ../out.mp4#audio
```

### Attemp 3: Use FFmpeg to encode and MP4BOX to segment
```bash
ffmpeg -i test.mp4 -vcodec libx264 -acodec aac -r 24 -x264-params keyint=48:scenecut=0 out.mp4
MP4Box -dash 4000 -frag 4000 -rap -segment-name segment_ -out manifest.mpd ../out.mp4
```
