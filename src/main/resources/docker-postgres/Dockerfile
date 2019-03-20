FROM postgres

ENV POSTGRES_DB boodschappenlijstje
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres

COPY init_db.sql /docker-entrypoint-initdb.d/
#EXPOSE 5432:5432
