function Hero(heroName, realName) {
    this.realName = realName;
    this.heroName = heroName;
  }
  const superman = new Hero("Superman", "Clark Kent");
console.log(superman);