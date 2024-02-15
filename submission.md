## What I learned from Tutorial

Starting with the introduction, GitHub is a web-based platform to store, manage and share code among collaborators.
It is a centralised platform for version control which helps to track any changes made to their code.

Following introduction, I setup GitHub account with the organization mail id. And learned creating and managing a repository.

One of the important features of GitHub is cloning remote repo to local repo.
Command to clone a repo: git clone <repository URL>
After repo is cloned, we can change into that directory and start working.

Another key feature is 'pull requests' which allows you to propose changes and collab with others.
We clone a repo, create a new branch and start making changes to the code. After saving files, we can add, commit and push files to GitHub.
Then a pull request has to be created which lets others to review the changes made to the code. When changes are approved, they can be merged with the original codebase.
If there are any conflicts between pull request branch and target branch, they need to be resolved before proceeding to merge.
To merge pull request, click on 'Merge Pull Request' button on pull request page. Once merged, pull request will be closed and that branch can be deleted by clicking on 'Delete branch'.
Finally, update the local repo with the command: git pull

# Best Practices:

-->Branching Strategy: 1.master/main branch - Primary branch
2.development branch - Code changes from feature branch are merged into this
3.feature branches - For specific features
4.release branch - For final testing and bug fixing to release
-->Pull Requests: While creating a pull request, one should mention like what changes are made? Which tickets are
relevant? Who needs to review? etc.
-->Code Reviews: While reviewing, need to ensure that code is free of bugs, security vulnerabilities and performance
issues. Should also make sure that it sticks to project's style and standards.
-->Continous Integration and Deployment: CI/CD ensures that testing, build and deployment are done automatically
using tools like GitHub Actions or Jenkins. It reduces the risk of human error and ensures quick and reliable deployment.
-->Documentation: Ensures code is maintainable and understandable by all team members. Should include details like
installation, configuration, software usage, codebase's architecture and design decisions.
-->Issue Tracking: GitHub has in-built issue tracking system which allows team members to create, assign and track
issues. Ensures bugs and other issues are resolved efficiently.

## Challenges Faced

-->Lack of Intuitive understanding of pull requests.
-->Conflicts resolving: Confused about how conflicts are resolved like which code will which code.

After understanding how pull requests work from different sources on web, I also understood how conflicts resolving works.
