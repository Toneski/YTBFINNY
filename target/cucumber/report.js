$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/View.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke3"
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
  "name": "User goes to video",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "teardown as 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 13,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 14,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 15,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 16,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;4"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 17,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;5"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 18,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;6"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 19,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;7"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 20,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;8"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 21,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;9"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 22,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;10"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 23,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;11"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 24,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;12"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 25,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;13"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 26,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;14"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 27,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;15"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 28,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;16"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 29,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;17"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 30,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;18"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 31,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;19"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10188467200,
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
  "duration": 19551602100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke3"
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
  "name": "User goes to video",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "teardown as 200",
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
  "duration": 3497674900,
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
