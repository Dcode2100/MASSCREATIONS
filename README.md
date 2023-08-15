1. regarding supabase auth -> To add additional user data during sign-up, you can provide the data in the data property of the options object when calling the supabase.auth.signUp method. Here's an example:

  // NO NEED TO SET THE USER DATA IN THE SEPERATE TABLE SUPABASE ALREADY HAVE META DATA SECTION WHICH STORES THIS EXTRA DATA PASED IN A TABLE WITH THE USER ID AND PASS.  TO ACCESS OR UPDATE THE DATA BELOW IS THE METHOD PROVIDED BY SUPABASE
    // const { data: { user } } = await supabase.auth.getUser()
    // const { data, error } = await supabase.auth.updateUser({
    //   email: "new@email.com",
    //   password: "new-password",
    //   data: { hello: 'world' }
    // })
