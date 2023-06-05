Nextjs! Uses the latest Apollo Server v4 (with client) and Nextjs 13 integration.

To Students:

  (1) Refer to the package.json for scripts
  
    a. npm run dev -> runs dev env at port 3000
    
    b. npm run start -> runs prod build
    
    c. npm run build -> builds prod
    
  (2) To integrate authentication consider the following.
    a. [Middleware documentation and cookies for jwt storage](https://nextjs.org/docs/pages/building-your-application/routing/middleware)
    b. [NextAuth (recommended)](https://next-auth.js.org/)
    
  (3) Restructure as you please. This is my solution that separates the server/client for easier understanding, however, the reality is Nextjs and serverside rendering combines both client and server and the differentiation between which files are serverside/clientside aren't as obvious especially if it's a large application.
