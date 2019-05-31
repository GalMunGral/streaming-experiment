## Client: Shaka by google
### 1. Build Shaka from source
Install prerequisites (https://github.com/google/shaka-player/blob/master/docs/tutorials/welcome.md):
```bash
curl https://raw.githubusercontent.com/google/shaka-player/master/build/install-linux-prereqs.sh | bash
```
Get source and compile
```bash
git clone https://github.com/google/shaka-player.git
cd shaka-player
python build/all.py
```
Test
```
./build/test.py --browsers Chrome
```