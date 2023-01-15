# Kingdom Animalia

The Kingdom Animalia is the scientific name for the Animal Kingdom which is traditionally classified into few classes, eg.

- Mammals
- Arthropoda
- Aves
- Reptile
- Amphibian
- Fish

# Implementation

### Animalia

The `Animalia` class in `index.js` is an **abstract** class which represents the entire Animal kingdom, with its properties as the basic characteristics of all animals in the Kingdom Animalia, like their ability to move, eat, repoduce, respire tec.

This class is never initialized but allows other animal classes to inherit the basic properties it needs from it.

Some properties are also encapsulated in this class like the `organForMovement` and `typeBasedOnFood` this is because they wouldn't be called outside the class.




### Arthropoda

The `Arthropoda` class inherits from the `Animalia` class with additional methods like the ability to lay eggs and some methods like the `reproduce` and `move` methods overrided in this child class (`Polymorphisim`). showing the method of movement for the `Arthropoda` class.

Also the `layEggs` property is encapsulated as they will only need to lay eggs when we want them to in the `repoduce` method inside the class.




### Mammal

The `Mammal` class inherits from the `Animalia` class. The `Mammal` class is able to produce milk for its young ones, give birth and move differently with it's legs or limbs.




### Ave

The `Ave` class inherits from the `Animalia` class. It repoduces by laying eggs. The eggs can either be soft or hard. They also have the ability to fly with their wings.




### Reptile

They are also inherited from the `Animalia` class. Similar to `Ave` they reproduce too by laying eggs. However they some of them move with their limbs others like snakes have no legs and therefore move with their body. They also possess a backbone.




### Amphibian


The `Amphibian` class inherits from the `Animalia` class too. They have the capability to live on both land and water. They are very similar to reptiles and can respire both on land and water.





### Fish

The `Fish` class also inherits from the `Animalia` class. But they live in water and therefore have fins for movement in water. They also repoduce by laying eggs.





## Tests

I have also written some tests and examples for all the classes at the end of the programme.

You can go through them then run `$ node index.js` in the terminal of the project folder to see the results.


I hope you like it ;)


