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
];
module.exports = { glosarries };
