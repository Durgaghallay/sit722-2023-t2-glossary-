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
  {
    id: 21,
    term: "Docker",
    description:
      "Docker is a software platform designed for fast building, testing, and deploying of applications. It encapsulates software in uniform units known as containers, which encompass all required components such as libraries, system tools, code, and runtime. With Docker, we can efficiently launch and scale applications in any setting, ensuring consistent performance.",
    refrence: "https://aws.amazon.com/docker/",
  },
  {
    id: 22,
    term: "Docker Compose",
    description:
      "Compose is a tool designed for setting up and executing multiple-container Docker applications. Through Compose, we employ a YAML file to outline our application's services. Subsequently, with just one command, we can initiate and run all the services defined in your configuration.",
    refrence: "https://docs.docker.com/compose/",
  },
  {
    id: 23,
    term: "Container Registry",
    description:
      "A container registry functions as a storage space or a set of storage spaces where container images are housed. These registries facilitate container-centric application development, commonly within DevOps workflows. They can also integrate seamlessly with container orchestration systems such as Docker and Kubernetes",
    refrence:
      "https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry",
  },
  {
    id: 24,
    term: "Docker Image",
    description:
      "A Docker image is a lightweight, standalone, executable software package that includes everything needed to run a piece of software, including the code, runtime, system tools, libraries, and settings. Images are used to create Docker containers. When a container is launched from an image, it becomes a running instance of that image.",
    refrence:
      "https://www.techtarget.com/searchitoperations/definition/Docker-image#:~:text=A%20Docker%20image%20is%20a,virtual%20machine%20(VM)%20environments.",
  },
  {
    id: 25,
    term: "Docker Image Tag",
    description:
      "The Docker tag is used to keep track of build versions when pushing images to Docker Hub. A single image can have multiple Docker tags associated with it. Similar to commits in Git, Docker tags act as a reference or alias for a specific image ID.",
    refrence:
      "https://www.baeldung.com/ops/docker-tag#:~:text=Docker%20tags%20are%20just%20an,can%20only%20contain%20128%20characters.",
  },
  {
    id: 26,
    term: "Docker Container",
    description:
      "  A Docker container is a runtime instance of a Docker image that gets created when the $ docker run command is implemented",
    refrence: "https://circleci.com/blog/docker-image-vs-container/",
  },
  {
    id: 27,
    term: "Docker Service",
    description:
      "Service is a definition of how an application component should run. It might dictate which Docker image to use, which ports to expose, how many replicas of the container to run, etc.",
    refrence: "https://docs.docker.com/compose/compose-file/05-services/",
  },
  {
    id: 28,
    term: "Docker Service",
    description:
      "Service is a definition of how an application component should run. It might dictate which Docker image to use, which ports to expose, how many replicas of the container to run, etc.",
    refrence: "https://docs.docker.com/compose/compose-file/05-services/",
  },
  {
    id: 29,
    term: "Docker Swarm",
    description:
      "Docker's native orchestration tool that allows you to manage and coordinate multiple Docker nodes as one collective entity, facilitating the deployment and scaling of containerized applications across multiple machines.",
    refrence: "https://docs.docker.com/engine/swarm/",
  },
  {
    id: 30,
    term: "YAML",
    description:
      "YAML stands for \"YAML Ain't Markup Language,\". While not truly a markup language, YAML is better characterized as a data serialization format or a configuration language. Its function is akin to JSON, but it's designed with a structure that's easier for humans to read and understand.",
    refrence:
      "https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started",
  },  {
    id: 31,
    term: "Kubernetes",
    description:
      "Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications.",
    refrence: "https://kubernetes.io/",
  },
  {
    id: 32,
    term: "Container Orchestration",
    description:
      "Container orchestration refers to the automated arrangement, coordination, and management of computer system containers. Containers are lightweight, standalone, and executable software packages that encompass everything needed to run a piece of software, including the code, runtime, system tools, system libraries, and settings",
    refrence:
      "https://cloud.google.com/discover/what-is-container-orchestration#:~:text=Container%20orchestration%20automatically%20provisions%2C%20deploys,life%20cycle%20management%20of%20containers.",
  },
  {
    id: 33,
    term: "Kubernetes",
    description:
      "A Kubernetes cluster is a set of machines, or nodes, that run containerized applications managed by Kubernetes. A cluster is composed of at least one control plane node and multiple worker nodes. The control plane's components make global decisions about the cluster (for example, scheduling), while the worker nodes run the actual containerized applications.",
    refrence: "https://kubernetes.io/docs/concepts/architecture/",
  },
  {
    id: 34,
    term: "Infrastructure As Code",
    description:
      "Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.",
    refrence:
      "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac",
  },
  {
    id: 35,
    term: "Immutable Infrastructure",
    description:
      "Instead of updating existing infrastructure, create a new one from scratch each time a change is needed and replace the old one. This practice minimizes inconsistencies and drifts.",
    refrence:
      "https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",
  },
  {
    id: 36,
    term: "Terraform",
    description:
      "Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently.",
    refrence: "https://developer.hashicorp.com/terraform/intro",
  },
  {
    id: 37,
    term: "Service Principal",
    description:
      "A service principal is an authentication mechanism for Azure. It allows our cluster to authenticate with Azure so that it can create Azure load balancers as external endpoints for our customer-facing microservices",
    refrence:
      "https://learn.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals?tabs=browser",
  },
  {
    id: 38,
    term: "Role-Based Access Control (RBAC)",
    description:
      "Role-Based Access Control (RBAC) is a system that restricts system access to authorized users. It's a principle and a mechanism to streamline the process of managing permissions in various systems.",
    refrence:
      "https://www.imperva.com/learn/data-security/role-based-access-control-rbac/#:~:text=EssentialsRegulation%20%26%20Compliance-,What%20is%20RBAC,enable%20access%20to%20authorized%20users.",
  },
  {
    id: 39,
    term: "kubectl",
    description:
      "kubectl is the command-line interface (CLI) tool for interacting with a Kubernetes cluster. It provides commands for a multitude of tasks, including creating and deleting resources, deploying applications, and troubleshooting.",
    refrence: "https://kubernetes.io/docs/reference/kubectl/",
  },
  {
    id: 40,
    term: "Terraform Providers",
    description:
      "Terraform providers are plugins that allow Terraform to manage a wide range of resources. Each provider is specific to a certain platform or service, such as AWS, Azure, Google Cloud, GitHub, etc.",
    refrence: "https://spacelift.io/blog/terraform-providers",
  },
];
module.exports = { glosarries };
