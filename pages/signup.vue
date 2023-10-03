<script setup lang="ts">

</script>


<template>

    <title>Sign In</title>
    
    <div class="container">
        <div class="card">

            <div class="card_title">
                <h1>Welcome to ____!</h1>
                <span>Already have an account? <NuxtLink to="login">Sign In</NuxtLink></span>
            </div>

            <div class="form">
                <form action="/api/signup" method="post">
                    <input type="text" name="username" id="username" placeholder="UserName" />
                    <input type="email" name="email" placeholder="Email" id="email" />
                    <input type="password" name="password" placeholder="Password" id="password" />
                    <button type="submit" disabled>Sign Up</button>
                </form>
            </div>

            <div class="card_terms">
                <input type="checkbox" name="" id="terms"> 
                <span>I have read and agree to the 
                    <a href="">Terms of Service</a>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    width: 100%;
    text-align: center;
}


.container {
    height: 100vh;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle farthest-corner at 10% 20%,
        var(--accent) 20%,
        var(--secondary) 90%);
}

.card {
    border-radius: 10px;
    /* box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3); */
    box-shadow: 0 5px 10px 0 rgba(120, 120, 120, 0.75);

    width: 400px;
    height: 400px;
    background-color: var(--background);
    padding: 10px 30px;
}

.form input {
  margin: 10px 0;
  width: 90%;
  background-color: var(--text);
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 8px;
  color: var(--background);
}

.form button {
  background-color: var(--accent);
  color: var(--text);
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 8px 15px;
  width: 100%;
}

.card_terms {
  display: flex;
  align-items: center;
  padding: 10px;
}

.card_terms input[type="checkbox"] {
  background-color: #e2e2e2;
}

.card_terms span {
  margin: 5px;
  font-size: 13px;
}

.card a {
  color: var(--primary);
  text-decoration: none;
}
</style>