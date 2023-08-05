const glosarries = [
  {
    id: 1,
    term: "Continuous Integration (CI)",
    description:
      "Continuous integration involves the incorporation of the build and unit testing phases into the software release process. With each committed revision, an automated build and test are triggered.",
    refrence:
      "https://aws.amazon.com/devops/continuous-integration/#:~:text=Continuous%20integration%20refers%20to%20the,for%20a%20release%20to%20production.",
  },
  {
    id: 2,
    term: "Continuous Delivery (CD)",
    description:
      "Continuous delivery streamlines the process of code changes by automatically building, testing, and preparing them for potential release to production. It builds upon continuous integration by not only deploying all code changes to a testing environment but also to a production environment, following the build stage.",
    refrence: "https://aws.amazon.com/devops/continuous-delivery/",
  },
  {
    id: 3,
    term: "Microservices",
    description:
      "An architectural style where applications are composed of loosely coupled, independently deployable services, enabling flexibility, scalability, and easier maintenance.",
    refrence: "Chris Richardson,https://microservices.io/",
  },
  {
    id: 4,
    term: "DevSecOps",
    description:
      "An extension of DevOps that incorporates security practices throughout the software development lifecycle to ensure the continuous delivery of secure software.",
    refrence:
      "https://aws.amazon.com/what-is/devsecops/#:~:text=DevSecOps%20is%20the%20practice%20of,is%20both%20efficient%20and%20secure.",
  },
  {
    id: 5,
    term: "Deployment Pipeline",
    description:
      "A series of automated steps in the software delivery process, from code commit to production deployment, ensuring code is thoroughly tested and verified before reaching users.",
    refrence: "https://www.redhat.com/en/topics/devops/what-cicd-pipeline",
  },
  {
    id: 6,
    term: "Configuration Management",
    description:
      "The process of managing and maintaining consistent configurations of systems and applications throughout their lifecycle, often achieved using tools like Ansible, Chef, or Puppet.",
    refrence:
      "Ian Buchanan, https://www.atlassian.com/microservices/microservices-architecture/configuration-management",
  },
  {
    id: 7,
    term: "Container Orchestration",
    description:
      "The management and coordination of containerized applications across multiple hosts, ensuring scalability, availability, and resource utilization. Kubernetes and Docker Swarm are popular container orchestration platforms.",
    refrence:
      "https://cloud.google.com/discover/what-is-container-orchestration#:~:text=Container%20orchestration%20automatically%20provisions%2C%20deploys,life%20cycle%20management%20of%20containers.",
  },
  {
    id: 8,
    term: "Infrastructure as Code (IaC) Tools",
    description:
      "Tools and frameworks like Terraform, CloudFormation, and Azure Resource Manager that enable the declarative definition and management of infrastructure using code.",
    refrence:
      "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac",
  },
  {
    id: 9,
    term: "Feature Flags (Feature Toggles)",
    description:
      "A technique to control the activation of new features in software without redeploying, allowing gradual rollouts and rollbacks based on configuration.",
    refrence:
      "ANN MCARTHUR,https://devcycle.com/blog/what-are-feature-flags-in-devops",
  },
  {
    id: 10,
    term: "Immutable Infrastructure",
    description:
      "An approach where servers and infrastructure components are never modified in-place; instead, they are replaced with new instances for updates and changes.",
    refrence: "Bibin Wilson,https://devopscube.com/immutable-infrastructure/",
  },
  {
    id: 11,
    term: "Customer-centric action",
    description:
      "DevOps should be driven by a customer-first approach. All decisions and actions taken by the team should prioritize customer satisfaction and experience. By aligning with customer needs, DevOps can deliver solutions that better meet expectations and address pain points.",
    refrence:
      "P Mateos,https://www.pufferfish.solutions/post/customer-centric-action-devops-principal-1",
  },
  {
    id: 12,
    term: "End-To-End Responsibility:",
    description:
      "The DevOps team improves product quality and takes more responsibility by providing performance support until the products reach their end-of-life stage.",
    refrence: "https://www.devopsagileskills.org/dasa-devops-principles/",
  },
  {
    id: 13,
    term: "Cross-functional autonomous teams",
    description:
      "In companies that build products with self-contained teams, these teams must have the freedom to work independently on the product from start to finish. This includes having all the necessary skills and knowledge to take full responsibility for the entire process.",
    refrence:
      "P Mateos, https://www.pufferfish.solutions/post/cross-functional-autonomous-teams-devops-principle-4#:~:text=In%20product%20organisations%20with%20vertical,end%2Dto%2Dend%20responsibility.",
  },
  {
    id: 14,
    term: "Continuous improvement",
    description:
      "Continuous Improvement is at the core of the DevOps culture, aiming to reduce waste and enhance the speed of product or service enhancements. This constant drive for improvement ensures a continuous and iterative refinement of the offerings.",
    refrence:
      "https://tkssharma-devops.gitbook.io/devops-training/what-is-devops/devops-principles",
  },
  {
    id: 15,
    term: "Continuous Monitoring",
    description:
      "Continuous monitoring refers to the practice of constantly observing and analyzing various aspects of a system, process, or service to ensure its smooth functioning and performance. It involves real-time or regular data collection, analysis, and feedback to identify potential issues, optimize performance, and make informed decisions for ongoing improvements.",
    refrence:
      "https://www.crowdstrike.com/cybersecurity-101/observability/continuous-monitoring/#:~:text=Continuous%20monitoring%20is%20an%20approach,time%20to%20address%20them%20quickly.",
  },
  {
    id: 16,
    term: "CI Server",
    description:
      "A continuous integration server, also known as a build server, plays a crucial role in managing the shared repository and overseeing incoming code changes. Whenever developers commit their code to the repository, the CI server automatically triggers a build process and records the outcomes of the build.",
    refrence:
      "https://about.gitlab.com/topics/ci-cd/continuous-integration-server/#:~:text=What%20does%20a%20CI%20server,the%20results%20of%20the%20build.",
  },
  {
    id: 17,
    term: "Package Management",
    description:
      "A package management system, also known as a package manager, comprises a set of tools that facilitate the creation of complete packages ready for release and deployment. It automates tasks like installing, upgrading, downgrading, configuring, removing, and purging software, streamlining the software management process.",
    refrence:
      "https://www.futurelearn.com/info/courses/cloudswyft-msft-introduction-to-devdps-practices/0/steps/184484#:~:text=about%20package%20management.-,A%20package%20management%20system%20or%20package%20manager%20is%20the%20set,configuring%2C%20removing%20and%20purging%20software.",
  },
  {
    id: 18,
    term: "Behavior-driven design (BDD) ",
    description:
      "Behavior-driven design (BDD) is an approach to software development that focuses on clear communication and collaboration between developers, testers, and business stakeholders. It uses natural language statements to describe how the software should behave in different scenarios. Automated tests are then created based on these statements to ensure the software works as expected according to the specified behaviors.",
    refrence: "https://cucumber.io/docs/bdd/",
  },
  {
    id: 19,
    term: "Test-driven design (TDD)",
    description:
      "Test-driven design (TDD) is a software development approach where developers write automated tests before writing the actual code. The process involves three main steps: writing a test that describes the desired behavior, running the test (which initially fails), and then writing the code to make the test pass. TDD helps ensure that the code is thoroughly tested, improves code quality, and guides developers to build software that meets the desired requirements.",
    refrence: "https://www.spiceworks.com/tech/devops/articles/what-is-tdd/",
  },
  {
    id: 20,
    term: "Agile Methodologies",
    description:
      "Agile methodologies are flexible and collaborative approaches to building software. They involve working in short cycles, delivering small pieces of the product regularly. By involving customers, adapting to changes, and focusing on teamwork, agile methods help create better software that meets customer needs faster and more efficiently.",
    refrence:
      "https://www.atlassian.com/agile#:~:text=The%20Agile%20methodology%20is%20a,READ%20ON%20BELOW",
  },
];
module.exports = { glosarries };
