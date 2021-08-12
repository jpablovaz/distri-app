version=`cat /Users/juanvazquez/Dev/Distribuidora/distri/version/app_version.txt`
a=$(echo $version| cut -d'.' -f 1)
b=$(echo $version| cut -d'.' -f 2)
c=$(echo $version| cut -d'.' -f 3)
version=$a.$b.$(($c+1))
echo $version > /Users/juanvazquez/Dev/Distribuidora/distri/version/app_version.txt

docker build -t jpv/ultimate .
docker run -v /Users/juanvazquez/Dev/Distribuidora/distri-app:/home/app jpv/ultimate
rm /Users/juanvazquez/Dev/Distribuidora/distri/app/*
split -b 20m dist/Distribuidora-Mendoza-2.0.0.AppImage app.
mv app.*  /Users/juanvazquez/Dev/Distribuidora/distri/app/
