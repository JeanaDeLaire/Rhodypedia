# Welcome to Rhodypedia

##### View the live site here... https://jeanadelaire.github.io/front-project-2/
##### Link to backend: https://lit-dusk-51205.herokuapp.com/

This project was completed for a full-stack development training course. Motivation to create this project originates in the idea that Rhode Island offers many obscure outdoor attractions. The state also has a lot of quirks. Who better to share these secrets than locals? This full-stack application is meant to be a place for many users to share resources and create a digital center for people to communicate about state attractions.

### Back-end Tech:

The database runs on Rails with a one to many relationship between users and sites. Each posted resource is a user owned entity and may only be edited and deleted by the original creator, or database manager.

![Entity Relationship Diagram](https://user-images.githubusercontent.com/41646757/49703826-1a723480-fbd8-11e8-80bc-079a54a6e523.png)

### Front-end Tech:
The front-end utilizes HTML5, CSS and Bootstrap. Javascript and jQuery handle site interaction and help present data to users. Handlbars displays the
information from the database through a grid template. The searchbar filters through keywords through javascript and pushing in relevant matches into a new array which is passed through handlebars.

![Original Wireframes](https://user-images.githubusercontent.com/41646757/49703724-a71bf300-fbd6-11e8-8212-2e695efb4e7d.png)

## User Stories
- As a user I should be able to sign up and sign in to create sites and comments.
- As a user I should be able to view all entries.
- As a user I should be able to edit my previous entries.

##
This project was created for the PVD 4 Cohort project for the Web Development Immersive
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
