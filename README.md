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

6. If you get some kind of timeout errors it is a problem with the Mongo DB, it usually happens
   when your network is not added in the db, so log in the db, navigate to Database & Network Access and then
   navigate to IP Access List and add your IP, good practice is to log in the mongo account before starting
   to work because it will be easier to start the project and you will have no errors with the db (95% of the time).
   If when adding your IP you get something like 200 IP address already, delete some of the old IP's so that you
   can add you IP.
