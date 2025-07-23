class yourHero{
	constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
    }
    
    decideAttack(){
    
	switch(this.type){
    
  case"mago":
  return "usou magia"
  break

  case"guerreiro":
  return "usou espada"
  break
  
  case"monge":
  return "usou artes marciais"
  break
  
  case"ninja":
  return "usou shuriken"
  break

default:
  return "usou item desconhecido"
 	 }
  }
  
  writing(){
    console.log(`O ${this.type} ${this.name} ${this.decideAttack()} para atacar`)
  }
  
  }
  
  
 let chosenHero = new yourHero("Jurandir", 45, "monge")
  
 chosenHero.writing()
  
  
  