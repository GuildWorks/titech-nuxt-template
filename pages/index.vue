<template>
  <div>
    <h1>Welcome!</h1>
    <NLink to="/about">About Page</NLink>
    <h2>PostsList</h2>
    <ul>
      <li><NLink to="/posts/balut">balut</NLink></li>
      <li><NLink to="/posts/whereIsIt">whereIsIt</NLink></li>
      <li><NLink to="/posts/how">how</NLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page'
  }
}
</script>
