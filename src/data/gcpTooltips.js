const GCP_TOOLTIPS = {
  // General
  GCP: "🔥 EXAM FOCUS: Core services to remember - Compute Engine, App Engine, GKE, Cloud Storage, BigQuery | Key pillars: Compute, Storage, Networking, Security",
  RegionsZones: "🔥 EXAM FOCUS: Region: Specific geographic location | Zone: Isolated location within a region | Multi-region: Highest availability, data redundancy",

  // Compute Engine
  ComputeEngine: "🔥 EXAM FOCUS: IaaS offering | N1-standard machines most common | Sustained use discounts automatic | Preemptible VMs for cost savings",
  MachineTypes: "🔥 EXAM FOCUS: E2 (cost-optimized), N1 (standard), N2/C2 (performance) | Memory/CPU ratios | Custom types available",
  LoadBalancing: "🔥 EXAM FOCUS: HTTP(S), TCP/SSL Proxy, Network LB | Global vs Regional | Health checks mandatory | Anycast IP",
  Images: "🔥 EXAM FOCUS: Public (maintained by Google) vs Custom | Boot disk image | Family versioning | Deprecation policy",
  IPAddresses: "🔥 EXAM FOCUS: Internal (RFC 1918) vs External | Static vs Ephemeral | Reserve static IPs for stable endpoints",
  StaticIP: "🔥 EXAM FOCUS: Regional or global | Charged when not in use | Can be promoted between regional and global",
  InstanceTemplates: "🔥 EXAM FOCUS: Immutable | Used for MIGs | Define machine type, network, metadata | Cannot update, must create new version",
  PreemptibleVMs: "🔥 EXAM FOCUS: 24hr max runtime | No live migrate | 80% cheaper | No SLA | 30-second termination notice",
  SpotVMs: "🔥 EXAM FOCUS: New version of preemptible | Variable pricing | No maximum runtime | Better for flexible workloads",
  LiveMigration: "🔥 EXAM FOCUS: Automatic maintenance | No downtime | Not available for preemptible VMs | Can be disabled",
  ComputeBilling: "🔥 EXAM FOCUS: Per-second billing | Sustained use discounts | Committed use discounts | Preemptible discounts",

  // Discounts
  Discounts: "🔥 EXAM FOCUS: Sustained use (automatic), Committed use (1-3 year), Preemptible/Spot pricing | Understand when each applies",
  SustainedUse: "🔥 EXAM FOCUS: Automatic | Starts at 25% month usage | Increases to 30% discount | No action needed",
  CommittedUse: "🔥 EXAM FOCUS: 1 or 3 year commitment | Up to 70% discount | Charged even if not used | Plan carefully",

  // Instance Groups
  InstanceGroups: "🔥 EXAM FOCUS: MIG vs Unmanaged | MIG features: auto-healing, auto-scaling, rolling updates | Regional for HA",
  ManagedIG: "🔥 EXAM FOCUS: Template-based | Auto-scaling based on CPU/load/metrics | Health checks | Rolling updates",
  MIGFeatures: "🔥 EXAM FOCUS: Auto-healing, Auto-scaling, Regional failover, Load balancing, Rolling updates, Instance template based",
  UnmanagedIG: "🔥 EXAM FOCUS: No auto-scaling/healing | Manual management | Used for legacy apps | Can contain different instance types",

  // App Engine
  AppEngine: "🔥 EXAM FOCUS: Standard vs Flexible environments | Auto-scaling | Traffic splitting | Free tier available",
  StandardEnv: "🔥 EXAM FOCUS: Sandbox environment | Faster scaling | Language restrictions | Free daily quota | No SSH access",
  FlexibleEnv: "🔥 EXAM FOCUS: Docker containers | Longer startup | Any runtime | No free quota | SSH access available",
  AEComponents: "🔥 EXAM FOCUS: Services (microservices) | Versions (deployment units) | Traffic splitting | Deployment options",
  TrafficSplitting: "🔥 EXAM FOCUS: IP-based, Cookie-based, Random | Gradual rollouts | A/B testing | Version management",

  // GKE
  GKE: "🔥 EXAM FOCUS: Managed Kubernetes | Node pools | Auto-scaling | Auto-upgrade | Auto-repair | Private clusters",
  GKEClusters: "🔥 EXAM FOCUS: Zonal vs Regional | Private clusters | Node pools | Master version management",
  GKEWorkloads: "🔥 EXAM FOCUS: Pods, Deployments, Services | StatefulSets | DaemonSets | Jobs/CronJobs",

  // Cloud Functions
  CloudFunctions: "🔥 EXAM FOCUS: Event-driven | Triggers (HTTP, Cloud Storage, Pub/Sub) | Auto-scales | Pay-per-use",
  CF2ndGen: "🔥 EXAM FOCUS: Longer runtime | Larger instances | Multiple revisions | Concurrency | Min instances",

  // Storage
  Storage: "🔥 EXAM FOCUS: Block (Persistent Disk), File (Filestore), Object (Cloud Storage) | Use cases for each",
  CloudStorage: "🔥 EXAM FOCUS: Storage classes | Lifecycle policies | Object versioning | IAM & ACLs | Signed URLs",
  StorageClasses: "🔥 EXAM FOCUS: Standard (hot), Nearline (30-day), Coldline (90-day), Archive (365-day) | Access frequency",
  ObjectOps: "🔥 EXAM FOCUS: Versioning, Lifecycle rules, Retention policies | Transfer options | Access control",

  // IAM
  IAM: "🔥 EXAM FOCUS: Roles (Basic, Predefined, Custom) | Service Accounts | Resource hierarchy | Principle of least privilege",
  IAMRoles: "🔥 EXAM FOCUS: Basic (Owner, Editor, Viewer), Predefined (granular), Custom (specific permissions)",
  ServiceAccounts: "🔥 EXAM FOCUS: Default vs User-managed | Keys (rotation) | Roles and permissions | Best practices",
  AccessControl: "🔥 EXAM FOCUS: IAM conditions | Resource hierarchy | Organization policies | Service account best practices",

  // Databases
  Databases: "🔥 EXAM FOCUS: OLTP (Cloud SQL, Spanner) | OLAP (BigQuery) | NoSQL (Firestore, Bigtable) | Choose correctly",
  CloudSQL: "🔥 EXAM FOCUS: MySQL, PostgreSQL, SQL Server | HA configuration | Backup/restore | Maintenance windows",
  CloudSpanner: "🔥 EXAM FOCUS: Global, horizontal scaling | Strong consistency | Mission-critical | High cost",
  Firestore: "🔥 EXAM FOCUS: Document DB | Real-time updates | Strong consistency | Mobile/web | Offline support",
  Bigtable: "🔥 EXAM FOCUS: Wide-column NoSQL | Petabyte scale | High throughput | Time-series data | IoT",
  BigQuery: "🔥 EXAM FOCUS: Serverless data warehouse | SQL queries | ML integration | Flat-rate vs on-demand pricing",

  // Networking
  Networking: "🔥 EXAM FOCUS: VPC (subnet, firewall) | Load Balancing | Cloud CDN | Cloud Interconnect | VPN",
  VPC: "🔥 EXAM FOCUS: Auto vs Custom mode | Shared VPC | VPC Peering | Firewall rules | Private Google Access",
  FirewallRules: "🔥 EXAM FOCUS: Ingress vs Egress | Priority | Service accounts | Tags | Default rules",
  SharedVPC: "🔥 EXAM FOCUS: Host vs Service projects | Cross-project networking | IAM roles needed",

  // Operations
  Operations: "🔥 EXAM FOCUS: Monitoring, Logging, Error Reporting, Trace, Debugger | Workspace concepts",
  Monitoring: "🔥 EXAM FOCUS: Metrics, Alerts, Uptime checks | Workspace | Dashboard | Alerting policies",
  Logging: "🔥 EXAM FOCUS: Log types | Export | Retention | Audit logs | Log-based metrics",

  // Organization
  Organization: "🔥 EXAM FOCUS: Resource hierarchy | Folders | Projects | IAM inheritance | Billing account structure",
  ResourceHierarchy: "🔥 EXAM FOCUS: Organization → Folders → Projects → Resources | IAM inheritance | Policy inheritance",
  BillingAccounts: "🔥 EXAM FOCUS: Self-serve vs Invoiced | Budgets & Alerts | Export billing data | Project linking",
  IAMPractices: "🔥 EXAM FOCUS: Least privilege | Use groups | Regular audits | Service account management"
};

export default GCP_TOOLTIPS;