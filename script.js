



let x1 , x , y ,y1 
do {
    x1 = +prompt('Sonni kriting : ')
    while(isNaN(x1) || x1 == 0){
        x1 = +prompt('Sonni boshqattan kriting :')
    }
    y = +prompt ('Sonning darajasini kriting : ')
    while(isNaN(y) || y == 0){
        y = +prompt('Darajani boshqattan kriting : ')
    }
    
    y1=2
    for(x=x1;y>=y1;y1++){
    
        x=x*x1
    
    }
    
    alert(x)
        
} while (true);
