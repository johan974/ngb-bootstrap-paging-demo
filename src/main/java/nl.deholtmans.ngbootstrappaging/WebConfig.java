package nl.deholtmans.ngbootstrappaging;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
        /* !!! @EnableWebMvc --- NIET DOEN ... dan krijg je in veel gevallen 404 op index.html !!! */
class WebConfig extends WebMvcConfigurerAdapter {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}
