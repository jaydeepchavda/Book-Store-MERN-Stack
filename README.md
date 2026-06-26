# 📚 Book Store MERN Platform – Production Style DevOps Deployment

A production-oriented deployment of a full-stack MERN Book Store application demonstrating modern DevOps practices, containerization, Kubernetes orchestration, and cloud-ready deployment architecture.

---

# Project Overview

This project focuses on deploying and managing a MERN stack application using a production-style DevOps workflow. The objective is to simulate how a real engineering team packages, deploys, and manages a full-stack application from local development to Kubernetes.

The application consists of:

* React (Frontend)
* Node.js + Express (Backend)
* MongoDB (Database)

---

# DevOps Workflow

```text
Developer
    │
    ▼
Git & GitHub
    │
    ▼
Docker Image Build
    │
    ▼
Docker Hub
    │
    ▼
Kubernetes (Minikube)
    │
    ▼
Frontend + Backend + MongoDB
```

---

# Architecture

```text
                    User
                     │
                     ▼
             Frontend Service
                     │
                     ▼
              React Frontend Pod
                     │
                     ▼
             Backend Service
                     │
                     ▼
           Node.js Backend Pod
                     │
                     ▼
            MongoDB Service
                     │
                     ▼
               MongoDB Pod
```

---

# Project Structure

```text
bookstore-devops/
│
├── frontend/
├── backend/
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── mongodb-deployment.yaml
│   └── mongodb-service.yaml
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

# Technologies Used

### Frontend

* React
* Vite
* Axios

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB

### DevOps

* Git
* GitHub
* Docker
* Docker Hub
* Kubernetes
* Minikube
* kubectl

---

# DevOps Features

* Multi-container application architecture
* Dockerized frontend and backend services
* MongoDB container deployment
* Kubernetes Deployments and Services
* Internal service-to-service communication
* Namespace-based deployment
* Container networking
* Image versioning
* Docker Hub image registry
* Cloud-ready deployment structure

---

# Deployment Process

1. Clone the repository
2. Build Docker images
3. Push images to Docker Hub
4. Deploy MongoDB
5. Deploy Backend
6. Deploy Frontend
7. Verify Pods and Services
8. Access application through Kubernetes Service

---

# Skills Demonstrated

* Linux-based development workflow
* Git branching and version control
* Docker image creation and container lifecycle management
* Multi-container application deployment
* Kubernetes resource management
* Container networking and service discovery
* Deployment troubleshooting and debugging
* Production-oriented DevOps practices

---

# Future Enhancements

* GitHub Actions CI/CD pipeline
* AWS ECR integration
* Amazon EKS deployment
* Terraform infrastructure provisioning
* NGINX Ingress Controller
* HTTPS with TLS
* Horizontal Pod Autoscaler
* Prometheus & Grafana monitoring
* Centralized logging
* Production secrets management

---

# Learning Objective

This project was built to gain hands-on experience with real-world DevOps workflows by taking an existing MERN application through containerization, orchestration, and cloud-ready deployment practices similar to modern production environments.
