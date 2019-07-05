clear

DEFAULT_VERSION="1.0.10-SNAPSHOT"
read -p "Enter version: [$DEFAULT_VERSION] " VERSION
VERSION="${VERSION:-$DEFAULT_VERSION}"

mvn versions:set -DnewVersion=$VERSION

echo Creating distributable front-end....
cd src/client
ng build --env=prod

echo Build executable Spring Boot jar file
cd ../..
mvn package

cp target/boodschappenlijstje-$VERSION.jar boodschappenlijstje-versions
mv target/boodschappenlijstje-$VERSION.jar target/boodschappenlijstje.jar

heroku deploy:jar target/boodschappenlijstje.jar --app boodschappen-lijstje
