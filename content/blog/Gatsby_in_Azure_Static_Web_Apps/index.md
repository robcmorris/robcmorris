---
title: 'Tutorial: Setting up a Free Gatsby blog in Azure Static Web Apps with a custom domain name'
date: "2022-04-24"
description: "My Hello World Project for this website. Gatsby blog in Azure Static Web Apps with CI/CD pipline based on GitHub deployments."
---

I spent the time setting up a [Gatsby](https://www.gatsbyjs.org) blog, hosted in [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview), with a CI/CD workflow linked to run automatically when you update your [GitHub](https://github.com) repository, all for free so you don't have to.

The whole process its pretty easy.

## Prerequisites

- An [Azure account](https://azure.microsoft.com/) with an active subscription.
- A [GitHub account](https://github.com).
- [Node.js](https://nodejs.org) installed.
- Git
- I'm using [ArchCraft Linux](https://archcraft.io/) but most  commands are OS independent.

## Setup Gatsby Blog Starter App

Gatsby has a bunch of [Starters](https://www.gatsbyjs.com/starters/) you can use to get going. I used the [Gatsby Blog Starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/).

Create a Gatsby app using the Gatsby Command Line Interface (CLI):

1. Open a terminal
1. Use the [npx](https://www.npmjs.com/package/npx) tool to create a new app with the Gatsby CLI. This may take a few minutes.

   ```bash
   npx gatsby new gatsby-starter-blog https://github.com/gatsbyjs/gatsby-starter-blog
   ```

1. Navigate to the newly created app

   ```bash
   cd gatsby-starter-blog
   ```

1. Initialize a Git repo

   ```bash
   git init
   git add -A
   git commit -m "initial commit"
   ```

## Push your application to GitHub

You need to have a repository on GitHub to create a new Azure Static Web Apps resource.

1. Create a blank GitHub repository (don't create a README) from [https://github.com/new](https://github.com/new) named **gatsby-starter-blog**.

1. Next, add the GitHub repository you just created as a remote to your local repo. Make sure to add your GitHub username in place of the `<YOUR_USER_NAME>` placeholder in the following command.

   ```bash
   git remote add origin https://github.com/<YOUR_USER_NAME>/gatsby-starter-blog
   ```

1. Push your local repository up to GitHub.

   ```bash
   git push --set-upstream origin main
   ```

## Deploy your Gatsby Starter Blog

Next lets add our repo as a Static Web App in Azure.

### Create the application in Azure

1. Navigate to the [Azure portal](https://portal.azure.com)
1. Select **Create a Resource**
1. Search for **Static Web Apps**
1. Select **Static Web Apps**
1. Select **Create**
1. On the _Basics_ tab, enter the following values.

    | Property | Value |
    | --- | --- |
    | _Subscription_ | Your Azure subscription name. |
    | _Resource group_ | **my-gatsby-group**  |
    | _Name_ | **gatsby-starter-blog** |
    | _Plan type_ | **Free** |
    | _Region for Azure Functions API and staging environments_ | Select a region closest to you. |
    | _Source_ | **GitHub** |

1. Select **Sign in with GitHub** and authenticate with GitHub.

1. Enter the following GitHub values.

    | Property | Value |
    | --- | --- |
    | _Organization_ | Select your desired GitHub organization. |
    | _Repository_ | Select **gatsby-starter-blog**. |
    | _Branch_ | Select **main**. |

1. In the _Build Details_ section, select **Gatsby** from the _Build Presets_ drop-down and keep the default values.

Now I used my own info below, but this is what I ended up with:

![Azure Create](./create-static-web-app.png)

### Review and create

1. Select the **Review + Create** button to verify the details are all correct.

1. Select **Create** to start the creation of the App Service Static Web App and provision a GitHub Actions for deployment.

1. Once the deployment completes click, **Go to resource**.

1. On the resource screen, click the _URL_ link to open your deployed application. You may need to wait a minute or two for the GitHub Actions to complete.

## Development

Now its time to develop and push changes to our repo.

1. Back in your terminal window we should still be in your **gatsby-starter-blog** folder.

1. We can use the [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) to run a development environment. Lets install it:

   ````bash
   npm install -g gatsby-cli
   ````
1. Now run the development environment:
   
   ````bash
   gatsby develop
   ````

1. After a short moment you should be prompted that "You can now view **gatsby-starter-blog** in the browser":

   ![Gatsby CLI](./gatsby-cli.png)

1. Open up your browser and navigate to http://localhost:8000/ and you should have a live reloading version of your site that automatically updates with changes.

1. At this point you can start creating blogs and customizing the code of your site. Once you're happy with everything add the changes to GitHub.

   ````bash
   git add -A
   ````
1. Now add a commit message

   ````bash
   git commit -m "Initial Commit"
   ````
1. Check your GitHub for a running Action.
   ![GitHub Actions](./github-actions.png)

## Connect Custom Domain

You you should now have a site up and running and ready to add your custom domain name. Head to Custom Domain Names.

You can find this in your Azure Portal Under: **All 
Services > Web > Static Web Apps > gatsby-starter-blog > Custom Domain Names**

From here you can select Custom Domains and hit **Add**.

![Custom Domains](./custom-domains.png)

With the free plan they let you add two domain names. That will be your Apex domain and your WWW. 

This step will be dependent on your Domain Registrar but the directions on the are available in the [Set up a custom domain in Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain-external) documentation.


## Conclusion

This process was pretty simple to setup and gives you a glimpse into the world of Progressive Web Apps, Cloud Services, and CI/CD.

When you link your GitHub in Azure and set your repository you'll notice that it adds a **workflow** automatically that will run the commands needed to start the Gatsby Start Blog app we setup.

![Azure Workflow](./azure-workflow.png)

I've tested out a few different Static Site Generators in Azure and had them set up in minimal time. The workflow is fun and make creating blogs easy.

If you have any question, feel free to hit me up on [GitHub](https://github.com/robcmo/) or [Twitter](https://twitter.com/robcmo).

Hello, World! 👋