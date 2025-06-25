![image](https://github.com/user-attachments/assets/e2cced0b-264c-4048-9746-1348d83851f0)

**Node.js Hello World App on AWS ECS (Fargate) with GitHub Actions CI/CD**

This project we can see how to deploy a Dockerized Node.js application to **Amazon ECS (Fargate)** using **GitHub Actions** as the CI/CD pipeline.


Project Structure


├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
└── .github/
    └── workflows/
        └── aws.yml


Our Application

A simple Node.js app which is used for just testing our cicd pipeline.
"Hello from Node.js deployed via CI/CD" this text will be shown when we acess the applciation 

The main thing about this project is you just push new changes to your github on main branch it will automatically deploy the changes by using cicd of pipeline.
**Here we change the text colour in code and it will direcly shown in our appliction**

"Accessible on port 3000"



**what we are using in this project**

- Node.js (our code)
- Docker
- AWS ECR (Elastic Container Registry)
- AWS ECS (Fargate)
- GitHub Actions
- OIDC IAM Role (secure auth)



**CI/CD Workflow Summary**
1. On push to the 'main' branch
2. GitHub Actions:
   - Builds Docker image
   - Pushes it to Amazon ECR
   - Updates ECS Service (node-app-service)
3. ECS Fargate pulls the new image and redeploys


**IAM & AWS Setup**
- **ECR Repository**: 'node-app'
- **ECS Cluster**: 'node-app-cluster'
- **Task Definition**: 'node-app-task'
- **ECS Service**: 'node-app-service'
- **IAM Role for OIDC**: not mention here due to security 
- **AWS Region**: 'ap-south-1'

---

**How we Deploy**

1. Push code to 'main' branch:

git add .
git commit -m "Deploy update"
git push origin main


2. GitHub Actions will:
- Build + push Docker image to ECR
- Trigger ECS service to redeploy with new image
3. Verify in ECS Console or visit Public IP:3000




