clear

echo Starting Postgres database (by Docker)
docker run -d -p 5432:5432 aalten/emera-postgres:0.8

echo Creating distributable front-end....
cd src/client
ng build --env=prod

echo Build executable Spring Boot jar file
cd ../..
mvn package

echo Create installable
DEFAULT_VERSION="1.0.0-SNAPSHOT"
read -p "Enter version: [$DEFAULT_VERSION] " VERSION
VERSION="${VERSION:-$DEFAULT_VERSION}"


current_time=$(date "+%Y.%m.%d-%H.%M.%S")

echo $current_time

echo Run Spring boot application

java -jar target/boodschappenlijstje-$VERSION.jar --propertiesPath="/Users/Aalten/Documents/Workspace/boodschappenlijstje/src/main/resources"
