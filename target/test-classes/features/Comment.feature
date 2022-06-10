@Smoke1
Feature:  Login functionality
Background:
	Given User is on Youtube login page

@GoodLoginScenario
Scenario Outline: 1 User should be able to login with valid credentials 
	When User enters username as "<username>"
	When User enters password as "Tableman1!!ok!5"
	Then User goes to video
	Then leaves comment on video
	Then teardown as 30
	Then waitss
Examples:
|username|
|johnyfable|
|skimbo597|
