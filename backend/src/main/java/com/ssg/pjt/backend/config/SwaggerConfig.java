package com.ssg.pjt.backend.config;

import static com.google.common.collect.Lists.newArrayList;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger.web.UiConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/* 스웨거 링크 : http://localhost:8080/swagger-ui.html */
@Configuration
@EnableSwagger2
public class SwaggerConfig extends WebMvcConfigurationSupport {

  private String version = "V1";
  private String title = "SSG PJT API " + version;

  @Override
  protected void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("swagger-ui.html")
        .addResourceLocations("classpath:/META-INF/resources/");
    registry.addResourceHandler("/webjars/**")
        .addResourceLocations("classpath:/META-INF/resources/webjars/");
  }

  @Bean
  public Docket api() {
    return new Docket(DocumentationType.SWAGGER_2)
        .useDefaultResponseMessages(false)
        .apiInfo(apiInfo())
        .select()
        .apis(RequestHandlerSelectors.any())
        .apis(RequestHandlerSelectors.basePackage("com.ssg.pjt.backend.api.controller"))
        .build();
  }

  private ApiInfo apiInfo() {
    return new ApiInfoBuilder().
        title("SSG PJT Swagger")
        .version("V1")
        .description("신세계I&C 스웨거")
        .build();

  }

  @Bean
  UiConfiguration uiConfig() {
    return UiConfigurationBuilder.builder()
        .build();
  }
}
