1. Run npm i just to be sure that all dependencies are up to date and installed.

2. Main repository (FittestAppProject): has the backend and front end.
   When navigating in the terminal to it, we can start the backend and front end
   simultaneously using the command "npm run dev".

3. Second repository or client repository, navigate from the main repo
   just layer down, there we can only start the front end using the
   command "npm run dev", for now you will only start the server from the
   main repo.

4. When pushing your changes:
   - git add .
   - git commit -m "Message on what has been changed"
   - git push origin branch-name
   - git push bitbucket branch-name

My practice is to push the code both to github and bitbucket.
After pushing go to the bitbucket to create a pull request or
check the link that you will get in the terminal after pushing.

5. After pushing on some branch, when you will have new task, stay
   on the last branch and do git fetch, that way you will se the new branch
   and if some changes has been made.
