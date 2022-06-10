$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginfromDB2.feature");
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
  "name": "teardown as \u003c1\u003e",
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
        "1"
      ],
      "line": 14,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "johnyfable",
        "Tableman1!!ok!5",
        "https://youtu.be/pN8LTZljvpU",
        "32"
      ],
      "line": 15,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "johnyfable",
        "Tableman1!!ok!5",
        "https://youtu.be/pN8LTZljvpU",
        "32"
      ],
      "line": 16,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "johnyfable",
        "Tableman1!!ok!5",
        "https://youtu.be/pN8LTZljvpU",
        "32"
      ],
      "line": 17,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6775686100,
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
  "duration": 12067356000,
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "teardown as 32",
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
  "duration": 3699481200,
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
  "duration": 3290291300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/pN8LTZljvpU",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "duration": 7743343000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
formatter.result({
  "duration": 36877006500,
  "status": "passed"
});
formatter.before({
  "duration": 4058312400,
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
  "duration": 11750596400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;3",
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "teardown as 32",
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
  "duration": 3315123800,
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
  "duration": 3334324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/pN8LTZljvpU",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "duration": 8332746800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
formatter.result({
  "duration": 36914646200,
  "status": "passed"
});
formatter.before({
  "duration": 4059795700,
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
  "duration": 11434848200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;4",
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "teardown as 32",
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
  "duration": 3431279300,
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
  "duration": 3343773900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/pN8LTZljvpU",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "duration": 6889959100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
