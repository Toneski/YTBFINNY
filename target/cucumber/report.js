$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Comment.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke1"
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
  "name": "User enters password as \"Tableman1!!ok!5\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/AY9eeyYiIeo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "leaves comment on video",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "teardown as 30",
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
        "username"
      ],
      "line": 14,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 15,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 16,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
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
  "status": "skipped"
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
      "name": "@Smoke1"
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
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/AY9eeyYiIeo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "leaves comment on video",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "teardown as 30",
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/AY9eeyYiIeo",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsDefinitions.leaves_comment_on_video(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
      "name": "@Smoke1"
    },
    {
      "line": 6,
      "name": "@GoodLoginScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"skimbo597\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"Tableman1!!ok!5\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/AY9eeyYiIeo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "leaves comment on video",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "teardown as 30",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "skimbo597",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinitions.user_enters_username_as(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/AY9eeyYiIeo",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsDefinitions.leaves_comment_on_video(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/Like.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke1"
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
  "name": "User enters password as \"Tableman1!!ok!5\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/AY9eeyYiIeo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Likes the video",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "teardown as 30",
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
        "username"
      ],
      "line": 14,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 15,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 16,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
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
  "status": "skipped"
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
      "name": "@Smoke1"
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
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/AY9eeyYiIeo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Likes the video",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "teardown as 30",
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/AY9eeyYiIeo",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
      "name": "@Smoke1"
    },
    {
      "line": 6,
      "name": "@GoodLoginScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"skimbo597\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"Tableman1!!ok!5\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User goes to video as \"https://youtu.be/AY9eeyYiIeo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Likes the video",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "teardown as 30",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "skimbo597",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinitions.user_enters_username_as(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://youtu.be/AY9eeyYiIeo",
      "offset": 23
    }
  ],
  "location": "LoginStepsDefinitions.user_goes_to_video_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "LoginStepsDefinitions.teardown_as(int)"
});
formatter.result({
  "status": "skipped"
});
});