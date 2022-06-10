@Smoke
Feature:  Login functionality
Background:
	Given User is on Youtube login page

@GoodLoginScenario
Scenario Outline: 1 User should be able to login with valid credentials 
	When User enters username as "<username>"
	When User enters password as "<password>"
	Then User goes to video as "<vid>"
	Then teardown as <1>

Examples:
|username|password|vid|1|
|johnyfable|Tableman1!!ok!5|https://youtu.be/pN8LTZljvpU|32|
|johnyfable|Tableman1!!ok!5|https://youtu.be/pN8LTZljvpU|32|
|johnyfable|Tableman1!!ok!5|https://youtu.be/pN8LTZljvpU|32|
