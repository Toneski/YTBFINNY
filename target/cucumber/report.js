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
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 17,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;4"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 18,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;5"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 19,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;6"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 20,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;7"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 21,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;8"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 22,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;9"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 23,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;10"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 24,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;11"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 25,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;12"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 26,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;13"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 27,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;14"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 28,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;15"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 29,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;16"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 30,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;17"
    },
    {
      "cells": [
        "johnyfable"
      ],
      "line": 31,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;18"
    },
    {
      "cells": [
        "skimbo597"
      ],
      "line": 32,
      "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;19"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11198872600,
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
  "duration": 15024160300,
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
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 5358820200,
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
  "duration": 3292191800,
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
  "duration": 9014061700,
  "status": "passed"
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
  "duration": 35054034600,
  "status": "passed"
});
formatter.before({
  "duration": 4172784200,
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
  "duration": 13294619200,
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
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3236997800,
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
  "duration": 3309418900,
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
  "duration": 12075440700,
  "status": "passed"
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
  "duration": 34907725900,
  "status": "passed"
});
formatter.before({
  "duration": 3883778700,
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
  "duration": 13826672200,
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
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3708866400,
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
  "duration": 3236941500,
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
  "duration": 8575042800,
  "status": "passed"
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
  "duration": 34890996500,
  "status": "passed"
});
formatter.before({
  "duration": 3613963800,
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
  "duration": 9621353300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3260238300,
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
  "duration": 3337523300,
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
  "duration": 12964777100,
  "status": "passed"
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
  "duration": 34835849900,
  "status": "passed"
});
formatter.before({
  "duration": 4088969500,
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
  "duration": 13305569500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3417255200,
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
  "duration": 3270845800,
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
  "duration": 7999409100,
  "status": "passed"
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
  "duration": 34817668000,
  "status": "passed"
});
formatter.before({
  "duration": 4028972100,
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
  "duration": 13061667200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3296764800,
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
  "duration": 3284732800,
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
  "duration": 8846540700,
  "status": "passed"
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
  "duration": 34846990000,
  "status": "passed"
});
formatter.before({
  "duration": 3991434900,
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
  "duration": 15321222100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3351475600,
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
  "duration": 3235276500,
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
  "duration": 8868967200,
  "status": "passed"
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
  "duration": 34918809700,
  "status": "passed"
});
formatter.before({
  "duration": 4398133100,
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
  "duration": 15504404400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 4099924000,
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
  "duration": 3235519600,
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
  "duration": 8492820800,
  "status": "passed"
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
  "duration": 34849634900,
  "status": "passed"
});
formatter.before({
  "duration": 4344563900,
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
  "duration": 11710113800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3252085700,
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
  "duration": 3247197000,
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
  "duration": 9828015000,
  "status": "passed"
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
  "duration": 34985379600,
  "status": "passed"
});
formatter.before({
  "duration": 4498064000,
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
  "duration": 14062479800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3404778600,
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
  "duration": 3241492000,
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
  "duration": 8115356700,
  "status": "passed"
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
  "duration": 34918253600,
  "status": "passed"
});
formatter.before({
  "duration": 4587773500,
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
  "duration": 12248814900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3289742200,
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
  "duration": 3252635900,
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
  "duration": 8964169300,
  "status": "passed"
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
  "duration": 34895255500,
  "status": "passed"
});
formatter.before({
  "duration": 3714071100,
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
  "duration": 11949627700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3836215300,
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
  "duration": 3391199800,
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
  "duration": 8329231900,
  "status": "passed"
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
  "duration": 34975370100,
  "status": "passed"
});
formatter.before({
  "duration": 3730543300,
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
  "duration": 15631000900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3274311400,
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
  "duration": 3235851200,
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
  "duration": 9141486200,
  "status": "passed"
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
  "duration": 34890254100,
  "status": "passed"
});
formatter.before({
  "duration": 3643887900,
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
  "duration": 14509902000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3365328600,
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
  "duration": 3221565500,
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
  "duration": 9293811700,
  "status": "passed"
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
  "duration": 34885328500,
  "status": "passed"
});
formatter.before({
  "duration": 3875449000,
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
  "duration": 13712401100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3378847400,
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
  "duration": 3333685000,
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
  "duration": 9909083400,
  "status": "passed"
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
  "duration": 34887503500,
  "status": "passed"
});
formatter.before({
  "duration": 3744486300,
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
  "duration": 13689177000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3480019700,
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
  "duration": 3262492300,
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
  "duration": 8494306100,
  "status": "passed"
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
  "duration": 31504037300,
  "status": "passed"
});
formatter.before({
  "duration": 3613196400,
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
  "duration": 10631661800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;18",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3279490400,
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
  "duration": 3283443900,
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
  "duration": 10546351900,
  "status": "passed"
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
  "duration": 34994366900,
  "status": "passed"
});
formatter.before({
  "duration": 5038695900,
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
  "duration": 16121109300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;19",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke2"
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
  "name": "User goes to video as \"https://youtu.be/pN8LTZljvpU\"",
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
  "duration": 3349270300,
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
  "duration": 3388693000,
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
  "duration": 9758433400,
  "status": "passed"
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
  "duration": 34877356600,
  "status": "passed"
});
});