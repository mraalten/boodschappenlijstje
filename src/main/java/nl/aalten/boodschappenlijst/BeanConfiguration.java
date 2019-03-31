package nl.aalten.boodschappenlijst;

import javax.sql.DataSource;

import org.postgresql.ds.PGSimpleDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

@Configuration
public class BeanConfiguration {

    @Bean
    public DataSource dataSource(
            @Value("${spring.datasource.url}") String dataSourceUrl,
            @Value("${spring.datasource.username}") String dataSourceUserName,
            @Value("${spring.datasource.password}") String dataSourcePassword
    ) {
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.type(PGSimpleDataSource.class);
        dataSourceBuilder.url(dataSourceUrl);
        dataSourceBuilder.username(dataSourceUserName);
        dataSourceBuilder.password(dataSourcePassword);
        return dataSourceBuilder.build();
    }

    @Bean
    public NamedParameterJdbcOperations jdbcResource(DataSource dataSource) {
        return new NamedParameterJdbcTemplate(dataSource);
    }

}
