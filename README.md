##  Jobizz App

##Overview
Jobizz is a mobile application designed to help users find job opportunities. Users can log in with their name and email, view featured and popular job listings, and explore job details.

##Usage
Login:

Enter your name and email on the login screen.
Press the "Log in" button to navigate to the home screen.
Home Screen:

View your name and email at the top of the screen.
Browse through the list of featured jobs.
Explore popular job listings.
Components
LoginScreen
Handles user login and navigation to the home screen.

Props: None
State:
name: User's name.
email: User's email.
HomeScreen
Displays user details and job listings.

Props:
route: Contains the user's name and email passed from the LoginScreen.
State: None
FeaturedJobCard
Displays information about a featured job.

Props:
job: An object containing details of the job (title, company, salary, location).
PopularJobCard
Displays information about a popular job.

Props:
job: An object containing details of the job (title, company, salary, location).
 
 
