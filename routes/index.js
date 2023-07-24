var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const glossaryData = [
    {
      "ID": 1,
      "Term": "Agile Development",
      "Description": "Agile development is an iterative and incremental software development approach that emphasizes collaboration, adaptability, and customer feedback to deliver high-quality products efficiently.",
      "References": "[1] A. Cockburn, J. Highsmith, A. Kern, J. W. Scrum. Agile software development: The cooperative game, IEEE Computer, 2001. https://www.researchgate.net/publication/265754004_Agile_Software_Development_The_Cooperative_Game_An_Overview"
    },
    {
      "ID": 2,
      "Term": "Docker",
      "Description": "Docker is an open-source containerization platform that allows developers to package applications and their dependencies into lightweight, portable containers for easy deployment and scalability.",
      "References": "[2] Turnbull. The Docker Book: Containerization Is the New Virtualization, Lulu, 2014. https://books.google.com.au/books/about/The_Docker_Book.html?id=4xQKBAAAQBAJ&redir_esc=y"
    },
    {
      "ID": 3,
      "Term": "Cloud",
      "Description": "Cloud computing refers to the delivery of computing resources, such as servers, databases, networking, and storage, over the internet on a pay-as-you-go basis.",
      "References": "[3] P. Mell, T. Grance. The NIST Definition of Cloud Computing, National Institute of Standards and Technology, 2011. https://csrc.nist.gov/pubs/sp/800/145/final#:~:text=Cloud%20computing%20is%20a%20model,effort%20or%20service%20provider%20interaction."
    },
    {
      "ID": 4,
      "Term": "DevOps",
      "Description": "DevOps is a collaborative culture and set of practices that unify development and operations teams to streamline software delivery, improve efficiency, and enhance communication through automation and continuous integration.",
      "References": "[4] Amazon, What is DevOps? - Amazon Web Services (AWS), Amazon Web Services, Inc., 2019. https://aws.amazon.com/devops/what-is-devops/"
    },
    {
      "ID": 5,
      "Term": "Wall of Confusion",
      "Description": "Wall of Confusion refers to the barriers and miscommunication between development and operations teams in non-DevOps organizations, hindering effective collaboration and workflow.",
      "References": "[5] S. Kawaguchi, The Wall of Confusion, Medium, Feb. 12, 2022. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26"
    },
    {
      "ID": 6,
      "Term": "Kubernetes",
      "Description": "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications, simplifying container management across clusters.",
      "References": "[6] B. Burns, J. Beda, B. Grant. Design Patterns for Container-Based Distributed Systems, USENIX, 2016. https://www.usenix.org/conference/hotcloud16/workshop-program/presentation/burns"
    },
    {
      "ID": 7,
      "Term": "Silos",
      "Description": "Silos refer to isolated and disconnected teams or departments within an organization, which obstruct effective collaboration and communication, often leading to inefficiencies.",
      "References": "[7] S. McConnell. Software Project Survival Guide, Microsoft Press, 1998. https://dl.acm.org/doi/10.5555/270015"
    },
    {
      "ID": 8,
      "Term": "Microservices",
      "Description": "Microservices is an architectural style where an application is composed of small, independent services that communicate through APIs, allowing for modular development, deployment, and scalability.",
      "References": "[8] M. Fowler. Microservices: A definition of this new architectural term, martinfowler.com, 2014. https://martinfowler.com/articles/microservices.html#:~:text=In%20short%2C%20the%20microservice%20architectural,often%20an%20HTTP%20resource%20API."
    },
    {
      "ID": 9,
      "Term": "SDLC (Software Development Life-cycle)",
      "Description": "SDLC is a structured approach to software development that encompasses planning, design, coding, testing, deployment, and maintenance, ensuring a systematic and organized development process.",
      "References": "[9] W. Moore. A Life Cycle Model for Software Development and Support, IEEE Transactions on Software Engineering, 1987. https://dl.acm.org/doi/10.5555/4330"
    },
    {
      "ID": 10,
      "Term": "Terraform",
      "Description": "Terraform is an open-source infrastructure as code (IaC) tool that allows developers to define and manage cloud infrastructure through declarative configuration files, enabling consistent and automated infrastructure provisioning.",
      "References": "[10] M. Wittig and Y. Wittig, Terraform: Up and Running, 3rd Edition [Book], O'Reilly, 2019. https://learning.oreilly.com/library/view/terraform-up-and/9781098116736/ch01.html"
    },
  ];

  res.render('index', {
    title: 'DevOps SIT722 Glossary', sub: 'Explore my website featuring a curated collection of DevOps terms and their concise descriptions.',glossaryData: glossaryData });
});

module.exports = router;

