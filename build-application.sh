clear

echo Create installable
DEFAULT_VERSION="1.0.0-SNAPSHOT"
read -p "Enter version: [$DEFAULT_VERSION] " VERSION
VERSION="${VERSION:-$DEFAULT_VERSION}"

directory=$(date "+%Y%m%d-%H%M%S")
mkdir $directory

cp src/main/resources/product*.* $directory
cp target/boodschappenlijstje-$VERSION.jar $directory
zip_name=boodschappenlijstje-$VERSION-$directory.zip
zip -r boodschappenlijstje-versions/$zip_name $directory
rm -rf $directory
echo Created file $zip_name
