// PoliceReady v0.7 department data
// Compensation is displayed only when supported by official city or agency sources.
const DEPARTMENTS = [
  {
    "id": 1,
    "name": "Plano Police Department",
    "city": "Plano",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://www.plano.gov/police-employment",
    "applyUrl": "https://www.plano.gov/police-employment",
    "status": "verified",
    "verifiedDate": "2026-07-30",
    "summary": "PoliceReady summarizes the test type and eligibility information from official City of Plano pages. Exact course rules and passing requirements must be checked on the linked official fitness page.",
    "minimumAge": "21+ (official eligibility page)",
    "education": "Multiple qualifying paths; confirm on official eligibility page",
    "salary": "$86,423 recruit starting salary; $114,592 top salary",
    "benefits": "See official source",
    "hiringProcess": "Written and physical testing followed by agency hiring steps",
    "fitness": "Two-part physical agility test; official requirements page and video",
    "veteranPreference": "See official source",
    "fitnessVerified": true,
    "fitnessType": "obstacle",
    "fitnessEvents": [
      {
        "name": "Physical Agility Test",
        "standard": "Two-part applicant test",
        "note": "Use the official requirements page and video for current course details."
      }
    ],
    "sourceLinks": [
      {
        "label": "Police employment",
        "url": "https://www.plano.gov/police-employment"
      },
      {
        "label": "Fitness requirements",
        "url": "https://www.plano.gov/fitness-requirements"
      },
      {
        "label": "Eligibility and disqualifiers",
        "url": "https://www.plano.gov/eligibility-disqualifiers"
      }
    ],
    "dataQuality": {
      "level": "verified-summary",
      "officialSources": 3,
      "fitnessUsable": true,
      "lastReviewed": "2026-07-30"
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "$86,423",
      "startingSalary": "$86,423",
      "year1": "$86,423",
      "year2": "$103,108",
      "year3": "$110,985",
      "year4": "$110,985 (no separate Year 4 step published)",
      "year5": "$114,592",
      "fiveYearTotal": "$526,093",
      "topSalary": "$114,592",
      "raiseSchedule": "Official page publishes steps after 1, 2, 3, and 5 years",
      "sourceUrl": "https://www.plano.gov/police-employment",
      "verifiedDate": "2026-07-30",
      "verificationStatus": "verified"
    }
  },
  {
    "id": 2,
    "name": "Frisco Police Department",
    "city": "Frisco",
    "county": "Collin/Denton",
    "state": "TX",
    "officialUrl": "https://www.friscotexas.gov/300/Career-Opportunities",
    "applyUrl": "https://www.friscotexas.gov/300/Career-Opportunities",
    "status": "verified",
    "verifiedDate": "2026-07-30",
    "summary": "Official Frisco sources describe a 2,000-meter Concept2 row assessment and a 50% minimum that varies by applicant characteristics. Use the official calculator and current recruiting instructions before testing.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "FY26 recruit pay plan published by the City of Frisco",
    "benefits": "See official source",
    "hiringProcess": "Application and pre-employment process through the official city career system",
    "fitness": "2,000-meter Concept2 row; minimum 50% standard based on age, weight, and gender",
    "veteranPreference": "See official source",
    "fitnessVerified": true,
    "fitnessType": "row",
    "fitnessEvents": [
      {
        "name": "2,000-meter row",
        "standard": "Minimum 50%",
        "note": "Concept2 rower, damper setting 5; standard varies by age, weight, and gender."
      }
    ],
    "sourceLinks": [
      {
        "label": "Police career opportunities",
        "url": "https://www.friscotexas.gov/300/Career-Opportunities"
      },
      {
        "label": "Recruiting FAQ / row standard",
        "url": "https://www.friscotexas.gov/faq.aspx?TID=31"
      },
      {
        "label": "FY26 police pay plan",
        "url": "https://www.friscotexas.gov/DocumentCenter/View/39761/FY26-Police-Pay-Plan-v1205"
      }
    ],
    "dataQuality": {
      "level": "verified-summary",
      "officialSources": 3,
      "fitnessUsable": true,
      "lastReviewed": "2026-07-30"
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.friscotexas.gov/290/Pay-Plans",
      "verifiedDate": "2026-07-30",
      "verificationStatus": "official-pay-plan-linked"
    }
  },
  {
    "id": 3,
    "name": "Allen Police Department",
    "city": "Allen",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://www.cityofallen.org/906/Police",
    "applyUrl": "https://www.cityofallen.org/906/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofallen.org/906/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofallen.org/departments/human_resources/compensation.php",
      "verifiedDate": "2026-07-30",
      "verificationStatus": "official-pay-plan-linked"
    }
  },
  {
    "id": 4,
    "name": "McKinney Police Department",
    "city": "McKinney",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://www.mckinneytexas.org/166/Police",
    "applyUrl": "https://www.mckinneytexas.org/166/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.mckinneytexas.org/166/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.mckinneytexas.org/359/Benefits",
      "verifiedDate": "2026-07-30",
      "verificationStatus": "official-pay-plan-linked"
    }
  },
  {
    "id": 5,
    "name": "Richardson Police Department",
    "city": "Richardson",
    "county": "Dallas/Collin",
    "state": "TX",
    "officialUrl": "https://www.cor.net/departments/police",
    "applyUrl": "https://www.cor.net/departments/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cor.net/departments/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cor.net/departments/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 6,
    "name": "Wylie Police Department",
    "city": "Wylie",
    "county": "Collin/Dallas/Rockwall",
    "state": "TX",
    "officialUrl": "https://www.wylietexas.gov/departments/police_department/index.php",
    "applyUrl": "https://www.wylietexas.gov/departments/police_department/index.php",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.wylietexas.gov/departments/police_department/index.php"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.wylietexas.gov/departments/police_department/index.php",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 7,
    "name": "Murphy Police Department",
    "city": "Murphy",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://www.murphytx.org/115/Police",
    "applyUrl": "https://www.murphytx.org/115/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.murphytx.org/115/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.murphytx.org/115/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 8,
    "name": "Prosper Police Department",
    "city": "Prosper",
    "county": "Collin/Denton",
    "state": "TX",
    "officialUrl": "https://www.prospertx.gov/department/police/",
    "applyUrl": "https://www.prospertx.gov/department/police/",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.prospertx.gov/department/police/"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.prospertx.gov/department/police/",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 9,
    "name": "Celina Police Department",
    "city": "Celina",
    "county": "Collin/Denton",
    "state": "TX",
    "officialUrl": "https://www.celina-tx.gov/888/Police-Department",
    "applyUrl": "https://www.celina-tx.gov/888/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.celina-tx.gov/888/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.celina-tx.gov/888/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 10,
    "name": "Princeton Police Department",
    "city": "Princeton",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://princetontx.gov/214/Police",
    "applyUrl": "https://princetontx.gov/214/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://princetontx.gov/214/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://princetontx.gov/214/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 11,
    "name": "Anna Police Department",
    "city": "Anna",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://www.annatexas.gov/117/Police",
    "applyUrl": "https://www.annatexas.gov/117/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.annatexas.gov/117/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.annatexas.gov/117/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 12,
    "name": "Melissa Police Department",
    "city": "Melissa",
    "county": "Collin",
    "state": "TX",
    "officialUrl": "https://www.cityofmelissa.com/190/Police-Department",
    "applyUrl": "https://www.cityofmelissa.com/190/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofmelissa.com/190/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofmelissa.com/190/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 13,
    "name": "Dallas Police Department",
    "city": "Dallas",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://dallascityhall.com/departments/police/Pages/default.aspx",
    "applyUrl": "https://dallascityhall.com/departments/police/Pages/default.aspx",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://dallascityhall.com/departments/police/Pages/default.aspx"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://dallascityhall.com/departments/police/Pages/default.aspx",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 14,
    "name": "Garland Police Department",
    "city": "Garland",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.garlandtx.gov/192/Police",
    "applyUrl": "https://www.garlandtx.gov/192/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.garlandtx.gov/192/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.garlandtx.gov/192/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 15,
    "name": "Irving Police Department",
    "city": "Irving",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.cityofirving.org/940/Police",
    "applyUrl": "https://www.cityofirving.org/940/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofirving.org/940/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofirving.org/940/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 16,
    "name": "Mesquite Police Department",
    "city": "Mesquite",
    "county": "Dallas/Kaufman",
    "state": "TX",
    "officialUrl": "https://www.cityofmesquite.com/454/Police",
    "applyUrl": "https://www.cityofmesquite.com/454/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofmesquite.com/454/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofmesquite.com/454/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 17,
    "name": "Carrollton Police Department",
    "city": "Carrollton",
    "county": "Dallas/Denton/Collin",
    "state": "TX",
    "officialUrl": "https://www.cityofcarrollton.com/departments/departments-g-p/police",
    "applyUrl": "https://www.cityofcarrollton.com/departments/departments-g-p/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofcarrollton.com/departments/departments-g-p/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofcarrollton.com/departments/departments-g-p/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 18,
    "name": "Farmers Branch Police Department",
    "city": "Farmers Branch",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.farmersbranchtx.gov/158/Police",
    "applyUrl": "https://www.farmersbranchtx.gov/158/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.farmersbranchtx.gov/158/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.farmersbranchtx.gov/158/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 19,
    "name": "Coppell Police Department",
    "city": "Coppell",
    "county": "Dallas/Denton",
    "state": "TX",
    "officialUrl": "https://www.coppelltx.gov/402/Police",
    "applyUrl": "https://www.coppelltx.gov/402/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.coppelltx.gov/402/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.coppelltx.gov/402/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 20,
    "name": "Rowlett Police Department",
    "city": "Rowlett",
    "county": "Dallas/Rockwall",
    "state": "TX",
    "officialUrl": "https://www.rowletttx.gov/199/Police",
    "applyUrl": "https://www.rowletttx.gov/199/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.rowletttx.gov/199/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.rowletttx.gov/199/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 21,
    "name": "DeSoto Police Department",
    "city": "DeSoto",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.ci.desoto.tx.us/151/Police",
    "applyUrl": "https://www.ci.desoto.tx.us/151/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.ci.desoto.tx.us/151/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.ci.desoto.tx.us/151/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 22,
    "name": "Duncanville Police Department",
    "city": "Duncanville",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.duncanvilletx.gov/departments/police/",
    "applyUrl": "https://www.duncanvilletx.gov/departments/police/",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.duncanvilletx.gov/departments/police/"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.duncanvilletx.gov/departments/police/",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 23,
    "name": "Cedar Hill Police Department",
    "city": "Cedar Hill",
    "county": "Dallas/Ellis",
    "state": "TX",
    "officialUrl": "https://www.cedarhilltx.com/196/Police",
    "applyUrl": "https://www.cedarhilltx.com/196/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cedarhilltx.com/196/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cedarhilltx.com/196/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 24,
    "name": "Lancaster Police Department",
    "city": "Lancaster",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.lancaster-tx.com/155/Police",
    "applyUrl": "https://www.lancaster-tx.com/155/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.lancaster-tx.com/155/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.lancaster-tx.com/155/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 25,
    "name": "Grand Prairie Police Department",
    "city": "Grand Prairie",
    "county": "Dallas/Tarrant/Ellis",
    "state": "TX",
    "officialUrl": "https://www.gptx.org/Departments/Police-Department",
    "applyUrl": "https://www.gptx.org/Departments/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.gptx.org/Departments/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.gptx.org/Departments/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 26,
    "name": "Addison Police Department",
    "city": "Addison",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://addisontexas.net/police",
    "applyUrl": "https://addisontexas.net/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://addisontexas.net/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://addisontexas.net/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 27,
    "name": "University Park Police Department",
    "city": "University Park",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.uptexas.org/312/Police",
    "applyUrl": "https://www.uptexas.org/312/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.uptexas.org/312/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.uptexas.org/312/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 28,
    "name": "Highland Park Department of Public Safety",
    "city": "Highland Park",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.hptx.org/189/Public-Safety",
    "applyUrl": "https://www.hptx.org/189/Public-Safety",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.hptx.org/189/Public-Safety"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.hptx.org/189/Public-Safety",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 29,
    "name": "Balch Springs Police Department",
    "city": "Balch Springs",
    "county": "Dallas",
    "state": "TX",
    "officialUrl": "https://www.cityofbalchsprings.com/148/Police-Department",
    "applyUrl": "https://www.cityofbalchsprings.com/148/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofbalchsprings.com/148/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofbalchsprings.com/148/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 30,
    "name": "Sachse Police Department",
    "city": "Sachse",
    "county": "Dallas/Collin",
    "state": "TX",
    "officialUrl": "https://www.cityofsachse.com/168/Police",
    "applyUrl": "https://www.cityofsachse.com/168/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofsachse.com/168/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofsachse.com/168/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 31,
    "name": "Fort Worth Police Department",
    "city": "Fort Worth",
    "county": "Tarrant/Denton/Parker/Wise",
    "state": "TX",
    "officialUrl": "https://www.fortworthtexas.gov/departments/police",
    "applyUrl": "https://www.fortworthtexas.gov/departments/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.fortworthtexas.gov/departments/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.fortworthtexas.gov/departments/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 32,
    "name": "Arlington Police Department",
    "city": "Arlington",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.arlingtontx.gov/city_hall/departments/police",
    "applyUrl": "https://www.arlingtontx.gov/city_hall/departments/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.arlingtontx.gov/city_hall/departments/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.arlingtontx.gov/city_hall/departments/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 33,
    "name": "Grapevine Police Department",
    "city": "Grapevine",
    "county": "Tarrant/Dallas/Denton",
    "state": "TX",
    "officialUrl": "https://www.grapevinetexas.gov/450/Police",
    "applyUrl": "https://www.grapevinetexas.gov/450/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.grapevinetexas.gov/450/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.grapevinetexas.gov/450/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 34,
    "name": "Southlake Police Department",
    "city": "Southlake",
    "county": "Tarrant/Denton",
    "state": "TX",
    "officialUrl": "https://www.cityofsouthlake.com/169/Police",
    "applyUrl": "https://www.cityofsouthlake.com/169/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofsouthlake.com/169/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofsouthlake.com/169/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 35,
    "name": "Euless Police Department",
    "city": "Euless",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.eulesstx.gov/departments/police",
    "applyUrl": "https://www.eulesstx.gov/departments/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.eulesstx.gov/departments/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.eulesstx.gov/departments/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 36,
    "name": "Bedford Police Department",
    "city": "Bedford",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.bedfordtx.gov/174/Police-Department",
    "applyUrl": "https://www.bedfordtx.gov/174/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.bedfordtx.gov/174/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.bedfordtx.gov/174/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 37,
    "name": "Hurst Police Department",
    "city": "Hurst",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.hursttx.gov/about-us/departments/police-department",
    "applyUrl": "https://www.hursttx.gov/about-us/departments/police-department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.hursttx.gov/about-us/departments/police-department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.hursttx.gov/about-us/departments/police-department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 38,
    "name": "North Richland Hills Police Department",
    "city": "North Richland Hills",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.nrhtx.com/270/Police",
    "applyUrl": "https://www.nrhtx.com/270/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.nrhtx.com/270/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.nrhtx.com/270/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 39,
    "name": "Keller Police Department",
    "city": "Keller",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.cityofkeller.com/services/police",
    "applyUrl": "https://www.cityofkeller.com/services/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofkeller.com/services/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofkeller.com/services/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 40,
    "name": "Mansfield Police Department",
    "city": "Mansfield",
    "county": "Tarrant/Johnson/Ellis",
    "state": "TX",
    "officialUrl": "https://www.mansfieldtexas.gov/168/Police",
    "applyUrl": "https://www.mansfieldtexas.gov/168/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.mansfieldtexas.gov/168/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.mansfieldtexas.gov/168/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 41,
    "name": "Burleson Police Department",
    "city": "Burleson",
    "county": "Johnson/Tarrant",
    "state": "TX",
    "officialUrl": "https://www.burlesontx.com/70/Police",
    "applyUrl": "https://www.burlesontx.com/70/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.burlesontx.com/70/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.burlesontx.com/70/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 42,
    "name": "Colleyville Police Department",
    "city": "Colleyville",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.colleyville.com/government/departments-a-l/police",
    "applyUrl": "https://www.colleyville.com/government/departments-a-l/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.colleyville.com/government/departments-a-l/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.colleyville.com/government/departments-a-l/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 43,
    "name": "Watauga Police Department",
    "city": "Watauga",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.cowtx.org/141/Police",
    "applyUrl": "https://www.cowtx.org/141/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cowtx.org/141/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cowtx.org/141/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 44,
    "name": "White Settlement Police Department",
    "city": "White Settlement",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.wstx.us/166/Police",
    "applyUrl": "https://www.wstx.us/166/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.wstx.us/166/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.wstx.us/166/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 45,
    "name": "Benbrook Police Department",
    "city": "Benbrook",
    "county": "Tarrant",
    "state": "TX",
    "officialUrl": "https://www.benbrook-tx.gov/171/Police",
    "applyUrl": "https://www.benbrook-tx.gov/171/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.benbrook-tx.gov/171/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.benbrook-tx.gov/171/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 46,
    "name": "Denton Police Department",
    "city": "Denton",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.cityofdenton.com/351/Police",
    "applyUrl": "https://www.cityofdenton.com/351/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofdenton.com/351/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofdenton.com/351/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 47,
    "name": "Lewisville Police Department",
    "city": "Lewisville",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.cityoflewisville.com/about-us/city-departments/police-department",
    "applyUrl": "https://www.cityoflewisville.com/about-us/city-departments/police-department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityoflewisville.com/about-us/city-departments/police-department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityoflewisville.com/about-us/city-departments/police-department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 48,
    "name": "Flower Mound Police Department",
    "city": "Flower Mound",
    "county": "Denton/Tarrant",
    "state": "TX",
    "officialUrl": "https://www.flower-mound.com/139/Police-Department",
    "applyUrl": "https://www.flower-mound.com/139/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.flower-mound.com/139/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.flower-mound.com/139/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 49,
    "name": "The Colony Police Department",
    "city": "The Colony",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.thecolonytx.gov/162/Police",
    "applyUrl": "https://www.thecolonytx.gov/162/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.thecolonytx.gov/162/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.thecolonytx.gov/162/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 50,
    "name": "Little Elm Police Department",
    "city": "Little Elm",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.littleelm.org/289/Police-Department",
    "applyUrl": "https://www.littleelm.org/289/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.littleelm.org/289/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.littleelm.org/289/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 51,
    "name": "Lake Dallas Police Department",
    "city": "Lake Dallas",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.lakedallas.com/174/Police-Department",
    "applyUrl": "https://www.lakedallas.com/174/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.lakedallas.com/174/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.lakedallas.com/174/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 52,
    "name": "Corinth Police Department",
    "city": "Corinth",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.cityofcorinth.com/police",
    "applyUrl": "https://www.cityofcorinth.com/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofcorinth.com/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofcorinth.com/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 53,
    "name": "Highland Village Police Department",
    "city": "Highland Village",
    "county": "Denton",
    "state": "TX",
    "officialUrl": "https://www.highlandvillage.org/168/Police",
    "applyUrl": "https://www.highlandvillage.org/168/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.highlandvillage.org/168/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.highlandvillage.org/168/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 54,
    "name": "Rockwall Police Department",
    "city": "Rockwall",
    "county": "Rockwall",
    "state": "TX",
    "officialUrl": "https://www.rockwall.com/police.asp",
    "applyUrl": "https://www.rockwall.com/police.asp",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.rockwall.com/police.asp"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.rockwall.com/police.asp",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 55,
    "name": "Heath Department of Public Safety",
    "city": "Heath",
    "county": "Rockwall",
    "state": "TX",
    "officialUrl": "https://www.heathtx.com/departments/public-safety/",
    "applyUrl": "https://www.heathtx.com/departments/public-safety/",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.heathtx.com/departments/public-safety/"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.heathtx.com/departments/public-safety/",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 56,
    "name": "Royse City Police Department",
    "city": "Royse City",
    "county": "Rockwall/Collin/Hunt",
    "state": "TX",
    "officialUrl": "https://www.roysecity.com/145/Police-Department",
    "applyUrl": "https://www.roysecity.com/145/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.roysecity.com/145/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.roysecity.com/145/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 57,
    "name": "Forney Police Department",
    "city": "Forney",
    "county": "Kaufman",
    "state": "TX",
    "officialUrl": "https://www.forneytx.gov/218/Police",
    "applyUrl": "https://www.forneytx.gov/218/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.forneytx.gov/218/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.forneytx.gov/218/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 58,
    "name": "Kaufman Police Department",
    "city": "Kaufman",
    "county": "Kaufman",
    "state": "TX",
    "officialUrl": "https://www.kaufmantx.org/2171/Police-Department",
    "applyUrl": "https://www.kaufmantx.org/2171/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.kaufmantx.org/2171/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.kaufmantx.org/2171/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 59,
    "name": "Terrell Police Department",
    "city": "Terrell",
    "county": "Kaufman",
    "state": "TX",
    "officialUrl": "https://www.cityofterrell.org/159/Police-Department",
    "applyUrl": "https://www.cityofterrell.org/159/Police-Department",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofterrell.org/159/Police-Department"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofterrell.org/159/Police-Department",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 60,
    "name": "Waxahachie Police Department",
    "city": "Waxahachie",
    "county": "Ellis",
    "state": "TX",
    "officialUrl": "https://www.waxahachie.com/departments/police_department/index.php",
    "applyUrl": "https://www.waxahachie.com/departments/police_department/index.php",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.waxahachie.com/departments/police_department/index.php"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.waxahachie.com/departments/police_department/index.php",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 61,
    "name": "Midlothian Police Department",
    "city": "Midlothian",
    "county": "Ellis",
    "state": "TX",
    "officialUrl": "https://www.midlothian.tx.us/166/Police",
    "applyUrl": "https://www.midlothian.tx.us/166/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.midlothian.tx.us/166/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.midlothian.tx.us/166/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 62,
    "name": "Ennis Police Department",
    "city": "Ennis",
    "county": "Ellis",
    "state": "TX",
    "officialUrl": "https://www.ennistx.gov/departments/police",
    "applyUrl": "https://www.ennistx.gov/departments/police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.ennistx.gov/departments/police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.ennistx.gov/departments/police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 63,
    "name": "Sherman Police Department",
    "city": "Sherman",
    "county": "Grayson",
    "state": "TX",
    "officialUrl": "https://www.ci.sherman.tx.us/111/Police",
    "applyUrl": "https://www.ci.sherman.tx.us/111/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.ci.sherman.tx.us/111/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.ci.sherman.tx.us/111/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  },
  {
    "id": 64,
    "name": "Denison Police Department",
    "city": "Denison",
    "county": "Grayson",
    "state": "TX",
    "officialUrl": "https://www.cityofdenison.com/214/Police",
    "applyUrl": "https://www.cityofdenison.com/214/Police",
    "status": "source-only",
    "verifiedDate": "",
    "summary": "Official department or city page linked. Detailed hiring, salary, and fitness fields have not yet been summarized in PoliceReady. Confirm all current requirements directly with the agency.",
    "minimumAge": "See official source",
    "education": "See official source",
    "salary": "See official source",
    "benefits": "See official source",
    "hiringProcess": "See official source",
    "fitness": "See official source",
    "veteranPreference": "See official source",
    "fitnessVerified": false,
    "fitnessType": "general",
    "fitnessEvents": [],
    "sourceLinks": [
      {
        "label": "Official department or city page",
        "url": "https://www.cityofdenison.com/214/Police"
      }
    ],
    "dataQuality": {
      "level": "official-link-only",
      "officialSources": 1,
      "fitnessUsable": false,
      "lastReviewed": null
    },
    "privacy": {
      "collectsOfficialApplicationData": false,
      "externalApplicationOnly": true
    },
    "compensation": {
      "recruitSalary": "Not publicly listed by the agency",
      "startingSalary": "Not publicly listed by the agency",
      "year1": "Not publicly listed by the agency",
      "year2": "Not publicly listed by the agency",
      "year3": "Not publicly listed by the agency",
      "year4": "Not publicly listed by the agency",
      "year5": "Not publicly listed by the agency",
      "fiveYearTotal": "Not publicly listed by the agency",
      "topSalary": "Not publicly listed by the agency",
      "raiseSchedule": "Not publicly listed by the agency",
      "sourceUrl": "https://www.cityofdenison.com/214/Police",
      "verifiedDate": "",
      "verificationStatus": "needs-review"
    }
  }
];
