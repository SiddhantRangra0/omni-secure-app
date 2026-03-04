# Omni Secure Application

A sample Node.js application for demonstrating DevSecOps practices.

## Security Features
- Helmet.js for security headers
- Non-root user in container
- Health checks
- Dependency scanning
- Container vulnerability scanning

## CI/CD Pipeline
This repository uses AWS CodePipeline with:
- SAST scanning (SonarCloud)
- SCA scanning (Snyk)
- Container scanning (ECR)
- Policy as Code (Checkov)