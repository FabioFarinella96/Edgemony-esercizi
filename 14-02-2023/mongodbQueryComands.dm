COMANDI PRINCIPALI QUERY MONGO DB 

n.b. comando ENTER per eseguire la query 

shortcut per multiriga => SHIFT + ENTER 

 

CREARE UN DATABASE 

 

use <nome-database> 

n.b. il db non sarà visibile nel sistema fino a quando non verrà creata una collection al suo interno 

Se il db esiste già 

 

use <nome-database> permette lo switch fra database 

 

MOSTRARE TUTTI I DATABASE 

show databases 
 

 
MOSTRARE IL DATABASE CORRENTE 

db 

 

MOSTRARE LE COLLECTION DI UN DATABASE 

show collections 

 

CREARE UNA COLLECTION 

db.createCollection('posts') 
 


CANCELLARE UN DATABASE 

db.dropDatabase() 



INSERIRE UN NUOVO RECORD 

db.posts.insertOne( 

{titolo: 'articolo 1',  

contenuto: 'testo',  

categoria: 'scarpe',  

tags:['rosse','mocassini'],  

data: Date() 

}) 

 

INSERIRE PIU’ RECORD 

db.posts.insertMany( 

[ 

{titolo: 'articolo 3', contenuto: 'testo 3', categoria: 'magliette', tags:['arancio','polo'], data: Date()}, 

{titolo: 'articolo 3', contenuto: 'testo 3', categoria: 'magliette', tags:['arancio','polo'], data: Date()} 

]) 

 

RESTITUIRE TUTTI I DATI 

db.posts.find() 

 

RESTITUIRE UN SOLO DATO 

db.posts.findOne({titolo: “Articolo 1”}) 

 

 

SORTING DEI DATI = ascendente (default) e discendente 

db.posts.find().sort({titolo: -1}) => disc 

 

db.posts.find().sort({titolo: 1}) => asc 

 

 

COUNT di tutti i record 

db.posts.countDocuments() 

 

 

COUNT SU UN CAMPO CON FILTRO 

db.posts.find({categoria: 'scarpe'}).itcount() 

 

 

LIMIT 

db.posts.find().limit(2) 

 

CERCA UN DATO E MOSTRA UN SOLO CAMPO 

db.posts.find({titolo: 'articolo 2'}, {contenuto:1}) 

 

 

MODIFICA DI UN record 

db.posts.updateOne({ titolo: 'articolo 1' }, 

{ 

  $set: { 

    contenuto: 'Body for post 2', 

    categoria: 'Technology' 

  } 

}) 

{ 

 

MODIFICA DI PIU’ RECORD 

db.posts.updateMany({ titolo: 'articolo 1' }, 

{ 

  $set: { 

    contenuto: 'Body for post 4', 

    categoria: 'fantasy' 

  } 

}) 

 

 
CANCELLAZIONE DI UN RECORD 

db.posts.deleteOne({titolo:"articolo 4"}) 

 

CANCELLAZIONE DI PIU’ RECORD 

db.posts.deleteMany({titolo:"articolo 34"}) 

 

 

 
 

 
 


 


 

 


 


 
