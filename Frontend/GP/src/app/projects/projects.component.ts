import { Component } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { ExperienceService } from '../services/experience.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects= [
    {
        "_id": "66d08230c72eae712d61704e",
        "name": "Arabic Font Classification",
        "description": "The Arabic Font Recognition System classifies Arabic paragraphs into one of four fonts (0 to 3). Using image processing and ML, it extracts text features and employs a trained model for accurate classification. It aids in document analysis, font identification, and typography.",
        "link": "https://github.com/mennamohamed0207/Arabic-Font-Recognition",
        "languages": [
            "Python"
        ],
        "role": [
            "Developed and implemented image binarization and LPQ feature extractor.,Evaluated performance using various classifiers, including KNN, SVM, and Random Forest."
        ],
        "tools": [
            "Numpy, scikit-learn"
        ],
        "__v": 0
    },
    {
        "_id": "66d0835fc72eae712d617067",
        "name": "GoWell-Search Engine",
        "description": "Search engine implemented with Java including web crawling, indexing and ranking.",
        "link": "https://github.com/mennamohamed0207/Search_Engine",
        "languages": [
            "Java"
        ],
        "role": [
            "Established query processor and phrase searching functionality, contributing to the indexer module for enhanced search capabilities."
        ],
        "tools": [
            "Jsoup ",
            "edu.mit.jwl ",
            "Wordnet dictionary ",
            "opennlp ",
            "MongoDB"
        ],
        "__v": 0
    },
    {
        "_id": "66d0841dc72eae712d617069",
        "name": "OS Scheduler",
        "description": "This is an Operating Systems Course Project where we were required to implement various process management alogirhtms, It's scheduler the processes that there exist in the system",
        "link": "https://github.com/mennamohamed0207/OS-Scheduler",
        "languages": [
            "C"
        ],
        "role": [
            "Implemented Shortest Remaining Time algorithm "
        ],
        "tools": [
            "GCC compiler ",
            " Linux"
        ],
        "__v": 0
    },
    {
        "_id": "66d0846cc72eae712d61706b",
        "name": "HR system",
        "description": "This is a Company System Application that provides services for human resources department",
        "link": "https://github.com/mennamohamed0207/CarGas",
        "languages": [
            "PHP"
        ],
        "role": [
            "Implemented user management, advanced payment for schools, and resort modules."
        ],
        "tools": [
            "Laravel ",
            " MySQL"
        ],
        "__v": 0
    },
    {
        "_id": "66d085dac72eae712d617077",
        "name": "InSoil",
        "description": "It is a system to monitor soil parameters to effectively manage supplied resources especially fertilizers",
        "link": "https://github.com/mennamohamed0207/InSoil",
        "languages": [
            "Dart"
        ],
        "role": [
            "Contributed to developing mobile app"
        ],
        "tools": [
            "Flutter"
        ],
        "__v": 0
    },
    {
        "_id": "66d088a4c72eae712d617093",
        "name": "Testing Cloned Twitter",
        "description": "The all-in-one solution for ensuring the quality and performance of our Twitter clone app. In this repository, we employ cutting-edge testing methodologies and tools to conduct end-to-end testing of web and mobile applications, along with intense stress testing for our Twitter clone app.",
        "link": "https://github.com/Twitter-Clone-Project/Testing",
        "languages": [
            "Java ",
            " Javascript"
        ],
        "role": [
            "Conducted comprehensive testing of the main page, interactions, tweets, trends, sign-up, and settings on both website and mobile application. Performed stress testing on all APIs."
        ],
        "tools": [
            "Cypress ",
            "Appium ",
            "Jmeter"
        ],
        "__v": 0
    },
    {
        "_id": "66d08eedc72eae712d617098",
        "name": "Shipping Company",
        "description": "It is a simulation project for a shipping company that has 3 types of trucks and 3 types of cargos that can carry in their trucks",
        "link": "https://github.com/mennamohamed0207/Shippping-Company",
        "languages": [
            "C++"
        ],
        "role": [
            "To be modified"
        ],
        "tools": [
            ""
        ],
        "__v": 0
    }
]
  constructor(private dataService:ExperienceService) { }

  ngOnInit(): void {
   
  }
}
