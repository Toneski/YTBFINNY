$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginfromDB.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@GoodLoginScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"\u003cvid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "leaves comment on video as \"\u003ccomment\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "vid",
        "comment"
      ],
      "line": 14,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "johnyfable",
        "Tableman1!!ok!5",
        "https://youtu.be/VwWU6CZ5lJE",
        "Great matches yall! Wanna see more"
      ],
      "line": 15,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7565756800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Youtube login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsDefinitions.user_is_on_Youtube_login_page()"
});
formatter.result({
  "duration": 13379840500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@GoodLoginScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"johnyfable\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"Tableman1!!ok!5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/VwWU6CZ5lJE\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "leaves comment on video as \"Great matches yall! Wanna see more\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "johnyfable",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinitions.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3334833700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tableman1!!ok!5",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinitions.user_enters_password(String)"
});
formatter.result({
  "duration": 3292857200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/VwWU6CZ5lJE",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "duration": 4594534300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Great matches yall! Wanna see more",
      "offset": 28
    }
  ],
  "location": "LoginStepsDefinitions.leaves_comment_on_video_as(String)"
});
formatter.result({
  "duration": 10747419500,
  "status": "passed"
});
});