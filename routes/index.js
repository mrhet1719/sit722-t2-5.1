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
    },
    {
      "ID": 21,
      "Term": "Multi Container Application",
      "Description": "A multi-container application is a software setup composed of multiple distinct, interconnected containers that work together to fulfill various functions of the application, enabling efficient modularization, scalability, and resource isolation.",
      "References": "Shashank Sharma. Using Awesome-Compose to Build and Deploy Your Multi-Container Application. Docker Blog. Retrieved from \"https://www.docker.com/blog/using-awesome-compose-to-build-and-deploy-your-multi-container-application\""
    },
    {
      "ID": 22,
      "Term": "Loosely coupled",
      "Description": "It is design principle where components or services within a cloud-based system are designed to interact with minimal dependencies, enabling flexibility, scalability, and easier maintenance.",
      "References": "Marcio Sete (2018, May 31). Loosely Coupled Architecture. Medium. Retrieved from \"https://medium.com/@marciosete/loosely-coupled-architecture-6a2b06082316\"",
    },
    {
      "ID": 23,
      "Term": "Docker Compose",
      "Description": "It is tool used to define and manage multi-container Docker applications using a single configuration file.",
      "References": "Kanav Preet (2023, July 26). The Role of Docker Compose. Knowledge Hut. Retrieved from \"https://www.knowledgehut.com/blog/devops/docker-compose\""
    },
    {
      "ID": 24,
      "Term": "Docker Image",
      "Description": "It is a lightweight, standalone, executable software package that includes all the necessary code, runtime, libraries, and settings required to run a piece of software.",
      "References": "Alexander Gillis. Docker image. Tech Target. Retrieve From \"https://www.techtarget.com/searchitoperations/definition/Docker-image\""

    },
    {
      "ID": 25,
      "Term": "Docker Container",
      "Description": "Runnable instance of a Docker image, encapsulating an application and its dependencies in an isolated environment.",
      "References": "Vineet Chaturvedi. What Is Docker and Docker Container ? A Deep Dive Into Docker !. Edureka. Retrieved from \"https://www.edureka.co/blog/what-is-docker-container\""
    },
    {
      "ID": 26,
      "Term": "Declarative Container Management",
      "Description": "A container orchestration approach where you specify the desired state of your infrastructure and applications, and the orchestration system automatically works to maintain that state, ensuring scalability, reliability, and consistent configurations.",
      "References": "Bob Reselman (2022, May 09). Imperative vs. declarative Kubernetes commands: What's the difference?. The Server Side. Retrieved From \"https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Imperative-vs-declarative-Kubernetes-commands-Whats-the-difference\""
    },
    {
      "ID": 27,
      "Term": "YAML",
      "Description": "It is stands for \"YAML Ain't Markup Language,\" and it is a human- readable data serialization format used for configuration files and structured data representation.",
      "References": "Dionysia Lemonaki (2022, November 11). What is YAML? The YML File Format. Free Code Camp. Retrieved From \"https://www.freecodecamp.org/news/what-is-yaml-the-yml-file-format\""
    },
    {
      "ID": 28,
      "Term": "Container Communication",
      "Description": "It refers to the interaction and exchange of data between separate containers, often within the same application, to enable collaboration and information sharing.",
      "References": "Robert-Jan Kuyper (2021, November 17). Full-Stack development with Docker Compose. Medium. Retrieved from \"https://medium.com/@datails/full-stack-development-with-docker-compose-c517ec826696\""
    },
    {
      "ID": 29,
      "Term": "Independently Deployable",
      "Description": "It refers to the capability of deploying individual components, services, or microservices of an application separately, without affecting the functionality of the overall system.",
      "References": "Chris Richardson. Essential characteristics of the microservice architecture: independently deployable. Microservices. Retrieve From \"https://microservices.io/post/architecture/2022/05/04/microservice-architecture-essentials-deployability.html\""
    },
    {
      "ID": 30,
      "Term": "Port Mapping",
      "Description": "It is the process of associating ports on the host machine with ports on a container, allowing external requests to reach services running inside the container.",
      "References": "Steve (2023, February 25). Understanding Port Forwarding – Beginners Guide. Steves Smart Home Guide. Retrieve From \"https://stevessmarthomeguide.com/understanding-port-forwarding\""
    },
    {
      "ID": 31,
      "Term": "Cluster",
      "Description": "A cluster in cloud computing is a group of interconnected virtual or physical machines used to enhance performance and scalability for various applications and services.",
      "References": "Qasim Khan (2023,June  03). What Is Cluster in Cloud Computing & How It's Revolutionizing Business Scalability and Performance. Red Switches. Retrieve From \"https://www.redswitches.com/blog/cluster-in-cloud-computing\""
    },
    {
      "ID": 32,
      "Term": "Kubernetes",
      "Description": "Kubernetes is an open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications.",
      "References": "Peter Jausovec (2023,August  03). Kubernetes: A Platform for Building Modern Applications. Solo.io. Retrieve From \"https://www.solo.io/blog/kubernetes-platform-modern-applications\""
    },
    {
      "ID": 33,
      "Term": "Automated rollouts and rollbacks",
      "Description": "Automated rollouts and rollbacks refer to the process in Kubernetes where updates to applications (deployments) are managed automatically, allowing for seamless deployment of new versions and automatic fallback to previous versions in case of issues or failures.",
      "References": "Gergely Risko (2019,October). How do you rollback deployments in Kubernetes?. learnk8s. Retrieve From \"https://learnk8s.io/kubernetes-rollbacks\""
    },
    {
      "ID": 34,
      "Term": "Automatic bin packing",
      "Description": "In cloud computing, automatic bin packing refers to the automated allocation of virtual resources (e.g., virtual machines, containers) into physical servers or clusters to optimize resource utilization, reduce operational costs, and improve performance while efficiently packing workloads to minimize wasted resources.",
      "References": "N.K. Mydhili (2019, February). Bin packing algorithms for virtual machine placement in cloud computing: A review. Research Gate. Retrieve From \"https://www.researchgate.net/publication/332546043_Bin_packing_algorithms_for_virtual_machine_placement_in_cloud_computing_A_review\""
    },
    {
      "ID": 35,
      "Term": "Pod",
      "Description": "Pods in Kubernetes are the smallest deployable units that can hold one or multiple containers, sharing the same network and storage resources, and are the basic building blocks for applications in a cluster.",
      "References": "Atul Kumar (2023,August  07). Kubernetes Pods For Beginners . K21 Academy.Retrieve From \"https://k21academy.com/docker-kubernetes/kubernetes-pods-for-beginners\""
    },
    {
      "ID": 36,
      "Term": "Terraform",
      "Description": "Terraform is an infrastructure as code(IaC) tool used for provisioning and managing cloud resources and infrastructure in a declarative and automated manner.",
      "References": "Mike Vanbuskirk (2023,June  08). What is Terraform &amp; Infrastructure as Code (IaC)?. Plural Sight. Retrieve From \"https://www.pluralsight.com/resources/blog/cloud/what-is-terraform-infrastructure-as-code-iac\""
    },
    {
      "ID": 37,
      "Term": "HCL",
      "Description": "HCL (HashiCorp Configuration Language) is a domain-specific language used in tools like Terraform and Consul to define and configure infrastructure and services as code in a human-readable and machine-parsable format.",
      "References": "Linode (2023,March  09). An Introduction to HashiCorp Configuration Language (HCL). Linode. Retrieve From \"https://www.linode.com/docs/guides/introduction-to-hcl\""
    },
    {
      "ID": 38,
      "Term": "Container Registry",
      "Description": "A container registry is a centralized repository for storing and distributing container images used in container-based applications like Docker, ensuring efficient image management and sharing across systems.",
      "References": "Roman Glushach (2023,July  27). Container Registry: The Essential Tool for Working with Docker Images. Medium. Retrieve From \"https://romanglushach.medium.com/container-registry-the-essential-tool-for-working-with-docker-images-5f394e0bed87\""
    },
    {
      "ID": 39,
      "Term": "Kubernetes Node",
      "Description": "A Kubernetes node is a physical or virtual machine in a cluster responsible for running containers and providing the necessary resources and services to manage and maintain them.",
      "References": "Alan R. Earls . Kubernetes node. Tech Target. Retrieve From \"https://www.techtarget.com/searchitoperations/definition/Kubernetes-Node\""
    },
    {
      "ID": 40,
      "Term": "Resource Groups",
      "Description": "Resource groups are logical containers in cloud computing platforms, such as Microsoft Azure, used for organizing and managing related cloud resources, simplifying management, billing, and access control within a specific project or application.",
      "References": "Smikar (2023,March  08). What are Azure Resource Groups?. Smikar Softwares. Retrieve From \"https://www.smikar.com/what-are-azure-resource-groups/\""
    },

  ];

  res.render('index', {
    title: 'DevOps SIT722 Glossary', sub: 'Welcome to my SIT722 Glossary', glossaryData: glossaryData
  });
});

module.exports = router;

