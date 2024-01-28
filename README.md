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
               sudo apt-get install nginx`
     - step 4- push your projects to github 
     - step5 - create github action 
               ` it will create a yml file under .github/workflow
                 just edit yml file acording to your project

      - step 6- set up github action on ec2
               Not start with sudo 
               After GitHub configuration run this command
               sudo ./svc.sh install
               sudo ./svc.sh start

      - step 7- install pm2 and run backend in background
               npm i pm2 -g 
               pm2 start server.js 
      - step 8- add  the command in yml script of project to restart after every commit 
               -run: sudo pm2 restart server.js
      - step 9- config nginx and restart it 
               ` Cd /etc/nginx`
               `Cd sites-available`
               `sudo nano default`


   ```
        location /api/ {
        proxy_pass  http://localhost:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         }
   ```
   
-  `
    sudo systemctl restart nginx
   ` 

- if you want to add enviroment variable then goto settings then click on secret and variable then actions -- then -- click create new repo envriroment
- and set production name and values
  - to check enviroment variable on ubuntu but this file is hidden then type this command into terminal ` ls -la `
- to start express server then go to root directory
     - ``` pm2 restart server.js --name=backendApi ```
                 
               
