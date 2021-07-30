# docker build -t jpv/ultimate .
docker run -v /Users/juanvazquez/Dev/Distribuidora/distri-app:/home/app jpv/ultimate
rm /Users/juanvazquez/Dev/Distribuidora/distri/app/*
echo "waiting...."
split -b 20m dist/Distribuidora-Mendoza-2.0.0.AppImage app.
mv app.*  /Users/juanvazquez/Dev/Distribuidora/distri/app/
