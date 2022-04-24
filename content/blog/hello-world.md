---
author: "Rob Morris"
title: "Hello, World!"
date: 2022-04-23
description: "How I set this website for free in Azure with Hugo as a Static Web App."
tags: ["Azure","HTML","CSS"]
featured_image: /featured-placeholder.jpg
---

My first blog post, a "Hello, World!". Let me tell you how I set this website up for free in Azure as a static web app.<!--more-->

## Why Azure?

I wanted a simple blog site where I can post quick articles & tutorials of things that interest me and show off some cool things I've learned along the way. I tried out a couple different Content Management Systems and hosting options before finally deciding to use Azure. The big problem I had was that I didn't want to spend any money on hosting when there are free options available.

I started with looking into using a Raspberry Pi I had laying around. I could easily setup Nginx & MariaDB on bare-metal or Docker and get a website served up, but that left me with having to setup a reverse proxy or tunnel to expose that device inside my home and I'd rather host the website outside my house.

Then I started playing with some Free-Tier Cloud options that were available like Oracle and AWS, but most of the tests I did involved setting up Ubuntu Server 20.04 LTS, with a few different web server setups. I found that even thought you can technically run a website in free tier options, the resources available make you question whether its worth the time.

At this point I knew I would have to compromise. If I wanted to reliably host this site without paying for it, I'd have to do without things Databases and Content Management Systems because of the resource tax. Luckily I remembered setting up my fiances website in Azure as a Static Web App. Check out the [Overview](https://docs.microsoft.com/en-us/azure/static-web-apps/overview).

> When you create an Azure Static Web Apps resource, Azure interacts directly with GitHub or Azure DevOps to monitor a branch of your choice. Every time you push commits or accept pull requests into the watched branch, a build is automatically run and your app and API is deployed to Azure.

Basically all we need to do is setup a web app in a GitHub Repository and anytime we make changes, Azure will run that code and serve it up as a website that we can reach. The free tier of this allows us to connect a domain and even generates free SSL certificates for us automitically. So, now we just need to create or find a webapp to put in that GitHub repository.

## Why Hugo?

While I have some experience with coding websites, it's very minimal. I know that coming up with a lot of custom code just to make a blog isn't worth the time when there are so many great project already available. Without the use of a database, I started looking into Static Site Generators. 

One of the ones I knew that was very popular was Hugo.

>What Does Hugo Do?
>In technical terms, Hugo takes a source directory of files and templates and uses these as input to create a complete website.

Basically you pick a template, and then you create a folder structure for your site. Once you create the structure you can create your pages in Markdown and once done, it will generate a HTML pages based off the template and strucure you set up.

This paired with an Azure Static Web App linked to our GitHub allows us to create a pretty neat workflow for create a blog without needing a CMS or database.

## Set it up all up

Create Azure Static Web App.
Free Option.
Link GitHub Account.
Clone Repo
Install Hugo
Clone Theme
Change settings.
Setup workflow.