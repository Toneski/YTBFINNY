package runners;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)  
@CucumberOptions(
		features = "classpath:features",
		glue = "steps",
			//  tags ="@Smoke1,@Smoke2,@Smoke3",
		//tags ="@Smoke1,@Smoke3",
				tags ="@Smoke3",
		monochrome = true,
		dryRun=false,
		plugin= {
				"pretty",
				"html:target/cucumber","json:target/cucumber.json"
				
		}
		
		)
public class LoginRunner {

	
	
	
}
