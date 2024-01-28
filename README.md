# react-redux-saga
Making a small project with add to cart , remove to cart, handle asynchronous api's for actions make state container for global store with redux

# CI/CD PIPELINES 
1. CI/CD stands for continues integration and continues delivery
2. we will use github action to set up CI/CD pipeline to deploy your project to AWS EC2.
3. It will automatic test, buil and deploy to aws ec2 after every changes commit and merged.

   - step-1 - login to aws console and create aws ec2 instance
   - step-2 - loign on aws ec2
   - step-3 - install nodejs and nginx
             ` sudo apt update
               curl -fsSL https://deb.nodesource.com/setup_lts.x  | sudo -E bash -
               sudo apt-get install nodejs
               sudo apt-get install nginx
               
