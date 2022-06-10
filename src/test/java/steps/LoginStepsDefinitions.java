package steps;

import java.io.IOException;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.TestBase;

public class LoginStepsDefinitions extends TestBase {
 String comment;
	@Before
	public void define() {
		driver = initDriver();
	}

	@Given("^User is on Youtube login page$")
	public void user_is_on_Youtube_login_page() throws InterruptedException {

		driver.get("https://www.youtube.com/");

		clickByXpath("/html/body/ytd-app/div[1]/div/ytd-masthead/div[3]/div[3]/div[2]/ytd-button-renderer/a/tp-yt-paper-button");
		Thread.sleep(3000);
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws InterruptedException, IOException {
		sendByXpath("//input[@id='identifierId']", username);
		clickByXpath("//span[text()='Next']/parent::*");
		comment = readConfig(username);
		Thread.sleep(3000);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password(String password) throws InterruptedException {
		sendByXpath("//input[@type='password']", password);
		clickByXpath("//span[text()='Next']/parent::*");

		Thread.sleep(3000);
	}

	@Then("^User goes to video as \"([^\"]*)\"$")
	public void user_goes_to_video_as(String vid) throws Throwable {

		
		gotov(vid);
Thread.sleep(4000);

		


	}
	
	@Then("^Likes the video$")
	public void likes_the_video() throws Throwable {
		Thread.sleep(6000);
		clickByXpath("//div[@id='info']//ytd-toggle-button-renderer[1]//a[1]//yt-icon-button[1]//button[1]//yt-icon[1]\r\n");
	}
	
	@Then("^leaves comment on video")
	public void leaves_comment_on_video(String a) throws Throwable {
		//*[@id="contenteditable-textarea"]
		//"//*[@id='simplebox-placeholder']"
		Thread.sleep(5000);
		clickByXpath("\"//*[@id='contenteditable-root']");
		Thread.sleep(5000);

		sendByXpath("//*[@id='contenteditable-root']",comment);
		Thread.sleep(6000);

		clickByXpath("/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[5]/ytd-comment-simplebox-renderer/div[3]/ytd-comment-dialog-renderer/ytd-commentbox/div[2]/div/div[4]/div[5]/ytd-button-renderer[2]/a/tp-yt-paper-button");
		//*[@id="button"]
	}
	@Then("^teardown as (\\d+)$")
	public void teardown_as(int time) throws Throwable {
		int a = 1000 * time;
		
		Thread.sleep(a);
		TearDown();
	}

//	@After
//	public void teardown() throws InterruptedException {
//		Thread.sleep(32000);
//		TearDown();
//	}
}
