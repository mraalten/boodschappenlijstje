clear

echo Creating distributable front-end....
cd src/client
ng build --env=prod

echo Build executable Spring Boot jar file
cd ../..
mvn package

echo Run Spring boot application
java -jar target/boodschappenlijstje-1.0.0-SNAPSHOT.jar --propertiesPath="/Users/Aalten/Documents/Workspace/boodschappenlijstje/src/main/resources"
