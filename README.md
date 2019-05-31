## Client: Shaka by google
### 1. Build Shaka from source
(https://github.com/google/shaka-player/blob/master/docs/tutorials/welcome.md):
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