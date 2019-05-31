## Client Side: Shaka by google 
To build (https://github.com/google/shaka-player/blob/master/docs/tutorials/welcome.md):
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
### Server Side: FFmpeg
```bash
ffmpeg -i ../test.mp4 -c:a aac -strict experimental -c:v libx264 -s 854x480 -aspect 16:9 -f hls -hls_list_size 1000000 -hls_time 2 index.m3u8
ffmpeg -i ../test.mp4 -c:a aac -strict experimental -c:v libx264 -s 640x360 -aspect 16:9 -f hls -hls_list_size 1000000 -hls_time 2 index.m3u8
ffmpeg -i ../test.mp4 -c:a aac -strict experimental -c:v libx264 -s 426x240 -aspect 16:9 -f hls -hls_list_size 1000000 -hls_time 2 index.m3u8
```