clear

DEFAULT_VERSION="1.0.0-SNAPSHOT"
read -p "Enter version: [$DEFAULT_VERSION] " VERSION
VERSION="${VERSION:-$DEFAULT_VERSION}"

mvn versions:set -DnewVersion=$VERSION

echo Creating distributable front-end....
cd src/client
ng build --env=prod

echo Build executable Spring Boot jar file
cd ../..
mvn package

heroku deploy:jar target/boodschappenlijstje-$VERSION.jar --app boodschappen-lijstje --server.port=8082
