clear
mvn clean
clear

echo Starting release and deploy....one moment please...

CURRENT_VERSION=$(mvn -q \
    -Dexec.executable=echo \
    -Dexec.args='${project.version}' \
    --non-recursive \
    exec:exec)

read -p "Enter version: [$CURRENT_VERSION] " VERSION
VERSION="${VERSION:-$DEFAULT_VERSION}"

mvn versions:set -DnewVersion=$VERSION

echo Creating distributable front-end....
cd src/client
ng build --env=prod

echo Build executable Spring Boot jar file
cd ../..
mvn package

#cp target/boodschappenlijstje-$VERSION.jar boodschappenlijstje-versions
mv target/boodschappenlijstje-$VERSION.jar target/boodschappenlijstje.jar
rm target/boodschappenlijstje-$VERSION.jar

# heroku deploy:jar niet meer ondersteund. Nu via maven plugin
#heroku deploy:jar target/boodschappenlijstje.jar --app boodschappen-lijstje

mvn heroku:deploy
