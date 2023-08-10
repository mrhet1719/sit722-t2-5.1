var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const glossaryData = [
    {
      "ID": 1,
      "Term": "DevOps",
      "Description": "DevOps combines development (Dev) and operations (Ops) to unite people, process, and technology in application planning,development, delivery, and operations.",
      "References": "M. Jacobs, Katherin EE, V. Thepet, Ed Kaim, Steved Ox & Dan Hellem (2023, January 01). What is DevOps?. Retrieved from \"https://learn.microsoft.com/en-us/devops/what-is-devops/\""
    },
    {
      "ID": 2,
      "Term": "Wall of Confusion",
      "Description": "In non-DevOps businesses, development and operations teams are separated by silos, which act as a barrier between the two sides.",
      "References": "Abhinav Krishna Kaiser (2021, January 13). DevOps Wall of Confusion Explained. Technopedia. Retrieved from \"http://technopedia.info/devops/devops-wall-of-confusion-explained/\""
    },
    {
      "ID": 3,
      "Term": "Microservices",
      "Description": "A microservice is a software architectural approach that splits an application's various functions into smaller components known as \"services.\" A microservice architecture is used when an application is constructed in this manner.",
      "References": "Jamie Juviler (2020, November 23). Microservices vs. APIs: What's the Difference?. Hubspot. Retrieved from \"https://blog.hubspot.com/website/microservices-vs-api\""
    },
    {
      "ID": 4,
      "Term": "Waterfall Model",
      "Description": "Software development uses a technique called the waterfall paradigm. Because it is a linear-sequential life cycle model, each step must be finished before moving on to the next.",
      "References": "Clifford Chi (2018, December 30). Everything You Need to Know About Using the Waterfall Methodology.Hubspot.Retrieved from \"https://blog.hubspot.com/marketing/waterfall-methodology\""
    },
    {
      "ID": 5,
      "Term": "Git",
      "Description": "You may keep track of the incremental changes you make to your code using a GIT version control system (VCS). As a result, you can try new things while also having the ability to go back and utilize an earlier version of the code that produced the desired results",
      "References": "Jhon. D Blischak (2016, January 19).A Quick Introduction to Version Control with Git and GitHub. Plos. Retrieved from \"https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004668\""
    },
    {
      "ID": 6,
      "Term": "DevOps and the Cloud",
      "Description": "DevOps and cloud are inseparable. DevOps is used in the vast majority of cloud development projects, and the list is growing. The advantages of utilizing DevOps with cloud projects are also becoming clearer.",
      "References": "David Linthicum.DevOps dictates new approach to cloud development. Teach Beacon. Retrieved from \"https: //techbeacon.com/app-dev-testing/devops-dictates-new-approach-cloud-development\""
    },
    {
      "ID": 7,
      "Term": "Agile Methodology",
      "Description": "The Agile technique is an iterative way to managing projects and creating software that uses test-driven development and feedback loops to address issues.",
      "References": "Erin Eatough (2022, July 20).What is Agile methodology and how does it work?. Better Up. Retrieved from \"https: //www.betterup.com/blog/agile-methodology\""
    },
    {
      "ID": 8,
      "Term": "Shift Left",
      "Description": "Moving testing, quality assurance, and performance evaluation early in the development cycle—often before any code is written—is known as \"shift left.\" Teams can anticipate changes that may occur during the development process that may have an impact on performance or other delivery procedures by using shift left testing.",
      "References": "Saif Gunja (2022, October 27).Shift left vs shift right: A DevOps mystery solved. Dynatrace. Retrieved from \"https: //www.dynatrace.com/news/blog/what-is-shift-left-and-what-is-shift-right\""
    },
    {
      "ID": 9,
      "Term": "Node",
      "Description": "JavaScript code can be run in the open source, cross-platform runtime environment known as Node.js (Node). Developers can utilize JavaScript for both client-side and server-side code without having to learn another language because Node is widely used for server-side programming.",
      "References": "Robert Sheldon .What is Node.js (Node)?. Tech Target. Retrieved from \"https: //www.techtarget.com/whatis/definition/Nodejs\""
    },
    {
      "ID": 10,
      "Term": "Cloud Computing",
      "Description": "Different services are delivered via the Internet through cloud computing. These tools and programs comprise software, servers, databases, networking, and data storage, among other things.",
      "References": "Jake Franken Field (2023, April 05). What is Cloud Computing? Pros and Cons of Different Types of Services. Investopedia. Retrieved from \"https://www.investopedia.com/terms/c/cloud-computing.asp\""
    },
    {
      "ID": 11,
      "Term": "Minimum Viable Product",
      "Description": "MVP is the most basic version of a product with essential features, created to gather user feedback and validate the product idea.",
      "References": "JUrszula Kotowska (2023, May 23). Building MVPs and Validating Products - Practical Guide. Survicate. Retrieved from \"https://survicate.com/blog/building-mvp/\""
    },
    {
      "ID": 12,
      "Term": "Automation",
      "Description": "Automation in DevOps streamlines and accelerates software development and deployment processes through the use of automated tools and scripts.",
      "References": "Binod Anand (2023, July 14). What is DevOps Automation? Tools, Best Practices. KnowledgeHut. Retrieved from \"https://www.knowledgehut.com/blog/devops/devops-automation\""
    },
    {
      "ID": 13,
      "Term": "Integration",
      "Description": "Integration in DevOps refers to the seamless merging of code changes and components from multiple developers into a shared repository to ensure collaborative and efficient software development",
      "References": "A. Agarwal, S. Gupta and T. Choudhury, \"Continuous and Integrated Software Development using DevOps,\"2018 International Conference on Advances in Computing and Communication Engineering (ICACCE), Paris, France,2018, pp.290-293, doi: 10.1109/ICACCE.2018.8458052."
    },
    {
      "ID": 14,
      "Term": "Customer-centric action",
      "Description": "Customer-centric action in DevOps prioritizes delivering value to customers by continuously incorporating their feedback and requirements throughout the software development and deployment lifecycle.",
      "References": "Frederik Schukken (2016, September 22). DEVOPS PRINCIPLE #1-CUSTOMER-CENTRIC ACTION. DevOps Agile Skills Association.Retrieved from \"https://www.devopsagileskills.org/event/488-devops-principle-1-customer-centric-action/\""
    },
    {
      "ID": 15,
      "Term": "Behaviour-Driven Design (BDD)",
      "Description": "Behavior-Driven Design in DevOps promotes collaboration between developers, testers, and stakeholders by using human-readable scenarios to define the desired behavior of a software system.",
      "References": "Laura Fitzgibbons. Behavior-Driven Design (BDD). Tech Target. Retrieved from \"https://www.techtarget.com/searchsoftwarequality/definition/Behavior-driven-development-BDD\""
    },
    {
      "ID": 16,
      "Term": "DevOps Cycle",
      "Description": "DevOps cycle is a continuous and iterative process that encompasses planning, development, testing, deployment, and monitoring to deliver software faster and with higher quality.",
      "References": "Mayank Gokarna (2021, January). DevOps phases across Software Development Lifecycle. Research Gate. Retrieved from \"https://www.researchgate.net/publication/348288718_DevOps_phases_across_Software_Development_Lifecycle\""
    },
    {
      "ID": 17,
      "Term": "IaC",
      "Description": "IaC stands for Infrastructure as Code in DevOps, which is the practice of managing and provisioning infrastructure using machine-readable configuration files, enabling automation, consistency, and version control for infrastructure setup.",
      "References": "Christopher Null. Infrastructure as code: The engine at the heart of DevOps. Tech Beacon. Retrieved from \"https://techbeacon.com/enterprise-it/infrastructure-code-engine-heart-devops\""
    },
    {
      "ID": 18,
      "Term": "Test-Driven Design (TDD)",
      "Description": "Test-Driven Design (TDD) is a software development approach where developers write tests before writing the code, ensuring that the code meets the requirements and functions as expected.",
      "References": "D. Marković, Ž. Jovanović, U. Pešović and S. Ranđić, \"Test-Driven Development (TDD) in development of measure application and transducers services, \"2011 19thTelecommunications Forum (TELFOR) Proceedings of Papers,Belgrade, Serbia, 2011, pp. 1316-1319, doi: 10.1109/TELFOR.2011.6143795."
    },
    {
      "ID": 19,
      "Term": "Rapid deployment",
      "Description": "Rapid deployment refers to the quick and frequent release of software updates, changes, or features into production environments, often enabled by automation and DevOps practices",
      "References": "A. M. Mowad, H. Fawareh and M. A. Hassan, \"Effect of Using Continuous Integration (CI) and Continuous Delivery (CD) Deployment in DevOps to reduce the Gap between Developer and Operation,\" 2022 International Arab Conference on Information Technology (ACIT), Abu Dhabi, United Arab Emirates, 2022, pp. 1-8, doi: 10.1109/ACIT57182.2022.9994139."
    },
    {
      "ID": 20,
      "Term": "SCM (Source Code Management)",
      "Description": "SCM in DevOps stands for Source Code Management, which involves the management and version control of source code throughout the software development lifecycle to facilitate collaboration and code integrity.",
      "References": "Edwin Klesman (2022, April 28). Why You Should Apply Source Code Management With GIT. Medium. Retrieved from \"https://eekayonline.medium.com/why-you-should-apply-source-code-management-with-git-614af2e63835\""
    }
  ];

  res.render('index', {
    title: 'DevOps SIT722 Glossary', sub: 'Welcome to my SIT722 Glossary', glossaryData: glossaryData
  });
});

module.exports = router;

