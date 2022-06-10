@Smoke2
Feature:  Login functionality
Background:
	Given User is on Youtube login page

@GoodLoginScenario
Scenario Outline: 1 User should be able to login with valid credentials 
	When User enters username as "<username>"
	When User enters password as "Tableman1!!ok!5"
Then User goes to video as "https://youtu.be/pN8LTZljvpU"

Then teardown as 30
Examples:
|username|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|
|johnyfable|
|skimbo597|