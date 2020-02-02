clear
CURRENT_APP_VERSION=$(mvn -q \
    -Dexec.executable=echo \
    -Dexec.args='${project.version}' \
    --non-recursive \
    exec:exec)

DEFAULT_DOCKER_CONTAINER_POSTGRES_VERSION=0.1
read -p "Find the correct version for the Postgres docker container (aalten/emera-postgres:$DEFAULT_DOCKER_CONTAINER_POSTGRES_VERSION) " VERSION
DOCKER_VERSION="${VERSION:-$DEFAULT_DOCKER_CONTAINER_POSTGRES_VERSION}"

echo Starting Postgres database - by Docker
docker run -d -p 5432:5432 aalten/emera-postgres:$DOCKER_VERSION

echo Creating distributable front-end....
cd src/client
ng build --env=prod

echo Build executable Spring Boot jar file
cd ../..
mvn package

#echo Create installable
#DEFAULT_VERSION="1.0.0-SNAPSHOT"
#read -p "Enter version: [$DEFAULT_VERSION] " VERSION
#VERSION="${VERSION:-$DEFAULT_VERSION}"


current_time=$(date "+%Y.%m.%d-%H.%M.%S")

echo $current_time

echo Run Spring boot application

java -jar target/boodschappenlijstje-$CURRENT_APP_VERSION.jar --propertiesPath="/Users/Aalten/Documents/Workspace/boodschappenlijstje/src/main/resources"
