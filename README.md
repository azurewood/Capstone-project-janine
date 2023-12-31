# Capstone-project
# StaffFuel

StaffFuel is a food application for hospitals that offers healthy food options for hospital staff and eliminates the need for its employees to wait in line. As a nurse, I find that with the short break times and long queues of people waiting to order food at the cafeteria can lead to frustration, going to other places to buy unhealthy food options, and having shorter break times. 

This app is designed to encourage hospital staff to make nutritious food choices, leading to improved overall health, enhanced performance and improved focus and productivity in the work place, which can in turn, positively impact patient care and outcomes. Because hospital staff also work long stressful hours, it may be challenging to maintain a healthy diet, and so a healthy food app can assist them in making informed choices and reduce their risk of cardiovascular diseases, such as diabetes and heart disease. The app offers the benefits of convenience and saving time as hospital staff working in high-stress environments may struggle to find time for meal planning and preparation. Having a healthy food app can provide staff with easy and healthier food recipes to choose from and saves time and effort, making staff more likely to choose healthy food options. 

StaffFuel will only collect essential data from hospital staff needed to run the service, such as employee ID number, full name, email and payment. 

Although there are some healthy food apps that have been implemented in hospitals worldwide, they only seem to cater for the patients only and not the hospital staff. Thus, this is where StaffFuel comes in

## Objectives
1) Promote healthy eating: StaffFuel is designed for staff. We believe that providing healthy food options for hospital staff will have a positive impact on their physical, emotional and mental performance as well as patient care and outcomes. In order to retain a healthy workforce, having healthy food options is where it starts. We cannot forget about our wonderful staff who do a good job looking after our patients, so to continue this we must look after them too.
2) Foster a healthy work culture: StaffFuel will foster a sense of community engagement. Promoting wellness challenges, sharing success stories and facilitating social interactions can lead to a supportive environment where staff motivate and inspire each other to lose weight, make healthier choices and create healthier behaviours.
3) Increase awareness and education about the importance of healthy eating: It is essential staff understand the importance of healthy eating and how it can impact on health and job performance. The app will provide
educational conetent and tips on nutrition, helping staff members make informed choices and have a better understanding of healthy eating and why it is important.
4) Promote convenience and accessibility: Because hospital staff work long hours, it is important healthy food options are easily accessible. It will include features such as meal pre-ordering and a menu with healthy
food options.

## TECHNOLOGIES/TOOLS 
1. React.js
2. Next.js
3. Express.js
4. MongoDB
5. Vercel or Docker
6. Postman
7. Figma for UI design

## Software Development Phase 
``` mermaid
flowchart TD;
 A[Plan Capstone Project] -->B(Analysis - gather specific details)
 B -->C(Design & prototype) 
 C -->c(BackEnd) 
 C -->d(FrontEnd)
 d--> D(Develop software);
 c -->D(Develop software)
 D --> E(Testing);
 E--> F(Deployment);
 F--> G(Ongoing Maintenance/updates);

``` 
## User Flow Diagram
``` mermaid
flowchart TD;
A[Start] -->B(Landing page)
B(Acccount login) -->C(Successful Login)
C(Dashboard Page) -->D(Search filter bar)
C-->S(Shopping Cart)
D-->E(Filtered results)
E-->G(Meal details)
G-->f(Add to favourites)
f--favorites-->S
G-->H(Add to cart)
H-->S
C-->J(Auto/manual Autoslider)
C--Popular Meal Options-->S(Shopping cart)
S-->P(Payment)
P--confirmation of payment-->L
C-->L(Logout)
```
## How to run the program
```
1. The code is available on GitHub. Open a terminal and clone the repository from GitHub using the following command 'git clone' URL 
2. Make sure you have the relevant dependencies installed, such as node.js, express.js, mongoose
3.Make sure you have MongoDB installed and running on your machine. If not you can download it from the MongoDB official website. Follow the installation instructions for your OS. 
4. The project contains 2 folders - a frontend and backend folder, open two terminals to start the application.
5. For the frontend, go into the frontend folder and run the frontend by using 'npm run dev'.
6. For the backend, go to the server folder and run 'npm start'.
7. For the frontend, the application will be accessible at 'http://localhost:3000'.
8. If successful, a landing page with a logn and register button should show up. If nothing happens, it was not successful. 
```