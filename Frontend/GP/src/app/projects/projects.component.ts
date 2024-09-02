import { Component } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';
import { ExperienceService } from '../services/experience.service';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects = [
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
               
            ],
            "__v": 0
        },
        {

            "name": "Subway Cloned Game",
            "description": "It is a cloned subway game but on desktop",
            "link": "https://github.com/mennamohamed0207/Egri-ya-Magdy-Game",
            "languages": [
                "C++"
            ],
            "role": [
                "Implement Entity Component System framework, Transformation logic and shaders, and lighting."
            ],
            "tools": [
                "OpenGL3", "GLSL"
            ],
            "__v": 0
        },
        {

            "name": "5-Stage Pipelined Processor",
            "description": "This project focuses on creating a RISC-like processor with an 8-register set, utilizing a 5-stage pipeline architecture. The processor supports a variety of instructions, memory operations, and branch control, following a specific Instruction Set Architecture (ISA).",
            "link": "https://github.com/mennamohamed0207/5-stage-pipelined-processor",
            "languages": [
                "VHDL"
            ],
            "role": [
                "Implemented instructions of increment, negative, swapping, no operation, and loading values from memory.",
                "Contributed to the fetch instruction memory module, and fetch data memory modules, as well as the write-back module."
            ],
            "tools": [
               
            ],
            "__v": 0
        },
        {
        
            "name": "AES Algorithm",
            "description": "It is a project about encryption and decryption the data",
            "link": "https://github.com/mennamohamed0207/AES-project",
            "languages": [
               "Verilog"
            ],
            "role": [
                "Implemented Shift rows module and Inverse shift rows, and contributed in integrating all modules of encryption and decryption"
            ],
            "tools": [
                
            ],
            "__v": 0
        },
        {
            "name":"Secure Chat",
            "description": "It is a secure chat application using socket programming",
            "link": "https://github.com/mennamohamed0207/Secure-Chat",
            "languages": [
               "Python"
            ],
            "role": [
                "Implemented server and client side of secure chat application with AES encryption and decryption"
            ],
            "tools": [
                
            ],
            "__v": 0
            
        },
        {
            "name":"Fast Chess Game",
            "description": "It is chess game with chat between two players implemented using Assembly language",
            "link": "https://github.com/mennamohamed0207/Cheeese",
            "languages": [
               "Assembly"
            ],
            "role": [
                "Implemented the knight logic in the chess and contributed in the implementation of Chat functionality"
            ],
            "tools": [
                
            ],
            "__v": 0
        }
    ]
    constructor(private dataService: ExperienceService) { }

    ngOnInit(): void {

    }
}
